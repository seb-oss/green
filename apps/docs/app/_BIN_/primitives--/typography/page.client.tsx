'use client'

import { useState } from 'react'
import { LayoutEditorial } from 'apps/docs/design/layout'

import * as Core from '@sebgroup/green-core/react'
import TypographyTokens from '../../../../../libs/tokens/src/tokens/2023/tokens.typography.json'
import { Render } from '../../../design/atoms/content/render'
import { Link } from '../../../design/atoms/link/link'
import Playground from '../../../design/atoms/playgroud/playground'
import { useContentContext } from '../../../settings/content'

function RenderTypographyTokens() {
  return <Core.GdsCard flex-direction="column" gap="m"></Core.GdsCard>
}

function TypographyContent() {
  const [textConfig, setTextConfig] = useState({
    tag: 'h1',
    font: 'display-2xl',
    lines: undefined as number | undefined,
  })

  const sampleText = 'The quick brown fox jumps over the lazy dog'

  // Dropdown options
  const tagOptions = [
    { value: 'p', label: 'Paragraph' },
    { value: 'h1', label: 'H1' },
    { value: 'h2', label: 'H2' },
    { value: 'h3', label: 'H3' },
    { value: 'h4', label: 'H4' },
    { value: 'h5', label: 'H5' },
    { value: 'h6', label: 'H6' },
    { value: 'span', label: 'Span' },
  ]

  const sizeOptions = [
    // Display sizes
    { value: 'display-2xl', label: 'Display 2XL (82px)' },
    { value: 'display-xl', label: 'Display XL (64px)' },
    { value: 'display-l', label: 'Display L (48px)' },
    { value: 'display-m', label: 'Display M (36px)' },
    { value: 'display-s', label: 'Display S (32px)' },
    // Heading sizes
    { value: 'heading-xl', label: 'Heading XL (32px)' },
    { value: 'heading-l', label: 'Heading L (28px)' },
    { value: 'heading-m', label: 'Heading M (24px)' },
    { value: 'heading-s', label: 'Heading S (20px)' },
    { value: 'heading-xs', label: 'Heading XS (16px)' },
    // Preamble sizes
    { value: 'preamble-2xl', label: 'Preamble 2XL (32px)' },
    { value: 'preamble-xl', label: 'Preamble XL (28px)' },
    { value: 'preamble-l', label: 'Preamble L (24px)' },
    { value: 'preamble-m', label: 'Preamble M (20px)' },
    { value: 'preamble-s', label: 'Preamble S (18px)' },
    { value: 'preamble-xs', label: 'Preamble XS (16px)' },
    // Detail sizes
    { value: 'detail-regular-m', label: 'Detail Regular M (16px)' },
    { value: 'detail-regular-s', label: 'Detail Regular S (14px)' },
    { value: 'detail-regular-xs', label: 'Detail Regular XS (12px)' },
    { value: 'detail-book-m', label: 'Detail Book M (16px)' },
    { value: 'detail-book-s', label: 'Detail Book S (14px)' },
    { value: 'detail-book-xs', label: 'Detail Book XS (12px)' },
    // Body sizes
    { value: 'body-regular-l', label: 'Body Regular L (20px)' },
    { value: 'body-regular-m', label: 'Body Regular M (16px)' },
    { value: 'body-regular-s', label: 'Body Regular S (14px)' },
    { value: 'body-book-l', label: 'Body Book L (20px)' },
    { value: 'body-book-m', label: 'Body Book M (16px)' },
    { value: 'body-book-s', label: 'Body Book S (14px)' },
  ]

  const weightOptions = [
    { value: 'light', label: 'Light (300)' },
    { value: 'regular', label: 'Regular (400)' },
    { value: 'book', label: 'Book (450)' },
    { value: 'medium', label: 'Medium (500)' },
    { value: 'bold', label: 'Bold (700)' },
  ]

  const toolbarContent = (
    <Core.GdsFlex gap="s">
      <Core.GdsDropdown
        plain
        size="small"
        value={textConfig.tag}
        onchange={(e: any) =>
          setTextConfig({ ...textConfig, tag: e.detail.value })
        }
      >
        {tagOptions.map((option) => (
          <Core.GdsOption key={option.value} value={option.value}>
            {option.label}
          </Core.GdsOption>
        ))}
      </Core.GdsDropdown>

      <Core.GdsDropdown
        label="Size"
        plain
        size="small"
        value={textConfig.font}
        onchange={(e: any) =>
          setTextConfig({ ...textConfig, font: e.detail.value })
        }
      >
        {sizeOptions.map((option) => (
          <Core.GdsOption key={option.value} value={option.value}>
            {option.label}
          </Core.GdsOption>
        ))}
      </Core.GdsDropdown>
    </Core.GdsFlex>
  )

  const previewContent = (
    <Core.GdsFlex
      flex-direction="column"
      gap="xl"
      align-items="center"
      justify-content="center"
      width="100%"
      padding="xl"
    >
      <Core.GdsText tag={textConfig.tag} font={textConfig.font}>
        {sampleText}
      </Core.GdsText>
    </Core.GdsFlex>
  )

  const inspectContent = (
    <Core.GdsFlex flex-direction="column" gap="m" padding="xl">
      <Core.GdsCard variant="secondary" padding="l">
        <Core.GdsFlex flex-direction="column" gap="m">
          <Core.GdsText tag="h3">Typography Tokens</Core.GdsText>
          <Core.GdsText color="secondary">Font: {textConfig.font}</Core.GdsText>
          <Core.GdsInput
            plain
            value={`<gds-text
  tag="${textConfig.tag}"
  font="${textConfig.font}"
>
  ${sampleText}
</gds-text>`}
          />
          <Core.GdsButton
            rank="tertiary"
            onClick={() =>
              navigator.clipboard.writeText(
                `<Core.GdsText tag="${textConfig.tag}" font="${textConfig.font}">${sampleText}</Core.GdsText>`,
              )
            }
          >
            <Core.IconCopy />
            Copy Code
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsCard>
    </Core.GdsFlex>
  )

  const { actions } = useContentContext()
  const CONTENT = actions.getPage('foundation/typography')

  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return undefined
    },
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl">
      <Core.GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <Core.IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <Link component="link" href="/foundation">
          <Core.IconBrandGreen size="m" slot="lead" />
          Foundation
        </Link>
        <Core.GdsText>Typography</Core.GdsText>
      </Core.GdsBreadcrumbs>
      <Core.GdsFlex
        flex-direction="column"
        justify-content="center"
        width="100%"
        gap="s"
      >
        <Core.GdsText tag="h1" text-align="center">
          {CONTENT?.title}
        </Core.GdsText>
        <Core.GdsText
          tag="p"
          color="02"
          font="preamble-l"
          text-align="center"
          max-width="100ch"
          margin="auto"
        >
          {CONTENT?.summary}
        </Core.GdsText>
      </Core.GdsFlex>
      <Playground
        toolbar={toolbarContent}
        previewContent={previewContent}
        inspectContent={inspectContent}
        height="500px"
      />
      {CONTENT?.sections && (
        <Render
          content={CONTENT.sections}
          slug="foundation"
          imageProvider={imageProvider}
        />
      )}
    </Core.GdsFlex>
  )
}

export function TypographyClient() {
  return (
    <LayoutEditorial slug="primitives/typography">
      <TypographyContent />
    </LayoutEditorial>
  )
}
