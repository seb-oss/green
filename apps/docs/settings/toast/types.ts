export interface ToastAction {
  label: string
  onClick: () => void
}

export interface ToastItem {
  id: string
  title: string
  description?: string
  icon?: string
  action?: ToastAction
  duration?: number
  autoClose?: boolean
}

export interface ToastState {
  items: ToastItem[]
}

export interface ToastActions {
  add: (toast: Omit<ToastItem, 'id'>) => void
  remove: (id: string) => void
  clear: () => void
}

export interface ToastContext {
  state: ToastState
  actions: ToastActions
}
