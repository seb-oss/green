import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './card'
import '../img'
import '../video'
import '../container'
import '../mask/index.js'
import '../flex'
import '../text'
import '../divider'
import '../icon/icons/arrow-down.js'
import '../icon/icons/arrow-right.js'
import '../icon/icons/circles-three.js'

/**
 * A container for content representing a single entity. e.g. a contact, article, or task.
 *
 * `gds-card` inherits all properties from `gds-container`, but comes with some predefined defaults
 * and a shortcut property for specifiying different card variants.
 *
 * @status beta
 *
 * @extends `gds-container`
 */

const meta: Meta = {
  title: 'Components/Card',
  component: 'gds-card',
  tags: ['autodocs'],
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

export const Card: Story = {
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
    style: 'max-width: 200px',
  },
}

/**
 * Examples of different color variants
 */
export const Variants: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-flex gap="l" flex-direction="column">
      <gds-card variant="secondary" border-color="primary">
        <gds-flex gap="l" flex-direction="column">
          <gds-text tag="h3">Light mode</gds-text>
          <gds-grid columns="3" gap="l">
            <gds-card variant="primary">Primary</gds-card>
            <gds-card variant="secondary" border-color="secondary"
              >Secondary</gds-card
            >
            <gds-card variant="tertiary">Tertiary</gds-card>
          </gds-grid>
          <gds-grid columns="5" gap="l">
            <gds-card variant="positive">Positive</gds-card>
            <gds-card variant="negative">Negative</gds-card>
            <gds-card variant="notice">Notice</gds-card>
            <gds-card variant="warning">Warning</gds-card>
            <gds-card variant="information">Information</gds-card>
          </gds-grid>
          <gds-grid columns="4" gap="l">
            <gds-card variant="copper-01">Copper 01</gds-card>
            <gds-card variant="copper-02">Copper 02</gds-card>
            <gds-card variant="purple-01">Purple 01</gds-card>
            <gds-card variant="purple-02">Purple 02</gds-card>
            <gds-card variant="green-01">Green 01</gds-card>
            <gds-card variant="green-02">Green 02</gds-card>
            <gds-card variant="blue-01">Blue 01</gds-card>
            <gds-card variant="blue-02">Blue 02</gds-card>
          </gds-grid>
        </gds-flex>
      </gds-card>
      <gds-theme color-scheme="dark">
        <gds-card>
          <gds-flex gap="l" flex-direction="column">
            <gds-text tag="h3">Dark mode</gds-text>
            <gds-grid columns="3" gap="l">
              <!-- If the backgrouns has the same color as the card, it will be necessary to set the border-color -->
              <gds-card variant="primary" border-color="primary"
                >Primary</gds-card
              >
              <gds-card variant="secondary" border-color="secondary"
                >Secondary</gds-card
              >
              <gds-card variant="tertiary">Tertiary</gds-card>
            </gds-grid>
            <gds-grid columns="5" gap="l">
              <gds-card variant="positive">Positive</gds-card>
              <gds-card variant="negative">Negative</gds-card>
              <gds-card variant="notice">Notice</gds-card>
              <gds-card variant="warning">Warning</gds-card>
              <gds-card variant="information">Information</gds-card>
            </gds-grid>
            <gds-grid columns="4" gap="l">
              <gds-card variant="copper-01">Copper 01</gds-card>
              <gds-card variant="copper-02">Copper 02</gds-card>
              <gds-card variant="purple-01">Purple 01</gds-card>
              <gds-card variant="purple-02">Purple 02</gds-card>
              <gds-card variant="green-01">Green 01</gds-card>
              <gds-card variant="green-02">Green 02</gds-card>
              <gds-card variant="blue-01">Blue 01</gds-card>
              <gds-card variant="blue-02">Blue 02</gds-card>
            </gds-grid>
          </gds-flex>
        </gds-card>
      </gds-theme>
    </gds-flex>
  `,
}

/**
 * Advanced example
 */
export const CardAdvancedExample: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card
        shadow="s{xs} m{xs} l{s}"
        border-radius="xs"
        overflow="hidden"
        padding="0"
        background="secondary"
      >
        <gds-flex gap="0" flex-direction="column" align-items="stretch">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              aspect-ratio="1/1"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{l} l{l}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">James Doe</gds-text>
              <gds-text tag="p">
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card
        shadow="l"
        border-radius="m"
        border="3xs/primary"
        overflow="hidden"
        padding="0"
        background="secondary"
      >
        <gds-flex gap="m" flex-direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              aspect-ratio="1/1"
              border-radius="xs"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            flex-direction="column"
            padding="s{xs} m{s} l{s}"
            align-items="flex-start"
            gap="l"
          >
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l">Lorem Ipsum</gds-text>
              <gds-text tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </gds-text>
            </gds-flex>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="m" overflow="hidden" padding="0">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            background-color="tertiary/0.4"
            position="absolute"
          >
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
              width="100%"
              color="tertiary"
            >
              <gds-container>
                <gds-text font-size="body-l">Jane Doe</gds-text>
                <gds-text font-size="body-m">UX Designer</gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Message</gds-button>
                <gds-button rank="secondary">Follow</gds-button>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  `,
}

/**
 * @property border
 * Controls the border property of the card.
 * Supports all tokens from the design system.
 * Can be specified for each side using the size tokens like this:
 *
 * ```html
 * <gds-container border="4xs 0 0 0"></gds-container>
 * ```
 *
 *
 *
 * ```html
 * <!--Border specified for different breakpoints and side: -->
 * <gds-container border="s{2xs 0 2xs 0} m{3xs 0 0 0} l{4xs}"></gds-container>
 * ```
 * * The above example will apply the border style of 2xs(top) 0(right) 2xs(bottom) 0(right) for small devices, 3xs for medium devices, and 4xs for large devices with the respective sides.
 *
 * ```html
 * <!-- Border specified for all sides and all breakpoints: -->
 * <gds-container border="4xs"></gds-container>
 * ```
 *
 *
 * To speficy the color of the border you can use the color tokens like this:
 *
 * ```html
 * <gds-container border="4xs/primary"></gds-container>
 * ```
 */
export const CardBorder: Story = {
  ...DefaultParams,
  name: 'Border Style',
  render: (args) =>
    html` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" border-radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Top
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center"
          >Right</gds-flex
        >
      </gds-card>
      <gds-card shadow="s" border-radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" border-radius="m" border="4xs">
        <gds-flex padding="2xl" align-items="center" justify-content="center">
          All
        </gds-flex>
      </gds-card>
    </gds-grid>`,
}

/**
 * @property radius
 *
 * Controls the border-radius property of the card.
 * Supports all the size tokens from the design system.
 *
 * You can apply radius in each corner like this:
 *
 * ```html
 * <gds-card border-radius="0 0 m m" ></gds-card>
 * ```
 *
 * Also for different breakpoints like this:
 *
 * ```html
 * <gds-card border-radius="s{xs} m{xs} l{s}"></gds-card>
 * ```
 *
 * Each corner can have a different radius value and also different values for different breakpoints.
 * The radius styles are predfied on the tokens file and will be applied automatically based on the token value.
 *
 *
 * ```html
 * <gds-card border-radius="m">All breakpoints</gds-card>
 * <gds-card border-radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >
 *    Specific breakpoints and sides
 * </gds-card>
 * ```
 *
 * These are the available values you can use to define Border Radius
 *
 * `0`, `4xs`, `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `max`
 *
 * #### Examples
 */
export const CardRadius: Story = {
  ...DefaultParams,
  name: 'Border Radius',
  render: (args) =>
    html`<gds-grid columns="8" gap="l">
      <gds-card variant="tertiary" padding="xl">
        <gds-flex display="flex" align-items="center" justify-content="center">
          0
        </gds-flex>
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="2xs">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >2XS</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 xs 0 xs">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XS</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 s 0 s">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >S</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 m 0 m">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >M</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="0 l 0 l">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >L</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="xl">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XL</gds-flex
        >
      </gds-card>
      <gds-card variant="tertiary" padding="xl" border-radius="max">
        <gds-flex display="flex" align-items="center" justify-content="center"
          >MAX</gds-flex
        >
      </gds-card>
    </gds-grid>`,
}

/**
 *
 * @property shadow
 *
 * Controls the box-shadow property of the card.
 *
 * Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:
 *
 * ```html
 * <gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
 * ```
 *
 * The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
 * The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.
 *
 */

export const Cardshadow: Story = {
  ...DefaultParams,
  name: 'Shadow',
  render: (args) =>
    html`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XS</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{s} m{s} l{s}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >S</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{m} m{m} l{m}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >M</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{l} m{l} l{l}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >L</gds-flex
        >
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        border-radius="xs"
      >
        <gds-flex display="flex" align-items="center" justify-content="center"
          >XL</gds-flex
        >
      </gds-card>
    </gds-grid>`,
}

/**
 *
 * Using `gds-card` with `gds-grid`
 * The `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.
 * The `gds-card` and `gds-container` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:
 *
 * ```html
 * <gds-container grid-column="2 / -1" grid-row="1 / -1"></gds-container>
 * ```
 */
export const CardGrid: Story = {
  ...DefaultParams,
  name: 'Using with Grid',
  render: (args) =>
    html` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex gap="m" flex-direction="column" align-items="flex-start">
            <gds-text font-size="l{heading-s} m{heading-s} s{heading-s}">
              Sidebar
            </gds-text>
            <gds-text text-wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="2 / -1" grid-row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font-size="heading-s"> Span Columns: [2 / -1]</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text font-size="body-m"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container grid-column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" border-radius="xs">
          <gds-flex
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            gap="m"
          >
            <gds-text font-size="heading-s">Span all columns [1 / -1]</gds-text>
            <gds-text text-wrap="balance" lines="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
    </gds-grid>`,
}
