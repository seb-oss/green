import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/textarea/index.js'

import type { GdsTextarea } from '@sebgroup/green-core/components/textarea/index.js'

const html = htmlTemplateTagFactory(testingHtml)

for (const variant of ['default' /*, 'floating-label' */] as const) {
  describe('<gds-textarea>', () => {
    describe('Rendering', () => {
      it('should render a label', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        expect(labelEl).to.exist
        expect(labelEl?.textContent).to.contain('My label')
      })
    })

    describe('API', () => {
      it('should set the value', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        el.value = 'My value'
        expect(el.value).to.equal('My value')
      })

      it('should set the name', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            name="my-name"
          ></gds-textarea>`,
        )
        expect(el.name).to.equal('my-name')
      })

      it('should fire a change event when the value has changed and focus has shifted away', async () => {
        const el = await fixture<Ht>(
          html`<gds-textarea variant="${variant}"></gds-textarea><input />`,
        )
        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)
        el.focus()
        await sendKeys({ press: 'a' })
        await sendKeys({ press: 'Tab' })
        expect(changeSpy).to.have.been.calledOnce
      })

      it('should fire an input event when the value changes', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        const inputSpy = sinon.spy()
        el.addEventListener('input', inputSpy)
        el.focus()
        await el.updateComplete
        await sendKeys({ press: 'a' })
        expect(inputSpy).to.have.been.calledOnce
      })

      it('should show remaining characters when maxlength is set', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-textarea
            variant="${variant}"
            maxlength="10"
          ></gds-textarea>`,
        )
        const footer = el.shadowRoot?.querySelector(
          '[gds-element=gds-form-control-footer]',
        )
        const remainingCharactersBadgeEl = footer.shadowRoot?.querySelector(
          '[gds-element=gds-badge]',
        )

        expect(remainingCharactersBadgeEl).to.exist
        expect(remainingCharactersBadgeEl?.textContent).to.equal('10')

        el.value = 'My value'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).to.equal('2')

        el.value = 'My value longer'
        await el.updateComplete
        expect(remainingCharactersBadgeEl?.textContent).to.equal('-5')
      })

      it('should render a clear button when clearable is set and value is non-empty', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            clearable
            value="My value"
          ></gds-textarea>`,
        )
        const clearButtonEl = el.shadowRoot?.querySelector(
          '.field [label="Clear input"]',
        )
        expect(clearButtonEl).to.exist
      })
    })

    describe('Interactions', async () => {
      it('should clear the value when clicking on the clear button', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            clearable
            value="My value"
          ></gds-textarea>`,
        )
        const clearButtonEl = el.shadowRoot?.querySelector(
          '.field [label="Clear input"]',
        )
        clearButtonEl.click()
        expect(el.value).to.equal('')
      })
    })

    describe('Accessibility', () => {
      it('should pass axe smoketest', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
            value="Not empty"
            supporting-text="Text"
            maxlength="50"
            clearable
          >
            <gds-icon name="mail" slot="lead"></gds-icon>
            <gds-badge slot="trail" variant="information">kr</gds-badge>
            <span slot="extended-supporting-text">
              Extended supporting text goes here.
              <a href="#">Can contain links</a>
            </span>
          </gds-textarea>`,
        )
        await expect(el).to.be.accessible()
      })

      it('label should have a for attribute that matches the input id', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        const inputEl = el.shadowRoot?.querySelector('textarea')
        expect(labelEl?.getAttribute('for')).to.equal(inputEl?.id)
      })

      it('should have a aria-describedby attribute that matches the supporting text id', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            supporting-text="My supporting text"
          ></gds-textarea>`,
        )
        const inputEl = el.shadowRoot?.querySelector('textarea')
        const supportingTextEl =
          el.shadowRoot?.querySelector('#supporting-text')
        expect(inputEl?.getAttribute('aria-describedby')).to.equal(
          supportingTextEl?.id,
        )
      })

      it('should focus when clicking on the field', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        await clickOnElement(el.shadowRoot?.querySelector('.field') as Element)
        expect(document.activeElement).to.equal(el)
      })

      it('should focus when clicking on the label', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea
            variant="${variant}"
            label="My label"
          ></gds-textarea>`,
        )
        await clickOnElement(el.shadowRoot?.querySelector('label') as Element)
        expect(document.activeElement).to.equal(el)
      })

      it('should focus when calling focus()', async () => {
        const el = await fixture<GdsTextarea>(
          html`<gds-textarea variant="${variant}"></gds-textarea>`,
        )
        el.focus()
        expect(document.activeElement).to.equal(el)
      })
    })
  })
}
