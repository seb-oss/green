import * as Core from '@sebgroup/green-core/react'

export default function StudioMeta({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Core.GdsFlex flex-direction="column" gap="0">
      <Core.GdsText tag="h1">{title}</Core.GdsText>
      <Core.GdsText font="heading-s" font-weight="book" color="neutral-02">
        {description}
      </Core.GdsText>
    </Core.GdsFlex>
  )
}
