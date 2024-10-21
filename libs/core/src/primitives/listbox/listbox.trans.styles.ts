import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import listboxStyles from './listbox.trans.styles.scss?inline'
import optionStyles from './option.trans.styles.scss?inline'
import menuHeadingStyles from '../menu/menu-heading.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-listbox', listboxStyles.toString())
  TransitionalStyles.instance.register('gds-option', optionStyles.toString())
  TransitionalStyles.instance.register(
    'gds-menu-heading',
    menuHeadingStyles.toString(),
  )
}

export default register
