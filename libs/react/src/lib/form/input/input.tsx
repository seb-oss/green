import {
  DetailedHTMLProps,
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import {
  IExpandableInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { FormItem } from '../../formItem'
import Group from '../group/group'
import classNames from 'classnames'

export interface InputProps
  extends IExpandableInformation,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /** Data test id used for finding elements in test */
  testId?: string
  /** Format value on change */
  formatter?: (value: string) => string
  /** Extra describing text, below the label */
  info?: ReactNode
  /** Label describing the input */
  label?: string
  /** Text on the right side of the input, used for unit such as 'kr' or '%' */
  unit?: string
  /** Validation object */
  validator?: IValidator
  /** Value of input */
  value?: string | number
  /** Function called when input value changes */
  onChangeInput?: (value: string) => string
}

export const Input = ({
  'aria-describedby': ariaDescribedBy,
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
}: InputProps) => {
  const [uuid] = useState(id)
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const oldValue = event.target.value
      const newValue = formatter ? formatter(oldValue) : oldValue
      setLocalValue(newValue)

      if (onChange) onChange({ ...event, target: { ...event.target, value: newValue } });
      if (onChangeInput) onChangeInput(newValue)

      // Fixes bug: React loses caret position when you format the input value
      if (!formatter || newValue.length > oldValue.length) return
      const pointer = event.target.selectionStart
      const element = event.target
      window.requestAnimationFrame(() => {
        element.selectionStart = pointer
        element.selectionEnd = pointer
      })
    },
    [formatter, setLocalValue, onChange, onChangeInput]
  )

  const showSimpleInput = !label && !info && !expandableInfo;
  
  const describedBy =
    classNames(ariaDescribedBy, {
      [`${uuid}_group-message`]: !showSimpleInput && validator?.message !== undefined && validator.message.length > 0,
      [`gds-expandable-info-${uuid}`]: !showSimpleInput && expandableInfo,
      [`${uuid}_info`]: !showSimpleInput && info,
    })

  const inputClassName =
    classNames(
      className,
      { [validateClassName(validator?.indicator)]: validator }
    )

  const input = (
    <input
      aria-describedby={describedBy || undefined}
      aria-invalid={validator?.indicator === 'error'}
      aria-required={required}
      autoComplete={autoComplete}
      className={inputClassName || undefined}
      data-testid={dataTestId}
      id={uuid}
      onChange={handleChange}
      role={role}
      value={localValue}
      required={required}
      {...props}
    />
  )

  if (showSimpleInput) return input

  const spanClassName = classNames('form-text', { 'disabled': props.disabled });

  return (
    <FormItem
      expandableInfo={expandableInfo}
      expandableInfoButtonLabel={expandableInfoButtonLabel}
      inputId={uuid}
      label={label}
      labelInformation={info}
      role={role}
    >
      <div className="gds-input-wrapper">
        <Group groupBorder groupFocus error={validator?.message} id={`${uuid}_group`}>
          {input}
          {unit && (
            <span className={spanClassName}>
              {unit}
            </span>
          )}
          {children}
        </Group>
      </div>
    </FormItem>
  )
}

export const TextInput = (props: Omit<InputProps, 'type'>) => {
  return <Input type="text" {...props} />
}

export const EmailInput = (props: Omit<InputProps, 'type'>) => {
  return <Input type="email" {...props} />
}

export const NumberInput = (props: Omit<InputProps, 'type'>) => {
  return <Input type="number" {...props} />
}

// For backwards compatibility
export { RadioButton } from '../radioButton/radioButton'
export { Checkbox } from '../checkbox/checkbox'
