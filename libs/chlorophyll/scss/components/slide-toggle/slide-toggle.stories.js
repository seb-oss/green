export default {
  title: 'Components/Slide Toggle',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-slidetoggle'],
  },
  argTypes: {
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
  },
}

/**
 * The slide toggle is a representation of a physical switch that allows users to turn things on or off.
 * A slide toggle should be used for binary user choices that have an immidiate effect, such as turning a setting or
 * preference on or off. Slide toggles should not be used in forms where the user needs to click an additional submit
 * button for the values to take effect.
 *
 * ## Accessibility
 *
 * The slide toggle in Chlorophyll is represented by a button element with role="switch" and an aria-checked state. This will prompt most screen readers to announce it as a switch and its state as "on" or "off", which should give visually impaired users a good idea of what kind of control they are interacting with.
 * Another common way of representing a slide toggle is to use a styled checkbox. This has the benefit of not requiring any JavaScript to make it interactive, but is somewhat detrimental to Accessibility since the screen reader will simply annonce it as a checkbox and announce its state as "checked" or "not checked". This may confuse the user, as checkboxes are typically part of a form that needs to be submitted, whereas a slide toggle is typically used for a setting that has immidiate effect. Checkboxes can also use `role="switch"` to denote them as switches rather than checkboxes, but browser and screen reader support here is not great. Many will still announce it as a regular checkbox.
 *
 * ### Labelling
 * If there is a short descriptive text next to the slide toggle, be sure to connect it as a label to the button:
 *
 * ```html
 * <span id="cookies-label-1">Enable cookies</span>
 * <button
 *  role="switch"
 *  aria-checked="false"
 *  onClick="{toggle}"
 *  aria-labelledby="cookies-label-1"
 * ></button>
 * ```
 *
 * Sometimes, it may be visually obvious what the toggle does even though there is no text snippet in its immidiate vicinity. In this case, add a short descriptive label using the `aria-label` attribute:
 *
 * ```html
 * <button
 *   role="switch"
 *   aria-checked="false"
 *   onClick="{toggle}"
 *   aria-label="Enable cookies"
 * ></button>
 * ```
 *
 * Do not change the label with the state of the slide toggle, as this would be confusing to screen reader users. If you have an additional label that reads "off" and changes to "on", or similar, regard this as a visual only complement and do not try to announce this text to a screen reader. The `aria-checked` attribute already takes care of this for you.
 */
export const SlideToggle = {
  render: (args) => `
  <div class="d-flex align-items-center">
    <span id="slide-toggle-label-1">${args.label}</span>
    <button role="switch" aria-checked="${args.checked}" aria-labelledby="slide-toggle-label-1"></button>
  </div>`,
  args: {
    label: 'Toggle me',
    checked: false,
  },
}

export const LabelRight = {
  render: (args) => `
  <div class="d-flex align-items-center">
  <button role="switch" aria-checked="${args.checked}" aria-labelledby="slide-toggle-label-1"></button>
  <span id="slide-toggle-label-1">${args.label}</span>
  </div>`,
  args: {
    label: 'Toggle me',
    checked: false,
  },
}
