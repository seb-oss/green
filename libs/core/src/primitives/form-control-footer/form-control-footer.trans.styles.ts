import { TransitionalStyles } from '../../transitional-styles'
import styles from './form-control-footer.trans.styles.scss?inline'

export function register() {
  TransitionalStyles.instance.register(
    'gds-form-control-footer',
    styles.toString(),
  )
}

export default register
