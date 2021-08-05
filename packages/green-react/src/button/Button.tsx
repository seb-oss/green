import { ButtonHTMLAttributes, FC } from 'react'
import { ButtonType, ButtonVariant } from '@sebgroup/extract/src/button'
import { ReactNode } from 'react'
import { MouseEventHandler } from 'react'

export interface ButtonProps {
  children?: ReactNode
  type?: ButtonType
  variant?: ButtonVariant
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ children, type = 'button', variant, onClick }) => {
  const props: ButtonHTMLAttributes<HTMLButtonElement> = { type }
  if (variant) props.className = variant
  if (onClick) props.onClick = onClick

  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button
