import type { Meta, StoryObj } from '@storybook/web-components'
import './card'
import '../../media/img'
import '../../media/video'
import '../../layout/container'
import '../../layout/flex'
import '../../content/text'
import '../../content/divider'
import '../../icon/icons/arrow-down.js'
import '../../icon/icons/arrow-right.js'
import '../../icon/icons/circles-three.js'
import { html } from 'lit'

/**
 * The `gds-card` is a custom element that provides a flexible card system.
 *
 * It can be used to create a card with different styles and configurations.
 *
 * The card can be customized with different properties like `shadow`, `border`, `radius`, and `background`.
 * It is designed to be used in different scenarios like displaying content, images, or other elements.
 * It can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.
 *
 * @status beta
 *
 * @extends `gds-container`
 *
 */

const meta: Meta = {
  title: 'Docs/Layout/Card',
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

/**
 * Card
 */

export const Card: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-flex display="flex" gap="0" direction="column" align="stretch">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              ratio="1/1"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
            gap="l"
          >
            <gds-flex gap="s" direction="column">
              <gds-text tag="h2" size="title-large">James Doe</gds-text>
              <gds-text>
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
      <gds-card shadow="l" radius="m" border="3xs/base300" overflow="hidden">
        <gds-flex gap="m" direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              ratio="1/1"
              radius="xs"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            direction="column"
            padding="s{xs} m{s} l{s}"
            align="flex-start"
            gap="l"
          >
            <gds-flex gap="s" direction="column">
              <gds-text tag="h2" size="title-large">Lorem Ipsum</gds-text>
              <gds-text>
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
      <gds-card radius="m" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            fit="cover"
            ratio="1/1"
            events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-card
            position="absolute"
            inset="50% 0px 0px 0px"
            filter="0"
            background="base900/0.6"
            color="white-text"
            mask="top"
          >
            <gds-flex
              direction="column"
              justify="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
            >
              <gds-container>
                <gds-text size="title-large">Jane Doe</gds-text>
                <gds-text size="body-medium">UX Designer</gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Message</gds-button>
                <gds-button rank="secondary">Follow</gds-button>
              </gds-flex>
            </gds-flex>
          </gds-card>
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
 * <gds-container border="4xs/base300"></gds-container>
 * ```
 */
export const CardBorder: Story = {
  ...DefaultParams,
  name: 'Border Style',
  render: (args) =>
    html` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex padding="2xl" align="center" justify="center"> Top </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex padding="2xl" align="center" justify="center">Right</gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex padding="2xl" align="center" justify="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex padding="2xl" align="center" justify="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m" border="4xs">
        <gds-flex padding="2xl" align="center" justify="center"> All </gds-flex>
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
 * `<gds-card radius="0 0 m m" ></gds-card>
 *
 * Also for different breakpoints like this:
 * `<gds-card radius="s{xs} m{xs} l{s}"></gds-card>`
 *
 * Each corner can have a different radius value and also different values for different breakpoints.
 * The radius styles are predfied on the tokens file and will be applied automativally based on the token value.
 *
 *
 * ```html
 * <gds-card radius="m">All breakpoints</gds-card>
 * <gds-card radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >
 *    Specific breakpoints and sides
 * </gds-card>
 * ```
 *
 * These are the available values you can use to define Border Radius
 *
 * `0`, `4XS`, `3XS`, `2XS`, `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL`, `4XL`, `5XL`, `6XL`, `7XL`, `8XL`, `MAX`
 *
 * #### Examples
 */
export const CardRadius: Story = {
  ...DefaultParams,
  name: 'Border Radius',
  render: (args) =>
    html`<gds-grid columns="8" gap="l">
      <gds-card background="base900" color="white-text" padding="xl">
        <gds-flex display="flex" align="center" justify="center"> 0 </gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="2xs"
      >
        <gds-flex display="flex" align="center" justify="center">2XS</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 xs 0 xs"
      >
        <gds-flex display="flex" align="center" justify="center">XS</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 s 0 s"
      >
        <gds-flex display="flex" align="center" justify="center">S</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 m 0 m"
      >
        <gds-flex display="flex" align="center" justify="center">M</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 l 0 l"
      >
        <gds-flex display="flex" align="center" justify="center">L</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="xl"
      >
        <gds-flex display="flex" align="center" justify="center">XL</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="max"
      >
        <gds-flex display="flex" align="center" justify="center">MAX</gds-flex>
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
        radius="xs"
      >
        <gds-flex display="flex" align="center" justify="center">XS</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{s} m{s} l{s}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">S</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{m} m{m} l{m}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">M</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{l} m{l} l{l}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">L</gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        radius="xs"
      >
        <gds-flex display="flex" align="center" justify="center">XL</gds-flex>
      </gds-card>
    </gds-grid>`,
}

/**
 * @property background
 *
 * Controls the background property of the card.
 * Supports all the color tokens from the design system.
 */

export const CardBackground: Story = {
  ...DefaultParams,
  name: 'Background',
  render: (args) =>
    html`<gds-grid columns="4" gap="l">
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 100</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base200">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 200</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base300">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 300</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base400">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 400</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
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
 * <gds-container column="2 / -1" row="1 / -1"></gds-container>
 * ```
 */
export const CardGrid: Story = {
  ...DefaultParams,
  name: 'Using with Grid',
  render: (args) =>
    html` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
          >
            <gds-text
              tag="h3"
              size="l{headline-small} m{headline-small} s{headline-small}"
            >
              Sidebar
            </gds-text>
            <gds-text wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
            padding="s{xs} m{l} l{l}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-small">
              Span Columns: [2 / -1]</gds-text
            >
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
            padding="s{xs} m{l} l{l}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-small"
              >Span all columns [1 / -1]</gds-text
            >
            <gds-text wrap="balance" lines="3">
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
