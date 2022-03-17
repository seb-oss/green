import { RefObject, useEffect, useState } from 'react'
import { createDatepicker, Datepicker, DatepickerData, DatepickerOptions, DatepickerState } from '@sebgroup/extract'

interface HookResult {
  datepicker: Datepicker
  data: DatepickerData
}
interface DatepickerHook {
  (
    datepickerRef: RefObject<HTMLElement>,
    datepickerDialogRef: RefObject<HTMLElement>,
    dateInputRef: RefObject<HTMLInputElement>,
    options?: DatepickerOptions,
  ): HookResult
}
export const useDatepicker: DatepickerHook = (
  datepickerRef, datepickerDialogRef, dateInputRef, options = {}
) => {
  const dataStub: Partial<DatepickerData> = { calendar: [] }
  const [data, setData] = useState<DatepickerData>(dataStub as DatepickerData)
  
  const datepickerStub: Partial<Datepicker> = {
    state: {} as Partial<DatepickerState> as DatepickerState,
  }
  const [datepicker, setDatepicker] = useState<Datepicker>(datepickerStub as Datepicker)

  useEffect(() => {
    if (!datepicker.open && datepickerRef.current && datepickerDialogRef.current && dateInputRef.current) {
      setDatepicker(createDatepicker(
        (data) => { if (data) setData(data) },
        options,
        datepickerRef.current,
        datepickerDialogRef.current,
        dateInputRef.current,
      ))
    }
  }, [datepicker, datepickerRef, datepickerDialogRef, dateInputRef, options])

  return { datepicker, data }
}
