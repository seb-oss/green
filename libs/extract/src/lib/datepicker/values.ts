const _paddedString = (num: number) => (num < 10 ? '0' + num : '' + num)

const _format = (
  date: Date,
  options: Intl.DateTimeFormatOptions,
  locale: string
) => Intl.DateTimeFormat(locale, options).format(date)

interface DateTimeFormatOptions {
  locale: string
}

type WeekFormat = 'long' | 'narrow' | 'short'
export interface WeekFormatOptions extends DateTimeFormatOptions {
  format: WeekFormat
}
type Days = [string, string, string, string, string, string, string]
export const weekdays = ({
  locale = navigator.language,
  format = 'long',
}: Partial<WeekFormatOptions>): Days => {
  // eslint-disable-next-line no-sparse-arrays
  const week = Array(7)
    .fill(null)
    .map((_, day) =>
      _format(new Date(`1970-01-${12 + day}`), { weekday: format }, locale)
    )
  return week as Days
}

type MonthFormat = 'long' | 'narrow' | 'short' | 'numeric' | '2-digit'
export interface MonthFormatOptions extends DateTimeFormatOptions {
  format: MonthFormat
}
type Months = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]
export const months = ({
  locale = navigator.language,
  format = 'long',
}: Partial<MonthFormatOptions>): Months => {
  const year = Array(12)
    .fill(null)
    .map((_, month) =>
      _format(
        new Date(`1970-${_paddedString(month + 1)}-01`),
        { month: format },
        locale
      )
    )
  return year as Months
}

/** Get weekday
 * @param date - Date to get weekday for
 * @param startDay - Start day of week, 6 by default = monday, 0 = sunday
 * @return number - Number for weekday from start of week
 */
export const getWeekday = (date: Date, startDay = 6) =>
  (date.getDay() + startDay) % 7
