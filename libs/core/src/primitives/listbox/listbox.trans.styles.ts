import rbcbStyles from '../../shared-styles/rbcb-toggle.style'
import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import menuHeadingStyles from '../menu/menu-heading.trans.styles.scss?inline'
import listboxStyles from './listbox.trans.styles.scss?inline'
import optionStyles from './option.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-listbox', listboxStyles.toString())
  TransitionalStyles.instance.register(
    'gds-option',
    optionStyles.toString() + rbcbStyles.cssText,
  )
  TransitionalStyles.instance.register(
    'gds-menu-heading',
    menuHeadingStyles.toString(),
  )
}

export default register
