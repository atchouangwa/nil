import React from 'react'
import {
  ArrowRight,
  Basketball,
  Briefcase,
  ChartLineUp,
  Check,
  Clock,
  Handshake,
  Megaphone,
  Quotes,
  ShieldCheck,
  Target,
  UserFocus,
  UsersThree
} from '@phosphor-icons/react'
import { Header, Footer } from './SiteChrome'
import InstagramReel from './InstagramReel'
import './LandingPageV2.css'

const proofStats = [
  { value: '59%', label: 'of surveyed college athletes said they earned less from NIL than expected' },
  { value: '58%', label: 'said at least one NIL deal failed to deliver what was promised' },
  { value: '47%', label: 'wished they had done fewer deals for more money' }
]

const marketabilityGaps = [
  ['01', 'Visibility without positioning', 'People know you play a sport, but they cannot quickly explain what your personal brand represents.'],
  ['02', 'Content without strategy', 'You post, but your content does not consistently build a recognizable identity or audience relationship.'],
  ['03', 'Attention without packaging', 'You may have followers, but no professional media kit, partnership concepts, offer structure, or brand-facing story.'],
  ['04', 'Interest without pursuit', 'You want opportunities, but you are still relying on discovery, marketplaces, or inconsistent outreach.'],
  ['05', 'Deals without a system', 'When an opportunity appears, pricing, deliverables, follow-up, compliance, and renewal are improvised.']
]

const plays = [
  { icon: UserFocus, number: '01', title: 'POSITION', copy: 'Clarify your story, interests, values, audience, differentiators, and the categories that make sense for your brand.' },
  { icon: Megaphone, number: '02', title: 'PUBLISH', copy: 'Build a content operating system that fits around practice, travel, class, recovery, and competition.' },
  { icon: Briefcase, number: '03', title: 'PACKAGE', copy: 'Turn your brand into professional assets that help a partner understand what you offer and why the fit makes sense.' },
  { icon: Target, number: '04', title: 'PURSUE', copy: 'Create a target-brand strategy, outreach process, follow-up cadence, and opportunity pipeline instead of waiting to be picked.' },
  { icon: ShieldCheck, number: '05', title: 'PROFESSIONALIZE', copy: 'Prepare for real opportunities with deal evaluation, rate guardrails, communication, deliverable planning, compliance handoff, and renewal.' }
]

const implementation = [
  'Personal NIL marketability audit',
  '1:1 brand positioning strategy',
  'Customized content pillars and 90-day roadmap',
  'Professional media kit and brand-facing bio',
  'Target-brand strategy and prospect pipeline',
  'Custom outreach and follow-up messaging',
  'Rate, package, and deal-evaluation guardrails',
  'Weekly coaching, content review, and accountability',
  'Brand-call and negotiation preparation',
  'Renewal process and next-quarter growth plan'
]

const durableAssets = [
  'A recognizable personal brand',
  'Content creation and storytelling skills',
  'Professional relationships',
  'A stronger audience and network',
  'A repeatable opportunity system'
]

const faqs = [
  ['Do I need a huge following?', 'No specific follower threshold is required. Audience size can matter, but so can audience relevance, story, content quality, engagement, professionalism, local relevance, and brand fit.'],
  ['Do you guarantee NIL deals or income?', 'No. NIL Playbook cannot control brand decisions, market demand, timing, fit, or athlete execution. The program focuses on the systems and professional preparation you can control.'],
  ['What if I do not want to become an influencer?', 'You do not have to. The goal is to build around what is already true about you, your story, personality, interests, values, community, and goals, not create a fake online persona.'],
  ['Why would I pay for this if NIL information is free online?', 'Information is already commoditized. NIL Deal Accelerator is positioned as personalized implementation, feedback, professional assets, accountability, and opportunity infrastructure built around you.'],
  ['Can I do this while I am in season?', 'The system is designed around the athlete schedule. The objective is not to make NIL another full-time job. It is to install a repeatable operating system that reduces random work and makes execution more efficient.']
]

function ApplyButton({ label = 'Apply for the NIL Deal Accelerator' }) {
  return (
    <a className="v2-button" href="/apply">
      {label}
      <ArrowRight size={18} weight="bold" />
    </a>
  )
}

export default function LandingPageV2() {
  return (
    <div className="v2-page">
      <Header />
      <main>
        <section className="v2-hero" data-belief="relevance">
          <div className="v2-reading-shell">
            <div className="v2-eyebrow"><span /> FOR COLLEGE ATHLETES READY TO BUILD BEYOND THE STAT LINE</div>
            <h1>You do not need to be the biggest name on the roster to build a brand worth knowing.</h1>
            <p className="v2-lede">You need a playbook that makes you easier for the right brands to understand, trust, and work with.</p>
            <p className="v2-sublede">NIL Deal Accelerator™ is a high-touch 12-week implementation program designed to help college athletes build a clearer personal brand, stronger content system, professional assets, and a repeatable NIL opportunity engine.</p>
            <div className="v2-hero-actions">
              <ApplyButton />
              <a className="v2-text-link" href="#system">See the 5-play system <ArrowRight size={15} /></a>
            </div>
            <div className="v2-guardrail"><ShieldCheck size={18} weight="fill" /> No guaranteed sponsorships, income, follower growth, or response rates.</div>
          </div>
        </section>

        <section className="v2-proof" data-belief="market-reality">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker">THE REALITY</div>
              <h2>NIL is real. So is the gap between the headlines and the athlete experience.</h2>
              <p>The market does not need another promise that NIL is easy. It needs a professional system for becoming more marketable and handling opportunity better.</p>
            </div>
            <div className="v2-stat-list">
              {proofStats.map((stat) => (
                <div className="v2-stat" key={stat.value + stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="v2-source">Source: Student-Athlete Insights 2025 year-end survey, n=1,061. These figures describe the surveyed population and do not predict individual results.</p>
          </div>
        </section>

        <section className="v2-section" data-belief="problem-mechanism">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker">THE PROBLEM</div>
              <h2>The Marketability Gap™</h2>
              <p>You may already have athletic credibility, a story, personality, local relevance, and commercial potential. The problem is that those assets are not automatically organized into something a brand can quickly understand and confidently activate.</p>
            </div>
            <div className="v2-gap-list">
              {marketabilityGaps.map(([number, title, copy]) => (
                <article className="v2-gap-row" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="v2-pullquote"><Quotes size={26} weight="fill" /><p>Random posts. Random DMs. Random pricing. Random deals. Random advice. Random NIL is not a strategy.</p></div>
          </div>
        </section>

        <section className="v2-founder" id="founder" data-belief="authority-and-authenticity">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker v2-kicker-light">WHY NIL PLAYBOOK EXISTS</div>
              <h2>A shattered backboard changed the direction of Brian “BB” Knight's life.</h2>
              <p>More than six years ago, BB happened to capture a video of himself shattering a backboard. The video went viral and showed him what one piece of content could do. Instead of treating it like a lucky moment, he started taking content seriously.</p>
            </div>

            <div className="v2-founder-copy">
              <p>He kept documenting the journey while playing Division I basketball. That meant building around practice, lifts, travel, school, games, injuries, recovery, and the pressure to perform.</p>
              <p>The hardest part was not understanding that social media mattered. It was finding the time to film, edit, publish, build an audience, and handle opportunities while basketball still demanded most of his attention.</p>
            </div>

            <InstagramReel />

            <div className="v2-founder-claim">
              <span>IN BB'S WORDS</span>
              <blockquote>“Last month, I contracted over $12,000 from social media, all while playing Division 1 basketball.”</blockquote>
              <p>Individual results vary. This is BB Knight's personal experience and is not a representation or guarantee of another athlete's earnings or results.</p>
            </div>

            <div className="v2-founder-bridge">
              <Basketball size={28} weight="duotone" />
              <div>
                <h3>He did not build his brand instead of being an athlete. He built it while being one.</h3>
                <p>That is the perspective behind NIL Playbook. BB believes athletes should not have to choose between taking their sport seriously and taking their future seriously.</p>
              </div>
            </div>

            <div className="v2-founder-origin">
              <div className="v2-kicker v2-kicker-light">THE QUESTIONS THAT BECAME THE BUSINESS</div>
              <h3>As BB's platform grew, other athletes started asking how he was doing it.</h3>
              <div className="v2-question-list">
                <p>How do I reach out to brands?</p>
                <p>What do you use to edit?</p>
                <p>How do you make content consistently?</p>
                <p>How do you balance your sport with social media?</p>
              </div>
              <p className="v2-founder-conclusion">NIL Playbook was built to turn those scattered answers into an organized system athletes can actually execute.</p>
            </div>
          </div>
        </section>

        <section className="v2-section v2-system" id="system" data-belief="solution-mechanism">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker">THE SOLUTION</div>
              <h2>The 5-Play NIL Marketability System™</h2>
              <p>This is the operating system that connects identity, content, professional assets, proactive pursuit, and deal readiness into one process.</p>
            </div>
            <div className="v2-play-list">
              {plays.map(({ icon: Icon, number, title, copy }) => (
                <article className="v2-play" key={number}>
                  <div className="v2-play-top"><span>{number}</span><Icon size={25} weight="duotone" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="v2-authenticity-note">
              <Handshake size={25} weight="duotone" />
              <div><strong>No fake influencer persona required.</strong><p>The strongest version of your brand should be built from things that are already true about you.</p></div>
            </div>
            <ApplyButton label="Apply to build your NIL playbook" />
          </div>
        </section>

        <section className="v2-section v2-implementation" data-belief="premium-value">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker">WHY THE ACCELERATOR IS DIFFERENT</div>
              <h2>This is not another library of NIL information.</h2>
              <p>Courses, templates, TikToks, YouTube videos, AI, and marketplaces can all be useful. The premium value of NIL Deal Accelerator is personalized implementation, feedback, professional assets, accountability, and a system built around the athlete.</p>
            </div>

            <div className="v2-category-shift">
              <div><span>INFORMATION</span><strong>Knowing what to do</strong></div>
              <ArrowRight size={22} weight="bold" />
              <div><span>IMPLEMENTATION</span><strong>Building it with guidance</strong></div>
            </div>

            <div className="v2-deliverables">
              <div className="v2-deliverables-head"><span>WHAT WE BUILD WITH YOU</span><Clock size={21} /></div>
              <ul>
                {implementation.map((item) => <li key={item}><Check size={17} weight="bold" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="v2-section v2-window" data-belief="timing-and-long-term-value">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker">THE BIGGER OPPORTUNITY</div>
              <h2>Your jersey gives you a window. What you build during that window can outlast it.</h2>
              <p>The goal is not to chase as many random sponsorships as possible. It is to leave college with assets that can continue creating value after your last game.</p>
            </div>
            <div className="v2-asset-list">
              {durableAssets.map((asset, index) => <div key={asset}><span>0{index + 1}</span><strong>{asset}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-fit" data-belief="qualification">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker v2-kicker-light">WHO THIS IS FOR</div>
              <h2>For athletes ready to operate professionally.</h2>
            </div>
            <div className="v2-fit-list">
              {[
                'You are a current or incoming college athlete.',
                'You want to build something beyond athletic performance.',
                'Your content, outreach, or NIL activity feels random.',
                'You are willing to create, communicate, and implement consistently.',
                'You want personalized guidance instead of another pile of information.'
              ].map((item) => <p key={item}><Check size={18} weight="bold" />{item}</p>)}
            </div>
            <div className="v2-not-fit">
              <strong>This is not for athletes looking for guaranteed deals, guaranteed income, viral hacks, or a fully passive solution.</strong>
              <p>The controllable transformation is better positioning, better systems, stronger professional assets, more intentional pursuit, and improved opportunity readiness.</p>
            </div>
          </div>
        </section>

        <section className="v2-section v2-faq" data-belief="objections">
          <div className="v2-reading-shell">
            <div className="v2-section-intro">
              <div className="v2-kicker">BEFORE YOU APPLY</div>
              <h2>Questions worth answering before the call.</h2>
            </div>
            <div className="v2-faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span>+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="v2-final" data-belief="decision">
          <div className="v2-reading-shell">
            <div className="v2-kicker v2-kicker-light">YOUR NEXT PLAY</div>
            <h2>Stop waiting to get picked.</h2>
            <p>Apply for NIL Deal Accelerator™ and see whether a structured 12-week implementation program is the right fit for where you are now.</p>
            <ApplyButton label="Start my application" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
