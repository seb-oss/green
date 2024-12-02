'use client'

import React from 'react'
import { Link, useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import {
  GdsCard,
  GdsContainer,
  GdsFlex,
  GdsMenuButton,
  GdsText,
} from '$/import/components'

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
      inset="60px 0 0 0"
      z-index="999"
      margin="0"
      height="60px"
      display="none; m{flex}"
      border-radius="xs"
      border="0"
    >
      <GdsFlex>
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
              //  {/*
              //   <Link
              //   key={path}
              //   href={component + path}
              //   selected={pathName === component + path}
              //   menu
              // >
              // // {label}
              // </Link> */}
            ),
        )}
      </GdsFlex>
      <GdsContainer display="block; m{none}" border="0 0 4xs/primary 0">
        <Accordion>
          <AccordionItem label="Navigation" labelElementLevel={3}>
            <GdsFlex flex-direction="column" gap="m" padding="0 0 xl 0">
              {links.map(
                ({ path, label, isPrivate }) =>
                  !isPrivate && (
                    <Link
                      key={path}
                      href={component + path}
                      selected={pathName === component + path}
                    >
                      {label}
                    </Link>
                  ),
              )}
            </GdsFlex>
          </AccordionItem>
        </Accordion>
      </GdsContainer>
    </GdsCard>
  )
}
