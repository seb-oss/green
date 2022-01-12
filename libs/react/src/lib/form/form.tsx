import { FormDirection, Size } from '@sebgroup/extract'
import { HTMLProps, ReactNode } from 'react'

/* eslint-disable-next-line */
export interface FormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode
  direction?: FormDirection
  formSize?: Size
}

export function Form({
  children,
  direction = 'vertical',
  formSize = 'md',
}: FormProps) {
  return (
    <form className={[direction, `size-${formSize}`].join(' ')}>
      {children}
    </form>
  )
}

export default Form
