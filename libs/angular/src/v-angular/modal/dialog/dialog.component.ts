import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'

import { DialogButtons } from '../modal.types'

export interface DialogEvent<T = any> {
  original: Event | undefined
  payload: T | undefined
}

@Component({
  selector: 'ngv-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  exportAs: 'dialog',
})
export class NgvDialogComponent implements OnInit {
  @ViewChild('dialog') dialogRef: ElementRef | undefined

  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'dialog'
  /** @internal */
  @HostBinding('class.sdv-modal-dialog') baseClass = true
  /** @internal Defines the default visibility state of the dialog. */
  @HostBinding('class.-active') @Input() shown = false
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
  @Input() dialogBodyId!: string
  /** It gives an ability for parent component to control if modal should be closed on esc button click. */
  @Input() closeModalOnEscape = true

  _buttons: DialogButtons | undefined
  /** Buttons are defined as a key-value pair where key is one of "positive|neutral|negative" and value is the button label. */
  @Input() set buttons(buttons: DialogButtons) {
    this._buttons = buttons
  }
  // /** @internal */
  // closeIcon = faTimes

  @Output() ngvCloseEvent = new EventEmitter<DialogEvent>()
  @Output() ngvPositiveEvent = new EventEmitter<DialogEvent>()
  @Output() ngvNeutralEvent = new EventEmitter<DialogEvent>()
  @Output() ngvNegativeEvent = new EventEmitter<DialogEvent>()

  protected _previous: HTMLElement | undefined
  protected _firstFocusable: HTMLElement | undefined
  protected _lastFocusable: HTMLElement | undefined

  ngOnInit() {
    this.dialogTitleId =
      this.dialogTitleId ?? 'sdv-dialog-title-' + window.ngv?.nextId()
    this.dialogBodyId =
      this.dialogBodyId ?? 'sdv-dialog-body-' + window.ngv?.nextId()

    this.shown = this.initiallyShown
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
        this.ngvPositiveEvent.emit(emitEvent)
        break
      case 'neutral':
        this.ngvNeutralEvent.emit(emitEvent)
        break
      case 'negative':
        this.ngvNegativeEvent.emit(emitEvent)
        break
      // case 'close' is handled by if-statement below with call to this.close()
    }
    if (this.autoClose) this.close(event, 'action')
  }

  open(opener?: HTMLElement) {
    this.shown = true
    this._previous = opener || (document.activeElement as HTMLElement)
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
      if (this._lastFocusable) this._lastFocusable.focus()
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
      this.ngvCloseEvent.emit(emitEvent)
    }
    this.shown = false
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
}
