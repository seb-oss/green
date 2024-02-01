import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import listboxStyles from './listbox.trans.styles.scss'
import optionStyles from './option.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-listbox', listboxStyles.toString())
  TransitionalStyles.instance.register('gds-option', optionStyles.toString())
}

export default register
