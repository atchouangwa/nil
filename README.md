# NIL Playbook - NIL Deal Accelerator Call Funnel

A conversion-focused book-a-call funnel for NIL Deal Accelerator.

## Production
- Live: https://nil-webinar-ops.vercel.app
- Vercel project: `nil`

## Routes
- `/` - belief-shifting landing page
- `/apply` - multi-step application with Calendly embedded as the final step
- `/confirmed` - call confirmation and pre-call framing
- `/review` - fallback for applicants who are not ready for the private implementation investment

## Environment variables
- `VITE_CALENDLY_URL` - exact Calendly event URL. This is still required before the live scheduler can display.
- `APPLICATION_WEBHOOK_URL` - optional webhook for application payloads, such as Attio, Make, Zapier, or an internal CRM endpoint.
- `VITE_WISTIA_CONFIRMATION_HERO` - Wistia hashed media ID for the main pre-call video.
- `VITE_WISTIA_CONFIRMATION_FOLLOWING` - Wistia ID for the follower-count breakout video.
- `VITE_WISTIA_CONFIRMATION_SYSTEM` - Wistia ID for the 5-Play system breakout video.
- `VITE_WISTIA_CONFIRMATION_CALL` - Wistia ID for the strategy-call breakout video.
- `VITE_WISTIA_CONFIRMATION_INFLUENCER` - Wistia ID for the authenticity/influencer breakout video.
- `VITE_WISTIA_CONFIRMATION_INVESTMENT` - Wistia ID for the $4,997 investment breakout video.

Until real Wistia media IDs are supplied, `/confirmed` renders designed Wistia placeholders so production layout can be reviewed without broken embeds.

## VSL scripts
The complete word-for-word VSL and pre-call video scripts are in:

`docs/NIL_Deal_Accelerator_VSL_Scripts.md`

This includes the main landing-page VSL, the confirmation hero video, and five breakout scripts with chapter plans and Wistia analytics recommendations.

## Funnel notes
The application and Calendly scheduler live in the same flow to reduce application-to-calendar drop-off. Form state persists between steps, validation runs at each step, and Calendly's `calendly.event_scheduled` message redirects successful bookings to `/confirmed`.

The design follows a single-primary-action landing-page structure, progressive disclosure in the application, explicit step progress, per-step validation, accessible focus states, responsive touch targets, and restrained interaction feedback.

No sponsorship, income, follower growth, response rate, or timing guarantee is made.
