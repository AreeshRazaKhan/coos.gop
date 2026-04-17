export const EVENTS = [
  {
    slug: 'hamilton-town-hall-may-02',
    day: '02',
    month: 'May',
    year: '2026',
    iso: '2026-05-02',
    time: '10:00 AM',
    endTime: '12:00 PM',
    title: 'Hamilton Town Hall',
    place: 'Ravalli County Fairgrounds',
    address: '100 Old Corvallis Rd, Hamilton, MT 59840',
    type: 'Town Hall',
    description:
      'Open town hall — healthcare, affordability, and public lands. Bring questions; doors open at 9:30 AM.',
  },
  {
    slug: 'ravalli-county-fair-may-08',
    day: '08',
    month: 'May',
    year: '2026',
    iso: '2026-05-08',
    time: 'All day',
    endTime: null,
    title: 'Ravalli County Fair',
    place: 'Fairgrounds',
    address: 'Stevensville, MT 59870',
    type: 'Community',
    description:
      'Stop by the Cleveland for Congress booth. Meet the team. Pick up a yard sign. Say hi to Russ between the livestock barns.',
  },
  {
    slug: 'union-hall-meet-missoula-may-12',
    day: '12',
    month: 'May',
    year: '2026',
    iso: '2026-05-12',
    time: '6:30 PM',
    endTime: '8:00 PM',
    title: 'Union Hall Meet & Greet',
    place: 'IBEW Local 532',
    address: 'Missoula, MT',
    type: 'Labor',
    description:
      'Conversation with working Montanans about wages, healthcare, and the 50:1 executive pay cap Russ has pledged to champion.',
  },
  {
    slug: 'coffee-saint-regis-may-16',
    day: '16',
    month: 'May',
    year: '2026',
    iso: '2026-05-16',
    time: '8:00 AM',
    endTime: '9:30 AM',
    title: 'Coffee with Russ',
    place: 'Riverside Cafe',
    address: 'Saint Regis, MT',
    type: 'Grassroots',
    description:
      'Small-group coffee in Russ & Kate\u2019s home county. No speeches \u2014 just conversation.',
  },
  {
    slug: 'public-lands-roundtable-kalispell-may-21',
    day: '21',
    month: 'May',
    year: '2026',
    iso: '2026-05-21',
    time: '5:00 PM',
    endTime: '7:00 PM',
    title: 'Public Lands Roundtable',
    place: 'Community Hall',
    address: 'Kalispell, MT',
    type: 'Public Lands',
    description:
      'Tribal leaders, sportsmen, and working-land stewards on the roadless rule and the fight over Montana\u2019s public lands.',
  },
]

export const getEventBySlug = (slug) => EVENTS.find((event) => event.slug === slug)

export const CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0?cid=Y2xldmVsYW5kZm9yY29uZ3Jlc3M'
