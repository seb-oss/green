import { createDatepicker, DatepickerData, DatepickerOptions } from '@sebgroup/extract'
import { useMemo, useRef, useState } from 'react'
import { useDatepicker } from './hook'

export const Datepicker = () => {
  const id = 'input'
  const datepickerRef = useRef<HTMLDivElement>(null)
  const datepickerTriggerRef = useRef<HTMLButtonElement>(null)
  const datepickerDialogRef = useRef<HTMLDivElement>(null)
  const dateInputRef = useRef<HTMLInputElement>(null)
  const options: DatepickerOptions = {}

  const { datepicker, data } = useDatepicker(datepickerRef, datepickerDialogRef, dateInputRef, options)

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
            className="sg-date-select"
            onClick={() => datepicker.open()}
          >
            Select date
          </button>
        </div>
        <span className="form-info">Select a date</span>
      </div>
      <div
        ref={datepickerDialogRef}
        className={`sg-date ${ datepicker.state.isActive ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Choose Date"
      >
        <div className="sg-date" role="dialog" aria-modal="true" aria-label="Choose Date">
          <header>
            <button onClick={() => datepicker.sub(1, 'months')}>&lt;</button>
            <button type="button" aria-haspopup="listbox">{ data.month }</button>
            <button type="button" aria-haspopup="listbox">{ data.year }</button>
            <button onClick={() => datepicker.add(1, 'months')}>&gt;</button>
          </header>
          <main>
            <table role="grid">
              <thead>
                <tr>
                  <th scope="col" abbr="Monday">Mon</th>
                  <th scope="col" abbr="Tuesday">Tue</th>
                  <th scope="col" abbr="Wednesday">Wed</th>
                  <th scope="col" abbr="Thursday">Thu</th>
                  <th scope="col" abbr="Friday">Fri</th>
                  <th scope="col" abbr="Saturday">Sat</th>
                  <th scope="col" abbr="Sunday">Sun</th>
                </tr>
              </thead>
              <tbody>
                { data.calendar.map((week, ix) => (
                  <tr key={`week_${ix}`}>
                    { week.map((day) => (
                      <td
                        key={day.day}
                        data-date={day.formattedDate}
                        className={`${day.currentMonth? '' : 'disabled'}`}
                        tabIndex={-1}
                        role={day.selected ? 'gridcell' : undefined}
                        aria-selected={day.selected ? true : undefined}
                        onClick={() => { day.currentMonth && datepicker.select(day.date) }}
                      >
                        { day.day }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}