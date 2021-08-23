import { FormDirection, Size } from '@sebgroup/extract'
import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface FormProps {
  children?: ReactNode
  direction?: FormDirection
  size?: Size
}

export function Form({
  children,
  direction = 'vertical',
  size = 'md',
}: FormProps) {
  return (
    <form className={[direction, `size-${size}`].join(' ')}>{children}</form>
  )
}

export default Form
