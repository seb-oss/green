'use client'

import { allComponents } from 'content'
import Link from 'next/link'

import GdsBadge from '@sebgroup/green-react/src/core/badge'
import GdsButton from '@sebgroup/green-react/src/core/button'
import GdsCalendar from '@sebgroup/green-react/src/core/calendar'
import GdsCoachmark from '@sebgroup/green-react/src/core/coachmark'
import GdsContextMenu from '@sebgroup/green-react/src/core/context-menu'
import GdsDatepicker from '@sebgroup/green-react/src/core/datepicker'
import GdsDropdown from '@sebgroup/green-react/src/core/dropdown'
import GdsDivider from '@sebgroup/green-react/src/core/divider'
import GdsFilterChips from '@sebgroup/green-react/src/core/filter-chips'
import GdsInput from '@sebgroup/green-react/src/core/input'
import GdsMenuButton from '@sebgroup/green-react/src/core/menu-button'
import GdsMenuItem from '@sebgroup/green-react/src/core/menu-item'
import GdsMask from '@sebgroup/green-react/src/core/mask'
import GdsPopover from '@sebgroup/green-react/src/core/popover'
import GdsSegmentedControl from '@sebgroup/green-react/src/core/segmented-control'
import GdsTextarea from '@sebgroup/green-react/src/core/textarea'
import GdsFab from '@sebgroup/green-react/src/core/fab'
import GdsText from '@sebgroup/green-react/src/core/text'
import GdsFilterChip from '@sebgroup/green-react/src/core/filter-chip'
import GdsCard from '@sebgroup/green-react/src/core/card'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsOption from '@sebgroup/green-react/src/core/option'
import GdsGrid from '@sebgroup/green-react/src/core/grid'
import GdsSegment from '@sebgroup/green-react/src/core/segment'
import GdsSignal from '@sebgroup/green-react/src/core/signal'

import { IconCreditCard } from '@sebgroup/green-react/src/lib/icon/icons/IconCreditCard'
import { IconRocket } from '@sebgroup/green-react/src/lib/icon/icons/IconRocket'
import { IconMagnifyingGlass } from '@sebgroup/green-react/src/lib/icon/icons/IconMagnifyingGlass'
import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'
import { IconChevronRight } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronRight'
import { IconPlusSmall } from '@sebgroup/green-react/src/lib/icon/icons/IconPlusSmall'
import { IconPin } from '@sebgroup/green-react/src/lib/icon/icons/IconPin'

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
      <GdsGrid columns="2; m{1} l{3}" gap="xl">
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
                999 <IconPlusSmall slot="trail"></IconPlusSmall>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconCreditCard slot="lead"></IconCreditCard>
                Primary
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconChevronRight width="16"></IconChevronRight>
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
              <IconRocket width="42" height="42"></IconRocket>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="?path=/docs/docs-components-icon--docs">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Icon</GdsText>
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconMagnifyingGlass slot="lead"></IconMagnifyingGlass>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                  Popover
                  <IconChevronBottom slot="trail"></IconChevronBottom>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                  <IconCreditCard slot="lead"></IconCreditCard>{' '}
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconChevronRight width="16"></IconChevronRight>
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
              />
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
                <IconChevronRight width="16"></IconChevronRight>
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
                <IconPin></IconPin>
                <GdsText>Coachmark</GdsText>
              </GdsFlex>
              <GdsCoachmark target="target" placement="bottom">
                This is the coachmark content.
              </GdsCoachmark>
            </GdsFlex>
            <GdsDivider padding="s" opacity="0.2"></GdsDivider>
            <Link href="/">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Coachmark</GdsText>
                <IconChevronRight width="16"></IconChevronRight>
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
            <Link href="/">
              <GdsFlex
                padding="s"
                justify-content="space-between"
                align-items="center"
              >
                <GdsText tag="h5">Context Menu</GdsText>
                <IconChevronRight width="16"></IconChevronRight>
              </GdsFlex>
            </Link>
          </GdsFlex>
        </GdsCard>
      </GdsGrid>
    </GdsFlex>
  )
}
