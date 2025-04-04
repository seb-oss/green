export type NumberFormats = keyof typeof numberFormats

type NumberFormatter = (
  value?: number | string,
  locale?: string,
  currency?: string,
) => string

export const numberFormats = {
  decimalsAndThousands: (value, locale, currency) => {
    if (currency) {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(value))
    }

    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value))
  },
} satisfies Record<string, NumberFormatter>
