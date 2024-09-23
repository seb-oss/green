import { unsafeCSS } from 'lit'
import { GdsElement } from '../../gds-element'
import { supportsConstructedStylesheets } from '../../controllers/dynamic-styles-controller'
import { VER_SUFFIX } from '../helpers/custom-element-scoping'

// Only import components here. Primitives should be imported from the components that use them.
// Also, if a component depens, remember to import transitional styles for teh child component in
// the parent component. Check how datepicker handles dropdown for an example.

import * as Button from '../../components/button/button.trans.styles'
import * as Dropdown from '../../components/dropdown/dropdown.trans.styles'
import * as ContextMenu from '../../components/context-menu/context-menu.trans.styles'
import * as Datepicker from '../../components/datepicker/datepicker.trans.styles'
import * as GroupedList from '../../components/grouped-list/grouped-list.trans.styles'
import * as SegmentedControl from '../../components/segmented-control/segmented-control.trans.styles'
import * as FilterChips from '../../components/filter-chips/filter-chips.trans.styles'
import * as Theme from '../../components/theme/theme.trans.styles'

/**
 * Registers transitional styles for all components.
 *
 * **Note:** If you are only using a few components, consider registering those
 * separately instead. That way, any unused styles can get tree shaken away.
 */
export const registerTransitionalStyles = () => {
  Theme.register()
  Dropdown.register()
  ContextMenu.register()
  Datepicker.register()
  GroupedList.register()
  SegmentedControl.register()
  FilterChips.register()
  Button.register()
}

declare global {
  var __gdsTransitionalStyles: { [VER_SUFFIX]: TransitionalStyles } // eslint-disable-line no-var
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

  #styles = new Map<string, string>()
  #elements = new Map<string, GdsElement>()

  #useLegacyStylesheets = !supportsConstructedStylesheets()

  apply(element: GdsElement, styleKey: string) {
    if (!element.shadowRoot) return

    const style = this.#styles.get(styleKey)
    if (!style) return

    this.#elements.set(styleKey, element)
    this.applyToElement(styleKey, style)
  }

  applyToElement(styleKey: string, sheet: string) {
    const element = this.#elements.get(styleKey)
    if (!element || !element.shadowRoot) return

    element._dynamicStylesController.clearAll()
    element._dynamicStylesController.inject('t-styles', unsafeCSS(sheet))
    element._isUsingTransitionalStyles = true
  }

  register(name: string, styles: string) {
    let preparedStyle = styles
    if (this.#useLegacyStylesheets) {
      preparedStyle = `@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${styles}`
    }

    this.#styles.set(name, preparedStyle)

    this.applyToElement(name, preparedStyle)
  }
}
