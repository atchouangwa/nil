import React, { useEffect } from 'react'
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  UserCircle,
  VideoCamera,
  ShieldCheck,
  PlayCircle,
  Target,
  ChatCircleText,
  ListChecks
} from '@phosphor-icons/react'
import Brand from './Brand'
import InstagramReel from './InstagramReel'
import './ConfirmedPage.css'

const faqs = [
  {
    question: 'Do I need a huge following for NIL to matter?',
    answer: 'No. Audience size can matter, but it is only one part of marketability. Your positioning, content quality, audience fit, professionalism, reliability, story, geography, and ability to make a partnership useful to a brand can all matter too.'
  },
  {
    question: 'What does NIL Deal Accelerator actually help me build?',
    answer: 'The program is built around five connected systems: Position, Publish, Package, Pursue, and Professionalize. The goal is to help you stop approaching NIL as random posts, random DMs, and random opportunities, and start operating with a repeatable athlete brand and opportunity system.'
  },
  {
    question: 'What will happen on the strategy call?',
    answer: 'We will review where your brand currently stands, identify the biggest gaps in your positioning, content, assets, and opportunity process, map the highest-leverage next steps, and determine whether NIL Deal Accelerator is the right fit. It is a strategy conversation first.'
  },
  {
    question: 'What if I do not want to become an influencer?',
    answer: 'You do not have to. The point is not to manufacture a fake online personality. The strongest athlete brands are built around what is already true about you: your story, interests, values, community, goals, personality, and sport.'
  }
]

const prep = [
  {
    icon: Clock,
    number: '01',
    title: 'Protect the time',
    copy: 'Use the Calendly invite that was just sent to your inbox and block the full appointment window. Join from somewhere quiet where you can focus.'
  },
  {
    icon: UserCircle,
    number: '02',
    title: 'Bring the right person',
    copy: 'If a parent, guardian, agent, or another decision-maker needs to approve the investment, have them join the call from the beginning.'
  },
  {
    icon: VideoCamera,
    number: '03',
    title: 'Have your profiles ready',
    copy: 'Be ready to open your Instagram, TikTok, current NIL opportunities, and any brand assets you already have. We want to diagnose the real picture.'
  }
]

export default function ConfirmedPage() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'ConfirmationViewed' })
  }, [])

  return (
    <div className="confirmation-page confirmation-page-v2">
      <header className="confirmation-topbar">
        <div className="confirmation-container confirmation-topbar-inner">
          <Brand />
          <div className="confirmation-status"><CalendarCheck size={16} weight="fill" /> Strategy call booked</div>
        </div>
      </header>

      <main className="confirmation-container confirmation-main">
        <section className="confirmation-intro">
          <div className="success-icon"><CalendarCheck size={30} weight="fill" /></div>
          <div className="kicker">YOUR CALL IS CONFIRMED</div>
          <h1>You are booked. Now use the next few minutes to make the call more valuable.</h1>
          <p className="confirmation-lede">You have already taken the first step. This page is here to answer the questions most athletes have after booking, show you why NIL Playbook exists, and make sure you arrive at the call with the right context.</p>
          <div className="confirmation-progress">
            <span className="active">1. Application complete</span>
            <ArrowRight size={14} />
            <span className="active">2. Call booked</span>
            <ArrowRight size={14} />
            <span>3. Prepare for the call</span>
          </div>
        </section>

        <section className="confirmation-hero-video" aria-labelledby="start-here-title">
          <div className="confirmation-section-copy">
            <div className="kicker kicker-blue">START HERE</div>
            <h2 id="start-here-title">Why I believe your sport can become the vehicle for something bigger.</h2>
            <p>This is not a generic “thanks for booking” video. It is the story behind why I started taking content seriously while still playing Division I basketball, what that decision opened up for me, and why I am committed to helping other athletes build something beyond the game.</p>
          </div>

          <div className="confirmation-reel-card">
            <div className="confirmation-reel-label"><PlayCircle size={18} weight="fill" /> Watch before your call</div>
            <InstagramReel />
          </div>

          <div className="founder-proof-quote">
            <div className="kicker">IN BB'S WORDS</div>
            <blockquote>“Last month, I contracted over $12,000 from social media, all while playing Division 1 basketball.”</blockquote>
            <p>That is Brian “BB” Knight describing his own experience in the Reel above. Individual results vary. NIL Playbook does not guarantee sponsorships, income, follower growth, response rates, or any specific result.</p>
          </div>
        </section>

        <section className="confirmation-briefing">
          <div className="confirmation-section-copy centered-copy">
            <div className="kicker">THE 4 THINGS TO UNDERSTAND BEFORE WE TALK</div>
            <h2>Come into the call with clarity, not more random NIL advice.</h2>
            <p>These are the questions that usually determine whether an athlete sees NIL as a popularity contest or as something they can learn to approach professionally.</p>
          </div>

          <div className="confirmation-faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span className="faq-number">0{index + 1}</span>
                  <span>{item.question}</span>
                  <span className="faq-plus">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="confirmation-preframe">
          <div className="preframe-heading">
            <Target size={28} weight="duotone" />
            <div>
              <div className="kicker kicker-blue">THE MINDSET FOR THE CALL</div>
              <h2>We are not trying to get you more random deals.</h2>
            </div>
          </div>
          <div className="belief-list belief-list-v2">
            {[
              'I can deliberately improve how marketable I am to the right brands.',
              'More followers alone will not fix unclear positioning, weak content, or a missing opportunity system.',
              'Professional outreach is not desperation. It is how I create more control over who I work with.',
              'The goal is to leave college with a brand, relationships, skills, and systems that can still matter after my last game.'
            ].map((item) => <p key={item}><Check size={18} weight="bold" />{item}</p>)}
          </div>
        </section>

        <section className="confirmation-prep">
          <div className="confirmation-section-copy centered-copy">
            <div className="kicker">BEFORE YOUR APPOINTMENT</div>
            <h2>Do these three things now.</h2>
            <p>The better prepared you are, the more useful the strategy conversation can be.</p>
          </div>
          <div className="prep-grid prep-grid-v2">
            {prep.map(({ icon: Icon, number, title, copy }) => (
              <article key={number}>
                <div className="prep-card-top"><Icon size={24} weight="duotone" /><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="confirmation-expectations">
          <div className="expectation-main">
            <ChatCircleText size={28} weight="duotone" />
            <div>
              <div className="kicker">WHAT HAPPENS NEXT</div>
              <h2>Watch your inbox. Then show up ready to talk specifics.</h2>
              <p>Calendly will send the appointment details and reminders. If something changes, reply to the confirmation email instead of simply missing the call. On the call, we will review your current situation, diagnose your Marketability Gap, and map what your next moves should be.</p>
            </div>
          </div>
          <div className="expectation-checklist">
            <p><Check size={17} weight="bold" /> Calendar invite received</p>
            <p><Check size={17} weight="bold" /> Decision-maker invited if needed</p>
            <p><Check size={17} weight="bold" /> Social profiles ready to review</p>
            <p><Check size={17} weight="bold" /> NIL goals written down</p>
          </div>
        </section>

        <section className="confirmation-final">
          <div className="confirmation-final-icon"><ListChecks size={28} weight="duotone" /></div>
          <div>
            <div className="kicker kicker-blue">ONE LAST THING</div>
            <h2>The call works best when you are honest about where you are.</h2>
            <p>You do not need to impress us. You do not need a huge following. You do not need a perfect brand. Bring the real version of what you have now, what is not working, and what you want to build. That gives us something useful to work with.</p>
          </div>
        </section>

        <section className="confirmation-disclaimer">
          <ShieldCheck size={22} weight="duotone" />
          <p>NIL Deal Accelerator is an education, coaching, and implementation program. It does not guarantee sponsorships, income, follower growth, brand responses, or a specific timeline. Individual NIL opportunities remain subject to market demand, fit, execution, school policies, applicable rules, and brand decisions.</p>
        </section>
      </main>
    </div>
  )
}
