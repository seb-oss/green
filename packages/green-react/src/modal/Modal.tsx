import { FC, ReactNode } from 'react'
import { ModalType, ModalRole, ModalSize } from '@sebgroup/extract/src/modal'
import Button from '../button'
import { MouseEvent } from 'react'

export interface ModalProps {
  type: ModalType
  header?: string
  children: ReactNode
  confirm?: string
  dismiss?: string
  size?: ModalSize

  onClose?: (...args: any[]) => void
  onConfirm?: (...args: any[]) => void
  onDismiss?: (...args: any[]) => void
}

const ModalHeader: FC<Partial<ModalProps>> = ({ header = '', onClose }) => {
  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClose) onClose(event)
  }
  return (
    <div className="header">
      <h3>{ header }</h3>
      <button className="close" onClick={handleClose}>
        <span className="sr-only">Close</span>
      </button>
    </div>
  )
}

const ModalBody: FC<Partial<ModalProps>> = ({ children }) => {
  return (
    <div className="body">
      { children }
    </div>
  )
}

const ModalFooter: FC<Partial<ModalProps>> = ({
  confirm,
  dismiss,
  onClose,
  onConfirm,
  onDismiss,
}) => {
  const handleConfirm = (event: MouseEvent<HTMLButtonElement>) => {
    if (onConfirm) onConfirm(event)
    if (onClose) onClose(event)
  }
  const handleDismiss = (event: MouseEvent<HTMLButtonElement>) => {
    if (onDismiss) onDismiss(event)
    if (onClose) onClose(event)
  }
  return (
    <div className="footer">
      { dismiss && (
        <Button variant="secondary" onClick={handleDismiss}>{dismiss}</Button>
      )}
      { confirm && (
        <Button variant="primary" onClick={handleConfirm}>{confirm}</Button>
      )}
    </div>
  )
}

const Modal: FC<ModalProps> = ({
  type = 'default',
  ...props
}) => {
  return (
    <section role={ModalRole[type]}>
      <ModalHeader {...props} />
      <ModalBody {...props} />
      <ModalFooter {...props} />
    </section>
  )
}

export default Modal
