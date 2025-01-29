import { CSSResult, ReactiveController } from 'lit'

import { GdsElement } from '../../gds-element'

export class DynamicStylesController implements ReactiveController {
  host: GdsElement
  #useLegacyStylesheets = !supportsConstructedStylesheets()
  #initialized = false
  #initialStyleSheets: CSSStyleSheet[] = []
  #initialStyleSheetsCopy: CSSStyleSheet[] = []
  #styleSheets = new Map<string, CSSStyleSheet>()
  #legacyStyleSheets = new Map<string, HTMLStyleElement>()
  #initialLegacyStyleSheets: HTMLStyleElement[] = []
  #initialLegacyStyleSheetsCopy: HTMLStyleElement[] = []

  constructor(host: GdsElement) {
    this.host = host
    this.host.addController(this)
  }

  hostConnected() {
    this.#init()
  }

  /**
   * Checks if the controller has a particular key.
   *
   * @param key - The style key to check.
   */
  has(key: string) {
    return this.#useLegacyStylesheets
      ? this.#legacyStyleSheets.has(key)
      : this.#styleSheets.has(key)
  }

  /**
   * Injects CSS into the host element's shadow root. The key is used to
   * identify the styles and can be used to update the styles later. If
   * you need to clear style for a particular key, you can call `inject`
   * with an empty string as the `styles` parameter.
   *
   * @param key - A unique key to identify the styles.
   * @param cssResult - The CSSResult to inject.
   */
  inject(key: string, cssResult: CSSResult) {
    this.#addStyles(key, cssResult)
    this.#commit()
  }

  /**
   * Clears the styles for a particular key.
   *
   * @param key - The key of the styles to clear.
   */
  clear(key: string) {
    if (this.#useLegacyStylesheets) {
      this.host.updateComplete.then(() => {
        const styleEl = this.#legacyStyleSheets.get(key)
        styleEl?.remove()
        this.#legacyStyleSheets.delete(key)
      })
    } else {
      this.#styleSheets.delete(key)
    }
    this.#commit()
  }

  /**
   * Clears all styles of the component, including any initial styles.
   */
  clearAll() {
    if (this.#useLegacyStylesheets) {
      this.host.updateComplete.then(() => {
        this.#legacyStyleSheets.forEach((styleEl) => styleEl.remove())
        this.#initialLegacyStyleSheets.forEach((styleEl) => styleEl.remove())
        this.#legacyStyleSheets.clear()
        this.#initialLegacyStyleSheets = []
      })
    } else {
      if (this.host.shadowRoot) {
        this.host.shadowRoot.adoptedStyleSheets = []
        this.#styleSheets.clear()
        this.#initialStyleSheets = []
      }
    }
  }

  /**
   * Clears the initial styles of the component, but keeps any injected styles.
   */
  clearInitial() {
    if (this.#useLegacyStylesheets) {
      this.host.updateComplete.then(() => {
        this.#initialLegacyStyleSheets.forEach((styleEl) => styleEl.remove())
        this.#initialLegacyStyleSheets = []
      })
    } else {
      this.#initialStyleSheets = []
    }
    this.#commit()
  }

  /**
   * Restores the initial styles of the component, and keeps any injected styles.
   */
  restoreInitial() {
    if (this.#useLegacyStylesheets) {
      this.#initialLegacyStyleSheetsCopy.forEach((styleEl) => {
        this.#initialLegacyStyleSheets.push(
          styleEl.cloneNode(true) as HTMLStyleElement,
        )
      })
    } else {
      this.#initialStyleSheets = [...this.#initialStyleSheetsCopy]
    }
    this.#commit()
  }

  #addStyles(key: string, cssResult: CSSResult) {
    if (this.#useLegacyStylesheets) {
      let styleEl = this.#legacyStyleSheets.get(key)
      if (!styleEl) {
        styleEl = document.createElement('style')
        this.#legacyStyleSheets.set(key, styleEl)
      }
      styleEl.textContent = cssResult.cssText
    } else {
      if (!this.host.shadowRoot || !cssResult.styleSheet) return
      this.#styleSheets.set(key, cssResult.styleSheet)
    }
  }

  #commit() {
    if (this.#useLegacyStylesheets) {
      this.host.updateComplete.then(() => {
        if (!this.host.shadowRoot) return
        this.host.shadowRoot.querySelectorAll('style').forEach((style) => {
          style.remove()
        })
        this.#initialLegacyStyleSheets.forEach((styleEl) => {
          this.host.shadowRoot?.appendChild(styleEl)
        })
        this.#legacyStyleSheets.forEach((styleEl) => {
          this.host.shadowRoot?.appendChild(styleEl)
        })
      })
    } else {
      if (!this.host.shadowRoot) return
      this.host.shadowRoot.adoptedStyleSheets = [
        ...this.#initialStyleSheets,
        ...Array.from(this.#styleSheets.values()),
      ]
    }
  }

  #init() {
    if (this.#initialized) return
    if (this.#useLegacyStylesheets) {
      this.host.updateComplete.then(() => {
        if (!this.host.shadowRoot) return
        this.host.shadowRoot.querySelectorAll('style').forEach((style) => {
          this.#initialLegacyStyleSheets.push(style)
          this.#initialLegacyStyleSheetsCopy.push(
            style.cloneNode(true) as HTMLStyleElement,
          )
        })
      })
    } else {
      if (this.host.shadowRoot && this.#initialStyleSheets.length === 0) {
        this.#initialStyleSheets = [
          ...(this.host.shadowRoot.adoptedStyleSheets || []),
        ]
        this.#initialStyleSheetsCopy = [...this.#initialStyleSheets]
      }
    }
    this.#initialized = true
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
