// welcome.stories.tsx
import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import '../components/flex/flex'
import '../components/text/text'
import '../components/divider/divider'
import '../components/icon/icons/brand-green'
import '../components/icon/icons/brand-seb'
import '../components/icon/icons/square-arrow-top-right'
import '../components/grid/grid'
import '../components/card/card'
import '../components/link/link'

const meta = {
  title: 'Green Design System',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    previewTabs: {
      canvas: { hidden: true },
      'storybook/docs/panel': { hidden: true },
    },
    options: {
      showPanel: false,
      showToolbar: false,
    },
    addons: { hidden: true },
    docs: {
      story: { inline: true },
      canvas: { hidden: true },
      controls: { disable: true },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const GreenDesignSystem: Story = {
  name: 'Green Design System',
  render: (args, context) => {
    return html`
      <gds-flex flex-direction="column" min-height="90vh">
        <gds-flex
          padding="0 l"
          align-items="center"
          justify-content="center"
          flex="1"
        >
          <gds-flex
            min-width="100%"
            justify-content="center"
            align-items="center"
            flex-direction="column"
            padding="0 l"
            gap="xl"
          >
            <gds-icon-brand-green size="2xl"></gds-icon-brand-green>
            <gds-text tag="code" font-size="display-s">
              @sebgroup/green-core
            </gds-text>
            <gds-text
              font="heading-s"
              text-align="center"
              font-weight="regular"
              text-wrap="balance"
              max-width="90ch"
            >
              Green Core is a carefully crafted set of Web Components that lays
              the foundation for the Green Design System.
            </gds-text>
            <gds-flex gap="m" justify-content="center">
              <gds-button
                href="https://storybook.seb.io/latest/core/?path=/docs/get-started--docs"
                rank="primary"
              >
                Get Started
              </gds-button>
              <gds-button
                href="https://storybook.seb.io/latest/core/?path=/docs/components-alert--docs"
                rank="secondary"
              >
                View Components
              </gds-button>
            </gds-flex>
            <gds-flex gap="s" align-items="center">
              <gds-text>Built by:</gds-text>
              <gds-icon-brand-seb size="m"></gds-icon-brand-seb>
            </gds-flex>

            <gds-card
              variant="primary"
              flex-direction="column"
              align-items="flex-start"
              padding="l"
              width="70%"
              max-width="800px"
              gap="m"
              margin="xl 0 0 0"
              border-radius="m"
            >
              <gds-flex flex-direction="column">
                <gds-text font="heading-s" font-weight="regular"
                  >Guidelines & Foundation</gds-text
                >
                <gds-text max-width="100%" opacity="0.6" text-wrap="pretty">
                  For comprehensive design guidelines and implementation
                  details, visit:
                </gds-text>
              </gds-flex>
              <gds-link href="https://seb.io" target="_blank">
                <gds-icon-square-arrow-top-right
                  slot="trail"
                  size="s"
                ></gds-icon-square-arrow-top-right>
                seb.io
              </gds-link>
            </gds-card>
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `
  },
}
