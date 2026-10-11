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
    problem: "My website looks old, loads slowly, and hasn't brought in a single inquiry in months.",
    fix: "We design and build a fast, modern website and brand around one job: turning visitors into inquiries. Every page, button and word is placed on purpose, not decoration.",
    service: "digital-presence",
  },
  {
    problem: "I spend real money on Google and Meta ads every month, but I can't tell you what it actually sold.",
    fix: "We set up tracking before we spend a single dollar, so every campaign reports back in leads and sales, not just clicks and impressions.",
    service: "marketing-growth",
  },
  {
    problem: "My developer blames the design, my marketer blames the website, and nobody owns the result.",
    fix: "We plan the technology and the growth side together from day one, with one team and one weekly report, so there is always exactly one number that matters: results.",
    service: "it-strategy-consulting",
  },
];

// A short, brandable name for the 5-step process below. Shown in the "How we work" film.
export const PROCESS_NAME = "The Build → Grow Method";

export const PROCESS = [
  { n: "01", title: "Discover", text: "We learn your business, your customers and what success looks like for you.", when: "Day 1" },
  { n: "02", title: "Strategy", text: "You get a clear plan with scope, timeline and a fixed price.", when: "Day 3" },
  { n: "03", title: "Design & Build", text: "Our team designs and develops your website or app, with full visibility of progress.", when: "Weeks 1 to 6" },
  { n: "04", title: "Launch", text: "We test everything on real devices and set it live with analytics and tracking.", when: "Launch day" },
  { n: "05", title: "Grow", text: "The same team continues to help you grow with SEO, ads and content, so the results keep moving after launch.", when: "Every month" },
];

export const WHY = [
  { icon: "user", title: "Senior people on the work", text: "Experienced engineers, designers and marketers lead every engagement. You're not paying for juniors to learn on your project." },
  { icon: "handshake", title: "One team, not five vendors", text: "Your product, website, infrastructure and campaigns are planned together, so they pull in the same direction." },
  { icon: "chart", title: "Measured, not assumed", text: "We agree the numbers that matter at the start, such as leads, cost per acquisition, uptime and release speed, and report on them every month." },
  { icon: "rocket", title: "Built for the next stage", text: "We design for where you're heading, not only where you are, so growth doesn't force a rebuild." },
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
    text: "An ongoing team devoted to your account every month: marketing, content, support or a mix. Scale the scope up or down as your needs change.",
    bestFor: ["SEO, ads, content and social media", "Managed support and maintenance", "Businesses that want one steady, accountable team"],
    popular: true,
  },
  {
    tag: "Model C",
    title: "Dedicated Pod / Staff Augmentation",
    text: "A small team, or individual engineers, who work only on your roadmap, directed by you day to day, or by our delivery manager.",
    bestFor: ["Start-ups and products scaling fast", "Long-running products that need steady capacity", "Teams that need extra engineers without a long hiring process"],
    popular: false,
  },
];

export const INDUSTRIES = [
  { icon: "hospital", title: "Healthcare", text: "Clinics, hospitals and labs: booking systems and marketing that patients actually trust." },
  { icon: "cart", title: "E-commerce", text: "Online stores and direct-to-consumer brands: built to convert, then grown with SEO and performance ads." },
  { icon: "home", title: "Real Estate", text: "Developers, agents and project launches: lead generation that fills showing calendars." },
  { icon: "school", title: "Education", text: "Schools, colleges and EdTech: admissions platforms and local search that fills seats." },
  { icon: "laptop", title: "SaaS & Startups", text: "From first MVP to scale-up: product, growth and everything a funding round will ask about." },
  { icon: "factory", title: "Manufacturing", text: "B2B exporters and factories: credible web presence for buyers who check you out online first." },
  { icon: "bag", title: "Retail", text: "Stores, chains and franchises: one brand system that works the same in every location." },
  { icon: "hotel", title: "Hotels & Travel", text: "Hotels, tours and restaurants: direct bookings that don't hand your margin to a booking site." },
  { icon: "coins", title: "Finance", text: "Accounting firms, lenders and insurance: the trust signals compliance-minded customers look for first." },
];

export const TESTIMONIALS = [
  { quote: "Our old website gave us zero inquiries for almost a year. KarmaHubAI rebuilt it from scratch and ran our Google Ads. We now get 30+ genuine calls every week, and we can see exactly which keyword brought each one in.", name: "Priya Mehta", role: "Director, UrbanNest Realty", initials: "PM" },
  { quote: "The weekly report is honestly my favorite part of working with them. I always know exactly where my ad budget is going and what it brought back, no more guessing, no more waiting for a monthly call to find out.", name: "Arjun Kapoor", role: "Owner, ShopKart", initials: "AK" },
  { quote: "They built our booking app on time and on the budget we agreed in writing, with zero scope creep. One project manager, always reachable on WhatsApp, who actually understood our clinic's workflow. Very easy to work with.", name: "Neha Joshi", role: "COO, EduPrime", initials: "NJ" },
  { quote: "We tried three agencies before KarmaHubAI, and all three optimized for vanity metrics like followers, likes and impressions. KarmaHubAI is the first one that tied every dollar we spent back to an actual sale.", name: "Vikram Shah", role: "Founder, FreshMart", initials: "VS" },
];

export const VIDEO_TESTIMONIAL = {
  quote: "They handled our website and our ads together, as one plan instead of two disconnected vendors. Our leads doubled in three months, and for the first time we could actually see why.",
  name: "Rahul S.",
  role: "Founder, Nova Health",
  duration: "1:24",
};

export const STACK = [
  { group: "Website & app", items: ["React", "Next.js", "Node.js", "Flutter", "WordPress", "Python", "Laravel"] },
  { group: "Cloud", items: ["AWS", "Google Cloud", "Docker"] },
  { group: "Marketing", items: ["Google Ads", "Meta Ads", "Google Analytics 4", "Search Console", "HubSpot", "SEMrush", "WhatsApp API"] },
  { group: "AI", items: ["Chatbots & assistants", "AI agents", "Voice agents", "Workflow automation", "Lead qualification"] },
];

export const BADGES = [
  { mark: "G", title: "Google Partner", text: "Certified to plan and run Google Ads" },
  { mark: "M", title: "Meta Business Partner", text: "Verified for Facebook and Instagram ads" },
  { mark: "C", title: "Clutch", text: "Independently reviewed, top-rated agency" },
  { mark: "GF", title: "GoodFirms", text: "Verified and background-checked agency" },
  { mark: "U", title: "MSME / Udyam", text: "Registered micro, small and medium enterprise" },
  { mark: "LLP", title: "Registered LLP", text: "Registered and in good standing" },
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
    excerpt: "Neither is \"better\". They solve different problems on different timelines. Here's how to decide which one your business needs first.",
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
  { q: "Do you work with start-ups and established companies?", a: "Both. Start-ups usually begin with strategy, an MVP and a launch plan. Established businesses usually begin with a specific need, such as a new application, a marketing program or ongoing support, and add services over time." },
  { q: "What does US-based versus outsourced mean in practice?", a: "US-based means your team works from the United States, in your time zone. Outsourced means an offshore team does the delivery work under a US lead. Most clients blend the two." },
  { q: "How do you handle the time difference?", a: "Your US lead is available during your working day. When an offshore team is involved, you brief them at the end of your day and review progress when you return." },
  { q: "Can I start with just one service?", a: "Yes. Many clients start with a single project, such as a website, an app or an SEO program, and add services as needs grow. Nothing requires you to buy the whole stack." },
  { q: "Who owns the code, designs and content?", a: "[Confirm your IP and contract terms before publishing this answer.]" },
  { q: "How is pricing structured?", a: "We work as fixed-scope projects, monthly retainers or dedicated team subscriptions, depending on the service. [Add your pricing ranges or starting points.]" },
  { q: "Can you support systems you didn't build?", a: "Yes. We begin with an assessment of what's in place, then take over support, fix what's fragile and plan improvements in priority order." },
];

/* =========================================================
   Press / media mentions. Shown as a "Featured in" strip next
   to the certifications, but ONLY once this list is non-empty.
   Add a real mention only after it genuinely happens, never
   invent logos. Example once you have one:
   { name: "YourStory", mark: "YS" },
   ========================================================= */
export const PRESS: { name: string; mark: string }[] = [];
