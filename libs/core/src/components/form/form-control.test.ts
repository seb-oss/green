import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'

import {
  gdsCustomElement,
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { GdsFormControlElement } from './form-control'

const html = htmlTemplateTagFactory(testingHtml)

@gdsCustomElement('test-dummy-form-control')
class DummyFormControl extends GdsFormControlElement {
  protected _getValidityAnchor(): HTMLElement {
    throw new Error('Method not implemented.')
  }
}

DummyFormControl.define()

describe('Form controls', () => {
  describe('Behavior', () => {
    it('should register its value with the form', async () => {
      const formEl = await fixture<HTMLFormElement>(
        html`<form>
          <test-dummy-form-control
            name="test"
            label="Test"
            value="test"
          ></test-dummy-form-control>
        </form>`,
      )
      const formData = new FormData(formEl)
      const value = formData.get('test')
      expect(value).to.equal('test')
    })

    it('should update the form value when the value changes', async () => {
      const formEl = await fixture<HTMLFormElement>(
        html`<form>
          <test-dummy-form-control
            name="test"
            label="Test"
            value="test"
          ></test-dummy-form-control>
        </form>`,
      )
      const formControlEl = formEl.querySelector(
        getScopedTagName('test-dummy-form-control'),
      ) as DummyFormControl
      formControlEl.value = 'new value'
      const formData = new FormData(formEl)
      const value = formData.get('test')
      expect(value).to.equal('new value')
    })
  })
})
