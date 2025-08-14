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

export function AboutClient() {
  const { actions } = useContentContext()
  const CONTENT = actions.getPage('about')
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
        <GdsText>About</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex flex-direction="column" gap="xl">
        <GdsFlex flex-direction="column" gap="s" text-align="center">
          <GdsText tag="h1">{CONTENT?.title}</GdsText>
          <GdsText
            tag="p"
            font="heading-m"
            color="02"
            max-width="100ch"
            margin="auto"
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
