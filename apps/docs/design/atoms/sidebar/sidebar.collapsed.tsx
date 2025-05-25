'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { internalLink } from '../../../hooks'
import { Link } from '../link/link'

interface NavItem {
  title: string
  slug: string
  icon: string
}

interface NavigationResponse {
  title: string
  slug: string
  links: NavItem[]
}

const DynamicIcon = ({ iconName }: { iconName: string }) => {
  const IconComponent = (Core as Record<string, any>)[iconName]
  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found`)
    return null
  }
  return <IconComponent />
}

export default function SidebarCollapsed() {
  const [navigationItems, setNavigationItems] = useState<NavItem[]>([])

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch('https://api.seb.io/navigation/main.json')
        const data: NavigationResponse = await response.json()
        setNavigationItems(data.links)
      } catch (error) {
        console.error('Error fetching navigation:', error)
      }
    }

    fetchNavigation()
  }, [])

  return navigationItems.map((item) => (
    <Link
      component="button"
      key={item.slug}
      onClick={internalLink}
      href={item.slug}
      rank="tertiary"
      size="small"
      width="max-content"
    >
      <DynamicIcon iconName={item.icon} />
    </Link>
  ))
}
