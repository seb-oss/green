import { Component } from '@angular/core'

import { SortableListGroup, SortableListItem } from '@sebgroup/green-angular'

@Component({
    templateUrl: './sortable-list.component.html',
    standalone: false
})
export class SortableListComponent {
  groups: SortableListGroup[] = [
    {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ],
      title: 'Group 1',
      description: 'Description for group 1',
    },
    {
      items: [
        { id: 6, name: 'Item 1' },
        { id: 7, name: 'Item 2' },
        { id: 8, name: 'Item 3' },
        { id: 9, name: 'Item 4' },
        { id: 10, name: 'Item 5' },
      ],
      title: 'Group 2',
      description: 'Description for group 2',
    },
  ]

  onItemSelected(event: any): void {
    console.log('Item selected', event)
  }

  onItemOrderChanged(event: any): void {
    console.log('Items order changed', event)
  }
}
