export type ServiceGroup = "build" | "grow";

export type Glance = {
  bestFor: string;
  startingPoint: string;
  delivery: string;
  workWith: string;
};

export type Deliverable = { title: string; text: string };
export type ProcessStep = { title: string; text: string; youGet: string };
export type Outcome = { title: string; text: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  id: string; // slug, used at /services/<id>
  group: ServiceGroup;
  phase: string; // short tag shown as "Service 0X · <phase>"
  icon: string; // key in src/components/site/icons.tsx
  title: string;
  result: string; // one line about the result, shown on the card
  tagline: string;
  description: string;
  glance: Glance;
  problems: string[]; // "Sound familiar?" — the problems this service solves
  deliverables: Deliverable[]; // "What we deliver"
  tools: string[]; // "Typical tools and methods" chips
  process: ProcessStep[]; // "How it works"
  outcomes: Outcome[]; // "What changes for you"
  faqs: ServiceFaq[];
  cta: string;
};

export const GROUPS: Record<ServiceGroup, { label: string; kicker: string; blurb: string }> = {
  build: {
    label: "Build",
    kicker: "Strategy & engineering",
    blurb: "From the first planning call to production-grade software and the team that keeps it running — strategy, applications, infrastructure and support, under one roof.",
  },
  grow: {
    label: "Grow",
    kicker: "Presence & marketing",
    blurb: "A brand, website and content that look like the business you're building, plus the SEO and paid campaigns that turn visits into enquiries.",
  },
};

export const SERVICES: Service[] = [
  /* ---------- BUILD ---------- */
  {
    id: "it-strategy-consulting",
    group: "build",
    phase: "Plan",
    icon: "compass",
    title: "IT Strategy & Consulting",
    result: "A clear, costed plan before you spend a rupee on a build.",
    tagline: "Decide before you build.",
    description:
      "The most expensive technology mistakes are made in the first month: the wrong platform, the wrong scope, the wrong team. We slow that month down just enough to get it right, then hand you a plan your finance lead, your engineers and your investors can all read.",
    glance: {
      bestFor: "Founders and leaders facing a build, buy or modernise decision.",
      startingPoint: "A fixed-scope assessment, scoped in writing before work begins",
      delivery: "Remote-first, with on-site workshops on request",
      workWith: "A strategy lead and a solutions architect",
    },
    problems: [
      "Three vendors have given you three different proposals, and you can't tell which one is right.",
      "Your systems grew by accident and nobody can draw the full picture.",
      "You need a budget and timeline for investors or the board, and you only have a guess.",
      "You're debating build versus buy, or cloud versus staying put, without clear criteria.",
    ],
    deliverables: [
      { title: "Current-state assessment", text: "We map your applications, data, vendors and people, then flag risk, duplication and hidden cost." },
      { title: "Target architecture", text: "A clear picture of where your systems should be in 12 to 24 months, with the reasoning behind each choice." },
      { title: "Build, buy or partner analysis", text: "Options scored side by side on cost, speed, risk and fit, so the decision is documented and defensible." },
      { title: "Roadmap and sequencing", text: "Initiatives ordered by business value and dependency, with owners and milestones." },
      { title: "Budget and resourcing model", text: "Realistic ranges for cost, team and timeline, including what to keep in-house and what to outsource." },
      { title: "Security and compliance review", text: "A gap review against the standards your customers and regulators expect, with a prioritised fix list." },
    ],
    tools: ["Architecture reviews", "Cost modelling", "Vendor scorecards", "Risk registers", "Roadmapping workshops", "Security & compliance readiness"],
    process: [
      { title: "Listen", text: "We interview leadership, product and engineering, and review your documents, contracts and system diagrams.", youGet: "A shared problem statement and a list of constraints." },
      { title: "Assess", text: "We inspect architecture, code health, infrastructure, security and spending wherever access allows.", youGet: "A current-state report with risks ranked." },
      { title: "Design", text: "We model two or three viable futures and test them against budget, timeline and team capacity.", youGet: "A recommended target architecture, plus the alternatives we ruled out and why." },
      { title: "Plan", text: "We sequence the work into phases with costs, owners and decision points.", youGet: "A roadmap, a budget range and a staffing plan." },
      { title: "Present and hand off", text: "We walk your team and stakeholders through the plan, and stay available as it is executed.", youGet: "A final report, an executive summary and an optional advisory retainer." },
    ],
    outcomes: [
      { title: "A decision you can defend", text: "Options are compared on the same criteria, so leadership and investors can see why you chose what you chose." },
      { title: "A budget with reasons", text: "Cost, team and timeline ranges built from your actual environment, not generic estimates." },
      { title: "A plan any team can execute", text: "Sequenced work with owners and milestones, written so it stands on its own." },
    ],
    faqs: [
      { q: "How long does an assessment take?", a: "It depends on the size of your environment. We confirm scope and timeline in writing after the first call, before any work starts." },
      { q: "Do you also build what you recommend?", a: "We can, but you're free to take the plan to another team. The roadmap is written to stand on its own." },
      { q: "Can you act as our outsourced CTO?", a: "Yes. A fractional CTO or advisory retainer gives you senior technical leadership without a full-time hire." },
    ],
    cta: "Discuss your strategy",
  },
  {
    id: "application-development",
    group: "build",
    phase: "Build",
    icon: "code",
    title: "Application Development",
    result: "Web and mobile software you own, built to last.",
    tagline: "Software you own, built to last.",
    description:
      "Off-the-shelf tools stop fitting at some point. We design and build the custom web, mobile and back-office software that does — with clean code, real documentation and automated tests, so you can keep it, extend it or hand it to another team.",
    glance: {
      bestFor: "Companies replacing spreadsheets or legacy tools, and teams turning an idea into a product.",
      startingPoint: "A discovery sprint that ends in a scoped build plan",
      delivery: "An India-based team, working in your time-zone overlap",
      workWith: "A product manager, a designer, engineers and QA",
    },
    problems: [
      "Your team runs on spreadsheets and email chains that break as you grow.",
      "Your legacy system works, but nobody wants to touch it.",
      "Customers are asking for an app or portal you can't deliver yet.",
      "A previous vendor left code that nobody understands.",
    ],
    deliverables: [
      { title: "Web applications and portals", text: "Customer portals, dashboards, workflow tools and SaaS products, built for the browsers and devices your users have." },
      { title: "Mobile apps", text: "iOS and Android apps, native or cross-platform, through to store submission and release." },
      { title: "APIs and integrations", text: "Clean, documented APIs and connections to the payment, CRM, ERP and messaging tools you already use." },
      { title: "Back-office and internal systems", text: "Admin tools, reporting and automation that replace manual work and give staff the right level of access." },
      { title: "Legacy modernisation", text: "Step-by-step migration of old systems to current platforms, running both side by side so operations never stop." },
      { title: "UI/UX design", text: "Research-led flows, wireframes and clickable prototypes, tested with real users before development starts." },
    ],
    tools: ["React", "Next.js", "Node.js", "Flutter", "React Native", "PostgreSQL", "REST & GraphQL"],
    process: [
      { title: "Discover", text: "We run a requirements workshop, map user journeys and agree how success will be measured.", youGet: "A scoped backlog and a priority list." },
      { title: "Design", text: "We produce wireframes, UX flows and visual design, then test a clickable prototype.", youGet: "An approved prototype and a design system." },
      { title: "Build", text: "We work in two-week cycles, each ending with a working demo you can try.", youGet: "Tested features in a staging environment." },
      { title: "Test and harden", text: "We run automated tests, performance and security checks, and support your user acceptance testing.", youGet: "A release candidate and a test report." },
      { title: "Release and hand over", text: "We deploy, set up monitoring, document the system and train your team, with optional ongoing support.", youGet: "A live product, the source code and documentation." },
    ],
    outcomes: [
      { title: "Software shaped to your process", text: "Your workflows drive the design, instead of bending your business around a generic tool." },
      { title: "Code you can keep", text: "Documented, tested code in your own repositories, so you are never locked in." },
      { title: "Faster releases over time", text: "Automated tests and clean structure keep each release quicker than the last." },
    ],
    faqs: [
      { q: "Do we own the source code?", a: "Yes, from day one. Your domain, hosting and repositories are registered in your name, and ownership is written into the contract before work starts." },
      { q: "Can you take over an existing codebase?", a: "Yes. We start with a code and architecture review, then give you an honest view on whether to fix, refactor or rebuild." },
      { q: "Fixed price or an ongoing team?", a: "Both are possible. Well-defined scopes suit a fixed price. Evolving products suit a monthly team arrangement." },
    ],
    cta: "Discuss your software",
  },
  {
    id: "startup-launch",
    group: "build",
    phase: "Launch",
    icon: "rocket",
    title: "Start-up Launch",
    result: "From sketch to live product, brand and all.",
    tagline: "From sketch to live product.",
    description:
      "Early-stage founders don't need five agencies. They need one team that can test the idea, build the first version, put a brand and a website around it and get it in front of customers. That is this programme.",
    glance: {
      bestFor: "First-time and repeat founders going from idea to first customers.",
      startingPoint: "A validation sprint",
      delivery: "A lean team, sized to stretch early funding further",
      workWith: "A venture lead, a product designer, engineers and a marketer",
    },
    problems: [
      "You have an idea but no way to tell whether people will pay for it.",
      "You've been quoted for a large build before validating anything.",
      "You need a product, a website and a launch plan at once, on one small budget.",
      "You're strong on one side, technical or commercial, and missing the other half of the team.",
    ],
    deliverables: [
      { title: "Validation sprint", text: "Customer interviews, a competitor review and a demand test, so you know what to build first." },
      { title: "Product scope and prototype", text: "A clear first-version scope and a clickable prototype to test with users and show investors." },
      { title: "MVP build", text: "A working first version with the features that matter, built to be extended rather than thrown away." },
      { title: "Brand and website", text: "Identity, logo, website and content, so launch day does not look improvised." },
      { title: "Go-to-market plan", text: "Positioning, pricing options, channels and a launch campaign sized to your budget." },
      { title: "Measurement setup", text: "Analytics and feedback loops from day one, so you learn from your first user." },
    ],
    tools: ["Customer interviews", "Prototyping", "MVP development", "Brand identity", "Landing pages", "Analytics", "Launch campaigns"],
    process: [
      { title: "Validate", text: "We test the problem and the audience before you spend on a build.", youGet: "A validation report and a clear go or no-go." },
      { title: "Define", text: "We cut the idea down to the smallest version that proves it.", youGet: "MVP scope, a prototype and a build plan." },
      { title: "Build", text: "We work in short cycles with a demo every week, so you see the product take shape.", youGet: "A working MVP." },
      { title: "Launch", text: "Brand, website, store listings and a campaign go live together.", youGet: "A public launch and a first channel to reach users." },
      { title: "Learn and iterate", text: "We review usage data and customer feedback, then plan the next releases.", youGet: "Findings and prioritised next sprints." },
    ],
    outcomes: [
      { title: "Evidence before big spending", text: "You learn whether people want it before you commit the main budget." },
      { title: "A launched product", text: "Customers can use it, pay for it and tell you what to fix next." },
      { title: "A base you can scale on", text: "The foundation is built to be extended, not replaced at the first sign of growth." },
    ],
    faqs: [
      { q: "Do I need a finished idea?", a: "No. A clear problem and a target customer are enough. The validation sprint sharpens the rest." },
      { q: "Will the MVP need to be rebuilt later?", a: "We build it to be extended. Some parts may be replaced as you learn, but the foundation is meant to carry you to scale." },
      { q: "Can you work with my developer or co-founder?", a: "Yes. We can lead the build, or fill gaps alongside the people you already have." },
    ],
    cta: "Plan your launch",
  },
  {
    id: "poc-to-scale",
    group: "build",
    phase: "Scale",
    icon: "server",
    title: "POC to Scalable Infrastructure",
    result: "Prove it works, then make it hold under real traffic.",
    tagline: "Prove it works. Then make it hold.",
    description:
      "A proof of concept answers one question: will this work? Production asks harder ones. What happens at ten times the traffic? When a server fails? When an auditor asks how data is protected? We take you from the first to the second without starting over.",
    glance: {
      bestFor: "Teams whose prototype works but won't survive real-world load.",
      startingPoint: "A proof of concept or an architecture review",
      delivery: "Cloud architects with hands-on DevOps engineering",
      workWith: "A solutions architect and cloud and DevOps engineers",
    },
    problems: [
      "The demo is great, but nobody trusts it with real customers yet.",
      "Deployments are manual, and every release is stressful.",
      "Your cloud bill keeps rising and nobody can explain why.",
      "Outages happen and you find out from your customers.",
    ],
    deliverables: [
      { title: "Proof of concept", text: "A focused build that tests the riskiest technical assumption quickly and cheaply, with clear pass or fail criteria." },
      { title: "Production architecture", text: "Cloud design on AWS, Azure or Google Cloud, chosen for your workload, budget and compliance needs." },
      { title: "CI/CD and infrastructure as code", text: "Automated builds, tests and deployments, with every environment defined in version-controlled code." },
      { title: "Performance and load testing", text: "Tests that show where the system bends before your customers find out." },
      { title: "Observability and reliability", text: "Monitoring, logging, alerting and runbooks, so problems are caught and fixed quickly." },
      { title: "Security and cost control", text: "Hardened access, secrets and networks, plus cost reviews that cut waste." },
    ],
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus & Grafana"],
    process: [
      { title: "Frame", text: "We define what the proof of concept must prove, and how we will know.", youGet: "Success criteria and a test plan." },
      { title: "Prove", text: "We build the smallest working version that tests the risk.", youGet: "A proof of concept and a findings report." },
      { title: "Design for scale", text: "We architect for expected load, availability and compliance needs.", youGet: "A target architecture and a migration plan." },
      { title: "Build and automate", text: "We stand up environments, pipelines and monitoring as code.", youGet: "A production-ready platform." },
      { title: "Test and cut over", text: "We run load tests and failure drills, then move to production on a planned date.", youGet: "A live platform, runbooks and a trained team." },
    ],
    outcomes: [
      { title: "Routine releases", text: "Automated pipelines turn deployment into a normal event instead of a risky one." },
      { title: "Stability under load", text: "Tested capacity and failure drills mean growth does not mean outages." },
      { title: "Cloud spend you can explain", text: "Costs are tagged, tracked and reviewed, so you know what you are paying for." },
    ],
    faqs: [
      { q: "Which cloud do you recommend?", a: "The one that fits your workload, team skills and compliance needs. We compare the options before recommending." },
      { q: "Can you migrate our existing systems?", a: "Yes. We plan migrations in stages, so old and new can run in parallel and you cut over safely." },
      { q: "Do you help with compliance?", a: "We prepare the technical controls and documentation that standards such as SOC 2 and ISO 27001 expect. Certification itself is carried out by an independent auditor." },
    ],
    cta: "Discuss your infrastructure",
  },
  {
    id: "scaling-up",
    group: "build",
    phase: "Scale",
    icon: "trendingup",
    title: "Scaling Up",
    result: "Fix what limits growth, and add capacity while you keep shipping.",
    tagline: "Growing pains, handled.",
    description:
      "Growth exposes everything: slow pages, fragile deployments, overloaded teams, reports nobody trusts. We look across product, technology and operations, fix what limits growth first and add capacity while you keep shipping.",
    glance: {
      bestFor: "Companies past early traction whose platform and processes are straining.",
      startingPoint: "A scale-readiness review",
      delivery: "Hybrid, with outsourced engineering pods",
      workWith: "An engagement lead, architects, a delivery manager and pod engineers",
    },
    problems: [
      "Every new customer makes the system slower.",
      "Your engineers spend more time firefighting than building.",
      "You need to hire faster than you can recruit.",
      "Marketing brings leads in, but operations can't absorb them.",
    ],
    deliverables: [
      { title: "Scale-readiness review", text: "A frank assessment of what will break first at two, five and ten times your current volume." },
      { title: "Bottleneck re-architecture", text: "Targeted rebuilds of the databases, services and workflows holding you back, without a risky big-bang rewrite." },
      { title: "Engineering capacity", text: "Outsourced pods or augmented engineers who join your tools and rhythm quickly." },
      { title: "Data and reporting foundations", text: "A reliable data layer and dashboards, so leaders see the same numbers." },
      { title: "Process and tooling", text: "Cleaner release, support and on-call processes that still work with a larger team." },
      { title: "Fractional leadership", text: "Interim technical or programme leadership while you hire." },
    ],
    tools: ["Load testing", "Database tuning", "Microservices", "Event queues", "Data warehouses", "BI dashboards", "Agile delivery"],
    process: [
      { title: "Diagnose", text: "We review product, technology and operations against the growth you are planning for.", youGet: "A scale-readiness report." },
      { title: "Prioritise", text: "We rank fixes by their impact on growth and by effort.", youGet: "A sequenced scale plan." },
      { title: "Stabilise", text: "We tackle the most urgent failure points first.", youGet: "Fewer incidents and room to breathe." },
      { title: "Expand", text: "We add capacity and re-architect in planned phases, alongside your roadmap.", youGet: "Higher throughput and a stronger platform." },
      { title: "Hand over or continue", text: "We transfer knowledge to your team, or stay on as an extension of it.", youGet: "Documentation, trained staff or an ongoing pod." },
    ],
    outcomes: [
      { title: "Growth without fire drills", text: "The fragile parts get fixed in order of impact, so incidents fall as volume rises." },
      { title: "Capacity on demand", text: "Pods and augmented engineers add throughput without months of recruiting." },
      { title: "Numbers leaders trust", text: "Teams look at the same dashboards and agree on what they mean." },
    ],
    faqs: [
      { q: "Do we have to stop feature work?", a: "No. We run improvements alongside your roadmap and sequence risky changes carefully." },
      { q: "How do outsourced pods work?", a: "A pod is a small team, such as two engineers and a QA, that works to your priorities with a delivery lead from us." },
      { q: "Can you help us hire?", a: "We can define roles, interview candidates alongside you and cover gaps with fractional leads until your hires start." },
    ],
    cta: "Plan your scale-up",
  },
  {
    id: "managed-support",
    group: "build",
    phase: "Sustain",
    icon: "lifebuoy",
    title: "Managed Support & Outsourcing",
    result: "Your technology team, on call, without the full-time headcount.",
    tagline: "Your technology team, on call.",
    description:
      "Launching is the start. Systems need patching, users need help and priorities keep shifting. We provide support and extra engineering capacity, on-shore or off-shore, with defined service levels and a named lead who knows your environment.",
    glance: {
      bestFor: "Businesses that need ongoing coverage without building a full in-house team.",
      startingPoint: "A support assessment and onboarding plan",
      delivery: "A dedicated pod, or individual engineers added to your team",
      workWith: "A service delivery manager, support engineers and a dedicated pod",
    },
    problems: [
      "Support depends on one person who might leave.",
      "Updates and patches get postponed until something breaks.",
      "Issues arrive outside office hours and wait until morning.",
      "You need developers for a year, not forever.",
    ],
    deliverables: [
      { title: "Helpdesk and application support", text: "Tiered support for users and applications, with tracked tickets and clear response targets." },
      { title: "Monitoring and incident response", text: "Alerts, triage and fixes around the clock, with root-cause reviews after incidents." },
      { title: "Dedicated engineering pods", text: "A team that works only on your roadmap, led by a delivery manager from us." },
      { title: "Staff augmentation", text: "Individual engineers, designers or analysts added to your team on a flexible basis." },
      { title: "Maintenance and upgrades", text: "Scheduled patching, dependency updates and version upgrades, so nothing falls behind." },
      { title: "Service reviews and documentation", text: "Monthly reviews against agreed service levels, and living runbooks." },
    ],
    tools: ["Ticketing & service desk tools", "PagerDuty", "Datadog", "Slack", "Jira", "Confluence"],
    process: [
      { title: "Assess", text: "We inventory your systems, users, risks and current support arrangements.", youGet: "A support assessment." },
      { title: "Onboard", text: "We document the environment, set up access and tooling and agree service levels.", youGet: "Runbooks, SLAs and a support plan." },
      { title: "Transition", text: "We shadow your current process, then take over in stages.", youGet: "A handover without gaps in coverage." },
      { title: "Operate", text: "We respond, monitor, maintain and improve.", youGet: "Tracked tickets and proactive fixes." },
      { title: "Review", text: "We review service levels, trends and costs every month.", youGet: "A report and an improvement plan." },
    ],
    outcomes: [
      { title: "Fewer surprises", text: "Monitoring and scheduled maintenance catch issues before your users do." },
      { title: "Coverage beyond office hours", text: "Pooled coverage across time zones means fewer issues wait until morning." },
      { title: "Capacity that flexes", text: "Add or reduce engineers with 2 weeks' notice, under terms agreed in writing upfront — no long lock-in." },
    ],
    faqs: [
      { q: "What are your response times?", a: "They're set per client in a written service level agreement, based on severity, and confirmed before work starts." },
      { q: "Can we scale the team up or down?", a: "Yes, with 2 weeks' notice. There's no long lock-in on monthly support and pod arrangements." },
      { q: "Do you support systems you did not build?", a: "Yes. We begin with an assessment and documentation review before taking over." },
    ],
    cta: "Set up support",
  },

  /* ---------- GROW ---------- */
  {
    id: "digital-presence",
    group: "grow",
    phase: "Presence",
    icon: "image",
    title: "Digital Content & Presence",
    result: "One consistent brand across your site, app and social channels.",
    tagline: "A presence that matches the product.",
    description:
      "Before customers talk to you, they look you up. Your website, app listing and social channels have to tell the same clear story. We design, write and produce them together, then keep them current.",
    glance: {
      bestFor: "New brands, and established businesses that look and sound out of date.",
      startingPoint: "A brand and presence audit",
      delivery: "A creative lead with a production team",
      workWith: "A creative director, designer, copywriter, developer and social media manager",
    },
    problems: [
      "Your website was built years ago and no longer reflects the business.",
      "Your social accounts post rarely and sound different on every channel.",
      "You have a product or app but no content that explains it.",
      "Content gets made in bursts, then stops.",
    ],
    deliverables: [
      { title: "Website design and build", text: "A fast, mobile-first site with clear service pages, built on a content system your team can edit." },
      { title: "Mobile app design and store launch", text: "App interface, store listings, screenshots and release management for iOS and Android." },
      { title: "Brand identity and assets", text: "Logo, colours, typography and templates, so everything you publish looks like one company." },
      { title: "Social media presence", text: "Channel setup, a content strategy and regular posting, with community replies handled." },
      { title: "Content production", text: "Copywriting, graphics and short video for your site, social channels and campaigns." },
      { title: "Content calendar and refresh", text: "A planned schedule of posts and page updates, reviewed every quarter against performance." },
    ],
    tools: ["Next.js", "WordPress", "Shopify", "Figma", "Adobe Creative Cloud", "Meta Business Suite", "LinkedIn", "YouTube"],
    process: [
      { title: "Audit", text: "We review your site, channels, competitors and audience.", youGet: "An audit and a list of priorities." },
      { title: "Define the story", text: "We settle positioning, tone of voice and the themes your content will cover.", youGet: "A brand guide and a content plan." },
      { title: "Create", text: "We design, write and produce the site, app screens, graphics and posts.", youGet: "Designs, copy and assets for your review." },
      { title: "Publish", text: "We build and launch, and connect analytics to every channel.", youGet: "A live site, app listing and social channels." },
      { title: "Maintain and refine", text: "We publish on schedule and adjust what we make based on the data.", youGet: "Monthly content and a performance review." },
    ],
    outcomes: [
      { title: "One consistent brand", text: "Your site, app listing and social channels share one look, one voice and one message." },
      { title: "A site that converts", text: "Clear pages that explain what you do and make the next step obvious." },
      { title: "Content that does not stall", text: "A planned calendar and a team producing to it, month after month." },
    ],
    faqs: [
      { q: "Can you manage our social accounts?", a: "Yes. We can plan, create, post and respond, with your approval of the content calendar." },
      { q: "Will we be able to edit the website ourselves?", a: "Yes. We build on a content system chosen so non-technical staff can update pages." },
      { q: "Do you create video?", a: "We produce short-form video and simple explainers for your site and social channels." },
    ],
    cta: "Discuss your brand",
  },
  {
    id: "marketing-growth",
    group: "grow",
    phase: "Growth",
    icon: "target",
    title: "Marketing & Growth",
    result: "Traffic you can trace all the way to revenue.",
    tagline: "Traffic you can trace to revenue.",
    description:
      "Marketing works when search, ads, content and the website are planned together and measured against revenue, not clicks. We run SEO and paid advertising from one plan, with tracking in place before the first rupee is spent.",
    glance: {
      bestFor: "Businesses that want steady lead flow instead of one-off campaigns.",
      startingPoint: "A marketing and measurement audit",
      delivery: "A strategist-led team running execution day to day",
      workWith: "A growth strategist, SEO and paid media specialists and an analyst",
    },
    problems: [
      "You spend on ads but can't say which ones bring customers.",
      "Your site doesn't show up when buyers search, on Google or in AI answers.",
      "Traffic arrives, but few visitors enquire.",
      "Reports show numbers that don't connect to revenue.",
    ],
    deliverables: [
      { title: "Technical and content SEO", text: "Fixes to site health and structure, plus content that targets what your buyers actually search for — and that AI tools like ChatGPT and Google AI Overviews can cite." },
      { title: "Paid search and paid social", text: "Campaigns on Google, Meta and LinkedIn, managed daily and optimised to cost per lead rather than clicks." },
      { title: "Landing pages and testing", text: "Focused pages and A/B tests that raise the share of visitors who get in touch." },
      { title: "Email and lifecycle marketing", text: "Automated sequences that nurture leads and bring customers back." },
      { title: "Analytics and attribution", text: "Tracking setup and dashboards that tie each channel to leads and revenue." },
      { title: "Monthly reporting and planning", text: "A plain-language review of what worked, what did not and what we will change next month." },
    ],
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Google Analytics 4", "Search Console", "Tag Manager", "CRM integrations"],
    process: [
      { title: "Audit and baseline", text: "We measure where you stand: traffic, leads, costs and conversion.", youGet: "A baseline report and a list of quick wins." },
      { title: "Plan", text: "We choose channels, budgets and targets from the numbers.", youGet: "A 90-day growth plan." },
      { title: "Set up", text: "We build and test tracking, accounts, pages and campaigns.", youGet: "Measurement live before any spend begins." },
      { title: "Run", text: "We launch and manage campaigns and publish content.", youGet: "Weekly activity and ongoing optimisation." },
      { title: "Report and compound", text: "Monthly reviews move budget toward what works.", youGet: "A dashboard and the plan for next month." },
    ],
    outcomes: [
      { title: "Spend tied to revenue", text: "You can see which channels bring leads and sales, and move budget accordingly." },
      { title: "Better visibility in search", text: "Technical fixes and useful content help the right buyers find you, on Google and in AI answers." },
      { title: "Decisions made from data", text: "Monthly reviews replace guesswork with evidence." },
    ],
    faqs: [
      { q: "How soon will we see results?", a: "Paid campaigns can produce data within weeks. SEO usually takes longer to compound. We set expectations for your market in the plan." },
      { q: "Is ad spend included in your fees?", a: "No. Ad spend is paid directly to the platforms. Our fees cover strategy, setup and management." },
      { q: "Can you work alongside our existing agency or team?", a: "Yes. We can take one channel, or coordinate with the partners you already have." },
    ],
    cta: "Plan your growth",
  },
];

export const SERVICE_BY_ID = Object.fromEntries(SERVICES.map((s) => [s.id, s])) as Record<string, Service>;
export const BUILD = SERVICES.filter((s) => s.group === "build");
export const GROW = SERVICES.filter((s) => s.group === "grow");
