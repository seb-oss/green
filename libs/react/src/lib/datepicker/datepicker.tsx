import { createDatepicker, DatepickerData } from '@sebgroup/extract'
import { useMemo, useState } from 'react'

export const Datepicker = () => {
  const [data, setData] = useState<DatepickerData>()
  const datepicker = useMemo(() => createDatepicker(setData, {}), [])

  return !data ? <></> : (
    <div>
      <div className="group mb-3">
        <input type="text" placeholder="yyyy-mm-dd" />
        <button type="button">D</button>
      </div>
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
                      role={day.selected ? 'gridcell' : ''}
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
  )
}