import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { DropdownOption, DropdownTexts } from '@sebgroup/extract'

@Component({
  selector: 'green-dropdown',
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  texts: DropdownTexts = {
    placeholder: 'Select',
    searchPlaceholder: 'Search',
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

  dropdownValue0: any = 'sushi'
  dropdownValue1: any = undefined
  dropdownValue2 = 'sushi'

  dropdownMultiValue0: any = undefined
  dropdownMultiValue1: any = undefined
  dropdownMultiValue2 = this.customOptions[2].val

  dropdownValue3: any = undefined
  dropdownValue4 = 'tacos'
  dropdownValue5 = this.customOptions[1].val
  dropdownValue6 = undefined

  constructor(private _fb: FormBuilder) {}

  save() {
    this.validationForm.markAllAsTouched()
    console.log(this.validationForm.value)
  }

  test($event: any) {
    console.log('Test', $event)
  }

  searchFilter(search: string, value: any) {
    return value.kitchen.toLowerCase().includes(search.toLowerCase())
  }
}
