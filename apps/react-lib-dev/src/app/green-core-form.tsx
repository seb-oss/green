import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createComponent } from '@lit/react'
import { set } from 'date-fns'

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
import { GdsRichText } from '@sebgroup/green-core/components/rich-text/index.js'
import { GdsTextarea } from '@sebgroup/green-core/components/textarea/index.js'
import { GdsTheme } from '@sebgroup/green-core/components/theme/index.js'
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

type FormData = {
  name: [string, errorState]
  email: [string, errorState]
  fruit: [string | undefined, errorState]
  date: [Date | undefined, errorState]
  description: [string, errorState]
}

type errorState = {
  valid: boolean
}

const initialFormState: FormData = {
  name: ['', { valid: false }],
  email: ['', { valid: false }],
  fruit: [undefined, { valid: false }],
  date: [undefined, { valid: false }],
  description: ['', { valid: false }],
}

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
            onReset={(e) => setFormData(initialFormState)}
          >
            <CoreFlex gap="m" flex-direction="column">
              <CoreInput
                label={'Name'}
                value={formData.name[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: [
                      (e.currentTarget as GdsInput).value || '',
                      { valid: (e.currentTarget as GdsInput).validity.valid },
                    ],
                  })
                }
              />
              <CoreInput
                label={'Email'}
                value={formData.email[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: [
                      (e.currentTarget as GdsInput).value || '',
                      { valid: (e.currentTarget as GdsInput).validity.valid },
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
                      {
                        valid: (e.currentTarget as GdsDropdown).validity.valid,
                      },
                    ],
                  })
                }
              >
                <CoreOption isPlaceholder>Select a fruit</CoreOption>
                <CoreOption value="apple">Apple</CoreOption>
                <CoreOption value="orange">Orange</CoreOption>
                <CoreOption value="banana">Banana</CoreOption>
              </CoreDropdown>
              <CoreDatepicker
                label={'Select a date'}
                value={formData.date[0]}
                validator={requiredValidator}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: [
                      (e.currentTarget as GdsDatepicker).value || undefined,
                      {
                        valid: (e.currentTarget as GdsDatepicker).validity
                          .valid,
                      },
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
                      {
                        valid: (e.currentTarget as GdsTextarea).validity.valid,
                      },
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
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{formData.name[0]}</td>
                  <td>Valid: {formData.name[1].valid ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{formData.email[0]}</td>
                  <td>Valid: {formData.email[1].valid ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Dropdown</th>
                  <td>{formData.fruit[0]}</td>
                  <td>Valid: {formData.fruit[1].valid ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>{formData.date[0]?.toLocaleDateString()}</td>
                  <td>Valid: {formData.date[1].valid ? '✅' : '❌'}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{formData.description[0]}</td>
                  <td>Valid: {formData.description[1].valid ? '✅' : '❌'}</td>
                </tr>
              </tbody>
            </table>
          </CoreRichText>
        </CoreFlex>
      </CoreFlex>
    </CoreTheme>
  )
}
