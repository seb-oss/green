import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { createComponent } from '@lit/react'

import { GdsDatepicker } from '@sebgroup/green-core/components/datepicker/datepicker.component'
import { GdsValidator } from '@sebgroup/green-core/components/form/form-control'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

GdsDatepicker.define()
registerTransitionalStyles()

export const CoreDatepicker = createComponent({
  tagName: getScopedTagName('gds-datepicker'),
  elementClass: GdsDatepicker,
  events: { onchange: 'change' },
  react: React,
})

export type DatepickerOptions = {
  /**
   * An array of dates that should be disabled in the calendar.
   */
  disabledDates?: Date[]

  /**
   * Whether to disable weekends in the calendar.
   */
  disabledWeekends?: boolean

  /**
   * Whether to hide the label above the input field.
   */
  hideLabel?: boolean

  /**
   * Validation state of the form control. Setting this to true triggers the invalid state of the control.
   */
  invalid?: boolean

  /**
   * Validate the form control element. Should return the validity state and an optional validation message.
   */
  validator?: GdsValidator

  /**
   * The label text displayed above the datepicker. This should always be set to a descriptive label.
   */
  label?: string

  /**
   * The maximum date that can be selected.
   */
  maxDate?: Date

  /**
   * The minimum date that can be selected.
   */
  minDate?: Date

  /**
   * Controls whether the datepicker popover is open.
   */
  open?: boolean

  /**
   * Callback function that is called when the value of the Datepicker changes.
   */
  onChange?: (value: any) => void

  /**
   * Sets the datepicker as a required field for forms.
   */
  required?: boolean

  /**
   * Whether to show a column of week numbers in the calendar.
   */
  showWeeks?: boolean

  /**
   * Whether to use the small variant of the datepicker field.
   */
  size?: 'small' | 'medium'

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
   * The ref to the datepicker element.
   */
  ref?: React.Ref<GdsDatepicker>

  /**
   * The children of the datepicker.
   */
  children?: React.ReactNode

  /**
   * If the it will be possible to clear the selected date.
   */
  clearable?: boolean

  /**
   * Whether to hide the today button under the calendar.
   */
  hideTodayButton?: boolean

  /**
   * @deprecated Use `value` instead.
   */
  selectedDate?: Date

  /**
   * @deprecated Use `value` instead.
   */
  currentDate?: Date
}

export const Datepicker = forwardRef(
  (
    {
      label = 'Date',
      onChange,
      minDate,
      maxDate,
      value,
      showWeeks,
      testId,
      validator,
      size,
      selectedDate,
      currentDate,
      ...props
    }: DatepickerOptions,
    ref,
  ) => {
    if (currentDate && !value) value = currentDate
    if (selectedDate && !value) value = selectedDate

    const min = minDate
      ? minDate
      : new Date(new Date().getFullYear() - 10, 0, 1)
    const max = maxDate
      ? maxDate
      : new Date(new Date().getFullYear() + 10, 0, 1)

    const onChangeHandler = (e: any) => {
      if (onChange) {
        onChange(e.detail.value)
      }
    }

    const _ref = useRef<GdsDatepicker | null>(null)

    useImperativeHandle(ref, () => _ref.current, [_ref])

    useEffect(() => {
      if (_ref?.current) {
        _ref.current.validator = validator
      }
    }, [validator])

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
          ref={_ref}
          size={size === 'small' ? 'small' : 'large'}
          {...props}
        />
      </div>
    )
  },
)

export default Datepicker
