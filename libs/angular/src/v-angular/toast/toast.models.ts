import { TemplateRef } from '@angular/core'

export interface ToastMessage {
  type: MessageType | 'success' | 'information' | 'error' | 'warning'
  translocoScope?: string
  titleText?: string
  bodyText?: string
  template?: TemplateRef<any>
  templateContext?: any
  timeout?: number
  timeoutId?: number
  timeoutStartTime?: number
}

export enum MessageType {
  Success = 'success',
  Information = 'information',
  Error = 'error',
  Warning = 'warning',
}
