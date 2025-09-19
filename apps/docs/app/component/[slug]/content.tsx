// app/component/[slug]/content.tsx
'use client'

/* eslint-disable no-case-declarations */
import React from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Render } from '../../../design/atoms/content/render'
import { useContent } from '../../../settings/content'
import { ComponentSection } from '../../../settings/content/types'

interface ContentSectionProps {
  slug: string
  contentKey: 'overview' | 'ux-text' | 'accessibility' | 'code' | 'faq'
}

export function ContentSection({ slug, contentKey }: ContentSectionProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)
  if (!component) return null

  const getContent = (): ComponentSection[] | null => {
    switch (contentKey) {
      case 'overview':
        return component.overview || null
      case 'ux-text': {
        if (Array.isArray(component['ux-text'])) {
          return component['ux-text']
        }
        return component['ux-text']?.section || null
      }
      case 'accessibility': {
        if (Array.isArray(component['accessibility'])) {
          return component['accessibility']
        }
        return component['accessibility']?.section || null
      }
      case 'code': {
        if (Array.isArray(component['code'])) {
          return component['code']
        }
        return component['code']?.section || null
      }
      case 'faq': {
        if (Array.isArray(component['faq'])) {
          return component['faq']
        }
        return component['faq']?.section || null
      }
      default:
        return null
    }
  }

  const content = getContent()

  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return actions.getComponentImage?.(slug, node)
    },
  }

  return (
    <Render
      content={content}
      slug={slug}
      imageProvider={imageProvider}
      isAccessibility={contentKey === 'accessibility'}
    />
  )
}
