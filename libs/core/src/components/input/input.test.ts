import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'
import { time } from 'console'

import { clickOnElement, timeout } from '../../utils/testing'
import '../../../../../dist/libs/core/src/index.js'
import {
  htmlTemplateTagFactory,
  getScopedTagName,
} from '../../../../../dist/libs/core/src/index.js'

import type { GdsInput } from './input'

const html = htmlTemplateTagFactory(testingHtml)

for (const variant of ['default', 'simplified'] as const) {
  describe('<gds-input>', () => {
    describe('Rendering', () => {
      it('should render a label', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`
        )
        const labelEl = el.shadowRoot?.querySelector('label')

        expect(labelEl).to.exist
        expect(labelEl?.textContent).to.contain('My label')
      })

      it('should pass through the type attribute', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" type="email"></gds-input>`
        )
        const inputEl = el.shadowRoot?.querySelector('input')
        expect(inputEl?.type).to.equal('email')
      })
    })

    describe('API', () => {
      it('should set the value', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`
        )
        el.value = 'My value'

        expect(el.value).to.equal('My value')
      })

      it('should set the name', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" name="my-name"></gds-input>`
        )
        expect(el.name).to.equal('my-name')
      })

      it('should fire a change event when the value has changed and focus has shifted away', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`
        )

        const changeSpy = sinon.spy()
        el.addEventListener('change', changeSpy)

        el.focus()
        await el.updateComplete
        await sendKeys({ press: 'a' })
        await sendKeys({ press: 'Tab' })
        await el.updateComplete

        expect(changeSpy).to.have.been.calledOnce
      })

      it('should fire an input event when the value changes', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`
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
          html`<gds-input variant="${variant}" maxlength="10"></gds-input>`
        )

        const remainingCharactersBadgeEl =
          el.shadowRoot?.querySelector('.foot gds-badge')

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
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            clearable
            value="My value"
          ></gds-input>`
        )

        const clearButtonEl = el.shadowRoot?.querySelector(
          '.field [label="Clear input"]'
        )

        expect(clearButtonEl).to.exist
      })

      it('should fire a gds-ui-state event when the extended supporting text is toggled', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`
        )

        const stateChangeSpy = sinon.spy()
        el.addEventListener('gds-ui-state', stateChangeSpy)

        const supportingTextBtnEl = el.shadowRoot?.querySelector(
          'gds-button[label="Show extended supporting text"]'
        )

        await clickOnElement(supportingTextBtnEl as Element)

        expect(stateChangeSpy).to.have.been.calledOnce
      })
    })

    describe('Interactions', async () => {
      it('should clear the value when clicking on the clear button', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            clearable
            value="My value"
          ></gds-input>`
        )

        const clearButtonEl = el.shadowRoot?.querySelector(
          '.field [label="Clear input"]'
        )

        await clickOnElement(clearButtonEl as Element)

        expect(el.value).to.equal('')
      })
    })

    describe('Accessibility', () => {
      it('should pass axe smoketest', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            label="My label"
            value="Not empty"
            supporting-text="Text"
            maxlength="50"
            clearable
          >
            <gds-icon name="mail" slot="lead"></gds-icon>
            <gds-badge slot="trail" variant="surface">kr</gds-badge>
            <span slot="extended-supporting-text">
              Extended supporting text goes here.
              <a href="#">Can contain links</a>
            </span>
          </gds-input>`
        )

        await expect(el).to.be.accessible()
      })

      it('label should have a for attribute that matches the input id', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`
        )
        const labelEl = el.shadowRoot?.querySelector('label')
        const inputEl = el.shadowRoot?.querySelector('input')

        expect(labelEl?.getAttribute('for')).to.equal(inputEl?.id)
      })

      it('should have a aria-describedby attribute that matches the supporting text id', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input
            variant="${variant}"
            supporting-text="My supporting text"
          ></gds-input>`
        )
        const inputEl = el.shadowRoot?.querySelector('input')
        const supportingTextEl =
          el.shadowRoot?.querySelector('.supporting-text')

        expect(inputEl?.getAttribute('aria-describedby')).to.equal(
          supportingTextEl?.id
        )
      })

      it('should focus when clicking on the field', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`
        )

        await clickOnElement(el.shadowRoot?.querySelector('.field') as Element)

        expect(document.activeElement).to.equal(el)
      })

      it('should focus when clicking on the label', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}" label="My label"></gds-input>`
        )

        await clickOnElement(el.shadowRoot?.querySelector('label') as Element)

        expect(document.activeElement).to.equal(el)
      })

      it('should focus when calling focus()', async () => {
        const el = await fixture<GdsInput>(
          html`<gds-input variant="${variant}"></gds-input>`
        )

        el.focus()

        expect(document.activeElement).to.equal(el)
      })
    })
  })
}
