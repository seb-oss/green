import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './text'
import '../card'
import '../div'
import '../flex'
import '../divider'

import { html } from 'lit'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * `gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.
 *
 * Style expression properties apply to the outer element unless otherwise specified.
 *
 */
const meta: Meta = {
  title: 'Components/Text',
  component: 'gds-text',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-text'),
  },
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
}

/**
 * The `font` property controls the font style based on design tokens.
 *
 * For all available font tokens, check out the [Studio on seb.io](https://seb.io/studio/typography)
 */
export const Font: Story = {
  ...DefaultParams,
  name: 'Font',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      <gds-text font="display-l">display-l</gds-text>
      <gds-text font="body-regular-m">body-regular-m</gds-text>
      <gds-text font="detail-regular-s">detail-regular-s</gds-text>
    </gds-flex>`,
}

/**
 * The `tag` property controls the inner element tag name.
 *
 * Example: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.
 *
 * Depending on which tag you use, different default styles will be applied. Style can be overridden using the `font`, `font-weight` and other style expression properties.
 *
 * The default tag is `span` and the default size is `body-m`
 */

export const Tags: Story = {
  ...DefaultParams,
  name: 'Tags',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Span ( Default )</gds-text>
        <gds-text tag="p">Paragraph </gds-text>
        <gds-text tag="em">Em</gds-text>
        <gds-text tag="mark">Mark</gds-text>
        <gds-text tag="strong">strong</gds-text>
        <gds-text tag="small">small</gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="h1">H1</gds-text>
        <gds-text tag="h2">H2</gds-text>
        <gds-text tag="h3">H3</gds-text>
        <gds-text tag="h4">H4</gds-text>
        <gds-text tag="h5">H5</gds-text>
        <gds-text tag="h6">H6</gds-text>
      </gds-flex>
    </gds-flex>`,
}

/**
 * > Headings in the `gds-text` component come with predefined sizes based on design tokens, and the `tag` property is used to define the heading level.
 * > For example, using `tag="h1"` will automatically apply the `heading-xl` size, so specifying the `size` property is not necessary.
 * > However, the `size` property can still be used to override the default size if needed.
 * > This provides flexibility in using the `gds-text` component across different contexts while ensuring consistent typography.
 */
export const Heading: Story = {
  name: 'Heading',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: heading-2xs</gds-text>
      <gds-text tag="h5">H5: heading-xs</gds-text>
      <gds-text tag="h4">H4: heading-s</gds-text>
      <gds-text tag="h3">H3: heading-m</gds-text>
      <gds-text tag="h2">H2: heading-l</gds-text>
      <gds-text tag="h1">H1: heading-xl</gds-text>
    </gds-flex>
  `,
}

/**
 *
 * The `color` property that will change the text color based on the specified color token.
 *
 * e.g. `<gds-text level="1" color="neutral-01"></gds-text>`
 *
 */

export const Color: Story = {
  name: 'Color',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-theme color-scheme="dark">
        <gds-flex
          level="1"
          background="neutral-01"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-01" font="body-s">
            Color: Content 01
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="neutral-02"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-02" font="body-m">
            Color: Content Secondary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="neutral-03"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="neutral-03" font="body-l">
            Color: Content Tertiary
          </gds-text>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  `,
}

/**
 * The `text-decoration` property will change the text decoration based on the css values such as `underline`, `overline`, `line-through`, `underline dotted`, `{COLOR} wavy underline` etc.
 *
 *
 * e.g.
 *
 * ```html
 * <gds-text
 *    text-decoration="currentcolor wavy underline"
 *  >
 *    Wavy Underline
 *  </gds-text>
 * ```
 */
export const Decoration: Story = {
  ...DefaultParams,
  name: 'Decoration',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      <gds-text text-decoration="underline"> Underline </gds-text>
      <gds-text text-decoration="overline"> Overline </gds-text>
      <gds-text text-decoration="line-through"> Line Through </gds-text>
      <gds-text text-decoration="underline dotted"> Dotted </gds-text>
      <gds-text text-decoration="currentcolor wavy underline">
        Wavy Underline
      </gds-text>
    </gds-flex>`,
}

/**
 * The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.
 */
export const Lines: Story = {
  name: 'Line Clamp',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:2</gds-text>
        <gds-text font="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:3</gds-text>
        <gds-text font="display-m" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font="body-s">Lines:4</gds-text>
        <gds-text font="display-l" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 *
 * Check the documentation on `text-wrap` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
 *
 * The `text-wrap` property will change the text wrapping behavior based on the css values such as `wrap`, `nowrap`, `pretty`, `balance`, `stable`.
 *
 * e.g.
 *
 * ```html
 * <gds-text text-wrap="pretty">
 *    ...
 * </gds-text>
 * ```
 */
export const TextWrap: Story = {
  name: 'text-wrap',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m" width="250px">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary"><code>wrap</code></gds-text>
        <gds-text text-wrap="wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">nowrap</gds-text>
        <gds-text text-wrap="nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">pretty</gds-text>
        <gds-text text-wrap="pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">balance</gds-text>
        <gds-text text-wrap="balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="code" color="secondary">stable</gds-text>
        <gds-text text-wrap="stable">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 *
 * Check the documentation on `text-overflow` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
 *
 * The `text-overflow` property will change the text overflow behavior based on the css values such as `clip`, `ellipsis`, `string`.
 *
 * e.g.
 *
 * ```html
 * <gds-text overflow-wrap="break-word">
 *    ...
 * </gds-text>
 * ```
 */
export const OverflowWrap: Story = {
  name: 'overflow-wrap',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Normal</gds-text>
        <gds-text overflow-wrap="normal" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Anywhere</gds-text>
        <gds-text overflow-wrap="anywhere" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">Break Word</gds-text>
        <gds-text overflow-wrap="break-word" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 *
 * Check the documentation on `white-space` property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
 *
 * The `white-space` supports all valid CSS `white-space` values such as `wrap` `collapse` or combined `preserve nowrap` etc.
 *
 * e.g.
 *
 * ```html
 * <gds-text white-space="pre-wrap">
 *    ...
 * </gds-text>
 * ```
 */
export const WhiteSpace: Story = {
  name: 'white-space',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">normal</gds-text>
        <gds-text white-space="normal" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre</gds-text>
        <gds-text white-space="pre" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">pre-wrap</gds-text>
        <gds-text white-space="pre" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-divider></gds-divider>
      <gds-text>Shorthand</gds-text>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">wrap</gds-text>
        <gds-text white-space="wrap" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">collapse</gds-text>
        <gds-text white-space="collapse" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column">
        <gds-text tag="small" color="secondary">preserve nowrap</gds-text>
        <gds-text white-space="preserve nowrap" font="heading-xl">
          Most words are short & don't need to break. But
          Antidisestablishmentarianism is long. The width is set to min-content,
          with a max-width of 11em.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `,
}
