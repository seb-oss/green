'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { ComponentSection } from '../settings/content/types'

// Class names
export const _ = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ')

export const InternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const router = useRouter()
  e.preventDefault()
  const href = e.currentTarget.href
  router.push(href)
}

export const Icon = ({
  name,
  size,
  solid,
  slot,
}: {
  name: string
  size?: string
  solid?: boolean
  slot?: string
}) => {
  const IconComponent = (Core as Record<string, any>)[name]
  if (!IconComponent) {
    console.warn(`Icon ${name} not found`)
    return null
  }
  return <IconComponent slot={slot} size={size} solid={solid} />
}

export const ID = (title: string, index: number) => {
  return `${title
    .toLowerCase()
    .replace(/[']/g, '') // Remove apostrophes
    .replace(/[^a-z0-9-\s]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '')}-${index}` // Remove leading/trailing hyphens
}

// export const getContentSections = (
//   content: ComponentSection[] | null | undefined,
// ) => {
//   return (
//     content?.filter(
//       (section): section is ComponentSection & { title: string } =>
//         Boolean(section.title) && (!section.tag || section.tag === 'H2'),
//     ) || []
//   )
// }

export const getH2Index = (
  sections: ComponentSection[],
  currentIndex: number,
): number => {
  return sections
    .filter(
      (section) => section.title && (!section.tag || section.tag === 'H2'),
    )
    .findIndex((_, idx) => {
      const h2Sections = sections.filter(
        (s) => s.title && (!s.tag || s.tag === 'H2'),
      )
      return h2Sections[idx] === sections[currentIndex]
    })
}

export const getContentSections = (
  content: ComponentSection[] | null | undefined,
) => {
  if (!content) return []

  return content.map((section, index) => {
    if (!section.title) return section

    if (!section.tag || section.tag === 'H2') {
      const h2Index = getH2Index(content, index)
      return {
        ...section,
        _h2Index: h2Index,
      }
    }
    return section
  })
}

export const getTableOfContentsSections = (
  content: ComponentSection[] | null | undefined,
) => {
  if (!content) return []

  return content
    .filter(
      (section): section is ComponentSection & { title: string } =>
        Boolean(section.title) && (!section.tag || section.tag === 'H2'),
    )
    .map((section, index) => ({
      id: ID(section.title, index),
      title: section.title,
    }))
}
