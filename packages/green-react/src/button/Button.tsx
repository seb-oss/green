import { ButtonHTMLAttributes, FC } from 'react'
import { ButtonType, ButtonVariant } from '@sebgroup/extract/src/button'
import { ReactNode } from 'react'
import { MouseEventHandler } from 'react'

export interface ButtonProps {
  children?: ReactNode
  type?: ButtonType
  variant?: ButtonVariant
  active?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

// eslint-disable-next-line complexity
const Button: FC<ButtonProps> = ({ children, variant, onClick, active = false, type = 'button' }) => {
  const props: ButtonHTMLAttributes<HTMLButtonElement> = { type }
  const classNames: string[] = []
  if (variant) classNames.push(variant)
  if (active) classNames.push('active')

  if (classNames.length) props.className = classNames.join(' ')
  if (onClick) props.onClick = onClick

  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button
