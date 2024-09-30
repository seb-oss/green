import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import styles from './segmented-control.trans.styles.css?inline'

import * as Segment from './segment/segment.trans.styles'

export function register() {
  TransitionalStyles.instance.register(
    'gds-segmented-control',
    styles.toString(),
  )
  Segment.register()
}

export default register
