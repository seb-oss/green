import { AlertType } from '@sebgroup/extract'
import { ReactNode, useEffect, useState } from 'react'
import Button from '../form/button/button'

export interface AlertProps {
  children: ReactNode
  type: AlertType
  heading?: string
  isCloseable?: boolean
  closeText?: string
}

export function Alert({
  type,
  heading,
  children,
  closeText,
  isCloseable = true,
}: AlertProps) {
  const [closeButton, setCloseButton] = useState<ReactNode>()
  useEffect(() => {
    if (!isCloseable) {
      setCloseButton(null)
    } else {
      if (closeText)
        setCloseButton(<Button variant="ghost">{closeText}</Button>)
      else setCloseButton(<button className="close" />)
    }
  }, [isCloseable, closeText])

  return (
    <div role="alert" className={type}>
      {heading && <h3>{heading}</h3>}
      <p>{children}</p>
      {closeButton}
    </div>
  )
}

export default Alert
