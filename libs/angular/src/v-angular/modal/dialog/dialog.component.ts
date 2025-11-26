import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y'
import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core'

import { DialogButtons } from '../modal.types'

export interface DialogEvent<T = any> {
  original: Event | undefined
  payload: T | undefined
}

@Component({
    selector: 'nggv-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    exportAs: 'dialog',
    standalone: false
})
export class NggvDialogComponent implements OnInit, OnDestroy {
  private configurableFocusTrap: ConfigurableFocusTrap

  @ViewChild('dialog') dialogRef: ElementRef | undefined

  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'dialog'
  /** @internal */
  @HostBinding('class.gds-modal-dialog') baseClass = true
  /** @internal Defines the default visibility state of the dialog. */
  private _shown = false
  @Input() set shown(value: boolean) {
    this._shown = value
    this.enableFocusTrap()
    if (value) {
      this.hideOverflow()
    } else {
      this.resetOverflow()
    }
  }
  get shown() {
    return this._shown
  }

  /** @internal */
  @HostBinding('attr.aria-hidden') get ariaHidden() {
    return !this.shown
  }
  /** Defines the default visibility state of the dialog. */
  @Input() initiallyShown = false
  /** Sets modal heading. Will be translated (using transloco) if the string matches a cms key. */
  @Input() heading!: string
  /**
   * Sets modal title. Will be translated (using transloco) if the string matches a cms key.
   * @deprecated - use heading instead.
   */
  @Input() title = 'Attention'
  /** Sets content body and can contain html code. The content body can also be set by nesting children to the dialog tag. */
  @Input() content?: string
  /** Defines if dialog should close on action. */
  @Input() autoClose = true
  /** An array of event payloads that will be added to every click context menu item click. */
  @Input() payload: any = {}

  @Input() dialogTitleId!: string
  /** Pass the null if you don't want dialog body to be announced by the screen reader */
  @Input() dialogBodyId!: string | null
  /** It gives an ability for parent component to control if modal should be closed on esc button click. */
  @Input() closeModalOnEscape = true
  /** Aria label for the Close button with "X" icon, in the header */
  @Input() closeButtonAriaLabel?: string

  _buttons: DialogButtons | undefined
  /** Buttons are defined as a key-value pair where key is one of "positive|neutral|negative" and value is the button label. */
  @Input() set buttons(buttons: DialogButtons) {
    this._buttons = buttons
  }
  // /** @internal */
  // closeIcon = faTimes

  @Output() nggvCloseEvent = new EventEmitter<DialogEvent>()
  @Output() nggvPositiveEvent = new EventEmitter<DialogEvent>()
  @Output() nggvNeutralEvent = new EventEmitter<DialogEvent>()
  @Output() nggvNegativeEvent = new EventEmitter<DialogEvent>()
  @Output() nggvDangerEvent = new EventEmitter<DialogEvent>()

  protected _previous: HTMLElement | undefined
  protected _firstFocusable: HTMLElement | undefined
  protected _lastFocusable: HTMLElement | undefined

  constructor(
    private renderer: Renderer2,
    private ref: ElementRef<HTMLElement>,
    private configurableFocusTrapFactory: ConfigurableFocusTrapFactory,
  ) {
    this.configurableFocusTrap = this.configurableFocusTrapFactory.create(
      this.ref.nativeElement,
    )
  }

  ngOnInit() {
    this.dialogTitleId =
      this.dialogTitleId ?? 'gds-dialog-title-' + window.nggv?.nextId()
    if (this.dialogBodyId !== null) {
      this.dialogBodyId =
        this.dialogBodyId ?? 'gds-dialog-body-' + window.nggv?.nextId()
    }

    this._shown = this.initiallyShown
    if (this.shown) this._limitFocusable()
  }

  public onAction(event: Event, action: string) {
    event.preventDefault()
    const emitEvent = {
      original: event,
      payload: this.payload,
    }
    switch (action) {
      case 'positive':
        this.nggvPositiveEvent.emit(emitEvent)
        break
      case 'neutral':
        this.nggvNeutralEvent.emit(emitEvent)
        break
      case 'negative':
        this.nggvNegativeEvent.emit(emitEvent)
        break
      case 'danger':
        this.nggvDangerEvent.emit(emitEvent)
        break
      // case 'close' is handled by if-statement below with call to this.close()
    }
    if (this.autoClose) this.close(event, 'action')
  }

  open(opener?: HTMLElement) {
    this._shown = true
    this._previous = opener || (document.activeElement as HTMLElement)

    this.enableFocusTrap()
    this.hideOverflow()
    this._limitFocusable()
    return true
  }

  protected _limitFocusable() {
    window.setTimeout(() => {
      if (!this.dialogRef) return
      const focusable = this.dialogRef.nativeElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      this._firstFocusable = focusable[0]
      this._lastFocusable = focusable[focusable.length - 1]
      if (this._firstFocusable) this._firstFocusable.focus()
    })
  }

  @HostListener('click', ['$event', '"host"'])
  @HostListener('document:keydown.escape', ['$event'])
  close(event?: Event, initiator?: string) {
    if (initiator === 'host' && event instanceof MouseEvent) return
    // prevent modal from closing on esc button click when closeModalOnEscape is set to false
    if (!this.closeModalOnEscape) return
    if (this.shown) {
      const emitEvent = {
        original: event,
        payload: this.payload,
      }
      this.nggvCloseEvent.emit(emitEvent)
    }

    this.resetOverflow()
    this.disableFocusTrap()

    this._shown = false
    window.setTimeout(() => {
      if (this._previous) this._previous.focus()
      this._previous = undefined
    })
  }

  @HostListener('keydown', ['$event'])
  focusTrap(event: KeyboardEvent) {
    if (event.key !== 'Tab') return
    if (event.shiftKey) {
      // shift + tab
      if (
        this._lastFocusable &&
        document.activeElement === this._firstFocusable
      ) {
        this._lastFocusable.focus()
        event.preventDefault()
      }
    } else {
      // tab
      if (
        this._firstFocusable &&
        document.activeElement === this._lastFocusable
      ) {
        this._firstFocusable.focus()
        event.preventDefault()
      }
    }
  }

  // to prevent background scrolling when modal is open
  private hideOverflow(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden')
  }

  private resetOverflow(): void {
    this.renderer.removeStyle(document.body, 'overflow')
  }

  private enableFocusTrap() {
    if (this.configurableFocusTrap) {
      this.configurableFocusTrap.enabled = true
      this.configurableFocusTrap.focusInitialElementWhenReady()
    }
  }

  private disableFocusTrap() {
    if (this.configurableFocusTrap) {
      this.configurableFocusTrap.enabled = false
    }
  }

  ngOnDestroy(): void {
    this.configurableFocusTrap?.destroy()
  }
}
