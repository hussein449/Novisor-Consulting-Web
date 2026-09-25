// Services page (/services). The two focus services come first; everything else is listed after them.
// Voice agents have no finished client project yet, so nothing here claims results for them.

export const afterHours = {
  id: 'after-hours',
  label: 'After-hours replies',
  title: 'Every message answered, even after you close.',
  intro:
    'Customers message at night, on weekends and on holidays, then buy from whoever replies first. Novi answers from your own information any time, books the appointment and leaves your team a clear summary for the morning.',
  covers: [
    { icon: 'message', title: 'Website chat and WhatsApp', text: 'One assistant on the channels your customers already use.' },
    { icon: 'database', title: 'Answers from your data', text: 'Prices, hours, services and policies, never guesses.' },
    { icon: 'calendarCheck', title: 'Books while you sleep', text: 'Offers open slots and confirms the booking in the chat.' },
    { icon: 'userCheck', title: 'Knows when to stop', text: 'Anything sensitive goes to your team with the full chat.' },
  ],
  steps: [
    { title: 'We load your information', text: 'Services, prices, hours, FAQs and booking rules, written with your team.' },
    { title: 'Novi replies any hour', text: 'Questions are answered in seconds, in Arabic or English.' },
    { title: 'It books or captures', text: 'Open slots are booked; everything else is saved as a lead.' },
    { title: 'Your team gets a summary', text: 'In the morning: who wrote, what they wanted and what is still open.' },
  ],
  example: {
    title: 'Tonight, after hours',
    subtitle: 'Office closed 18:00 to 09:00',
    items: [
      { time: '21:12', channel: 'message', text: 'Do you have anything free on Saturday morning?', result: 'Booked Sat 10:30', tone: 'done' },
      { time: '23:47', channel: 'message', text: 'How much is a first consultation?', result: 'Answered from price list', tone: 'done' },
      { time: '01:05', channel: 'message', text: 'I need to change my appointment.', result: 'Moved to Mon 16:00', tone: 'done' },
      { time: '06:40', channel: 'message', text: 'I have a complaint about my last visit.', result: 'Handed to your team', tone: 'handoff' },
    ],
    summary: { time: '09:00', title: 'Morning summary sent to your team', detail: '2 bookings · 1 answer · 1 needs a person' },
  },
}

export const voiceAgents = {
  id: 'voice-agents',
  label: 'AI voice agents',
  title: 'A voice on the phone that confirms and books.',
  intro:
    'Your team should not spend the afternoon calling to confirm tomorrow’s appointments. An AI voice agent makes those calls, answers when you can’t pick up, and writes every result straight into your calendar.',
  uses: [
    {
      icon: 'phoneOutgoing',
      title: 'Confirmation calls',
      text: 'Calls each customer before the appointment, confirms it or finds a new time, and updates the calendar.',
    },
    {
      icon: 'phoneIncoming',
      title: 'Bookings by phone',
      text: 'Picks up when your line is busy or closed, answers common questions and books an open slot.',
    },
    {
      icon: 'replay',
      title: 'Reschedules and no-shows',
      text: 'Calls back cancellations and missed appointments to rebook them instead of losing them.',
    },
  ],
  details: [
    'Natural speech, no phone menus',
    'Reads and writes your calendar',
    'WhatsApp confirmation after the call',
    'Transfers to a person on request',
    'Every call recorded and summarised',
    'Calls only at the hours you allow',
  ],
  example: {
    title: 'Outgoing call',
    subtitle: 'Appointment confirmation',
    lines: [
      { from: 'agent', text: 'Hi Maya, I’m calling to confirm your appointment tomorrow at 10:30. Does that still work?' },
      { from: 'caller', text: 'Actually, can we make it later in the day?' },
      { from: 'agent', text: 'Of course. I have 15:00 or 16:30 open. Which suits you?' },
      { from: 'caller', text: '16:30 is perfect.' },
    ],
    results: [
      { icon: 'calendarCheck', title: 'Moved to tomorrow, 16:30', detail: 'Calendar updated' },
      { icon: 'message', title: 'Confirmation sent on WhatsApp', detail: 'Call summary saved' },
    ],
  },
}

// "How it fits together": channels in, outcomes out.
export const flow = {
  channels: [
    { icon: 'globe', label: 'Website chat' },
    { icon: 'message', label: 'WhatsApp' },
    { icon: 'phone', label: 'Phone calls' },
  ],
  outcomes: [
    { icon: 'checkCircle', label: 'Questions answered' },
    { icon: 'calendarCheck', label: 'Bookings and confirmations' },
    { icon: 'userCheck', label: 'Handoffs to your team' },
  ],
}

// AI integration consulting: shown first under "Everything else we build". Steps match the one-pager.
export const consulting = {
  label: 'AI integration consulting',
  title: 'Planning and execution, from first call to a working system.',
  text: 'Not sure where AI fits in your business? We look at how your team works today, find the few places where AI makes a real difference, plan what to build and in what order, then build it and connect it to the tools you already use.',
  steps: [
    { title: 'Talk', text: 'Your business, your customers and where time is lost.' },
    { title: 'Identify', text: 'The points where AI actually moves the needle.' },
    { title: 'Plan', text: 'What gets built, in what order and what to expect.' },
    { title: 'Execute', text: 'We build, integrate and stay on until it runs well.' },
  ],
}

// Everything else we build.
export const moreServices = [
  {
    icon: 'route',
    title: 'Lead qualification',
    text: 'Novi asks your qualifying questions, sorts every lead by intent and routes it to the right person.',
    link: { label: 'myOffice.lb', to: '/use-cases#myoffice' },
  },
  {
    icon: 'extract',
    title: 'Lead extraction',
    text: 'Prospects and listings collected from multiple websites into one clean list that stays current.',
    link: { label: 'Realestate.lb', to: '/use-cases#realestate' },
  },
  {
    icon: 'grid',
    title: 'Custom software',
    text: 'Inventory systems, internal tools and field apps built around how your team actually works.',
    link: { label: 'New Europharm', to: '/use-cases#europharm' },
  },
  {
    icon: 'file',
    title: 'AI tools for documents',
    text: 'AI that checks and searches documents, grounded in real sources with citations.',
    link: { label: 'CiteCheck', to: '/use-cases#citecheck' },
  },
  {
    icon: 'message',
    title: 'Integrated chatbots',
    text: 'Chatbots connected to your store, orders and stock, answering customers from live data and handing real problems to your team.',
    link: { label: 'ZAR Beauty', to: '/use-cases#zar-beauty' },
  },
  {
    icon: 'window',
    title: 'Websites',
    text: 'Fast, modern websites built to turn visitors into leads, with Novi ready to plug in.',
  },
]

export const faqs = [
  {
    q: 'Does it replace my staff?',
    a: 'No. It covers the hours and the repetitive calls your team can’t, and hands anything that needs judgement to a person with the full history.',
  },
  {
    q: 'What if a customer asks something it doesn’t know?',
    a: 'It says so and passes the conversation to your team. It only answers from the information you approved.',
  },
  {
    q: 'Does it work with our calendar?',
    a: 'Yes, as long as your calendar or booking system supports third-party integrations, through an API or a ready-made connector. Bookings and confirmations are then written straight into it, so your team keeps one schedule. If it doesn’t, we go through the options with you during planning, before anything is built.',
  },
  {
    q: 'Can we start with one service?',
    a: 'Yes. After-hours replies or confirmation calls work on their own, and the other can be added later on the same setup.',
  },
]
