import { ModalRole, ModalType, Size } from '@sebgroup/extract'
import { MouseEvent, ReactNode } from 'react'
import Button from '../form/button'

type ModalEventListener = (event: MouseEvent<HTMLButtonElement>) => unknown

export interface ModalProps {
  type?: ModalType
  header?: string
  children: ReactNode
  confirm?: string
  dismiss?: string
  size?: Size
  isOpen?: boolean
  onClose?: ModalEventListener
  onConfirm?: ModalEventListener
  onDismiss?: ModalEventListener
}

const ModalHeader = ({ header = '', onClose }: Partial<ModalProps>) => {
  const handleClose: ModalEventListener = (event) => {
    if (onClose) onClose(event)
  }
  return (
    <div className="header">
      <h3>{header}</h3>
      <button className="close" onClick={handleClose}>
        <span className="sr-only">Close</span>
      </button>
    </div>
  )
}

const ModalBody = ({ children }: Partial<ModalProps>) => {
  return <div className="body">{children}</div>
}

const ModalFooter = ({
  confirm,
  dismiss,
  onClose,
  onConfirm,
  onDismiss,
}: Partial<ModalProps>) => {
  const handleConfirm: ModalEventListener = (event) => {
    if (onConfirm) onConfirm(event)
    if (onClose) onClose(event)
  }
  const handleDismiss: ModalEventListener = (event) => {
    if (onDismiss) onDismiss(event)
    if (onClose) onClose(event)
  }
  return (
    <div className="footer">
      {dismiss && (
        <Button variant="secondary" onClick={handleDismiss}>
          {dismiss}
        </Button>
      )}
      {confirm && (
        <Button variant="primary" onClick={handleConfirm}>
          {confirm}
        </Button>
      )}
    </div>
  )
}

export const Modal = ({ type = 'default', isOpen, ...props }: ModalProps) => {
  return isOpen ? (
    <section role={ModalRole[type]}>
      <ModalHeader {...props} />
      <ModalBody {...props} />
      <ModalFooter {...props} />
    </section>
  ) : null
}

export default Modal
