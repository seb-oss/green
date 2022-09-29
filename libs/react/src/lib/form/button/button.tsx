import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { ButtonType, ButtonVariant } from '@sebgroup/extract'

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode
  type?: ButtonType
  variant?: ButtonVariant
  active?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export function Button({
  children,
  variant,
  onClick,
  disabled,
  active = false,
  type = 'button',
}: ButtonProps) {
  const props: ButtonHTMLAttributes<HTMLButtonElement> = { type, disabled }
  const classNames: string[] = []
  if (variant) classNames.push(variant)
  if (active) classNames.push('active')

  if (classNames.length) props.className = classNames.join(' ')
  if (onClick) props.onClick = onClick

  return <button {...props}>{children}</button>
}

export default Button
