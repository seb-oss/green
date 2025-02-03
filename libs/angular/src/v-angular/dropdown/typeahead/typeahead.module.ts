import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NggvTypeaheadDropdownListComponent } from './typeahead-dropdown-list/typeahead-dropdown-list.component'
import { NggvTypeaheadHighlightComponent } from './typeahead-highlight/typeahead-highlight.component'
import { NggvTypeaheadInputComponent } from './typeahead-input/typeahead-input.component'

@NgModule({
  declarations: [
    NggvTypeaheadHighlightComponent,
    NggvTypeaheadInputComponent,
    NggvTypeaheadDropdownListComponent,
  ],
  imports: [CommonModule, NggvTooltipModule],
  exports: [
    NggvTypeaheadHighlightComponent,
    NggvTypeaheadInputComponent,
    NggvTypeaheadDropdownListComponent,
  ],
})
export class NggvTypeaheadModule {}
