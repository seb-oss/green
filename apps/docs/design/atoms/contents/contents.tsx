// design/atoms/contents/contents.tsx
'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ComponentContent } from '../../../settings/content/types'

import './contents.css'

interface TableOfContentsProps {
  component: ComponentContent
  section: 'overview' | 'ux-text' | 'accessibility'
  versus?: string
}

interface BaseSection {
  id: string
  title: string
}

interface ContentSection extends BaseSection {
  scrollTo?: never
}

interface NavigationSection extends BaseSection {
  scrollTo: string
}

type Section = ContentSection | NavigationSection

export function TableOfContents({
  component,
  section,
  versus,
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('component-top')

  const sections = useMemo(() => {
    const initialSections: Section[] = [
      { id: 'component-top', title: component.title },
      {
        id: `component-${section}`,
        title:
          section === 'ux-text'
            ? 'UX Text'
            : section.charAt(0).toUpperCase() + section.slice(1),
        scrollTo: 'component-content',
      } as NavigationSection,
    ]

    if (section === 'overview') {
      if (component.compare && versus) {
        initialSections.push({
          id: 'component-versus',
          title: versus,
        })
      }
      if (component.anatomy) {
        initialSections.push({
          id: 'component-anatomy',
          title: 'Anatomy',
        })
      }
    }

    const sectionContent =
      section === 'overview'
        ? component.overview || []
        : section === 'ux-text'
          ? Array.isArray(component['ux-text'])
            ? component['ux-text']
            : component['ux-text']?.section || []
          : Array.isArray(component['accessibility'])
            ? component['accessibility']
            : component['accessibility']?.section || []

    const contentSections: ContentSection[] = sectionContent
      .filter(
        (section) => section.title && (!section.tag || section.tag === 'h2'),
      )
      .map((section, index) => ({
        id: `section-${section.title?.toLowerCase().replace(/\s+/g, '-')}-${index}`,
        title: section.title || '',
      }))

    return [...initialSections, ...contentSections]
  }, [component, section, versus])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150
    let newActiveSection = 'component-top'

    // Check each section in reverse order
    for (const section of [...sections].reverse()) {
      const elementId = section.scrollTo || section.id
      const element = document.getElementById(elementId)

      if (element) {
        const { top } = element.getBoundingClientRect()
        const absoluteTop = top + window.scrollY

        if (absoluteTop <= scrollPosition) {
          newActiveSection = section.id
          break
        }
      }
    }

    if (activeSection !== newActiveSection) {
      setActiveSection(newActiveSection)
    }
  }, [sections, activeSection])

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((section: Section) => {
    const targetId = section.scrollTo || section.id
    const element = document.getElementById(targetId)
    if (element) {
      setActiveSection(section.id)
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = window.scrollY + elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

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
              onClick={() => scrollToSection(section)}
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
