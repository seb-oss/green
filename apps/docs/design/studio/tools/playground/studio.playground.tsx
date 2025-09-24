'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'
import { ArgsTable } from '../../../atoms/props/props'

interface ButtonConfig {
  text: string
  icon?: string
  iconSlot: 'lead' | 'trail'
  size: 'xs' | 'small' | 'medium' | 'large'
  width?: string
  rank: 'primary' | 'secondary' | 'tertiary'
  variant: 'brand' | 'neutral' | 'positive' | 'negative' | 'notice' | 'warning'
}

export default function Playground() {
  const { actions } = useContent()
  const [activeTab, setActiveTab] = useState<'component' | 'api'>('component')

  const [buttonConfig, setButtonConfig] = useState<ButtonConfig>({
    text: 'Button',
    iconSlot: 'lead',
    size: 'medium',
    rank: 'primary',
    variant: 'neutral',
  })

  return (
    <Core.GdsFlex flex-direction="column" gap="xl">
      <Core.GdsGrid columns="2" gap="l">
        <Core.GdsCard
          justify-content="center"
          align-items="center"
          data-pattern
          background="none"
          variant="secondary"
          border-radius="l"
          height="60vh"
          position="sticky"
          inset="40px 0 0 0"
        >
          <Core.GdsButton
            size={buttonConfig.size}
            width={buttonConfig.width}
            rank={buttonConfig.rank}
            variant={buttonConfig.variant}
          >
            {/* {buttonConfig.icon && buttonConfig.iconSlot === 'lead' && (
                  <Core[buttonConfig.icon] slot="lead" />
                )} */}
            {buttonConfig.text}
            {/* {buttonConfig.icon && buttonConfig.iconSlot === 'trail' && (
                  <Core[buttonConfig.icon] slot="trail" />
                )} */}
          </Core.GdsButton>
        </Core.GdsCard>

        <Core.GdsFlex flex-direction="column" gap="s">
          <Core.GdsSegmentedControl
            size="small"
            width="max-content"
            value={activeTab}
            onchange={(e: Event) => {
              const target = e.target as HTMLSelectElement
              setActiveTab(target.value as 'component' | 'api')
            }}
          >
            <Core.GdsSegment value="component">Properties</Core.GdsSegment>
            <Core.GdsSegment value="api">Public API</Core.GdsSegment>
          </Core.GdsSegmentedControl>
          {activeTab === 'component' ? (
            <Core.GdsCard variant="secondary" border-radius="l" flex="1">
              <Core.GdsFlex gap="s">
                <Core.GdsInput
                  label="Label"
                  size="small"
                  value={buttonConfig.text}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLInputElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      text: target.value,
                    }))
                  }}
                />

                <Core.GdsDropdown
                  label="Size"
                  size="small"
                  value={buttonConfig.size}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLSelectElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      size: target.value as 'xs' | 'small' | 'medium' | 'large',
                    }))
                  }}
                >
                  <Core.GdsOption value="xs">XS</Core.GdsOption>
                  <Core.GdsOption value="small">Small</Core.GdsOption>
                  <Core.GdsOption value="medium">Medium</Core.GdsOption>
                  <Core.GdsOption value="large">Large</Core.GdsOption>
                </Core.GdsDropdown>
              </Core.GdsFlex>
              {/* Icon Selection */}
              <Core.GdsFlex gap="s">
                <Core.GdsDropdown
                  size="small"
                  label="Icon"
                  value={buttonConfig.icon}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLSelectElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      icon: target.value,
                    }))
                  }}
                >
                  <Core.GdsOption value="">No icon</Core.GdsOption>
                  {actions.getIcons().map((icon) => (
                    <Core.GdsOption key={icon.id} value={icon.reactName}>
                      {icon.displayName}
                    </Core.GdsOption>
                  ))}
                </Core.GdsDropdown>

                <Core.GdsDropdown
                  label="Slot"
                  size="small"
                  value={buttonConfig.iconSlot}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLSelectElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      iconSlot: target.value as 'lead' | 'trail',
                    }))
                  }}
                >
                  <Core.GdsOption value="lead">Lead</Core.GdsOption>
                  <Core.GdsOption value="trail">Trail</Core.GdsOption>
                </Core.GdsDropdown>
              </Core.GdsFlex>

              <Core.GdsFlex gap="s">
                <Core.GdsDropdown
                  label="Rank"
                  size="small"
                  value={buttonConfig.rank}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLSelectElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      rank: target.value as
                        | 'primary'
                        | 'secondary'
                        | 'tertiary',
                    }))
                  }}
                >
                  <Core.GdsOption value="primary">Primary</Core.GdsOption>
                  <Core.GdsOption value="secondary">Secondary</Core.GdsOption>
                  <Core.GdsOption value="tertiary">Tertiary</Core.GdsOption>
                </Core.GdsDropdown>

                <Core.GdsDropdown
                  label="Variant"
                  size="small"
                  value={buttonConfig.variant}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLSelectElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      variant: target.value as ButtonConfig['variant'],
                    }))
                  }}
                >
                  <Core.GdsOption value="brand">Brand</Core.GdsOption>
                  <Core.GdsOption value="neutral">Neutral</Core.GdsOption>
                  <Core.GdsOption value="positive">Positive</Core.GdsOption>
                  <Core.GdsOption value="negative">Negative</Core.GdsOption>
                  <Core.GdsOption value="notice">Notice</Core.GdsOption>
                  <Core.GdsOption value="warning">Warning</Core.GdsOption>
                </Core.GdsDropdown>
              </Core.GdsFlex>

              <Core.GdsFlex gap="s">
                <Core.GdsInput
                  label="Width"
                  size="small"
                  value={buttonConfig.width}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLInputElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      width: target.value,
                    }))
                  }}
                />
                <Core.GdsInput
                  label="Margin"
                  size="small"
                  value={buttonConfig.width}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLInputElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      width: target.value,
                    }))
                  }}
                />
              </Core.GdsFlex>
            </Core.GdsCard>
          ) : (
            <Core.GdsCard variant="secondary" border-radius="l" flex="1">
              <ArgsTable componentName="button" plain />
            </Core.GdsCard>
          )}
        </Core.GdsFlex>
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
