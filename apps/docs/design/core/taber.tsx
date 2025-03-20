'use client'

import React from 'react'
import { Link, useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import {
  GdsCard,
  GdsDiv,
  GdsFlex,
  GdsMenuButton,
  GdsText,
} from '$/import/components'
import { IconSquareArrowTopRight } from '$/import/icons'

import { Accordion, AccordionItem } from './accordion'

interface LinkInterface {
  path: string
  label: string
  isPrivate: boolean
}

interface TaberProps {
  component: string
  links: LinkInterface[]
}

export default function Taber({ component, links }: TaberProps) {
  const pathName = usePathname()
  const router = useTransitionRouter()
  return (
    <GdsCard
      padding="0"
      overflow="hidden"
      position="sticky"
      inset="70px 0 0 0"
      z-index="999"
      margin="0"
      border-radius="xs"
      border="0"
      variant="primary"
    >
      <GdsFlex
        justify-content="space-between"
        align-items="center"
        width="100%"
        padding="0"
        display="none; m{flex}"
      >
        <GdsFlex height="100%" gap="0">
          {links.map(
            ({ path, label, isPrivate }) =>
              !isPrivate && (
                <GdsMenuButton
                  key={path}
                  onClick={() => {
                    router.push(component + path)
                  }}
                  selected={pathName === component + path}
                >
                  {label}
                </GdsMenuButton>
              ),
          )}
        </GdsFlex>

        <Link
          href={
            'https://storybook.seb.io/latest/core/?path=/docs/components-' +
            component.replace(/\/component\//g, '') +
            '--docs'
          }
          target="_blank"
        >
          <GdsFlex
            margin="0 0 0 auto"
            align-items="center"
            gap="s"
            padding="m l"
          >
            <GdsFlex align-items="center" gap="3xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FF4785"
                  fillRule="evenodd"
                  stroke="none"
                  d="m17.1429 2.11328-.0839 2.33686c-.0018.03473.0115.06888.0377.09658.0622.06578.1791.07866.261.02875l1.0933-.66567.9234.58388c.0347.02188.0778.0332.1219.03198.1028-.00288.1832-.07212.1796-.15465l-.0655-2.1627c.2203.17028.3689.43099.3876.73073.0013.02081.002.04166.002.06252V20.9314c0 .5535-.4487 1.0022-1.0023 1.0022-.015 0-.0299-.0003-.045-.001l-13.37789-.6008c-.52101-.0234-.93701-.4425-.95657-.9637L4.00072 3.91386c-.0204-.54342.39628-1.00396.93902-1.03788l12.20316-.7627Zm-3.1466 7.59326c0 .38996 3.2724.20304 3.7118-.07086 0-2.65534-1.7752-4.05068-5.0258-4.05068-3.25064 0-5.07189 1.41705-5.07189 3.54263 0 2.12927 2.05918 3.05727 3.80879 3.84577 1.2922.5823 2.4157 1.0886 2.4157 1.9464 0 .5668-.3458.9034-1.1065.9034-.9913 0-1.3833-.4063-1.3372-1.788 0-.2997-3.7808-.3931-3.89607 0-.29352 3.3482 2.30539 4.3139 5.27937 4.3139 2.8817 0 5.1409-1.2328 5.1409-3.4647 0-2.3285-2.1755-3.254-3.9732-4.0186-1.2654-.5382-2.3435-.99676-2.3435-1.80903 0-.79708.7377-.90336 1.1758-.90336.461 0 1.291.06522 1.2218 1.55313Z"
                  clipRule="evenodd"
                />
              </svg>
              API Docs
            </GdsFlex>
            <IconSquareArrowTopRight height={16} />
          </GdsFlex>
        </Link>
      </GdsFlex>
      <GdsDiv display="block; m{none}" border="0 0 4xs/primary 0" padding="0 m">
        <Accordion>
          <AccordionItem label="Navigation" labelElementLevel={3}>
            <GdsFlex flex-direction="column" gap="m" padding="0 0 xl 0">
              {links.map(
                ({ path, label, isPrivate }) =>
                  !isPrivate && (
                    <Link key={path} href={component + path}>
                      {label}
                    </Link>
                  ),
              )}
            </GdsFlex>
          </AccordionItem>
        </Accordion>
      </GdsDiv>
    </GdsCard>
  )
}
