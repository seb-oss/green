import { ChangeDetectionStrategy, Component } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

@Component({
  selector: 'green-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FormComponent {
  constructor(private fb: NonNullableFormBuilder) {}

  designVersion: '2016' | '2023' = '2023'

  setDesignVersion(event: any) {
    this.designVersion = event.target.value
  }

  // Set up a basic reactive form using the NonNullableFormBuilder
  simpleForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    description: ['', Validators.required],
    dropdown: ['', Validators.required],
    select: ['', Validators.required],
    radio: ['', Validators.required],
    checkboxGroup: [[], Validators.required],
    singleCheckbox: [false, Validators.requiredTrue],
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

  consoleLog(val: any) {
    console.log(val)
  }
}
