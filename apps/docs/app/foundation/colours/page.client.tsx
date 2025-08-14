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
import { Render } from '../../../design/atoms/content/render'
import { Link } from '../../../design/atoms/link/link'
import Playground from '../../../design/atoms/playgroud/playground'
import { useContentContext } from '../../../settings/content'

import './page.css'

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
      {colorOptions.map((option) => (
        <Core.GdsCard
          key={option.name}
          level="2"
          variant={option.variants.card}
          width="xl"
          height="xl"
          padding="0"
          className="color-picker"
          border-color={
            selectedColor.name === option.name ? 'secondary' : 'transparent'
          }
          border-width="2xs"
          onClick={() => setSelectedColor(option)}
        />
      ))}
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
      <Core.GdsBadge variant={selectedColor.variants.badge}>
        <Core.IconCircleInfo slot="lead"></Core.IconCircleInfo>
        Badge
      </Core.GdsBadge>

      <Core.GdsCard variant={selectedColor.variants.card} padding="l">
        Card
      </Core.GdsCard>

      <Core.GdsButton variant={selectedColor.variants.button}>
        <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
        Button
      </Core.GdsButton>
      <Core.GdsButton rank="secondary" variant={selectedColor.variants.button}>
        <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
        Button
      </Core.GdsButton>
      <Core.GdsButton rank="tertiary" variant={selectedColor.variants.button}>
        <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
        Button
      </Core.GdsButton>

      <Core.GdsFlex gap="s" align-items="center">
        <Core.GdsButton
          variant={selectedColor.variants.button}
          size="small"
          label="Next step 2"
        >
          <Core.IconArrowRight></Core.IconArrowRight>
        </Core.GdsButton>
      </Core.GdsFlex>
      <Core.GdsBadge variant={selectedColor.variants.badge} size="small">
        428
      </Core.GdsBadge>
      <Core.GdsCard
        flex-direction="row"
        color={selectedColor.variants.card}
        padding="0"
      >
        <Core.IconAi size="l"></Core.IconAi>
      </Core.GdsCard>
      <Core.GdsCard
        flex-direction="row"
        color={selectedColor.variants.card}
        padding="0"
      >
        <Core.IconRocket size="l"></Core.IconRocket>
      </Core.GdsCard>
      <Core.GdsFab
        position="relative"
        inset="initial"
        size="small"
        variant={selectedColor.variants.button}
      >
        Floating
        <Core.GdsSignal slot="trail" />
      </Core.GdsFab>
      <Core.GdsBadge
        rounded
        variant={selectedColor.variants.badge}
        size="small"
      >
        20+
      </Core.GdsBadge>
      <Core.GdsFab
        position="relative"
        inset="initial"
        size="small"
        rank="secondary"
        variant={selectedColor.variants.button}
      >
        Floating
        <Core.GdsSignal slot="trail" />
      </Core.GdsFab>
      <Core.GdsFab
        position="relative"
        inset="initial"
        size="small"
        rank="tertiary"
        variant={selectedColor.variants.button}
      >
        Floating
        <Core.GdsSignal slot="trail" />
      </Core.GdsFab>
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
      {
        name: 'Card',
        component: (
          <Core.GdsCard variant={selectedColor.variants.card} padding="l">
            Card
          </Core.GdsCard>
        ),
        code: `<gds-card variant="${selectedColor.variants.card}"> ... </gds-card>`,
      },
      {
        name: 'Button',
        component: (
          <Core.GdsButton variant={selectedColor.variants.button}>
            <Core.IconCreditCard slot="lead" />
            Button
          </Core.GdsButton>
        ),
        code: `<gds-button variant="${selectedColor.variants.button}"> ... </gds-button>`,
      },
      {
        name: 'Button Secondary',
        component: (
          <Core.GdsButton
            rank="secondary"
            variant={selectedColor.variants.button}
          >
            <Core.IconCreditCard slot="lead" />
            Button
          </Core.GdsButton>
        ),
        code: `<gds-button rank="secondary" variant="${selectedColor.variants.button}"> ... </gds-button>`,
      },
      // Add more components as needed
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

  const { actions } = useContentContext()
  const CONTENT = actions.getPage('foundation/colours')

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
        <GdsText>Colours</GdsText>
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
    </GdsFlex>
  )
}
