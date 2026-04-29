import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [
  process.env.GHL_GET_INVOLVED_WEBHOOK_1 ||
    'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/23834100-4e00-4579-82e7-f9ec69ed8542',
  process.env.GHL_GET_INVOLVED_WEBHOOK_2 ||
    'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/df947411-0c7e-4a6c-8c2e-7f20291c333f',
  process.env.GHL_GET_INVOLVED_WEBHOOK_3 ||
    'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger/19e7758c-f5c5-44fa-a770-5c18cefa0645',
  process.env.GHL_COMPLIANCE_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/XVFl34pDIwwm1Hr3qXss/webhook-trigger/VdldWHSDeAJebFb0qFG2',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = (body.firstName || '').toString().trim()
    const lastName = (body.lastName || '').toString().trim()
    const email = (body.email || '').toString().trim()

    if (!firstName || !lastName || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Get_Involved_Form',
      firstName,
      lastName,
      email,
      phone: normalizePhoneForSubmit(body.phone),
      zipCode: (body.zipCode || '').toString().trim(),
      county: (body.county || '').toString(),
      region: (body.region || '').toString(),
      registeredVoter: (body.registeredVoter || '').toString(),
      campaignExperience: (body.campaignExperience || '').toString(),
      helpOptions: (body.helpOptions || '').toString(),
      availability: (body.availability || '').toString(),
      issues: (body.issues || '').toString().trim(),
      anythingElse: (body.anythingElse || '').toString().trim(),
      sms_updates: body.sms_updates === 'Yes' ? 'Yes' : 'No',
      sms_promo: body.sms_promo === 'Yes' ? 'Yes' : 'No',
      source: 'src_get_involved',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/get-involved]: webhook error', url, error)
          return { ok: false }
        }),
      ),
    )

    if (!results.some((response) => response.ok)) {
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/get-involved]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
