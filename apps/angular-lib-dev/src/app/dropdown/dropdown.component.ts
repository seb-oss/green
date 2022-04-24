import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { DropdownOption, DropdownTexts } from '@sebgroup/extract'

@Component({
  selector: 'green-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  texts: DropdownTexts = {
    placeholder: 'Select',
  }

  options: Array<DropdownOption> = [
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

  customOptionsInitial = [
    {
      name: 'Tacos',
      val: 'tacos',
      kitchen: 'mexican',
    },
    {
      name: 'Pizza',
      val: 'pizza',
      selected: true,
      kitchen: 'italian',
    },
    {
      name: 'Sushi',
      val: 'sushi',
      selected: true,
      kitchen: 'japanese',
    },
  ]

  customOptions = [
    {
      name: 'Tacos',
      val: 'tacos',
      kitchen: 'mexican',
    },
    {
      name: 'Pizza',
      val: 'pizza',
      kitchen: 'italian',
    },
    {
      name: 'Sushi',
      val: 'sushi',
      kitchen: 'japanese',
    },
  ]

  dropdownForm = this._fb.group({
    select1: undefined,
    select2: 'pizza',
    select3: this.options[2].value,
    select4: undefined,
  })

  options$ = of([
    {
      name: 'Sweden',
      value: 'sweden',
    },
    {
      name: 'Denmark',
      value: 'denmark',
    },
    {
      name: 'Finland',
      value: 'Finland',
    },
    {
      name: 'Norway',
      value: 'norway',
    },
    {
      name: 'England',
      value: 'england',
    },
    {
      name: 'Germany',
      value: 'germany',
    },
    {
      name: 'Estonia',
      value: 'estonia',
    },
    {
      name: 'Lithuania',
      value: 'lithuania',
    },
    {
      name: 'Belarus',
      value: 'belarus',
    },
    {
      name: 'Latvia',
      value: 'latvia',
    },
    {
      name: 'Greece',
      value: 'greece',
    },
    {
      name: 'Italy',
      value: 'italy',
    },
    {
      name: 'Austria',
      value: 'austria',
    },
    {
      name: 'Switzerland',
      value: 'switzerland',
    },
    {
      name: 'Netherlands',
      value: 'netherlands',
    },
    {
      name: 'Belgium',
      value: 'belgium',
    },
    {
      name: 'France',
      value: 'france',
    },
    {
      name: 'Spain',
      value: 'spain',
    },
    {
      name: 'Portugal',
      value: 'portugal',
    },
    {
      name: 'Poland',
      value: 'poland',
    },
  ]).pipe(delay(3000))

  validationForm = this._fb.group({
    country: ['sweden', [Validators.required]],
    otherCountries: [null, [Validators.required, Validators.minLength(2)]],
  })

  dropdownValue0: any = undefined
  dropdownValue1: any = undefined
  dropdownValue2 = 'sushi'

  dropdownMultiValue0: any = undefined
  dropdownMultiValue1: any = undefined
  dropdownMultiValue2 = 'sushi'

  dropdownValue3: any = undefined
  dropdownValue4 = 'tacos'

  constructor(private _fb: FormBuilder) {}

  save() {
    console.log(this.validationForm.value)
  }
}
