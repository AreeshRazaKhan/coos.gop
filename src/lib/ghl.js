import { parse as parseHTML } from 'node-html-parser'

const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID
const PUBLIC_BLOG_ORIGIN = process.env.GHL_PUBLIC_BLOG_ORIGIN || 'https://coos.gop'

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

// ============================================================================
//  Blog posts — /blogs/posts/list
//
//  Notes from API exploration:
//  - The list endpoint is the only one this Private Integration Token can hit.
//    GET /blogs/posts/{id} returns 401 ("This route is not yet supported by the
//    IAM Service") with a PIT, so we cannot fetch a single post directly.
//  - The list endpoint accepts only locationId, blogId, limit (≤ 10), offset.
//    `urlSlug`, `postId`, `content`, `includeContent` are all rejected as
//    unknown properties.
//  - The `content` field comes back as an empty string from the list endpoint
//    regardless of API version, so the body must be rendered from `description`
//    (or readers can click out to the GHL-hosted `canonicalLink`).
// ============================================================================

const formatPostDate = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}

const PLACEHOLDER_DESCRIPTION = /^new blog post description$/i

const normalizePost = (post) => {
  const minutes = Math.max(1, Math.round(post.readTimeInMinutes ?? 1))
  const description = post.description || ''
  const isPlaceholderDescription =
    description && PLACEHOLDER_DESCRIPTION.test(description.trim())
  // Body source priority:
  //   1. `content` (rich HTML from GHL editor — only returned by the single-post
  //      endpoint, which is currently IAM-blocked but will flow through here
  //      automatically once GHL unlocks it for PITs)
  //   2. `description` (always returned by the list endpoint, plain-text field
  //      filled in via GHL's blog editor)
  //   3. empty string
  const body = (post.content && post.content.trim()) ? post.content
    : (description && !isPlaceholderDescription) ? description
    : ''
  const isHtml = !!(post.content && post.content.trim())

  return {
    id: post.urlSlug || post._id,
    slug: post.urlSlug,
    _id: post._id,
    blogId: post.blogId,
    title: post.title || '',
    description: isPlaceholderDescription ? '' : description,
    body,
    bodyIsHtml: isHtml,
    image: post.imageUrl || '/placeholder-post.svg',
    imageAlt: post.imageAltText || post.title || '',
    author: post.author?.name && post.author.name !== 'untitled' ? post.author.name : 'Coos County Republicans',
    category:
      post.categories?.[0]?.label && post.categories[0].label !== 'untitled'
        ? post.categories[0].label
        : 'Article',
    publishedAt: post.publishedAt,
    publishedDate: formatPostDate(post.publishedAt),
    readTime: `${minutes} min read`,
    canonicalLink: post.canonicalLink || '',
    source: 'ghl',
  }
}

// Scrape the rich-text body from the public GHL-hosted blog page. The
// API does not expose `content` to PIT auth (single-post endpoint is
// IAM-blocked), but the public Sites Builder URL `coos.gop/post/{slug}`
// renders the full body server-side. We extract the inner HTML of the
// `#blogPostContent` container — the wrapper GHL's blog template uses.
const fetchGHLPostBodyHtml = async (slug) => {
  if (!slug) return ''
  try {
    const res = await fetch(`${PUBLIC_BLOG_ORIGIN}/post/${slug}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; CoosCountyRepublicans/1.0; +https://coos.gop)',
      },
      next: { revalidate: 60 },
    })
    if (!res.ok) return ''
    const html = await res.text()
    const root = parseHTML(html)
    const container = root.querySelector('#blogPostContent')
    if (!container) return ''
    // Drop the H1 (we render our own H1 from the post title)
    const h1 = container.querySelector('h1')
    if (h1) h1.remove()
    // Strip Squarespace inline styles + class names so our .article-body
    // typography (Vollkorn / Crimson Pro / brand colors) applies cleanly.
    container.querySelectorAll('*').forEach((el) => {
      el.removeAttribute('style')
      el.removeAttribute('class')
      el.removeAttribute('data-indent')
      el.removeAttribute('data-toc-id')
      el.removeAttribute('id')
    })
    // Unwrap <span> tags — once styles are stripped they're empty wrappers.
    return container
      .innerHTML.trim()
      .replace(/<span\b[^>]*>/gi, '')
      .replace(/<\/span>/gi, '')
  } catch (error) {
    console.error('[fetchGHLPostBodyHtml]:', error)
    return ''
  }
}

const fetchGHLPostById = async (id) => {
  // Tries the single-post endpoint first. Returns the post if successful, null
  // otherwise. Currently 401s for PITs ("This route is not yet supported by
  // the IAM Service"); the moment GHL flips that route to IAM, this starts
  // returning full content with zero code changes.
  if (!GHL_API_KEY || !GHL_LOCATION_ID || !id) return null
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/blogs/posts/${id}?locationId=${GHL_LOCATION_ID}`,
      { headers: buildHeaders(), next: { revalidate: 60 } },
    )
    if (!res.ok) return null
    const data = await res.json()
    const record = data.blogPost ?? data.post ?? data
    if (!record?._id) return null
    return record
  } catch {
    return null
  }
}

export const fetchGHLPosts = async () => {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.warn('[fetchGHLPosts]: GHL credentials missing')
    return []
  }
  const collected = []
  let offset = 0
  const limit = 10
  // Hard cap at 200 posts (20 pages) to avoid runaway pagination.
  for (let page = 0; page < 20; page += 1) {
    try {
      const url = `${GHL_BASE_URL}/blogs/posts/list?locationId=${GHL_LOCATION_ID}&limit=${limit}&offset=${offset}`
      const res = await fetch(url, { headers: buildHeaders(), next: { revalidate: 60 } })
      if (!res.ok) {
        console.error('[fetchGHLPosts]: non-2xx', res.status, await res.text())
        break
      }
      const data = await res.json()
      const batch = data.blogPosts ?? []
      collected.push(...batch)
      const total = data.count ?? batch.length
      if (batch.length === 0 || collected.length >= total) break
      offset += limit
    } catch (error) {
      console.error('[fetchGHLPosts]:', error)
      break
    }
  }
  return collected
    .map(normalizePost)
    .filter((post) => post.title)
    .sort((a, b) => {
      const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
      const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
      return db - da
    })
}

export const fetchGHLPost = async (slugOrId) => {
  if (!slugOrId) return null
  // First, find the post in the list (the only source of truth for its _id
  // and full metadata when the slug is the route param).
  const all = await fetchGHLPosts()
  const fromList = all.find(
    (post) => post.slug === slugOrId || post._id === slugOrId,
  )
  if (!fromList) return null

  // Two body sources — both run in parallel:
  //   1. /blogs/posts/{id} (IAM-blocked today, will start working when GHL
  //      enables IAM on this route — at which point we get rich HTML directly
  //      from the API).
  //   2. Scrape the public coos.gop blog page for #blogPostContent (works
  //      today since the GHL Sites Builder template is published).
  const [richRecord, scrapedBody] = await Promise.all([
    fetchGHLPostById(fromList._id),
    fetchGHLPostBodyHtml(fromList.slug),
  ])

  if (richRecord && richRecord.content && richRecord.content.trim()) {
    return normalizePost(richRecord)
  }

  if (scrapedBody) {
    return { ...fromList, body: scrapedBody, bodyIsHtml: true }
  }

  return fromList
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
