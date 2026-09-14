// Home page: the hero reply chips and the services overview share this list.
export const services = [
  {
    id: 'novi-support',
    icon: 'moon',
    name: 'Novi for support',
    chip: 'Messages go unanswered after hours',
    reply: 'I answer from your own data, day or night, and book a meeting with your team when a person is needed.',
    summary: 'Answers customer questions from your own data, day or night, and hands over to a person with the full conversation.',
    link: { to: '/use-cases#zar-beauty', label: 'See it at ZAR Beauty' },
  },
  {
    id: 'novi-leads',
    icon: 'route',
    name: 'Novi for leads',
    chip: 'Leads slip through without follow-up',
    reply: 'I ask your qualifying questions, sort every lead by intent and route it to the right person on your team.',
    summary: 'Qualifies and classifies every lead, captures what sales needs to know and routes it to the right person.',
    link: { to: '/use-cases#myoffice', label: 'See it at myOffice.lb' },
  },
  {
    id: 'lead-extraction',
    icon: 'extract',
    name: 'Lead extraction',
    chip: 'Finding prospects is manual work',
    reply: 'We collect listings and prospects from several websites into one clean list that stays current.',
    summary: 'Collects listings and prospects from multiple websites into one clean, de-duplicated list that stays current.',
    link: { to: '/use-cases#realestate', label: 'See it at Realestate.lb' },
  },
  {
    id: 'custom-software',
    icon: 'grid',
    name: 'Custom software',
    chip: 'Nobody trusts our stock numbers',
    reply: 'We build inventory software where every stock movement is recorded, so your numbers hold up.',
    summary: 'Inventory systems, internal tools and field apps where every movement is recorded and visible.',
    link: { to: '/use-cases#naserddine', label: 'See it at Naserddine Electronics' },
  },
]

// Use cases featured on the home page (ids from cases.js).
export const featuredCaseIds = ['myoffice', 'realestate', 'europharm']
