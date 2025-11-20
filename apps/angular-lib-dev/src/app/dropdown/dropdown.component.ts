import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

import {
  DropdownOption,
  DropdownTexts,
} from '@sebgroup/green-angular/src/lib/dropdown'

@Component({
    selector: 'green-dropdown',
    templateUrl: './dropdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DropdownComponent {
  texts: DropdownTexts = {
    placeholder: 'Select',
  }

  options: DropdownOption[] = [
    {
      label: 'Tacos',
      value: 'tacos',
    },
    {
      label: 'Pizza',
      value: 'pizza',
    },
    {
      label: 'Sushi',
      value: 'sushi',
    },
  ]

  optionsWithInitial: DropdownOption[] = [
    {
      label: 'Tacos',
      value: 'tacos',
    },
    {
      label: 'Pizza',
      value: 'pizza',
      selected: true,
    },
    {
      label: 'Sushi',
      value: 'sushi',
    },
  ]

  customOptionsInitial: DropdownOption[] = [
    {
      name: 'Tacos',
      val: {
        id: 'tacos',
        kitchen: 'mexican',
      },
    },
    {
      name: 'Pizza',
      val: {
        id: 'pizza',
        kitchen: 'italian',
      },
      selected: true,
    },
    {
      name: 'Sushi',
      val: {
        id: 'sushi',
        kitchen: 'japanese',
      },
      selected: true,
    },
  ]

  customOptions: DropdownOption[] = [
    {
      name: 'Tacos',
      val: {
        id: 'tacos',
        kitchen: 'mexican',
      },
    },
    {
      name: 'Pizza',
      val: {
        id: 'pizza',
        kitchen: 'italian',
      },
    },
    {
      name: 'Sushi',
      val: {
        id: 'sushi',
        kitchen: 'japanese',
      },
    },
  ]

  dropdownForm = this._fb.group({
    select1: undefined,
    select2: 'pizza',
    select3: [[this.options[2].value]],
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

  dropdownValue0: string | undefined = 'sushi'
  dropdownValue1: string | undefined
  dropdownValue2: string | undefined = 'sushi'

  dropdownMultiValue0: string[] | undefined = undefined
  dropdownMultiValue1: unknown[] | undefined = undefined
  dropdownMultiValue2: unknown[] | undefined = [this.customOptions[2].val]

  dropdownValue3: string | undefined = undefined
  dropdownValue4: string | undefined = 'tacos'
  dropdownValue5: unknown | undefined = this.customOptions[1].val
  dropdownValue6: unknown[] | undefined = undefined

  constructor(private _fb: FormBuilder) {}

  save() {
    this.validationForm.markAllAsTouched()
    console.log(this.validationForm.value)
  }

  resetForms() {
    this.validationForm.reset()
    console.log(this.validationForm.value)
  }

  test($event: Event) {
    console.log('Test', $event)
  }

  compareWith(o1: { id: string }, o2: { id: string }) {
    return o1.id === o2.id
  }

  searchFilter(search: string, value: { id: string; kitchen: string }) {
    return value.kitchen.toLowerCase().includes(search.toLowerCase())
  }
}
