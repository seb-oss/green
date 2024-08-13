import React from 'react'
import { createComponent } from '@lit/react'

import { GdsDatepicker } from '@sebgroup/green-core/components/datepicker/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

export const CoreDatepicker = createComponent({
  tagName: getScopedTagName('gds-datepicker'),
  elementClass: GdsDatepicker,
  events: { onchange: 'change' },
  react: React,
})

export interface DatepickerOptions {
  /**
   * The label for the Datepicker.
   */
  label?: string

  /**
   * Callback function that is called when the value of the Datepicker changes.
   */
  onChange?: (value: any) => void

  /**
   * The minimum date that can be selected.
   */
  minDate?: Date

  /**
   * The maximum date that can be selected.
   */
  maxDate?: Date

  /**
   * The value of the Datepicker.
   */
  value?: Date

  /**
   * Whether to show the week numbers.
   */
  showWeeks?: boolean

  /**
   * The test ID used for testing.
   */
  testId?: string

  /**
   * The size of the Datepicker.
   */
  size?: 'small' | 'medium'

  /**
   * Whether to hide the label.
   */
  hideLabel?: boolean

  /**
   * Whether to disable weekends.
   */
  disabledWeekends?: boolean

  /**
   * An array of disabled dates.
   */
  disabledDates?: Date[]

  /**
   * Whether the Datepicker is invalid.
   */
  invalid?: boolean

  /**
   * Whether the Datepicker is a required form field.
   */
  required?: boolean

  /**
   * @deprecated Use `value` instead
   */
  selectedDate?: Date

  /**
   * @deprecated Use `value` instead
   */
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
  invalid,
  required,
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
        invalid={invalid}
        required={required}
        {...props}
      />
    </div>
  )
}
