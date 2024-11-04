import { CSSResult, ReactiveController } from 'lit'

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
      this.#initialStyleSheets = [
        ...(this.host.shadowRoot.adoptedStyleSheets || []),
      ]
    }
  }

  /**
   * Injects CSS into the host element's shadow root. The key is used to
   * identify the styles and can be used to update the styles later. If
   * you need to clear style for a particular key, you can call `inject`
   * with an empty string as the `styles` parameter.
   *
   * @param key - A unique key to identify the styles.
   * @param styles - The CSSResult to inject.
   */
  inject(key: string, styles: CSSResult) {
    if (this.#useLegacyStylesheets) {
      const cssText = Array.isArray(styles)
        ? styles.map((style) => style.toString()).join('')
        : styles.toString()
      this.#applyStylesLegacy(key, cssText)
    } else {
      styles.styleSheet && this.#applyStyles(key, styles.styleSheet)
    }
  }

  /**
   * Clears the styles for a particular key.
   *
   * @param key - The key of the styles to clear.
   */
  clear(key: string) {
    if (this.#useLegacyStylesheets) {
      const styleEl = this.#legacyStyleSheets.get(key)
      styleEl?.remove()
      this.#legacyStyleSheets.delete(key)
    } else {
      this.#styleSheets.delete(key)
      if (this.host.shadowRoot) {
        this.host.shadowRoot.adoptedStyleSheets = [
          ...this.#initialStyleSheets,
          ...Array.from(this.#styleSheets.values()),
        ]
      }
    }
  }

  /**
   * Clears all styles of the component, including any initial styles.
   */
  clearAll() {
    if (this.#useLegacyStylesheets) {
      this.#legacyStyleSheets.forEach((styleEl) => styleEl.remove())
      this.host.shadowRoot
        ?.querySelectorAll('style')
        .forEach((style) => (style.innerHTML = ''))
      this.#legacyStyleSheets.clear()
    } else {
      if (this.host.shadowRoot) {
        this.host.shadowRoot.adoptedStyleSheets = []
        this.#styleSheets.clear()
        this.#initialStyleSheets = []
      }
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

  #applyStyles(key: string, styleSheet: CSSStyleSheet) {
    if (!this.host.shadowRoot) return

    this.#styleSheets.set(key, styleSheet)

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
