import * as FieldBase from '../../primitives/field-base/field-base.trans.styles'
import { TransitionalStyles } from '../../transitional-styles'
import * as Button from '../button/button.trans.styles'
import styles from './select.trans.styles.scss'

export function register() {
  TransitionalStyles.instance.register('gds-select', styles.toString())
  Button.register()
  FieldBase.register()
}

export default register
