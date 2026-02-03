import { describe, expect, it } from 'vitest'

import {
  clickOnElement,
  conditionToBeTrue,
  fixture,
  html as testingHtml,
  timeout,
  waitUntil,
} from '../../utils/testing'

import '@sebgroup/green-core/components/dropdown'

import type { GdsDropdown } from '@sebgroup/green-core/components/dropdown'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('Form validation', () => {
  describe('API', () => {
    it('call validator to determin validity state', async () => {
      const formEl = await fixture<HTMLFormElement>(
        html`<form>
          <gds-dropdown
            label="Dropdown label"
            id="dropdown"
            .validator=${{
              validate: (el: GdsDropdown) => {
                if (el.value === undefined)
                  return [
                    { ...el.validity, valid: false, customError: true },
                    'This field is required',
                  ]
              },
            }}
          >
            <gds-option>Unselected</gds-option>
            <gds-option value="selected">Selected</gds-option>
          </gds-dropdown>
        </form>`,
      )
      const dropdownEl = formEl.querySelector('#dropdown') as GdsDropdown
      await dropdownEl.updateComplete

      expect(dropdownEl.invalid).toBe(false)

      formEl.requestSubmit()

      expect(dropdownEl.invalid).toBe(true)
    })
  })
})
