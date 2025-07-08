// welcome.stories.tsx
import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import '../components/flex/flex'
import '../components/text/text'
import '../components/divider/divider'
import '../components/icon/icons/brand-green'
import '../components/icon/icons/brand-seb'
import '../components/grid/grid'
import '../components/card/card'
import '../components/link/link'

const meta = {
  title: 'Green Design System',
  parameters: {
    docsOnly: true,
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const GreenDesignSystem: Story = {
  name: 'Green Design System',
  render: (args, context) => {
    return html`
      <gds-flex
        flex-direction="column"
        gap="4xl"
        max-width="1200px"
        margin="4xl auto"
      >
        <gds-flex padding="0 l">
          <gds-flex
            min-width="100%"
            justify-content="center"
            align-items="center"
            flex-direction="column"
            padding="0 l"
            gap="xl"
          >
            <gds-icon-brand-green width="80" height="80"></gds-icon-brand-green>
            <gds-text tag="code" font-size="display-s"
              >@sebgroup/green-core</gds-text
            >
            <gds-text
              font-size="display-xs"
              text-align="center"
              text-wrap="balance"
            >
              Green Core is a carefully crafted set of Web Components that lays
              the foundation for the Green Design System.
            </gds-text>
            <gds-flex gap="s">
              <a
                target="_blank"
                href="https://github.com/seb-oss/green/blob/main/LICENSE"
              >
                <img
                  src="https://img.shields.io/badge/license-Apache2.0-005FAC"
                />
              </a>
              <a target="_blank" href="https://semver.org/">
                <img
                  src="https://img.shields.io/badge/semantic%20versioning-006D31"
                />
              </a>
              <a target="_blank" href="https://nx.dev/">
                <img
                  src="https://img.shields.io/badge/maintained%20with-nx-006D31"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/seb-oss/green/blob/main/CONTRIBUTING.md"
              >
                <img src="https://img.shields.io/badge/PRs-welcome-006D31" />
              </a>
            </gds-flex>
            <gds-flex gap="s" align-items="center">
              <gds-text>Built by:</gds-text>
              <gds-icon-brand-seb size="m"></gds-icon-brand-seb>
            </gds-flex>
          </gds-flex>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>

        <!-- Debug section to show what we found -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text tag="h2" font-size="xl">Components</gds-text>
        </gds-flex>
      </gds-flex>
    `
  },
}
