import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [
  process.env.GHL_ISSUES_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/XVFl34pDIwwm1Hr3qXss/webhook-trigger/zEi7FY5khjnzOzHKsVwm',
  process.env.GHL_COMPLIANCE_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/00000000-0000-0000-0000-000000000000',
]

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
      phone: normalizePhoneForSubmit(body.phone),
      issue_category: (body.category || '').toString(),
      issue_location: (body.location || '').toString().trim(),
      issue_subject: subject,
      issue_description: description,
      issue_image: '',
      sms_updates: body.sms_updates === 'Yes' ? 'Yes' : 'No',
      sms_promo: body.sms_promo === 'Yes' ? 'Yes' : 'No',
      source: 'src_issue',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/issues]: webhook error', url, error)
          return { ok: false }
        }),
      ),
    )

    if (!results.some((response) => response.ok)) {
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/issues]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
