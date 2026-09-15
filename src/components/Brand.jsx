import React from 'react'
import { BookOpen } from '@phosphor-icons/react'

export default function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand-inverse' : ''}`} href="/" aria-label="NIL Playbook home">
      <span className="brand-mark" aria-hidden="true"><BookOpen weight="fill" size={18} /></span>
      <span>NIL <strong>PLAYBOOK</strong></span>
    </a>
  )
}
