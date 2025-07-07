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
  return `section-${title
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

export const getContentSections = (
  content: ComponentSection[] | null | undefined,
) => {
  return (
    content?.filter(
      (section): section is ComponentSection & { title: string } =>
        Boolean(section.title), // Show all headers for content
    ) || []
  )
}

export const getTableOfContentsSections = (
  content: ComponentSection[] | null | undefined,
) => {
  return (
    content?.filter(
      (section): section is ComponentSection & { title: string } =>
        Boolean(section.title) && (!section.tag || section.tag === 'H2'), // Only H2 for table of contents
    ) || []
  )
}
