'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GdsFlex, GdsMenuButton } from '$/import/components'

interface Link {
  path: string
  label: string
  isPrivate: boolean
}

interface TaberProps {
  component: string
  links: Link[]
}

export default function Taber({ component, links }: TaberProps) {
  const pathName = usePathname()

  return (
    <GdsFlex
      position="sticky"
      inset="70px 0 0 0"
      margin="0"
      background="secondary"
      border="0 0 4xs/secondary 0"
      height="60px"
    >
      {links.map(
        ({ path, label, isPrivate }) =>
          !isPrivate && (
            <GdsMenuButton
              key={path}
              href={component + path}
              selected={pathName === component + path}
            >
              {label}
            </GdsMenuButton>
          ),
      )}
    </GdsFlex>
  )
}
