import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TypeaheadDropdownListComponent } from './typeahead-dropdown-list/typeahead-dropdown-list.component'
import { TypeaheadHighlightComponent } from './typeahead-highlight/typeahead-highlight.component'
import { TypeaheadInputComponent } from './typeahead-input/typeahead-input.component'

@NgModule({
  declarations: [
    TypeaheadDropdownListComponent,
    TypeaheadHighlightComponent,
    TypeaheadInputComponent,
  ],
  imports: [CommonModule],
  exports: [
    TypeaheadDropdownListComponent,
    TypeaheadHighlightComponent,
    TypeaheadInputComponent,
  ],
})
export class NggTypeaheadModule {}
