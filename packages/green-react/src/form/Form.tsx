import { FC, ReactNode } from 'react'
import { FormDirection } from '@sebgroup/extract/src/form'
import { Size } from '@sebgroup/extract/src/size'

export interface FormProps {
  children?: ReactNode
  direction?: FormDirection
  size?: Size
}

const Form: FC<FormProps> = ({ children, direction = 'vertical', size = 'md' }) => {
  return (
    <form className={[direction, `size-${size}`].join(' ')}>
      {children}
    </form>
  )
}

export default Form
