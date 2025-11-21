type DateTimeFormatter = (value?: Date | string, locale?: string) => string

export type DateTimeFormat = keyof typeof dateTimeFormats

const convertValueToDate = (value?: Date | string): Date | undefined => {
  if (typeof value === 'string') {
    return new Date(value)
  }
  return value
}

const normalizeFormatted = (formatted: string, locale?: string): string => {
  const lowerLocale = locale?.toLowerCase()

  if (lowerLocale === 'sv-se') {
    return formatted.replace('.', '')
  }

  if (lowerLocale === 'sv-se') {
    return formatted.replace(' kl ', ', ')
  }

  if (lowerLocale === 'en-gb' || lowerLocale === 'en-us') {
    return formatted.replace(' at ', ', ')
  }
  return formatted
}

export const dateTimeFormats = {
  dateOnlyNumbers: (value, locale) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(
      convertValueToDate(value),
    ),
  dateLong: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      dateStyle: 'long',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
  },
  dateLongWithWeekday: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      dateStyle: 'full',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
  },
  dateShort: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
  },
  dateShortWithWeekday: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
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
    const formatted = new Intl.DateTimeFormat(locale, {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
  },
  dateTimeLongWithWeekday: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
  },
  dateTimeShort: (value, locale) => {
    const formatted = new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(convertValueToDate(value))
    return normalizeFormatted(formatted, locale)
  },
} satisfies Record<string, DateTimeFormatter>
