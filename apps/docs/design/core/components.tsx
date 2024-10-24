'use client'

import Link from 'next/link'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import Badge from 'example/badge'
import Button from 'example/button'
import Calendar from 'example/calendar'
import Coachmark from 'example/coachmark'
import ContextMenu from 'example/context-menu'
import Datepicker from 'example/datepicker'
import Dropdown from 'example/dropdown'
import FAB from 'example/fab'
import FilterChips from 'example/filter-chips'
import Icon from 'example/icon'
import Input from 'example/input'
import MenuButton from 'example/menu-button'
import Popover from 'example/popover'
import SegmentedControl from 'example/segmented-control'
import Textarea from 'example/textarea'

import { GdsCard } from '@sebgroup/green-react/core/card'
import { GdsDivider } from '@sebgroup/green-react/core/divider'
import { GdsFlex } from '@sebgroup/green-react/core/flex'
import { GdsGrid } from '@sebgroup/green-react/core/grid'
import { GdsText } from '@sebgroup/green-react/core/text'
import { IconChevronRight } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronRight'

const EXAMPLE: { [key: string]: React.ComponentType<any> } = {
  Badge: Badge,
  Button: Button,
  FAB: FAB,
  'Filter Chips': FilterChips,
  Icon: Icon,
  'Menu Button': MenuButton,
  'Segmented Control': SegmentedControl,
  Popover: Popover,
  Dropdown: Dropdown,
  Input: Input,
  Textarea: Textarea,
  Datepicker: Datepicker,
  Calendar: Calendar,
  Coachmark: Coachmark,
  'Context Menu': ContextMenu,
}

export default function Components({ title }: { title: string }) {
  const components = allComponents
    .filter((component) => {
      if (component._raw.sourceFileName !== 'index.mdx') {
        return false
      }
      if (component.private && !isDev) {
        return true
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <GdsFlex gap="m" flex-direction="column">
      {title && <GdsText tag="h2">{title}</GdsText>}
      <GdsGrid columns="2; m{1} l{3}" gap="xl">
        {components.map((component, idx) => {
          const Preview = EXAMPLE[component.title]
          return (
            <GdsCard
              key={idx}
              border="4xs/primary"
              border-radius="s"
              overflow="hidden"
            >
              <GdsFlex flex-direction="column">
                {component.title === 'Calendar' ? (
                  <GdsFlex
                    align-items="flex-start"
                    justify-content="center"
                    padding="0"
                  >
                    {Preview ? <Preview /> : null}
                  </GdsFlex>
                ) : (
                  <GdsFlex
                    align-items="center"
                    justify-content="center"
                    padding="l s"
                    background="primary/0.4"
                    min-height="200px"
                    position="relative"
                  >
                    <GdsFlex
                      max-width="200px"
                      align-items="center"
                      justify-content="center"
                      gap="xl"
                    >
                      {Preview ? <Preview /> : null}
                    </GdsFlex>
                  </GdsFlex>
                )}
                <GdsDivider padding="s" opacity="0.2"></GdsDivider>
                <GdsFlex
                  z-index="18"
                  background="secondary; hover:primary"
                  min-width="100%"
                >
                  <Link href={component.url_path} style={{ minWidth: '100%' }}>
                    <GdsFlex
                      padding="s"
                      justify-content="space-between"
                      align-items="center"
                      min-width="100%"
                    >
                      <GdsText tag="h5">{component.title}</GdsText>
                      <IconChevronRight width="16"></IconChevronRight>
                    </GdsFlex>
                  </Link>
                </GdsFlex>
              </GdsFlex>
            </GdsCard>
          )
        })}
      </GdsGrid>
    </GdsFlex>
  )
}
