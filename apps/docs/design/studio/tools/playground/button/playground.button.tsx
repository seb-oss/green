'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../../hooks'
import { useContent } from '../../../../../settings/content'
import { ArgsTable } from '../../../../atoms/props/props'

interface ButtonConfig {
  text: string
  icon?: string // Keep as string to store the icon name
  iconSlot: 'lead' | 'trail'
  size: 'xs' | 'small' | 'medium' | 'large'
  width?: string
  rank: 'primary' | 'secondary' | 'tertiary'
  variant: 'brand' | 'neutral' | 'positive' | 'negative' | 'notice' | 'warning'
}

const defaultConfig: ButtonConfig = {
  text: 'Love it!',
  icon: 'IconHeart',
  iconSlot: 'lead',
  size: 'large',
  rank: 'primary',
  variant: 'brand',
}

export default function Button() {
  const { actions } = useContent()
  const [activeTab, setActiveTab] = useState<'component' | 'api'>('component')
  const [buttonConfig, setButtonConfig] = useState<ButtonConfig>(defaultConfig)

  const IconComponent = buttonConfig.icon
    ? Core[buttonConfig.icon as keyof typeof Core]
    : null

  const handleReset = () => {
    setButtonConfig(defaultConfig)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" className="studio-page">
      <Core.GdsGrid columns="1; m{2}" gap="l">
        <Core.GdsCard
          justify-content="center"
          align-items="center"
          data-pattern
          background="none"
          variant="secondary"
          border-radius="l"
          height="40vh; m{60vh}"
          position="relative; m{sticky}"
          inset="0; m{40px 0 0 0}"
        >
          <Core.GdsButton
            size={buttonConfig.size}
            width={buttonConfig.width}
            rank={buttonConfig.rank}
            variant={buttonConfig.variant}
          >
            {IconComponent && buttonConfig.iconSlot === 'lead' && (
              <IconComponent slot="lead" />
            )}
            {buttonConfig.text}
            {IconComponent && buttonConfig.iconSlot === 'trail' && (
              <IconComponent slot="trail" />
            )}
          </Core.GdsButton>
        </Core.GdsCard>

        <Core.GdsCard variant="secondary" border-radius="l" flex="1" gap="m">
          <Core.GdsFlex
            gap="s"
            justify-content="space-between"
            align-items="center"
          >
            <Core.GdsText font="heading-s">Button</Core.GdsText>
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
          </Core.GdsFlex>
          <Core.GdsDivider color="subtle-01" />

          {activeTab === 'component' ? (
            <Core.GdsFlex flex-direction="column" gap="l" flex="1">
              <Core.GdsFlex gap="l">
                <Core.GdsInput
                  size="small"
                  label="Label"
                  value={buttonConfig.text}
                  oninput={(e: Event) => {
                    const target = e.target as HTMLInputElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      text: target.value,
                    }))
                  }}
                  // onInput={(e) => handleSearch((e.target as HTMLInputElement).value)}
                >
                  <Core.IconPencilSign slot="lead" />
                </Core.GdsInput>
                <Core.GdsFlex width="240px">
                  <Core.GdsDropdown
                    label="Size"
                    size="small"
                    value={buttonConfig.size}
                    onchange={(e: Event) => {
                      const target = e.target as HTMLSelectElement
                      setButtonConfig((prev) => ({
                        ...prev,
                        size: target.value as
                          | 'xs'
                          | 'small'
                          | 'medium'
                          | 'large',
                      }))
                    }}
                  >
                    <Core.IconDotGridOneVertical slot="lead" />
                    <Core.GdsOption value="xs">XS</Core.GdsOption>
                    <Core.GdsOption value="small">Small</Core.GdsOption>
                    <Core.GdsOption value="medium">Medium</Core.GdsOption>
                    <Core.GdsOption value="large">Large</Core.GdsOption>
                  </Core.GdsDropdown>
                </Core.GdsFlex>
              </Core.GdsFlex>
              {/* Icon Selection */}
              <Core.GdsFlex gap="l">
                <Core.GdsDropdown
                  size="small"
                  label="Icon"
                  searchable
                  value={buttonConfig.icon}
                  onchange={(e: Event) => {
                    const target = e.target as HTMLSelectElement
                    setButtonConfig((prev) => ({
                      ...prev,
                      icon: target.value,
                    }))
                  }}
                >
                  {IconComponent && buttonConfig.iconSlot === 'lead' && (
                    <IconComponent slot="lead" />
                  )}
                  {IconComponent && buttonConfig.iconSlot === 'trail' && (
                    <IconComponent slot="lead" />
                  )}
                  <Core.GdsOption value="">
                    <Core.GdsFlex align-items="center" gap="s">
                      No icon
                    </Core.GdsFlex>
                  </Core.GdsOption>
                  {actions.getIcons().map((icon) => {
                    const IconComp = Core[icon.reactName as keyof typeof Core]
                    return (
                      <Core.GdsOption key={icon.id} value={icon.reactName}>
                        <Core.GdsFlex align-items="center" gap="s">
                          {IconComp && <IconComp />}
                          {icon.displayName}
                        </Core.GdsFlex>
                      </Core.GdsOption>
                    )
                  })}
                </Core.GdsDropdown>

                <Core.GdsFlex width="240px">
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
                    <Core.IconArrowLeftRight slot="lead" />
                    <Core.GdsOption value="lead">Lead</Core.GdsOption>
                    <Core.GdsOption value="trail">Trail</Core.GdsOption>
                  </Core.GdsDropdown>
                </Core.GdsFlex>
              </Core.GdsFlex>

              <Core.GdsFlex gap="l">
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
                  <Core.IconChevronDoubleUp slot="lead" />
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
                  <Core.IconCirclesThree slot="lead" />
                  <Core.GdsOption value="brand">Brand</Core.GdsOption>
                  <Core.GdsOption value="neutral">Neutral</Core.GdsOption>
                  <Core.GdsOption value="positive">Positive</Core.GdsOption>
                  <Core.GdsOption value="negative">Negative</Core.GdsOption>
                  <Core.GdsOption value="notice">Notice</Core.GdsOption>
                  <Core.GdsOption value="warning">Warning</Core.GdsOption>
                </Core.GdsDropdown>
              </Core.GdsFlex>
              <Core.GdsButton
                width="max-content"
                size="small"
                onClick={() => handleReset()}
                rank="secondary"
              >
                <Core.IconArrow slot="lead" />
                Reset
              </Core.GdsButton>
              <Core.GdsAlert variant="notice" dismissible>
                This is experimental feature, more components will be added!
              </Core.GdsAlert>
            </Core.GdsFlex>
          ) : (
            <ArgsTable componentName="button" plain />
          )}
        </Core.GdsCard>
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
