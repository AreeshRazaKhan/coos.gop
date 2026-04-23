export const EVENTS = [
  {
    id: 'stevensville-town-hall-may-2026',
    name: 'Stevensville Town Hall',
    date: 'Saturday, May 9, 2026',
    time: '10:00 AM',
    category: 'Town Hall',
    location: 'Stevensville Community Center, Ravalli County',
    description:
      'Russ takes questions live from the Bitterroot Valley. Affordability, healthcare, and public lands on the agenda — plus whatever Montanans want on the record.',
  },
  {
    id: 'missoula-meet-and-greet-may-2026',
    name: 'Missoula Meet & Greet',
    date: 'Thursday, May 14, 2026',
    time: '6:30 PM',
    category: 'Meet & Greet',
    location: 'Caras Park Pavilion, Missoula',
    description:
      'Coffee, conversation, and a short remarks from Russ. Bring a question, bring a neighbor.',
  },
  {
    id: 'kalispell-volunteer-kickoff-may-2026',
    name: 'Flathead Valley Volunteer Kickoff',
    date: 'Saturday, May 23, 2026',
    time: '9:00 AM',
    category: 'Volunteer',
    location: 'IBEW Local 768 Hall, Kalispell',
    description:
      'Door-knocking orientation, phone bank setup, and a briefing on what the next 90 days look like in the Flathead.',
  },
  {
    id: 'helena-farmers-market-june-2026',
    name: 'Helena Farmers Market Meet & Greet',
    date: 'Saturday, June 6, 2026',
    time: '11:00 AM',
    category: 'Community',
    location: 'Fuller Avenue, Downtown Helena',
    description:
      'Find the campaign tent by the north end of the market. Russ will be around from 11 to 1 to talk corruption, affordability, and ranching.',
  },
  {
    id: 'bozeman-town-hall-june-2026',
    name: 'Bozeman Town Hall on Public Lands',
    date: 'Wednesday, June 17, 2026',
    time: '7:00 PM',
    category: 'Town Hall',
    location: 'The Emerson Center, Bozeman',
    description:
      'A focused town hall on public lands, water, and the roadless rule. Panelists from local conservation groups join Russ for Q&A.',
  },
]

export const getEventById = (id) => EVENTS.find((event) => event.id === id)
