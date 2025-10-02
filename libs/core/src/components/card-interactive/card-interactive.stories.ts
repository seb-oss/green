import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-interactive'
import '../button'
import '../text'
import '../link'
import '../divider'

const meta: Meta = {
  title: 'Components/Card Interactive',
  component: 'gds-card-interactive',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-interactive'),
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

/**
 * TODO: Add documentation here. Also add the beta
 * flag in green/libs/core/.storybook/manager.ts to
 * mark the component as beta in the menu of the
 * core storybook.
 */
export const CardInteractive: Story = {
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
  },
}

/**
 * Examples of different color variants
 */
export const Patterns: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-flex gap="4xs">
      <!-- Start linked -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start PLAIN -->
      <!-- Start PLAIN -->
      <!-- Start PLAIN -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-01"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
            <gds-button slot="footer">Primary</gds-button>
            <gds-button slot="footer" rank="secondary">Secondary</gds-button>
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
            <gds-button slot="footer">Primary</gds-button>
            <gds-link slot="footer" rank="secondary">
              <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
              Even a link
            </gds-link>
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
    </gds-flex>
  `,
}
