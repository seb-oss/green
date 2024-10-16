'use client'

import { allComponents } from 'content'

import GdsBadge from '@sebgroup/green-react/src/core/badge'
import GdsButton from '@sebgroup/green-react/src/core/button'
import GdsCalendar from '@sebgroup/green-react/src/core/calendar'
import GdsCoachmark from '@sebgroup/green-react/src/core/coachmark'
import GdsContextMenu from '@sebgroup/green-react/src/core/context-menu'
import GdsDatepicker from '@sebgroup/green-react/src/core/datepicker'
import GdsDropdown from '@sebgroup/green-react/src/core/dropdown'
import GdsFilterChips from '@sebgroup/green-react/src/core/filter-chips'
import GdsGroupedList from '@sebgroup/green-react/src/core/grouped-list'
import GdsListItem from '@sebgroup/green-react/src/core/list-item'
import GdsInput from '@sebgroup/green-react/src/core/input'
import GdsMenuButton from '@sebgroup/green-react/src/core/menu-button'
import GdsBackdrop from '@sebgroup/green-react/src/core/backdrop'
import GdsPopover from '@sebgroup/green-react/src/core/popover'
import GdsRadioGroup from '@sebgroup/green-react/src/core/radio-group'
import GdsSegmentedControl from '@sebgroup/green-react/src/core/segmented-control'
import GdsTextarea from '@sebgroup/green-react/src/core/input'
import GdsTheme from '@sebgroup/green-react/src/core/theme'
import GdsFab from '@sebgroup/green-react/src/core/fab'
import GdsText from '@sebgroup/green-react/src/core/text'
import GdsFilterChip from '@sebgroup/green-react/src/core/filter-chip'
import GdsCard from '@sebgroup/green-react/src/core/card'
import GdsContainer from '@sebgroup/green-react/src/core/container'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsGrid from '@sebgroup/green-react/src/core/grid'
import GdsImg from '@sebgroup/green-react/src/core/img'
import GdsVideo from '@sebgroup/green-react/src/core/video'
import GdsSegment from '@sebgroup/green-react/src/core/segment'
import Link from 'next/link'

export default function Components({ title }: { title: string }) {
  const components = allComponents
    .filter((component) => {
      if (component._raw.sourceFileName !== 'index.mdx') {
        return false
      }
      if (component.private) {
        return false
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <GdsFlex gap="m" flex-direction="column">
      {title && <GdsText tag="h2">{title}</GdsText>}
      {/* //   <ComponentCard key={idx} {...component} /> */}
      <GdsGrid columns="2; m{1} l{3}" gap="m">
        {/* {components.map((component, idx) => (
          <GdsFlex key={idx} align-items="center">
            <GdsText tag="h3">{component.title}</GdsText>
          </GdsFlex>
        ))} */}

        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              gap="xl"
            >
              <GdsBadge variant="notice">Badge</GdsBadge>
              <GdsBadge variant="positive" notification>
                999<gds-icon-plus-small slot="trail"></gds-icon-plus-small>
              </GdsBadge>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-badge--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Badge</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
            >
              <GdsButton>
                <gds-icon-credit-card slot="lead"></gds-icon-credit-card>Primary
              </GdsButton>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-button--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Button</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
            >
              <GdsFab
                variant="positive"
                inset="0"
                rank="secondary"
                position="relative"
              >
                Secondary <GdsSignal slot="trail"></GdsSignal>
              </GdsFab>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-button-fab--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">FAB</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <GdsFilterChips value="chips, filter" label="Pick news channel">
                <GdsFilterChip value="filter">Filter</GdsFilterChip>
                <GdsFilterChip value="chips">Chips</GdsFilterChip>
              </GdsFilterChips>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-filter-chips--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Filter Chips</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <gds-icon-rocket width="42" height="42"></gds-icon-rocket>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-icon--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Icon</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              gap="s"
            >
              <GdsMenuButton>
                <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
                Search
              </GdsMenuButton>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-menu-button--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Menu Button</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <GdsFlex max-width="200px">
                <GdsSegmentedControl size="small" value="1">
                  <GdsSegment value="1">Segmented</GdsSegment>
                  <GdsSegment value="2">Control</GdsSegment>
                </GdsSegmentedControl>
              </GdsFlex>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-segmented-control--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Segmented Control</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              gap="s"
            >
              <GdsPopover>
                <GdsButton rank="secondary" slot="trigger">
                  Popover{' '}
                  <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
                </GdsButton>
                <GdsFlex padding="xl">
                  <GdsText>Popover content</GdsText>
                </GdsFlex>
              </GdsPopover>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-popover--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Popover</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <GdsDropdown>
                <GdsOption value="1">Dropdown</GdsOption>
                <GdsOption value="2">Dropdwon Item</GdsOption>
              </GdsDropdown>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-form-dropdown--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Dropdown</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <GdsFlex max-width="80%">
                <GdsInput label="Input" value=" " clearable>
                  {' '}
                  <gds-icon-credit-card slot="lead"></gds-icon-credit-card>{' '}
                </GdsInput>
              </GdsFlex>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-form-input--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Input</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <GdsFlex max-width="80%">
                <GdsTextarea label="Textarea"></GdsTextarea>
              </GdsFlex>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-form-textarea--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Textarea</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              padding="l s"
              background="primary/0.4"
              min-height="200px"
              position="relative"
              gap="s"
            >
              <GdsFlex max-width="80%">
                <GdsDatepicker></GdsDatepicker>
              </GdsFlex>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-form-datepicker--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Datepicker</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="flex-start"
              justify-content="center"
              background="primary/0"
              overflow="hidden"
              height="200px"
              position="relative"
            >
              <GdsMask
                inset="0"
                mask-image="top"
                background-color="secondary/0.96"
                position="absolute"
                z-index="4"
                pointer-events="none"
              >
                {' '}
              </GdsMask>
              <GdsCalendar></GdsCalendar>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-calendar--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Calendar</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              background="primary/0"
              overflow="hidden"
              height="200px"
              position="relative"
            >
              <GdsFlex id="target" align-items="center" gap="s">
                <gds-icon-pin></gds-icon-pin>
                <GdsText>Coachmark</GdsText>
              </GdsFlex>
              <GdsCoachmark target="target" placement="bottom">
                This is the coachmark content.
              </GdsCoachmark>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-coachmark--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Coachmark</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard border="4xs/primary" border-radius="s" overflow="hidden">
          <GdsFlex flex-direction="column">
            <GdsFlex
              align-items="center"
              justify-content="center"
              background="primary/0"
              overflow="hidden"
              height="200px"
              position="relative"
            >
              <GdsContextMenu>
                <GdsMenuItem>Action 1</GdsMenuItem>
                <GdsMenuItem>Action 2</GdsMenuItem>
                <GdsMenuItem>Action 3</GdsMenuItem>
              </GdsContextMenu>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="../?path=/docs/docs-components-context-menu--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Context Menu</GdsText>
                <gds-icon-chevron-right width="16"></gds-icon-chevron-right>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
      </GdsGrid>
    </GdsFlex>
  )
}
