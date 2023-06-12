import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
import { sendKeys, sendMouse } from '@web/test-runner-commands'
import { clickOnElement, timeout } from '../../utils/testing'
import sinon from 'sinon'

import '../../../../../dist/libs/core/src/index.js'
import type { GdsDropdown } from './dropdown'

describe('<gds-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const popover = el.shadowRoot!.querySelector<HTMLElement>('gds-popover')!

    expect(popover.hidden).to.be.false
  })

  it('should have the value of the first option by default', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.value).to.equal('v1')
    expect(el.displayValue).to.equal('Option 1')
  })

  it('should select the correct option based on value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    el.value = 'v2'
    await el.updateComplete

    expect(el.value).to.equal('v2')
    expect(el.displayValue).to.equal('Option 2')
  })

  it('options marked `placeholder` overrides default value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" placeholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.value).to.equal('v2')
    expect(el.displayValue).to.equal('Option 2')
  })

  it('options marked `placeholder` overrides default value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" placeholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.value).to.equal('v2')
    expect(el.displayValue).to.equal('Option 2')
  })

  it('should emit `gds-ui-state` when opened and closed', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" placeholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const uiStateHandler = sinon.spy()

    el.addEventListener('gds-ui-state', uiStateHandler)
    el.open = true

    await waitUntil(() => uiStateHandler.calledOnce)
    el.open = false

    await waitUntil(() => uiStateHandler.calledTwice)

    expect(uiStateHandler).to.have.been.calledTwice
  })

  it('should open on arrow navigation', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await el.updateComplete

    expect(el.open).to.be.true
  })

  it('should focus option using keyboard navigation', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const secondOption = el.querySelectorAll('gds-option')[1]

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await timeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await timeout(50)

    expect(document.activeElement).to.equal(secondOption)
  })

  it('should select option with Enter key', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await timeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await timeout(50)
    await sendKeys({ press: 'Enter' })
    await timeout(50)

    expect(el.value).to.equal('v2')
  })

  it('should select option with Space key', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await timeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await timeout(50)
    await sendKeys({ press: 'Space' })
    await timeout(50)

    expect(el.value).to.equal('v2')
  })

  it('should open on click', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)

    const trigger = el.shadowRoot!.querySelector<HTMLElement>('button')!

    await clickOnElement(trigger, 'center')
    await el.updateComplete

    expect(el.open).to.be.true
  })

  it('should select option on click', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    const option2 = el.querySelectorAll('gds-option')[1]

    await clickOnElement(option2, 'center')
    await el.updateComplete

    expect(el.value).to.equal('v2')
  })

  it('should close on ESC', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)

    el.focus()
    await sendKeys({ press: 'Escape' })
    await el.updateComplete

    expect(el.open).to.be.false
  })

  it('should close on click outside', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)

    await sendMouse({ type: 'click', position: [0, 0] })
    await el.updateComplete

    expect(el.open).to.be.false
  })

  it('should close when focusing outside', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
      <button id="test-button">Test</button>
    `)
    const testButton = document.getElementById('test-button')!

    el.focus()
    await el.updateComplete

    testButton.focus()
    await el.updateComplete

    expect(el.open).to.be.false
  })
})

describe('<gds-dropdown searchable>', () => {
  it('should display a search field', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown searchable open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const searchField =
      el.shadowRoot!.querySelector<HTMLElement>('input[type=text]')!

    expect(searchField).to.not.be.null
  })

  it('should filter options when typing in search field', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown searchable open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const searchField =
      el.shadowRoot!.querySelector<HTMLElement>('input[type=text]')!

    searchField.focus()
    await sendKeys({ type: '2' })
    await el.updateComplete

    const options = el.querySelectorAll('gds-option:not([aria-hidden="true"])')

    expect(options.length).to.equal(1)
    expect(options[0].textContent).to.equal('Option 2')
  })

  it('should filter options when typing in search field', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown searchable open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const searchField =
      el.shadowRoot!.querySelector<HTMLElement>('input[type=text]')!

    searchField.focus()
    await sendKeys({ type: '2' })
    await el.updateComplete

    const options = el.querySelectorAll('gds-option:not([aria-hidden="true"])')

    expect(options.length).to.equal(1)
    expect(options[0].textContent).to.equal('Option 2')
  })
})

describe('<gds-dropdown multiple>', () => {
  it('should support multiple selections', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple open>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const option2 = el.querySelectorAll('gds-option')[1]
    const option3 = el.querySelectorAll('gds-option')[2]

    await clickOnElement(option2, 'center')
    await el.updateComplete

    await clickOnElement(option3, 'center')
    await el.updateComplete

    expect(el.value.toString()).to.equal(['v2', 'v3'].toString())
    expect(el.displayValue).to.equal('Option 2, Option 3')
  })

  it('should not have a default selection', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.displayValue).to.equal('')
  })

  it('should suppoert placeholder option', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple>
        <gds-option placeholder>Select values</gds-option>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.displayValue).to.equal('Select values')
  })
})
