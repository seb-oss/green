// breadcrumb.tsx
'use client'

import { useMemo } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { Link } from '../link/link'

interface BreadcrumbItem {
  label: string
  href?: string
  iconName?: string
}

interface BreadcrumbsProps {
  slug: string
  title: string
  section: 'overview' | 'ux-text' | 'accessibility' | 'code' | 'faq'
}

const BreadcrumbLink = ({ item }: { item: BreadcrumbItem }) => (
  <Link href={item.href!}>
    {item.iconName && <Icon size="m" name={item.iconName} slot="lead" />}
    {item.label}
  </Link>
)

const LastItem = ({
  section,
}: {
  section: 'overview' | 'ux-text' | 'accessibility' | 'code' | 'faq'
}) => {
  if (section === 'overview') return null

  const sectionText = {
    'ux-text': 'UX text',
    accessibility: 'Accessibility',
    code: 'Code',
    faq: 'FAQ',
    overview: null,
  }[section]

  return <Core.GdsText color="secondary">{sectionText}</Core.GdsText>
}

export default function Breadcrumbs({
  slug,
  title,
  section,
}: BreadcrumbsProps) {
  const breadcrumbItems = useMemo(
    () => [
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
    ],
    [slug, title],
  )

  return (
    <Core.GdsBreadcrumbs size="small">
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbLink key={`breadcrumb-${index}`} item={item} />
      ))}
      <LastItem section={section} />
    </Core.GdsBreadcrumbs>
  )
}
