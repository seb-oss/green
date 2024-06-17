import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './datepicker.trans.styles.scss?inline'

import * as Dropdown from '../dropdown/dropdown.trans.styles'
import * as Popover from '../popover/popover.trans.styles'
import * as Calendar from '../../primitives/calendar/calendar.trans.styles'

export function register() {
  TransitionalStyles.instance.register('gds-datepicker', styles.toString())
  // Since dropdown is used internally in datepicker, we need to register it here
  Dropdown.register()
  Popover.register()
  Calendar.register()
}

export default register
