import { Component } from '@angular/core'
import { SortableListItem } from '@sebgroup/green-angular'

@Component({
  templateUrl: './sortable-list.component.html',
})
export class SortableListComponent {
  items: SortableListItem[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]

  onItemSelected(event: any): void {
    console.log('Item selected', event)
  }

  onItemOrderChanged(event: any): void {
    console.log('Items order changed', event)
  }
}
