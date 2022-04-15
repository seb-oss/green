import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

@Component({
  selector: 'green-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  options: Array<{ key: string; value: string }> = [
    {
      key: 'Tacos',
      value: 'tacos',
    },
    {
      key: 'Pizza',
      value: 'pizza',
    },
    {
      key: 'Sushi',
      value: 'sushi',
    },
  ]

  optionsWithInitial = [
    {
      key: 'Tacos',
      value: 'tacos',
    },
    {
      key: 'Pizza',
      value: 'pizza',
      selected: true,
    },
    {
      key: 'Sushi',
      value: 'sushi',
    },
  ]

  dropdownForm = this._fb.group({
    select1: undefined,
    select2: 'pizza',
  })

  options$ = of([
    {
      key: 'Sweden',
      value: 'sweden',
    },
    {
      key: 'Denmark',
      value: 'denmark',
    },
    {
      key: 'Finland',
      value: 'Finland',
    },
    {
      key: 'Norway',
      value: 'norway',
    },
    {
      key: 'England',
      value: 'england',
    },
    {
      key: 'Germany',
      value: 'germany',
    },
    {
      key: 'Estonia',
      value: 'estonia',
    },
    {
      key: 'Lithuania',
      value: 'lithuania',
    },
    {
      key: 'Belarus',
      value: 'belarus',
    },
    {
      key: 'Latvia',
      value: 'latvia',
    },
    {
      key: 'Greece',
      value: 'greece',
    },
    {
      key: 'Italy',
      value: 'italy',
    },
    {
      key: 'Austria',
      value: 'austria',
    },
    {
      key: 'Switzerland',
      value: 'switzerland',
    },
    {
      key: 'Netherlands',
      value: 'netherlands',
    },
    {
      key: 'Belgium',
      value: 'belgium',
    },
    {
      key: 'France',
      value: 'france',
    },
    {
      key: 'Spain',
      value: 'spain',
    },
    {
      key: 'Portugal',
      value: 'portugal',
    },
    {
      key: 'Poland',
      value: 'poland',
    },
  ]).pipe(delay(3000))

  validationForm = this._fb.group({
    country: ['sweden', [Validators.required]],
    otherCountry: [null, [Validators.required]],
  })

  dropdownValue0: any = undefined
  dropdownValue1: any = undefined
  dropdownValue2 = 'sushi'
  dropdownValue3: any = undefined
  dropdownValue4 = 'tacos'

  constructor(private _fb: FormBuilder) {}

  save() {
    console.log(this.validationForm.value)
  }
}
