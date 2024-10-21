import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgvTypeaheadHighlightComponent } from './typeahead-highlight/typeahead-highlight.component'
import { NgvTypeaheadInputComponent } from './typeahead-input/typeahead-input.component'
import { NgvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NgvTypeaheadDropdownListComponent } from './typeahead-dropdown-list/typeahead-dropdown-list.component'

@NgModule({
  declarations: [
    NgvTypeaheadHighlightComponent,
    NgvTypeaheadInputComponent,
    NgvTypeaheadDropdownListComponent,
  ],
  imports: [CommonModule, NgvTooltipModule],
  exports: [
    NgvTypeaheadHighlightComponent,
    NgvTypeaheadInputComponent,
    NgvTypeaheadDropdownListComponent,
  ],
})
export class NgvTypeaheadModule {}
