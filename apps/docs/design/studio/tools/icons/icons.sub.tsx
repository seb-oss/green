// design/studio/tools/icons/icons.sub.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { useContent } from '../../../../settings/content'
import { useIcons } from './icons.context'

type TabValue = 'code' | 'details'
type CardVariant = 'neutral' | 'positive' | 'negative' | 'notice' | 'warning'

export default function IconDetail({ ID }: { ID: string }) {
  const { actions } = useContent()
  const { isSolid, selectedSize } = useIcons()
  const [activeTab, setActiveTab] = useState<TabValue>('details')
  const [cardVariant, setCardVariant] = useState<CardVariant>('neutral')

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
        padding="l"
        variant={cardVariant}
        height="280px"
        justify-content="space-between"
        align-items="center"
        border-radius="m"
        position="relative"
      >
        <Core.GdsFlex flex="1" align-items="center" justify-content="center">
          <Icon
            name={`Icon${iconData.displayName.replace(/\s+/g, '')}`}
            size={selectedSize ? selectedSize : '2xl'}
            solid={isSolid}
          />
        </Core.GdsFlex>

        <Core.GdsFlex
          align-items="center"
          gap="xs"
          width="100%"
          // position="absolute"
          // inset="auto 20px 20px 20px"
          justify-content="space-between"
        >
          <Core.GdsText font="body-xs">{iconData.displayName}</Core.GdsText>
          <Core.GdsFlex>
            <Core.GdsDiv
              level="3"
              width="m"
              height="m"
              border-color="strong"
              background={cardVariant !== 'neutral' ? 'neutral-01' : 'none'}
              border-width="2xs"
              border-radius="s 0 0 s"
              data-variant="neutral"
              onClick={() => setCardVariant('neutral')}
            />
            <Core.GdsDiv
              level="3"
              width="m"
              height="m"
              border-color="positive-01"
              background={cardVariant !== 'positive' ? 'positive-01' : 'none'}
              border-width="2xs"
              border-radius="0"
              data-variant="positive"
              onClick={() => setCardVariant('positive')}
            />
            <Core.GdsDiv
              level="3"
              width="m"
              height="m"
              border-color="notice-01"
              background={cardVariant !== 'notice' ? 'notice-01' : 'none'}
              border-width="2xs"
              border-radius="0"
              data-variant="notice"
              onClick={() => setCardVariant('notice')}
            />
            <Core.GdsDiv
              level="3"
              width="m"
              height="m"
              border-color="negative-01"
              background={cardVariant !== 'negative' ? 'negative-01' : 'none'}
              border-width="2xs"
              border-radius="0"
              data-variant="negative"
              onClick={() => setCardVariant('negative')}
            />
            <Core.GdsDiv
              level="3"
              width="m"
              height="m"
              border-color="warning-01"
              background={cardVariant !== 'warning' ? 'warning-01' : 'none'}
              border-width="2xs"
              border-radius="0 s s 0"
              data-variant="warning"
              onClick={() => setCardVariant('warning')}
            />
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsCard>

      <Core.GdsFlex justify-content="space-between" align-items="center">
        <Core.GdsSegmentedControl
          size="small"
          value={activeTab}
          onchange={(e: Event) =>
            setActiveTab((e.target as HTMLSelectElement).value as TabValue)
          }
          width="max-content"
        >
          <Core.GdsSegment value="details">
            <Core.GdsFlex gap="xs" align-items="center">
              <Core.IconCircleInfo size="m" />
              <Core.GdsText font="body-regular-s">Details</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsSegment>
          <Core.GdsSegment value="code">
            <Core.GdsFlex gap="xs" align-items="center">
              <Core.IconCodeBrackets size="m" />
              <Core.GdsText font="body-regular-s">Code</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsSegment>
        </Core.GdsSegmentedControl>
      </Core.GdsFlex>
      <Core.GdsCard variant="secondary" border-radius="m" padding="xs">
        {activeTab === 'code' ? (
          <Core.GdsFlex flex-direction="column" gap="xl">
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="heading-xs">React</Core.GdsText>
              <Core.GdsCard padding="m" border-color="subtle-01">
                <Core.GdsText font="detail-book-s" color="subtle-02">
                  {iconData.framework.react.import}
                </Core.GdsText>
                <Core.GdsText font="detail-book-s">
                  {iconData.framework.react.component}
                </Core.GdsText>
              </Core.GdsCard>
            </Core.GdsFlex>

            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="heading-xs">Web Component</Core.GdsText>
              <Core.GdsCard padding="m" border-color="subtle-01">
                <Core.GdsText font="detail-book-s" color="subtle-02">
                  {iconData.framework.web.import}
                </Core.GdsText>
                <Core.GdsText font="detail-book-s">
                  {iconData.framework.web.component}
                </Core.GdsText>
              </Core.GdsCard>
            </Core.GdsFlex>

            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="heading-xs">Angular</Core.GdsText>
              <Core.GdsCard padding="m" border-color="subtle-01">
                <Core.GdsText font="detail-book-s" color="subtle-02">
                  {iconData.framework.angular.import}
                </Core.GdsText>
                <Core.GdsText font="detail-book-s">
                  {iconData.framework.angular.component}
                </Core.GdsText>
              </Core.GdsCard>
            </Core.GdsFlex>
          </Core.GdsFlex>
        ) : (
          <Core.GdsFlex flex-direction="column" gap="l" padding="m">
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="heading-xs">Categories</Core.GdsText>
              <Core.GdsFlex gap="s" flex-wrap="wrap">
                {iconData.meta.categories.map((category) => (
                  <Core.GdsBadge key={category} size="small">
                    {category}
                  </Core.GdsBadge>
                ))}
              </Core.GdsFlex>
            </Core.GdsFlex>

            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="heading-xs">Tags</Core.GdsText>
              <Core.GdsFlex gap="xs" flex-wrap="wrap">
                {iconData.meta.tags[0].split(',').map((tag) => (
                  <Core.GdsBadge key={tag} color="subtle-02">
                    {tag.trim()}
                  </Core.GdsBadge>
                ))}
              </Core.GdsFlex>
            </Core.GdsFlex>

            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="heading-xs">Specifications</Core.GdsText>
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
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
