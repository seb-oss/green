'use client'
import dynamic from 'next/dynamic'
const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GdsFlex flex-direction="column" gap="6xl">
      {children}
    </GdsFlex>
  )
}
