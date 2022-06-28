import { ButtonHTMLAttributes, forwardRef, MouseEventHandler, ReactNode } from 'react'
import { ButtonType, ButtonVariant } from '@sebgroup/extract'

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode
  type?: ButtonType
  variant?: ButtonVariant
  active?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant,
  onClick,
  active = false,
  type = 'button',
}, ref) => {
  const props: ButtonHTMLAttributes<HTMLButtonElement> = { type }
  const classNames: string[] = []
  if (variant) classNames.push(variant)
  if (active) classNames.push('active')

  if (classNames.length) props.className = classNames.join(' ')
  if (onClick) props.onClick = onClick

  return <button {...props} ref={ref}>{children}</button>
})

export default Button
