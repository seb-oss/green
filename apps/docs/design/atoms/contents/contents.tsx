// design/atoms/contents/contents.tsx
'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ComponentContent } from '../../../settings/content/types'

interface TableOfContentsProps {
  component: ComponentContent
  section: 'overview' | 'ux-text' | 'accessibility'
}

interface Section {
  id: string
  title: string
}

export function TableOfContents({ component, section }: TableOfContentsProps) {
  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    // Get the correct content based on section
    let sectionContent = []
    switch (section) {
      case 'overview':
        sectionContent = component.overview || []
        break
      case 'ux-text':
        sectionContent = Array.isArray(component['ux-text'])
          ? component['ux-text']
          : component['ux-text']?.section || []
        break
      case 'accessibility':
        sectionContent = Array.isArray(component['accessibility'])
          ? component['accessibility']
          : component['accessibility']?.section || []
        break
    }

    // Extract h2 sections
    const extractedSections = sectionContent
      .filter(
        (section) => section.title && (section.tag === 'h2' || !section.tag),
      )
      .map((section) => ({
        id: section.title?.toLowerCase().replace(/\s+/g, '-') || '',
        title: section.title || '',
      }))

    setSections(extractedSections)
  }, [component, section])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (sections.length === 0) return null

  return (
    <Core.GdsCard
      variant="primary"
      padding="l m"
      position="sticky"
      inset="90px auto auto auto"
      grid-column="10/13"
      height="max-content"
    >
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsFlex padding="0 0 0 m">
          <Core.GdsText tag="small">On this page</Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex flex-direction="column" gap="2xs">
          {sections.map((section) => (
            <Core.GdsButton
              key={section.id}
              rank="tertiary"
              size="small"
              onClick={() => scrollToSection(section.id)}
              justify-content="flex-start"
            >
              {section.title}
            </Core.GdsButton>
          ))}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
