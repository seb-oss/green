export interface AlertMessage {
  type: AlertType
  titleText?: string
  bodyText?: string
  linkText?: string
  actionText?: string
}

export enum AlertType {
  Success = 'success',
  Information = 'information',
  Warning = 'warning',
  Danger = 'danger',
}
