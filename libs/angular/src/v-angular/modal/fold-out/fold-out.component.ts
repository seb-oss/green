import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core'
import { fromEvent, Subscription } from 'rxjs'
import { filter, takeWhile } from 'rxjs/operators'

import { KeyboardKey } from './keyboard-key.enum'

@Component({
    selector: 'nggv-fold-out',
    templateUrl: './fold-out.component.html',
    styleUrls: ['./fold-out.component.scss'],
    standalone: false
})
export class NggvFoldOutComponent implements OnDestroy, AfterViewInit {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'fold-out'

  @ViewChild('foldout', { read: ElementRef }) inputRef?: ElementRef
  @ViewChild('childrenContainer') container?: ElementRef

  /** Aligns the dropdown list with the buttons right or left side */
  @Input() alignOptions!: 'left' | 'right'
  /** Option to show text with action button */
  @Input() text?: string
  /** Aria label for the fold-out button */
  @Input() ariaLabel?: string
  /** Sets the width property of the list. Default = fit-content */
  @Input() listWidth: 'fit-content' | 'max-content' | 'min-content' | 'auto' =
    'fit-content'
  /** Emits when the children container collapses, for components with change detection strategy "OnPush" */
  @Output() actionEmitter = new EventEmitter<void>()

  /** @internal */
  protected shown = false

  private activeIndex = -1
  private firstArrowClick = true
  private ariaFocusAttributeName = 'aria-focus'
  private blurAllElements = (): void => this.children.forEach(this.blurElement)
  private blurElement = (element: HTMLElement): void =>
    element.setAttribute(this.ariaFocusAttributeName, 'false')
  private focusElement = (element: HTMLElement): void =>
    element.setAttribute(this.ariaFocusAttributeName, 'true')
  private getChildIndex = (element: HTMLElement | undefined): number =>
    element ? this.children.indexOf(element) : -1

  private onClickSubscription: Subscription | undefined
  private onKeyUpSubscription: Subscription | undefined

  private get children() {
    return Array.from(
      (this.container?.nativeElement as HTMLElement).children ?? [],
    ) as HTMLElement[]
  }

  private get lastChild(): HTMLElement | undefined {
    return this.children[this.children.length - 1] || undefined
  }

  private get focusedElement(): HTMLElement | undefined {
    return this.children[this.activeIndex] || undefined
  }

  ngAfterViewInit(): void {
    this.blurAllElements()
  }

  ngOnDestroy(): void {
    this.onClickSubscription?.unsubscribe()
    this.onKeyUpSubscription?.unsubscribe()
  }

  /** Toggle display of the option list */
  toggleVisibility(): void {
    this.setVisibility(!this.shown)
  }

  setVisibility(setVisibility = true): void {
    if (this.shown === setVisibility) {
      return
    }

    this.resetChildren()
    this.shown = setVisibility

    if (this.shown) {
      this.subscribeToOutsideClickEvent()
      this.subscribeToKeyDownEvent()
    } else {
      this.onClickSubscription?.unsubscribe()
      this.onKeyUpSubscription?.unsubscribe()
      this.actionEmitter.emit()
    }
  }

  /**
   * Closes the fold-out on click outside.
   */
  private subscribeToOutsideClickEvent(): void {
    this.onClickSubscription = fromEvent(document, 'click')
      .pipe(takeWhile(() => this.shown))
      .subscribe({
        next: (event: Event) => {
          if (
            this.shown &&
            !this.inputRef?.nativeElement.contains(event.target)
          ) {
            this.setVisibility(false)
          }
        },
      })
  }

  private subscribeToKeyDownEvent(): void {
    if (!this.children.length) {
      return
    }

    this.onKeyUpSubscription = fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        takeWhile(() => this.shown),
        filter((event) =>
          Object.values(KeyboardKey).includes(event.code as KeyboardKey),
        ),
      )
      .subscribe((event) => {
        event.preventDefault()
        event.stopPropagation()
        this.onKeyDown(event)
      })
  }

  private onKeyDown(event: KeyboardEvent): void {
    switch (event.code) {
      case KeyboardKey.Escape:
      case KeyboardKey.Tab:
        this.setVisibility(false)
        break
      case KeyboardKey.Enter:
      case KeyboardKey.Space:
        this.takeAction()
        break
      case KeyboardKey.ArrowUp:
        this.handleArrowUpClick()
        break
      case KeyboardKey.ArrowDown:
        this.handleArrowDownClick()
        break
    }
  }

  private handleArrowUpClick(): void {
    this.activeIndex = this.firstArrowClick
      ? this.getChildIndex(this.lastChild)
      : this.activeIndex === 0
        ? this.getChildIndex(this.lastChild)
        : this.activeIndex - 1

    this.firstArrowClick = false
    this.handleFocus()
  }

  private handleArrowDownClick(): void {
    this.activeIndex = this.firstArrowClick
      ? 0
      : (this.activeIndex + 1) % this.children.length
    this.firstArrowClick = false
    this.handleFocus()
  }

  private handleFocus(): void {
    this.blurAllElements()
    this.focusElement(this.children[this.activeIndex])
  }

  private takeAction(): void {
    if (this.focusedElement) {
      this.focusedElement.click()
    }

    this.setVisibility(false)
  }

  private resetChildren(): void {
    this.blurAllElements()
    this.activeIndex = -1
    this.firstArrowClick = true
  }
}
