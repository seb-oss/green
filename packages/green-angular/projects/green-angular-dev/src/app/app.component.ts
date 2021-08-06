import { Component } from '@angular/core';

@Component({
  selector: 'sg-ng-dev-root',
  template: `
    <h2>POC</h2>
    <form class='pt-4'>
      <h2>Native html components</h2>
      <button>Button</button>
      <button class='primary'>Primary button</button>
      <h2 class='mt-4'>Angular components</h2>
      <sg-ng-button>Button</sg-ng-button>
      <sg-ng-button variant='primary'>Primary button</sg-ng-button>
    </form>
  `,
  styles: []
})
export class AppComponent {
  title = 'green-angular-dev';
}
