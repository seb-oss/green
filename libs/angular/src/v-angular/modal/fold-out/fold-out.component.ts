import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core'

import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

import { fromEvent, Subscription } from 'rxjs'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'nggv-fold-out',
  templateUrl: './fold-out.component.html',
  styleUrls: ['./fold-out.component.scss'],
})
export class NgvFoldOutComponent implements OnDestroy {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'fold-out'

  @ViewChild('foldout', { read: ElementRef }) inputRef?: ElementRef

  /** Aligns the dropdown list with the buttons right or left side */
  @Input() alignOptions!: 'left' | 'right'

  onClickSubscription: Subscription | undefined
  // /** @internal */
  // faEllipsisH: IconDefinition = faEllipsisH
  /** @internal */
  shown = false

  constructor() {
    // Empty constructor
  }

  ngOnDestroy(): void {
    this.onClickSubscription?.unsubscribe()
  }

  /** Toggle display of the option list */
  toggleVisibility(event?: Event, setVisibility?: boolean): void {
    this.shown = setVisibility !== undefined ? setVisibility : !this.shown
    if (this.shown) this.subscribeToOutsideClickEvent()
  }

  /**
   * Closes the fold-out on click outside.
   */
  subscribeToOutsideClickEvent(): void {
    this.onClickSubscription = fromEvent(document, 'click').subscribe({
      next: (event: Event) => {
        if (
          this.shown &&
          !this.inputRef?.nativeElement.contains(event.target)
        ) {
          this.toggleVisibility()
          this.onClickSubscription?.unsubscribe()
        }
      },
    })
  }
}
