import { ChangeDetectionStrategy, Component } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/textarea/index.js'
import '@sebgroup/green-core/components/dropdown/index.js'
import '@sebgroup/green-core/components/datepicker/index.js'
import '@sebgroup/green-core/components/form/summary/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/rich-text/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/theme/index.js'

@Component({
  selector: 'green-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  constructor(private fb: NonNullableFormBuilder) {}

  // Set up a basic reactive form using the NonNullableFormBuilder
  simpleForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    description: ['', Validators.required],
    dropdown: ['', Validators.required],
    date: [undefined as Date | undefined, Validators.required],
  })

  // This is a helper function we can call from our template to get a sutible error message for differnt
  // types of errors
  getError(control: AbstractControl | null) {
    if (control?.hasError('required')) return 'Field is required'
    if (control?.hasError('minlength')) return 'Field is too short'
    if (control?.hasError('maxlength')) return 'Field is too long'
    if (control?.hasError('email')) return 'Invalid email'
    return ''
  }
}
