import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgvTypeaheadDropdownListComponent } from './typeahead-dropdown-list/typeahead-dropdown-list.component'
import { NgvTypeaheadHighlightComponent } from './typeahead-highlight/typeahead-highlight.component'
import { NgvTypeaheadInputComponent } from './typeahead-input/typeahead-input.component'

@NgModule({
  declarations: [
    NgvTypeaheadDropdownListComponent,
    NgvTypeaheadHighlightComponent,
    NgvTypeaheadInputComponent,
  ],
  imports: [CommonModule],
  exports: [
    NgvTypeaheadDropdownListComponent,
    NgvTypeaheadHighlightComponent,
    NgvTypeaheadInputComponent,
  ],
})
export class NgvTypeaheadModule {}
