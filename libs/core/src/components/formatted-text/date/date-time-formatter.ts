type DateTimeFormatter = (value?: Date | string, locale?: string) => string

export type DateTimeFormat = keyof typeof dateTimeFormats

const convertValueToDate = (value?: Date | string): Date | undefined => {
  if (typeof value === 'string') {
    return new Date(value)
  }
  return value
}

export const dateTimeFormats = {
  dateOnlyNumbers: (value, locale) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(
      convertValueToDate(value),
    ),
  dateLong: (value, locale) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
      convertValueToDate(value),
    ),
  dateLongWithWeekday: (value, locale) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'full' })
      .format(convertValueToDate(value))
      .replace(',', ''),
  dateShort: (value, locale) => {
    const formatter = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' })
    if (locale?.toLowerCase() === 'sv-se') {
      return formatter.format(convertValueToDate(value)).replace('.', '')
    }

    return formatter.format(convertValueToDate(value))
  },
  dateShortWithWeekday: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(convertValueToDate(value))

    if (locale?.toLowerCase() === 'sv-se') {
      return formatted.replace('.', '')
    }
    if (locale?.toLowerCase() === 'en-gb') {
      return formatted.replace(',', '')
    }

    return formatted
  },
  timeShort: (value, locale) =>
    new Intl.DateTimeFormat(locale, { timeStyle: 'short' }).format(
      convertValueToDate(value),
    ),
  timeLong: (value, locale) =>
    new Intl.DateTimeFormat(locale, { timeStyle: 'medium' }).format(
      convertValueToDate(value),
    ),
  dateTimeLong: (value, locale) => {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(convertValueToDate(value))
  },
  dateTimeLongWithWeekday: (value, locale) => {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(convertValueToDate(value))
  },
  dateTimeShort: (value, locale) => {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(convertValueToDate(value))
  },
} satisfies Record<string, DateTimeFormatter>
