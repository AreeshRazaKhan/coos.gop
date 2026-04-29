const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

const buildHeaders = () => ({
  Authorization: `Bearer ${GHL_API_KEY}`,
  Version: '2021-07-28',
  Accept: 'application/json',
})

const EVENTS_SCHEMA_KEY = 'custom_objects.events'

const TIME_LABELS = {
  '600_am': '6:00 AM',
  '630_am': '6:30 AM',
  '700_am': '7:00 AM',
  '730_am': '7:30 AM',
  '800_am': '8:00 AM',
  '830_am': '8:30 AM',
  '900_am': '9:00 AM',
  '930_am': '9:30 AM',
  '1000_am': '10:00 AM',
  '1030_am': '10:30 AM',
  '1100_am': '11:00 AM',
  '1130_am': '11:30 AM',
  '1200_pm': '12:00 PM',
  '1230_pm': '12:30 PM',
  '100_pm': '1:00 PM',
  '130_pm': '1:30 PM',
  '200_pm': '2:00 PM',
  '230_pm': '2:30 PM',
  '300_pm': '3:00 PM',
  '330_pm': '3:30 PM',
  '400_pm': '4:00 PM',
  '430_pm': '4:30 PM',
  '500_pm': '5:00 PM',
  '530_pm': '5:30 PM',
  '600_pm': '6:00 PM',
  '630_pm': '6:30 PM',
  '700_pm': '7:00 PM',
  '730_pm': '7:30 PM',
  '800_pm': '8:00 PM',
  '830_pm': '8:30 PM',
  '900_pm': '9:00 PM',
}

const CATEGORY_LABELS = {
  rally: 'Rally',
  town_hall: 'Town Hall',
  fundraiser: 'Fundraiser',
  debate: 'Debate',
  press_conference: 'Press Conference',
  community_meetup: 'Community Meetup',
  volunteer_drive: 'Volunteer Drive',
  doortodoor_campaign: 'Door-to-Door Campaign',
  victory_celebration: 'Victory Celebration',
  protest__march: 'Protest / March',
  other: 'Other',
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const parseDate = (dateStr) => {
  if (!dateStr) return null
  const parsed = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return null
  return {
    month: MONTHS[parsed.getMonth()],
    day: String(parsed.getDate()).padStart(2, '0'),
    year: String(parsed.getFullYear()),
    raw: dateStr,
  }
}

const normalizeEvent = (record) => {
  const properties = record?.properties ?? {}

  // Field-key aliases — your GHL schema uses different slugs than the rule file
  // documents, so accept either set. Whichever field is populated wins.
  const title = properties.events ?? properties.event_name ?? ''
  const startDateRaw = properties.event_start_date ?? properties.event_date
  const endDateRaw = properties.event_end_date
  const startTimeSlug = properties.event_start_time ?? properties.select_time
  const endTimeSlug = properties.event_end_time ?? properties.end_time

  const startDate =
    parseDate(startDateRaw) ?? { month: '', day: '', year: '', raw: '' }
  const endDate = parseDate(endDateRaw)
  const time = TIME_LABELS[startTimeSlug] ?? startTimeSlug ?? ''
  const endTime = TIME_LABELS[endTimeSlug] ?? endTimeSlug ?? ''
  const type = CATEGORY_LABELS[properties.event_category] ?? properties.event_category ?? ''
  const image = properties.event_image?.[0]?.url || '/placeholder-event.svg'
  const location = properties.event_location || ''

  return {
    id: record.id,
    title,
    description: properties.event_description || '',
    date: startDate,
    endDate,
    time,
    endTime,
    location,
    address: location,
    image,
    type,
    source: 'ghl',
  }
}

export const fetchGHLEvents = async () => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.warn('[fetchGHLEvents]: GHL credentials missing — returning empty list')
    return []
  }
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/objects/${EVENTS_SCHEMA_KEY}/records/search`,
      {
        method: 'POST',
        headers: { ...buildHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          page: 1,
          pageLimit: 50,
          query: '',
          searchAfter: [],
        }),
        next: { revalidate: 60 },
      },
    )
    if (!res.ok) {
      console.error('[fetchGHLEvents]: non-2xx', res.status, await res.text())
      return []
    }
    const data = await res.json()
    const records = data.records ?? []
    return records.map(normalizeEvent).sort((a, b) => {
      const da = a.date.raw ? new Date(a.date.raw) : new Date(0)
      const db = b.date.raw ? new Date(b.date.raw) : new Date(0)
      return da - db
    })
  } catch (error) {
    console.error('[fetchGHLEvents]:', error)
    return []
  }
}

export const fetchGHLEvent = async (eventId) => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID || !eventId) return null
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/objects/${EVENTS_SCHEMA_KEY}/records/${eventId}`,
      { headers: buildHeaders(), next: { revalidate: 60 } },
    )
    if (!res.ok) return null
    const data = await res.json()
    const record = data.record ?? data
    if (!record?.id && !record?.properties) return null
    return normalizeEvent(record)
  } catch (error) {
    console.error('[fetchGHLEvent]:', error)
    return null
  }
}
