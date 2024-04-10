import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NggSortableListComponent } from './sortable-list.component'
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  imports: [CommonModule, FormsModule, DragDropModule],
  exports: [NggSortableListComponent],
  declarations: [NggSortableListComponent],
})
export class NggSortableListModule {}
