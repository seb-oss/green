import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'green-datepicker',
  templateUrl: './datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  dateForm: FormGroup
  constructor(private _fb: FormBuilder) {
    this.dateForm = this._fb.group({
      date: ['', [Validators.required]],
    })
  }
  dateValue = null
}
