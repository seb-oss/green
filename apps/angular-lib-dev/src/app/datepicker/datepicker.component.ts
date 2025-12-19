import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { startOfYear, subYears } from 'date-fns'

import { DatepickerOptions, dateValidator } from '@sebgroup/green-angular'
import { gdsInitLocalization } from '@sebgroup/green-core/localization'

const { setLocale } = gdsInitLocalization()

@Component({
    selector: 'green-datepicker',
    templateUrl: './datepicker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DatepickerComponent {
  dateForm: FormGroup
  constructor(private _fb: FormBuilder) {
    this.dateForm = this._fb.group({
      date: [new Date(), [Validators.required]],
      dateEmpty: ['', [Validators.required]],
    })

    setLocale('sv')
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
    date: [
      null,
      [
        Validators.required,
        dateValidator({
          min: this.options.minDate,
          max: this.options.maxDate,
        }),
      ],
    ],
  })

  save() {
    console.log(this.validationForm.value)
  }
  test($event: Event) {
    console.log($event)
  }
}
