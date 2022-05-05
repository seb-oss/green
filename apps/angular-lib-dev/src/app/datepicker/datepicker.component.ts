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
      date: [new Date(), [Validators.required]],
      dateEmpty: ['', [Validators.required]],
    })
  }
  ngModelDate = new Date()
  ngModelDateEmpty = ''
  value = new Date()
  valueEmpty = ''

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
