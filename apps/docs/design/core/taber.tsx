'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { GdsCard, GdsContainer, GdsFlex, GdsText } from '$/import/components'
import Link from 'core/link'

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

  return (
    <>
      <GdsFlex
        position="sticky"
        inset="70px 0 0 0"
        margin="0"
        background="secondary"
        border="0 0 4xs/secondary 0"
        height="60px"
        display="none; m{flex}"
      >
        {links.map(
          ({ path, label, isPrivate }) =>
            !isPrivate && (
              <Link
                key={path}
                href={component + path}
                selected={pathName === component + path}
                menu
              >
                {label}
              </Link>
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
    </>
  )
}
