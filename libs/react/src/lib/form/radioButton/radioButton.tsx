import { forwardRef, HTMLProps } from 'react'
import classNames from 'classnames'

import { IValidator, validateClassName } from '@sebgroup/extract'
import useInput from '../useInput'

export interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string
  testId?: string
  validator?: IValidator
  value: string
}

export const RadioButton = forwardRef(
  (
    { label, validator, testId, ...props }: RadioButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const { id } = useInput(props)

    const inputClassNames = classNames(
      validator && validateClassName(validator?.indicator),
    )

    return (
      <label htmlFor={id} className="gds-form-control">
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
  },
)
