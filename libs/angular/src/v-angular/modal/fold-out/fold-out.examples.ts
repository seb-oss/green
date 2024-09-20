export const examplePrimary = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-fold-out-implementation',
  template: \`
  <ngv-fold-out>
    <!-- directive [ngvOption] sets styling for each list item -->
    <div ngvOption>View details</div>
    <div ngvOption>Sign payment</div>
    <div ngvOption class="my-custom-class">Delete</div>
  </ngv-fold-out>\`,
  styles: [\`.my-custom-class { /* ... */ }\`]
})
export class FoldOutImplementationComponent {}`;

export const exampleAlt = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-fold-out-implementation',
  template: \`
    <ngv-fold-out [flex]="'left'">
      <!-- directive [ngvOption] sets styling for each list item -->
      <div ngvOption>View details</div>
      <div ngvOption>Sign payment</div>
      <div ngvOption class="my-custom-class">Delete</div>
    </ngv-fold-out>\`,
    styles: [\`.my-custom-class { /* ... */ }\`]
})
export class FoldOutImplementationComponent {}`;
