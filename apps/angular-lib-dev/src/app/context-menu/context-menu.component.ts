import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { DropdownOption } from '@sebgroup/green-angular'

@Component({
    selector: 'green-context-menu',
    templateUrl: './context-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ContextMenuComponent {
  menuItems: DropdownOption[] = [
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

  onItemClicked(item: DropdownOption) {
    console.log(item)
  }

  constructor(private _fb: FormBuilder) {}
}
