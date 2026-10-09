/* =========================================================
   GOPANI — page interactions (ported from the original js/main.js).
   initSite() wires everything up and returns a cleanup function,
   so it is safe to run inside a React effect.
   ========================================================= */
import { CONFIG } from "@/config/site";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

export function waLink(text = CONFIG.whatsappMessage) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function initSite() {
  const ac = new AbortController();
  const on = (el, type, fn, opts = {}) => el?.addEventListener(type, fn, { ...opts, signal: ac.signal });
  const timers = new Set();
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.add(t); return t; };
  const intervals = new Set();
  const every = (fn, ms) => { const t = setInterval(fn, ms); intervals.add(t); return t; };
  const observers = [];
  let rafId = 0;

  if (location.search.includes("static")) document.documentElement.classList.add("static");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;

  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = later(() => t.classList.remove("show"), 3500);
  }

  /* Contact details everywhere */
  $$("[data-wa]").forEach(a => (a.href = waLink()));
  $$("[data-phone]").forEach(a => (a.href = "tel:" + CONFIG.phone.replace(/\s/g, "")));
  $$("[data-email]").forEach(a => (a.href = "mailto:" + CONFIG.email));
  $$("[data-phone-text]").forEach(s => (s.textContent = CONFIG.phone));
  $$("[data-email-text]").forEach(s => (s.textContent = CONFIG.email));
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Preloader */
  const hidePre = () => $("#preloader")?.classList.add("hide");
  if (document.readyState === "complete") later(hidePre, reduceMotion ? 0 : 900);
  else on(window, "load", () => later(hidePre, reduceMotion ? 0 : 900));
  later(hidePre, 3000); // safety: never let the preloader block the page

  /* 01 · Announcement bar */
  const announce = $("#announce");
  try {
    if (sessionStorage.getItem("gopani-announce-closed")) announce?.classList.add("closed");
  } catch {}
  on($("#announceClose"), "click", () => {
    announce.classList.add("closed");
    try { sessionStorage.setItem("gopani-announce-closed", "1"); } catch {}
  });

  /* Scroll: progress bar, sticky nav, back-to-top, mobile CTA */
  const nav = $("#nav");
  const progress = $("#progress");
  const toTop = $("#toTop");
  const mobileCta = $("#mobileCta");
  const contact = $("#contact");
  function onScroll() {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    nav?.classList.toggle("scrolled", y > 20);
    toTop?.classList.toggle("show", y > 800);
    if (mobileCta && contact) {
      const r = contact.getBoundingClientRect();
      const inContact = r.top < innerHeight && r.bottom > 0;
      mobileCta.classList.toggle("show", y > 600 && !inContact);
    }
  }
  on(window, "scroll", onScroll, { passive: true });
  onScroll();
  on(toTop, "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* 02 · Mobile menu + mega menu */
  const burger = $("#burger");
  const mobileMenu = $("#mobileMenu");
  function closeMenu() {
    burger?.classList.remove("active");
    mobileMenu?.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  on(burger, "click", () => {
    const open = !mobileMenu.classList.contains("open");
    burger.classList.toggle("active", open);
    mobileMenu.classList.toggle("open", open);
    document.body.classList.toggle("no-scroll", open);
  });
  $$("#mobileMenu a").forEach(a => on(a, "click", closeMenu));

  const mega = $(".has-mega");
  on(mega?.querySelector("button"), "click", e => {
    e.stopPropagation();
    mega.classList.toggle("open");
  });
  on(document, "click", () => mega?.classList.remove("open"));
  on(document, "keydown", e => {
    if (e.key === "Escape") { mega?.classList.remove("open"); closeMenu(); closeModal(); }
  });

  /* Scroll reveal */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  observers.push(io);
  $$(".reveal, [data-split], #timeline").forEach(el => io.observe(el));

  /* 03 · Hero rotating word */
  const words = ["businesses.", "websites.", "mobile apps.", "brands.", "sales."];
  const rotator = $("#rotator");
  if (rotator && !reduceMotion) {
    let i = 0;
    every(() => {
      const current = rotator.querySelector(".word");
      current?.classList.add("out");
      later(() => {
        i = (i + 1) % words.length;
        const w = rotator.querySelector(".word");
        if (!w) return;
        w.textContent = words[i];
        w.classList.remove("out", "in");
        void w.offsetWidth; // restart the enter animation
        w.classList.add("in");
      }, 420);
    }, 2800);
  }

  /* Hero 3D tilt on mouse move */
  const heroVisual = $("#heroVisual");
  const mockWrap = $("#mockWrap");
  if (heroVisual && mockWrap && !isTouch && !reduceMotion) {
    on(heroVisual, "mousemove", e => {
      const r = heroVisual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mockWrap.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
    });
    on(heroVisual, "mouseleave", () => (mockWrap.style.transform = ""));
  }

  /* Cursor glow */
  const glow = $("#cursor-glow");
  if (glow && !isTouch && !reduceMotion) {
    let gx = 0, gy = 0, cx = 0, cy = 0;
    on(window, "mousemove", e => { gx = e.clientX; gy = e.clientY; }, { passive: true });
    (function loop() {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      rafId = requestAnimationFrame(loop);
    })();
  }

  /* Magnetic buttons */
  if (!isTouch && !reduceMotion) {
    $$(".magnetic").forEach(btn => {
      on(btn, "mousemove", e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      on(btn, "mouseleave", () => (btn.style.transform = ""));
    });
  }

  /* 06 · Services tabs */
  const tabs = $$(".tab");
  const tabInd = $("#tabInd");
  function moveIndicator(tab) {
    if (!tabInd || !tab) return;
    tabInd.style.width = tab.offsetWidth + "px";
    tabInd.style.left = tab.offsetLeft + "px";
  }
  function setTab(name) {
    tabs.forEach(t => {
      const active = t.dataset.target === name;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
      if (active) moveIndicator(t);
    });
    $$(".tab-panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + name));
  }
  tabs.forEach(t => on(t, "click", () => setTab(t.dataset.target)));
  on(window, "resize", () => moveIndicator($(".tab.active")));
  on(window, "load", () => moveIndicator($(".tab.active")));
  moveIndicator($(".tab.active"));
  later(() => moveIndicator($(".tab.active")), 300); // after web font swap
  $$("[data-tab]").forEach(a => on(a, "click", () => { setTab(a.dataset.tab); mega?.classList.remove("open"); }));

  /* Spotlight effect on service cards */
  $$(".svc").forEach(card => {
    on(card, "mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  /* 08 · Animated counters */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
    const dur = 1800;
    const start = performance.now();
    (function step(now) {
      if (ac.signal.aborted) return;
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = prefix + Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { animateCount(en.target); countIO.unobserve(en.target); }
    });
  }, { threshold: 0.5 });
  observers.push(countIO);
  $$("[data-count]").forEach(el => countIO.observe(el));

  /* 12 · Testimonial slider */
  const slides = $$(".slide");
  const dotsWrap = $("#dots");
  let cur = 0, autoplay;
  function goTo(n) {
    if (!slides.length) return;
    slides[cur].classList.remove("active");
    dotsWrap.children[cur]?.classList.remove("active");
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add("active");
    dotsWrap.children[cur]?.classList.add("active");
  }
  function startAuto() {
    clearInterval(autoplay);
    intervals.delete(autoplay);
    if (!reduceMotion) autoplay = every(() => goTo(cur + 1), 5500);
  }
  if (slides.length && dotsWrap) {
    dotsWrap.replaceChildren();
    slides.forEach((_, i) => {
      const d = document.createElement("button");
      d.setAttribute("aria-label", "Go to review " + (i + 1));
      if (i === 0) d.classList.add("active");
      on(d, "click", () => { goTo(i); startAuto(); });
      dotsWrap.appendChild(d);
    });
    on($("#prev"), "click", () => { goTo(cur - 1); startAuto(); });
    on($("#next"), "click", () => { goTo(cur + 1); startAuto(); });
    const slider = $("#slider");
    on(slider, "mouseenter", () => clearInterval(autoplay));
    on(slider, "mouseleave", startAuto);
    let sx = 0;
    on(slider, "touchstart", e => (sx = e.touches[0].clientX), { passive: true });
    on(slider, "touchend", e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) { goTo(cur + (dx < 0 ? 1 : -1)); startAuto(); }
    });
    startAuto();
  }

  /* Video modal */
  const modal = $("#videoModal");
  const slot = $("#videoSlot");
  const slotDefault = slot?.innerHTML;
  function openModal() {
    if (!modal) return;
    if (CONFIG.videoId) {
      slot.innerHTML = `<iframe width="100%" height="100%" style="position:absolute;inset:0;border:0" src="https://www.youtube.com/embed/${CONFIG.videoId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen title="Client video testimonial"></iframe>`;
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (CONFIG.videoId) slot.innerHTML = slotDefault;
  }
  on($("#videoCard"), "click", openModal);
  on($("#videoCard"), "keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(); } });
  on($("#modalClose"), "click", closeModal);
  on(modal, "click", e => { if (e.target === modal) closeModal(); });

  /* 18 · FAQ accordion */
  $$(".faq-q").forEach(q => {
    on(q, "click", () => {
      const item = q.parentElement;
      const open = !item.classList.contains("open");
      $$(".faq-item.open").forEach(i => { i.classList.remove("open"); i.querySelector(".faq-q").setAttribute("aria-expanded", "false"); });
      item.classList.toggle("open", open);
      q.setAttribute("aria-expanded", String(open));
    });
  });
  $(".faq-item")?.classList.add("open");
  $(".faq-item .faq-q")?.setAttribute("aria-expanded", "true");

  /* Forms */
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const phoneOk = v => v.replace(/[^\d]/g, "").length >= 10;
  async function sendForm(data) {
    if (!CONFIG.formEndpoint) return true;
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      return res.ok;
    } catch {
      return false;
    }
  }
  function setLoading(btn, loading) {
    btn.classList.toggle("loading", loading);
    btn.disabled = loading;
  }

  /* 19 · Contact form */
  const contactForm = $("#contactForm");
  on(contactForm, "submit", async e => {
    e.preventDefault();
    const f = contactForm;
    const checks = [[f.name, v => v.trim().length >= 2], [f.phone, phoneOk], [f.email, emailOk]];
    let valid = true;
    checks.forEach(([input, test]) => {
      const ok = test(input.value);
      input.closest(".field").classList.toggle("error", !ok);
      if (!ok && valid) { input.focus(); valid = false; }
    });
    if (!valid) return;

    const services = $$('input[name="service"]:checked', f).map(c => c.value);
    const data = {
      form: "Contact",
      name: f.name.value.trim(),
      phone: f.phone.value.trim(),
      email: f.email.value.trim(),
      services: services.join(", ") || "Not selected",
      budget: f.budget.value || "Not selected",
      message: f.message.value.trim(),
    };
    const btn = $("button[type=submit]", f);
    setLoading(btn, true);
    const ok = await sendForm(data);
    setLoading(btn, false);
    if (!ok) { toast("⚠️ Couldn't send. Please try WhatsApp instead."); return; }

    // Without a form service, also open WhatsApp with the details so the lead is never lost
    if (!CONFIG.formEndpoint) {
      const msg = `New enquiry from website\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nNeeds: ${data.services}\nBudget: ${data.budget}\n\n${data.message}`;
      window.open(waLink(msg), "_blank", "noopener");
    }
    try { sessionStorage.setItem("gopani-name", data.name.split(" ")[0]); } catch {}
    window.location.assign("/thank-you"); // full load so the page starts fresh
  });
  $$("#contactForm input").forEach(i => on(i, "input", () => i.closest(".field")?.classList.remove("error")));

  /* 16 · Audit form */
  const auditForm = $("#auditForm");
  on(auditForm, "submit", async e => {
    e.preventDefault();
    const site = auditForm.website.value.trim();
    const mail = auditForm.email.value.trim();
    if (site.length < 4) { auditForm.website.focus(); toast("Please enter your website"); return; }
    if (!emailOk(mail)) { auditForm.email.focus(); toast("Please enter a valid email"); return; }
    const btn = $("button", auditForm);
    setLoading(btn, true);
    const ok = await sendForm({ form: "Free Audit", website: site, email: mail });
    setLoading(btn, false);
    if (!ok) { toast("⚠️ Couldn't send. Please try WhatsApp instead."); return; }
    auditForm.reset();
    toast("🎉 Done! Your free audit will reach your inbox within 48 hours.");
  });

  /* 20 · Newsletter */
  const newsForm = $("#newsForm");
  on(newsForm, "submit", async e => {
    e.preventDefault();
    const input = $("input", newsForm);
    if (!emailOk(input.value)) { toast("Please enter a valid email"); input.focus(); return; }
    await sendForm({ form: "Newsletter", email: input.value.trim() });
    newsForm.reset();
    toast("✅ Subscribed! Thanks for joining.");
  });

  return () => {
    ac.abort();
    timers.forEach(clearTimeout);
    intervals.forEach(clearInterval);
    observers.forEach(o => o.disconnect());
    cancelAnimationFrame(rafId);
    document.body.classList.remove("no-scroll");
  };
}
