import { css } from 'lit'
import { expect } from '@esm-bundle/chai'

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
    ).to.be.true
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
    ).to.be.false
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).to.be.false
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
    ).to.be.false
  })

  it('returns true if a key exists', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    expect(controller.has('test')).to.be.true
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
    ).to.be.true
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).to.be.false
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
    ).to.be.true
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).to.be.false

    controller.restoreInitial()

    expect(
      getAllStyles().some((style) => style && style.includes('color: red')),
    ).to.be.true
    expect(
      getAllStyles().some((style) => style && style.includes('display: block')),
    ).to.be.true
  })
})
