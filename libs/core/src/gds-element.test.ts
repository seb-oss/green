import { expect } from '@esm-bundle/chai'
import { fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import { GdsElement } from './gds-element'
import { gdsCustomElement, htmlTemplateTagFactory } from './scoping'

const html = htmlTemplateTagFactory(testingHtml)

@gdsCustomElement('gds-test-component')
class TestComponent extends GdsElement {}

TestComponent.define()

describe('GdsElement', () => {
  it('should define the custom element', () => {
    expect(TestComponent.isDefined).to.be.true
  })

  it('should set gdsElementName attribute on connectedCallback', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    expect(el.getAttribute('gds-element')).to.equal('gds-test-component')
    el.parentNode!.removeChild(el)
  })

  it('should dispatch gds-element-disconnected event on disconnectedCallback', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = sinon.spy()
    el.addEventListener('gds-element-disconnected', spy)
    el.parentNode!.removeChild(el)
    expect(spy.calledOnce).to.be.true
  })

  it('should have a default style expression base selector', () => {
    expect(TestComponent.styleExpressionBaseSelector).to.equal(':host')
  })

  it('should dispatch standard events in both default and pascal case versions', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = sinon.spy()
    const spyPascal = sinon.spy()

    el.addEventListener('test-event', spy)
    el.addEventListener('TestEvent', spyPascal)

    el.dispatchStandardEvent('test-event')

    expect(spy.calledOnce).to.be.true
    expect(spyPascal.calledOnce).to.be.true
    expect(spy.firstCall.args[0].type).to.equal('test-event')
    expect(spyPascal.firstCall.args[0].type).to.equal('TestEvent')
  })

  it('should dispatch custom events in both default and pascal case versions', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = sinon.spy()
    const spyPascal = sinon.spy()
    el.addEventListener('custom-event', spy)
    el.addEventListener('CustomEvent', spyPascal)
    el.dispatchCustomEvent('custom-event', { detail: { foo: 'bar' } })
    expect(spy.calledOnce).to.be.true
    expect(spyPascal.calledOnce).to.be.true
    expect(spy.firstCall.args[0].type).to.equal('custom-event')
    expect(spyPascal.firstCall.args[0].type).to.equal('CustomEvent')
    expect(spy.firstCall.args[0].detail).to.deep.equal({ foo: 'bar' })
    expect(spyPascal.firstCall.args[0].detail).to.deep.equal({ foo: 'bar' })
  })

  it('should dispatch events that are cancelable', async () => {
    const el = await fixture<TestComponent>(html`
      <gds-test-component></gds-test-component>
    `)
    const spy = sinon.spy()
    el.addEventListener('cancelable-event', (event) => {
      event.preventDefault()
      spy()
    })
    const event = new CustomEvent('cancelable-event', {
      bubbles: true,
      cancelable: true,
    })
    el.dispatchEvent(event)
    expect(spy.calledOnce).to.be.true
    expect(event.defaultPrevented).to.be.true
  })
})
