import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import * as Segment from './segment/segment.trans.styles'
import styles from './segmented-control.trans.styles.css?inline'

export function register() {
  TransitionalStyles.instance.register(
    'gds-segmented-control',
    styles.toString(),
  )
  Segment.register()
}

export default register
