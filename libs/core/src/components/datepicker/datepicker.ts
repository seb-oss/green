import { GdsFormControlElement } from '../../components/form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import '../../primitives/calendar/calendar'

@gdsCustomElement('gds-datepicker')
export class GdsDatepicker extends GdsFormControlElement {
  render() {
    return html`<gds-calendar></gds-calendar>`
  }
}
