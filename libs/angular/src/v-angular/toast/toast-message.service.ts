import { Injectable, TemplateRef } from '@angular/core'
import { Observable, Subject } from 'rxjs'

import { MessageType, ToastMessage } from './toast.models'

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  private messages: ToastMessage[] = []
  private messageSubject = new Subject<ToastMessage[]>()

  add(message: ToastMessage): void {
    const {
      type,
      translocoScope,
      titleText,
      template,
      templateContext,
      bodyText,
      timeout,
    } = message
    const newMessage: ToastMessage = {
      type: type ? type : MessageType.Information,
      translocoScope,
      titleText: titleText ?? '',
      bodyText,
      timeout,
      template,
      templateContext,
    }

    this.removeMessage(newMessage)
    this.messages.push(newMessage)
    this.messageSubject.next([...this.messages])
    this.setMessageRemoveTimeout(newMessage)
  }

  addMessage(
    type: 'success' | 'information' | 'error' | 'warning',
    translocoScope: string,
    titleText: string,
    bodyText?: string,
    timeout?: number,
    template?: TemplateRef<any>,
    templateContext?: any,
  ): void
  addMessage(
    type: MessageType,
    translocoScope: string,
    titleText: string,
    bodyText?: string,
    timeout?: number,
    template?: TemplateRef<any>,
    templateContext?: any,
  ): void {
    const newMessage: ToastMessage = {
      type,
      translocoScope,
      titleText,
      bodyText,
      timeout,
      template,
      templateContext,
    }

    this.removeMessage(newMessage)
    this.messages.push(newMessage)
    this.messageSubject.next([...this.messages])
    this.setMessageRemoveTimeout(newMessage)
  }

  removeMessage(message: ToastMessage): void {
    const index = this.getDuplicateMessageIndex(message.titleText ?? '')
    this.removeMessageByIndex(index)
  }

  pauseMessageTimeout(message: ToastMessage): void {
    if (message.timeoutStartTime && message.timeout) {
      const remainingTime =
        message.timeoutStartTime - Date.now() + message.timeout * 1000

      message.timeout = remainingTime / 1000
      window.clearTimeout(message.timeoutId)
    }
  }

  resumeMessageTimeout(message: ToastMessage): void {
    this.setMessageRemoveTimeout(message)
  }

  getMessages(): Observable<ToastMessage[]> {
    return this.messageSubject.asObservable()
  }

  private getDuplicateMessageIndex(newMessageText: string): number {
    return this.messages.findIndex(
      (message) => message.titleText === newMessageText,
    )
  }

  private removeMessageByIndex(id: number): void {
    if (id !== -1) {
      this.messages.splice(id, 1)
      this.messageSubject.next([...this.messages])
    }
  }

  private setMessageRemoveTimeout(newMessage: ToastMessage): void {
    if (newMessage.timeout) {
      newMessage.timeoutId = window.setTimeout(
        () => this.removeMessage(newMessage),
        newMessage.timeout * 1000,
      )
      newMessage.timeoutStartTime = Date.now()
    }
  }
}
