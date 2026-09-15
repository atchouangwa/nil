# NIL Playbook - NIL Deal Accelerator Call Funnel

A conversion-focused book-a-call funnel for NIL Deal Accelerator.

## Production
- Live: https://nil-two.vercel.app
- Vercel project: `nil`

## Routes
- `/` - belief-shifting landing page
- `/apply` - multi-step application with Calendly embedded as the final step
- `/confirmed` - call confirmation and pre-call framing
- `/review` - fallback for applicants who are not ready for the private implementation investment

## Environment variables
- `VITE_CALENDLY_URL` - exact Calendly event URL. This is still required before the live scheduler can display.
- `APPLICATION_WEBHOOK_URL` - optional webhook for application payloads, such as Attio, Make, Zapier, or an internal CRM endpoint.

## Funnel notes
The application and Calendly scheduler live in the same flow to reduce application-to-calendar drop-off. Form state persists between steps, validation runs at each step, and Calendly's `calendly.event_scheduled` message redirects successful bookings to `/confirmed`.

The design follows a single-primary-action landing-page structure, progressive disclosure in the application, explicit step progress, per-step validation, accessible focus states, responsive touch targets, and restrained interaction feedback.

No sponsorship, income, follower growth, response rate, or timing guarantee is made.
