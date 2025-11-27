import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations'
import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y'
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { ModalType, Size } from '@sebgroup/extract'
import { NggModalFooterDirective } from './modal-footer.directive'
import { NggModalHeaderDirective } from './modal-header.directive'

/**
 * @deprecated use <gds-dialog> from green-core instead.
 */
@Component({
    selector: 'ngg-modal',
    styleUrls: ['./modal.component.scss'],
    templateUrl: './modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('modalAnimation', [
            transition(':enter', [
                query('aside', style({ transform: 'translateX(100%)' }), {
                    optional: true,
                }),
                query('.backdrop, [role=dialog]', style({ opacity: '0' }), {
                    optional: true,
                }),
                group([
                    query('aside', animate('350ms cubic-bezier(0.33, 1, 0.68, 1)', style({ transform: 'translateX(0)' })), { optional: true }),
                    query('.backdrop, [role=dialog]', animate('350ms cubic-bezier(0.33, 1, 0.68, 1)', style({ opacity: '1' })), { optional: true }),
                ]),
            ]),
            transition(':leave', [
                query('aside', style({ transform: 'translateX(0)' }), {
                    optional: true,
                }),
                group([
                    query('aside', animate('350ms cubic-bezier(0.33, 1, 0.68, 1)', style({ transform: 'translateX(100%)' })), { optional: true }),
                    query('.backdrop, [role=dialog]', animate('350ms cubic-bezier(0.33, 1, 0.68, 1)', style({ opacity: '0' })), { optional: true }),
                ]),
            ]),
        ]),
    ],
    standalone: false
})
export class NggModalComponent implements OnDestroy, OnInit {
  @Input() public modalType?: ModalType
  @Input() public header?: string
  @Input() public closeText = 'Close Modal'
  @Input() public confirmLabel?: string
  @Input() public dismissLabel?: string
  @Input() public size?: Size
  @Input() public hideHeader?: boolean
  @Input() public hideFooter?: boolean
  @Input() public disableBodyScroll?: boolean = true
  @Input() public get trapFocus(): boolean | undefined {
    return this._trapFocus
  }
  public set trapFocus(value: boolean | undefined) {
    this._trapFocus = value

    if (value) {
      if (this._isOpen) {
        this.enableFocusTrap()
      }
    } else {
      this.disableFocusTrap()
    }
  }

  @Input()
  public get isOpen(): boolean | undefined {
    return this._isOpen
  }
  public set isOpen(value: boolean | undefined) {
    this._isOpen = value

    if (value) {
      if (this.trapFocus) {
        this.enableFocusTrap()
      }

      if (this.disableBodyScroll) {
        disableBodyScroll(this.ref.nativeElement, {
          allowTouchMove: (el) => {
            // Allow touchmove for elements inside modal, its required for scroll to work on iOS devices
            return this.ref.nativeElement.contains(el)
          },
        })
      }
    } else {
      this.disableFocusTrap()
      if (this.disableBodyScroll) {
        enableBodyScroll(this.ref.nativeElement)
      }
    }
  }

  @Output() public isOpenChange: EventEmitter<boolean> =
    new EventEmitter<boolean>()
  @Output() public closed: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  @Output() public confirm: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  @Output() public dismiss: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()

  @HostBinding('class.open') get open() {
    return this.isOpen
  }
  @ViewChild('backdrop') private backdropRef?: ElementRef<HTMLInputElement>
  @ContentChild(NggModalHeaderDirective)
  public modalHeaderContent?: NggModalHeaderDirective
  @ContentChild(NggModalFooterDirective)
  public modalFooterContent?: NggModalFooterDirective

  public guid = ''

  private _isOpen?: boolean
  private _trapFocus?: boolean
  private configurableFocusTrap: ConfigurableFocusTrap

  constructor(
    private ref: ElementRef<HTMLElement>,
    private configurableFocusTrapFactory: ConfigurableFocusTrapFactory,
  ) {
    this.configurableFocusTrap = this.configurableFocusTrapFactory.create(
      this.ref.nativeElement,
    )
  }

  ngOnInit(): void {
    this.guid = globalThis.crypto.randomUUID()

    if (this._isOpen && this.trapFocus) this.enableFocusTrap()
    else this.disableFocusTrap()
  }

  public handleCloseClick(event: MouseEvent) {
    this.closeModal(event)
  }

  public handleBackdropClick(event: MouseEvent) {
    if (event.target == this.backdropRef?.nativeElement) this.closeModal(event)
  }

  public handleDismiss(event: MouseEvent) {
    this.dismiss.emit(event)
  }

  public handleConfirm(event: MouseEvent) {
    this.confirm.emit(event)
  }

  private closeModal(event: MouseEvent) {
    if (this.closed.observers.length > 0) {
      this.closed.emit(event)
    } else {
      this.isOpen = false
      this.isOpenChange.emit(this.isOpen)
    }
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
    enableBodyScroll(this.ref.nativeElement)
  }
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[ngg-modal-header]',
    styleUrls: ['./modal.component.scss'],
    template: `
    <h3 data-testid="modal-header-text">{{ header }}</h3>
    <button
      data-testid="modal-close-button"
      class="close"
      [attr.aria-label]="closeText"
      (click)="this.handleClose($event)"
    >
      <i></i>
    </button>
  `,
    standalone: false
})
export class NggModalHeaderComponent {
  @Input() header?: string
  @Input() closeText?: string
  @Output() closed: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()

  handleClose(event: MouseEvent) {
    this.closed.emit(event)
  }
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[ngg-modal-body]',
    styleUrls: ['./modal.component.scss'],
    template: `<ng-content></ng-content>`,
    standalone: false
})
export class NggModalBodyComponent {}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[ngg-modal-footer]',
    styleUrls: ['./modal.component.scss'],
    template: `
    <button
      data-testid="modal-dismiss-button"
      *ngIf="dismissLabel"
      class="secondary"
      (click)="this.handleDismiss($event)"
    >
      {{ dismissLabel }}
    </button>
    <button
      data-testid="modal-confirm-button"
      *ngIf="confirmLabel"
      class="primary"
      (click)="this.handleConfirm($event)"
    >
      {{ confirmLabel }}
    </button>
  `,
    standalone: false
})
export class NggModalFooterComponent {
  @Input() dismissLabel?: string
  @Input() confirmLabel?: string
  @Output() dismiss: EventEmitter<MouseEvent> = new EventEmitter()
  @Output() confirm: EventEmitter<MouseEvent> = new EventEmitter()

  handleDismiss(event: MouseEvent) {
    this.dismiss.emit(event)
  }

  handleConfirm(event: MouseEvent) {
    this.confirm.emit(event)
  }
}
