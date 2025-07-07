'use client'

import {
  GdsBreadcrumbs,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Render } from '../../design/atoms/content/render'
import { Link } from '../../design/atoms/link/link'
import { useContentContext } from '../../settings/content'

export function A11yClient() {
  const { actions } = useContentContext()
  const CONTENT = actions.getPage('accessibility')
  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return undefined
    },
  }
  return (
    <GdsFlex flex-direction="column" gap="2xl" width="100%">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <GdsText>Accessibility</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex flex-direction="column" max-width="120ch" gap="4xl">
        <GdsFlex flex-direction="column" gap="s">
          <GdsText tag="h1">{CONTENT?.title}</GdsText>
          <GdsText
            tag="p"
            font-size="heading-m"
            color="secondary"
            max-width="100ch"
          >
            {CONTENT?.summary}
          </GdsText>
        </GdsFlex>
        {CONTENT?.sections && (
          <Render
            content={CONTENT.sections}
            slug="foundation"
            imageProvider={imageProvider}
          />
        )}
      </GdsFlex>
    </GdsFlex>
  )
}
