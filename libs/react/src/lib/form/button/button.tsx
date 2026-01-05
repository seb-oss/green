import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react'
import classNames from 'classnames'

import { ButtonSize, ButtonVariant } from '@sebgroup/extract'

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
  /** Renders as a `data-testid` attribute on the `<button>` element, useful in testing scenarios. */
  testId?: string
}

/**
 * @deprecated Please use the `gds-button` web component from green-core instead
 */
export const Button = forwardRef(
  (
    {
      className,
      variant,
      active = false,
      type = 'button',
      size,
      testId,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const buttonClassName =
      classNames('gds-button', className, variant, size, {
        active: active,
      }) || undefined

    return variant == 'close' ? (
      <button
        className={buttonClassName}
        type={type}
        aria-label={props['aria-label'] ?? 'Close'}
        data-testid={testId}
        ref={ref}
        {...props}
      >
        <i></i>
      </button>
    ) : (
      <button
        className={buttonClassName}
        type={type}
        data-testid={testId}
        ref={ref}
        {...props}
      />
    )
  },
)

export default Button
