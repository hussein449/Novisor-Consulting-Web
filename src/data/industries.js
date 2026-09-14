// Industries page. Use-case links point only at work described in the use-cases PDF.
export const industryPages = [
  {
    id: 'real-estate',
    icon: 'building',
    name: 'Real estate agencies',
    short: 'Real estate',
    headline: 'Reply to buyers while they are still looking.',
    intro:
      'Buyers message at all hours with the same questions about budget, area and availability. Novi answers from your listings, qualifies the buyer and books the viewing.',
    summary: 'Novi answers buyers from your listings, qualifies them and books viewings.',
    proof: [{ label: 'Realestate.lb', to: '/use-cases#realestate' }],
    pains: [
      { title: 'Replies come too late', text: 'Buyers message at night and on weekends, then contact whoever answers first.' },
      { title: 'Enquiries are vague', text: '"Is it available?" tells an agent nothing about budget, area or timing.' },
      { title: 'Listings go stale', text: 'Prices and availability across property sites drift out of date.' },
    ],
    setup: [
      { title: 'Novi for support', text: 'Answers questions from your listings and books viewings.' },
      { title: 'Novi for leads', text: 'Budget, area, type and timeline captured before an agent calls.' },
      { title: 'Lead extraction', text: 'Listings and prices collected from property sites and kept current.' },
    ],
    example: {
      title: 'Novi',
      subtitle: 'Agency website',
      items: [
        { from: 'visitor', text: 'Hi, do you have 3-bedroom apartments for sale?' },
        { from: 'bot', text: 'We do. What budget and area do you have in mind?' },
        { from: 'visitor', text: 'Around $250k, close to downtown.' },
        { from: 'system', icon: 'filter', title: 'Lead qualified: ready to buy', detail: '$250k · Downtown · 3-bed' },
      ],
    },
  },
  {
    id: 'clinics',
    icon: 'calendarPlus',
    name: 'Clinics',
    short: 'Clinics',
    headline: 'Take bookings after the front desk closes.',
    intro:
      "Patients reach out when the clinic is closed. Novi answers from the clinic's own information, books open slots and passes anything medical to your staff. It never gives medical advice.",
    summary: 'After-hours answers and bookings, with medical questions passed to your staff.',
    proof: [],
    pains: [
      { title: 'Closed means missed', text: 'Messages after hours wait until morning, and patients book somewhere else.' },
      { title: 'The phone never stops', text: 'The front desk answers the same questions about times, prices and location all day.' },
      { title: 'Requests slip through', text: 'Appointments asked for by message are easy to lose between calls.' },
    ],
    setup: [
      { title: 'Novi after hours', text: "Answers from the clinic's own information, any time." },
      { title: 'Appointment booking', text: 'Patients pick an open slot and get a confirmation.' },
      { title: 'Handoff to staff', text: 'Medical questions go straight to your team with the full chat.' },
    ],
    example: {
      title: 'Novi',
      subtitle: 'Clinic website, after hours',
      items: [
        { from: 'visitor', text: 'Are you open on Saturday?' },
        { from: 'bot', text: 'Yes, from 9:00 to 14:00. Shall I book you in?' },
        { from: 'visitor', text: 'Is it normal to feel dizzy on my new medication?' },
        { from: 'bot', text: "That's a question for the doctor. I've asked the clinic team to call you." },
      ],
    },
  },
  {
    id: 'retail',
    icon: 'bag',
    name: 'Retail and e-commerce',
    short: 'Retail',
    headline: 'Answer stock and order questions without a queue.',
    intro:
      'Most support messages ask the same few things. Novi answers them from live stock and orders, and hands real problems to your team with the order attached.',
    summary: 'Stock and order questions answered, real problems handed to your team.',
    proof: [
      { label: 'ZAR Beauty', to: '/use-cases#zar-beauty' },
      { label: 'Naserddine Electronics', to: '/use-cases#naserddine' },
    ],
    pains: [
      { title: 'The same questions, all day', text: 'Stock, product details and order status fill the support inbox.' },
      { title: "Stock you can't trust", text: "When numbers are wrong, customers are promised items you don't have." },
      { title: 'Slow answers lose sales', text: 'Shoppers who wait for a reply often buy somewhere else.' },
    ],
    setup: [
      { title: 'Novi for support', text: 'Order status, product details and availability, answered instantly.' },
      { title: 'Inventory system', text: 'Every stock movement recorded, so the numbers hold up.' },
      { title: 'Demand-based planning', text: 'Purchasing lined up with real demand instead of guesswork.' },
    ],
    example: {
      title: 'Novi',
      subtitle: 'Online store support',
      items: [
        { from: 'visitor', text: 'Is the hydrating serum still in stock?' },
        { from: 'bot', text: "Yes, it's in stock. Want me to reserve one for you?" },
        { from: 'visitor', text: 'My last order arrived damaged.' },
        { from: 'system', icon: 'userCheck', title: 'Handed to the support team', detail: 'Order details attached' },
      ],
    },
  },
  {
    id: 'distribution',
    icon: 'truck',
    name: 'Pharma and distribution',
    short: 'Pharma & distribution',
    headline: 'See stock, reps and visits in one system.',
    intro:
      'Stock moves between the warehouse, reps and customers every day. An internal system and a field app record every movement, so departments stop chasing each other.',
    summary: 'Internal software and a field app that keep stock and visits visible.',
    proof: [{ label: 'New Europharm', to: '/use-cases#europharm' }],
    pains: [
      { title: 'Stock nobody owns', text: 'Inventory lives in sheets and chats, so shortages are discovered too late.' },
      { title: 'Departments chasing each other', text: 'Simple stock questions take several calls and messages to answer.' },
      { title: 'Field work is invisible', text: 'Visits are reported by hand, long after they happen.' },
    ],
    setup: [
      { title: 'Internal software', text: 'Built around how your departments actually work.' },
      { title: 'Field app for reps', text: 'Tracks representatives, stock per rep and visits.' },
      { title: 'Management dashboards', text: 'Visits and results reported without anyone compiling them.' },
    ],
    example: {
      title: 'Field app activity',
      subtitle: 'Recorded as it happens',
      feed: true,
      items: [
        { from: 'system', icon: 'box', title: 'Rep 2 checked stock on hand', detail: 'Stock per rep, up to date' },
        { from: 'system', icon: 'calendarCheck', title: 'Pharmacy visit logged', detail: 'Result recorded on the spot' },
        { from: 'system', icon: 'message', title: 'Warehouse notified', detail: 'Restock request, no calls needed' },
        { from: 'system', icon: 'chart', title: 'Dashboard updated', detail: "Today's field activity" },
      ],
    },
  },
]
