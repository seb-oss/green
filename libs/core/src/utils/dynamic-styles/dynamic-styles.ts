import {
  ReactiveController,
  ReactiveControllerHost,
  CSSResultGroup,
  css,
} from 'lit'

export class DynamicStylesController implements ReactiveController {
  host: ReactiveControllerHost
  private sheet?: CSSStyleSheet | HTMLStyleElement

  constructor(host: ReactiveControllerHost) {
    this.host = host
    this.host.addController(this)

    if (window.CSSStyleSheet && (CSSStyleSheet.prototype as any).replaceSync) {
      console.log('CSSStyleSheet is supported')
      this.sheet = new CSSStyleSheet()
    } else {
      console.log('CSSStyleSheet is not supported')
      this.sheet = document.createElement('style')
    }
  }

  inject(styles: CSSResultGroup) {
    const cssText = Array.isArray(styles)
      ? styles.map((style) => style.toString()).join('')
      : styles.toString()

    if (this.sheet instanceof CSSStyleSheet) {
      this.sheet.replaceSync(cssText)
    } else {
      ;(this.sheet as HTMLStyleElement).textContent = cssText
    }
  }

  setCSSVar(name: string, value: string) {
    if (this.host instanceof HTMLElement) {
      this.host.style.setProperty(name, value)
    }
  }

  appendStyles() {
    if (
      this.sheet instanceof HTMLStyleElement &&
      this.host instanceof HTMLElement &&
      this.host.shadowRoot
    ) {
      this.host.shadowRoot.appendChild(this.sheet)
    }
  }

  hostConnected() {
    this.appendStyles()
  }
}
