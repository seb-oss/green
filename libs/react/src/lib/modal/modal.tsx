import { ModalType, Size, randomId } from '@sebgroup/extract'
import { DetailedHTMLProps, HTMLAttributes, MouseEvent, ReactNode, useState } from 'react'
import Button from '../form/button/button'

type ModalEventListener = (event: MouseEvent<HTMLButtonElement>|null) => unknown

export interface ModalProps {
  type?: ModalType
  header?: string
  children: ReactNode
  confirm?: string
  dismiss?: string
  size?: Size
  id?: string

  isOpen?: boolean
  onClose?: ModalEventListener
  onConfirm?: ModalEventListener
  onDismiss?: ModalEventListener
}

const ModalHeader = ({ header = '', id, onClose }: Partial<ModalProps>) => {
  const handleClose: ModalEventListener = (event) => {
    if (onClose) onClose(event)
  }
  return (
    <div className="header">
      <h3 id={id}>{header}</h3>
      <button className="close" onClick={handleClose}>
        <span className="sr-only">Close</span>
        <i></i>
      </button>
    </div>
  )
}

const ModalBody = ({ children, id }: Partial<ModalProps>) => {
  return <div className="body" id={id}>{children}</div>
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

export const Modal = ({ type = 'default', id = randomId(), isOpen, size = 'sm', ...props }: ModalProps) => {
  const [uuid, _] = useState(id)
  
  if (!isOpen) return null;

  const bodyId = `${uuid}_body`;
  const headerId = `${uuid}_header`;

  const dialogProps: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> = {
    id: uuid,
    role: 'dialog',
    "aria-modal": true,
    "aria-labelledby": headerId,
    "aria-describedby": bodyId,
  }

  let modalContent;

  switch (type) {
    case 'slideout': {
      let className: string | undefined = undefined;
      if (size === "lg") className = 'gds-slide-out--960';
      if (size === "md") className = 'gds-slide-out--768';

      modalContent = (
        <aside className={className} {...dialogProps}>
          <ModalHeader id={headerId} {...props} />
          <ModalBody id={bodyId} {...props} />
          <ModalFooter {...props} />
        </aside>
      );
      break;
    }
    case 'takeover': {
      modalContent = (
        <main {...dialogProps}>
          <ModalHeader id={headerId} {...props} />
          <ModalBody id={bodyId} {...props} />
          <ModalFooter {...props} />
        </main>
      );
      break;
    }
    default: {
      modalContent = (
        <section {...dialogProps}>
          <ModalHeader id={headerId} {...props} />
          <ModalBody id={bodyId} {...props} />
          <ModalFooter {...props} />
        </section>
      );
      break;
    }
  }

  const handleBackdropClick = () => {
    if (props.onClose) props.onClose(null)
  };

  return (
    <>
      {modalContent}
      {/* Backdrop */}
      <div
        data-testid="modal-backdrop"
        className="backdrop"
        onClick={handleBackdropClick}
        aria-hidden="true"
      ></div>
    </>
  );
}

export default Modal
