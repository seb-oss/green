import { CSSResult } from 'lit'

import { VER_SUFFIX } from '../scoping'
import { supportsConstructedStylesheets } from '../utils/controllers/dynamic-styles-controller'
import { isServer } from './helpers/platform'

declare global {
  var __gdsGlobalStylesRegistryScoped: { [VER_SUFFIX]: GlobalStylesRegistry } // eslint-disable-line no-var
}

function getDocumentAdoptedStylesheet() {
  if (isServer) return []
  return [...document.adoptedStyleSheets] || []
}

/**
 * GlobalStylesRegistry is a singleton class that manages global stylesheets in the document.
 * The singleton is used to inject global styles that are not scoped to specific components.
 */
export class GlobalStylesRegistry {
  #useLegacyStylesheets = !supportsConstructedStylesheets()
  #styleSheets = new Map<string, CSSStyleSheet>()
  #legacyStyleSheets = new Map<string, HTMLStyleElement>()
  #initialStyleSheets: CSSStyleSheet[] = getDocumentAdoptedStylesheet()

  /**
   * Get the global singleton instance of the GlobalStylesRegistry.
   */
  static get instance() {
    if (!globalThis.__gdsGlobalStylesRegistryScoped?.[VER_SUFFIX])
      globalThis.__gdsGlobalStylesRegistryScoped = {
        ...globalThis.__gdsGlobalStylesRegistryScoped,
        [VER_SUFFIX]: new GlobalStylesRegistry(),
      }

    return globalThis.__gdsGlobalStylesRegistryScoped[VER_SUFFIX]
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

  /**
   * Clears global styles for the given key.
   *
   * @param key unique identifier for the stylesheet to be removed.
   */
  clearGlobalStyles(key: string) {
    if (this.#useLegacyStylesheets) {
      const styleEl = this.#legacyStyleSheets.get(key)
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl)
        this.#legacyStyleSheets.delete(key)
      }
    } else {
      this.#clearStyles(key)
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

  #clearStyles(key: string) {
    if (this.#styleSheets.has(key)) {
      this.#styleSheets.delete(key)
      document.adoptedStyleSheets = [
        ...this.#initialStyleSheets,
        ...Array.from(this.#styleSheets.values()),
      ]
    }
  }
}
