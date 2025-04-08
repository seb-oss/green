export type NumberFormats = keyof typeof numberFormats

type NumberFormatter = (
  value?: number | string,
  locale?: string,
  currency?: string,
) => string

export const numberFormats = {
  decimalsAndThousands: (value, locale, currency) => {
    const parsed = Number(value)
    const options: Intl.NumberFormatOptions = {}

    if (!isNaN(parsed) && parsed % 1 !== 0) {
      options.minimumFractionDigits = 2
      options.maximumFractionDigits = 2
    }

    if (currency) {
      return new Intl.NumberFormat(locale, {
        ...options,
        style: 'currency',
        currency: currency,
      }).format(parsed)
    }

    return new Intl.NumberFormat(locale, options).format(parsed)
  },
} satisfies Record<string, NumberFormatter>
