import * as FieldBase from '../../primitives/field-base/field-base.trans.styles'
import * as FormControlFooter from '../../primitives/form-control-footer/form-control-footer.trans.styles'
import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../utils/transitional-styles/transitional-styles'
import * as Button from '../button/button.trans.styles'
import * as Popover from '../popover/popover.trans.styles'
import styles from './dropdown.trans.styles.scss?inline'

export function register() {
  const tokensAndStyles =
    styles.toString() + tokens.reduce((acc, token) => acc + token.cssText, '')
  TransitionalStyles.instance.register(
    'gds-dropdown',
    tokensAndStyles.toString(),
  )

  Listbox.register()
  Popover.register()
  Button.register()
  FieldBase.register()
  FormControlFooter.register()
}

export default register
