// app/studio/[...slug]/page.tsx
import { Metadata } from 'next'

import StudioClient from './page.client'

interface Props {
  params: { slug: string[] }
}

export async function generateStaticParams() {
  // Fetch icons list for generating icon detail paths
  const response = await fetch(
    'https://api.seb.io/components/icon/icon.list.json',
  )
  const icons = await response.json()

  // Define valid tools
  const validTools = [
    'colors',
    'typography',
    'spacing',
    'radius',
    'shadows',
    'icons',
    'grid',
    'compose',
  ]

  const toolPaths = validTools.map((tool) => ({
    slug: [tool],
  }))

  const iconPaths = Object.keys(icons).map((iconId) => ({
    slug: ['icons', iconId],
  }))

  const migrationPath = {
    slug: ['icons', 'migration'],
  }

  // Combine all paths
  return [...toolPaths, ...iconPaths, migrationPath]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [tool, icon] = params.slug
  const title = tool.charAt(0).toUpperCase() + tool.slice(1)

  return {
    title: icon
      ? `${icon} Icon - Studio - Green Design System`
      : `${title} - Studio - Green Design System`,
    description: `Design System ${title} tokens and configuration`,
  }
}

export default function StudioPage({ params }: Props) {
  const [tool, icon] = params.slug
  return <StudioClient tool={tool} selectedIcon={icon} />
}
