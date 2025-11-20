import { Component, EventEmitter, Input, Output } from '@angular/core'

import { randomId } from '@sebgroup/extract'

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'div[ngg-accordion-list-item]',
    templateUrl: './accordion-list-item.component.html',
    standalone: false
})
export class NggAccordionListItemComponent {
  @Input() public id: string = randomId()
  @Input() public labelElementLevel = 2
  @Input() public listItemHeader = ''
  @Input() public listItemSubHeader = ''
  @Output() public expandedChange: EventEmitter<NggAccordionListItemComponent> =
    new EventEmitter<NggAccordionListItemComponent>()

  public contentHeight = '0px'
  public isExpanded = false

  public shrink(): void {
    this.isExpanded = false
    this.contentHeight = '0px'
  }

  public expand(): void {
    this.isExpanded = true
    this.contentHeight = 'auto'
  }

  public toggleExpanded(): void {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      this.contentHeight = 'auto'
    } else {
      this.contentHeight = '0px'
    }

    this.expandedChange.emit(this)
  }
}
