const GHL_WEBHOOK_URL =
  process.env.GHL_ISSUES_WEBHOOK ||
  'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/3c2d23be-00aa-49d5-9d14-6597d2e93123'

const splitName = (fullName) => {
  const parts = fullName.trim().split(/\s+/)
  const firstName = parts[0] || ''
  const lastName = parts.slice(1).join(' ') || ''
  return { firstName, lastName }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const subject = (body.subject || '').toString().trim()
    const description = (body.description || '').toString().trim()

    if (!name || !email || !subject || !description) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { firstName, lastName } = splitName(name)

    const payload = {
      type: 'Issue_Report',
      firstName,
      lastName,
      email,
      issue_category: (body.category || '').toString(),
      issue_location: (body.location || '').toString().trim(),
      issue_subject: subject,
      issue_description: description,
      issue_image: '',
      source: 'src_issue',
      submitted_at: new Date().toISOString(),
    }

    const upstream = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!upstream.ok) {
      console.error('[api/issues]: upstream webhook failed', upstream.status)
      return Response.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/issues]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
