import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-pattern-01'
import '../button'
import '../div'
import '../flex'
import '../icon/icons/chevron-right'
import '../icon/icons/arrow-right'
import '../text'
import '../link'
import '../divider'

/**
 *
 * Features:
 * - Linked and non-linked variants
 * - Header with media or custom content
 * - Configurable media aspect ratio
 * - Optional footer with actions
 * - Three appearance styles
 * - Two content size options
 *
 * Slots:
 * - header: Custom header content
 * - footer: Action items (buttons, links)
 */

const meta: Meta = {
  title: 'Patterns/Card Pattern 01',
  component: 'gds-card-pattern-01',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-pattern-01'),
    appearance: {
      control: 'select',
      options: ['neutral', 'outlined', 'plain'],
      description: 'Visual style variant of the card',
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    aspectRatio: {
      control: 'select',
      options: ['landscape', 'square'],
      description: 'Aspect ratio for media content',
      table: {
        defaultValue: { summary: 'landscape' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Content padding size',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default card implementation showcasing basic usage.',
      },
    },
  },
}

/**
 * Media Variations
 * Shows different media aspect ratios and responsive image handling
 */
export const Media: Story = {
  render: () => html`
    <gds-grid columns="1; m{2}" gap="xl">
      <gds-card-pattern-01
        title="Landscape Media"
        excerpt="16:9 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
        srcset="https://api.seb.io/assets/launch-hero.jpg 800w, https://api.seb.io/assets/launch-hero.jpg 1200w"
        sizes="(max-width: 800px) 100vw, 800px"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        title="Square Media"
        excerpt="1:1 aspect ratio"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>
    </gds-grid>
  `,
}

/**
 * Header Variations
 * Demonstrates different header configurations:
 * - No header
 * - With media
 * - Custom header content
 */
export const Headers: Story = {
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Text Only -->
      <gds-card-pattern-01
        title="Text Only"
        excerpt="No header content"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- With Media -->
      <gds-card-pattern-01
        title="With Media"
        excerpt="Default media header"
        src="https://api.seb.io/assets/launch-hero.jpg"
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Custom Header -->
      <gds-card-pattern-01
        href="#"
        title="Custom Header"
        excerpt="Using header slot"
        appearance="plain"
      >
        <gds-card
          slot="header"
          justify-content="center"
          align-items="center"
          variant="primary"
          aspect-ratio="16/9"
        >
          Custom Content
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  `,
}

// Footer Variations for Linked Cards
export const LinkedCardFooters: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Default Link Footer -->
      <gds-card-pattern-01
        title="Default Footer"
        excerpt="Card with default link in footer."
        href="#"
        label="Read More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <!-- Button with Icon -->
      <gds-card-pattern-01
        title="Icon Button"
        excerpt="Card with icon button in footer."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-pattern-01>

      <!-- No Footer -->
      <gds-card-pattern-01
        title="No Footer"
        excerpt="Card without any footer content."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Linked card variations showing different footer configurations.',
      },
    },
  },
}

// Non-Linked Card with Custom Footer
export const NonLinkedCustomFooter: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- Custom Button -->
      <gds-card-pattern-01
        title="Custom Button"
        excerpt="Non-linked card with custom button."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Primary </gds-button>
        <gds-button slot="footer" rank="secondary"> Secondary </gds-button>
      </gds-card-pattern-01>

      <!-- Custom Link -->
      <gds-card-pattern-01
        title="Custom Link"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          Custom Link
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-link>
      </gds-card-pattern-01>

      <!-- Combined -->
      <gds-card-pattern-01
        title="Combined Link and button"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Button </gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Custom link
        </gds-link>
      </gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Non-linked cards with custom footer content.',
      },
    },
  },
}

// Visual Variants
export const Appearances: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        appearance="neutral"
        title="Neutral"
        excerpt="Default card appearance"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        appearance="outlined"
        title="Outlined"
        excerpt="Secondary variant"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        appearance="plain"
        title="Plain"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different visual appearances of the card.',
      },
    },
  },
}

// Content Size Variants
export const Sizes: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-grid columns="1; m{2}" gap="xl">
      <gds-card-pattern-01
        size="large"
        title="Large Size"
        excerpt="Default content padding"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        size="small"
        title="Small Size"
        excerpt="Reduced content padding"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different content padding sizes.',
      },
    },
  },
}

export const Theme: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-grid columns="1; m{2}" gap="0">
      <gds-theme color-scheme="light">
        <gds-flex
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
        >
          <gds-text>Light</gds-text>
          <gds-divider color="subtle-01"></gds-divider>
          <gds-card-pattern-01
            title="Light mode"
            excerpt="Card on light mode"
            appearance="outlined"
            href="#"
            label="Learn More"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-flex>
      </gds-theme>

      <gds-theme color-scheme="dark">
        <gds-flex
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
        >
          <gds-text>Dark</gds-text>
          <gds-divider color="subtle-01"></gds-divider>
          <gds-card-pattern-01
            title="Dark mode"
            appearance="outlined"
            excerpt="Card on dark mode"
            href="#"
            label="Learn More"
            src="https://api.seb.io/assets/launch-hero.jpg"
          ></gds-card-pattern-01>
        </gds-flex>
      </gds-theme>
    </gds-grid>
  `,
}
