import { TransitionalStyles } from '../../../transitional-styles'
import * as Button from '../../button/button.trans.styles'
import styles from './filter-chip.trans.styles.scss?inline'

// Remember to import and call register() for any child components here too!

export function register() {
  TransitionalStyles.instance.register('gds-filter-chip', styles.toString())
  Button.register()
}

export default register
