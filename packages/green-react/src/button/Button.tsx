import { ButtonHTMLAttributes, FC } from 'react'
import { ButtonType, ButtonVariant } from '@sebgroup/extract/src/button'
import { ReactNode } from 'react'

export interface ButtonProps {
  children?: ReactNode
  type?: ButtonType
  variant?: ButtonVariant
}

const Button: FC<ButtonProps> = ({ children, type = 'button', variant }) => {
  const props: ButtonHTMLAttributes<HTMLButtonElement> = { type }
  if (variant) props.className = variant

  return <button {...props}>{children}</button>
}

export default Button
