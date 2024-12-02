'use client'

import { Link } from 'next-view-transitions'
import { allComponents } from 'content'
import {
  GdsBadge,
  GdsDivider,
  GdsFlex,
  GdsGrid,
  GdsText,
} from '$/import/components'
import { format, parseISO } from 'date-fns'

export default function Status() {
  return (
    <GdsFlex flex-direction="column" gap="xl" max-width="80ch">
      <GdsGrid columns="3" gap="xl">
        <GdsText tag="h4">Component</GdsText>
        <GdsText tag="h4">Status</GdsText>
        <GdsText tag="h4">Last update</GdsText>
      </GdsGrid>
      <GdsDivider opacity="0.2" />
      {allComponents
        .filter((component) => component._raw.sourceFileName === 'index.mdx')
        .map((component, index) => (
          <GdsGrid columns="3" gap="xl" key={`key-${index}`}>
            <Link href={component.url_path} title="Component">
              {component.title}
            </Link>
            {component.status ? (
              <GdsBadge variant="notice">{component.status}</GdsBadge>
            ) : (
              <div></div>
            )}
            <GdsText font-size="body-s" color="secondary">
              <time dateTime={component.date}>
                {component.date &&
                  format(parseISO(component.date), 'LLLL d, yyyy')}
              </time>
            </GdsText>
          </GdsGrid>
        ))}
    </GdsFlex>
  )
}
