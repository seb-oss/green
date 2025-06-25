// design/atoms/contents/contents.tsx
'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ComponentContent } from '../../../settings/content/types'

import './contents.css'

interface TableOfContentsProps {
  component: ComponentContent
  section: 'overview' | 'ux-text' | 'accessibility'
}

interface Section {
  id: string
  title: string
  active?: boolean
}

export function TableOfContents({ component, section }: TableOfContentsProps) {
  const [sections, setSections] = useState<Section[]>([])
  const [activeSection, setActiveSection] = useState<string>('component-top')

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

    // Extract sections and order them properly
    const extractedSections = sectionContent
      .filter((section) => section.title)
      .map((section) => ({
        id: section.title?.toLowerCase().replace(/\s+/g, '-') || '',
        title: section.title || '',
        active: false,
      }))

    // Create initial sections array with component title first
    const initialSections: Section[] = [
      { id: 'component-top', title: component.title, active: true },
    ]

    // Add versus section if it exists
    if (component.compare) {
      initialSections.push({
        id: 'component-versus',
        title: 'Versus',
        active: false,
      })
    }

    // Add anatomy section if it exists
    if (component.anatomy) {
      initialSections.push({
        id: 'component-anatomy',
        title: 'Anatomy',
        active: false,
      })
    }

    // Add the rest of the sections
    setSections([...initialSections, ...extractedSections])
  }, [component, section])

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -90% 0px',
      },
    )

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // 100px from top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (sections.length === 0) return null

  return (
    <Core.GdsCard variant="secondary" padding="l xs m xs" height="max-content">
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsFlex padding="0 0 0 m">
          <Core.GdsText tag="small">On this page</Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex flex-direction="column" gap="2xs" overflow="auto">
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
