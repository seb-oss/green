// app/studio/[tool]/layout.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const validTools = [
  'colors',
  'typography',
  'spacing',
  'icons',
  'grid',
  'compose',
]

interface Props {
  params: { tool: string }
  children: React.ReactNode
}

export async function generateStaticParams() {
  return validTools.map((tool) => ({
    tool,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!validTools.includes(params.tool)) {
    notFound()
  }

  const title = params.tool.charAt(0).toUpperCase() + params.tool.slice(1)

  return {
    title: `${title} — Studio — Green Design System`,
    description: `Design System ${title} tokens and configuration`,
  }
}

export default function ToolLayout({ children }: Props) {
  return children
}
