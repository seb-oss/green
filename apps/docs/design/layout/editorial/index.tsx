'use client'

import {
  GdsBreadcrumb,
  GdsBreadcrumbs,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content'
import { Render } from '../../atoms/content/render'
import { Link } from '../../atoms/link/link'

export function LayoutEditorial(props: {
  slug: string
  children?: React.ReactNode
}) {
  const { actions } = useContentContext()
  const CONTENT = actions.getPage(props.slug)
  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return undefined
    },
  }

  return (
    <GdsFlex flex-direction="column" gap="2xl" width="100%">
      <GdsBreadcrumbs size="small">
        <Link component="breadcrumb" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <GdsBreadcrumb>{CONTENT?.title}</GdsBreadcrumb>
      </GdsBreadcrumbs>
      <GdsFlex flex-direction="column" gap="xl">
        <GdsFlex flex-direction="column" gap="s" text-align="center">
          <GdsText tag="h1">{CONTENT?.title}</GdsText>
          <GdsText
            tag="p"
            font="heading-xs; s{heading-m}"
            color="neutral-02"
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
        {props.children}
      </GdsFlex>
    </GdsFlex>
  )
}
