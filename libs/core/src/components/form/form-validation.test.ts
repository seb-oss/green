import { expect } from '@esm-bundle/chai'
import {
  assert,
  fixture,
  html as testingHtml,
  waitUntil,
} from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import sinon from 'sinon'

import { clickOnElement, conditionToBeTrue, timeout } from '../../utils/testing'

import '@sebgroup/green-core/components/dropdown'

import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'

import type { GdsDropdown } from '@sebgroup/green-core/components/dropdown'

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

      expect(dropdownEl.invalid).to.be.false

      formEl.requestSubmit()

      expect(dropdownEl.invalid).to.be.true
    })
  })
})
