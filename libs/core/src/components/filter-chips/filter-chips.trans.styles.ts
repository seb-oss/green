import { TransitionalStyles } from '../../transitional-styles'
import styles from './filter-chips.trans.styles.scss?inline'

import * as FilterChip from './filter-chip/filter-chip.trans.styles'

// Remember to import and call register() for any child components here too!

export function register() {
  TransitionalStyles.instance.register('gds-filter-chips', styles.toString())
  FilterChip.register()
}

export default register
