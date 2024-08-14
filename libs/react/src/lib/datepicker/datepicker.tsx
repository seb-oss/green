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

export type DatepickerOptions = {
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
   * Whether to show the week numbers.
   */
  showWeeks?: boolean

  /**
   * The test ID used for testing.
   */
  testId?: string

  /**
   * The Date value of the datepicker. This can be set to undefined to clear the datepicker.
   * This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.
   */
  value?: Date
  /**
   * The minimum date that can be selected.
   */
  min: Date
  /**
   * The maximum date that can be selected.
   */
  max: Date
  /**
   * Controls wheter the datepicker popover is open.
   */
  open: boolean
  /**
   * The label text displayed above the datepicker. This should always be set to a descriptive label.
   */
  label: string
  /**
   * Whether to show a column of week numbers in the calendar.
   */
  showWeekNumbers: boolean
  /**
   * Whether to use the small variant of the datepicker field.
   */
  size: 'small' | 'medium'
  /**
   * Whether to hide the label above the input field.
   */
  hideLabel: boolean
  /**
   * Whether to disable weekends in the calendar.
   */
  disabledWeekends: boolean
  /**
   * An array of dates that should be disabled in the calendar.
   */
  disabledDates?: Date[]

  /**
   * The label of the form control.
   */
  label?: string
  /**
   * Get or set the value of the form control.
   */
  value?: ValueT

  /**
   * Validation state of the form control. Setting this to true triggers the invalid state of the control.
   *
   */
  invalid: boolean

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

  console.log(props)

  return (
    <div className="form-group">
      <CoreDatepicker
        data-testid={testId}
        label={label}
        min={min}
        max={max}
        showWeekNumbers={showWeeks}
        onchange={onChangeHandler}
        value={value}
        {...props}
      />
    </div>
  )
}

export default Datepicker
