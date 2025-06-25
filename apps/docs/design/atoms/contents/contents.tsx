// design/atoms/contents/contents.tsx
'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ComponentContent } from '../../../settings/content/types'

import './contents.css'

interface TableOfContentsProps {
  component: ComponentContent
  section: 'overview' | 'ux-text' | 'accessibility'
  versus?: string
}

interface Section {
  id: string
  title: string
  active?: boolean
}

export function TableOfContents({
  component,
  section,
  versus,
}: TableOfContentsProps) {
  const [sections, setSections] = useState<Section[]>([])
  const [activeSection, setActiveSection] = useState<string>('component-top')

  useEffect(() => {
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

    const extractedSections = sectionContent
      .filter((section) => section.title)
      .map((section) => ({
        id: section.title?.toLowerCase().replace(/\s+/g, '-') || '',
        title: section.title || '',
        active: false,
      }))

    const initialSections: Section[] = [
      { id: 'component-top', title: component.title, active: true },
    ]

    if (component.compare && versus) {
      initialSections.push({
        id: 'component-versus',
        title: versus,
        active: false,
      })
    }

    if (component.anatomy) {
      initialSections.push({
        id: 'component-anatomy',
        title: 'Anatomy',
        active: false,
      })
    }

    setSections([...initialSections, ...extractedSections])
  }, [component, section, versus])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset for header

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 150 && bottom >= 150) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      setActiveSection(id)

      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (sections.length === 0) return null

  return (
    <Core.GdsCard
      variant="secondary"
      padding="l xs m xs"
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
              rank={activeSection === section.id ? 'secondary' : 'tertiary'}
              size="xs"
              onClick={() => scrollToSection(section.id)}
              justify-content="flex-start"
              data-overflow
            >
              {section.title}
            </Core.GdsButton>
          ))}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
