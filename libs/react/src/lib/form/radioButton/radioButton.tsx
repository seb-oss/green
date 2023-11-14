import { forwardRef, HTMLProps } from 'react'
import useInput from '../useInput'
import classNames from 'classnames'

export interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string
  testId?: string
  // TODO: This validator prop should be of type IValidator
  validator?: string
  value: string
}

export const RadioButton = forwardRef(
  (
    { label, validator, testId, ...props }: RadioButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { id } = useInput(props)

    const inputClassNames = classNames(validator)

    return (
      <label htmlFor={id} className="form-control">
        <input
          id={id}
          type="radio"
          data-testid={testId}
          {...props}
          className={inputClassNames}
          ref={ref}
        />
        <span>{label}</span>
        <i />
      </label>
    )
  }
)
