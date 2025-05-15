import { CSSResult } from 'lit'

import { supportsConstructedStylesheets } from '../utils/controllers/dynamic-styles-controller'
import { isServer } from './helpers/platform'

declare global {
  var __gdsGlobalStylesRegistry: GlobalStylesRegistry // eslint-disable-line no-var
}

function getDocumentAdoptedStylesheet() {
  if (isServer) return []
  return document.adoptedStyleSheets || []
}

export class GlobalStylesRegistry {
  #useLegacyStylesheets = !supportsConstructedStylesheets()
  #styleSheets = new Map<string, CSSStyleSheet>()
  #legacyStyleSheets = new Map<string, HTMLStyleElement>()
  #initialStyleSheets: CSSStyleSheet[] = getDocumentAdoptedStylesheet()

  /**
   * Get the global singleton instance of the GlobalStylesRegistry.
   */
  static get instance() {
    if (!globalThis.__gdsGlobalStylesRegistry)
      globalThis.__gdsGlobalStylesRegistry = new GlobalStylesRegistry()

    return globalThis.__gdsGlobalStylesRegistry
  }

  /**
   * Injects global styles into the document. This function is intended to be used for global styles
   * that cannot be scoped to a specific component.
   *
   * @param key unique identifier for this stylesheet.
   * @param styles CSSResult produced by the lit css template literal tag
   */
  injectGlobalStyles(key: string, styles: CSSResult) {
    if (this.#useLegacyStylesheets) {
      const cssText = Array.isArray(styles)
        ? styles.map((style) => style.toString()).join('')
        : styles.toString()
      this.#injectStylesLegacy(key, cssText)
    } else {
      styles.styleSheet && this.#injectStyles(key, styles.styleSheet)
    }
  }

  #injectStylesLegacy(key: string, cssText: string) {
    if (isServer) return

    let styleEl = this.#legacyStyleSheets.get(key)

    if (!styleEl) {
      styleEl = document.createElement('style')
      this.#legacyStyleSheets.set(key, styleEl)
    }

    styleEl.textContent = cssText
    document.head.appendChild(styleEl)
  }

  #injectStyles(key: string, styleSheet: CSSStyleSheet) {
    if (isServer) return

    this.#styleSheets.set(key, styleSheet)

    document.adoptedStyleSheets = [
      ...this.#initialStyleSheets,
      ...Array.from(this.#styleSheets.values()),
    ]
  }
}
