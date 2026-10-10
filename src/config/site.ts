/* =========================================================
   ✏️  EDIT YOUR DETAILS HERE. They update the whole website.
   Anything marked SAMPLE is placeholder content: replace it
   with real figures before going live.
   ========================================================= */
export const CONFIG = {
  name: "KarmahubAI",
  legalName: "KarmahubAI",
  tagline: "We build and grow digital businesses",

  whatsapp: "919999999999", // country code + number, no "+" or spaces
  phone: "+91 99999 99999", // shown on the site
  email: "info@karmahubai.com",
  address: "Piscataway, New Jersey, United States",
  mapUrl: "https://maps.google.com/?q=Piscataway,+New+Jersey", // Google Maps link to the office
  hours: "Mon–Sat, 10:00–19:00 IST",
  whatsappMessage: "Hi KarmahubAI! I'd like to book a free call about my project.",

  // Registration details shown in the footer. Leave blank to hide.
  llpin: "XXX-XXXX", // SAMPLE
  gstin: "", // e.g. 24XXXXXXXXXXXXX

  // Real person in the contact section
  founder: { name: "Your Name", role: "Founder, KarmahubAI", initials: "YN" }, // SAMPLE

  // Proof shown in the hero. SAMPLE values.
  proof: { rating: "4.9", ratingSource: "Google", projects: "100+", brands: "50+" },

  // Stats band. SAMPLE values. `value` is the number counted up to.
  stats: [
    { value: 150, suffix: "+", label: "Projects delivered" },
    { value: 80, suffix: "+", label: "Happy clients" },
    { value: 5, suffix: "+", label: "Years of experience" },
    { value: 2, prefix: "₹", suffix: " Cr+", label: "Ad spend managed" },
  ],

  // Review profile links (leave "" to hide a link)
  reviews: { google: "#", clutch: "#", goodfirms: "#" },

  socials: { linkedin: "#", instagram: "#", facebook: "#", youtube: "#", x: "#" },

  // Announcement bar at the very top. Leave `text` empty to hide it.
  announcement: { text: "Free Website + SEO Audit this month", linkText: "Claim now", href: "/contact" },

  // YouTube video ID for the video testimonial (the part after "v=")
  videoId: "",

  // To receive form messages in your email inbox, create a free form at
  // https://formspree.io (or https://web3forms.com) and paste the URL here.
  // Left empty, forms still work: the contact form opens WhatsApp with the
  // details so you never lose a lead, and the thank-you page is shown.
  formEndpoint: "",
};

export function waLink(text: string = CONFIG.whatsappMessage) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const telHref = `tel:${CONFIG.phone.replace(/[^\d+]/g, "")}`;
export const mailHref = `mailto:${CONFIG.email}`;
