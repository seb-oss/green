import { DragDropModule } from '@angular/cdk/drag-drop'
import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggSortableListComponent } from './sortable-list.component'

@NgModule({
  imports: [CommonModule, FormsModule, DragDropModule, NggCoreWrapperModule],
  exports: [NggSortableListComponent],
  declarations: [NggSortableListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggSortableListModule {}
