'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'

import './anatomy.core.css'

interface AnatomyItem {
  id: number
  key: string
  label: string
  selector: string
}

interface AnatomyProps {
  title?: string
  items: AnatomyItem[]
  children: React.ReactNode
}

export default function Anatomy({ title, items, children }: AnatomyProps) {
  const [focusedKey, setFocusedKey] = useState<string | null>(null)

  return (
    <Core.GdsFlex
      gap="m l"
      flex-wrap="wrap"
      padding="0 s"
      width="100%"
      margin="0 0 l 0"
    >
      <Core.GdsFlex flex-direction="column" gap="m" flex="1">
        {title && <Core.GdsText font="heading-s">{title}</Core.GdsText>}
        <Core.GdsCard
          className="preview-card"
          data-anatomy-focus={focusedKey || ''}
        >
          {children}
        </Core.GdsCard>
      </Core.GdsFlex>

      <Core.GdsFlex
        flex-direction="column"
        gap="s"
        className="anatomy-list"
        flex="1"
      >
        {items.map((item) => (
          <Core.GdsFlex
            key={item.key}
            align-items="center"
            gap="xs"
            className="anatomy-item"
            onMouseEnter={() => setFocusedKey(item.key)}
            onMouseLeave={() => setFocusedKey(null)}
            data-anatomy-key={item.key}
          >
            <Core.GdsBadge size="small">{item.id.toString()}</Core.GdsBadge>
            <Core.GdsText font="detail-book-xs">{item.label}</Core.GdsText>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
