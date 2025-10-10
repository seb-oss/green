import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-linked'
import '../button'
import '../icon/icons/chevron-right'
import '../text'
import '../link'
import '../divider'

const meta: Meta = {
  title: 'Components/Card Linked',
  component: 'gds-card-linked',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-linked'),
    rank: {
      control: 'select',
      options: ['primary', 'outlined', 'plain'],
      description: 'Visual style of the card',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    media: {
      control: 'select',
      options: ['default', 'square'],
      description: 'Aspect ratio for media content',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { disable: true },
  },
}

export const Default: Story = {
  args: {
    href: '#',
    title: 'Card Title',
    excerpt: 'This is a brief description of the card content.',
    label: 'Read more',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
    rank: 'primary',
  },
}

export const CardLinked: Story = {
  ...DefaultParams,
  args: {
    href: '#',
    label: 'Read more',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
}

export const Ranks: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="Primary "
        excerpt="The default variant with full background color. Best for primary content, featured items, or when you want to draw immediate attention to the card content."
        label="Explore features"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="outlined"
        title="Outlined"
        excerpt="A subtle variant with a border outline. Ideal for secondary content, supporting information, or when you want to maintain visual hierarchy without strong emphasis."
        label="View details"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="plain"
        title="Plain"
        excerpt="The most minimal variant without background or border. Perfect for content-heavy layouts, lists, or when you want to maintain a clean, uncluttered appearance."
        label="Learn more"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
    </gds-grid>
  `,
}

export const Headers: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="No media"
        excerpt="A minimal variant without any media content. Perfect for text-focused content, blog posts, or when you want to emphasize the written content without visual distraction."
        label="Read more"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="With media"
        excerpt="The standard image header uses the src property for a clean, consistent media presentation. Ideal for articles, products, or any content that benefits from visual context."
        label="View details"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        rank="plain"
        title="Custom Header Content"
        excerpt="Using the header slot allows for complex header layouts. This example shows a card with custom header content including additional elements."
        label="Learn more"
      >
        <gds-card
          slot="header"
          variant="secondary"
          aspect-ratio="16/9"
          justify-content="center"
          align-items="center"
        >
          Content
        </gds-card>
      </gds-card-linked>
    </gds-grid>
  `,
}

export const Footer: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        label="Read article"
        title="Default Link Footer"
        excerpt="This card uses the built-in label property to create a standard footer link. This is the simplest way to add a call-to-action to your card."
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="Slotted footer button"
        excerpt="Example of a card with a custom button in the footer slot. Use this pattern when you want more control over the footer's appearance and behavior."
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-linked>

      <gds-card-linked
        href="#"
        title="No Footer"
        excerpt="Sometimes less is more. This card has no footer, focusing entirely on the content. The entire card remains clickable, making it perfect for simple navigation or when the content speaks for itself."
      >
      </gds-card-linked>
    </gds-grid>
  `,
}

export const Media: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="1; m{3}" gap="xl" width="100%">
      <gds-card-linked
        href="#"
        label="View details"
        title="Landscape Format (16:9)"
        excerpt="The default media format uses a 16:9 aspect ratio, ideal for landscape photos, video thumbnails, and wide-format content. Perfect for hero images and article previews."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>

      <gds-card-linked
        href="#"
        label="Learn more"
        title="Square Format (1:1)"
        excerpt="The square format maintains equal width and height, making it perfect for profile pictures, product images, or any content where balanced proportions are desired."
        src="https://api.seb.io/assets/launch-hero.jpg"
        media="square"
      >
      </gds-card-linked>
    </gds-grid>
  `,
}
