import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import * as Button from '../button/button.trans.styles'
import * as Popover from '../popover/popover.trans.styles'
import styles from './dropdown.trans.styles.scss?inline'

export function register() {
  Listbox.register()
  Popover.register()
  Button.register()
  TransitionalStyles.instance.register('gds-dropdown', styles.toString())
}

export default register
