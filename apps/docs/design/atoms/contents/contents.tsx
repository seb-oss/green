// design/atoms/contents/contents.tsx
'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { getTableOfContentsSections, ID } from '../../../hooks'
import { ComponentContent } from '../../../settings/content/types'

import './contents.css'

const SECTION_TITLES = {
  overview: 'Overview',
  'ux-text': 'UX Text',
  accessibility: 'Accessibility',
  code: 'Code',
} as const

interface TableOfContentsProps {
  component: ComponentContent
  section: 'overview' | 'ux-text' | 'accessibility' | 'code'
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
  const sectionContent =
    section === 'overview' ? component.overview : component[section]?.section

  const sections = useMemo(() => {
    const initialSections: Section[] = [
      { id: 'component-top', title: component.title },
      {
        id: `component-${section}`,
        title: SECTION_TITLES[section],
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

    // Update the section content logic to include 'code'
    const sectionContent = {
      overview: component.overview || [],
      'ux-text': Array.isArray(component['ux-text'])
        ? component['ux-text']
        : component['ux-text']?.section || [],
      accessibility: Array.isArray(component['accessibility'])
        ? component['accessibility']
        : component['accessibility']?.section || [],
      code: [],
    }[section]

    const contentSections = getTableOfContentsSections(sectionContent).map(
      (section, index) => ({
        id: ID(section.title, index),
        title: section.title,
      }),
    )

    return [...initialSections, ...contentSections]
  }, [component, section, versus])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150
    let newActiveSection = 'component-top'

    for (const section of [...sections].reverse()) {
      const elementId = section.id
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

  // effect to scroll to url anchor if present, after content has loaded
  useEffect(() => {
    if (sections.length === 0) return
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        setActiveSection(hash)
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        // TODO: Find more reliable way to run after content has finished rendering & animating
      }, 100)
    }
  }, [sections])

  if (sections.length === 0) return null

  return (
    <Core.GdsCard
      variant="secondary"
      padding="xs 2xs"
      position="sticky"
      inset="90px auto auto auto"
      grid-column="10/13"
      border="none"
      background="none"
      height="max-content"
      role="navigation"
      aria-label="Table of contents"
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
              href={`#${section.id}`}
              justify-content="flex-start"
              data-overflow
              data-id={section.id}
            >
              {section.title}
            </Core.GdsButton>
          ))}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
