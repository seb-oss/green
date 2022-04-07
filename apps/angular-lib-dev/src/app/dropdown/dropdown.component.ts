import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

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
    select1: [undefined, [Validators.required]],
    select2: 'pizza',
  })

  dropdownValue0: any = undefined
  dropdownValue1: any = undefined
  dropdownValue2 = 'sushi'
  dropdownValue3: any = undefined
  dropdownValue4 = 'tacos'

  constructor(private _fb: FormBuilder) {}

  save() {
    console.log(this.dropdownForm.value)
  }
}
