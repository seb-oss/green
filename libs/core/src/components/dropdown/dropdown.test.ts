import { userEvent } from '@vitest/browser/context'
import { afterEach, describe, expect, it, vi } from 'vitest'

import type { GdsDropdown } from '@sebgroup/green-core/components/dropdown'

import { GdsOption } from '@sebgroup/green-core/primitives/listbox/option'
import {
  getScopedTagName,
  htmlTemplateTagFactory,
} from '@sebgroup/green-core/scoping'
import {
  aTimeout,
  clickOnElement,
  fixture,
  setViewportSize,
  html as testingHtml,
  waitUntil,
} from '../../utils/testing'

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
    await expect(el.options).toHaveLength(3)
    expect(el.options[0].textContent).toBe('Option 1')
    expect(el.options[1].textContent).toBe('Option 2')
    expect(el.options[2].textContent).toBe('Option 3')
    expect(el.options[0].value).toBe('v1')
    expect(el.options[1].value).toBe('v2')
    expect(el.options[2].value).toBe('v3')
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
    expect(popover.hidden).toBe(false)
  })

  it('should have the value of the first option by default', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    expect(el.value).toBe('v1')
    expect(el.displayValue).toBe('Option 1')
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
    expect(el.value).toBe('v2')
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
    expect(label).not.toBeNull()
    expect(label.textContent).toBe('DD Label')
    expect(label.getAttribute('for')).toBe(trigger.id)
  })

  it('options marked `isPlaceholder` overrides default value', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    expect(el.value).toBe('v2')
    expect(el.displayValue).toBe('Option 2')
  })

  it('should expose isPlaceholder through `placeholder` field', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    expect(el.placeholder).not.toBeNull()
    expect(el.placeholder!.textContent).toBe('Option 2')
  })
  it('should have undefined `isPlaceholder` if none is specified', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    expect(el.placeholder).toBeUndefined()
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

    expect(el.options.length).toBe(2)
    expect(el.options[0].value).toBe('v1')
    expect(el.options[1].value).toBe('v3')
    expect(el.placeholder).toHaveAttribute('inert')
    expect(el.placeholder).toHaveAttribute('hidden')
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
    expect(triggerContent.textContent).toBe('Custom trigger')
  })

  it('should emit `gds-ui-state` when opened and closed', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2" isPlaceholder>Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)
    const uiStateHandler = vi.fn()
    el.addEventListener('gds-ui-state', uiStateHandler)

    //click to open
    clickOnElement(el)

    await waitUntil(() => uiStateHandler.mock.calls.length === 1)

    // Hit escape to close
    await userEvent.keyboard('{Escape}')

    await waitUntil(() => uiStateHandler.mock.calls.length === 2)
    expect(uiStateHandler).toHaveBeenCalledTimes(2)
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
    expect(el.options.length).toBe(2)
    expect(el.options[0].value).toBe('v2')
    expect(el.value).toBe('v2')
    expect(el.displayValue).toBe('Option 2')
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
    expect((form.elements[0] as GdsDropdown).value).toBe('v1')
    expect(formData.get('test-dropdown')).toBe('v1')
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
    expect(popover?.clientWidth).toBeGreaterThanOrEqual(trigger.clientWidth)
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
    expect(popover?.offsetWidth).toBe(field.offsetWidth)
  })

  it('should limit the height of the popover to max-height attribute', async () => {
    const restore = await setViewportSize(1024, 768)
    try {
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
      expect(popover?.clientHeight).toBeLessThanOrEqual(50)
    } finally {
      restore()
    }
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
    el.compareWith = (a: any, b: any) => a.val === b.val
    await el.updateComplete
    el.value = { val: 'test2' }
    await el.updateComplete
    expect(el.options[0].selected).toBe(false)
    expect(el.options[1].selected).toBe(true)
    expect(el.options[2].selected).toBe(false)
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
    el.compareWith = (a: any, b: any) => a.val === b.val
    await el.updateComplete
    el.value = [{ val: 'test2' }, { val: 'test4' }]
    await el.updateComplete
    expect(el.options[0].selected).toBe(false)
    expect(el.options[1].selected).toBe(true)
    expect(el.options[2].selected).toBe(false)
    expect(el.options[3].selected).toBe(true)
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
    expect(el.displayValue).toBe('Option 3 (updated)')
  })

  it('should set gds-form-control-header class based on size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown" size="small"> </gds-dropdown>
    `)
    const gdsFormControlHeader = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-header]',
    )!

    expect(gdsFormControlHeader.classList.contains('size-small')).toBe(true)
  })

  it('should set gds-form-control-header class based on default size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown"> </gds-dropdown>
    `)
    const gdsFormControlHeader = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-header]',
    )!

    expect(gdsFormControlHeader.classList.contains('size-medium')).toBe(true)
  })

  it('should set gds-form-control-footer class based on size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown" size="small" .invalid=${true}>
      </gds-dropdown>
    `)
    const gdsFormControlFooter = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-footer]',
    )!

    expect(gdsFormControlFooter.classList.contains('size-small')).toBe(true)
  })

  it('should set gds-form-control-footer class based on default size', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown label="My dropdown" .invalid=${true}> </gds-dropdown>
    `)
    const gdsFormControlFooter = el.shadowRoot!.querySelector<HTMLElement>(
      '[gds-element=gds-form-control-footer]',
    )!

    expect(gdsFormControlFooter.classList.contains('size-medium')).toBe(true)
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
    expect(field.clientHeight).toBeGreaterThan(
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

    expect(el.open).toBe(true)
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
    await userEvent.keyboard('{ArrowDown}')
    await el.updateComplete
    await userEvent.keyboard('{Enter}')
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

    const changeHandler = vi.fn()
    el.addEventListener('change', changeHandler)

    el.focus()
    await userEvent.keyboard('{ArrowDown}')
    await el.updateComplete
    await userEvent.keyboard('{Enter}')
    await el.updateComplete

    await waitUntil(() => changeHandler.mock.calls.length === 1)

    expect(changeHandler).toHaveBeenCalledOnce()
    expect(changeHandler.mock.calls[0][0].detail.value).toBe('v2')
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

    const clearHandler = vi.fn()
    const changeHandler = vi.fn()
    const inputHandler = vi.fn()
    el.addEventListener('gds-input-cleared', clearHandler)
    el.addEventListener('change', changeHandler)
    el.addEventListener('input', inputHandler)

    const clearButton =
      el.shadowRoot!.querySelector<HTMLElement>('[id="clear-btn"]')!
    await clickOnElement(clearButton)

    await waitUntil(() => clearHandler.mock.calls.length === 1)
    await waitUntil(() => changeHandler.mock.calls.length === 1)
    await waitUntil(() => inputHandler.mock.calls.length === 1)

    expect(clearHandler).toHaveBeenCalledOnce()
    expect(changeHandler).toHaveBeenCalledOnce()
    expect(inputHandler).toHaveBeenCalledOnce()
    expect(changeHandler.mock.calls[0][0].detail.value).toBe(undefined)
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
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => el.open === true)
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
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => el.open === true)
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => document.activeElement === secondOption)
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
    await waitUntil(() => el.open === true)

    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')
    await waitUntil(() => el.value === 'v2' && el.open === false)
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
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => el.open === true)
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => document.activeElement === el.options[1])
    await userEvent.keyboard('{Enter}')
    await el.updateComplete

    expect(el.value).toBe('v2')
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
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => el.open === true)
    await userEvent.keyboard('{ArrowDown}')
    await waitUntil(() => document.activeElement === el.options[1])
    await userEvent.keyboard(' ')
    await waitUntil(() => el.value === 'v2')
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
    await userEvent.keyboard('{Escape}')
    await waitUntil(() => el.open === false)
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

    expect(searchField).not.toBeNull()
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
    await userEvent.keyboard('2')
    await el.updateComplete

    const options = el.querySelectorAll(
      `${getScopedTagName('gds-option')}:not([inert])`,
    )

    expect(options.length).toBe(1)
    expect(options[0].textContent).toBe('Option 2')
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
    await userEvent.keyboard('qux thud')
    await el.updateComplete

    const options = el.querySelectorAll(
      `${getScopedTagName('gds-option')}:not([inert])`,
    )

    expect(options.length).toBe(1)
    expect(options[0].textContent).toBe('qux fred thud')
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
    await userEvent.keyboard('{ArrowDown}')
    await aTimeout(50)
    await userEvent.keyboard('{ArrowDown}')
    await el.updateComplete
    await userEvent.keyboard(' ')
    await el.updateComplete
    await userEvent.keyboard('{ArrowDown}')
    await el.updateComplete
    await userEvent.keyboard(' ')
    await el.updateComplete

    expect(el.value.toString()).toBe(['v2', 'v3'].toString())
    expect(el.displayValue).toBe('Option 2, Option 3')
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

    expect(el.open).toBe(true)
  })

  it('should not have a default selection', async () => {
    const el = await fixture<GdsDropdown>(html`
      <gds-dropdown multiple>
        <gds-option value="v1">Option 1</gds-option>
        <gds-option value="v2">Option 2</gds-option>
        <gds-option value="v3">Option 3</gds-option>
      </gds-dropdown>
    `)

    expect(el.displayValue).toBe('')
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

    expect(el.displayValue).toBe('Select values')
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

    expect(el.combobox).toBe(true)
    expect(comboInputEl).not.toBeNull()
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

    expect(el.value).toBe('v2')
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

    const inputHandler = vi.fn()
    el.addEventListener('input', inputHandler)

    comboInputEl!.value = 'v2'
    comboInputEl!.dispatchEvent(new Event('input'))

    await waitUntil(() => inputHandler.mock.calls.length === 1)
    expect(inputHandler).toHaveBeenCalledOnce()
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

    expect(el.displayValue).toBe('Option 2')
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

    expect(options.length).toBe(1)
    expect(options[0].textContent).toBe('Option 2')
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

    expect(options.length).toBe(1)
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
    await expect(el).toBeAccessible()
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

    expect(label.getAttribute('for')).toBe(trigger.id)
  })
})
