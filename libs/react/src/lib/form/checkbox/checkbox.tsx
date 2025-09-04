import {
  FormEventHandler,
  ForwardedRef,
  forwardRef,
  HTMLProps,
  useState,
} from 'react'
import classNames from 'classnames'

import { IValidator, randomId, validateClassName } from '@sebgroup/extract'
import { IconTriangleExclamation } from '../../icon/icons/IconTriangleExclamation'

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  /** Use this prop to control the checked state of the checkbox */
  checked?: boolean
  /** The label of the checkbox */
  label?: string
  /** A test id that will be placed in the `data-testid` attribute on the input element */
  testId?: string
  /** An object used to render the validation status for the component */
  validator?: IValidator
  /** A handler function that takes the event and can act on it */
  onChange?: FormEventHandler<HTMLInputElement>
}

/**
 * @deprecated Please use the `gds-checkbox` web component from green-core instead
 */
export const Checkbox = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedBy,
      id = randomId(),
      label,
      validator,
      testId,
      required,
      className,
      ...props
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [uuid] = useState(id)

    const validationClassName = validateClassName(validator?.indicator)

    const labelClassNames = classNames('gds-form-control', {
      [validationClassName]: validator,
    })

    const inputClassNames = classNames(className, {
      [validationClassName]: validator,
    })

    const describedBy = classNames(ariaDescribedBy, {
      [`${uuid}_message`]:
        validator?.message !== undefined && validator.message.length > 0,
    })

    return (
      <div className="gds-form-group">
        <label htmlFor={uuid} className={labelClassNames}>
          {label}
          <input
            aria-describedby={describedBy || undefined}
            aria-invalid={validator?.indicator === 'error'}
            aria-required={required}
            className={inputClassNames || undefined}
            type="checkbox"
            data-testid={testId}
            id={uuid}
            required={required}
            ref={ref}
            {...props}
          />
          <i />
        </label>
        {validator && (
          <span
            className="gds-form-info"
            id={`${uuid}_message`}
            style={{ display: 'flex', gap: '0.25rem' }}
          >
            <IconTriangleExclamation
              size="16px"
              margin="2xs 0 0 0"
            ></IconTriangleExclamation>
            {validator.message}
          </span>
        )}
      </div>
    )
  },
)
