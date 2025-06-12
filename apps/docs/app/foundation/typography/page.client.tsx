'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import {
  GdsBreadcrumbs,
  GdsCard,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Link } from '../../../design/atoms/link/link'
import Playground from '../../../design/atoms/playgroud/playground'

type ColorOption = {
  name: string
  variants: {
    button: 'neutral' | 'positive' | 'negative'
    badge: 'information' | 'notice' | 'positive' | 'warning' | 'negative'
    card:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'positive'
      | 'negative'
      | 'notice'
      | 'warning'
      | 'information'
  }
}

// Then update the colorOptions array with the type
const colorOptions: ColorOption[] = [
  {
    name: 'default',
    variants: {
      button: 'neutral',
      badge: 'information',
      card: 'primary',
    },
  },
  {
    name: 'positive',
    variants: {
      button: 'positive',
      badge: 'positive',
      card: 'positive',
    },
  },
  {
    name: 'negative',
    variants: {
      button: 'negative',
      badge: 'negative',
      card: 'negative',
    },
  },
  {
    name: 'notice',
    variants: {
      button: 'neutral',
      badge: 'notice',
      card: 'notice',
    },
  },
  {
    name: 'warning',
    variants: {
      button: 'neutral',
      badge: 'warning',
      card: 'warning',
    },
  },
]

export function ColorsClient() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0])

  const toolbarContent = (
    <Core.GdsFlex gap="s">
      <Core.GdsButton rank="tertiary">Size</Core.GdsButton>
    </Core.GdsFlex>
  )

  // Preview content
  const previewContent = (
    <Core.GdsFlex
      align-items="center"
      flex-wrap="wrap"
      width="40%"
      gap="xl"
      position="relative"
    >
      <Core.GdsText tag="h1">H1 </Core.GdsText>
    </Core.GdsFlex>
  )

  const inspectContent = <InspectView selectedColor={selectedColor} />

  function InspectView({ selectedColor }: { selectedColor: ColorOption }) {
    const components = [
      {
        name: 'Badge',
        component: (
          <Core.GdsBadge variant={selectedColor.variants.badge}>
            <Core.IconCircleInfo slot="lead" />
            Badge
          </Core.GdsBadge>
        ),
        code: `<gds-badge variant="${selectedColor.variants.badge}">...</gds-badge>`,
      },
    ]

    const handleCopy = (code: string) => {
      navigator.clipboard.writeText(code)
    }

    return (
      <Core.GdsFlex flex-direction="column" gap="s" padding="0" overflow="auto">
        {components.map((item, index) => (
          <Core.GdsFlex
            key={index}
            align-items="center"
            gap="s"
            background="secondary"
            padding="xs"
            border-radius="s"
          >
            <Core.GdsCard
              justify-content="center"
              align-items="center"
              width="240px"
              height="max-content"
              variant="secondary"
            >
              {item.component}
            </Core.GdsCard>
            <Core.GdsFlex
              flex="1"
              width="100%"
              align-items="center"
              gap="l"
              padding-inline="0 m"
            >
              <Core.GdsInput plain min-width="200px" value={item.code} />
              <Core.GdsButton
                rank="tertiary"
                onClick={() => handleCopy(item.code)}
              >
                <Core.IconCopy />
              </Core.GdsButton>
            </Core.GdsFlex>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    )
  }

  // In your main component, replace the inspect view with:

  return (
    <GdsFlex flex-direction="column" gap="xl">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <Link component="link" href="/foundation">
          <Core.IconBrandGreen size="m" slot="lead" />
          Foundation
        </Link>
        <GdsText>Typography</GdsText>
      </GdsBreadcrumbs>

      <Playground
        toolbar={toolbarContent}
        previewContent={previewContent}
        inspectContent={inspectContent}
      />
    </GdsFlex>
  )
}
