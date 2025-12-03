export type NumberFormats = keyof typeof numberFormats

type NumberFormatter = (
  value?: number | string,
  locale?: string,
  currency?: string,
  decimals?: number,
) => string

export const numberFormats = {
  decimalsAndThousands: (value, locale, currency, decimals) => {
    const options: Intl.NumberFormatOptions = {
      maximumFractionDigits: decimals ?? 2,
      minimumFractionDigits: decimals ?? 2,
    }

    if (currency) {
      return new Intl.NumberFormat(locale, {
        ...options,
        style: 'currency',
        currency: currency,
      }).format(Number(value))
    }

    return new Intl.NumberFormat(locale, options).format(Number(value))
  },
} satisfies Record<string, NumberFormatter>
