import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'green-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  templateDropdown = 'tacos'

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

  dropdownForm = this._fb.group({
    select1: 'sushi',
    select2: undefined,
  })

  constructor(private _fb: FormBuilder) {}
}
