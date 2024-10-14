'use client'
import dynamic from 'next/dynamic'

const GdsGrid = dynamic(() => import('@sebgroup/green-react/src/core/grid'), {
  ssr: false,
})

export default function ColumnBanner({
  heading,
  content,
}: {
  heading: string
  content: string
}) {
  return (
    <GdsGrid columns="2" gap="m">
      <h2>{heading}</h2>
      <p className="gds-fs-headline-small color-secondary">{content}</p>
    </GdsGrid>
  )
}
