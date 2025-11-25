import {
  AfterContentChecked,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { NggAccordionListItemComponent } from './accordion-list-item.component'

/**
 * @deprecated
 * NggAccordion is deprecated in favor of GdsDetails found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-details--docs
 */
@Component({
    selector: 'ngg-accordion',
    templateUrl: './accordion.component.html',
    standalone: false
})
export class NggAccordionComponent implements AfterContentChecked, OnDestroy {
  @ContentChildren(NggAccordionListItemComponent) private items:
    | QueryList<NggAccordionListItemComponent>
    | undefined
  private _expandAll: Observable<void> | undefined
  private expandAllSubscription: Subscription | undefined
  @Input() public closeOthers = false
  @Input()
  public get expandAll(): Observable<void> | undefined {
    return this._expandAll
  }
  public set expandAll(value: Observable<void> | undefined) {
    if (value === this._expandAll) return
    if (this._expandAll) {
      this.expandAllSubscription?.unsubscribe()
    }

    this._expandAll = value
    this.expandAllSubscription = this._expandAll?.subscribe(() => {
      if (this.closeOthers === false) {
        const itemArray = this.items ? Array.from(this.items) : undefined
        if (itemArray) {
          for (const i of itemArray) {
            i.expand()
          }
        }
      }
    })
  }

  public ngAfterContentChecked(): void {
    if (this.closeOthers) {
      const itemArray = this.items ? Array.from(this.items) : undefined
      if (itemArray) {
        for (const i of itemArray) {
          i.expandedChange.subscribe((child) => this.onChildExpanded(child))
        }
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.closeOthers) {
      const itemArray = this.items ? Array.from(this.items) : undefined
      if (itemArray) {
        for (const i of itemArray) {
          i.expandedChange.unsubscribe()
        }
      }
    }

    this.expandAllSubscription?.unsubscribe()
  }

  private onChildExpanded(childIdentity: NggAccordionListItemComponent) {
    if (this.closeOthers && childIdentity.isExpanded && this.items) {
      this.items.forEach((item) => {
        if (item !== childIdentity) item.shrink()
      })
    }
  }
}
