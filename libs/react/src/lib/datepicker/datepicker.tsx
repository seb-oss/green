import {
  CalendarDay,
  DatepickerOptions,
  months,
  years,
  randomId,
} from '@sebgroup/extract'
import { useRef, useEffect, useState } from 'react'
import { useDatepicker } from './hook'
import Dropdown from '../dropdown/dropdown'

export const Datepicker = (options: DatepickerOptions = {}) => {
  const [uuid] = useState(randomId())
  const id = `sgr-datepicker-${uuid}`
  const datepickerRef = useRef<HTMLDivElement>(null)
  const datepickerTriggerRef = useRef<HTMLButtonElement>(null)
  const datepickerDialogRef = useRef<HTMLDivElement>(null)
  const dateInputRef = useRef<HTMLInputElement>(null)

  options = { label: 'Date', ...options }

  const { datepicker, data, state } = useDatepicker(
    datepickerRef,
    datepickerDialogRef,
    dateInputRef,
    datepickerTriggerRef,
    options
  )

  useEffect(() => {
    const selDateSub = datepicker.selectedDate$?.subscribe(
      (newDate) => options.onChange && options.onChange(newDate)
    )
    return () => selDateSub?.unsubscribe()
  }, [datepicker, options])

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
        <label htmlFor={id}>{options.label}</label>
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
            onClick={() => datepicker.toggle()}
          >
            <i className="sg-icon sg-icon-calendar">Select date</i>
          </button>
        </div>
        <span className="form-info">Select a date</span>
      </div>
      <div
        ref={datepickerDialogRef}
        className={`popover popover-datepicker ${
          state.isActive ? 'active' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Choose Date"
      >
        {state.isActive && (
          <div className="sg-date">
            <header>
              <button
                className="link"
                onClick={() => datepicker.sub(1, 'months')}
              >
                <i className="sg-icon sg-icon-previous">Previous month</i>
              </button>
              <Dropdown
                options={months({})}
                display="key"
                texts={{ placeholder: data.monthName }}
                onChange={datepicker.setMonth}
                value={data.month}
              />
              <Dropdown
                options={years({})}
                display="key"
                texts={{ placeholder: data.year + '' }}
                onChange={datepicker.setYear}
                value={data.year}
              />
              <button
                className="link"
                onClick={() => datepicker.add(1, 'months')}
              >
                <i className="sg-icon sg-icon-next">Next month</i>
              </button>
            </header>
            <main>
              <table role="grid">
                <thead>
                  <tr>
                    {data.calendar.headers.map((header, ix) => (
                      <th
                        scope="col"
                        abbr={header.abbr}
                        key={`week_${ix}`}
                        className={
                          header.type === 'week'
                            ? 'sg-week-header'
                            : 'sg-day-header'
                        }
                      >
                        {header.displayText}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.calendar.calendarGrid.map((week, ix) => (
                    <tr key={`week_${ix}`}>
                      {data.calendar.weekNumbers ? (
                        <th className="sg-week-number">
                          {data.calendar.weekNumbers[ix]}
                        </th>
                      ) : (
                        ''
                      )}
                      {week.map((day) => (
                        <td
                          key={day.day}
                          data-date={day.formattedDate}
                          className={classNames(day)}
                          title={day.today ? 'Today' : ''}
                          tabIndex={
                            day.highlighted ||
                            (day.selected && !data?.highlightedDate) ||
                            (day.today &&
                              !data?.highlightedDate &&
                              !data?.selectedDate)
                              ? 0
                              : -1
                          }
                          role={day.selected ? 'gridcell' : undefined}
                          aria-selected={
                            day.selected && !data?.highlightedDate
                              ? true
                              : undefined
                          }
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
        )}
      </div>
    </>
  )
}
