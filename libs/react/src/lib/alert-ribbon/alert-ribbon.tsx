import React, { ReactNode, useEffect, useState } from 'react'

import { AlertRibbonType } from '@sebgroup/extract'
import { Check, SquareExclamation, SquareInfo } from '../icons'

export interface AlertRibbonProps {
  children: ReactNode
  type?: AlertRibbonType
  header?: ReactNode
  footer?: ReactNode
  isCloseable?: boolean
  closeText?: string
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  role?: 'alert'
  'aria-live'?: React.AriaAttributes['aria-live']
  closeAriaLabel?: string
}

/**
 * @deprecated Please use the `gds-alert` web component from green-core instead
 */
export function AlertRibbon({
  type,
  header,
  footer,
  children,
  closeText,
  isCloseable = true,
  onClose,
  role,
  'aria-live': ariaLive,
  closeAriaLabel,
}: AlertRibbonProps) {
  const [closeButton, setCloseButton] = useState<ReactNode>()
  useEffect(() => {
    if (!isCloseable) {
      setCloseButton(null)
    } else {
      if (closeText)
        setCloseButton(
          <button className="gds-close" aria-label={closeText}>
            <i></i>
          </button>,
        )
      else
        setCloseButton(
          <button className="gds-close" aria-label="Close">
            <i></i>
          </button>,
        )
    }
  }, [isCloseable, closeText])

  const renderIcon = () => {
    switch (type) {
      case 'danger':
      case 'warning':
        return <SquareExclamation aria-hidden={true} />
      case 'success':
        return <Check aria-hidden={true} />
      default:
        return <SquareInfo aria-hidden={true} />
    }
  }

  const renderHeader = () => {
    if (!header) {
      return null
    }

    return React.isValidElement(header) ? (
      header
    ) : (
      <span className="header">{header}</span>
    )
  }

  return (
    <div
      className={`gds-alert-ribbon ${type}`}
      role={role}
      aria-live={ariaLive}
    >
      <i aria-hidden="true">{renderIcon()}</i>
      <div className="alert-ribbon__content">
        {renderHeader()}
        <p>{children}</p>
      </div>
      {closeButton && (
        <button
          className="gds-close"
          type="button"
          aria-label={closeAriaLabel ?? closeText ?? 'Close alert'}
          onClick={(event) => {
            onClose && onClose(event)
          }}
        >
          <i></i>
        </button>
      )}
      {footer && <div className="alert-ribbon__footer"> {footer} </div>}
    </div>
  )
}

export default AlertRibbon
