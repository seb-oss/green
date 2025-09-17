// app/studio/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio — Green Design System',
  description: 'Design tokens and tools',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
