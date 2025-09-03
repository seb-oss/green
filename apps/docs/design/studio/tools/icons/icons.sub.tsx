// design/studio/tools/icons/icons.sub.tsx
'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'

interface IconData {
  id: string
  displayName: string
  variants: {
    regular: string
    solid: string
  }
  static: {
    regular: string
    solid: string
  }
  meta: {
    description: string
    categories: string[]
    tags: string[]
    width: number
    height: number
    viewBox: string
  }
  framework: {
    web: {
      path: string
      import: string
      component: string
    }
    react: {
      path: string
      import: string
      component: string
    }
    angular: {
      path: string
      import: string
      component: string
    }
  }
}

export default function IconDetail({ ID }: { ID: string }) {
  const [iconData, setIconData] = useState<IconData | null>(null)
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    fetch('https://api.seb.io/components/icon/icon.list.json')
      .then((res) => res.json())
      .then((data) => setIconData(data[ID]))
  }, [ID])

  if (!iconData) return null

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="xl"
      padding="0"
      min-width="400px"
      width="400px"
      max-width="400px"
    >
      {/* Preview Section */}
      <Core.GdsCard
        padding="xl"
        variant="secondary"
        height="280px"
        justify-content="center"
        align-items="center"
      >
        <Core.GdsFlex flex-direction="column" gap="l" align-items="center">
          <Icon
            name={`Icon${iconData.displayName.replace(/\s+/g, '')}`}
            size="2xl"
            solid={isSolid}
          />
          <Core.GdsText font="heading-m">{iconData.displayName}</Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsCard>

      {/* Variants */}
      {false && (
        <Core.GdsFlex flex-direction="column" gap="m">
          <Core.GdsText font="heading-s">Variants</Core.GdsText>
          <Core.GdsSegmentedControl
            value={isSolid ? 'solid' : 'regular'}
            onchange={(e: Event) =>
              setIsSolid((e.target as HTMLSelectElement).value === 'solid')
            }
          >
            <Core.GdsSegment value="regular">Regular</Core.GdsSegment>
            <Core.GdsSegment value="solid">Solid</Core.GdsSegment>
          </Core.GdsSegmentedControl>
        </Core.GdsFlex>
      )}

      {/* Categories */}
      <Core.GdsFlex flex-direction="column" gap="xs">
        <Core.GdsText font="heading-s">Categories</Core.GdsText>
        <Core.GdsFlex gap="s" flex-wrap="wrap">
          {iconData.meta.categories.map((category) => (
            <Core.GdsBadge key={category} size="small">
              {category}
            </Core.GdsBadge>
          ))}
        </Core.GdsFlex>
      </Core.GdsFlex>

      {/* Tags */}
      <Core.GdsFlex flex-direction="column" gap="xs">
        <Core.GdsText font="heading-s">Tags</Core.GdsText>
        <Core.GdsFlex gap="xs" flex-wrap="wrap">
          {iconData.meta.tags[0].split(',').map((tag) => (
            <Core.GdsBadge key={tag} color="subtle-02">
              {tag.trim()}
            </Core.GdsBadge>
          ))}
        </Core.GdsFlex>
      </Core.GdsFlex>

      {/* Framework Usage */}
      <Core.GdsFlex flex-direction="column" gap="m">
        <Core.GdsText font="heading-s">Implementation</Core.GdsText>

        {/* React */}
        <Core.GdsCard variant="secondary" padding="m">
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font="heading-xs">React</Core.GdsText>
            <Core.GdsText font="detail-book-s" color="subtle-02">
              {iconData.framework.react.import}
            </Core.GdsText>
            <Core.GdsText font="detail-book-s">
              {iconData.framework.react.component}
            </Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsCard>

        {/* Web Component */}
        <Core.GdsCard variant="secondary" padding="m">
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font="heading-xs">Web Component</Core.GdsText>
            <Core.GdsText font="detail-book-s" color="subtle-02">
              {iconData.framework.web.import}
            </Core.GdsText>
            <Core.GdsText font="detail-book-s">
              {iconData.framework.web.component}
            </Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsCard>

        {/* Angular */}
        <Core.GdsCard variant="secondary" padding="m">
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font="heading-xs">Angular</Core.GdsText>
            <Core.GdsText font="detail-book-s" color="subtle-02">
              {iconData.framework.angular.import}
            </Core.GdsText>
            <Core.GdsText font="detail-book-s">
              {iconData.framework.angular.component}
            </Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsCard>
      </Core.GdsFlex>

      {/* Meta Information */}
      <Core.GdsFlex flex-direction="column" gap="m">
        <Core.GdsText font="heading-s">Specifications</Core.GdsText>
        <Core.GdsGrid columns="3" gap="m">
          <Core.GdsCard variant="secondary" padding="m">
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font="heading-xs">Width</Core.GdsText>
              <Core.GdsText>{iconData.meta.width}px</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsCard>
          <Core.GdsCard variant="secondary" padding="m">
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font="heading-xs">Height</Core.GdsText>
              <Core.GdsText>{iconData.meta.height}px</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsCard>
          <Core.GdsCard variant="secondary" padding="m">
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font="heading-xs">ViewBox</Core.GdsText>
              <Core.GdsText>{iconData.meta.viewBox}</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsCard>
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
