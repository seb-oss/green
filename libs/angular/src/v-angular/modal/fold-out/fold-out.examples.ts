export const examplePrimary = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-fold-out-implementation',
  template: \`
  <nggv-fold-out>
    <!-- directive [nggvOption] sets styling for each list item -->
    <div nggvOption>View details</div>
    <div nggvOption>Sign payment</div>
    <div nggvOption class="my-custom-class">Delete</div>
  </nggv-fold-out>\`,
  styles: [\`.my-custom-class { /* ... */ }\`]
})
export class FoldOutImplementationComponent {}`

export const exampleAlt = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-fold-out-implementation',
  template: \`
    <nggv-fold-out [flex]="'left'">
      <!-- directive [nggvOption] sets styling for each list item -->
      <div nggvOption>View details</div>
      <div nggvOption>Sign payment</div>
      <div nggvOption class="my-custom-class">Delete</div>
    </nggv-fold-out>\`,
    styles: [\`.my-custom-class { /* ... */ }\`]
})
export class FoldOutImplementationComponent {}`
