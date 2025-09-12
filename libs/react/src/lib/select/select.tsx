import React, { useState } from 'react'
import classNames from 'classnames'

import {
  IExpandableInformation,
  ILabelAndLabelInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { FormItem } from '../formItem'
import { ChevronDown } from '../icons'

export interface SelectProps
  extends IExpandableInformation,
    ILabelAndLabelInformation,
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    > {
  /**
   * Set the live region attribute of the form control footer, this will change how error messages are read by screen readers
   * @default 'assertive'
   */
  'aria-live'?: React.AriaAttributes['aria-live']
  label: string
  info?: string
  validator?: IValidator | undefined
  value?: string
  testId?: string
  /**
   * @deprecated
   * Use `info` instead
   */
  labelInformation?: string
}

/**
 * @deprecated Use the `gds-select` web component from green-core instead.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      'aria-live': ariaLive = 'assertive',
      'aria-describedby': ariaDescribedBy,
      id = randomId(),
      validator,
      label,
      info,
      testId,
      expandableInfo,
      expandableInfoButtonLabel,
      required,
      ...props
    },
    ref,
  ) => {
    const [uuid] = useState(id)

    const selectClassName = classNames('gds-select', {
      [`${validateClassName(validator?.indicator)}`]: validator,
    })

    const describedBy = classNames(ariaDescribedBy, {
      [`${uuid}_message`]:
        validator?.message !== undefined && validator.message.length > 0,
      [`${uuid}_info`]: info || props.labelInformation,
      [`gds-expandable-info-${uuid}`]: expandableInfo,
    })

    return (
      <FormItem
        aria-live={ariaLive}
        label={label}
        labelInformation={info ?? props.labelInformation}
        expandableInfo={expandableInfo}
        expandableInfoButtonLabel={expandableInfoButtonLabel}
        inputId={uuid}
        validator={validator}
      >
        <div className={selectClassName}>
          <select
            aria-describedby={describedBy || undefined}
            aria-invalid={validator?.indicator === 'error'}
            aria-required={required}
            id={uuid}
            data-testid={testId}
            ref={ref}
            required={required}
            {...props}
          />
          <ChevronDown />
        </div>
      </FormItem>
    )
  },
)

type OptionProps = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>

export const Option = (props: OptionProps) => {
  return <option {...props} />
}

type OptGroupProps = React.DetailedHTMLProps<
  React.OptgroupHTMLAttributes<HTMLOptGroupElement>,
  HTMLOptGroupElement
>

export const OptionGroup = (props: OptGroupProps) => {
  return <optgroup {...props} />
}

export default { Select, Option, OptionGroup }
