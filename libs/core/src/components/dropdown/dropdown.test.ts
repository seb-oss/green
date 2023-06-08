import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
import sinon from 'sinon'

import '../../../../../dist/libs/core/src/index.js'
import type { GdsDropdown } from './dropdown'

describe('<gds-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture(html`
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

    expect(el.value).to.be.equal('v1')
    expect(el.displayValue).to.be.equal('Option 1')
  })

  it('options marked `placeholder` overrides default value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" placeholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.value).to.be.equal('v2')
    expect(el.displayValue).to.be.equal('Option 2')
  })

  it('options marked `placeholder` overrides default value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" placeholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.value).to.be.equal('v2')
    expect(el.displayValue).to.be.equal('Option 2')
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
})
