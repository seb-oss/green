import { IValidator, validateClassName } from '@sebgroup/extract'
import useInput from '../useInput'
import classNames from 'classnames'
import { FormEventHandler, HTMLProps } from 'react'

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  /** Use this prop to control the checked state of the checkbox */
  checked: boolean
  /** The label of the checkbox */
  label: string
  /** A test id that will be placed in the `data-testid` attribute on the input element */
  testId?: string
  /** An object used to render the validation status for the component */
  validator?: IValidator
  /** A handler function that takes the event and can act on it */
  onChange?: FormEventHandler<HTMLInputElement>
}

export const Checkbox = ({
  label,
  onChange,
  validator,
  testId,
  ...props
}: CheckboxProps) => {
  const inputProps = useInput(props, onChange)

  const labelClassNames = classNames(
    'form-control',
    validator && validateClassName(validator?.indicator)
  )

  const inputClassNames = classNames(
    validator && validateClassName(validator?.indicator)
  )

  return (
    <div className="form-group">
      <label htmlFor={inputProps.id} className={labelClassNames}>
        {label}
        <input
          type="checkbox"
          data-testid={testId}
          {...inputProps}
          className={inputClassNames}
        />
        <i />
      </label>
      {validator && <span className="form-info">{validator.message}</span>}
    </div>
  )
}
