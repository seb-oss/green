import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DatepickerOptions } from '@sebgroup/extract'
import { startOfYear, subYears } from 'date-fns'

@Component({
  selector: 'green-datepicker',
  templateUrl: './datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  dateForm: FormGroup
  constructor(private _fb: FormBuilder) {
    this.dateForm = this._fb.group({
      date: [new Date(), [Validators.required]],
      dateEmpty: ['', [Validators.required]],
    })
  }
  ngModelDate = new Date()
  ngModelDateEmpty = ''
  value = new Date()
  valueEmpty = ''

  options: DatepickerOptions = {
    minDate: startOfYear(subYears(new Date(), 100)),
    maxDate: new Date(),
  }

  validationForm = this._fb.group({
    date: [null, [Validators.required]],
  })

  save() {
    console.log(this.validationForm.value)
  }
  test($event: any) {
    console.log($event)
  }
}
