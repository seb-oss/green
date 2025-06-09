'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

// Class names
export const _ = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ')

export const InternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const router = useRouter()
  e.preventDefault()
  const href = e.currentTarget.href
  router.push(href)
}

export const Icon = ({
  name,
  size,
  slot,
}: {
  name: string
  size?: string
  slot?: string
}) => {
  const IconComponent = (Core as Record<string, any>)[name]
  if (!IconComponent) {
    console.warn(`Icon ${name} not found`)
    return null
  }
  return <IconComponent slot={slot} size={size} />
}
