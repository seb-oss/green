import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/textarea/index.js'
import '@sebgroup/green-core/components/flex/index.js'

@Component({
  selector: 'green-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  simpleForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),
  })
}
