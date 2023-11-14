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
}

export function Button({
  className,
  variant,
  active = false,
  type = 'button',
  size,
  ...otherProps
}: ButtonProps) {
  const buttonClassName =
    classNames(className, variant, size, {
      active: active,
    }) || undefined

  return <button className={buttonClassName} type={type} {...otherProps} />
}

export default Button
