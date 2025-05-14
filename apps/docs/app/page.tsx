import type { Metadata } from 'next'

import * as Core from '@sebgroup/green-core/react'

interface HomeContent {
  title: string
  summary: string
}

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io'),
  title: 'Green Design System',
  description:
    'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'vhAE3wh75Jg9hnVBtCn30CPNnXyzEw-JAcS9Q1LwewY',
  },
}

async function getHomeContent(): Promise<HomeContent | undefined> {
  try {
    const response = await fetch('https://api.seb.io/home.json')

    if (!response.ok) {
      throw new Error('Failed to fetch home content')
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching home content:', error)
    return undefined
  }
}

export default async function Home() {
  const content = await getHomeContent()

  return (
    <Core.GdsFlex flex-direction="column" gap="l; s{2xl}">
      <Core.GdsText tag="h1" font-size="display-s; m{display-m}">
        {content?.title}
      </Core.GdsText>
      {content?.summary && (
        <Core.GdsText
          font-size="heading-s; m{heading-m} l{heading-m}"
          color="secondary"
          max-width="600px"
        >
          {content.summary}
        </Core.GdsText>
      )}
    </Core.GdsFlex>
  )
}
