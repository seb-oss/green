import * as Listbox from 'primitives/listbox/listbox.trans.styles'
import * as Popover from 'primitives/popover/popover.trans.styles'
import * as Dropdown from 'components/dropdown/dropdown.trans.styles'

export const registerTransitionalStyles = () => {
  Dropdown.register()
  Listbox.register()
  Popover.register()
}

export class TransitionalStyles {
  private static singleton: TransitionalStyles

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
