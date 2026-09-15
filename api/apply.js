import crypto from 'node:crypto'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const payload = req.body || {}
  const applicationId = `nil_${crypto.randomUUID()}`
  const body = {
    ...payload,
    applicationId,
    submittedAt: new Date().toISOString()
  }

  const webhook = process.env.APPLICATION_WEBHOOK_URL
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!response.ok) throw new Error(`Webhook returned ${response.status}`)
    } catch (error) {
      console.error('Application webhook failed', error)
    }
  } else {
    console.info('NIL application received', body)
  }

  return res.status(200).json({ ok: true, applicationId })
}
