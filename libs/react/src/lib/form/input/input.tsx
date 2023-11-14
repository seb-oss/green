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
  'data-testid'?: string
  /** Format value on change */
  formatter?: (value: string | undefined) => string
  /** Extra describing text, below the label */
  info?: ReactNode
  /** Label describing the input */
  label: string
  /** Text on the right side of the input, used for unit such as 'kr' or '%' */
  unit?: string
  /** Validation object */
  validator?: IValidator | undefined
  /** Value of input */
  value?: string
}

export const Input = ({
  'aria-describedby': ariaDescribedBy,
  autoComplete = 'off',
  children,
  className,
  'data-testid': dataTestId,
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
  value,
  ...props
}: InputProps) => {
  const [uuid] = useState(id)
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const localOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = formatter
        ? formatter(event.target.value)
        : event.target.value
      setLocalValue(newValue)
      if (onChange)
        onChange({ ...event, target: { ...event.target, value: newValue } })

      // Fixes bug: React loses caret position when you format the input value
      if (!formatter || newValue.length > event.target.value.length) return
      const pointer = event.target.selectionStart
      const element = event.target
      window.requestAnimationFrame(() => {
        element.selectionStart = pointer
        element.selectionEnd = pointer
      })
    },
    [formatter, setLocalValue, onChange]
  )

  const inputAriaDescribedBy =
    classNames(ariaDescribedBy, {
      [`gds-expandable-info-${uuid}`]: expandableInfo,
      [`${uuid}_info`]: info,
    }) || undefined

  const inputClassName =
    classNames(
      className,
      validator && validateClassName(validator.indicator)
    ) || undefined

  const input = (
    <input
      aria-describedby={inputAriaDescribedBy}
      autoComplete={autoComplete}
      className={inputClassName}
      data-testid={dataTestId}
      id={uuid}
      onChange={localOnChange}
      role={role}
      value={localValue}
      {...props}
    />
  )

  if (!label && !info && !expandableInfo) return input

  return (
    <FormItem
      expandableInfo={expandableInfo}
      expandableInfoButtonLabel={expandableInfoButtonLabel}
      inputId={uuid}
      label={label}
      labelInformation={info}
      role={role}
      validator={validator}
    >
      <div className="gds-input-wrapper">
        <Group groupBorder groupFocus>
          {input}
          {unit && <span className="form-text">{unit}</span>}
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
