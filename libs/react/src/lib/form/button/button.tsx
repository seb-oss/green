import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ButtonSize, ButtonVariant } from '@sebgroup/extract'
import classNames from 'classnames'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** Button styling. Available options: 'primary', 'secondary', 'ghost' and 'tertiary'. */
  variant?: ButtonVariant
  /** Styling button as active or not */
  active?: boolean
  /** Button size. Available options: 'small' and 'large'. */
  size?: ButtonSize
  testId?: string
}

export function Button({
  className,
  variant,
  active = false,
  type = 'button',
  size,
  testId,
  ...otherProps
}: ButtonProps) {
  const buttonClassName =
    classNames(className, variant, size, {
      active: active,
    }) || undefined

  return variant == 'close' ? (
    <button
      {...props}
      aria-label={children?.toString() ?? 'Close'}
      data-testid={testId}
    >
      <i></i>
    </button>
  ) : (
    <button
      className={buttonClassName}
      type={type}
      {...otherProps}
      data-testid={testId}
    />
  )
}

export default Button
