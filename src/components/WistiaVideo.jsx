import React, { useEffect } from 'react'
import { PlayCircle, VideoCamera } from '@phosphor-icons/react'
import './WistiaVideo.css'

const isPlaceholder = (mediaId = '') => !mediaId || mediaId.startsWith('WISTIA_')

export default function WistiaVideo({ mediaId, title, eyebrow = 'WISTIA VIDEO', duration, chapters = [] }) {
  useEffect(() => {
    if (isPlaceholder(mediaId)) return
    if (document.querySelector('script[data-nil-wistia]')) return
    const script = document.createElement('script')
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js'
    script.async = true
    script.dataset.nilWistia = 'true'
    document.body.appendChild(script)
  }, [mediaId])

  if (isPlaceholder(mediaId)) {
    return (
      <div className="wistia-placeholder" data-wistia-placeholder={mediaId || 'WISTIA_VIDEO_ID'}>
        <div className="wistia-placeholder-screen">
          <div className="wistia-placeholder-play"><PlayCircle size={54} weight="fill" /></div>
          <div className="wistia-placeholder-meta">
            <span>{eyebrow}</span>
            <strong>{title}</strong>
            {duration && <small>Target length: {duration}</small>}
          </div>
        </div>
        <div className="wistia-placeholder-footer">
          <div><VideoCamera size={17} weight="duotone" /><span>Replace <code>{mediaId || 'WISTIA_VIDEO_ID'}</code> with the Wistia hashed media ID.</span></div>
          {chapters.length > 0 && <span>{chapters.length} planned chapters</span>}
        </div>
      </div>
    )
  }

  return (
    <div className="wistia-live" aria-label={title}>
      <div className={`wistia_embed wistia_async_${mediaId} videoFoam=true`} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}
