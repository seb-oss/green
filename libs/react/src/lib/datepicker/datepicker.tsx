import React from 'react'
import { createComponent } from '@lit/react'

import { GdsDatepicker, getScopedTagName } from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

export const CoreDatepicker = createComponent({
  tagName: getScopedTagName('gds-datepicker'),
  elementClass: GdsDatepicker,
  events: { onchange: 'change' },
  react: React,
})

export interface DatepickerOptions {
  label?: string
  onChange?: (value: any) => void
  minDate?: Date
  maxDate?: Date
  value?: Date
  showWeeks?: boolean
  testId?: string
  size?: 'small' | 'medium'
  hideLabel?: boolean

  /** @deprecated Use `value` instead */
  selectedDate?: Date
  /** @deprecated Use `value` instead */
  currentDate?: Date
}

export const Datepicker = ({
  label = 'Date',
  onChange,
  minDate,
  maxDate,
  value,
  showWeeks,
  testId,
  selectedDate,
  currentDate,
  ...props
}: DatepickerOptions) => {
  if (currentDate && !value) value = currentDate
  if (selectedDate && !value) value = selectedDate

  const min = minDate ? minDate : new Date(new Date().getFullYear() - 10, 0, 1)
  const max = maxDate ? maxDate : new Date(new Date().getFullYear() + 10, 0, 1)

  const onChangeHandler = (e: any) => {
    if (onChange) {
      onChange(e.detail.value)
    }
  }

  return (
    <div className="form-group">
      <CoreDatepicker
        data-testid={testId}
        label={label}
        min={min}
        max={max}
        showWeekNumbers={showWeeks}
        onchange={onChangeHandler}
        size={props.size}
        value={value}
        hideLabel={props.hideLabel}
        {...props}
      />
    </div>
  )
}
