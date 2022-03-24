import {
  CalendarDay,
  DatepickerOptions,
  months,
  years,
} from '@sebgroup/extract'
import { useRef } from 'react'
import { useDatepicker } from './hook'
import Dropdown from '../dropdown/dropdown'

export const Datepicker = (options: DatepickerOptions = {}) => {
  const id = 'input'
  const datepickerRef = useRef<HTMLDivElement>(null)
  const datepickerTriggerRef = useRef<HTMLButtonElement>(null)
  const datepickerDialogRef = useRef<HTMLDivElement>(null)
  const dateInputRef = useRef<HTMLInputElement>(null)

  const { datepicker, data, state } = useDatepicker(
    datepickerRef,
    datepickerDialogRef,
    dateInputRef,
    options
  )
  const classNames = (day: CalendarDay) =>
    Object.entries({
      disabled: !day.currentMonth,
      'sg-date-today': day.today,
      // 'sg-date-holiday': day.holiday,
    })
      .map(([className, add]) => (add ? className : ''))
      .join(' ')
  return (
    <>
      <div className="form-group">
        <label htmlFor={id}>Date</label>

        <div className="group" ref={datepickerRef}>
          <input
            ref={dateInputRef}
            id={id}
            type="text"
            placeholder="yyyy-mm-dd"
            value={data.formattedSelectedDate}
            onChange={(e) => datepicker.select(e.target.value)}
          />
          <button
            ref={datepickerTriggerRef}
            type="button"
            className="primary"
            onClick={() => datepicker.open()}
          >
            <i className="sg-icon sg-icon-calendar">Select date</i>
          </button>
        </div>
        <span className="form-info">Select a date</span>
      </div>
      <div
        ref={datepickerDialogRef}
        className={`sg-date ${state.isActive ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Choose Date"
      >
        <header>
          <button className="link" onClick={() => datepicker.sub(1, 'months')}>
            <i className="sg-icon sg-icon-previous">Previous month</i>
          </button>
          <Dropdown options={months({})}>{data.monthName}</Dropdown>
          <Dropdown options={years({})}>{data.year + ''}</Dropdown>
          <button className="link" onClick={() => datepicker.add(1, 'months')}>
            <i className="sg-icon sg-icon-next">Next month</i>
          </button>
        </header>
        <main>
          <table role="grid">
            <thead>
              <tr>
                <th scope="col" abbr="Monday">
                  Mon
                </th>
                <th scope="col" abbr="Tuesday">
                  Tue
                </th>
                <th scope="col" abbr="Wednesday">
                  Wed
                </th>
                <th scope="col" abbr="Thursday">
                  Thu
                </th>
                <th scope="col" abbr="Friday">
                  Fri
                </th>
                <th scope="col" abbr="Saturday">
                  Sat
                </th>
                <th scope="col" abbr="Sunday">
                  Sun
                </th>
              </tr>
            </thead>
            <tbody>
              {data.calendar.map((week, ix) => (
                <tr key={`week_${ix}`}>
                  {week.map((day) => (
                    <td
                      key={day.day}
                      data-date={day.formattedDate}
                      className={classNames(day)}
                      title={day.today ? 'Today' : ''}
                      tabIndex={-1}
                      role={day.selected ? 'gridcell' : undefined}
                      aria-selected={day.selected ? true : undefined}
                      onClick={() => {
                        day.currentMonth && datepicker.select(day.date)
                      }}
                    >
                      {day.day}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}
