import React, {ReactNode} from 'react'
import {
  IndicatorType,
  IValidator,
  randomId,
  validateClassName
} from "@sebgroup/extract";
import {ChevronDown} from "../icons";

interface SelectProps {
  id?: string,
  className?: string
  label?: string
  labelInformation?: string
  children: ReactNode
  validator?: IValidator
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  defaultValue?: string | number
  value?: string | number
  testId?: string
}

interface OptionProps {
  children: string
  value: string | number
  disabled?: boolean
  invalid?: boolean
  autocomplete?: string
  autofocus?: boolean
  form?: string
  name?: string
  required?: boolean
  size?: number
  selected?: boolean
}

interface OptionGroupProps {
  label: string
  children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[]
  disabled?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
     id,
     className,
     children,
     validator,
     label,
     labelInformation,
     defaultValue,
     value,
     testId,
     onChange,
     onSelect
   }, ref) => {

    const selectId = id ?? randomId();

    const validatorClassName = validateClassName(validator?.indicator as IndicatorType)

    return (
      <>
        <div className={`form-group ${validator && 'validated'}`}>
          <div className="gds--select">
            {label && <label htmlFor={selectId}>{label}</label>}
            {labelInformation && <div className="form-info">{labelInformation}</div>}
            <div className={`gsd--select-wrapper ${validatorClassName}`}>
              <select id={selectId} data-testid={testId} className={className} defaultValue={defaultValue} value={value} ref={ref}
                      onChange={(event) => {
                        onChange && onChange(event)
                      }}>
                {children}
              </select>
              {ChevronDown}
            </div>
            {validator?.message && <div className="form-info">{validator.message}</div>}
          </div>
        </div>
      </>
    )
  })

export const Option = ({value, children, ...rest}: OptionProps) => {
  return (
    <option value={value} {...rest}>{children}</option>
  )
}

export const OptionGroup = ({label, disabled, children}: OptionGroupProps) => {
  return (
    <optgroup label={label} disabled={disabled}>
      {children}
    </optgroup>
  )
}
export default {Select, Option, OptionGroup}
