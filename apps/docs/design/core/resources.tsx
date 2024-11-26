'use client'

import Link from 'next/link'
import {
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsText,
} from '$/import/components'
import { IconChevronRight } from '$/import/icons'

function Chevron() {
  return (
    <GdsButton rank="secondary">
      <IconChevronRight />
    </GdsButton>
  )
}

type Resource = {
  href: string
  target: string
  caption: string
  text: string
}

const resources: Resource[] = [
  {
    href: 'https://github.com/seb-oss/green',
    target: '_blank',
    caption: 'Github',
    text: 'Start contributing now!',
  },
  {
    href: 'https://brand.seb.se/point/en/seb/',
    target: '_blank',
    caption: 'Media Bank & Brand Guidelines',
    text: 'SEB Brand Hub',
  },
]

export default function Resources({ title }: { title: string }): JSX.Element {
  return (
    <GdsFlex flex-direction="column">
      {title && <h2>{title}</h2>}
      <GdsGrid columns="1; m{3}" gap="m">
        {resources.map((resource, index) => (
          <Link href={resource.href} key={index} target={resource.target}>
            <GdsCard variant="primary" padding="m l">
              <GdsFlex
                justify-cotnent="space-between"
                align-items="center"
                width="100%"
              >
                <GdsFlex flex-direction="column" flex="1">
                  <GdsText font-size="body-s">{resource.caption}</GdsText>
                  <GdsText font-size="body-l">{resource.text}</GdsText>
                </GdsFlex>
                <Chevron />
              </GdsFlex>
            </GdsCard>
          </Link>
        ))}
      </GdsGrid>
    </GdsFlex>
  )
}
