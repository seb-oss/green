// design/studio/tools/icons/icons.sub.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { useContent } from '../../../../settings/content'

type TabValue = 'code' | 'info'
type CardVariant = 'secondary' | 'positive' | 'negative' | 'notice' | 'warning'

export default function IconDetail({ ID }: { ID: string }) {
  const { actions } = useContent()
  const [isSolid, setIsSolid] = useState(false)
  const [activeTab, setActiveTab] = useState<TabValue>('code')
  const [cardVariant, setCardVariant] = useState<CardVariant>('secondary')

  const iconData = useMemo(() => actions.getIcon(ID), [actions, ID])

  if (!iconData) return null

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="m"
      padding="0"
      min-width="400px"
      width="400px"
      max-width="400px"
    >
      <Core.GdsCard
        padding="s"
        variant="secondary"
        height="280px"
        justify-content="center"
        align-items="center"
        border-radius="l"
        position="relative"
      >
        <Core.GdsFlex color={cardVariant}>
          <Icon
            name={`Icon${iconData.displayName.replace(/\s+/g, '')}`}
            size="2xl"
            solid={isSolid}
          />
        </Core.GdsFlex>
        <Core.GdsText font="heading-s">{iconData.displayName}</Core.GdsText>

        <Core.GdsFlex
          align-items="center"
          gap="xs"
          position="absolute"
          inset="auto 20px 20px auto"
        >
          <Core.GdsDiv
            level="3"
            width="m"
            height="m"
            border-color="positive-01"
            border-width="2xs"
            border-radius="xs"
            data-variant="positive"
            background={cardVariant === 'positive' ? 'positive' : 'secondary'}
            onClick={() => setCardVariant('positive')}
          />
          <Core.GdsDiv
            level="3"
            width="m"
            height="m"
            border-color="notice-01"
            border-width="2xs"
            border-radius="xs"
            data-variant="notice"
            onClick={() => setCardVariant('notice')}
          />
          <Core.GdsDiv
            level="3"
            width="m"
            height="m"
            border-color="negative-01"
            border-width="2xs"
            border-radius="xs"
            data-variant="negative"
            onClick={() => setCardVariant('negative')}
          />
          <Core.GdsDiv
            level="3"
            width="m"
            height="m"
            border-color="negative-01"
            border-width="2xs"
            border-radius="xs"
            data-variant="negative"
            onClick={() => setCardVariant('warning')}
          />
        </Core.GdsFlex>
      </Core.GdsCard>

      <Core.GdsSegmentedControl
        size="small"
        value={activeTab}
        onchange={(e: Event) =>
          setActiveTab((e.target as HTMLSelectElement).value as TabValue)
        }
        width="max-content"
      >
        <Core.GdsSegment value="code">Code</Core.GdsSegment>
        <Core.GdsSegment value="info">Info</Core.GdsSegment>
      </Core.GdsSegmentedControl>
      <Core.GdsButton
        rank="tertiary"
        size="small"
        onClick={() => setIsSolid(!isSolid)}
      >
        {isSolid ? 'Regular' : 'Solid'}
      </Core.GdsButton>

      {/* Content Section */}
      {activeTab === 'code' ? (
        <Core.GdsFlex flex-direction="column" gap="m">
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
      ) : (
        <Core.GdsFlex flex-direction="column" gap="xl">
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

          {/* Specifications */}
          <Core.GdsFlex flex-direction="column" gap="m">
            <Core.GdsText font="heading-s">Specifications</Core.GdsText>
            <Core.GdsGrid columns="3" gap="m">
              <Core.GdsFlex flex-direction="column" gap="0">
                <Core.GdsText font="heading-xs">Width</Core.GdsText>
                <Core.GdsText>{iconData.meta.width}px</Core.GdsText>
              </Core.GdsFlex>
              <Core.GdsFlex flex-direction="column" gap="0">
                <Core.GdsText font="heading-xs">Height</Core.GdsText>
                <Core.GdsText>{iconData.meta.height}px</Core.GdsText>
              </Core.GdsFlex>
              <Core.GdsFlex flex-direction="column" gap="0">
                <Core.GdsText font="heading-xs">ViewBox</Core.GdsText>
                <Core.GdsText>{iconData.meta.viewBox}</Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsGrid>
          </Core.GdsFlex>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
