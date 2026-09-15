import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, CalendarCheck, LockKey, ShieldCheck } from '@phosphor-icons/react'
import Brand from './Brand'

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || ''
const storageKey = 'nil-playbook-application-v1'

const initial = {
  firstName: '', lastName: '', email: '', phone: '', school: '', sport: '', division: '', year: '',
  instagram: '', tiktok: '', audience: '', nilExperience: '', nilIncome: '', contentFrequency: '',
  challenge: [], goal: '', whyNow: '', startTimeline: '', commitment: '', investment: '', decisionMaker: '',
  utm: {}
}

const challenges = [
  'I do not know what my personal brand should be', 'I do not have enough followers', 'I do not know what to post',
  'I struggle to post consistently', 'I do not know which brands to target', 'I am uncomfortable reaching out',
  'Brands do not respond', 'I do not know what to charge', 'I need a professional media kit',
  'I do not understand negotiation', 'I do not have a system for tracking opportunities', 'I do not have enough time'
]

const stepMeta = [
  ['Athlete profile', 'Tell us where you compete and how to reach you.'],
  ['Current NIL position', 'Give us the context behind your audience and experience.'],
  ['Goals and gaps', 'Show us what is holding you back and what a win looks like.'],
  ['Readiness', 'Make sure the timing, commitment, and investment fit.'],
  ['Book your strategy call', 'Choose a time while your application is fresh.']
]

function readUtms() {
  const p = new URLSearchParams(window.location.search)
  return ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].reduce((acc,k)=>{ if(p.get(k)) acc[k]=p.get(k); return acc }, {})
}

function Field({ label, children, hint }) {
  return <label className="field"><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>
}

export default function ApplyPage() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(() => {
    try { return { ...initial, ...JSON.parse(localStorage.getItem(storageKey) || '{}') } } catch { return initial }
  })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [applicationId, setApplicationId] = useState('')
  const headingRef = useRef(null)

  useEffect(() => {
    setData(d => ({ ...d, utm: { ...d.utm, ...readUtms() } }))
  }, [])
  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(data)) }, [data])
  useEffect(() => {
    document.title = `${stepMeta[step][0]} | NIL Playbook`
    headingRef.current?.focus()
  }, [step])
  useEffect(() => {
    const handler = (event) => {
      if (event.data?.event === 'calendly.event_scheduled') {
        localStorage.removeItem(storageKey)
        window.location.href = `/confirmed${applicationId ? `?application=${encodeURIComponent(applicationId)}` : ''}`
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [applicationId])

  const update = (key, value) => setData(d => ({ ...d, [key]: value }))
  const toggleChallenge = (item) => update('challenge', data.challenge.includes(item) ? data.challenge.filter(x => x !== item) : [...data.challenge, item])

  const validation = useMemo(() => [
    () => data.firstName && data.lastName && /\S+@\S+\.\S+/.test(data.email) && data.phone && data.school && data.sport && data.division && data.year,
    () => data.audience && data.nilExperience && data.nilIncome && data.contentFrequency,
    () => data.challenge.length > 0 && data.goal.trim().length >= 20 && data.whyNow.trim().length >= 15,
    () => data.startTimeline && Number(data.commitment) >= 1 && data.investment
  ], [data])

  const goNext = async () => {
    setError('')
    if (!validation[step]?.()) {
      setError(step === 2 ? 'Please select at least one challenge and give us a little more detail in both written answers.' : 'Please complete the required fields before continuing.')
      return
    }
    if (step === 3) {
      setSubmitting(true)
      try {
        const response = await fetch('/api/apply', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
        const result = await response.json()
        if (result.applicationId) setApplicationId(result.applicationId)
      } catch {
        // Do not block scheduling if the webhook is temporarily unavailable.
      } finally {
        setSubmitting(false)
      }
    }
    setStep(s => Math.min(s + 1, 4))
  }

  const qualified = data.investment !== 'No, I am not currently able to make this investment'
  if (step === 4 && !qualified) window.location.replace('/review')

  const progress = (step / 4) * 100
  const calendlySrc = CALENDLY_URL ? `${CALENDLY_URL}${CALENDLY_URL.includes('?') ? '&' : '?'}hide_gdpr_banner=1&name=${encodeURIComponent(`${data.firstName} ${data.lastName}`)}&email=${encodeURIComponent(data.email)}` : ''

  return (
    <div className="application-page">
      <div className="application-nav shell"><Brand /><a href="/" className="text-link"><ArrowLeft size={15} /> Back to overview</a></div>
      <main className="application-shell shell">
        <aside className="application-aside">
          <div className="kicker">NIL DEAL ACCELERATOR</div>
          <h1>Build your NIL game plan.</h1>
          <p>This application helps us understand where you are, what you want to build, and whether a strategy call makes sense.</p>
          <ol className="stepper" aria-label="Application progress">
            {stepMeta.map(([title], i) => <li key={title} aria-current={i === step ? 'step' : undefined} className={i < step ? 'done' : i === step ? 'active' : ''}><span>{i < step ? <Check size={14} weight="bold" /> : i+1}</span><div><strong>{title}</strong><small>{i < step ? 'Complete' : i === step ? 'Current step' : 'Upcoming'}</small></div></li>)}
          </ol>
          <div className="aside-trust"><ShieldCheck size={19} weight="fill" /><span>Your application is used to prepare your strategy conversation. No sponsorship or income outcome is guaranteed.</span></div>
        </aside>

        <section className="application-card" aria-live="polite">
          <div className="mobile-progress"><span>Step {step + 1} of 5</span><span>{Math.round(progress)}%</span><div><i style={{ width: `${progress}%` }} /></div></div>
          <div className="form-heading" tabIndex="-1" ref={headingRef}><span>STEP {String(step + 1).padStart(2,'0')} / 05</span><h2>{stepMeta[step][0]}</h2><p>{stepMeta[step][1]}</p></div>
          {error && <div className="form-error" role="alert">{error}</div>}

          {step === 0 && <div className="form-grid">
            <Field label="First name"><input value={data.firstName} onChange={e=>update('firstName',e.target.value)} autoComplete="given-name" /></Field>
            <Field label="Last name"><input value={data.lastName} onChange={e=>update('lastName',e.target.value)} autoComplete="family-name" /></Field>
            <Field label="Email"><input type="email" value={data.email} onChange={e=>update('email',e.target.value)} autoComplete="email" /></Field>
            <Field label="Phone"><input type="tel" value={data.phone} onChange={e=>update('phone',e.target.value)} autoComplete="tel" /></Field>
            <Field label="School"><input value={data.school} onChange={e=>update('school',e.target.value)} /></Field>
            <Field label="Sport"><input value={data.sport} onChange={e=>update('sport',e.target.value)} /></Field>
            <Field label="Division"><select value={data.division} onChange={e=>update('division',e.target.value)}><option value="">Select</option><option>NCAA Division I</option><option>NCAA Division II</option><option>NCAA Division III</option><option>NAIA</option><option>JUCO</option><option>Incoming college athlete</option><option>Other</option></select></Field>
            <Field label="Year"><select value={data.year} onChange={e=>update('year',e.target.value)}><option value="">Select</option><option>Incoming freshman</option><option>Freshman</option><option>Sophomore</option><option>Junior</option><option>Senior</option><option>Graduate athlete</option><option>Other</option></select></Field>
          </div>}

          {step === 1 && <div className="form-grid">
            <Field label="Instagram handle"><input value={data.instagram} onChange={e=>update('instagram',e.target.value)} placeholder="@handle" /></Field>
            <Field label="TikTok handle"><input value={data.tiktok} onChange={e=>update('tiktok',e.target.value)} placeholder="@handle" /></Field>
            <Field label="Approximate combined following"><select value={data.audience} onChange={e=>update('audience',e.target.value)}><option value="">Select</option>{['Under 1,000','1,000 to 5,000','5,000 to 10,000','10,000 to 25,000','25,000 to 50,000','50,000 to 100,000','100,000+'].map(x=><option key={x}>{x}</option>)}</select></Field>
            <Field label="Current content frequency"><select value={data.contentFrequency} onChange={e=>update('contentFrequency',e.target.value)}><option value="">Select</option>{['Rarely','A few times per month','1 to 2 times per week','3 to 5 times per week','Almost daily'].map(x=><option key={x}>{x}</option>)}</select></Field>
            <Field label="Have you completed NIL partnerships?"><select value={data.nilExperience} onChange={e=>update('nilExperience',e.target.value)}><option value="">Select</option><option>No</option><option>Yes, gifted product only</option><option>Yes, paid deals</option><option>Yes, multiple paid partnerships</option></select></Field>
            <Field label="Approximate NIL income to date"><select value={data.nilIncome} onChange={e=>update('nilIncome',e.target.value)}><option value="">Select</option>{['$0','Under $500','$500 to $2,500','$2,500 to $10,000','$10,000 to $25,000','$25,000+'].map(x=><option key={x}>{x}</option>)}</select></Field>
          </div>}

          {step === 2 && <div className="form-stack">
            <fieldset className="choice-field"><legend>What is currently holding you back? <small>Select all that apply.</small></legend><div className="choice-grid">{challenges.map(item => <label key={item} className={data.challenge.includes(item) ? 'choice selected' : 'choice'}><input type="checkbox" checked={data.challenge.includes(item)} onChange={()=>toggleChallenge(item)} /><span className="check-box">{data.challenge.includes(item) && <Check size={13} weight="bold" />}</span><span>{item}</span></label>)}</div></fieldset>
            <Field label="If we worked together for 90 days, what would make the experience a major win for you?"><textarea rows="4" value={data.goal} onChange={e=>update('goal',e.target.value)} placeholder="Be specific about the brand, content, relationships, or NIL system you want to build." /></Field>
            <Field label="Why is accomplishing this important right now?"><textarea rows="3" value={data.whyNow} onChange={e=>update('whyNow',e.target.value)} placeholder="What changes if you solve this now instead of later?" /></Field>
          </div>}

          {step === 3 && <div className="form-stack">
            <Field label="When would you ideally like to start?"><select value={data.startTimeline} onChange={e=>update('startTimeline',e.target.value)}><option value="">Select</option><option>Immediately</option><option>Within 2 weeks</option><option>Within 30 days</option><option>Within 60 days</option><option>Just researching right now</option></select></Field>
            <Field label={`How committed are you to building your NIL brand? ${data.commitment || 'Choose 1 to 10'}`}><input className="range" type="range" min="1" max="10" value={data.commitment || 5} onChange={e=>update('commitment',e.target.value)} /><div className="range-labels"><span>1 - exploring</span><span>10 - ready to execute</span></div></Field>
            <fieldset className="radio-field"><legend>NIL Deal Accelerator is a high-touch private implementation program. If accepted, are you in a position to invest approximately $4,997?</legend>{['Yes, I can make the investment myself','Yes, with a payment plan','I would need to discuss it with a parent or family member','I would need another decision-maker involved','No, I am not currently able to make this investment'].map(x => <label className={data.investment === x ? 'radio selected' : 'radio'} key={x}><input type="radio" name="investment" checked={data.investment===x} onChange={()=>update('investment',x)} /><span />{x}</label>)}</fieldset>
            {(data.investment.includes('parent') || data.investment.includes('decision-maker')) && <Field label="Who else should be involved in the decision?"><input value={data.decisionMaker} onChange={e=>update('decisionMaker',e.target.value)} placeholder="Parent, guardian, agent, manager, etc." /></Field>}
          </div>}

          {step === 4 && <div className="calendar-step">
            <div className="calendar-callout"><CalendarCheck size={26} weight="duotone" /><div><strong>Your application is in.</strong><p>Book your strategy call now so there is no gap between applying and scheduling.</p></div></div>
            {CALENDLY_URL ? <iframe title="Book your NIL strategy call" className="calendly-frame" src={calendlySrc} /> : <div className="calendar-placeholder"><LockKey size={34} weight="duotone" /><h3>Calendly connection ready</h3><p>Add the booking event as the <code>VITE_CALENDLY_URL</code> environment variable in Vercel and the live scheduler will render here with the athlete's name and email prefilled.</p></div>}
          </div>}

          {step < 4 && <div className="form-actions"><button className="button button-secondary" type="button" onClick={()=>{setError(''); setStep(s=>Math.max(0,s-1))}} disabled={step===0}><ArrowLeft size={17} /> Back</button><button className="button button-primary" type="button" onClick={goNext} aria-busy={submitting}>{submitting ? 'Submitting application...' : step === 3 ? 'Submit and book my call' : 'Continue'} {!submitting && <ArrowRight size={17} weight="bold" />}</button></div>}
        </section>
      </main>
    </div>
  )
}
