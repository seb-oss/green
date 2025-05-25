// breadcrumb.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { Link } from '../link/link'

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

  return (
    <Core.GdsBreadcrumbs size="small" key="breadcrumb">
      {breadcrumbItems.map((item) => (
        <Link href={item.href} key={item.href + item.label}>
          {item.iconName && <Icon size="s" name={item.iconName} slot="lead" />}
          {item.label}
        </Link>
      ))}
    </Core.GdsBreadcrumbs>
  )
}
