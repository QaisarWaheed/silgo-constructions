// Copy sourced directly from the Silgo Constructions Claude Design project (index.dc.html + linked pages).

export const brand = {
  name: "Silgo Constructions LLC",
  shortName: "SILGO",
  email: "support@silgoconstructions.com",
  phone: "(469) 551-3197",
  phoneHref: "+14695513197",
};

export const nav = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "how", label: "How It Works", href: "/how-it-works" },
  { key: "faq", label: "FAQ", href: "/faq" },
  { key: "contact", label: "Contact", href: "/contact" },
];

// ---------- Home ----------

export const home = {
  hero: {
    eyebrow: "MORE CONTROL. BETTER OPTIONS. GREATER OPPORTUNITY.",
    heading: ["The Homeowner", "Financial Strategy"],
    body: "Helping homeowners build a stronger financial future — through residential development participation, not another product to sell.",
    ctaPrimary: { label: "Start Your Qualification Review", href: "/qualify" },
    ctaSecondary: { label: "See How It Works", href: "/how-it-works" },
  },
  whyWeExist: {
    heading: "Why We Exist",
    body: "We believe qualified homeowners deserve access to opportunities that builders, banks, and investors use to create wealth. Our mission is not to sell products — our mission is to create opportunities.",
    negative: "✕ Not about selling products",
    positive: "✓ About creating opportunities",
  },
  problem: {
    heading: "Homeowners Shouldn't Feel Trapped",
    subheading: "Owning a home has never been more expensive.",
    items: [
      { icon: "📈", label: "Rising monthly expenses" },
      { icon: "💳", label: "Long-term debt" },
      { icon: "🔧", label: "Expensive repairs" },
      { icon: "⚡", label: "Rising utility rates" },
      { icon: "🐷", label: "Reduced family budgets" },
    ],
    conclusion: "Conclusion: there should be a better way.",
  },
  oneOpportunity: {
    heading: "One Opportunity. Two Problems Solved.",
    items: [
      { icon: "💰", label: "Generate Available Capital" },
      { icon: "📈", label: "Reduce a Major Monthly Expense" },
    ],
    note: "That is what makes this approach different.",
  },
  whoWeAre: {
    heading: "Builders First. Financial Problem Solvers Always.",
    body: 'We don’t begin by asking "what can we sell?" We begin by asking, "what financial problem are we solving?"',
    link: { label: "Learn more about us →", href: "/about" },
    roles: [
      { icon: "🏗️", label: "General Contractors" },
      { icon: "⚡", label: "Electrical Contractors" },
      { icon: "🏠", label: "Residential Builders" },
      { icon: "📋", label: "Project Managers" },
      { icon: "🏢", label: "Development Operators" },
      { icon: "💡", label: "Financial Problem Solvers" },
    ],
  },
  cta: {
    heading: "See If You Qualify Today",
    body: "A free review that takes only a few minutes. No pressure. No obligation.",
    cta: { label: "Start Your Qualification Review", href: "/qualify" },
  },
};

// ---------- About ----------

export const about = {
  hero: {
    eyebrow: "ABOUT SILGO CONSTRUCTIONS",
    heading: ["Built by Builders. ", "Designed for Homeowners."],
    body: "We bring the expertise of residential development to homeowner financial solutions.",
  },
  roles: home.whoWeAre.roles,
  whoWeAre: {
    heading: "Builders First. Financial Problem Solvers Always.",
    quote: [
      'We don’t begin by asking "what can we sell?"',
      'We begin by asking, "what financial problem are we solving?"',
    ],
  },
  chain: {
    heading: "Residential Development Creates Opportunity",
    body: "Building homes creates value. Development profit creates possibilities.",
    steps: [
      { icon: "💰", label: "Capital" },
      { icon: "🏗️", label: "Construction" },
      { icon: "🏠", label: "Completed Home" },
      { icon: "🤝", label: "Sale" },
      { icon: "📈", label: "Profit" },
    ],
    footer: "Those possibilities allow us to structure opportunities traditionally home-improvement companies cannot offer.",
  },
  differentiators: {
    heading: "Built by Builders",
    items: [
      { icon: "🔨", title: "Builder-Grade", desc: "Construction quality backed by years of residential development experience." },
      { icon: "📊", title: "Investor-Level", desc: "Financial structuring that treats your home like the asset it is." },
      { icon: "✅", title: "Dedicated", desc: "Project management from financial review through distribution." },
    ],
  },
  testimonials: {
    heading: "What Homeowners Are Saying",
    body: "Real experiences from homeowners who trusted our team.",
    items: [
      { label: "Homeowner Testimonial 1" },
      { label: "Homeowner Testimonial 2" },
    ],
    footer: "YOUR HOME. YOUR TRUST. BUILT TO LAST.",
  },
  cta: {
    heading: ["Your Home. Your Finances. ", "Built to Perform."],
    cta: { label: "Start Your Qualification Review", href: "/qualify" },
  },
};

// ---------- How It Works ----------

export const howItWorks = {
  hero: {
    eyebrow: "HOW THE STRUCTURE WORKS",
    heading: ["From Financial Review to ", "Distribution"],
    body: "Eight steps, built on our experience as builders and developers — not a sales script.",
  },
  steps: [
    { n: 1, icon: "📋", title: "Financial Review", desc: "Review your current situation, homeownership status, expenses and goals." },
    { n: 2, icon: "👤", title: "Qualification Review", desc: "Determine which programs and structures may be available." },
    { n: 3, icon: "🏠", title: "Home Improvement Planning", desc: "We design the right energy solution for your home." },
    { n: 4, icon: "💰", title: "Capital Allocation Strategy", desc: "We structure the funding to fit your needs and goals." },
    { n: 5, icon: "☀️", title: "Installation", desc: "We install your custom energy system." },
    { n: 6, icon: "👥", title: "Development Participation", desc: "You participate in development opportunities." },
    { n: 7, icon: "👷", title: "Construction", desc: "Your project is managed with quality and care." },
    { n: 8, icon: "📈", title: "Distribution", desc: "You benefit from savings, value, and potential returns." },
  ],
  capital: {
    heading: "Capital Allows Projects to Begin Faster",
    body: "Residential development requires capital for:",
    items: [
      { icon: "💰", label: "Acquisition" },
      { icon: "⚙️", label: "Engineering" },
      { icon: "📄", label: "Permits" },
      { icon: "📦", label: "Materials" },
      { icon: "👷", label: "Labor" },
      { icon: "📈", label: "Project Momentum" },
    ],
  },
  situations: {
    heading: "Every Homeowner's Situation Is Different",
    items: [
      { icon: "💵", label: "Cash" },
      { icon: "🤝", label: "Joint Participation" },
      { icon: "🏠", label: "HELOC" },
      { icon: "🏦", label: "Home Improvement Financing" },
      { icon: "📄", label: "Refinance" },
      { icon: "🏛️", label: "Other Lending Structures" },
    ],
    footer: "No single solution fits everyone.",
  },
  example: {
    eyebrow: "ILLUSTRATIVE EXAMPLE",
    heading: "$80,000 APPROVAL",
    items: [
      { amount: "$20,000", label: "HOME IMPROVEMENTS", tag: "SOLAR + BATTERY" },
      { amount: "$60,000", label: "RESIDENTIAL DEVELOPMENT", tag: "PARTICIPATION" },
    ],
    total: { amount: "$90,000", label: "TOTAL PAY OUT" },
    disclaimer: "For illustration only. Final structure depends on approval, scope, agreements, and lender requirements.",
  },
  budget: {
    heading: "What Does This Mean for Your Monthly Budget?",
    before: { label: "BEFORE", amount: "$200–$400", note: "Average monthly electricity bill" },
    after: { label: "AFTER", amount: "$20–$50", note: "Net metering adjustments" },
    conclusion: "That's real money back in your pocket.",
    cta: { label: "Start Your Qualification Review", href: "/qualify" },
  },
};

// ---------- FAQ ----------

export const faqPage = {
  hero: {
    heading: ["Common ", "Questions"],
    body: "CLEAR ANSWERS. REAL TRANSPARENCY.",
  },
  qualifies: {
    heading: ["WHAT ", "QUALIFIES", " YOU?"],
    items: [
      { icon: "🏠", label: "Homeownership status" },
      { icon: "📊", label: "Credit profile considerations" },
      { icon: "🏘️", label: "Property type eligibility" },
      { icon: "📋", label: "Income verification" },
    ],
    note: ["Qualification review takes only ", "2–3 minutes", ". Does not impact your credit score."],
  },
  faqs: [
    {
      q: "Is this a solar company?",
      a: "We're builders and residential developers. Solar is one component of our general contracting business and part of a broader financial strategy designed to help homeowners strengthen their financial position.",
    },
    {
      q: "What happens if the numbers don’t work?",
      a: "Then we simply walk away. No pressure. No obligation. If the structure doesn’t make financial sense for you, we won’t recommend moving forward.",
    },
    {
      q: "What does it cost to get started?",
      a: "Nothing. Your financial review and qualification process are completely free. There is no out-of-pocket cost from today through the investment period under the proposed structure.",
    },
    {
      q: "How do I know my investment is safe?",
      a: "We’ve spent years building our reputation through construction, remodeling, and residential development. Our business, our licenses, and our long-term reputation stand behind every opportunity we present.",
    },
  ],
  paths: {
    heading: "Three Paths Forward",
    items: [
      { icon: "🚶", title: "Keep Everything the Same", desc: "Continue paying your monthly electricity bill as rates continue to increase over time. No changes. No additional opportunities." },
      { icon: "📄", title: "Traditional Solar Purchase", desc: "Purchase a solar system through a long-term financing option or by paying cash out of pocket." },
      { icon: "📈", title: "Explore a Financial Strategy", desc: "Review a structure designed to reduce expenses, create investment capital, and improve your overall financial position." },
    ],
    footer: "No pressure. No obligation. Just information.",
  },
  nextSteps: {
    heading: "What Happens Next?",
    items: [
      { n: 1, icon: "📋", title: "Review Your Situation", desc: "We review your home, goals, and current financial situation." },
      { n: 2, icon: "✅", title: "Application & Approval", desc: "We submit your application and determine which programs you qualify for." },
      { n: 3, icon: "🖼️", title: "We Present Your Options", desc: "We walk you through every available option so you can decide." },
      { n: 4, icon: "🤝", title: "You Decide", desc: "No pressure. You choose what makes sense for you and your family." },
    ],
    cta: { label: "Start Your Qualification Review", href: "/qualify" },
  },
};

// ---------- Contact ----------

export const contactPage = {
  eyebrow: "GET IN TOUCH",
  heading: ["Let's Talk About Your ", "Home"],
  body: "Have a question before starting your qualification review? Reach out directly — we'll respond within one business day.",
  note: "No obligation. No pressure. Just a professional review.",
  qualifyLink: { label: "Prefer to jump straight in? Start your qualification review →", href: "/qualify" },
  form: {
    heading: "Send Us a Message",
    submitLabel: "Send Message",
    success: {
      heading: "Message Sent",
      body: "Thanks for reaching out — we'll be in touch within one business day.",
    },
  },
};

// ---------- Qualify ----------

export const qualifyPage = {
  eyebrow: "SILGO CONSTRUCTIONS LLC",
  heading: ["Verify If You ", "Qualify Today"],
  body: "Today's review takes only a few minutes and helps determine which opportunities may be available based on your home, financial situation, and long-term goals.",
  quickAnswers: [
    { icon: "⏱️", q: "HOW LONG DOES IT TAKE?", a: "Initial review takes 2–3 minutes; full strategy ready in days." },
    { icon: "💵", q: "ANY OUT-OF-POCKET COST?", a: "No, the review and qualification process are completely free." },
    { icon: "📈", q: "DOES IT IMPACT MY CREDIT?", a: "No, the qualification review does not impact your credit score." },
  ],
  form: {
    heading: "Start Your Qualification Review",
    subheading: "No obligation. No pressure. Just a professional review.",
    submitLabel: "Start My Qualification Review",
    disclaimer: "Does not impact your credit score.",
    success: {
      heading: "Review Requested",
      body: "Thank you. A member of our team will reach out shortly to walk through your qualification review.",
    },
  },
};

// ---------- Footer ----------

export const footer = {
  tagline: "Builders first. Financial problem solvers always. Helping homeowners build a stronger financial future.",
  companyLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
  ],
  qualifyLink: { label: "Start Your Qualification Review →", href: "/qualify" },
  copyright: "© 2026 Silgo Constructions LLC. All rights reserved.",
  disclaimer: "No obligation. No pressure. Just a professional review.",
};
