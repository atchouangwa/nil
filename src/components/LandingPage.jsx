import React from 'react'
import {
  ArrowRight, Check, Target, Megaphone, Briefcase, Handshake,
  ShieldCheck, Clock, ChartLineUp, UserFocus, Quotes
} from '@phosphor-icons/react'
import { Header, Footer } from './SiteChrome'

const research = [
  { value: '59%', label: 'of surveyed athletes said they earned less from NIL than expected' },
  { value: '58%', label: 'said at least one NIL deal failed to deliver what was promised' },
  { value: '47%', label: 'wished they had done fewer deals for more money' }
]

const gaps = [
  ['01', 'Visibility without positioning', 'People know you play a sport, but they cannot quickly explain what your personal brand represents.'],
  ['02', 'Content without strategy', 'You post, but the content does not consistently reinforce a memorable identity or audience fit.'],
  ['03', 'Audience without packaging', 'You have attention, but no clear media kit, partner concept, or professional offer structure.'],
  ['04', 'Interest without pursuit', 'You want partnerships, but mostly wait for brands to discover you or send inconsistent outreach.'],
  ['05', 'Deals without professionalism', 'When opportunity appears, pricing, rights, deliverables, follow-up, and renewal get improvised.']
]

const plays = [
  { n: '01', title: 'POSITION', icon: UserFocus, copy: 'Define your story, values, audience, interests, differentiators, and partner categories beyond the stat line.' },
  { n: '02', title: 'PUBLISH', icon: Megaphone, copy: 'Build a sustainable content system that fits training, travel, competition, and school.' },
  { n: '03', title: 'PACKAGE', icon: Briefcase, copy: 'Create the assets brands need to understand you, including your media kit, offer structure, and partnership concepts.' },
  { n: '04', title: 'PURSUE', icon: Target, copy: 'Build target-brand criteria, outreach, follow-up, relationship tracking, and an opportunity pipeline.' },
  { n: '05', title: 'PROFESSIONALIZE', icon: ShieldCheck, copy: 'Prepare for rates, deliverables, negotiation, compliance handoff, measurement, and renewal.' }
]

const deliverables = [
  'NIL marketability audit and personalized strategy',
  '1:1 athlete positioning and personal-brand map',
  'Customized content pillars and 90-day roadmap',
  'Professional media kit and brand-facing bio',
  'Target-brand strategy and prospect pipeline',
  'Cold and warm outreach messaging',
  'Rate, package, and deal-evaluation guardrails',
  'Weekly coaching, content review, and accountability',
  'Brand-call and negotiation preparation',
  'Renewal process and next-quarter growth plan'
]

const faq = [
  ['Do I need a large following?', 'No. Audience size can matter, but it is not the only factor affecting marketability. The Accelerator focuses on controllable areas such as positioning, content, audience fit, professional assets, outreach, and reliability.'],
  ['Do you guarantee NIL deals?', 'No. Brand decisions, market conditions, fit, timing, and athlete execution are outside our control. NIL Playbook helps you build the infrastructure required to pursue opportunities more professionally.'],
  ['What if I do not want to become an influencer?', 'You do not have to. The objective is to build an authentic personal brand around who you already are, not manufacture an online character.'],
  ['Can I do this during my season?', 'Yes, if you are willing to execute. The system is designed around the realities of being a student-athlete, so your content and NIL activity can fit around training and academics.'],
  ['Why not just learn this for free?', 'You can find a lot of NIL information online. The Accelerator is built for athletes who want personalized strategy, implementation, feedback, professional assets, accountability, and a repeatable system instead of assembling everything alone.']
]

function Cta({ label = 'Apply for the NIL Deal Accelerator' }) {
  return <a className="button button-primary" href="/apply">{label}<ArrowRight size={18} weight="bold" /></a>
}

export default function LandingPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> For college athletes ready to build beyond the stat line</div>
              <h1>You do not need to be the biggest name on the roster to build a brand worth knowing.</h1>
              <p className="lede">Build the positioning, content system, professional assets, and NIL opportunity engine that make you easier for the right brands to understand, trust, and work with.</p>
              <div className="hero-actions"><Cta /><a className="text-link" href="#how-it-works">See the 5-play system <ArrowRight size={15} /></a></div>
              <div className="hero-note"><ShieldCheck size={18} weight="fill" /><span>12-week high-touch implementation. No guaranteed sponsorships or income.</span></div>
            </div>
            <div className="hero-board" aria-label="NIL Playbook marketability system diagram">
              <div className="board-top"><span>THE GAME PLAN</span><span>05 PLAYS</span></div>
              <div className="board-field">
                <div className="field-line field-line-a" /><div className="field-line field-line-b" />
                <div className="route route-1" /><div className="route route-2" />
                <div className="player p1">P</div><div className="player p2">C</div><div className="player p3">A</div><div className="player p4">O</div>
                <div className="board-message"><span>FROM</span><strong>RANDOM NIL</strong><span>TO</span><strong>A PROFESSIONAL SYSTEM</strong></div>
              </div>
              <div className="board-bottom"><span>POSITION</span><span>PUBLISH</span><span>PACKAGE</span><span>PURSUE</span><span>PRO</span></div>
            </div>
          </div>
        </section>

        <section className="research-strip">
          <div className="shell research-grid">
            <div className="research-intro"><div className="kicker">THE REALITY</div><p>NIL headlines can make the market look effortless. Athlete research tells a different story.</p></div>
            {research.map((item) => <div className="stat" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
          <div className="shell source-note">Source: Student-Athlete Insights 2025 year-end survey, n=1,061. Figures describe the surveyed population and do not guarantee individual results.</div>
        </section>

        <section className="section shell" id="problem">
          <div className="section-heading split-heading">
            <div><div className="kicker">THE PROBLEM</div><h2>The Marketability Gap</h2></div>
            <p>You may already have a story, a team, local relevance, an audience, and commercial potential. The gap is turning those pieces into something a brand can quickly understand and confidently activate.</p>
          </div>
          <div className="gap-list">
            {gaps.map(([n, title, copy]) => <article className="gap-row" key={n}><span className="gap-num">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="manifesto"><Quotes size={28} weight="fill" /><p>Random posts. Random DMs. Random pricing. Random deals. Random advice. Random NIL is not a strategy.</p></div>
        </section>

        <section className="section section-ink" id="how-it-works">
          <div className="shell">
            <div className="section-heading split-heading inverse">
              <div><div className="kicker kicker-blue">THE SOLUTION</div><h2>The 5-Play NIL Marketability System</h2></div>
              <p>Five connected systems designed to make your athlete brand clearer, more consistent, more proactive, and easier to work with.</p>
            </div>
            <div className="play-grid">
              {plays.map(({ n, title, icon: Icon, copy }) => <article className="play-card" key={n}><div className="play-meta"><span>{n}</span><Icon size={24} weight="duotone" /></div><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
            <div className="center-cta"><Cta label="Apply to build your NIL playbook" /></div>
          </div>
        </section>

        <section className="section shell">
          <div className="window-grid">
            <div className="window-copy"><div className="kicker">THE BIGGER OPPORTUNITY</div><h2>Your jersey gives you a window.</h2><p>Being a college athlete gives you a natural reason for people to pay attention. That window does not stay open forever. The goal is not to squeeze random sponsorships out of your college career. It is to build something you can still use when the jersey comes off.</p></div>
            <div className="asset-card">
              <span className="asset-label">BUILD AN ASSET</span>
              <div className="asset-lines">
                {['A recognizable personal brand','Content creation skills','Professional relationships','A stronger network','A repeatable opportunity system'].map((x, i) => <div className="asset-line" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <div className="section-heading centered"><div className="kicker">NO FAKE INFLUENCER PERSONA REQUIRED</div><h2>Build around what is already true about you.</h2><p>Your story, values, personality, interests, community, career goals, and sport can become the raw material for a brand that feels authentic.</p></div>
            <div className="principle-grid">
              <article><Megaphone size={28} /><h3>Authentic content</h3><p>Create around a clear identity instead of forcing every trend.</p></article>
              <article><Handshake size={28} /><h3>Aligned partnerships</h3><p>Pursue categories and companies that make sense for you and your audience.</p></article>
              <article><ChartLineUp size={28} /><h3>Professional pursuit</h3><p>Proactive relationship-building is not desperation. It is the business side of opportunity.</p></article>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="implementation-grid">
            <div className="implementation-copy"><div className="kicker">HIGH-TOUCH IMPLEMENTATION</div><h2>This is not another NIL course.</h2><p>Information is already everywhere. NIL Deal Accelerator is built for athletes who want personalized strategy, implementation, feedback, professional assets, accountability, and a system they can actually execute.</p><Cta /></div>
            <div className="deliverable-card"><div className="deliverable-head"><span>WHAT WE BUILD WITH YOU</span><Clock size={22} /></div><ul>{deliverables.map((item) => <li key={item}><Check size={17} weight="bold" />{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="section section-ink fit-section">
          <div className="shell fit-grid">
            <div><div className="kicker kicker-blue">A GOOD FIT IF</div><h2>You are ready to operate professionally.</h2><ul className="fit-list"><li><Check />You are a current or incoming college athlete</li><li><Check />You want to build beyond athletic performance</li><li><Check />Your content or outreach feels random</li><li><Check />You want to proactively pursue aligned brands</li><li><Check />You are willing to implement consistently</li></ul></div>
            <div className="not-fit"><span>THIS IS NOT FOR YOU IF</span><p>You want guaranteed deals, guaranteed income, viral hacks, or someone to do everything while you stay passive.</p><p className="not-fit-small">The program is designed around professionalization, implementation, and opportunity creation. Brand decisions remain outside our control.</p></div>
          </div>
        </section>

        <section className="section shell faq-section">
          <div className="faq-heading"><div className="kicker">BEFORE YOU APPLY</div><h2>Questions athletes ask before the call.</h2></div>
          <div className="faq-list">
            {faq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner"><div><div className="kicker kicker-blue">YOUR NEXT PLAY</div><h2>Stop waiting to get picked.</h2><p>Apply for the NIL Deal Accelerator and see whether a structured 12-week implementation program is the right fit for where you are now.</p></div><Cta label="Start my application" /></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
