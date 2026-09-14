// Use cases page. Facts come from usecases/Hussein-Nasereddine-Use-Cases.pdf — no invented metrics.
// `illustration` picks the before/after pair shown for each project.
export const cases = [
  {
    id: 'myoffice',
    client: 'myOffice.lb',
    category: 'Novi for leads and support',
    summary:
      'Outreach and lead-qualification chatbots, a support bot grounded in the company knowledge base, and an internal flow for managing leads.',
    indexBuilt: 'Lead qualification and support chatbots',
    indexResult: 'Faster replies, cleaner lead prioritisation',
    problem:
      'Prospects needed a fast first reply and the right questions before sales got involved. At the same time, the team was answering the same support questions again and again.',
    built: [
      'Outreach bots that open the conversation and ask qualifying questions',
      'Intent classification that captures the fields sales needs and routes each lead',
      'A support bot answering from the knowledge base, with strict output rules and confidence thresholds',
      'Escalation to a person, who picks up the chat with its full history',
    ],
    illustration: 'classification',
    before: {
      title: 'Every enquiry looked the same',
      caption: 'Vague messages landed in one pile, and sales had to guess who to call first.',
    },
    after: {
      title: 'Qualified, classified and routed',
      caption: 'Novi captures what sales needs, classifies intent and sends each lead to the right person.',
    },
    results: [
      { title: 'Faster replies', text: 'Prospects get a response and the right questions straight away.' },
      { title: 'Cleaner prioritisation', text: 'Leads arrive sorted by intent, with the details sales needs.' },
      { title: 'Less repetitive work', text: 'Common support questions no longer land on the team.' },
    ],
  },
  {
    id: 'realestate',
    client: 'Realestate.lb',
    category: 'Lead extraction and a site chatbot',
    summary:
      'Automated collection of listings, prices and market signals from multiple property websites, plus a chatbot that turns visitors into structured leads.',
    indexBuilt: 'Listing collection and a lead chatbot',
    indexResult: 'Always-current inventory, better inbound leads',
    problem:
      'Listings, prices and market signals were spread across several property websites. Keeping them current by hand meant stale data, and the same property showed up three times at three different prices.',
    built: [
      'Scheduled collection from multiple property websites',
      'De-duplication, so each property appears once',
      'An on-site chatbot that narrows visitors down by budget, area and property type',
      'Structured lead data handed to sales instead of vague enquiries',
    ],
    illustration: 'extraction',
    before: {
      title: 'Copy, paste, repeat',
      caption: 'Listings were copied by hand from several sites, went stale fast, and duplicates carried different prices.',
    },
    after: {
      title: 'Collected, cleaned, always current',
      caption: 'Scheduled collection reads every source, merges duplicates and keeps one clean list up to date.',
    },
    results: [
      { title: 'Always-current inventory', text: 'Listings and prices stay up to date without anyone checking sites by hand.' },
      { title: 'Better inbound leads', text: 'Visitors reach sales as structured lead data instead of vague enquiries.' },
      { title: 'Less drop-off', text: 'People searching get help narrowing down, instead of leaving.' },
    ],
  },
  {
    id: 'zar-beauty',
    client: 'ZAR Beauty',
    category: 'Novi for support and inventory planning',
    summary:
      'An online beauty shop. A support chatbot inside its existing support flow, paired with inventory planning that lines purchasing up with real demand.',
    indexBuilt: 'Support chatbot and inventory planning',
    indexResult: 'Support time on real issues, fewer stock-outs',
    problem:
      'The support team spent much of its time on the same questions about order status, product details and availability, and stock-outs made "is this in stock?" hard to answer.',
    built: [
      'A support chatbot handling order status, product details and availability',
      'Handoff to a person with the conversation already in context',
      'Inventory planning that follows actual demand instead of guesswork',
      'Stock levels feeding that planning, so availability answers stay true',
    ],
    illustration: 'chatbot',
    before: {
      title: 'Questions waited until morning',
      caption: 'Repetitive questions stacked up in a shared inbox until someone was free to answer.',
    },
    after: {
      title: 'Answered in seconds, handed over when needed',
      caption: 'Novi answers from stock and order data, and passes real problems to a person.',
    },
    results: [
      { title: 'Time for real issues', text: 'The support team spends its time on problems that need a person.' },
      { title: 'Fewer stock-outs', text: 'Purchasing follows demand, so fewer products run out.' },
      { title: 'Availability you can answer', text: 'The question customers ask most often stays answerable.' },
    ],
  },
  {
    id: 'europharm',
    client: 'New Europharm',
    category: 'Internal software and a field app',
    summary:
      'As the sole technical person, working with the CEO and department heads: internal software built from scratch, rebuilt inventory workflows and a field app for representatives.',
    indexBuilt: 'Internal software and a field app for reps',
    indexResult: 'Fewer stockouts, real field visibility',
    problem:
      'Departments coordinated through chats and spreadsheets, stock had no clear owner, and field activity only reached management through reports compiled by hand.',
    built: [
      'Internal software implemented from scratch',
      'Clearer communication between departments',
      'Inventory workflows where stock is visible and has an owner',
      'A field app tracking reps, stock per rep and visits, reporting into dashboards',
    ],
    illustration: 'europharm',
    before: {
      title: 'Stock and field work lived in chats and sheets',
      caption: 'Departments chased each other for stock answers, and visits were reported by hand.',
    },
    after: {
      title: 'One system, live dashboards',
      caption: 'Inventory, reps and visits live in one place and report into dashboards as the work happens.',
    },
    results: [
      { title: 'Fewer stockouts', text: 'Stock is visible and owned, with fewer stockouts and handoff delays.' },
      { title: 'Real field visibility', text: 'Management sees rep activity, stock per rep and visit results.' },
      { title: 'No manual reporting', text: 'Visits and results reach the dashboards on their own.' },
    ],
  },
  {
    id: 'naserddine',
    client: 'Naserddine Electronics',
    category: 'Inventory management system',
    summary:
      'A full inventory system covering items, stock movements, receiving and availability, where every movement is recorded.',
    indexBuilt: 'Inventory management system',
    indexResult: 'Reliable stock numbers, faster audits',
    problem:
      'Stock numbers could not be trusted when buying and selling. Audits meant counting by hand, and discrepancies were written off without anyone knowing why.',
    built: [
      'Items, stock movements, receiving and availability in one system',
      'A trace for every receiving, transfer and adjustment',
      'Discrepancies traced back to a specific movement',
      'Replenishment decided from what actually moved',
    ],
    illustration: 'inventory',
    before: {
      title: 'Counted by hand, written off by guess',
      caption: 'Audits meant manual counts, and missing stock was written off with no explanation.',
    },
    after: {
      title: 'Every movement traced',
      caption: 'Receiving, sales and adjustments are all recorded, so the count matches and every change has a reason.',
    },
    results: [
      { title: 'Reliable stock numbers', text: 'Numbers can be trusted when selling and buying.' },
      { title: 'Less shrinkage, faster audits', text: 'Discrepancies are traced to a movement instead of written off.' },
      { title: 'Better purchasing', text: 'Replenishment is based on what moved, not on memory.' },
    ],
  },
  {
    id: 'citecheck',
    client: 'CiteCheck',
    category: 'AI citation verification · with Novum Research and Innovation',
    summary:
      'An AI tool that audits the references in research papers and book chapters, built as a machine-learning and LLM pipeline.',
    indexBuilt: 'AI citation verification tool',
    indexResult: 'Every citation checked against its claim',
    problem:
      'Checking whether each reference in a paper exists, and actually supports the claim it is attached to, was slow manual work for authors and reviewers.',
    built: [
      'Automatic metadata retrieval from academic databases',
      'Confirmation that each cited source exists',
      'A check of whether the source supports the claim',
      'Flags for incorrect, mismatched or unsupported citations',
    ],
    illustration: 'citecheck',
    before: {
      title: 'Checked by hand, one reference at a time',
      caption: 'Reviewers tracked down every source and judged for themselves whether it said what the text claims.',
    },
    after: {
      title: 'Every citation audited',
      caption: 'Each reference is retrieved, confirmed and checked against its claim, with problems clearly flagged.',
    },
    results: [
      { title: 'Verified, not assumed', text: 'Every reference is checked against academic databases.' },
      { title: 'Problems flagged', text: "Incorrect, mismatched and unsupported citations are caught." },
      { title: 'Research in progress', text: 'A paper documenting the tool and its evaluation is in preparation.' },
    ],
  },
]
