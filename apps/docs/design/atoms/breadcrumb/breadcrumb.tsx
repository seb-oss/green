// breadcrumb.tsx
'use client'

import { usePathname } from 'next/navigation'
import { Icon } from '@/apps/docs/hooks'

import * as Core from '@sebgroup/green-core/react'

interface BreadcrumbItem {
  label: string
  href: string
  iconName?: string
}

interface BreadcrumbsProps {
  slug: string
  title: string
}

export default function Breadcrumbs({ slug, title }: BreadcrumbsProps) {
  const pathname = usePathname()
  const currentPath = pathname.split('?')[0]

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      iconName: 'IconHomeOpen',
    },
    {
      label: 'Components',
      href: '/components',
      iconName: 'IconSquareGridCircle',
    },
    {
      label: title,
      href: `/component/${slug}`,
    },
  ]

  if (currentPath === `/component/${slug}/ux-text`) {
    breadcrumbItems.push({
      label: 'UX Text',
      href: `/component/${slug}/ux-text`,
    })
  } else if (currentPath === `/component/${slug}/accessibility`) {
    breadcrumbItems.push({
      label: 'Accessibility',
      href: `/component/${slug}/accessibility`,
    })
  }

  return (
    <Core.GdsBreadcrumbs size="small">
      {breadcrumbItems.map((item) => (
        <Core.GdsLink href={item.href} key={item.href + item.label}>
          {item.iconName && <Icon name={item.iconName} slot="lead" />}
          {item.label}
        </Core.GdsLink>
      ))}
    </Core.GdsBreadcrumbs>
  )
}
