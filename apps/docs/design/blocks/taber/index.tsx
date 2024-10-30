'use client'

import './taber.css'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    <div className="taber">
      {links.map(
        ({ path, label, isPrivate }) =>
          !isPrivate && (
            <Link key={path} href={component + path} className={pathName === component + path ? 'active' : ''}>
              {label}
            </Link>
          )
      )}
    </div>
  )
}
