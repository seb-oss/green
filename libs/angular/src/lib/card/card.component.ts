import { Component, Input } from '@angular/core'

@Component({
  selector: 'ngg-card',
  template: `
    <section class="card">
      <header>
        <ng-content select="[header]"></ng-content>
      </header>
      <ng-content select="[body]"></ng-content>
      <footer>
        <ng-content select="[footer]"></ng-content>
      </footer>
    </section>
  `,
})
export class NggCardComponent {
  @Input() isCloseable?: boolean
}
