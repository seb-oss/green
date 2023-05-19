import * as Listbox from './stems/listbox/listbox.styles.trans'

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

  apply(element: HTMLElement, styleKey: string) {
    const sheet = this.sheets.get(styleKey)
    if (!sheet || !element.shadowRoot) return
    element.shadowRoot.adoptedStyleSheets = [sheet]
  }

  register(name: string, styles: string) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(styles)
    this.sheets.set(name, sheet)
  }
}
