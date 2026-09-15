import React from 'react'
import Brand from './Brand'
import { ArrowRight } from '@phosphor-icons/react'

export function Header({ compact = false }) {
  return (
    <header className={`site-header ${compact ? 'compact' : ''}`}>
      <div className="shell header-inner">
        <Brand />
        <a className="nav-link" href="/apply">Apply now <ArrowRight size={16} weight="bold" /></a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand inverse />
          <p className="footer-copy">Build your brand beyond the game.</p>
        </div>
        <p className="legal">NIL Deal Accelerator is an education, coaching, and implementation program. Sponsorships, income, follower growth, response rates, and timelines are not guaranteed. Athletes should verify individual NIL opportunities with their school compliance office and qualified legal or tax professionals when appropriate.</p>
      </div>
    </footer>
  )
}
