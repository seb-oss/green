import * as Listbox from 'primitives/listbox/listbox.styles.trans'

export const registerTransitionalStyles = () => {
  Listbox.register()
}

export class TransitionalStyles {
  private static singleton: TransitionalStyles
  private constructor() {}

  static get instance() {
    if (!TransitionalStyles.singleton)
      TransitionalStyles.singleton = new TransitionalStyles()
    return TransitionalStyles.singleton
  }

  private sheets = new Map<string, CSSStyleSheet>()
  private elements = new Map<string, HTMLElement>()

  apply(element: HTMLElement, styleKey: string) {
    const sheet = this.sheets.get(styleKey)
    if (!sheet || !element.shadowRoot) return
    this.elements.set(styleKey, element)
    this.applyToElement(styleKey, sheet)
  }

  applyToElement(styleKey: string, sheet: CSSStyleSheet) {
    const element = this.elements.get(styleKey)
    if (!element || !element.shadowRoot) return
    element.shadowRoot.adoptedStyleSheets = [sheet]
  }

  register(name: string, styles: string) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(styles)
    this.sheets.set(name, sheet)
    this.applyToElement(name, sheet)
  }
}
