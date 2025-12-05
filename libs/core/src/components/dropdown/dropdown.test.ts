import { expect } from '@esm-bundle/chai'
import {
  aTimeout,
  fixture,
  html as testingHtml,
  waitUntil,
} from '@open-wc/testing'
import { sendKeys } from '@web/test-runner-commands'
import sinon from 'sinon'

import type { GdsDropdown } from '@sebgroup/green-core/components/dropdown'

import { GdsOption } from '@sebgroup/green-core/primitives/listbox/option'
import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import { clickOnElement } from '../../utils/testing'

import '@sebgroup/green-core/components/dropdown'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-dropdown>', () => {
  it('should expose list of options through the `options` field', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await expect(el.options).to.have.lengthOf(3)
    await expect(el.options[0].textContent).to.equal('Option 1')
    await expect(el.options[1].textContent).to.equal('Option 2')
    await expect(el.options[2].textContent).to.equal('Option 3')
    await expect(el.options[0].value).to.equal('v1')
    await expect(el.options[1].value).to.equal('v2')
    await expect(el.options[2].value).to.equal('v3')
  })

  it('should be visible with the open attribute', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const popover = el.shadowRoot!.querySelector<HTMLElement>(
      getScopedTagName('gds-popover'),
    )!
    await expect(popover.hidden).to.be.false
  })

  it('should have the value of the first option by default', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await expect(el.value).to.equal('v1')
    await expect(el.displayValue).to.equal('Option 1')
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
    await expect(el.value).to.equal('v2')
    await waitUntil(() => el.displayValue === 'Option 2')
  })

  it('should have a label element connected to trigger if `label` attribute is set', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="DD Label">
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const label = el.shadowRoot!.querySelector<HTMLElement>('label')!
    const trigger = el.shadowRoot!.querySelector<HTMLElement>('button')!
    await expect(label).to.not.be.null
    await expect(label.textContent).to.equal('DD Label')
    await expect(label.getAttribute('for')).to.equal(trigger.id)
  })

  it('options marked `isPlaceholder` overrides default value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await expect(el.value).to.equal('v2')
    await expect(el.displayValue).to.equal('Option 2')
  })

  it('should expose isPlaceholder through `placeholder` field', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await expect(el.placeholder).to.not.be.null
    await expect(el.placeholder!.textContent).to.equal('Option 2')
  })
  it('should have undefined `isPlaceholder` if none is specified', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await expect(el.placeholder).to.be.undefined
  })

  it('should not show the placeholder in the list of options when opened', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    el.open = true
    await el.updateComplete

    await expect(el.options.length).to.equal(2)
    await expect(el.options[0].value).to.equal('v1')
    await expect(el.options[1].value).to.equal('v3')
    expect(el.placeholder).to.have.attribute('inert')
    expect(el.placeholder).to.have.attribute('hidden')
  })

  it('should support custom trigger content', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <div slot="trigger">Custom trigger</div>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const triggerSlot =
      el.shadowRoot!.querySelector<HTMLSlotElement>(`button slot`)!
    const triggerContent = triggerSlot.assignedNodes()[0] as HTMLElement
    await expect(triggerContent.textContent).to.equal('Custom trigger')
  })

  it('should emit `gds-ui-state` when opened and closed', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    const uiStateHandler = sinon.spy()
    el.addEventListener('gds-ui-state', uiStateHandler)

    //click to open
    clickOnElement(el)

    await waitUntil(() => uiStateHandler.calledOnce)

    // Hit escape to close
    await sendKeys({ press: 'Escape' })

    await waitUntil(() => uiStateHandler.calledTwice)
    await expect(uiStateHandler).to.have.been.calledTwice
  })

  it('should react to changes in contained light DOM', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    const option1 = el.querySelectorAll(getScopedTagName('gds-option'))[0]
    el.removeChild(option1)
    await el.updateComplete
    await expect(el.options.length).to.equal(2)
    await expect(el.options[0].value).to.equal('v2')
    await expect(el.value).to.equal('v2')
    await expect(el.displayValue).to.equal('Option 2')
  })

  it('should register as a form control and have a FormData value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <form id="test-form">
        <gds-dropdown name="test-dropdown">
          <gds-option value="v1">Option 1</gds-option>
          <gds-option value="v2">Option 2</gds-option>
          <gds-option value="v3">Option 3</gds-option>
        </gds-dropdown>
      </form>
    `)
    const form = document.getElementById('test-form')! as HTMLFormElement
    const formData = new FormData(form)
    await expect((form.elements[0] as GdsDropdown).value).to.equal('v1')
    await expect(formData.get('test-dropdown')).to.equal('v1')
  })

  it('popover should not be narrower than trigger', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option placeholder
          >This is a very long string that will cause the trigger to be very
          wide</gds-option
        >
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    const popover = el.shadowRoot
      ?.querySelector<HTMLElement>(getScopedTagName('gds-popover'))
      ?.shadowRoot?.querySelector<HTMLElement>('dialog')
    const trigger = el.shadowRoot!.querySelector<HTMLElement>('button')!
    await aTimeout(50)
    await expect(popover?.clientWidth).to.be.greaterThanOrEqual(
      trigger.clientWidth,
    )
  })

  it('should be the same width as the trigger when `sync-popover-width` attribute is set', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown sync-popover-width open>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
        <gds-option
          >This is a very long option text that will cause the popover to be
          very wide</gds-option
        >
      </gds-dropdown>
    `)
    await el.updateComplete
    const popover = el.shadowRoot
      ?.querySelector<HTMLElement>(getScopedTagName('gds-popover'))
      ?.shadowRoot?.querySelector<HTMLElement>('dialog')
    const field = el.test_getFieldElement()
    await aTimeout(50)
    expect(popover?.offsetWidth).to.equal(field.offsetWidth)
  })

  it('should limit the height of the popover to max-height attribute', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open max-height="50">
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
        <gds-option value="v4">Option 4</gds-option>
        <gds-option value="v5">Option 5</gds-option>
        <gds-option value="v6">Option 6</gds-option>
        <gds-option value="v7">Option 7</gds-option>
        <gds-option value="v8">Option 8</gds-option>
        <gds-option value="v9">Option 9</gds-option>
      </gds-dropdown>
    `)
    await el.updateComplete
    const popover = el.shadowRoot
      ?.querySelector<HTMLElement>(getScopedTagName('gds-popover'))
      ?.shadowRoot?.querySelector<HTMLElement>('dialog')
    await aTimeout(50)
    await expect(popover?.clientHeight).to.be.lessThanOrEqual(50)
  })

  it('should select complex value correctly with `compareWith` callback', async () => {
    const el = await fixture<GdsDropdown>(html`<gds-dropdown></gds-dropdown>`)
    ;[1, 2, 3].forEach((num) => {
      const o = document.createElement(
        getScopedTagName('gds-option'),
      ) as GdsOption
      o.value = { val: `test${num}` }
      o.innerHTML = `Test option ${num}`
      el.appendChild(o)
    })
    el.compareWith = (a, b) => a.val === b.val
    await el.updateComplete
    el.value = { val: 'test2' }
    await el.updateComplete
    await expect(el.options[0].selected).equal(false)
    await expect(el.options[1].selected).equal(true)
    await expect(el.options[2].selected).equal(false)
  })

  it('should select multiple complex values correctly with `compareWith` callback', async () => {
    const el = await fixture<GdsDropdown>(
      html`<gds-dropdown multiple></gds-dropdown>`,
    )
    ;[1, 2, 3, 4].forEach((num) => {
      const o = document.createElement(
        getScopedTagName('gds-option'),
      ) as GdsOption
      o.value = { val: `test${num}` }
      o.innerHTML = `Test option ${num}`
      el.appendChild(o)
    })
    el.compareWith = (a, b) => a.val === b.val
    await el.updateComplete
    el.value = [{ val: 'test2' }, { val: 'test4' }]
    await el.updateComplete
    await expect(el.options[0].selected).equal(false)
    await expect(el.options[1].selected).equal(true)
    await expect(el.options[2].selected).equal(false)
    await expect(el.options[3].selected).equal(true)
  })

  it('should pre-select correct option when options where added dynamically', async () => {
    const el = await fixture<GdsDropdown>(html`<gds-dropdown></gds-dropdown>`)
    el.value = 'test2'
    await el.updateComplete
    ;[1, 2, 3].forEach((num) => {
      const o = document.createElement(
        getScopedTagName('gds-option'),
      ) as GdsOption
      o.value = `test${num}`
      o.innerHTML = `Test option ${num}`
      el.appendChild(o)
    })
    await el.updateComplete
    await expect(el.options[0].selected).equal(false)
    await expect(el.options[1].selected).equal(true)
    await expect(el.options[2].selected).equal(false)
  })

  it('should update `displayValue` when the text in the selected option element is changed', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    el.value = 'v3'
    await el.updateComplete
    const option3 = el.querySelectorAll(getScopedTagName('gds-option'))[2]
    option3.textContent = 'Option 3 (updated)'
    await el.updateComplete
    await aTimeout(0)
    await expect(el.displayValue).to.equal('Option 3 (updated)')
  })

  it('should set gds-form-control-header class based on size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown" size="small"> </gds-dropdown>
    `)
    const gdsFormControlHeader = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-header]',
    )!

    await expect(gdsFormControlHeader.classList.contains('size-small')).to.be
      .true
  })

  it('should set gds-form-control-header class based on default size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown"> </gds-dropdown>
    `)
    const gdsFormControlHeader = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-header]',
    )!

    await expect(gdsFormControlHeader.classList.contains('size-medium')).to.be
      .true
  })

  it('should set gds-form-control-footer class based on size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown" size="small" .invalid=${true}>
      </gds-dropdown>
    `)
    const gdsFormControlFooter = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-footer]',
    )!

    await expect(gdsFormControlFooter.classList.contains('size-small')).to.be
      .true
  })

  it('should set gds-form-control-footer class based on default size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown" .invalid=${true}> </gds-dropdown>
    `)
    const gdsFormControlFooter = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-footer]',
    )!

    await expect(gdsFormControlFooter.classList.contains('size-medium')).to.be
      .true
  })

  it('field height should adapt to content in trigger', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <div slot="trigger" style="padding: 16px 0;">Custom trigger</div>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)
    const field = el.test_getFieldElement()
    await expect(field.clientHeight).to.be.greaterThan(
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--gds-sys-space-3xl',
        ),
      ),
    )
  })
})

describe('<gds-dropdown> interactions', () => {
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

    await expect(el.open).to.be.true
  })

  it('should select option on click', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option id="option2" value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await aTimeout(0)

    const option2 = document.getElementById('option2')!

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await el.updateComplete
    await sendKeys({ press: 'Enter' })
    await el.updateComplete

    await waitUntil(() => el.value === 'v2')
  })

  it('should emit `change` event when option is selected', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown open>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option id="option2" value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await aTimeout(0)

    const changeHandler = sinon.spy()
    el.addEventListener('change', changeHandler)

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await el.updateComplete
    await sendKeys({ press: 'Enter' })
    await el.updateComplete

    await waitUntil(() => changeHandler.calledOnce)

    expect(changeHandler).to.have.been.calledOnce
    await expect(changeHandler.firstCall.args[0].detail.value).to.equal('v2')
  })

  it('should clear when clear button is clicked', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown clearable value="v2">
        <gds-option isplaceholder>None</gds-option>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option id="option2" value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await aTimeout(0)

    const clearButton =
      el.shadowRoot!.querySelector<HTMLElement>('[id="clear-btn"]')!
    await clickOnElement(clearButton)

    await waitUntil(() => el.value === undefined)
  })

  it('should emit `gds-input-cleared`, `change` and `input` events when clear button is clicked', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown clearable value="v2">
        <gds-option isplaceholder>None</gds-option>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option id="option2" value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await aTimeout(0)

    const clearHandler = sinon.spy()
    const changeHandler = sinon.spy()
    const inputHandler = sinon.spy()
    el.addEventListener('gds-input-cleared', clearHandler)
    el.addEventListener('change', changeHandler)
    el.addEventListener('input', inputHandler)

    const clearButton =
      el.shadowRoot!.querySelector<HTMLElement>('[id="clear-btn"]')!
    await clickOnElement(clearButton)

    await waitUntil(() => clearHandler.calledOnce)
    await waitUntil(() => changeHandler.calledOnce)
    await waitUntil(() => inputHandler.calledOnce)

    expect(clearHandler).to.have.been.calledOnce
    expect(changeHandler).to.have.been.calledOnce
    expect(inputHandler).to.have.been.calledOnce
    await expect(changeHandler.firstCall.args[0].detail.value).to.equal(
      undefined,
    )
  })

  // Disabled because this test is unreliable. "sendMouse" does not produce a correct PointerEvent event.
  // it('should close on click outside', async () => {
  //   const el = await fixture<GdsDropdown>(html`
  //     <gds-dropdown open>
  //       <gds-option>Option 1</gds-option>
  //       <gds-option>Option 2</gds-option>
  //       <gds-option>Option 3</gds-option>
  //     </gds-dropdown>
  //   `)

  //   await aTimeout(0)
  //   await sendMouse({ type: 'click', position: [10, 10] })
  //   await el.updateComplete

  //   await expect(el.open).to.be.false
  // })
})

describe('<gds-dropdown> keyboard navigation', () => {
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

    await expect(el.open).to.be.true
  })

  it('should focus option using keyboard navigation', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const secondOption = el.querySelectorAll(getScopedTagName('gds-option'))[1]

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)

    await expect(document.activeElement).to.equal(secondOption)
  })

  it('should focus option using keyboard navigation when opened with click', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const trigger = el.shadowRoot!.querySelector<HTMLElement>('button')!

    await clickOnElement(trigger, 'center')
    await el.updateComplete

    await expect(el.open).to.be.true

    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)
    await sendKeys({ press: 'Enter' })
    await aTimeout(50)

    await expect(el.value).to.equal('v2')
    await expect(el.open).to.be.false
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
    await aTimeout(0)
    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)
    await sendKeys({ press: 'Enter' })
    await aTimeout(50)

    await expect(el.value).to.equal('v2')
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
    await aTimeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)
    await sendKeys({ press: 'Space' })
    await aTimeout(50)

    await expect(el.value).to.equal('v2')
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

    await expect(el.open).to.be.false
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

    await expect(searchField).to.not.be.null
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
      el.shadowRoot!.querySelector<HTMLInputElement>('input[type=text]')!

    searchField.focus()
    await sendKeys({ type: '2' })
    await el.updateComplete

    const options = el.querySelectorAll(
      `${getScopedTagName('gds-option')}:not([inert])`,
    )

    await expect(options.length).to.equal(1)
    await expect(options[0].textContent).to.equal('Option 2')
  })

  it('should should support custom `searchFilter`callback', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown searchable open>
        <gds-option>foo bar baz</gds-option>
        <gds-option>qux fred thud</gds-option>
        <gds-option>waldo corge plugh</gds-option>
      </gds-dropdown>
    `)

    el.searchFilter = (q, o) =>
      o.innerHTML
        .split(' ')
        .some((o_part) => q.split(' ').some((q_part) => q_part === o_part))

    const searchField =
      el.shadowRoot!.querySelector<HTMLInputElement>('input[type=text]')!

    searchField.focus()
    await sendKeys({ type: 'qux thud' })
    await el.updateComplete

    const options = el.querySelectorAll(
      `${getScopedTagName('gds-option')}:not([inert])`,
    )

    await expect(options.length).to.equal(1)
    await expect(options[0].textContent).to.equal('qux fred thud')
  })
})

describe('<gds-dropdown multiple>', () => {
  it('should support multiple selections', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    el.focus()
    await sendKeys({ press: 'ArrowDown' })
    await aTimeout(50)
    await sendKeys({ press: 'ArrowDown' })
    await el.updateComplete
    await sendKeys({ press: 'Space' })
    await el.updateComplete
    await sendKeys({ press: 'ArrowDown' })
    await el.updateComplete
    await sendKeys({ press: 'Space' })
    await el.updateComplete

    await expect(el.value.toString()).to.equal(['v2', 'v3'].toString())
    await expect(el.displayValue).to.equal('Option 2, Option 3')
  })

  // Disable for now because of flakiness in CI
  // it('should select multiple options on click', async () => {
  //   const el = await fixture<GdsDropdown>(html`
  //     <gds-dropdown multiple>
  //       <gds-option value="v1">Option 1</gds-option>
  //       <gds-option value="v2">Option 2</gds-option>
  //       <gds-option value="v3">Option 3</gds-option>
  //     </gds-dropdown>
  //   `)

  //   const triggerButton = el.shadowRoot!.querySelector<HTMLElement>(getScopedTagName(getScopedTagName('gds-button')))!
  //   const triggerButton = el.shadowRoot!.querySelector<HTMLElement>(getScopedTagName('gds-button'))!

  //   await clickOnElement(triggerButton, 'center')
  //   await el.updateComplete

  //   const option2 = el.querySelectorAll(getScopedTagName('gds-option'))[1]
  //   const option3 = el.querySelectorAll(getScopedTagName('gds-option'))[2]

  //   await clickOnElement(option2, 'center')
  //   await el.updateComplete
  //   await clickOnElement(option3, 'center')
  //   await el.updateComplete

  //   await aTimeout(10)

  //   await expect(el.value.toString()).to.equal(['v2', 'v3'].toString())
  // })

  it('should remain open after clicking an option', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple open>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await aTimeout(0)

    const option2 = el.querySelectorAll(getScopedTagName('gds-option'))[1]

    await clickOnElement(option2, 'center')
    await el.updateComplete

    await expect(el.open).to.equal(true)
  })

  it('should not have a default selection', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    await expect(el.displayValue).to.equal('')
  })

  it('should support isPlaceholder option', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple>
        <gds-option isPlaceholder>Select values</gds-option>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    await expect(el.displayValue).to.equal('Select values')
  })
})

describe('<gds-dropdown combobox>', () => {
  it('should support combobox mode', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown combobox>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const comboInputEl = el.shadowRoot!.querySelector<HTMLInputElement>(
      'input[role=combobox]',
    )

    await expect(el.combobox).to.be.true
    await expect(comboInputEl).to.not.be.null
  })

  it('should update value on input', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown combobox>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const comboInputEl = el.shadowRoot!.querySelector<HTMLInputElement>(
      'input[role=combobox]',
    )

    comboInputEl!.value = 'v2'
    comboInputEl!.dispatchEvent(new Event('input'))

    await expect(el.value).to.equal('v2')
  })

  it('should emit `input` event on input', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown combobox>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const comboInputEl = el.shadowRoot!.querySelector<HTMLInputElement>(
      'input[role=combobox]',
    )

    const inputHandler = sinon.spy()
    el.addEventListener('input', inputHandler)

    comboInputEl!.value = 'v2'
    comboInputEl!.dispatchEvent(new Event('input'))

    await waitUntil(() => inputHandler.calledOnce)
    await expect(inputHandler).to.have.been.calledOnce
  })

  it('should update displayValue on input', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown combobox>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    const comboInputEl = el.shadowRoot!.querySelector<HTMLInputElement>(
      'input[role=combobox]',
    )

    comboInputEl!.value = 'v2'
    comboInputEl!.dispatchEvent(new Event('input'))

    await aTimeout(0)

    await expect(el.displayValue).to.equal('Option 2')
  })

  it('should filter options on input', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown combobox open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)

    const comboInputEl = el.shadowRoot!.querySelector<HTMLInputElement>(
      'input[role=combobox]',
    )

    comboInputEl!.value = '2'
    comboInputEl!.dispatchEvent(new Event('input'))

    const options = el.querySelectorAll(
      `${getScopedTagName('gds-option')}:not([inert])`,
    )

    await expect(options.length).to.equal(1)
    await expect(options[0].textContent).to.equal('Option 2')
  })

  it('should be possible to cancel the gds-filter-input event to customize filtering', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown combobox open>
        <gds-option>Option 1</gds-option>
        <gds-option>Option 2</gds-option>
        <gds-option>Option 3</gds-option>
      </gds-dropdown>
    `)

    const comboInputEl = el.shadowRoot!.querySelector<HTMLInputElement>(
      'input[role=combobox]',
    )

    el.addEventListener('gds-filter-input', (e: any) => {
      e.preventDefault()
      el.options[0].parentElement!.removeChild(el.options[0])
      el.options[1].parentElement!.removeChild(el.options[1])
    })

    comboInputEl!.value = '2'
    comboInputEl!.dispatchEvent(new Event('input'))

    await aTimeout(0)

    const options = el.querySelectorAll(
      `${getScopedTagName('gds-option')}:not([inert])`,
    )

    await expect(options.length).to.equal(1)
  })
})

describe('<gds-dropdown> accessibility', () => {
  it('pass axe smoketest', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown">
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    await expect(el).to.be.accessible()
  })

  it('should have a label for the trigger', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown">
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    const trigger = el.shadowRoot!.querySelector<HTMLElement>('button')!
    const label = el.shadowRoot!.querySelector<HTMLElement>('label')!

    await expect(label.getAttribute('for')).to.equal(trigger.id)
  })
})
