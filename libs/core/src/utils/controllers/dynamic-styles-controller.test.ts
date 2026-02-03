import { css } from 'lit'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { GdsElement } from '../../gds-element'
import { DynamicStylesController } from './dynamic-styles-controller'

class TestGdsElement extends GdsElement {
  static styles = css`
    :host {
      display: block;
    }
  `

  controller: DynamicStylesController

  constructor() {
    super()
    this.controller = new DynamicStylesController(this)
  }

  connectedCallback() {
    super.connectedCallback()
    this.controller.hostConnected()
  }
}

customElements.define('test-gds-element', TestGdsElement)

describe('DynamicStylesController', () => {
  let element: TestGdsElement
  let controller: DynamicStylesController

  function getAllStyles() {
    const styleElement = element.shadowRoot?.querySelector('style')
    const adoptedStyleSheets = element.shadowRoot?.adoptedStyleSheets || []
    const allStyles = [
      ...(styleElement ? [styleElement.textContent] : []),
      ...adoptedStyleSheets.map((sheet) => sheet.cssRules[0].cssText),
    ]
    return allStyles
  }

  beforeEach(() => {
    element = document.createElement('test-gds-element') as TestGdsElement
    document.body.appendChild(element)
    controller = element.controller
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('injects styles into the shadow root', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).toBe(true)
  })

  it('clears all styles', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    controller.clearAll()
    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).toBe(false)
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).toBe(false)
  })

  it('clears styles for a specific key', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    controller.clear('test')
    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).toBe(false)
  })

  it('returns true if a key exists', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    expect(controller.has('test')).toBe(true)
  })

  it('clears initial styles', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    controller.clearInitial()
    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).toBe(true)
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).toBe(false)
  })

  it('restores initial styles', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)

    controller.clearInitial()
    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).toBe(true)
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).toBe(false)

    controller.restoreInitial()

    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).toBe(true)
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).toBe(true)
  })
})
