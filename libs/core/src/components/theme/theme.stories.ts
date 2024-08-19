import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

/**
 *
 *
 * The `gds-theme` is a custom element that provides CSS variables for a part of the DOM tree.
 * Every descendant of this component will inherit the CSS variables provided by the theme set on this component.
 * It is mandatory and all components should be wrapped in a `gds-theme` element to ensure consistent styling.
 *
 * @status beta
 *
 * ## Usage
 *
 * ```html
 * <gds-theme color-scheme="dark">
 *   <!-- Your content here will inherit the dark theme -->
 * </gds-theme>
 * ```
 *
 * ## Properties
 *
 * - `colorScheme`: This property reflects the theme mode and can be set to `light`, `dark`, or `auto`.
 *   - `light`: Applies the light theme.
 *   - `dark`: Applies the dark theme.
 *   - `auto`: Automatically switches between light and dark themes based on the user's system preferences.
 *
 * ## Methods
 *
 * - `connectedCallback()`: This lifecycle method is called when the element is added to the document.
 *   It applies transitional styles to the component.
 *
 * ## Styles
 *
 * The component uses the following styles:
 * - `tokens`: A set of CSS variables and design tokens.
 * - `style`: Component-specific styles defined in `theme.style.css`.
 *
 * ## Example
 *
 * ```html
 * <gds-theme color-scheme="auto">
 *   <div>Your themed content here</div>
 * </gds-theme>
 * ```
 *
 *
 */

const meta: Meta = {
  title: 'Docs/Theme',
  component: 'gds-theme',
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
 * Theme
 */

export const Theme: Story = {
  ...DefaultParams,
}
