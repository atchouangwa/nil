import React, { useEffect } from 'react'
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  UserCircle,
  VideoCamera,
  ShieldCheck,
  Target,
  ChatCircleText,
  ListChecks
} from '@phosphor-icons/react'
import Brand from './Brand'
import WistiaVideo from './WistiaVideo'
import './ConfirmedPage.css'

const videos = {
  hero: import.meta.env.VITE_WISTIA_CONFIRMATION_HERO || 'WISTIA_CONFIRMATION_HERO',
  following: import.meta.env.VITE_WISTIA_CONFIRMATION_FOLLOWING || 'WISTIA_CONFIRMATION_FOLLOWING',
  system: import.meta.env.VITE_WISTIA_CONFIRMATION_SYSTEM || 'WISTIA_CONFIRMATION_SYSTEM',
  call: import.meta.env.VITE_WISTIA_CONFIRMATION_CALL || 'WISTIA_CONFIRMATION_CALL',
  influencer: import.meta.env.VITE_WISTIA_CONFIRMATION_INFLUENCER || 'WISTIA_CONFIRMATION_INFLUENCER',
  investment: import.meta.env.VITE_WISTIA_CONFIRMATION_INVESTMENT || 'WISTIA_CONFIRMATION_INVESTMENT'
}

const breakoutVideos = [
  {
    number: '01',
    mediaId: videos.following,
    title: 'Do I need a huge following for NIL to matter?',
    duration: '3 to 4 minutes',
    summary: 'No. Audience size can matter, but it is only one part of marketability. This video explains the difference between having followers and becoming commercially understandable to the right brands.',
    chapters: ['The short answer', 'What brands can evaluate', 'What to control next']
  },
  {
    number: '02',
    mediaId: videos.system,
    title: 'What does NIL Deal Accelerator actually help me build?',
    duration: '4 to 5 minutes',
    summary: 'This walks through the five connected systems behind the program: Position, Publish, Package, Pursue, and Professionalize, and why random NIL activity is not the same thing as having an operating system.',
    chapters: ['The Marketability Gap', 'The five plays', 'What gets built with you']
  },
  {
    number: '03',
    mediaId: videos.call,
    title: 'What actually happens on the strategy call?',
    duration: '2 to 3 minutes',
    summary: 'The call is a diagnosis first. We review your current brand, content, opportunity process, and goals, then determine what the highest-leverage next moves are and whether the Accelerator is a fit.',
    chapters: ['What we review', 'What we diagnose', 'What happens at the end']
  },
  {
    number: '04',
    mediaId: videos.influencer,
    title: 'What if I do not want to become an influencer?',
    duration: '3 to 4 minutes',
    summary: 'You do not need to manufacture a fake online personality. This video explains how to build around your actual story, values, interests, community, goals, and sport without turning your life into nonstop ads.',
    chapters: ['Influencer versus athlete brand', 'What authenticity actually means', 'How to create without forcing it']
  },
  {
    number: '05',
    mediaId: videos.investment,
    title: 'Why invest $4,997 when there is free NIL information everywhere?',
    duration: '4 to 5 minutes',
    summary: 'Information is not the scarce part. The investment is for personalized strategy, implementation, feedback, professional assets, accountability, and a system built around your specific athlete brand.',
    chapters: ['Free information versus implementation', 'What the investment covers', 'Who should not make the investment']
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
            <h2 id="start-here-title">The NIL window is temporary. What you build from it does not have to be.</h2>
            <p>In this video, I explain what one viral moment taught me about attention, why I kept building content while playing Division I basketball, and why I believe athletes should leave college with more than highlights and memories.</p>
          </div>

          <div className="confirmation-video-shell">
            <WistiaVideo
              mediaId={videos.hero}
              title="Watch This Before Your NIL Strategy Call"
              eyebrow="START HERE"
              duration="6 to 7 minutes"
              chapters={['Why this call exists', 'My NIL journey', 'The Marketability Gap', 'What to understand before we talk']}
            />
          </div>

          <div className="founder-proof-quote">
            <div className="kicker">IN BB'S WORDS</div>
            <blockquote>“Last month, I contracted over $12,000 from social media, all while playing Division 1 basketball.”</blockquote>
            <p>This reflects Brian “BB” Knight's own stated experience and is not a representation or guarantee of what another athlete will earn. NIL Playbook does not guarantee sponsorships, income, follower growth, response rates, or any specific result.</p>
          </div>
        </section>

        <section className="confirmation-briefing">
          <div className="confirmation-section-copy centered-copy">
            <div className="kicker">ANSWER THE QUESTIONS THAT MATTER TO YOU</div>
            <h2>Pick the videos that match what you are thinking right now.</h2>
            <p>Each video starts with the short answer, then goes deeper. You do not need to watch them in order. Use the chapters and consume the ones that help you arrive at the call better informed.</p>
          </div>

          <div className="confirmation-video-library">
            {breakoutVideos.map((item) => (
              <article className="confirmation-breakout" key={item.number}>
                <div className="confirmation-breakout-copy">
                  <span className="faq-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <WistiaVideo
                  mediaId={item.mediaId}
                  title={item.title}
                  eyebrow={`BREAKOUT ${item.number}`}
                  duration={item.duration}
                  chapters={item.chapters}
                />
              </article>
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
