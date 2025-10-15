import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-pattern-01'
import '../button'
import '../div'
import '../icon/icons/chevron-right'
import '../text'
import '../link'
import '../divider'

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

// Header Variations
export const HeaderVariations: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
      <!-- No Header -->
      <gds-card-pattern-01
        title="No Header"
        excerpt="Card without any header or image content."
        href="#"
        label="Learn More"
      ></gds-card-pattern-01>

      <!-- Landscape Image -->
      <gds-card-pattern-01
        title="Landscape Image"
        excerpt="Card with landscape aspect ratio image."
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="landscape"
      ></gds-card-pattern-01>

      <!-- Square Image -->
      <gds-card-pattern-01
        title="Square Image"
        excerpt="Card with square aspect ratio image."
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
        aspect-ratio="square"
      ></gds-card-pattern-01>

      <!-- Slotted header -->
      <gds-card-pattern-01
        title="Square Image"
        excerpt="Card with square aspect ratio image."
        href="#"
        label="Learn More"
      >
        <gds-card
          slot="header"
          justify-content="center"
          align-items="center"
          variant="primary"
        >
          Content
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Different header configurations showing no header, landscape, and square images.',
      },
    },
  },
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
    <gds-grid columns="1; m{2}" gap="xl">
      <!-- Custom Button -->
      <gds-card-pattern-01
        title="Custom Button"
        excerpt="Non-linked card with custom button."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer"> Primary Action </gds-button>
      </gds-card-pattern-01>

      <!-- Custom Link -->
      <gds-card-pattern-01
        title="Custom Link"
        excerpt="Non-linked card with custom link."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Custom Link
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
