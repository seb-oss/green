import { on } from 'events'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// We can import types ilke this if we want to cast event targets to correct types
import type {
  GdsCheckboxGroup as GdsCheckboxGroupType,
  GdsDatepicker as GdsDatepickerType,
  GdsDropdown as GdsDropdownType,
  GdsFormSummary as GdsFormSummaryType,
  GdsInput as GdsInputType,
  GdsRadioGroup as GdsRadioGroupType,
  GdsSelect as GdsSelectType,
  GdsTextarea as GdsTextareaType,
} from '@sebgroup/green-core/pure'

import {
  GdsFormControlElement,
  GdsValidator,
} from '@sebgroup/green-core/components/form/form-control'
// Import React components from Green Core
import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsCheckbox,
  GdsCheckboxGroup,
  GdsDatepicker,
  GdsDropdown,
  GdsFlex,
  GdsFormSummary,
  GdsInput,
  GdsOption,
  GdsRadio,
  GdsRadioGroup,
  GdsRichText,
  GdsSelect,
  GdsText,
  GdsTextarea,
  GdsTheme,
} from '@sebgroup/green-core/react'

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
  checkbox: [string[], errorState]
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
  checkbox: [[], false],
}

// This is a simple validator that checks that the field is not empty
// The `validate` function returns a tuple with a standard ValidityState object (https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) and an error message string.
// You can read more about validators here: https://storybook.seb.io/latest/core/?path=/docs/components-form-validation-documentation--docs
const requiredValidator: GdsValidator = {
  validate: (el: GdsFormControlElement) => {
    if (!el.value || el.value.length === 0)
      return [
        { ...el.validity, valid: false, customError: true },
        'This field is required',
      ]
    return
  },
}

export const GreenCoreFormExample = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState)
  const formSummaryRef = React.useRef<GdsFormSummaryType>(null)

  function checkFormStatus() {
    const summary = formSummaryRef.current
    if (!summary) return

    summary.refresh()
    if (summary.errorCount > 0) {
      summary.focus()
    }
  }

  return (
    <GdsTheme designVersion="2023">
      <GdsRichText>
        <h2>This is a form built with Green Core form controls</h2>

        <p>
          This is built completely with the form control elements and built-in
          framework agnostic validation features from Green Core
        </p>
      </GdsRichText>

      <GdsFlex gap="l" align-items="flex-start" flex="1">
        <GdsCard variant="primary" flex="1">
          <form
            onReset={(e) => {
              e.preventDefault()
              setFormData(initialFormState)
            }}
          >
            <GdsFormSummary ref={formSummaryRef}></GdsFormSummary>
            <GdsFlex gap="m" flex-direction="column">
              <GdsInput
                label={'Name'}
                //
                // Control the value through the value prop, just like you would with a regular HTML input
                value={formData.name[0]}
                //
                // And update React state in the onInput callback
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    name: [
                      (e.currentTarget as GdsInputType).value || '',
                      (e.currentTarget as GdsInputType).validity.valid,
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
              <GdsInput
                label={'Email'}
                value={formData.email[0]}
                validator={requiredValidator}
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    email: [
                      (e.currentTarget as GdsInputType).value || '',
                      (e.currentTarget as GdsInputType).validity.valid,
                    ],
                  })
                }
              />
              <GdsDropdown
                label={'Select a fruit'}
                value={formData.fruit[0]}
                validator={requiredValidator}
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    fruit: [
                      (e.currentTarget as GdsDropdownType).value || '',
                      (e.currentTarget as GdsDropdownType).validity.valid,
                    ],
                  })
                }
              >
                <GdsOption value="">Select a fruit</GdsOption>
                <GdsOption value="apple">Apple</GdsOption>
                <GdsOption value="orange">Orange</GdsOption>
                <GdsOption value="banana">Banana</GdsOption>
              </GdsDropdown>
              <GdsSelect
                label={'Select a dessert'}
                value={formData.dessert[0]}
                validator={requiredValidator}
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    dessert: [
                      (e.currentTarget as GdsSelectType).value || '',
                      (e.currentTarget as GdsSelectType).validity.valid,
                    ],
                  })
                }
              >
                <select>
                  <option value="">Select</option>
                  <option value="cake">Cake</option>
                  <option value="ice-cream">Ice cream</option>
                  <option value="pie">Pie</option>
                </select>
              </GdsSelect>
              <GdsRadioGroup
                label={'Select a option'}
                validator={requiredValidator}
                value={formData.radio[0]}
                onInput={(e) => {
                  const radioGroup = e.currentTarget as GdsRadioGroupType
                  setFormData({
                    ...formData,
                    radio: [radioGroup.value, radioGroup.validity.valid],
                  })
                }}
                error-message="Please select an option"
                supporting-text="Please select one of the following options"
              >
                <GdsRadio
                  value="1"
                  label="Option 1"
                  supportingText="Supporting text for option 1"
                ></GdsRadio>
                <GdsRadio
                  value="2"
                  label="Option 2"
                  supportingText="Supporting text for option 2"
                ></GdsRadio>
                <GdsRadio
                  value="3"
                  label="Option 3"
                  supportingText="Supporting text for option 3"
                ></GdsRadio>
              </GdsRadioGroup>

              <GdsCheckboxGroup
                label={'Select a option'}
                validator={requiredValidator}
                value={formData.checkbox[0]}
                onInput={(e) => {
                  const checkboxGroup = e.currentTarget as GdsCheckboxGroupType
                  setFormData({
                    ...formData,
                    checkbox: [
                      checkboxGroup.value,
                      checkboxGroup.validity.valid,
                    ],
                  })
                }}
                error-message="Please select an option"
                supporting-text="Please select one of the following options"
              >
                <GdsCheckbox
                  value="1"
                  label="Option 1"
                  supportingText="Supporting text for option 1"
                ></GdsCheckbox>
                <GdsCheckbox
                  value="2"
                  label="Option 2"
                  supportingText="Supporting text for option 2"
                ></GdsCheckbox>
                <GdsCheckbox
                  value="3"
                  label="Option 3"
                  supportingText="Supporting text for option 3"
                ></GdsCheckbox>
              </GdsCheckboxGroup>

              <GdsDatepicker
                label={'Select a date'}
                value={formData.date[0]}
                validator={requiredValidator}
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    date: [
                      (e.currentTarget as GdsDatepickerType).value || undefined,
                      (e.currentTarget as GdsDatepickerType).validity.valid,
                    ],
                  })
                }
              />
              <GdsTextarea
                label={'Description'}
                value={formData.description[0]}
                validator={requiredValidator}
                onInput={(e) =>
                  setFormData({
                    ...formData,
                    description: [
                      (e.currentTarget as GdsTextareaType).value || '',
                      (e.currentTarget as GdsTextareaType).validity.valid,
                    ],
                  })
                }
              />
              <GdsFlex gap="m">
                <GdsButton
                  rank="primary"
                  type="submit"
                  onClick={checkFormStatus}
                >
                  Submit
                </GdsButton>
                <GdsButton rank="secondary" type="reset">
                  Reset
                </GdsButton>
              </GdsFlex>
            </GdsFlex>
          </form>
        </GdsCard>

        <GdsCard
          flex="1"
          position="sticky"
          inset="40px 0 0 0"
          gap="m"
          flex-direction="column"
          variant="secondary"
          max-width="46ch"
        >
          <GdsText tag="h3">Reflected React state</GdsText>
          <GdsCard padding="m l" gap="xs">
            <GdsRichText>
              <table>
                <tbody>
                  {Object.entries(formData).map(([key, value]) => (
                    <tr key={key}>
                      <td>
                        <GdsText tag="h5" font-weight="book" width="10ch">
                          {key}
                        </GdsText>
                      </td>
                      <td>
                        <GdsText flex="1" overflow-wrap="anywhere">
                          {value[0]?.toString() || 'No value'}
                        </GdsText>
                      </td>
                      <td>
                        {value[1] ? (
                          <GdsBadge variant="positive" rounded>
                            Valid
                          </GdsBadge>
                        ) : (
                          <GdsBadge variant="negative" rounded>
                            Invalid
                          </GdsBadge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GdsRichText>
          </GdsCard>
        </GdsCard>
      </GdsFlex>
    </GdsTheme>
  )
}
