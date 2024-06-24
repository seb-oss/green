import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/card/index.js'
import '../../../../../dist/libs/core/src/components/img/index.js'
import '../../../../../dist/libs/core/src/components/video/index.js'
import '../../../../../dist/libs/core/src/components/container/index.js'
import '../../../../../dist/libs/core/src/components/text/index.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-down.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-right.js'
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
 */

const meta: Meta = {
  title: 'Components/Layouts/Card',
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
    controls: { expanded: true },
  },
  args: {
    shadow: 's{m}',
    radius: 'm',
    background: '',
    innerHTML: `<gds-card shadow="s{xs} m{xs} l{s}" radius="m">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>`,
  },
}

/**
 * Card
 */

export const Card: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="2xl">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-container display="flex" gap="none" direction="column">
          <gds-container position="relative">
            <gds-img
              src="https://placehold.co/600x400/e9f5ff/2e3438?text=gds-img"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="10px 10px auto auto"
              padding="s{xs} m{xs} l{xs}"
              background="rgba(0, 0, 0, 0.1)"
              radius="xs"
              color="white-text"
              display="flex"
              align="center"
              jusitfy="center"
            >
              <gds-icon-arrow-down></gds-icon-arrow-down>
            </gds-container>
          </gds-container>
          <gds-container
            display="flex"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
            align="flex-start"
            gap="l"
          >
            <gds-text tag="h2" size="title-large">Title</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-container>
        </gds-container>
      </gds-card>
      <gds-card
        shadow="l"
        radius="m"
        border="var(--gds-sys-color-base200)"
        overflow="hidden"
      >
        <gds-container display="flex" gap="none" direction="column" padding="l">
          <gds-container position="relative">
            <gds-img
              src="https://placehold.co/600x400/e9f5ff/2e3438?text=gds-img"
              radius="xs"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="10px 10px auto auto"
              padding="s{xs} m{xs} l{xs}"
              background="rgba(0, 0, 0, 0.1)"
              radius="xs"
              color="white-text"
              display="flex"
              align="center"
              jusitfy="center"
            >
              <gds-icon-arrow-down></gds-icon-arrow-down>
            </gds-container>
          </gds-container>
          <gds-container
            display="flex"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
            align="flex-start"
            gap="s"
          >
            <gds-text tag="h2" size="title-large">Title</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-container>
        </gds-container>
      </gds-card>
      <gds-card radius="m" overflow="hidden">
        <gds-container position="relative" display="flex" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            fit="cover"
            ratio="16/9"
            events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-container
            position="absolute"
            display="flex"
            padding="4xl 2xl 2xl 2xl"
            gap="m"
            direction="column"
            inset="50% 0px 0px 0px"
            filter="10px"
            background="rgba(0, 0, 0, 0.1)"
            color="white-text"
            radius="none none m m"
            mask="top"
            justify="flex-end"
          >
            <gds-container>
              <gds-text size="title-large">Jane Doe</gds-text>
              <gds-text size="body-medium">UX Designer</gds-text>
            </gds-container>
            <gds-container display="flex" gap="s">
              <gds-button rank="secondary">Message</gds-button>
              <gds-button rank="secondary">Follow</gds-button>
            </gds-container>
          </gds-container>
        </gds-container>
      </gds-card>
    </gds-grid>
  `,
}

export const CardBorder: Story = {
  ...DefaultParams,
  name: 'Border Style',
  render: (args) =>
    html` <gds-grid columns="5" gap="2xl">
      <gds-card
        shadow="s"
        radius="none none m m"
        background="base100"
        border="currentColor transparent transparent transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Top
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m none none m"
        background="base100"
        border="transparent currentColor transparent transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Right
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m m none none"
        background="base100"
        border="transparent transparent currentColor transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Bottom
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="none m m none"
        background="base100"
        border="transparent transparent transparent currentColor"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Left
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m"
        background="base100"
        border="currentColor"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          All
        </gds-container>
      </gds-card>
    </gds-grid>`,
}

export const CardRadius: Story = {
  ...DefaultParams,
  name: 'Border Radius',
  render: (args) =>
    html`<gds-grid columns="6" gap="xl">
      <gds-card radius="xs" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card radius="s" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card radius="m" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card radius="l" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card radius="xl" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
      <gds-card radius="2xl" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          2XL
        </gds-container>
      </gds-card>
    </gds-grid>`,
}

export const Cardshadow: Story = {
  ...DefaultParams,
  name: 'Shadow',
  render: (args) =>
    html`<gds-grid columns="5" gap="xl">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>`,
}

export const CardBackground: Story = {
  ...DefaultParams,
  name: 'Background',
  render: (args) =>
    html`<gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text tag="h3" size="headline-medium">Base 100</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base200">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text tag="h3" size="headline-medium">Base 200</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base300">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text tag="h3" size="headline-medium">Base 300</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base400">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text tag="h3" size="headline-medium">Base 400</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`,
}

export const CardGrid: Story = {
  ...DefaultParams,
  name: 'Using with Grid',
  render: (args) =>
    html` <gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
          >
            <gds-text
              tag="h3"
              size="l{headline-medium} m{headline-medium} s{headline-medium}"
              >Span Columns</gds-text
            >
            <gds-text wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            Some other column
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`,
}
