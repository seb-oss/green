import {
  IExpandableInformation,
  ILabelAndLabelInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react'
import { FormItem } from '../../formItem'

export interface ITextAreaProps
  extends IExpandableInformation,
    ILabelAndLabelInformation,
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {
  label: string
  info?: string
  validator?: IValidator | undefined
  value?: string
  'data-testid'?: string
}

export const TextArea = memo(
  ({
    autoComplete = 'off',
    expandableInfo,
    expandableInfoButtonLabel,
    id = randomId(),
    label,
    info,
    onChange,
    role,
    rows = 4,
    style = {},
    validator,
    value,
    'data-testid': dataTestId,
    ...props
  }: ITextAreaProps) => {
    const [uuid] = useState(id)
    const [localValue, setLocalValue] = useState(value)

    useEffect(() => {
      setLocalValue(value)
    }, [value])

    const localOnChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        setLocalValue(event.target.value)
        if (onChange) onChange(event)
      },
      [setLocalValue, onChange]
    )

    const ariaDetails: string[] = []
    if (info) ariaDetails.push(`${uuid}_info`)
    if (expandableInfo) ariaDetails.push(`gds-expandable-info-${uuid}`)

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
          <textarea
            aria-describedby={
              ariaDetails.length > 0 ? ariaDetails.join(' ') : undefined
            }
            autoComplete={autoComplete}
            className={validator && validateClassName(validator.indicator)}
            id={uuid}
            onChange={localOnChange}
            role={role}
            rows={rows}
            style={{ ...style, cursor: 'text', resize: 'none' }}
            value={localValue}
            data-testid={dataTestId}
            {...props}
          />
        </div>
      </FormItem>
    )
  }
)
