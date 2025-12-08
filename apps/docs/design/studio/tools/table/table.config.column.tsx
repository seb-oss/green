'use client'

import { useState } from 'react'

import type { Types } from '@sebgroup/green-core/components/table'

import * as Core from '@sebgroup/green-core/react'

export default function Column({ sorting }: { sorting?: boolean }) {
  const [selectedCellType, setSelectedCellType] = useState<string>('')
  const [slot, setSlot] = useState<string[]>(['default'])

  const CellType = ({ slot }: { slot: 'lead' | 'value' | 'trail' }) => {
    return (
      <Core.GdsDropdown
        plain
        size="small"
        onChange={(e: any) => setSelectedCellType(e.target.value)}
      >
        <Core.GdsOption value="image">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconImages />
            Image
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="icon">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconStore />
            Icon
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="badge">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconTag />
            Badge
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="button">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconCursor />
            Button
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="link">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconChainLink />
            Link
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="context-menu">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconDotGridOneHorizontal />
            Context menu
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="formatted-number">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconPostcard />
            Formatted number
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="formatted-account">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconPostcard />
            Formatted account
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="formatted-date">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconPostcard />
            Formatted date
          </Core.GdsFlex>
        </Core.GdsOption>
      </Core.GdsDropdown>
    )
  }

  const CellTypeProps = () => {
    if (!selectedCellType) {
      return (
        <Core.GdsText>
          Select a cell type to configure its properties
        </Core.GdsText>
      )
    }

    switch (selectedCellType) {
      case 'image':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">Image Properties</Core.GdsText>
            <Core.GdsInput label="Image URL" size="small" />
            <Core.GdsInput label="Alt text" size="small" />
            <Core.GdsInput label="Width" size="small" />
            <Core.GdsInput label="Height" size="small" />
            <Core.GdsDropdown label="Object fit" size="small">
              <Core.GdsOption value="cover">Cover</Core.GdsOption>
              <Core.GdsOption value="contain">Contain</Core.GdsOption>
              <Core.GdsOption value="fill">Fill</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'icon':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">Icon Properties</Core.GdsText>
            <Core.GdsInput label="Icon name" size="small" />
            <Core.GdsDropdown label="Size" size="small">
              <Core.GdsOption value="small">Small</Core.GdsOption>
              <Core.GdsOption value="medium">Medium</Core.GdsOption>
              <Core.GdsOption value="large">Large</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsInput label="Color" size="small" />
          </Core.GdsFlex>
        )

      case 'button':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">Button Properties</Core.GdsText>
            <Core.GdsInput label="Label" size="small" />
            <Core.GdsDropdown label="Rank" size="small">
              <Core.GdsOption value="primary">Primary</Core.GdsOption>
              <Core.GdsOption value="secondary">Secondary</Core.GdsOption>
              <Core.GdsOption value="tertiary">Tertiary</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown label="Size" size="small">
              <Core.GdsOption value="small">Small</Core.GdsOption>
              <Core.GdsOption value="medium">Medium</Core.GdsOption>
              <Core.GdsOption value="large">Large</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown label="Variant" size="small">
              <Core.GdsOption value="positive">Positive</Core.GdsOption>
              <Core.GdsOption value="negative">Negative</Core.GdsOption>
              <Core.GdsOption value="neutral">Neutral</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'link':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">Link Properties</Core.GdsText>
            <Core.GdsInput label="Link text" size="small" />
            <Core.GdsInput label="URL" size="small" />
            <Core.GdsDropdown label="Target" size="small">
              <Core.GdsOption value="_self">Same window</Core.GdsOption>
              <Core.GdsOption value="_blank">New window</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsCheckbox label="Underline" />
          </Core.GdsFlex>
        )

      case 'context-menu':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">
              Context Menu Properties
            </Core.GdsText>
            <Core.GdsInput label="Menu label" size="small" />
            <Core.GdsDropdown label="Trigger type" size="small">
              <Core.GdsOption value="click">Click</Core.GdsOption>
              <Core.GdsOption value="hover">Hover</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown label="Position" size="small">
              <Core.GdsOption value="bottom">Bottom</Core.GdsOption>
              <Core.GdsOption value="top">Top</Core.GdsOption>
              <Core.GdsOption value="left">Left</Core.GdsOption>
              <Core.GdsOption value="right">Right</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'formatted-number':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">
              Formatted Number Properties
            </Core.GdsText>
            <Core.GdsInput label="Number field" size="small" />
            <Core.GdsDropdown label="Format" size="small">
              <Core.GdsOption value="decimal">Decimal</Core.GdsOption>
              <Core.GdsOption value="currency">Currency</Core.GdsOption>
              <Core.GdsOption value="percent">Percent</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsInput label="Decimal places" size="small" type="number" />
            <Core.GdsInput label="Currency" size="small" />
            <Core.GdsCheckbox label="Use grouping separator" />
          </Core.GdsFlex>
        )

      case 'formatted-account':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">
              Formatted Account Properties
            </Core.GdsText>
            <Core.GdsInput label="Account field" size="small" />
            <Core.GdsDropdown label="Format type" size="small">
              <Core.GdsOption value="iban">IBAN</Core.GdsOption>
              <Core.GdsOption value="bban">BBAN</Core.GdsOption>
              <Core.GdsOption value="custom">Custom</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsInput label="Separator" size="small" />
            <Core.GdsCheckbox label="Show bank code" />
            <Core.GdsCheckbox label="Mask account number" />
          </Core.GdsFlex>
        )

      case 'formatted-date':
        return (
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font-weight="bold">
              Formatted Date Properties
            </Core.GdsText>
            <Core.GdsInput label="Date field" size="small" />
            <Core.GdsDropdown label="Format" size="small">
              <Core.GdsOption value="short">Short (DD/MM/YYYY)</Core.GdsOption>
              <Core.GdsOption value="medium">
                Medium (DD MMM YYYY)
              </Core.GdsOption>
              <Core.GdsOption value="long">Long (DD MMMM YYYY)</Core.GdsOption>
              <Core.GdsOption value="full">
                Full (Day, DD MMMM YYYY)
              </Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown label="Locale" size="small">
              <Core.GdsOption value="sv-SE">Swedish</Core.GdsOption>
              <Core.GdsOption value="en-US">English (US)</Core.GdsOption>
              <Core.GdsOption value="en-GB">English (GB)</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsCheckbox label="Show time" />
            <Core.GdsCheckbox label="Relative time (e.g., 2 days ago)" />
          </Core.GdsFlex>
        )

      default:
        return <Core.GdsText>Unknown cell type</Core.GdsText>
    }
  }

  return (
    <Core.GdsFlex gap="s" data-column>
      <Core.GdsCard variant="secondary" padding="0 s s s" overflow="hidden">
        <Core.GdsFlex gap="s" padding="s 0 0 0" z-index="2">
          <Core.GdsInput value="Column name" label="Column" size="small">
            <Core.IconAi slot="lead" />
          </Core.GdsInput>
          <Core.GdsDropdown
            label="Cells"
            size="small"
            value="default"
            multiple
            onChange={(e: React.FormEvent<HTMLElement>) => {
              const customElement = e.target as HTMLElement & {
                value: string[]
              }
              setSlot(customElement.value)
            }}
          >
            <span slot="trigger">Plain</span>
            <Core.GdsOption value="lead">Lead</Core.GdsOption>
            <Core.GdsOption value="default">Value</Core.GdsOption>
            <Core.GdsOption value="trail">Trail</Core.GdsOption>
          </Core.GdsDropdown>
        </Core.GdsFlex>
        <Core.GdsFlex flex-direction="column" border-width="5xs 0 0 0">
          {slot.includes('lead') && (
            <Core.GdsDetails size="small" name="slots" summary="Lead">
              <Core.GdsCard padding="xs">
                <Core.GdsFlex gap="s" align-items="center">
                  <CellType slot="lead" />
                  <Core.GdsButton size="xs" rank="secondary" variant="negative">
                    <Core.IconTrashCan />
                  </Core.GdsButton>
                </Core.GdsFlex>
                <Core.GdsFlex flex-direction="column" padding="s 0">
                  <CellTypeProps />
                </Core.GdsFlex>
              </Core.GdsCard>
            </Core.GdsDetails>
          )}

          {slot.includes('default') && (
            <Core.GdsDetails size="small" name="slots" summary="Value">
              <Core.GdsCard padding="xs">
                <Core.GdsFlex gap="s" align-items="center">
                  <CellType slot="lead" />
                  <Core.GdsButton size="xs" rank="secondary" variant="negative">
                    <Core.IconTrashCan />
                  </Core.GdsButton>
                </Core.GdsFlex>
                <Core.GdsFlex flex-direction="column" padding="s 0">
                  <CellTypeProps />
                </Core.GdsFlex>
              </Core.GdsCard>
            </Core.GdsDetails>
          )}

          {slot.includes('trail') && (
            <Core.GdsDetails size="small" name="slots" summary="Trail">
              <Core.GdsCard padding="xs">
                <Core.GdsFlex gap="s" align-items="center">
                  <CellType slot="lead" />
                  <Core.GdsButton size="xs" rank="secondary" variant="negative">
                    <Core.IconTrashCan />
                  </Core.GdsButton>
                </Core.GdsFlex>
                <Core.GdsFlex flex-direction="column" padding="s 0">
                  <CellTypeProps />
                </Core.GdsFlex>
              </Core.GdsCard>
            </Core.GdsDetails>
          )}
        </Core.GdsFlex>

        <Core.GdsFlex
          gap="s"
          align-items="center"
          justify-content="space-between"
          flex-direction="row"
        >
          <Core.GdsCheckbox label="Sorting"></Core.GdsCheckbox>
          <Core.GdsButton size="xs" rank="secondary" variant="negative">
            Remove
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsCard>

      {sorting && (
        <Core.GdsFlex flex-direction="column">
          <Core.GdsButton label="Move next" rank="tertiary" size="small">
            <Core.IconChevronTop />
          </Core.GdsButton>
          <Core.GdsButton label="Move next" rank="tertiary" size="small">
            <Core.IconChevronBottom />
          </Core.GdsButton>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
