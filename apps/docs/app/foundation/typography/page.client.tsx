'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../design/atoms/link/link'
import Playground from '../../../design/atoms/playgroud/playground'

export function TypographyClient() {
  const [textConfig, setTextConfig] = useState({
    tag: 'p',
    fontSize: 'body-m',
    fontWeight: 'regular',
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
    // Body sizes
    { value: 'body-l', label: 'Body L (20px)' },
    { value: 'body-m', label: 'Body M (16px)' },
    { value: 'body-s', label: 'Body S (14px)' },
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
        value={textConfig.fontSize}
        onchange={(e: any) =>
          setTextConfig({ ...textConfig, fontSize: e.detail.value })
        }
      >
        {sizeOptions.map((option) => (
          <Core.GdsOption key={option.value} value={option.value}>
            {option.label}
          </Core.GdsOption>
        ))}
      </Core.GdsDropdown>

      <Core.GdsDropdown
        plain
        size="small"
        value={textConfig.fontWeight}
        onchange={(e: any) =>
          setTextConfig({ ...textConfig, fontWeight: e.detail.value })
        }
      >
        {weightOptions.map((option) => (
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
      <Core.GdsText
        tag={textConfig.tag}
        font-size={textConfig.fontSize}
        font-weight={textConfig.fontWeight}
        lines={textConfig.lines}
      >
        {sampleText}
      </Core.GdsText>
    </Core.GdsFlex>
  )

  const inspectContent = (
    <Core.GdsFlex flex-direction="column" gap="m" padding="xl">
      <Core.GdsCard variant="secondary" padding="l">
        <Core.GdsFlex flex-direction="column" gap="m">
          <Core.GdsText tag="h3">Typography Tokens</Core.GdsText>
          <Core.GdsText color="secondary">
            Font Size: {textConfig.fontSize}
          </Core.GdsText>
          <Core.GdsText color="secondary">
            Font Weight: {textConfig.fontWeight}
          </Core.GdsText>
          <Core.GdsText color="secondary">
            Line Height: var(--gds-sys-text-line-height-{textConfig.fontSize})
          </Core.GdsText>

          <Core.GdsInput
            plain
            value={`<Core.GdsText
  tag="${textConfig.tag}"
  font-size="${textConfig.fontSize}"
  font-weight="${textConfig.fontWeight}"
>
  ${sampleText}
</Core.GdsText>`}
          />
          <Core.GdsButton
            rank="tertiary"
            onClick={() =>
              navigator.clipboard.writeText(
                `<Core.GdsText tag="${textConfig.tag}" font-size="${textConfig.fontSize}" font-weight="${textConfig.fontWeight}">${sampleText}</Core.GdsText>`,
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

  return (
    <Core.GdsFlex flex-direction="column" gap="xl">
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

      <Playground
        toolbar={toolbarContent}
        previewContent={previewContent}
        inspectContent={inspectContent}
      />
    </Core.GdsFlex>
  )
}
