import { htmlTemplateTagFactory } from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

// To add custom localizations
import { gdsInitLocalization } from '@sebgroup/green-core/localization'
import { str } from '@lit/localize'

// Hard coding localization templates like this is bad practice, but this
// is just for testing.
// DON'T DO IT!
const extraLocales = ['fr']
const extraTemplates = new Map([
  [
    'fr',
    {
      templates: {
        s58bfb494feb8eb02: str`${0} baguettes`,
        s5d929ff1619ac0c9: `Fromage`,
        s5e8250fb85d64c23: `Croissant`,
        sd898d99fd9c13de6: `S'il vous plaît, choisissez un élément`,
      },
    },
  ],
])

const { setLocale } = gdsInitLocalization({
  extraLocales,
  extraTemplates,
})

const html = htmlTemplateTagFactory((strs, ...values) =>
  strs.map((s, i) => s + values[i]).join('')
)

export class AppElement extends HTMLElement {
  connectedCallback() {
    registerTransitionalStyles()

    // Set the custom locale added above
    setLocale('fr')

    this.innerHTML = html`
      <div class="card">
        <form id="my-form">
          <gds-dropdown
            id="dropdown"
            label="Label is controllable by app"
            multiple
            searchable
          >
            <span slot="sub-label"
              >This text sits in a slot, so app can handle translation however
              it likes</span
            >
            <span slot="message">Same here</span>

            <gds-option isplaceholder
              >Placeholder text is also controllable</gds-option
            >
            <gds-option value="1">Option 1</gds-option>
            <gds-option value="2">Option 2</gds-option>
            <gds-option value="3">Option 3</gds-option>
            <gds-option value="4">Option 4</gds-option>
          </gds-dropdown>

          <gds-datepicker
            id="datepicker"
            name="datepicker"
            label="Pick a date"
            dateformat="y/m/d"
            showWeekNumbers
            onchange="console.log('date changed', this.value)"
          >
            <span slot="sub-label"
              >This text sits in a slot, so app can handle translation however
              it likes</span
            >
            <span slot="message">Same here</span>
          </gds-datepicker>

          <gds-calendar></gds-calendar>

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    `
  }
}

customElements.define('custom-localization', AppElement)
