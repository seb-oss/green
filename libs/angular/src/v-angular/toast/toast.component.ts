import { animate, style, transition, trigger } from '@angular/animations'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { ToastMessageService } from './toast-message.service'
import { ToastMessage } from './toast.models'

import '@sebgroup/green-core/components/icon/icons/cross-small.js'

@Component({
    selector: 'nggv-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    animations: [
        trigger('toastAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(100%)' }),
                animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(100%)' })),
            ]),
        ]),
    ],
    standalone: false
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() closeButtonAriaLabel?: string

  private toastMessagesSubscription!: Subscription

  messages: ToastMessage[] = []

  constructor(private toastMessageService: ToastMessageService) {}

  ngOnInit() {
    this.toastMessagesSubscription = this.toastMessageService
      .getMessages()
      .subscribe((messages) => (this.messages = messages))
  }

  onMouseEnter(message: ToastMessage) {
    this.toastMessageService.pauseMessageTimeout(message)
  }

  onMouseLeave(message: ToastMessage) {
    this.toastMessageService.resumeMessageTimeout(message)
  }

  removeMessage(message: ToastMessage) {
    this.toastMessageService.removeMessage(message)
  }

  trackByMessageIndex(index: number, message: ToastMessage): number {
    return index;
  }

  ngOnDestroy(): void {
    if (this.toastMessagesSubscription) {
      this.toastMessagesSubscription.unsubscribe()
    }
  }
}
