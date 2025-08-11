'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import {
  GdsBreadcrumbs,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Render } from '../../../design/atoms/content/render'
import { Link } from '../../../design/atoms/link/link'
import { useContentContext } from '../../../settings/content'

import './page.css'

export function TokensClient() {
  const { actions } = useContentContext()
  const CONTENT = actions.getPage('foundation/design-tokens')

  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return undefined
    },
  }

  // In your main component, replace the inspect view with:

  return (
    <GdsFlex flex-direction="column" gap="2xl">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <Link component="link" href="/foundation">
          <Core.IconBrandGreen size="m" slot="lead" />
          Foundation
        </Link>
        <GdsText>Tokens</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex
        flex-direction="column"
        justify-content="center"
        width="100%"
        gap="s"
      >
        <GdsText tag="h1" text-align="center">
          {CONTENT?.title}
        </GdsText>
        <GdsText
          tag="p"
          color="02"
          font="preamble-l"
          text-align="center"
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
  )
}
