import {
  ChangeEvent,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'

import {
  IExpandableInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { FormItem } from '../../formItem'
import Group from '../group/group'

export interface InputProps
  extends IExpandableInformation,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * Data test id used for finding elements in test
   */
  testId?: string
  /**
   * Function to format the value on change
   */
  formatter?: (value: string) => string
  /**
   * Additional descriptive text displayed below the label
   */
  info?: ReactNode
  /**
   * Label text describing the input field
   */
  label?: string
  /**
   * Text displayed on the right side of the input, typically used for units like 'kr' or '%'
   */
  unit?: string
  /**
   * Validation object for input validation
   */
  validator?: IValidator
  /**
   * Current value of the input field
   */
  value?: string | number
  /**
   * Callback function triggered when the input value changes
   */
  onChangeInput?: (value: string) => string
  /**
   * ID of another element that describes the input field
   */
  'aria-describedby'?: string
  /**
   * ARIA live region attribute for the form control footer, affecting how error messages are read by screen readers
   */
  'aria-live'?: React.AriaAttributes['aria-live']
}

/**
 * @deprecated Please use the `gds-input` web component from green-core instead
 */
export const Input = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedBy,
      'aria-live': ariaLive = 'assertive',
      autoComplete = 'off',
      children,
      className,
      testId: dataTestId,
      expandableInfo,
      expandableInfoButtonLabel,
      formatter,
      id = randomId(),
      label,
      info,
      onChange,
      unit,
      role,
      validator,
      onChangeInput,
      value = '',
      required,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [uuid] = useState(id)
    const [localValue, setLocalValue] = useState(value)

    useEffect(() => {
      setLocalValue(value)
    }, [value])

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { selectionStart, value } = event.target
        const formattedValue = formatter ? formatter(value) : value
        const nrAddedChars = formattedValue.length - value.length
        const updateCaretPosition = nrAddedChars !== 0
        const newSelectionStart =
          updateCaretPosition && selectionStart
            ? selectionStart + nrAddedChars
            : selectionStart

        // Fixes bug: React loses caret position when you format the input value
        window.requestAnimationFrame(() => {
          event.target.selectionStart = newSelectionStart
          event.target.selectionEnd = newSelectionStart
        })

        setLocalValue(formattedValue)
        if (onChange) onChange(event)
        if (onChangeInput) onChangeInput(formattedValue)
      },
      [formatter, setLocalValue, onChange, onChangeInput],
    )

    const showSimpleInput = !label && !info && !expandableInfo

    const describedBy = classNames(ariaDescribedBy, {
      [`${uuid}_info`]: !showSimpleInput && info,
      [`gds-expandable-info-${uuid}`]: !showSimpleInput && expandableInfo,
    })

    const inputClassName = classNames('gds-input', className, {
      [validateClassName(validator?.indicator)]: validator,
    })

    const input = (
      <input
        aria-describedby={describedBy || undefined}
        aria-invalid={validator?.indicator === 'error'}
        aria-required={required}
        aria-errormessage={
          validator?.indicator === 'error' ? `${uuid}_message` : undefined
        }
        autoComplete={autoComplete}
        className={inputClassName || undefined}
        data-testid={dataTestId}
        id={uuid}
        onChange={handleChange}
        role={role}
        value={localValue}
        required={required}
        ref={ref}
        {...props}
      />
    )

    if (showSimpleInput) return input

    const spanClassName = classNames('form-text', { disabled: props.disabled })

    return (
      <FormItem
        expandableInfo={expandableInfo}
        expandableInfoButtonLabel={expandableInfoButtonLabel}
        inputId={uuid}
        label={label}
        labelInformation={info}
        role={role}
        validator={validator}
        aria-live={ariaLive}
      >
        <div className="gds-input-wrapper">
          <Group groupBorder groupFocus id={`${uuid}_group`}>
            {input}
            {unit && <span className={spanClassName}>{unit}</span>}
            {children}
          </Group>
        </div>
      </FormItem>
    )
  },
)

export const TextInput = forwardRef(
  (props: Omit<InputProps, 'type'>, ref: ForwardedRef<HTMLInputElement>) => {
    return <Input type="text" {...props} ref={ref} />
  },
)

export const EmailInput = forwardRef(
  (props: Omit<InputProps, 'type'>, ref: ForwardedRef<HTMLInputElement>) => {
    return <Input type="email" {...props} ref={ref} />
  },
)

export const NumberInput = forwardRef(
  (props: Omit<InputProps, 'type'>, ref: ForwardedRef<HTMLInputElement>) => {
    return <Input type="number" {...props} ref={ref} />
  },
)

// For backwards compatibility
export { RadioButton } from '../radioButton/radioButton'
export { Checkbox } from '../checkbox/checkbox'
