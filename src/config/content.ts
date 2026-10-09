/* =========================================================
   Homepage content. Everything here is SAMPLE copy that follows
   the website plan. Replace names, numbers and quotes with real ones.
   ========================================================= */

export const CLIENTS = [
  { name: "Nova Health", mark: "N" },
  { name: "UrbanNest", mark: "U" },
  { name: "ShopKart", mark: "S" },
  { name: "EduPrime", mark: "E" },
  { name: "FinEdge", mark: "F" },
  { name: "TravelBee", mark: "T" },
  { name: "FreshMart", mark: "FM" },
  { name: "CloudLabs", mark: "C" },
];

export const PROBLEMS = [
  {
    problem: "My website looks old, loads slowly, and hasn't brought in a single enquiry in months.",
    fix: "We design and build a fast, modern website and brand around one job: turning visitors into enquiries. Every page, button and word is placed on purpose, not decoration.",
    service: "digital-presence",
  },
  {
    problem: "I spend real money on Google and Meta ads every month, but I can't tell you what it actually sold.",
    fix: "We set up tracking before we spend a single rupee, so every campaign reports back in leads and sales, not just clicks and impressions.",
    service: "marketing-growth",
  },
  {
    problem: "My developer blames the design, my marketer blames the website, and nobody owns the result.",
    fix: "We plan the technology and the growth side together from day one, with one team and one weekly report, so there is always exactly one number that matters: results.",
    service: "it-strategy-consulting",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  type: "Build" | "Grow" | "Build + Grow";
  results: { value: string; label: string }[];
  summary: string;
  tone: "blue" | "ink" | "orange" | "teal";
  image: string;
  problem: string;
  whatWeDid: string[];
  quote: { text: string; name: string; role: string };
  tech: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "shopkart",
    client: "ShopKart",
    industry: "E-commerce",
    type: "Build + Grow",
    results: [
      { value: "+240%", label: "organic traffic" },
      { value: "3.2x", label: "return on ad spend" },
      { value: "6 months", label: "store to sell-out" },
    ],
    summary: "ShopKart came to us with a slow, dated online store and zero organic traffic. We rebuilt it on Shopify, fixed the technical SEO, and ran Meta ads tuned to actual purchases instead of add-to-carts. Sales tripled within six months, and organic search is now their single biggest source of orders.",
    tone: "blue",
    image: "/images/case-ecommerce.jpg",
    problem: "ShopKart's old store took over 6 seconds to load on mobile, ranked nowhere on Google, and their only marketing was boosted Instagram posts with no real tracking. They were spending money every month with no way to tell what, if anything, it was bringing back.",
    whatWeDid: [
      "Rebuilt the storefront on Shopify, cutting load time from 6s to under 1.5s",
      "Fixed technical SEO issues and wrote category/product copy around real search terms",
      "Set up Meta conversion tracking tied to actual purchases, not add-to-carts",
      "Rebuilt ad campaigns around products that were already converting organically",
    ],
    quote: { text: "Our old website gave us zero enquiries for almost a year. GOPANI rebuilt it from scratch and ran our ads — we now get 30+ genuine calls every week.", name: "Priya Mehta", role: "Director, UrbanNest Realty" },
    tech: ["Shopify", "Meta Ads", "Google Analytics 4", "Search Console"],
  },
  {
    slug: "nova-health",
    client: "Nova Health",
    industry: "Healthcare",
    type: "Build",
    results: [
      { value: "12K+", label: "app downloads" },
      { value: "4.8★", label: "Play Store rating" },
      { value: "-31%", label: "missed appointments" },
    ],
    summary: "Nova Health was losing patients to missed calls and paper appointment books. We built a booking app with reminders, online payments and a simple clinic dashboard their front desk actually enjoys using — missed appointments dropped by nearly a third in the first quarter.",
    tone: "teal",
    image: "/images/case-healthcare.jpg",
    problem: "Nova Health ran three clinics on a shared paper appointment book and a landline that rang out half the time. Patients who couldn't get through just booked elsewhere, and nobody at the clinic could say how many appointments were missed each week, let alone why.",
    whatWeDid: [
      "Designed a booking flow a first-time patient could complete in under a minute",
      "Built the app in Flutter for both Android and iOS from one codebase",
      "Added automatic SMS and WhatsApp reminders 24 hours before each appointment",
      "Built a simple front-desk dashboard the clinic staff could run without training",
    ],
    quote: { text: "They handled our website and ads together. Leads doubled in three months.", name: "Rahul S.", role: "Founder, Nova Health" },
    tech: ["Flutter", "Node.js", "AWS", "WhatsApp API"],
  },
  {
    slug: "urbannest",
    client: "UrbanNest",
    industry: "Real estate",
    type: "Grow",
    results: [
      { value: "-58%", label: "cost per lead" },
      { value: "900+", label: "leads per month" },
      { value: "4.5x", label: "site visits booked" },
    ],
    summary: "UrbanNest had decent ad spend but a leaky funnel — leads came in and went cold. We rebuilt their Google and Meta campaigns around qualified intent, then connected every form to an instant WhatsApp follow-up sequence. Cost per lead fell by more than half while volume climbed.",
    tone: "orange",
    image: "/images/case-realestate.jpg",
    problem: "UrbanNest was spending a serious monthly ad budget, but their sales team said most leads simply never picked up the phone when called a day later. By the time anyone followed up, the buyer had already spoken to three other brokers.",
    whatWeDid: [
      "Rebuilt campaign targeting around buyers actively searching, not broad awareness",
      "Replaced the generic contact form with a shorter, project-specific enquiry form",
      "Connected every form submission to an instant automated WhatsApp reply",
      "Set up a weekly dashboard showing cost per lead and site visits booked, by project",
    ],
    quote: { text: "Our leads doubled in three months, and for the first time we could actually see why.", name: "Arjun Kapoor", role: "Owner, ShopKart" },
    tech: ["Google Ads", "Meta Ads", "WhatsApp API", "Looker Studio"],
  },
  {
    slug: "eduprime",
    client: "EduPrime",
    industry: "Education",
    type: "Build + Grow",
    results: [
      { value: "2.4x", label: "admission enquiries" },
      { value: "#1", label: "on Google in the city" },
      { value: "3", label: "campuses, one platform" },
    ],
    summary: "EduPrime needed one website that could serve three campuses without three separate budgets. We built a shared platform with a student portal, then ran local SEO for each campus individually — admission enquiries more than doubled ahead of the next intake.",
    tone: "ink",
    image: "/images/case-education.jpg",
    problem: "EduPrime had three separate campus websites built at three different times by three different vendors — none of them ranked locally, none of them talked to each other, and updating a single fee structure meant editing three sites by hand.",
    whatWeDid: [
      "Built one platform with a campus-specific page for each location",
      "Added a student portal for admissions status and fee payments",
      "Ran separate local SEO and Google Business Profiles per campus",
      "Centralised content so one edit updates all three campus pages correctly",
    ],
    quote: { text: "They built our app on time and on budget. One project manager, always on WhatsApp. Very easy to work with.", name: "Neha Joshi", role: "COO, EduPrime" },
    tech: ["Next.js", "Node.js", "Google Business Profile", "Search Console"],
  },
];

// A short, brandable name for the 5-step process below. Shown in the "How we work" film.
export const PROCESS_NAME = "The Build → Grow Method";

export const PROCESS = [
  { n: "01", title: "Discover", text: "A free, no-pressure call where we learn your business, your customers and what success actually looks like for you — not a sales pitch.", when: "Day 1" },
  { n: "02", title: "Strategy", text: "You get a clear written plan: what we'll build, how we'll market it, a realistic timeline and one fixed price. No vague scopes, no surprise invoices later.", when: "Day 3" },
  { n: "03", title: "Design & Build", text: "Our designers and developers work side by side, not in handoff silos. You see real, working progress every single week — never a surprise reveal at the end.", when: "Week 1–6" },
  { n: "04", title: "Launch", text: "Your website or app goes live fully tested on real devices, with analytics, tracking and search tools switched on from day one, not added as an afterthought.", when: "Launch day" },
  { n: "05", title: "Grow", text: "The same team that built it now grows it — SEO, ads and content, reported in plain language every month, so the numbers keep moving after launch day.", when: "Every month" },
];

export const WHY = [
  { icon: "handshake", title: "Tech + marketing under one roof", text: "Most businesses hire one agency to build the website and another to market it — then spend half their time translating between the two. We do both, so nothing gets lost in the handoff and nobody can blame the other team." },
  { icon: "user", title: "A dedicated project manager", text: "You get one named person who knows your project, answers your WhatsApp directly, and is accountable for the result. Not a rotating support ticket queue, not a different account manager every quarter." },
  { icon: "chart", title: "Weekly reports and a live dashboard", text: "Every Friday you get a short, plain-English report: what we did, what it cost, and what it brought back. A live dashboard means you're never waiting for month-end to find out how things are going." },
  { icon: "key", title: "You own everything, always", text: "Your domain, hosting, source code, ad accounts and customer data are registered in your name from day one. If we ever part ways, you walk away with everything — nothing is held hostage." },
];

export const COMPARE: { label: string; agency: string; us: string }[] = [
  { label: "Builds your website or app", agency: "yes", us: "yes" },
  { label: "Runs your marketing too", agency: "no", us: "yes" },
  { label: "Weekly reports", agency: "no", us: "yes" },
  { label: "You own the code and ad accounts", agency: "sometimes", us: "always" },
  { label: "One point of contact", agency: "no", us: "yes" },
  { label: "No long lock-in contract", agency: "no", us: "yes" },
  { label: "A written quote before any work starts", agency: "sometimes", us: "always" },
  { label: "Real founders you can actually meet", agency: "no", us: "yes" },
  { label: "Registered LLP, LLPIN and GST shown", agency: "sometimes", us: "always" },
  { label: "Optimised to be found on ChatGPT / AI search", agency: "no", us: "yes" },
];

export const DELIVERY_MODELS = [
  {
    tag: "Model A",
    title: "Fixed-Scope Project",
    text: "One deliverable, one written scope and one price, agreed before work starts. You know exactly what you're getting, and when.",
    bestFor: ["A new website, app or infrastructure build", "A one-time strategy, audit or brand engagement", "Teams who want a clear start and a clear end"],
    popular: false,
  },
  {
    tag: "Model B · Most flexible",
    title: "Monthly Retainer",
    text: "An ongoing team devoted to your account every month — marketing, content, support or a mix. Scale the scope up or down as your needs change.",
    bestFor: ["SEO, ads, content and social media", "Managed support and maintenance", "Businesses that want one steady, accountable team"],
    popular: true,
  },
  {
    tag: "Model C",
    title: "Dedicated Pod / Staff Augmentation",
    text: "A small team, or individual engineers, who work only on your roadmap — directed by you day to day, or by our delivery manager.",
    bestFor: ["Start-ups and products scaling fast", "Long-running products that need steady capacity", "Teams that need extra engineers without a long hiring process"],
    popular: false,
  },
];

export const INDUSTRIES = [
  { icon: "hospital", title: "Healthcare", text: "Clinics, hospitals and labs — booking systems and marketing that patients actually trust." },
  { icon: "cart", title: "E-commerce", text: "Online stores and D2C brands — built to convert, then grown with SEO and performance ads." },
  { icon: "home", title: "Real Estate", text: "Builders, brokers and project launches — lead generation that fills site-visit calendars." },
  { icon: "school", title: "Education", text: "Schools, colleges and ed-tech — admissions platforms and local search that fills seats." },
  { icon: "laptop", title: "SaaS & Startups", text: "From first MVP to scale-up — product, growth and everything a funding round will ask about." },
  { icon: "factory", title: "Manufacturing", text: "B2B exporters and factories — credible web presence for buyers who check you out online first." },
  { icon: "bag", title: "Retail", text: "Shops, chains and franchises — one brand system that works the same in every location." },
  { icon: "hotel", title: "Hotels & Travel", text: "Hotels, tours and restaurants — direct bookings that don't hand your margin to an OTA." },
  { icon: "coins", title: "Finance", text: "CA firms, NBFCs and insurance — the trust signals compliance-minded customers look for first." },
];

export const TESTIMONIALS = [
  { quote: "Our old website gave us zero enquiries for almost a year. GOPANI rebuilt it from scratch and ran our Google Ads — we now get 30+ genuine calls every week, and we can see exactly which keyword brought each one in.", name: "Priya Mehta", role: "Director, UrbanNest Realty", initials: "PM" },
  { quote: "The weekly report is honestly my favourite part of working with them. I always know exactly where my ad budget is going and what it brought back — no more guessing, no more waiting for a monthly call to find out.", name: "Arjun Kapoor", role: "Owner, ShopKart", initials: "AK" },
  { quote: "They built our booking app on time and on the budget we agreed in writing, with zero scope creep. One project manager, always reachable on WhatsApp, who actually understood our clinic's workflow. Very easy to work with.", name: "Neha Joshi", role: "COO, EduPrime", initials: "NJ" },
  { quote: "We tried three agencies before GOPANI, and all three optimised for vanity metrics — followers, likes, impressions. GOPANI is the first one that tied every rupee we spent back to an actual sale.", name: "Vikram Shah", role: "Founder, FreshMart", initials: "VS" },
];

export const VIDEO_TESTIMONIAL = {
  quote: "They handled our website and our ads together, as one plan instead of two disconnected vendors. Our leads doubled in three months, and for the first time we could actually see why.",
  name: "Rahul S.",
  role: "Founder, Nova Health",
  duration: "1:24",
};

export const STACK = [
  { group: "Website & app", items: ["React", "Next.js", "Node.js", "Flutter", "WordPress", "Shopify", "Python", "Laravel"] },
  { group: "Cloud", items: ["AWS", "Google Cloud", "Vercel", "Docker"] },
  { group: "Marketing", items: ["Google Ads", "Meta Ads", "Google Analytics 4", "Search Console", "HubSpot", "SEMrush", "WhatsApp API"] },
];

export const BADGES = [
  { mark: "G", title: "Google Partner", text: "Certified to plan and run Google Ads" },
  { mark: "M", title: "Meta Business Partner", text: "Verified for Facebook and Instagram ads" },
  { mark: "C", title: "Clutch", text: "Independently reviewed, top-rated agency" },
  { mark: "GF", title: "GoodFirms", text: "Verified and background-checked agency" },
  { mark: "U", title: "MSME / Udyam", text: "Registered micro, small and medium enterprise" },
  { mark: "LLP", title: "Registered LLP", text: "Incorporated with the Government of India" },
];

export const POSTS = [
  {
    tag: "Strategy",
    title: "Proof of concept vs. production: what's actually different?",
    excerpt: "A working demo and a system that survives real customers are not the same build. Here's what changes between the two, and why skipping the gap gets expensive.",
    read: "5 min read",
    date: "Sep 2026",
    tone: "blue",
  },
  {
    tag: "Marketing",
    title: "SEO vs Google Ads: which one should a small business choose?",
    excerpt: "Neither is \"better\" — they solve different problems on different timelines. Here's how to decide which one your business needs first.",
    read: "7 min read",
    date: "Sep 2026",
    tone: "orange",
  },
  {
    tag: "Growth",
    title: "5 signs your website is losing you customers right now",
    excerpt: "Slow load times and confusing navigation cost more than they look like they do. Five warning signs you can check yourself in the next ten minutes.",
    read: "4 min read",
    date: "Aug 2026",
    tone: "ink",
  },
];

export const FAQS = [
  { q: "How long does a project take?", a: "A website or digital presence refresh takes 3 to 6 weeks. An application or infrastructure project usually takes 8 to 16 weeks, depending on scope. Every timeline is confirmed in writing after a free consultation, before any work starts." },
  { q: "Who owns the code, the domain and the ad accounts?", a: "You do, from the very first day. Your domain, hosting, source code, ad accounts and customer data are all set up and registered in your name. If we ever part ways for any reason, everything stays with you — nothing is held back." },
  { q: "How will I know what work is being done?", a: "You get a weekly written report and a live dashboard, plus a named project manager you can message directly on WhatsApp whenever you have a question. No surprises saved up for a month-end call." },
  { q: "Is there a long contract?", a: "No. Projects are scoped and priced in writing before work starts. Ongoing plans — support, pods or marketing retainers — run with no long lock-in, and you can pause or stop with 30 days' notice." },
  { q: "Do you give support after launch?", a: "Yes. Every project includes free support for bugs and small fixes right after launch, and you can continue on a monthly managed support plan that covers updates, backups, security and small changes." },
  { q: "Do you work with clients outside India?", a: "Yes. We currently work with clients in the US, UK, UAE and Australia, with calls scheduled in your time zone." },
  { q: "Why choose you over a freelancer?", a: "A freelancer gives you one skill and one point of failure — if they're on leave or move on, your project stalls. We give you strategy, engineering and growth as one accountable team, with a backup for every role, and a company that will still be here next year." },
  { q: "Can you help my business show up on ChatGPT or Google AI answers?", a: "Yes — this is folded into our Marketing & Growth service. We write clear, citable content, add proper schema markup, and build the kind of mentions AI tools actually reference, then check every month whether your business is showing up." },
];

/* =========================================================
   Press / media mentions. Shown as a "Featured in" strip next
   to the certifications, but ONLY once this list is non-empty.
   Add a real mention only after it genuinely happens — never
   invent logos. Example once you have one:
   { name: "YourStory", mark: "YS" },
   ========================================================= */
export const PRESS: { name: string; mark: string }[] = [];
