import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import * as Button from '../button/button.trans.styles'
import * as Popover from '../popover/popover.trans.styles'
import styles from './context-menu.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-context-menu', styles.toString())
  Popover.register()
  Listbox.register()
  Button.register()
}

export default register
