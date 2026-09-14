// "What we build" page: a short overview. The detailed stories live in cases.js.
export const noviCapabilities = [
  { icon: 'database', title: 'Answers from your data', text: 'Knowledge base, orders and stock, with strict output rules instead of guesses.' },
  { icon: 'filter', title: 'Qualifies and classifies', text: 'Captures budget, needs and timing, then sorts every lead by intent.' },
  { icon: 'calendarCheck', title: 'Books meetings', text: 'Offers available times and confirms the meeting with your team.' },
  { icon: 'userCheck', title: 'Hands over to people', text: 'Below the confidence threshold, a person takes over with the full chat.' },
]

export const noviExample = {
  title: 'Novi',
  subtitle: 'Real estate agency website',
  items: [
    { from: 'visitor', text: 'Do you have 3-bedroom apartments near downtown?' },
    { from: 'bot', text: 'We do. What budget do you have in mind, and when are you hoping to move?' },
    { from: 'visitor', text: 'Around $250k, within two months.' },
    { from: 'system', icon: 'filter', title: 'Lead qualified: ready to buy', detail: '$250k · Downtown · 3-bed · 2 months' },
    { from: 'system', icon: 'calendarCheck', title: 'Viewing booked with an agent', detail: 'Full conversation attached' },
  ],
}

export const otherServices = [
  {
    title: 'Lead extraction',
    text: 'Listings, prospects and market signals collected from multiple websites on a schedule, then cleaned and de-duplicated.',
    includes: ['Scheduled collection', 'De-duplication', 'Lists ready for outreach'],
    examples: [{ label: 'Realestate.lb', to: '/use-cases#realestate' }],
  },
  {
    title: 'Custom software',
    text: 'Inventory systems, internal tools and field apps built around how your team works, with every movement recorded.',
    includes: ['Inventory and stock movements', 'Field apps for representatives', 'Management dashboards'],
    examples: [
      { label: 'New Europharm', to: '/use-cases#europharm' },
      { label: 'Naserddine Electronics', to: '/use-cases#naserddine' },
    ],
  },
  {
    title: 'AI tools for documents',
    text: 'Purpose-built AI that checks and searches documents, grounded in real sources rather than guesses.',
    includes: ['Retrieval with citations', 'Verification pipelines', 'Guardrails on every answer'],
    examples: [{ label: 'CiteCheck', to: '/use-cases#citecheck' }],
  },
]

export const process = [
  {
    title: 'Scope it with the people doing the work',
    text: 'Requirements come from the inboxes, spreadsheets and phone calls where things actually get stuck.',
  },
  { title: 'Demo early, rework often', text: 'Each part is demoed and reworked until the team actually uses it.' },
  {
    title: 'Launch with a person in the loop',
    text: 'Confidence thresholds, handoff rules and full chat history, so nothing is left to guesswork.',
  },
]
