import { RefObject, useEffect, useState } from 'react'
import {
  createDatepicker,
  Datepicker,
  DatepickerData,
  DatepickerOptions,
  DatepickerState,
} from '@sebgroup/extract'

interface HookResult {
  datepicker: Datepicker
  data: DatepickerData
  state: DatepickerState
}
interface DatepickerHook {
  (
    datepickerRef: RefObject<HTMLElement>,
    datepickerDialogRef: RefObject<HTMLElement>,
    dateInputRef: RefObject<HTMLInputElement>,
    datepickerTriggerRef: RefObject<HTMLButtonElement>,
    options?: DatepickerOptions
  ): HookResult
}
export const useDatepicker: DatepickerHook = (
  datepickerRef,
  datepickerDialogRef,
  dateInputRef,
  datepickerTriggerRef,
  options = {}
) => {
  const dataStub: Partial<DatepickerData> = {
    formattedSelectedDate: '',
    calendar: {
      headers: [],
      calendarGrid: [],
    },
  }
  const [data, setData] = useState<DatepickerData>(dataStub as DatepickerData)

  const [state, setState] = useState<DatepickerState>({ isActive: false })

  const datepickerStub: Partial<Datepicker> = {}
  const [datepicker, setDatepicker] = useState<Datepicker>(
    datepickerStub as Datepicker
  )

  useEffect(() => {
    if (
      !datepicker.open &&
      datepickerRef.current &&
      datepickerDialogRef.current &&
      dateInputRef.current &&
      datepickerTriggerRef.current
    ) {
      setDatepicker(
        createDatepicker(
          (data, state) => {
            if (data) setData(data)
            if (state) setState(state)
          },
          options,
          datepickerRef.current,
          datepickerDialogRef.current,
          dateInputRef.current,
          datepickerTriggerRef.current
        )
      )
    }
  }, [datepicker, datepickerRef, datepickerDialogRef, dateInputRef, datepickerTriggerRef, options])

  return { datepicker, data, state }
}
