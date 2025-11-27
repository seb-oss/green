import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.js'

import './card-linked'

/**
 * @beta
 *
 * Card Linked Component
 *
 * A wrapper component that adds link functionality to `gds-card`. <br />
 * Provides hover and focus states, and handles link behavior while maintaining card styling.
 *
 * @extends GdsCard
 */
const meta: Meta = {
  title: 'Components/Card/Card Linked',
  component: 'gds-card-linked',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-linked'),
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    href: '#',
    innerHTML: 'Linked Card',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic implementation of a linked card.',
      },
    },
  },
}

export const Target: Story = {
  render: () => html`
    <gds-flex gap="l" flex-direction="column">
      <gds-card-linked href="#" padding="m">
        Default (Same Window)
      </gds-card-linked>

      <gds-card-linked href="#" target="_blank" padding="m">
        New Tab (Adds noreferrer noopener automatically)
      </gds-card-linked>

      <gds-card-linked href="#" target="_parent" padding="m">
        Parent Frame
      </gds-card-linked>

      <gds-card-linked href="#" target="_top" padding="m">
        Top Frame
      </gds-card-linked>
    </gds-flex>
  `,
  parameters: {
    docs: {
      description: {
        story: `
- \`target="_self"\` (default): Opens in same window/tab
- \`target="_blank"\`: Opens in new tab (adds security attributes)
- \`target="_parent"\`: Opens in parent frame
- \`target="_top"\`: Opens in full window
        `,
      },
    },
  },
}

export const Downloads: Story = {
  render: () => html`
    <gds-flex gap="l">
      <gds-card-linked href="/file.pdf" download padding="m">
        Download (Browser Named)
      </gds-card-linked>

      <gds-card-linked href="/file.pdf" download="custom-name.pdf" padding="m">
        Download (Custom Name)
      </gds-card-linked>
    </gds-flex>
  `,
  parameters: {
    docs: {
      description: {
        story: `
- \`download\`: Browser determines filename
- \`download="filename.pdf"\`: Suggests specific filename
        `,
      },
    },
  },
}

export const Security: Story = {
  render: () => html`
    <gds-flex gap="l">
      <gds-card-linked href="https://external.com" target="_blank" padding="m">
        External Link (Auto Security)
      </gds-card-linked>

      <gds-card-linked
        href="https://external.com"
        rel="nofollow noreferrer noopener"
        padding="m"
      >
        Custom Security Attributes
      </gds-card-linked>
    </gds-flex>
  `,
  parameters: {
    docs: {
      description: {
        story: `
- Automatic \`noreferrer noopener\` for external links
- Custom \`rel\` attribute support
- Safe external linking
        `,
      },
    },
  },
}

export const Accessibility: Story = {
  render: () => html`
    <gds-card-linked
      href="#"
      aria-label="Descriptive text for screen readers"
      padding="m"
    >
      Accessible card link
    </gds-card-linked>
  `,
  parameters: {
    docs: {
      description: {
        story: `
- Proper focus management
- Screen reader support
- ARIA attribute support
        `,
      },
    },
  },
}
