import { Component, EventEmitter, Input, Output } from '@angular/core'

import { AlertType } from './alert.models'

@Component({
    selector: 'nggv-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    standalone: false
})
export class AlertComponent {
  @Input() type: AlertType = AlertType.Success
  @Input() title?: string
  @Input() body?: string
  @Input() linkText?: string
  @Input() linkHref?: string
  @Input() actionText?: string
  @Input() closable = false

  @Output() closeAlert = new EventEmitter()
  @Output() clickLink = new EventEmitter()
  @Output() clickAction = new EventEmitter()

  onClose(e: Event): void {
    this.closeAlert.emit(e)
  }

  onLink(e: Event): void {
    this.clickLink.emit(e)
  }

  onAction(e: Event): void {
    this.clickAction.emit(e)
  }
}
