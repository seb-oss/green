import { describe, expect, it, vi } from 'vitest'

import { GdsElement } from './gds-element'
import { gdsCustomElement, htmlTemplateTagFactory } from './scoping'
import { fixture, html as testingHtml } from './utils/testing'

const html = htmlTemplateTagFactory(testingHtml)

@gdsCustomElement('gds-test-component')
class TestComponent extends GdsElement {}

TestComponent.define()

describe('GdsElement', () => {
  it('should define the custom element', () => {
    expect(TestComponent.isDefined).toBe(true)
  })

  it('should set gdsElementName attribute on connectedCallback', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    expect(el.getAttribute('gds-element')).toBe('gds-test-component')
    el.parentNode!.removeChild(el)
  })

  it('should dispatch gds-element-disconnected event on disconnectedCallback', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = vi.fn()
    el.addEventListener('gds-element-disconnected', spy)
    el.parentNode!.removeChild(el)
    expect(spy).toHaveBeenCalledOnce()
  })

  it('should have a default style expression base selector', () => {
    expect(TestComponent.styleExpressionBaseSelector).toBe(':host')
  })

  it('should dispatch standard events in both default and pascal case versions', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = vi.fn()
    const spyPascal = vi.fn()

    el.addEventListener('test-event', spy)
    el.addEventListener('TestEvent', spyPascal)

    el.dispatchStandardEvent('test-event')

    expect(spy).toHaveBeenCalledOnce()
    expect(spyPascal).toHaveBeenCalledOnce()
    expect(spy.mock.calls[0][0].type).toBe('test-event')
    expect(spyPascal.mock.calls[0][0].type).toBe('TestEvent')
  })

  it('should dispatch custom events in both default and pascal case versions', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = vi.fn()
    const spyPascal = vi.fn()
    el.addEventListener('custom-event', spy)
    el.addEventListener('CustomEvent', spyPascal)
    el.dispatchCustomEvent('custom-event', { detail: { foo: 'bar' } })
    expect(spy).toHaveBeenCalledOnce()
    expect(spyPascal).toHaveBeenCalledOnce()
    expect(spy.mock.calls[0][0].type).toBe('custom-event')
    expect(spyPascal.mock.calls[0][0].type).toBe('CustomEvent')
    expect(spy.mock.calls[0][0].detail).toEqual({ foo: 'bar' })
    expect(spyPascal.mock.calls[0][0].detail).toEqual({ foo: 'bar' })
  })

  it('should dispatch events that are cancelable', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = vi.fn()
    el.addEventListener('cancelable-event', (event) => {
      event.preventDefault()
      spy()
    })
    const event = new CustomEvent('cancelable-event', {
      bubbles: true,
      cancelable: true,
    })
    el.dispatchEvent(event)
    expect(spy).toHaveBeenCalledOnce()
    expect(event.defaultPrevented).toBe(true)
  })
})
