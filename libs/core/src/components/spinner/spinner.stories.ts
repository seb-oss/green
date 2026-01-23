// gds-spinner.stories.ts
import { html } from 'lit'
import { ifDefined } from 'lit-html/directives/if-defined.js'
import { Meta, StoryObj } from '@storybook/web-components-vite'

import { GdsSpinner } from './spinner'

import './spinner'
import '../div'
import '../flex'
import '../text'
import '../card'
import '../theme'
import '../button'
import '../divider'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * A spinner is an indeterminate progress indicator.
 *
 * @status beta
 *
 * ## Features
 * - Multiple sizes (sm, md, lg)
 * - Optional text label
 * - Container cover mode
 * - Fullscreen mode
 * - Accessibility support
 * - Light/dark theme support
 */
const meta: Meta<GdsSpinner> = {
  title: 'Components/Spinner',
  component: 'gds-spinner',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-textarea'),
  },
}

export default meta
type Story = StoryObj<GdsSpinner>

export const Playground: Story = {
  args: {
    size: 'md',
    showLabel: true,
    cover: false,
    fullscreen: false,
  },
  render: (args) => html`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>
      <gds-spinner
        size=${args.size}
        label=${ifDefined(args.label)}
        ?showLabel=${args.showLabel}
        ?cover=${args.cover}
        ?fullscreen=${args.fullscreen}
      ></gds-spinner>
    </gds-card>
  `,
}

// Size variants
export const Sizes: Story = {
  name: 'Size Variants',
  render: () => html`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium (default)" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  `,
}

/**
 * The label is hidden by default, but can also be shown visually. A label should always be provided for accessibility reasons.
 * The position of the label can also be customized to appear on top, left, or right of the spinner. this is done with the `label-position` attribute.
 */
export const LabelOptions: Story = {
  name: 'Label Options',
  render: () => html`
    <gds-grid gap="4xl" columns=">0{2}">
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Hidden Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With hidden label (for screen readers)"
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Visible Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With visible label"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label top</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on top"
            label-position="top"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label left</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on left"
            label-position="left"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label right</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on right"
            label-position="right"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
    </gds-grid>
  `,
}

/**
 * By setting the container position to relative, the spinner can cover the entire container by using the `cover` attribute.
 */
export const Cover: Story = {
  name: 'Container Cover',
  render: () => html`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>

      <gds-spinner cover showLabel size="md"></gds-spinner>
    </gds-card>
  `,
}

/**
 * The fullscreen spinner covers the entire viewport and prevents scrolling.
 *
 * Check this example in story view by clicking on it in the menu on the left.
 */
export const Fullscreen: Story = {
  name: 'Fullscreen Mode',
  render: () => {
    return html`
      <gds-div height="400px">
        <gds-spinner
          label="Click to toggle fullscreen"
          showLabel
          @click=${(e: Event) => {
            const spinner = e.target as any
            spinner.fullscreen = !spinner.fullscreen
          }}
        ></gds-spinner>
      </gds-div>
    `
  },
}

/**
 * The spinner colors adaps to the current user settings, and the label uses currentColor
 * to inherit the text color.
 */
export const ThemeModes: Story = {
  name: 'Light & Dark Theme',
  render: (args, { context }) => {
    // Function to handle the theme toggle
    const handleThemeToggle = (e: Event) => {
      const demo = document.getElementById('theme-demo-container')
      if (demo) {
        const isDark = demo.getAttribute('color-scheme') === 'dark'
        if (isDark) {
          demo.setAttribute('color-scheme', 'light')
          ;(e.target as HTMLButtonElement).textContent = 'Switch to Dark Theme'
        } else {
          demo.setAttribute('color-scheme', 'dark')
          ;(e.target as HTMLButtonElement).textContent = 'Switch to Light Theme'
        }
      }
    }

    return html`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${context.globals.style}
      >
        <gds-card variant="secondary" padding="2xl">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=${handleThemeToggle}
            >
              Switch to Dark Theme
            </gds-button>
          </div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
                <gds-spinner size="md"></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
                <gds-spinner
                  size="md"
                  showLabel
                ></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
              <gds-div
                position="relative"
                height="100px"
                display="flex"
                align-items="center"
                justify-content="center"
                background="surface"
                margin-bottom="m"
              >
              <gds-text margin="0" color="neutral-01">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    `
  },
}
