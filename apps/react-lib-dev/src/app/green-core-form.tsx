import { on } from 'events'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createComponent } from '@lit/react'

// Import all web components from Green Core
import { GdsButton } from '@sebgroup/green-core/components/button/index.js'
import { GdsCard } from '@sebgroup/green-core/components/card/index.js'
import { GdsDatepicker } from '@sebgroup/green-core/components/datepicker/index.js'
import {
  GdsDropdown,
  GdsOption,
} from '@sebgroup/green-core/components/dropdown/index.js'
import { GdsFlex } from '@sebgroup/green-core/components/flex/index.js'
import {
  GdsFormControlElement,
  GdsValidator,
} from '@sebgroup/green-core/components/form/form-control'
import { GdsInput } from '@sebgroup/green-core/components/input/index.js'
import {
  GdsRadio,
  GdsRadioGroup,
} from '@sebgroup/green-core/components/radio/index.js'
import { GdsRichText } from '@sebgroup/green-core/components/rich-text/index.js'
import { GdsSelect } from '@sebgroup/green-core/components/select/index.js'
import { GdsTextarea } from '@sebgroup/green-core/components/textarea/index.js'
// In this example, we are importing the GdsTheme component to set the design version to 2023
import { GdsTheme } from '@sebgroup/green-core/components/theme/index.js'
// This is used to get the correct element name when creating the wrappers below
import { getScopedTagName } from '@sebgroup/green-core/scoping'

// Regster React wrappers
// At some point in the future, the React library will have predefined wrappers to import,
// and at that point, you would only need to do this in case you want to customize the wrapper
// in some way.
const CoreInput = createComponent({
  tagName: getScopedTagName('gds-input'),
  elementClass: GdsInput,
  events: {
    onChange: 'input',
    onInvalid: 'invalid',
  },
  react: React,
})

const CoreTextarea = createComponent({
  tagName: getScopedTagName('gds-textarea'),
  elementClass: GdsTextarea,
  events: {
    onChange: 'input',
  },
  react: React,
})

const CoreDropdown = createComponent({
  tagName: getScopedTagName('gds-dropdown'),
  elementClass: GdsDropdown,
  events: {
    onChange: 'input',
  },
  react: React,
})

const CoreOption = createComponent({
  tagName: getScopedTagName('gds-option'),
  react: React,
  elementClass: GdsOption,
})

const CoreDatepicker = createComponent({
  tagName: getScopedTagName('gds-datepicker'),
  elementClass: GdsDatepicker,
  events: {
    onChange: 'input',
  },
  react: React,
})

const CoreButton = createComponent({
  tagName: getScopedTagName('gds-button'),
  elementClass: GdsButton,
  events: {
    click: 'onClick',
  },
  react: React,
})

const CoreFlex = createComponent({
  tagName: getScopedTagName('gds-flex'),
  elementClass: GdsFlex,
  react: React,
})

const CoreCard = createComponent({
  tagName: getScopedTagName('gds-card'),
  elementClass: GdsCard,
  react: React,
})

const CoreTheme = createComponent({
  tagName: getScopedTagName('gds-theme'),
  elementClass: GdsTheme,
  react: React,
})

const CoreRichText = createComponent({
  tagName: getScopedTagName('gds-rich-text'),
  elementClass: GdsRichText,
  react: React,
})

const CoreSelect = createComponent({
  tagName: getScopedTagName('gds-select'),
  react: React,
  events: {
    onChange: 'input',
  },
  elementClass: GdsSelect,
})

const CoreRadio = createComponent({
  tagName: getScopedTagName('gds-radio'),
  react: React,
  events: {
    onChange: 'change',
  },

  elementClass: GdsRadio,
})

const CoreRadioGroup = createComponent({
  tagName: getScopedTagName('gds-radio-group'),
  react: React,
  events: {
    onChange: 'change',
    onInvalid: 'invalid',
  },

  elementClass: GdsRadioGroup,
})

// This type represents or form data model
// In this example, we represent the field value and error state as a simple tuple
type FormData = {
  name: [string, errorState]
  email: [string, errorState]
  fruit: [string | undefined, errorState]
  dessert: [string | undefined, errorState]
  date: [Date | undefined, errorState]
  description: [string, errorState]
  radio: [string | undefined, errorState]
}

type errorState = boolean

// We can use this empty state as the initial value, and when the form is reset
const initialFormState: FormData = {
  name: ['', false],
  email: ['', false],
  fruit: [undefined, false],
  dessert: [undefined, false],
  date: [undefined, false],
  description: ['', false],
  radio: [undefined, false],
}

// This is a simple validator that checks that the field is not empty
// The `validate` function returns a tuple with a standard ValidityState object (https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) and an error message string.
// You can read more about validators here: https://storybook.seb.io/latest/core/?path=/docs/components-form-validation-documentation--docs
const requiredValidator: GdsValidator = {
  validate: (el: GdsFormControlElement) => {
    if (!el.value)
      return [
        { ...el.validity, valid: false, customError: true },
        'This field is required',
      ]
    return
  },
}

export const GreenCoreFormExample = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState)

  return (
    <CoreTheme designVersion="2023">
      <CoreRichText>
        <h2>This is a form built with Green Core form controls</h2>

        <p>
          This is built completely with the form control elements and built-in
          framework agnostic validation features from Green Core
        </p>
      </CoreRichText>

      <CoreFlex gap="l" max-width="1000px" margin="0 auto">
        <CoreCard variant="primary" flex="1">
          <form
            onSubmit={(e) => e.preventDefault()}
            onReset={(e) => {
              e.preventDefault()
              setFormData(initialFormState)
            }}
          >
            <CoreFlex gap="m" flex-direction="column">
              <CoreInput
                label={'Name'}
                //
                // Control the value through the value prop, just like you would with a regular HTML input
                value={formData.name[0]}
                //
                // And update React state in the onChange callback
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: [
                      (e.currentTarget as GdsInput).value || '',
                      (e.currentTarget as GdsInput).validity.valid,
                      // ^ here we can use the native validity state from the element.
                      // This will be updated by the validator behind the scenes
                    ],
                  })
                }
                //
                // Add the validator as a prop
                validator={requiredValidator}
                //
                // If we want to react to a validation error, we can also listen to the native
                // invalid event. Note, however, that this event only fires when the element becomes invalid,
                // and not when it becomes valid again.
                // (The event also needs to be registered in the wrapper, check at the top of this file)
                onInvalid={(e) => console.log('Invalid', e)}
              />
              {/* Then we repeat the same setup for the other controls */}
              <CoreInput
                label={'Email'}
                value={formData.email[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: [
                      (e.currentTarget as GdsInput).value || '',
                      (e.currentTarget as GdsInput).validity.valid,
                    ],
                  })
                }
              />
              <CoreDropdown
                label={'Select a fruit'}
                value={formData.fruit[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fruit: [
                      (e.currentTarget as GdsDropdown).value || '',
                      (e.currentTarget as GdsDropdown).validity.valid,
                    ],
                  })
                }
              >
                <CoreOption isPlaceholder>Select a fruit</CoreOption>
                <CoreOption value="apple">Apple</CoreOption>
                <CoreOption value="orange">Orange</CoreOption>
                <CoreOption value="banana">Banana</CoreOption>
              </CoreDropdown>
              <CoreSelect
                label={'Select a dessert'}
                value={formData.dessert[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dessert: [
                      (e.currentTarget as GdsSelect).value || '',
                      (e.currentTarget as GdsSelect).validity.valid,
                    ],
                  })
                }
              >
                <select>
                  <option value="cake">Cake</option>
                  <option value="ice-cream">Ice cream</option>
                  <option value="pie">Pie</option>
                </select>
              </CoreSelect>
              <CoreRadioGroup
                label={'Select a option'}
                validator={requiredValidator}
                value={formData.radio[0]}
                onChange={(e) => {
                  const radioGroup = e.currentTarget as GdsRadioGroup
                  const selectedRadio = e.target as GdsRadio
                  radioGroup.value = selectedRadio.value
                  radioGroup.radios.forEach((radio) => {
                    const isChecked = radio.value === radioGroup.value
                    radio.checked = isChecked
                    console.log(`Radio ${radio.value}: ${isChecked}`)
                  })
                  setFormData({
                    ...formData,
                    radio: [radioGroup.value, true],
                  })
                }}
                error-message="Please select an option"
                supporting-text="Please select one of the following options"
              >
                <CoreRadio
                  value="1"
                  label="Option 1"
                  supportingText="Supporting text for option 1"
                ></CoreRadio>
                <CoreRadio
                  value="2"
                  label="Option 2"
                  supportingText="Supporting text for option 2"
                  disabled={true}
                ></CoreRadio>
                <CoreRadio
                  value="3"
                  label="Option 3"
                  supportingText="Supporting text for option 3"
                ></CoreRadio>
              </CoreRadioGroup>

              <CoreDatepicker
                label={'Select a date'}
                value={formData.date[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: [
                      (e.currentTarget as GdsDatepicker).value || undefined,
                      (e.currentTarget as GdsDatepicker).validity.valid,
                    ],
                  })
                }
              />
              <CoreTextarea
                label={'Description'}
                value={formData.description[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: [
                      (e.currentTarget as GdsTextarea).value || '',
                      (e.currentTarget as GdsTextarea).validity.valid,
                    ],
                  })
                }
              />
              <CoreFlex gap="m">
                <CoreButton rank="primary" type="submit">
                  Submit
                </CoreButton>
                <CoreButton rank="secondary" type="reset">
                  Reset
                </CoreButton>
              </CoreFlex>
            </CoreFlex>
          </form>
        </CoreCard>

        <CoreFlex flex="1">
          <CoreRichText style={{ flex: '1' }}>
            <h3>Reflected React state</h3>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{formData.name[0]}</td>
                  <td>Valid: {formData.name[1] ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{formData.email[0]}</td>
                  <td>Valid: {formData.email[1] ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Dropdown</th>
                  <td>{formData.fruit[0]}</td>
                  <td>Valid: {formData.fruit[1] ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Select</th>
                  <td>{formData.dessert[0]}</td>
                  <td>Valid: {formData.dessert[1] ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>{formData.date[0]?.toLocaleDateString()}</td>
                  <td>Valid: {formData.date[1] ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Radio</th>
                  <td>{formData.radio[0]}</td>
                  <td>Valid: {formData.radio[1] ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{formData.description[0]}</td>
                  <td>Valid: {formData.description[1] ? '✅' : '❌'}</td>
                </tr>
              </tbody>
            </table>
          </CoreRichText>
        </CoreFlex>
      </CoreFlex>
    </CoreTheme>
  )
}
