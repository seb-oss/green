import { HTMLTemplateResult, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import * as Popover from '../../primitives/popover/popover.trans.styles'
import * as Dropdown from '../../components/dropdown/dropdown.trans.styles'
import * as ContextMenu from '../../components/context-menu/context-menu.trans.styles'
import * as Calendar from '../../primitives/calendar/calendar.trans.styles'
import * as Datepicker from '../../components/datepicker/datepicker.trans.styles'
import * as GroupedList from '../../components/grouped-list/grouped-list.trans.styles'
import * as SegmentedControl from '../../components/segmented-control/segmented-control.trans.styles'
import * as Segment from '../../components/segmented-control/segment/segment.trans.styles'

import { VER_SUFFIX } from '../helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'

import chlorophyllTokens from './chlorophyll-tokens.scss'

export const registerTransitionalStyles = () => {
  Dropdown.register()
  Listbox.register()
  Popover.register()
  ContextMenu.register()
  Calendar.register()
  Datepicker.register()
  GroupedList.register()
  SegmentedControl.register()
  Segment.register()

  // We create the CSSStyleSheet instance for the chlorophyll tokens
  // here, so that they can get tree-shaked if registerTransitionalStyles is
  // never called.
  const chlorophyll_tokens = new CSSStyleSheet()
  chlorophyll_tokens.replaceSync(chlorophyllTokens.toString())
  TransitionalStyles.instance.chlorophyllTokens = chlorophyll_tokens
}

declare global {
  var __gdsTransitionalStyles: { [VER_SUFFIX]: TransitionalStyles } // eslint-disable-line no-var
}

function supportsConstructedStylesheets() {
  try {
    new CSSStyleSheet()
    return true
  } catch {
    return false
  }
}

export class TransitionalStyles {
  static get instance() {
    if (!globalThis.__gdsTransitionalStyles?.[VER_SUFFIX])
      globalThis.__gdsTransitionalStyles = {
        ...globalThis.__gdsTransitionalStyles,
        [VER_SUFFIX]: new TransitionalStyles(),
      }

    return globalThis.__gdsTransitionalStyles[VER_SUFFIX]
  }

  private sheets = new Map<string, CSSStyleSheet>()
  private elements = new Map<string, HTMLElement>()

  private sheetsLegacy = new Map<string, string>()
  private useLegacyStylesheets = !supportsConstructedStylesheets()

  chlorophyllTokens = new CSSStyleSheet()

  apply(element: HTMLElement, styleKey: string) {
    if (!element.shadowRoot) return

    if (this.useLegacyStylesheets) {
      this.elements.set(styleKey, element)
      this.applyToElementLegacy(styleKey)
      return
    }

    const sheet = this.sheets.get(styleKey)
    if (!sheet) return

    this.elements.set(styleKey, element)
    this.applyToElement(styleKey, sheet)
  }

  applyToElement(styleKey: string, sheet: CSSStyleSheet) {
    const element = this.elements.get(styleKey) as GdsElement
    if (!element || !element.shadowRoot) return

    element.shadowRoot.adoptedStyleSheets = [this.chlorophyllTokens, sheet]
    element._isUsingTransitionalStyles = true
  }

  // This is a fallback for browsers that dosen't support constructed stylesheets.
  // Primarily, this is here to support Safari/iOS 15.x
  //
  // To work around the lack of Constructed Stylesheets, we use a regular <style>
  // element instead. The _tStyles property needs to be added to the render template
  // of each component.
  //
  // Lit itself will also add a <style> element to the shadow root in these browsers,
  // meaning that we have to override the base styles added from the static style
  // property in this case. This is what the `all: revert` rule is for.
  // We can use cascade layers to ensure that the revert rule overides the base styles
  // but not the transitional styles.
  // `@layer base, reset, transitional-styles;`
  applyToElementLegacy(styleKey: string) {
    const sheet = this.sheetsLegacy.get(styleKey)
    const element = this.elements.get(styleKey) as GdsElement & {
      _tStyles: HTMLTemplateResult
    }

    if (!element) return

    element._tStyles = html`<style>
      @layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${unsafeHTML(sheet)}
    </style>`
    element._isUsingTransitionalStyles = true
  }

  register(name: string, styles: string) {
    if (this.useLegacyStylesheets) {
      this.sheetsLegacy.set(name, styles)
      this.applyToElementLegacy(name)
      return
    }

    const sheet = new CSSStyleSheet()
    sheet.replaceSync(styles)
    this.sheets.set(name, sheet)
    this.applyToElement(name, sheet)
  }
}
