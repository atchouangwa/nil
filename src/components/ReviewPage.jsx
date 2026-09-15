import React from 'react'
import { ArrowLeft, CheckCircle } from '@phosphor-icons/react'
import Brand from './Brand'

export default function ReviewPage() {
  return (
    <div className="confirmation-page">
      <div className="confirmation-nav shell"><Brand /></div>
      <main className="review-card shell">
        <CheckCircle size={40} weight="duotone" />
        <div className="kicker">APPLICATION RECEIVED</div>
        <h1>Thanks for applying.</h1>
        <p>Based on your answers, a private strategy call may not be the right next step today. Your application has still been recorded for review, and the team can follow up if there is a more appropriate path.</p>
        <a className="button button-secondary" href="/"><ArrowLeft size={17} /> Return to NIL Playbook</a>
      </main>
    </div>
  )
}
