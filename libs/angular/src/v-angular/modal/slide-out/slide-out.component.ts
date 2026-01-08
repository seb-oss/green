import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations'
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core'

import { DialogButtons } from '../modal.types'

/** Modal slide-out component based on vanilla pattern library design.
 * The modal title can be set using the @Input heading, and will automatically be translated if
 * the string matches a cms key.
 * Content can be injected into the body of the slide-out by either setting the @Input content to any type of
 * markdown, or using content projection (adding content between the `nggv-slideout-modal`-start and end tag).
 * If the content needs to stretch outside the normal padded area, add the attribute `slot="outside-content"` to the
 * projected content main element.
 * Test hooks:
 * The modal hook defaults to 'slideout' but is customizeable.
 * The closing button can be selected using 'slideout-close'.
 * The backdrop is selectable using 'slideout-backdrop'.
 */
@Component({
  selector: 'nggv-slideout-modal',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        query('.gds-slide-out', style({ transform: 'translateX(100%)' }), {
          optional: true,
        }),
        query('.gds-backdrop, [role=dialog]', style({ opacity: '0' }), {
          optional: true,
        }),
        group([
          query(
            '.gds-slide-out',
            animate(
              '350ms cubic-bezier(0.33, 1, 0.68, 1)',
              style({ transform: 'translateX(0)' }),
            ),
            { optional: true },
          ),
          query(
            '.gds-backdrop, [role=dialog]',
            animate(
              '350ms cubic-bezier(0.33, 1, 0.68, 1)',
              style({ opacity: '1' }),
            ),
            { optional: true },
          ),
        ]),
      ]),
      transition(':leave', [
        query('.gds-slide-out', style({ transform: 'translateX(0)' }), {
          optional: true,
        }),
        group([
          query(
            '.gds-slide-out',
            animate(
              '350ms cubic-bezier(0.33, 1, 0.68, 1)',
              style({ transform: 'translateX(100%)' }),
            ),
            { optional: true },
          ),
          query(
            '.gds-backdrop, [role=dialog]',
            animate(
              '350ms cubic-bezier(0.33, 1, 0.68, 1)',
              style({ opacity: '0' }),
            ),
            { optional: true },
          ),
        ]),
      ]),
    ]),
  ],
  standalone: false,
})
export class NggvSlideOutComponent implements OnInit {
  /** @internal */
  @ViewChild('slideOut') slideOutRef: ElementRef | undefined

  /** Sets from which side the modal should open. */
  @Input() side: 'left' | 'right' = 'right'
  /** Defines the default visibility state of the slide-out. */
  private _shown = false
  @Input() set shown(value: boolean) {
    this._shown = value
    if (value) {
      this.hideOverflow()
    } else {
      this.resetOverflow()
    }
  }
  get shown() {
    return this._shown
  }
  /** Defines the default visibility state of the modal. */
  @Input() initiallyShown = false
  /** Sets modal heading. Will be translated (using transloco) if the string matches a cms key. */
  @Input() heading!: string
  /**
   * Sets modal title. Will be translated (using transloco) if the string matches a cms key.
   * @deprecated - use @Input() heading instead.
   */
  @Input() title!: string
  /** Sets content body of the modal and can contain html code. The content body can also be set by nesting children to the modal tag. */
  @Input() content?: string
  /** Sets whether it is possible to close the modal from the top right corner. */
  @Input() closable = true
  /** Sets whether it is possible to close the modal by clicking outside the modal area (on the backdrop). */
  @Input() closableOutside = true
  /** Allows the modal content to decide the width of the modal. */
  @Input() autoWidth = false

  /** Special property used for selecting DOM elements during automated UI testing. */
  @Input() thook = 'slideout'

  /** Aria label for the Close button with "X" icon, in the header */
  @Input() closeButtonAriaLabel?: string

  /** @internal */
  get fromLeft(): boolean {
    return this.side === 'left'
  }

  // /** @internal */
  // closeIcon = faTimes;

  _buttons: DialogButtons | undefined
  /** Buttons are defined as a key-value pair where key is one of "positive|neutral|negative" and value is the button label. */
  @Input() set buttons(buttons: DialogButtons) {
    this._buttons = buttons
  }

  /** Will emit true on closing event. */
  @Output() nggvCloseEvent = new EventEmitter<boolean>()
  @Output() nggvPositiveEvent = new EventEmitter<void>()
  @Output() nggvNeutralEvent = new EventEmitter<void>()
  @Output() nggvNegativeEvent = new EventEmitter<void>()

  private previous: HTMLElement | undefined
  private firstFocusable: HTMLElement | undefined
  private lastFocusable: HTMLElement | undefined

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
  ) {
    // appends methods for opening and closing modal to native element
    this.host.nativeElement.open = this.open.bind(this)
    this.host.nativeElement.close = this.close.bind(this)
  }

  ngOnInit() {
    this._shown = this.initiallyShown
    if (this.shown) this.limitFocusable()
  }

  public onAction(event: Event, action: string) {
    event.preventDefault()
    switch (action) {
      case 'positive':
        this.nggvPositiveEvent.emit()
        break
      case 'neutral':
        this.nggvNeutralEvent.emit()
        break
      case 'negative':
        this.nggvNegativeEvent.emit()
        break
    }
    this.close(event, 'action')
  }

  /**
   * Called on a modal element. Opens the modal and sets focus to the last focusable element in the modal.
   *
   * @param opener - reference to last focused element before opening modal
   * @returns - true
   */
  open(opener?: HTMLElement): boolean {
    this._shown = true
    this.previous = opener || (document.activeElement as HTMLElement)
    this.hideOverflow()
    this.limitFocusable()
    return true
  }

  /**
   * Called on a modal element. Closes the modal and emits a `nggvCloseEvent`. Sets focus to the lats focused element if an element was sent in to open function.
   *
   * @param event
   * @param initiator
   */
  @HostListener('click', ['$event', '"host"'])
  @HostListener('document:keydown.escape', ['$event'])
  close(event?: Event, initiator?: string): void {
    console.log('1', event?.target)
    console.log('2', initiator)
    console.log('2b', initiator === 'host')

    if (
      this.slideOutRef &&
      !this.slideOutRef.nativeElement.contains(event?.target) &&
      !this.closableOutside
    ) {
      console.log('obaobaboaboaboaobaob')
      return
    }

    if (
      initiator === 'host' &&
      event instanceof MouseEvent &&
      event.target !== event.currentTarget
    ) {
      console.log('1111111111111111111111111')
      return
    }

    this.resetOverflow()

    if (this.shown && this.closable) {
      this.nggvCloseEvent.emit(this.shown)
      this.shown = false
      window.setTimeout(() => {
        if (this.previous) this.previous.focus()
        this.previous = undefined
      })
    }
  }

  /** @internal */
  @HostListener('keydown', ['$event'])
  focusTrap(event: KeyboardEvent) {
    if (event.key !== 'Tab') return
    if (event.shiftKey) {
      // shift + tab
      if (
        this.lastFocusable &&
        document.activeElement === this.firstFocusable
      ) {
        this.lastFocusable.focus()
        event.preventDefault()
      }
    } else {
      // tab
      if (
        this.firstFocusable &&
        document.activeElement === this.lastFocusable
      ) {
        this.firstFocusable.focus()
        event.preventDefault()
      }
    }
  }

  private limitFocusable() {
    window.setTimeout(() => {
      if (!this.slideOutRef) return
      const focusable = this.slideOutRef.nativeElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      this.firstFocusable = focusable[0]
      this.lastFocusable = focusable[focusable.length - 1]
      if (this.firstFocusable) this.firstFocusable.focus()
    })
  }

  private hideOverflow(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden')
  }

  private resetOverflow(): void {
    this.renderer.removeStyle(document.body, 'overflow')
  }
}
