import React, {AriaAttributes, ReactNode, useEffect, useState} from 'react'
import { AlertRibbonType } from '@sebgroup/extract'
import {squareInfoIcon, squareExclamationIcon, checkIcon} from "../icons";

export interface AlertRibbonProps {
  children: ReactNode
  type?: AlertRibbonType
  header?: ReactNode
  footer?: ReactNode
  isCloseable?: boolean
  closeText?: string
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  role?: 'alert'
  ["aria-live"]?: AriaAttributes["aria-live"]
<<<<<<< feature/alert-react
  closeAriaLabel?: string
=======
>>>>>>> main
}

export function AlertRibbon({
  type,
  header,
  footer,
  children,
  closeText,
  isCloseable = true,
  onClose,
  role,
<<<<<<< feature/alert-react
  ["aria-live"]: ariaLive,
  closeAriaLabel
=======
  ["aria-live"]: ariaLive
>>>>>>> main
}: AlertRibbonProps) {
  const [closeButton, setCloseButton] = useState<ReactNode>()
  useEffect(() => {
    if (!isCloseable) {
      setCloseButton(null)
    } else {
      if (closeText)
        setCloseButton(
          <button className="close">
            <span className="sr-only">{closeText}</span>
            <i></i>
          </button>
        )
      else setCloseButton(
        <button className="close">
              <span className="sr-only">Close</span>
              <i></i>
        </button>
      )
    }
  }, [isCloseable, closeText])

  const renderIcon = () => {
    switch (type) {
      case "danger":
      case  "warning":
        return squareExclamationIcon
      case "success":
        return checkIcon
      default:
        return squareInfoIcon
    }
  }

  return (
    <div className={`alert-ribbon ${type}`} role={role} aria-live={ariaLive}>
      <i aria-hidden="true">
        { renderIcon() }
      </i>
      <div className="alert-ribbon__content">
        { header &&  React.isValidElement(header) ? header : <span className="header">{header}</span> }
        <p>
          { children }
        </p>
      </div>
<<<<<<< feature/alert-react
      { closeButton && <button className="close" type="button" aria-label={ closeAriaLabel ?? "Close alert" } onClick={ (event) => { onClose && onClose(event)} }><i></i></button> }
=======
      { closeButton && <button className="close" type="button" onClick={ (event) => { onClose && onClose(event)} }><span className="sr-only">Close</span><i></i></button> }
>>>>>>> main
      { footer && <div className="alert-ribbon__footer"> {footer} </div> }
    </div>
  )
}

export default AlertRibbon
