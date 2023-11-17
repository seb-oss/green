import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { ButtonSize, ButtonType, ButtonVariant } from '@sebgroup/extract'

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode
  type?: ButtonType
  variant?: ButtonVariant
  active?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  size?: ButtonSize
  testId?: string
}

export function Button({
  children,
  variant,
  onClick,
  disabled,
  active = false,
  type = 'button',
  size,
  testId
}: ButtonProps) {
  const props: ButtonHTMLAttributes<HTMLButtonElement> = { type, disabled }
  const classNames: string[] = []
  if (variant) classNames.push(variant)
  if (active) classNames.push('active')
  if (size) classNames.push(size)

  if (classNames.length) props.className = classNames.join(' ')
  if (onClick) props.onClick = onClick

  return variant == 'close' ? (
    <button {...props} aria-label={children?.toString() ?? 'Close'} data-testid={testId}>
      <i></i>
    </button>
  ) : (
    <button {...props} data-testid={testId}>{children}</button>
  )
}

export default Button
