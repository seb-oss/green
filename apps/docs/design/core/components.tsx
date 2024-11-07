'use client'

import Link from 'next/link'
import { allComponents } from 'content'
import { isDev } from '$/env/env'
import {
  GdsCard,
  GdsDivider,
  GdsFlex,
  GdsGrid,
  GdsText,
} from '$/import/components'
import { IconChevronRight } from '$/import/icons'
import * as EXAMPLES from 'example/index'

type ExampleComponents = {
  [key: string]: React.ComponentType<any>
}

const examples: ExampleComponents = EXAMPLES

interface ComponentsProps {
  title: string
  tag?: string
}

export default function Components({ title, tag }: ComponentsProps) {
  const components = allComponents
    .filter((component) => {
      if (tag && !component.tags?.split(', ').includes(tag)) {
        return false
      }
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
      <GdsGrid columns="1; s{2} m{3}" gap="xl">
        {components.map((component, idx) => {
          const PATH = component.title.replace(' ', '')
          const Preview = examples[PATH]
          return (
            <GdsCard
              key={idx}
              border="4xs/primary"
              border-radius="s"
              overflow="hidden"
              padding="0"
            >
              <GdsFlex flex-direction="column">
                {component.title === 'Calendar' ? (
                  <GdsFlex
                    align-items="flex-start"
                    justify-content="center"
                    padding="0"
                    background="secondary"
                  >
                    {Preview ? <Preview /> : null}
                  </GdsFlex>
                ) : component.title === 'Calendar' ||
                  component.title === 'Image' ||
                  component.title === 'Mask' ||
                  component.title === 'Spacer' ||
                  component.title === 'Video' ? (
                  Preview ? (
                    <Preview />
                  ) : null
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
