const GHL_WEBHOOK_URL =
  process.env.GHL_EVENT_RSVP_WEBHOOK ||
  'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/b8b53720-18c4-4cde-9db9-c549de6264ee'

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = (body.firstName || '').toString().trim()
    const lastName = (body.lastName || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const phone = (body.phone || '').toString().trim()
    const eventName = (body.eventName || '').toString().trim()
    const eventDate = (body.eventDate || '').toString().trim()
    const eventTime = (body.eventTime || '').toString().trim()
    const eventCategory = (body.eventCategory || '').toString().trim()

    if (!firstName || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Event_RSVP',
      firstName,
      lastName,
      email,
      phone,
      eventName,
      eventDate,
      eventTime,
      eventCategory,
      source: 'src_event',
      submitted_at: new Date().toISOString(),
    }

    const upstream = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!upstream.ok) {
      console.error('[api/events/rsvp]: webhook failed', upstream.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/events/rsvp]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
