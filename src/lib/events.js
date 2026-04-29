export const EVENTS = []

export const getEventBySlug = (slug) => EVENTS.find((event) => event.slug === slug)

export const CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0?cid=Y29vc2NvdW50eXJlcHVibGljYW5z'
