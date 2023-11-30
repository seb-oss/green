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
      aria-label={otherProps.children?.toString() ?? 'Close'}
      data-testid={testId}
      {...otherProps}
    >
      <i></i>
    </button>
  ) : (
    <button
      className={buttonClassName}
      type={type}
      data-testid={testId}
      {...otherProps}
    />
  )
}

export default Button
