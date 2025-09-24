'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'

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
        {/* Controls Card */}
        <Core.GdsCard padding="l" variant="secondary">
          <Core.GdsFlex flex-direction="column" gap="m">
            <Core.GdsText tag="h3" font="heading-s">
              Button Properties
            </Core.GdsText>

            {/* Text Input */}
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="detail-regular-s">Text</Core.GdsText>
              <Core.GdsInput
                value={buttonConfig.text}
                onchange={(e: Event) => {
                  const target = e.target as HTMLInputElement
                  setButtonConfig((prev) => ({
                    ...prev,
                    text: target.value,
                  }))
                }}
              />
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

            {/* Size Selection */}
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="detail-regular-s">Size</Core.GdsText>
              <Core.GdsDropdown
                value={buttonConfig.size}
                onchange={(e: Event) => {
                  const target = e.target as HTMLSelectElement
                  setButtonConfig((prev) => ({
                    ...prev,
                    size: target.value as 'xs' | 'small' | 'medium' | 'large',
                  }))
                }}
              >
                <Core.GdsOption value="xs">Extra Small</Core.GdsOption>
                <Core.GdsOption value="small">Small</Core.GdsOption>
                <Core.GdsOption value="medium">Medium</Core.GdsOption>
                <Core.GdsOption value="large">Large</Core.GdsOption>
              </Core.GdsDropdown>
            </Core.GdsFlex>

            {/* Rank Selection */}
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="detail-regular-s">Rank</Core.GdsText>
              <Core.GdsDropdown
                value={buttonConfig.rank}
                onchange={(e: Event) => {
                  const target = e.target as HTMLSelectElement
                  setButtonConfig((prev) => ({
                    ...prev,
                    rank: target.value as 'primary' | 'secondary' | 'tertiary',
                  }))
                }}
              >
                <Core.GdsOption value="primary">Primary</Core.GdsOption>
                <Core.GdsOption value="secondary">Secondary</Core.GdsOption>
                <Core.GdsOption value="tertiary">Tertiary</Core.GdsOption>
              </Core.GdsDropdown>
            </Core.GdsFlex>

            {/* Variant Selection */}
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="detail-regular-s">Variant</Core.GdsText>
              <Core.GdsDropdown
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

            {/* Width Input */}
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText font="detail-regular-s">Width</Core.GdsText>
              <Core.GdsInput
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
          </Core.GdsFlex>
        </Core.GdsCard>

        {/* Preview Card */}
        <Core.GdsCard padding="l" variant="secondary">
          <Core.GdsFlex flex-direction="column" gap="m">
            <Core.GdsText tag="h3" font="heading-s">
              Preview
            </Core.GdsText>
            <Core.GdsFlex
              justify-content="center"
              align-items="center"
              min-height="200px"
              background="L1"
              border-radius="m"
              padding="xl"
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
            </Core.GdsFlex>
          </Core.GdsFlex>
        </Core.GdsCard>
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
