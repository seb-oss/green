import { FC, ReactNode } from 'react'
import { AlertType } from '@sebgroup/extract/src/alert'
import Button from '../button'
import { useState } from 'react'
import { useEffect } from 'react'

export interface AlertProps {
  children: ReactNode
  type: AlertType
  heading?: string
  isCloseable?: boolean
  closeText?: string
}

const Alert: FC<AlertProps> = ({
  type,
  heading,
  children,
  closeText,
  isCloseable = true,
}) => {
  const [closeButton, setCloseButton] = useState(<></>)
  useEffect(() => {
    if (!isCloseable) {
      setCloseButton(<></>)
    } else {
      if (closeText) setCloseButton(<Button>{closeText}</Button>)
      else setCloseButton(<Button>X</Button>)
    }
  }, [isCloseable, closeText])

  return (
    <div role="alert" className={type}>
      { heading && (
        <h3>{heading}</h3>
      )}
      <p>
        {children}
      </p>
      {closeButton}
    </div>
  )
}

export default Alert
