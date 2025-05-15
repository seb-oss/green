// app/component/[slug]/icon/icon.service.ts
import { cache } from 'react'

export interface IconDetails {
  id: string
  displayName: string
  variants: {
    regular: string
    solid: string
  }
  meta: {
    categories: string[]
    tags: string[]
  }
}

export interface IconsResponse {
  [key: string]: IconDetails
}

export const getIcons = cache(async () => {
  const response = await fetch(
    'https://api.seb.io/components/icon/icon.list.json',
    {
      next: { revalidate: 3600 },
    },
  )
  if (!response.ok) throw new Error('Failed to fetch icons')
  return response.json() as Promise<IconsResponse>
})
