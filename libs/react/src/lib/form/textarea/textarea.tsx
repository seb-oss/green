import {
  ChangeEvent,
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'

import type { ForwardedRef } from 'react'

import {
  IExpandableInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { FormItem } from '../../formItem'

export interface ITextAreaProps
  extends IExpandableInformation,
    DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {
  /**
   * Set the live region attribute of the form control footer, this will change how error messages are read by screen readers
   * @default 'assertive'
   */
  'aria-live'?: React.AriaAttributes['aria-live']
  /** Data test id used for finding elements in test */
  testId?: string
  /** Label describing the textarea */
  label: string
  /** Extra describing text, below the label */
  info?: ReactNode
  /** Validation object */
  validator?: IValidator | undefined
  /** Value of textarea */
  value?: string
}

/**
 * @deprecated Please use the `gds-textarea` web component from green-core instead
 */
export const TextArea = forwardRef(
  (
    {
      'aria-live': ariaLive = 'assertive',
      'aria-describedby': ariaDescribedBy,
      autoComplete = 'off',
      className,
      expandableInfo,
      expandableInfoButtonLabel,
      id = randomId(),
      label,
      info,
      onChange,
      role,
      rows = 4,
      validator,
      value,
      testId: dataTestId,
      maxLength,
      required,
      ...props
    }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const [uuid] = useState(id)
    const [localValue, setLocalValue] = useState(value)

    useEffect(() => {
      setLocalValue(value)
    }, [value])

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        setLocalValue(event.target.value)
        if (onChange) onChange(event)
      },
      [setLocalValue, onChange],
    )

    const describedBy = classNames(ariaDescribedBy, {
      [`gds-expandable-info-${uuid}`]: expandableInfo,
      [`${uuid}_info`]: info,
      [`${uuid}_message`]:
        validator?.message !== undefined && validator.message.length > 0,
    })

    const inputClassName =
      classNames('gds-textarea', className, {
        [validateClassName(validator?.indicator)]: validator,
      }) || undefined

    const rightAlignedFooterInfo = maxLength
      ? `${localValue?.length || 0}/${maxLength}`
      : undefined

    return (
      <FormItem
        aria-live={ariaLive}
        expandableInfo={expandableInfo}
        expandableInfoButtonLabel={expandableInfoButtonLabel}
        inputId={uuid}
        label={label}
        labelInformation={info}
        role={role}
        validator={validator}
        rightAlignedFooterInfo={rightAlignedFooterInfo}
      >
        <div className="gds-input-wrapper">
          <textarea
            aria-describedby={describedBy || undefined}
            aria-invalid={validator?.indicator === 'error'}
            aria-required={required}
            autoComplete={autoComplete}
            className={inputClassName || undefined}
            id={uuid}
            onChange={handleChange}
            role={role}
            rows={rows}
            value={localValue}
            data-testid={dataTestId}
            maxLength={maxLength}
            required={required}
            ref={ref}
            {...props}
          />
        </div>
      </FormItem>
    )
  },
)
