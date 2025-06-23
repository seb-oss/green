'use client'

import { usePathname } from 'next/navigation'

import { GdsCard } from '@sebgroup/green-core/react'
import { Link } from '../../design/atoms/link/link'

export function SettingsNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/settings', label: 'Settings' },
    { href: '/settings/consent', label: 'Consent' },
    { href: '/settings/desktop', label: 'Desktop' },
    { href: '/settings/shortcuts', label: 'Shortcuts' },
  ]

  return (
    <GdsCard padding="0" flex-direction="row" gap="0" overflow="hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          component="menu"
          href={item.href}
          selected={pathname === item.href}
        >
          {item.label}
        </Link>
      ))}
    </GdsCard>
  )
}
