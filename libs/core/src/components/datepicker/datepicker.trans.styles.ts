import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import * as Calendar from '../calendar/calendar.trans.styles'
import * as Dropdown from '../dropdown/dropdown.trans.styles'
import * as Popover from '../popover/popover.trans.styles'
import styles from './datepicker.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register('gds-datepicker', styles.toString())
  // Since dropdown is used internally in datepicker, we need to register it here
  Dropdown.register()
  Popover.register()
  Calendar.register()
}

export default register
