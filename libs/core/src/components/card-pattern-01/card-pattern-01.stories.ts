import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-pattern-01'
import '../button'
import '../div'
import '../flex'
import '../badge'
import '../icon/icons/chevron-right'
import '../icon/icons/arrow-right'
import '../icon/icons/cloudy-sun'
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

export const Default: Story = {
  args: {
    href: '#',
    title: 'Card Title',
    excerpt: 'Card description with label in footer.',
    label: 'Read more',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
    'max-width': '320px',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
      source: {
        code: `
<gds-card-pattern-01
  href="/path"
  title="Card Title"
  excerpt="Card description with label in footer."
  label="Read more"
  src="https://api.seb.io/assets/launch-hero.jpg"
></gds-card-pattern-01>
        `,
        language: 'html',
        type: 'code',
      },
    },
  },
}

export const Header: Story = {
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
      <gds-card-pattern-01 href="#" title="Custom Header">
        <gds-card
          slot="header"
          height="200px"
          justify-content="center"
          align-items="center"
        >
          <gds-icon-cloudy-sun size="xl"></gds-icon-cloudy-sun>
        </gds-card>
      </gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      source: {
        code: `
<!-- Text only -->
<gds-card-pattern-01
  title="Text Only"
  excerpt="No header content"
  href="#"
  label="Learn More"
></gds-card-pattern-01>

<!-- With media -->
<gds-card-pattern-01
  title="With Media"
  excerpt="Default media header"
  src="image.jpg"
  href="#"
  label="Learn More"
></gds-card-pattern-01>

<!-- Custom header content -->
<gds-card-pattern-01 title="Custom Header" excerpt="Using header slot">
  <gds-card
    slot="header"
    justify-content="center"
    variant="primary"
    aspect-ratio="16/9"
  >
    Custom Content
  </gds-card>
</gds-card-pattern-01>`,
        language: 'html',
        type: 'code',
      },
    },
  },
}

export const Media: Story = {
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
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
  parameters: {
    docs: {
      source: {
        code: `
<!-- Landscape with responsive images -->
<gds-card-pattern-01
  title="Landscape Media"
  excerpt="16:9 aspect ratio"
  src="image.jpg"
  aspect-ratio="landscape"
  srcset="image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 800px"
></gds-card-pattern-01>

<!-- Square aspect ratio -->
<gds-card-pattern-01
  title="Square Media"
  excerpt="1:1 aspect ratio"
  src="image.jpg"
  aspect-ratio="square"
></gds-card-pattern-01>`,
        language: 'html',
        type: 'code',
      },
    },
  },
}

export const Footer: Story = {
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
        title="Icon button"
        excerpt="Card with icon button in footer."
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer" size="small">
          <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
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
      source: {
        code: `
<!-- Default footer link -->
<gds-card-pattern-01
  title="Default Footer"
  excerpt="Uses label prop for footer link"
  href="#"
  label="Read More"
></gds-card-pattern-01>

<!-- Custom button in footer -->
<gds-card-pattern-01 title="Icon Button" excerpt="Custom footer button">
  <gds-button rank="secondary" slot="footer" size="small">
    <gds-icon-chevron-right></gds-icon-chevron-right>
  </gds-button>
</gds-card-pattern-01>

<!-- No footer -->
<gds-card-pattern-01
  title="No Footer"
  excerpt="Card without footer content"
  href="#"
></gds-card-pattern-01>`,
        language: 'html',
        type: 'code',
      },
    },
  },
}

export const Actions: Story = {
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
      source: {
        code: `
<!-- Multiple buttons -->
<gds-card-pattern-01 title="Custom Buttons">
  <gds-button slot="footer">Primary</gds-button>
  <gds-button slot="footer" rank="secondary">Secondary</gds-button>
</gds-card-pattern-01>

<!-- Custom link with icon -->
<gds-card-pattern-01 title="Custom Link">
  <gds-link href="#" slot="footer" size="medium">
    Custom Link
    <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
  </gds-link>
</gds-card-pattern-01>

<!-- Combined actions -->
<gds-card-pattern-01 title="Mixed Actions">
  <gds-button slot="footer">Button</gds-button>
  <gds-link href="#" slot="footer">
    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
    Link
  </gds-link>
</gds-card-pattern-01>`,
        language: 'html',
        type: 'code',
      },
    },
  },
}

export const Variant: Story = {
  render: () => html`
    <gds-grid columns="1; m{3}" gap="xl">
      <gds-card-pattern-01
        title="Neutral 01"
        excerpt="Default card appearance"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        title="Neutral 02"
        excerpt="Secondary variant"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>

      <gds-card-pattern-01
        variant="neutral-02"
        outlined
        title="Neutral 02 · Outlined"
        excerpt="Secondary variant without border"
        href="#"
        label="Learn More"
        src="https://api.seb.io/assets/launch-hero.jpg"
      ></gds-card-pattern-01>
    </gds-grid>
  `,
  parameters: {
    docs: {
      source: {
        code: `
<!-- Neutral 01 (default) -->
<gds-card-pattern-01
  title="Neutral"
  excerpt="Default style"
></gds-card-pattern-01>

<!-- Neutral 02 -->
<gds-card-pattern-01
  variant="neutral-02"
  title="Outlined"
  excerpt="With border"
></gds-card-pattern-01>

<!-- Neutral 02 · Outlined -->
<gds-card-pattern-01
  variant="neutral-02"
  outlined
  title="Plain"
  excerpt="No border"
></gds-card-pattern-01>`,
        language: 'html',
        type: 'code',
      },
    },
  },
}

export const Theme: Story = {
  render: () => html`
    <gds-grid columns="1; m{2}" gap="">
      <gds-theme color-scheme="light">
        <gds-flex flex-direction="column" gap="xl" padding="4xl">
          <gds-badge width="max-content">Light</gds-badge>
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
          level="1"
          flex-direction="column"
          gap="xl"
          background="neutral-01"
          padding="4xl"
          border-radius="s"
        >
          <gds-badge width="max-content">Dark</gds-badge>
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
  parameters: {
    docs: {
      description: {
        story:
          'Cards automatically adapt to light and dark themes when wrapped in `gds-theme` provider.',
      },
      source: {
        code: `
<!-- Light theme -->
<gds-theme color-scheme="light">
  <gds-card-pattern-01
    title="Light mode"
    excerpt="Card on light mode"
    appearance="outlined"
    href="#"
    label="Learn More"
  ></gds-card-pattern-01>
</gds-theme>

<!-- Dark theme -->
<gds-theme color-scheme="dark">
  <gds-card-pattern-01
    title="Dark mode"
    excerpt="Card on dark mode"
    appearance="outlined"
    href="#"
    label="Learn More"
  ></gds-card-pattern-01>
</gds-theme>`,
        language: 'html',
        type: 'code',
      },
    },
  },
}
