export type ModalType = 'default' | 'slideout' | 'takeover'
export const ModalRole: Record<ModalType, string> = {
  default: 'dialog',
  slideout: 'aside',
  takeover: 'main',
}
