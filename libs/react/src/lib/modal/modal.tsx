import { ModalType, Size } from '@sebgroup/extract'
import { MouseEvent, ReactNode, memo } from 'react'
import Button from '../form/button/button'

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

const ModalHeader = memo(({ header = '', onClose }: Partial<ModalProps>) => {
  const handleClose: ModalEventListener = (event) => {
    if (onClose) onClose(event)
  }
  return (
    <div className="header">
      <h3 id="modal_header">{header}</h3>
      <button className="close" onClick={handleClose}>
        <span className="sr-only">Close</span>
        <i></i>
      </button>
    </div>
  )
})

const ModalBody = memo(({ children }: Partial<ModalProps>) => {
  return <div className="body" id="modal_body">{children}</div>
})

const ModalFooter = memo(({
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
})

export const Modal = memo(({ type = 'default', isOpen, size = 'sm', ...props }: ModalProps) => {
  const modalContent = () => {
    switch (type) {
      case 'slideout': {
        let className: string | undefined = undefined;
        if (size === "lg") className = 'gds-slide-out--960';
        if (size === "md") className = 'gds-slide-out--768';

        return (
          <aside role="dialog" className={className} aria-modal="true" aria-labelledby="modal_header" aria-describedby="modal_body">
            <ModalHeader {...props} />
            <ModalBody {...props} />
            <ModalFooter {...props} />
          </aside>
        )
      }
      case 'takeover': {
        return (
          <main role="dialog" aria-modal="true" aria-labelledby="modal_header" aria-describedby="modal_body">
            <ModalHeader {...props} />
            <ModalBody {...props} />
            <ModalFooter {...props} />
          </main>
        )
      }
      default: {
        return (
          <section role="dialog" aria-modal="true" aria-labelledby="modal_header" aria-describedby="modal_body">
            <ModalHeader {...props} />
            <ModalBody {...props} />
            <ModalFooter {...props} />
          </section>
        )
      }
    }
  }

  return isOpen ? modalContent() : null
})

export default Modal
