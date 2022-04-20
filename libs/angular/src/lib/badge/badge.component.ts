import { Component, Input, ViewContainerRef } from '@angular/core'
import { BadgeType } from '@sebgroup/extract'

@Component({
  selector: 'ngg-badge[title]',
  template: `
    <span [ngClass]="'badge ' + badgeType">
      <strong>{{ title }}</strong>
      <button *ngIf="isCloseable" class="close" (click)="close()">
        <span class="sr-only">{closeText}</span>
      </button>
    </span>
  `,
})
export class NggBadgeComponent {
  @Input() title!: string
  @Input() badgeType?: BadgeType
  @Input() isCloseable?: boolean
  @Input() closeText?: string

  constructor(private viewContainerRef: ViewContainerRef) {}

  close() {
    this.viewContainerRef.element.nativeElement.remove()
  }
}
