import React, { useEffect } from 'react'
import './InstagramReel.css'

const REEL_URL = 'https://www.instagram.com/reel/DdTsFBQBRHO/?utm_source=ig_embed&utm_campaign=loading'

export default function InstagramReel() {
  useEffect(() => {
    const processEmbed = () => window.instgrm?.Embeds?.process?.()
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]')

    if (existing) {
      processEmbed()
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.instagram.com/embed.js'
    script.onload = processEmbed
    document.body.appendChild(script)
  }, [])

  return (
    <div className="founder-reel-shell">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={REEL_URL}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: 'calc(100% - 2px)'
        }}
      >
        <div style={{ padding: 16 }}>
          <a
            href={REEL_URL}
            style={{ color: '#3897f0', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            View this post on Instagram
          </a>
          <p style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: '17px', margin: '16px 0 0', textAlign: 'center' }}>
            A post shared by Brian Knight (@bbknight_)
          </p>
        </div>
      </blockquote>
    </div>
  )
}
