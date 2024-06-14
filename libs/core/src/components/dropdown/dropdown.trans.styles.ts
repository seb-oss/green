import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './dropdown.trans.styles.scss?inline'

import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import * as Popover from '../popover/popover.trans.styles'
import * as Button from '../button/button.trans.styles'

export function register() {
  Listbox.register()
  Popover.register()
  Button.register()
  TransitionalStyles.instance.register('gds-dropdown', styles.toString())
}

export default register
