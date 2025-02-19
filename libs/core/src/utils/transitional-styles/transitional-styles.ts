import { unsafeCSS } from 'lit'

// Only import components here. Primitives should be imported from the components that use them.
// Also, if a component depens, remember to import transitional styles for teh child component in
// the parent component. Check how datepicker handles dropdown for an example.

import * as Button from '../../components/button/button.trans.styles'
import * as ContextMenu from '../../components/context-menu/context-menu.trans.styles'
import * as Datepicker from '../../components/datepicker/datepicker.trans.styles'
import * as Dropdown from '../../components/dropdown/dropdown.trans.styles'
import * as FilterChips from '../../components/filter-chips/filter-chips.trans.styles'
import * as GroupedList from '../../components/grouped-list/grouped-list.trans.styles'
import * as Input from '../../components/input/input.trans.styles'
import * as SegmentedControl from '../../components/segmented-control/segmented-control.trans.styles'
import { GdsTheme } from '../../components/theme/theme'
import * as Theme from '../../components/theme/theme.trans.styles'
import { GdsElement } from '../../gds-element'
import { supportsConstructedStylesheets } from '../../utils/controllers/dynamic-styles-controller'
import { VER_SUFFIX } from '../helpers/custom-element-scoping'

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
  Input.register()
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
    // element will only exist in the elements map if transitional styles have been
    // registered for it. If it doesn't exist, we can bail out early.
    const element = this.#elements.get(styleKey)
    if (!element || !element.shadowRoot) return

    // Functions for applying and clearing transitional styles, used below
    const applyTransitional = () => {
      element._dynamicStylesController.clearInitial()
      element._dynamicStylesController.inject('t-styles', unsafeCSS(sheet))
      element._isUsingTransitionalStyles = true
    }
    const clearTransitional = () => {
      element._isUsingTransitionalStyles = false
      element._dynamicStylesController.clear('t-styles')
      element._dynamicStylesController.restoreInitial()
    }

    // If a `gds-theme` element is present higher up in the DOM, we want its
    // `designVersion` property to control whether transitional styles are applied
    // to the element.

    // Find the closest `gds-theme` parent, if present
    const gdsThemeSelector = '[gds-element=gds-theme]'
    let currentRoot = element.getRootNode()
    let closestGdsTheme = element.closest(gdsThemeSelector)
    while (closestGdsTheme === null && currentRoot !== document) {
      closestGdsTheme = (currentRoot as ShadowRoot).host?.closest(
        gdsThemeSelector,
      )
      currentRoot = (currentRoot as ShadowRoot).host?.getRootNode()
    }

    // If we found a `gds-theme` parent, check if it's set to 2023 styles, in which case
    // we will remove any transitional styles and then bail out.
    if (closestGdsTheme) {
      const theme = closestGdsTheme as GdsTheme

      // If the designVersion is changed dynamically, we also need to update the styles
      const updateStyles = () => {
        if (theme.designVersion === '2023') {
          clearTransitional()
        } else {
          applyTransitional()
        }
      }
      theme.addEventListener('gds-design-version-changed', updateStyles)
      element.addEventListener('gds-element-disconnected', () =>
        theme.removeEventListener('gds-design-version-changed', updateStyles),
      )

      if (theme.designVersion === '2023') {
        clearTransitional()
        return
      }
    }

    // If we didn't find a `gds-theme` parent, or if it's set to 2016 styles, we will apply
    // the transitional styles.
    applyTransitional()
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
