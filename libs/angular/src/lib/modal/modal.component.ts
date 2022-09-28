import { Component, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { ModalType, Size } from '@sebgroup/extract';
import { NggModalService } from './modal.service';

@Component({
    selector: 'ngg-modal',
    styleUrls: ['./modal.component.scss'],
    templateUrl: './modal.component.html',
})
export class NggModalComponent implements OnDestroy {
    @Input() public modalType?: ModalType
    @Input() public header?: string
    @Input() public confirm?: string
    @Input() public dismiss?: string
    @Input() public size?: Size

    @Input() 
    public get isOpen(): boolean | undefined {
        return this._isOpen;
    }
    public set isOpen(value: boolean | undefined) {
        this._isOpen = value;

        if (value) {
            this.modalService.lockBody(this.ref.nativeElement);
        } else {
            this.modalService.releaseBody(this.ref.nativeElement);
        }
    }

    @Output() public isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public onClose: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    @Output() public onConfirm: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    @Output() public onDismiss: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
    
    @HostBinding('class.open') get open() { return this.isOpen; }
    @ViewChild('backdrop') private backdropRef?: ElementRef<HTMLInputElement>;
    private _isOpen?: boolean;
    
    constructor(private ref: ElementRef<HTMLElement>, private modalService: NggModalService) {
    }
    
    public handleCloseClick(event: MouseEvent) {
        this.closeModal(event);
    }

    public handleBackdropClick(event: MouseEvent) {
        if (event.target == this.backdropRef?.nativeElement)
            this.closeModal(event);
    }
    
    public handleDismiss(event: MouseEvent) {
        if (this.onDismiss.observers.length > 0)
            this.onDismiss.emit(event);
    }
    
    public handleConfirm(event: MouseEvent) {
        if (this.onConfirm.observers.length > 0)
            this.onConfirm.emit(event);
    }

    private closeModal(event: MouseEvent) {
        if (this.onClose.observers.length > 0) {
            this.onClose.emit(event);
        }
        else {
            this.isOpen = false;
            this.isOpenChange.emit(this.isOpen);
        }
    }
    
    ngOnDestroy(): void {
        this.modalService.releaseBody(this.ref.nativeElement);
    }
}

@Component({
    selector: '[ngg-modal-header]',
    styleUrls: ['./modal.component.scss'],
    template: `
    <h3 data-testid="modal-header-text">{{header}}</h3>
    <button data-testid="modal-close-button" class="close" (click)="this.handleClose($event)">
        <span className="sr-only">Close</span>
    </button>
    `
})
export class NggModalHeaderComponent {
    @Input() header?: string;
    @Output() onClose: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    handleClose(event: MouseEvent) {
        if (this.onClose.observers.length > 0)
            this.onClose.emit(event);
    }

}

@Component({
    selector: '[ngg-modal-body]',
    styleUrls: ['./modal.component.scss'],
    template: `<ng-content></ng-content>`
})
export class NggModalBodyComponent {
}

@Component({
    selector: '[ngg-modal-footer]',
    styleUrls: ['./modal.component.scss'],
    template: `
    <button data-testid="modal-dismiss-button" *ngIf="dismiss" class="secondary" (click)="this.handleDismiss($event)">{{dismiss}}</button>
    <button data-testid="modal-confirm-button" *ngIf="confirm" class="primary" (click)="this.handleConfirm($event)">{{confirm}}</button>
    `
})
export class NggModalFooterComponent {
    @Input() dismiss?: string;
    @Input() confirm?: string;
    @Output() onDismiss: EventEmitter<MouseEvent> = new EventEmitter();
    @Output() onConfirm: EventEmitter<MouseEvent> = new EventEmitter();

    handleDismiss(event: MouseEvent) {
        if (this.onDismiss.observers.length > 0)
            this.onDismiss.emit(event);
    }

    handleConfirm(event: MouseEvent) {
        if (this.onConfirm.observers.length > 0)
            this.onConfirm.emit(event);
    }
}