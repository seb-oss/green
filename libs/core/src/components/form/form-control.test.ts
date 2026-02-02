import { describe, expect, it } from 'vitest'

import {
  gdsCustomElement,
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { fixture, html as testingHtml } from '../../utils/testing'
import { GdsFormControlElement } from './form-control'

const html = htmlTemplateTagFactory(testingHtml)

@gdsCustomElement('test-dummy-form-control')
class DummyFormControl extends GdsFormControlElement {
  protected _getValidityAnchor(): HTMLElement {
    return {} as HTMLElement
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
      expect(value).toBe('test')
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
      expect(value).toBe('new value')
    })
  })
})
