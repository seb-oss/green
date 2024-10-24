import { css } from 'lit'
import { expect } from '@esm-bundle/chai'

import { GdsElement } from '../gds-element'
import { DynamicStylesController } from './dynamic-styles-controller'

class TestGdsElement extends GdsElement {
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
    const styleElement = element.shadowRoot?.querySelector('style')
    const adoptedStyleSheets = element.shadowRoot?.adoptedStyleSheets || []
    const allStyles = [
      ...(styleElement ? [styleElement.textContent] : []),
      ...adoptedStyleSheets.map((sheet) => sheet.cssRules[0].cssText),
    ]
    expect(allStyles.some((style) => style && style.includes('color: red'))).to
      .be.true
  })

  it('clears all styles', () => {
    const styles = css`
      div {
        color: red;
      }
    `
    controller.inject('test', styles)
    controller.clearAll()
    const styleElement = element.shadowRoot?.querySelector('style')
    expect(styleElement).to.not.exist
  })
})
