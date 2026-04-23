const GHL_WEBHOOK_URL =
  process.env.GHL_CONTACT_WEBHOOK ||
  'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/cf2eced9-14ad-4109-ba4f-fd244858af10'

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = (body.firstName || '').toString().trim()
    const lastName = (body.lastName || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const phone = (body.phone || '').toString().trim()
    const message = (body.message || '').toString().trim()
    const smsUpdates = body.sms_updates === 'Yes' ? 'Yes' : 'No'
    const smsPromo = body.sms_promo === 'Yes' ? 'Yes' : 'No'

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Contact_Form',
      firstName,
      lastName,
      email,
      phone,
      message,
      sms_updates: smsUpdates,
      sms_promo: smsPromo,
      source: 'src_contact',
      submitted_at: new Date().toISOString(),
    }

    const upstream = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!upstream.ok) {
      console.error('[api/contact]: upstream webhook failed', upstream.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/contact]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
