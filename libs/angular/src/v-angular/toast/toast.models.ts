export interface ToastMessage {
  type: MessageType;
  translocoScope: string;
  titleText: string;
  bodyText?: string;
  timeout?: number;
  timeoutId?: number;
  timeoutStartTime?: number;
}

export enum MessageType {
  Success = 'success',
  Information = 'information',
  Error = 'error',
  Warning = 'warning',
}
