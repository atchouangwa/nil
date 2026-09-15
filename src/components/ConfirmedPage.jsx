import React from 'react'
import { CalendarCheck, Check, Clock, UserCircle, VideoCamera, ShieldCheck } from '@phosphor-icons/react'
import Brand from './Brand'

export default function ConfirmedPage() {
  return (
    <div className="confirmation-page">
      <div className="confirmation-nav shell"><Brand /></div>
      <main className="confirmation-shell shell">
        <section className="confirmation-hero">
          <div className="success-icon"><CalendarCheck size={30} weight="fill" /></div>
          <div className="kicker">CALL CONFIRMED</div>
          <h1>You are booked. Make the call count.</h1>
          <p>Your strategy call is for diagnosing your Marketability Gap, mapping the highest-leverage next plays, and determining whether NIL Deal Accelerator is the right fit.</p>
        </section>

        <section className="prep-grid">
          <article><Clock size={24} /><span>01</span><h3>Protect the time</h3><p>Add the call to your calendar and join from somewhere quiet where you can focus.</p></article>
          <article><UserCircle size={24} /><span>02</span><h3>Bring decision-makers</h3><p>If a parent, guardian, or other person needs to approve the investment, have them join the call.</p></article>
          <article><VideoCamera size={24} /><span>03</span><h3>Have your profiles ready</h3><p>Be prepared to walk through your current social profiles, NIL activity, and what you want to build.</p></article>
        </section>

        <section className="preframe-card">
          <div><div className="kicker kicker-blue">BEFORE THE CALL</div><h2>The mindset that makes this conversation useful.</h2></div>
          <div className="belief-list">
            {[
              'Marketability is something you can deliberately improve.',
              'Random posting and waiting for inbound deals is not a professional operating system.',
              'Proactive outreach can be professional without becoming fake or desperate.',
              'The goal is not more random deals. It is better systems, better-fit opportunities, and durable brand value.'
            ].map(x => <p key={x}><Check size={18} weight="bold" />{x}</p>)}
          </div>
        </section>

        <section className="expectation-card"><ShieldCheck size={26} weight="duotone" /><div><h3>What this call is not</h3><p>This is not a promise of sponsorships, guaranteed NIL income, follower growth, or a specific timeline. The purpose is to build clarity around the controllable systems that make you more marketable and professionally prepared.</p></div></section>
      </main>
    </div>
  )
}
