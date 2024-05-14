import { ReactiveController, CSSResultGroup } from 'lit'
import { GdsElement } from '../gds-element'

export class DynamicStylesController implements ReactiveController {
  host: GdsElement
  #useLegacyStylesheets = !supportsConstructedStylesheets()
  #initialStyleSheets: CSSStyleSheet[] = []
  #styleSheets = new Map<string, CSSStyleSheet>()
  #legacyStyleSheets = new Map<string, HTMLStyleElement>()

  constructor(host: GdsElement) {
    this.host = host
    this.host.addController(this)
  }

  hostConnected() {
    if (this.host.shadowRoot && this.#initialStyleSheets.length === 0) {
      this.#initialStyleSheets = [...this.host.shadowRoot.adoptedStyleSheets]
    }
  }

  inject(key: string, styles: CSSResultGroup) {
    const cssText = Array.isArray(styles)
      ? styles.map((style) => style.toString()).join('')
      : styles.toString()

    if (this.#useLegacyStylesheets) {
      this.#applyStylesLegacy(key, cssText)
    } else {
      this.#applyStyles(key, cssText)
    }
  }

  #applyStylesLegacy(key: string, cssText: string) {
    let styleEl = this.#legacyStyleSheets.get(key)

    if (!styleEl) {
      styleEl = document.createElement('style')
      this.#legacyStyleSheets.set(key, styleEl)
    }

    styleEl.textContent = cssText
    this.host.shadowRoot?.appendChild(styleEl)
  }

  #applyStyles(key: string, cssText: string) {
    if (!this.host.shadowRoot) return

    let styleSheet = this.#styleSheets.get(key)

    if (!styleSheet) {
      styleSheet = new CSSStyleSheet()
      this.#styleSheets.set(key, styleSheet)
    }

    styleSheet.replaceSync(cssText)
    this.host.shadowRoot.adoptedStyleSheets = [
      ...this.#initialStyleSheets,
      ...Array.from(this.#styleSheets.values()),
    ]
  }
}

export function supportsConstructedStylesheets() {
  try {
    new CSSStyleSheet()
    return true
  } catch {
    return false
  }
}
