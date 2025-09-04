import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import classNames from 'classnames'

import { ModalType, randomId, Size } from '@sebgroup/extract'
import Button from '../form/button/button'

type ModalEventListener = (
  event: MouseEvent<HTMLButtonElement | HTMLDivElement> | null,
) => unknown

export interface ModalProps {
  type?: ModalType
  header?: string
  children: ReactNode
  confirm?: string
  dismiss?: string
  closeText?: string
  size?: Size
  id?: string
  isOpen?: boolean
  onClose?: ModalEventListener
  onConfirm?: ModalEventListener
  onDismiss?: ModalEventListener
  preventBackdropClose?: boolean
  enableBodyScrollLock?: boolean
}

interface ModalHeaderProps
  extends Pick<ModalProps, 'type' | 'header' | 'closeText' | 'id' | 'onClose'> {
  setStatus?: (status: string) => void
  setShouldRender?: (shouldRender: boolean) => void
}

const ModalHeader = ({
  type,
  setStatus,
  setShouldRender,
  header = '',
  closeText = 'Close Modal',
  id,
  onClose,
}: ModalHeaderProps) => {
  const handleClose: ModalEventListener = (event) => {
    if (type === 'slideout') {
      setStatus && setStatus(IS_EXITING)
      setTimeout(() => {
        if (onClose) onClose(event)
        setStatus && setStatus(UNMOUNTED)
        setShouldRender && setShouldRender(false)
      }, DELAY)
    } else {
      if (onClose) onClose(event)
      setStatus && setStatus(UNMOUNTED)
      setShouldRender && setShouldRender(false)
    }
  }
  return (
    <div className="header">
      <h3 id={id}>{header}</h3>
      <button className="close" aria-label={closeText} onClick={handleClose}>
        <i></i>
      </button>
    </div>
  )
}

const ModalBody = ({ children, id }: Partial<ModalProps>) => {
  return (
    <div className="body" id={id}>
      {children}
    </div>
  )
}

const ModalFooter = ({
  confirm,
  dismiss,
  onClose,
  onConfirm,
  onDismiss,
  preventBackdropClose = false,
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

/* This delay is the same as the one used in the aside modal mixin: /libs/chlorophyll/scss/components/modal/_mixins.scss */
const DELAY = 500

const UNMOUNTED = 'unmounted'
const IS_MOUNTING = 'is-mounting'
const IS_ENTERING = 'is-entering'
const ENTERED = 'entered'
const IS_EXITING = 'is-exiting'

/**
 * @deprecated Please use the `gds-dialog` web component from green-core instead
 */
export const Modal = ({
  type = 'default',
  id = randomId(),
  isOpen,
  size = 'sm',
  enableBodyScrollLock = true,
  ...props
}: ModalProps) => {
  const [uuid] = useState(id)
  const [status, setStatus] = useState<string>(UNMOUNTED)
  const [shouldRender, setShouldRender] = useState<boolean | undefined>(false)

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && !shouldRender && status === UNMOUNTED) {
      setShouldRender(true)
      setStatus(IS_MOUNTING)
    }

    if (isOpen && shouldRender && status === IS_MOUNTING) {
      setStatus(IS_ENTERING)
      setTimeout(() => {
        setStatus(ENTERED)
      }, DELAY)
    }

    if (!isOpen && status === ENTERED) {
      setStatus(IS_EXITING)
      setTimeout(() => {
        setStatus(UNMOUNTED)
        setShouldRender(false)
      }, DELAY)
    }
    if (isOpen && modalRef.current && enableBodyScrollLock) {
      // Disable scrolling on the body when the modal is open
      disableBodyScroll(modalRef.current, {
        allowTouchMove: (el) => {
          // Allow touchmove for elements inside modal, its required for scroll to work on iOS devices
          return modalRef.current?.contains(el) || false
        },
      })
    } else if (modalRef.current) {
      // Enable scrolling on the body when the modal is closed
      enableBodyScroll(modalRef.current)
    }

    return () => {
      // Cleanup by enabling body scroll and removing all scroll locks
      clearAllBodyScrollLocks()
    }
  }, [isOpen, shouldRender, status, enableBodyScrollLock])

  if (!isOpen) return null

  const bodyId = `${uuid}_body`
  const headerId = `${uuid}_header`

  const dialogProps: DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  > = {
    id: uuid,
    role: 'dialog',
    'aria-modal': true,
    'aria-labelledby': headerId,
    'aria-describedby': bodyId,
  }

  let modalContent

  switch (type) {
    case 'slideout': {
      const className: string | undefined = classNames(status, {
        'gds-slide-out--960': size === 'lg',
        'gds-slide-out--768': size === 'md',
      })

      modalContent = (
        <aside className={className} {...dialogProps} ref={modalRef}>
          <ModalHeader
            id={headerId}
            setStatus={setStatus}
            setShouldRender={setShouldRender}
            type={type}
            {...props}
          />
          <ModalBody id={bodyId} {...props} />
          <ModalFooter {...props} />
        </aside>
      )
      break
    }
    case 'takeover': {
      modalContent = (
        <main {...dialogProps} ref={modalRef}>
          <ModalHeader id={headerId} {...props} />
          <ModalBody id={bodyId} {...props} />
          <ModalFooter {...props} />
        </main>
      )
      break
    }
    default: {
      modalContent = (
        <div className="gds-dialog-wrapper" ref={modalRef}>
          <section {...dialogProps}>
            <ModalHeader id={headerId} {...props} />
            <ModalBody id={bodyId} {...props} />
            <ModalFooter {...props} />
          </section>
        </div>
      )
      break
    }
  }

  const backdropClassnames: string | undefined = classNames(
    'backdrop',
    {
      'backdrop--transparent': type === 'slideout',
    },
    status,
  )

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (props.onClose && !props.preventBackdropClose) {
      if (type === 'slideout') {
        setStatus && setStatus(IS_EXITING)
        setTimeout(() => {
          if (props.onClose) props.onClose(event)
          setStatus && setStatus(UNMOUNTED)
          setShouldRender && setShouldRender(false)
        }, DELAY)
      } else {
        if (props.onClose) props.onClose(event)
        setStatus && setStatus(UNMOUNTED)
        setShouldRender && setShouldRender(false)
      }
    }
  }

  return (
    <>
      {modalContent}
      {/* Backdrop */}
      <div
        data-testid="modal-backdrop"
        className={backdropClassnames}
        onClick={(e) => handleBackdropClick(e)}
        aria-hidden="true"
      ></div>
    </>
  )
}

export default Modal
