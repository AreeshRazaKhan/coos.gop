export const EVENTS = []

export const getEventBySlug = (slug) => EVENTS.find((event) => event.slug === slug)

export const CALENDAR_URL =
  'https://calendar.google.com/calendar/embed?src=c_1a09e4c3ac92bc619c2488f5620fc4517beb60820abef2c8d90bd155a640ebdc%40group.calendar.google.com&ctz=America%2FDenver'
