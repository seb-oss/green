import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.js'

import './mask'
import '../card'
import '../flex'
import '../button'
import '../theme'
import '../img'
import '../theme'
import '../video'
import '../text'
import '../divider'
import '../icon/icons/arrow-down.js'
import '../icon/icons/arrow-right.js'
import '../icon/icons/circles-three.js'

/**
 * The Mask component creates a gradient overlay effect that can be used to improve content visibility
 * or create visual hierarchy. It's particularly useful when placing text over images or creating
 * fade effects.
 *
 *
 * ### Basic Usage
 *
 * The mask component is typically used in combination with images or videos to create gradient overlays:
 *
 * ```html
 * <gds-card position="relative" padding="0" overflow="hidden">
 *   <gds-img src="path/to/image.jpg"></gds-img>
 *   <gds-mask
 *     background="neutral-01/0.9"
 *     mask-image="top"
 *     position="absolute"
 *     inset="50% 0 0 0"
 *     level="3"
 *   >
 *     <!-- Content within the mask -->
 *   </gds-mask>
 * </gds-card>
 * ```
 *
 * ### Common Use Cases
 *
 * 1. Image Overlays: <br>
 *    Create readable text over images by adding a gradient mask
 *
 * 2. Content Fading: <br>
 *    Add fade effects to content edges
 *
 * 3. Visual Hierarchy: <br>
 *    Draw attention to specific areas using gradient masks
 *
 * ### Accessibility
 *
 * When using masks over content, ensure sufficient contrast for text readability.
 * Consider using the dark theme for content within masks over light images.
 *
 * ```html
 * <gds-mask>
 *   <gds-theme color-scheme="dark">
 *     <!-- Content -->
 *   </gds-theme>
 * </gds-mask>
 * ```
 */

const meta: Meta = {
  title: 'Components/Mask',
  component: 'gds-mask',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-mask'),
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

export const Mask: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-card position="relative" padding="0" overflow="hidden">
      <gds-img src="https://api.seb.io/assets/woods-cabin.jpeg"></gds-img>
      <gds-mask
        background="neutral-01/0.9"
        mask-image="top"
        position="absolute"
        inset="50% 0 0 0"
        level="3"
        color="03"
        flex-direction="column"
        justify-content="center"
        align-items="flex-start"
        gap="xl"
        padding="6xl"
      >
        <gds-flex flex-direction="column" gap="s">
          <gds-text font="display-xl">Sustainability</gds-text>
          <gds-text tag="p">
            Actively supporting the net zero transition.
          </gds-text>
        </gds-flex>
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-button>Our impact</gds-button>
        </gds-theme>
      </gds-mask>
    </gds-card>
  `,
}
