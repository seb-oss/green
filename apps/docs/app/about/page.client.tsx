'use client'

import {
  GdsBreadcrumbs,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Link } from '../../design/atoms/link/link'
import { useContentContext } from '../../settings/content'

export function AboutClient() {
  const { actions } = useContentContext()
  const CONTENT = actions.getPage('about')

  return (
    <GdsFlex flex-direction="column" gap="2xl">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <GdsText>About</GdsText>
      </GdsBreadcrumbs>
      <GdsText tag="h1">{CONTENT?.title}</GdsText>
    </GdsFlex>
  )
}
