import * as FieldBase from '../../primitives/field-base/field-base.trans.styles'
import * as Listbox from '../../primitives/listbox/listbox.trans.styles'
import * as Button from '../button/button.trans.styles'
import * as Popover from '../popover/popover.trans.styles'

export function register() {
  Listbox.register()
  Popover.register()
  Button.register()
  FieldBase.register()
}

export default register
