import {
  createMask,
  InputmaskOptions,
} from '@sebgroup/green-angular/src/v-angular/input-mask'

/**
 * Helper function to generate InputmaskOptions by requested locale.
 * @param locale - requested locale. If not given, it'll use the browsers locale
 * @returns InputmaskOptions with date settings
 */
export const getLocaleDateMask = (
  dateCharacters?: DateCharacters,
  locale?: string,
): InputmaskOptions<Date> => {
  // If no locale has been passed, use browser language
  if (!locale) locale = navigator.language

  const format = getLocaleDateString(locale).toLowerCase()

  return getFormatDateMask(format, dateCharacters)
}

export const getLocaleDateString = (locale?: string) =>
  locale && dateFormats[locale] ? dateFormats[locale] : 'yyyy-MM-dd'
const dateFormats: Record<string, string> = {
  'af-ZA': 'yyyy/MM/dd',
  'am-ET': 'dd/MM/yyyy',
  'ar-AE': 'dd/MM/yyyy',
  'ar-BH': 'dd/MM/yyyy',
  'ar-DZ': 'dd-MM-yyyy',
  'ar-EG': 'dd/MM/yyyy',
  'ar-IQ': 'dd/MM/yyyy',
  'ar-JO': 'dd/MM/yyyy',
  'ar-KW': 'dd/MM/yyyy',
  'ar-LB': 'dd/MM/yyyy',
  'ar-LY': 'dd/MM/yyyy',
  'ar-MA': 'dd-MM-yyyy',
  'ar-OM': 'dd/MM/yyyy',
  'ar-QA': 'dd/MM/yyyy',
  'ar-SA': 'dd/MM/yyyy',
  'ar-SY': 'dd/MM/yyyy',
  'ar-TN': 'dd-MM-yyyy',
  'ar-YE': 'dd/MM/yyyy',
  'arn-CL': 'dd-MM-yyyy',
  'as-IN': 'dd-MM-yyyy',
  'az-Cyrl-AZ': 'dd.MM.yyyy',
  'az-Latn-AZ': 'dd.MM.yyyy',
  'ba-RU': 'dd.MM.yyyy',
  'be-BY': 'dd.MM.yyyy',
  'bg-BG': 'dd.MM.yyyy',
  'bn-BD': 'dd-MM-yyyy',
  'bn-IN': 'dd-MM-yyyy',
  'bo-CN': 'yyyy/MM/dd',
  'br-FR': 'dd/MM/yyyy',
  'bs-Cyrl-BA': 'dd.MM.yyyy',
  'bs-Latn-BA': 'dd.MM.yyyy',
  'ca-ES': 'dd/MM/yyyy',
  'co-FR': 'dd/MM/yyyy',
  'cs-CZ': 'dd.MM.yyyy',
  'cy-GB': 'dd/MM/yyyy',
  'da-DK': 'dd.MM.yyyy',
  'de-AT': 'dd.MM.yyyy',
  'de-CH': 'dd.MM.yyyy',
  'de-DE': 'dd.MM.yyyy',
  'de-LI': 'dd.MM.yyyy',
  'de-LU': 'dd.MM.yyyy',
  'dsb-DE': 'dd.MM.yyyy',
  'dv-MV': 'dd/MM/yyyy',
  'el-GR': 'dd/MM/yyyy',
  en: 'MM/dd/yyyy',
  'en-029': 'MM/dd/yyyy',
  'en-AU': 'dd/MM/yyyy',
  'en-BZ': 'dd/MM/yyyy',
  'en-CA': 'dd/MM/yyyy',
  'en-GB': 'dd/MM/yyyy',
  'en-IE': 'dd/MM/yyyy',
  'en-IN': 'dd-MM-yyyy',
  'en-JM': 'dd/MM/yyyy',
  'en-MY': 'dd/MM/yyyy',
  'en-NZ': 'dd/MM/yyyy',
  'en-PH': 'MM/dd/yyyy',
  'en-SG': 'dd/MM/yyyy',
  'en-TT': 'dd/MM/yyyy',
  'en-US': 'MM/dd/yyyy',
  'en-ZA': 'yyyy/MM/dd',
  'en-ZW': 'MM/dd/yyyy',
  'es-AR': 'dd/MM/yyyy',
  'es-BO': 'dd/MM/yyyy',
  'es-CL': 'dd-MM-yyyy',
  'es-CO': 'dd/MM/yyyy',
  'es-CR': 'dd/MM/yyyy',
  'es-DO': 'dd/MM/yyyy',
  'es-EC': 'dd/MM/yyyy',
  'es-ES': 'dd/MM/yyyy',
  'es-GT': 'dd/MM/yyyy',
  'es-HN': 'dd/MM/yyyy',
  'es-MX': 'dd/MM/yyyy',
  'es-NI': 'dd/MM/yyyy',
  'es-PA': 'MM/dd/yyyy',
  'es-PE': 'dd/MM/yyyy',
  'es-PR': 'dd/MM/yyyy',
  'es-PY': 'dd/MM/yyyy',
  'es-SV': 'dd/MM/yyyy',
  'es-US': 'MM/dd/yyyy',
  'es-UY': 'dd/MM/yyyy',
  'es-VE': 'dd/MM/yyyy',
  'et-EE': 'dd.MM.yyyy',
  'eu-ES': 'yyyy/MM/dd',
  'fa-IR': 'MM/dd/yyyy',
  'fi-FI': 'dd.MM.yyyy',
  'fil-PH': 'MM/dd/yyyy',
  'fo-FO': 'dd-MM-yyyy',
  'fr-BE': 'dd/MM/yyyy',
  'fr-CA': 'yyyy-MM-dd',
  'fr-CH': 'dd.MM.yyyy',
  'fr-FR': 'dd/MM/yyyy',
  'fr-LU': 'dd/MM/yyyy',
  'fr-MC': 'dd/MM/yyyy',
  'fy-NL': 'dd-MM-yyyy',
  'ga-IE': 'dd/MM/yyyy',
  'gd-GB': 'dd/MM/yyyy',
  'gl-ES': 'dd/MM/yyyy',
  'gsw-FR': 'dd/MM/yyyy',
  'gu-IN': 'dd-MM-yyyy',
  'ha-Latn-NG': 'dd/MM/yyyy',
  'he-IL': 'dd/MM/yyyy',
  'hi-IN': 'dd-MM-yyyy',
  'hr-BA': 'dd.MM.yyyy.',
  'hr-HR': 'dd.MM.yyyy',
  'hsb-DE': 'dd.MM.yyyy',
  'hu-HU': 'yyyy.MM.dd.',
  'hy-AM': 'dd.MM.yyyy',
  'id-ID': 'dd/MM/yyyy',
  'ig-NG': 'dd/MM/yyyy',
  'ii-CN': 'yyyy/MM/dd',
  'is-IS': 'dd.MM.yyyy',
  'it-CH': 'dd.MM.yyyy',
  'it-IT': 'dd/MM/yyyy',
  'iu-Cans-CA': 'dd/MM/yyyy',
  'iu-Latn-CA': 'dd/MM/yyyy',
  'ja-JP': 'yyyy/MM/dd',
  'ka-GE': 'dd.MM.yyyy',
  'kk-KZ': 'dd.MM.yyyy',
  'kl-GL': 'dd-MM-yyyy',
  'km-KH': 'yyyy-MM-dd',
  'kn-IN': 'dd-MM-yyyy',
  'ko-KR': 'yyyy.MM.dd',
  'kok-IN': 'dd-MM-yyyy',
  'ky-KG': 'dd.MM.yyyy',
  'lb-LU': 'dd/MM/yyyy',
  'lo-LA': 'dd/MM/yyyy',
  'lt-LT': 'yyyy.MM.dd',
  'lv-LV': 'yyyy.MM.dd.',
  'mi-NZ': 'dd/MM/yyyy',
  'mk-MK': 'dd.MM.yyyy',
  'ml-IN': 'dd-MM-yyyy',
  'mn-MN': 'yyyy.MM.dd',
  'mn-Mong-CN': 'yyyy/MM/dd',
  'moh-CA': 'MM/dd/yyyy',
  'mr-IN': 'dd-MM-yyyy',
  'ms-BN': 'dd/MM/yyyy',
  'ms-MY': 'dd/MM/yyyy',
  'mt-MT': 'dd/MM/yyyy',
  'nb-NO': 'dd.MM.yyyy',
  'ne-NP': 'MM/dd/yyyy',
  'nl-BE': 'dd/MM/yyyy',
  'nl-NL': 'dd-MM-yyyy',
  'nn-NO': 'dd.MM.yyyy',
  'nso-ZA': 'yyyy/MM/dd',
  'oc-FR': 'dd/MM/yyyy',
  'or-IN': 'dd-MM-yyyy',
  'pa-IN': 'dd-MM-yyyy',
  'pl-PL': 'dd.MM.yyyy',
  'prs-AF': 'dd/MM/yyyy',
  'ps-AF': 'dd/MM/yyyy',
  'pt-BR': 'dd/MM/yyyy',
  'pt-PT': 'dd-MM-yyyy',
  'qut-GT': 'dd/MM/yyyy',
  'quz-BO': 'dd/MM/yyyy',
  'quz-EC': 'dd/MM/yyyy',
  'quz-PE': 'dd/MM/yyyy',
  'rm-CH': 'dd/MM/yyyy',
  'ro-RO': 'dd.MM.yyyy',
  'ru-RU': 'dd.MM.yyyy',
  'rw-RW': 'MM/dd/yyyy',
  'sa-IN': 'dd-MM-yyyy',
  'sah-RU': 'MM.dd.yyyy',
  se: 'yyyy-MM-dd',
  'se-FI': 'dd.MM.yyyy',
  'se-NO': 'dd.MM.yyyy',
  'se-SE': 'yyyy-MM-dd',
  'si-LK': 'yyyy-MM-dd',
  'sk-SK': 'dd.MM.yyyy',
  'sl-SI': 'dd.MM.yyyy',
  'sma-NO': 'dd.MM.yyyy',
  'sma-SE': 'yyyy-MM-dd',
  'smj-NO': 'dd.MM.yyyy',
  'smj-SE': 'yyyy-MM-dd',
  'smn-FI': 'dd.MM.yyyy',
  'sms-FI': 'dd.MM.yyyy',
  'sq-AL': 'yyyy-MM-dd',
  'sr-Cyrl-BA': 'dd.MM.yyyy',
  'sr-Cyrl-CS': 'dd.MM.yyyy',
  'sr-Cyrl-ME': 'dd.MM.yyyy',
  'sr-Cyrl-RS': 'dd.MM.yyyy',
  'sr-Latn-BA': 'dd.MM.yyyy',
  'sr-Latn-CS': 'dd.MM.yyyy',
  'sr-Latn-ME': 'dd.MM.yyyy',
  'sr-Latn-RS': 'dd.MM.yyyy',
  sv: 'yyyy-MM-dd',
  'sv-FI': 'dd.MM.yyyy',
  'sv-SE': 'yyyy-MM-dd',
  'sw-KE': 'MM/dd/yyyy',
  'syr-SY': 'dd/MM/yyyy',
  'ta-IN': 'dd-MM-yyyy',
  'te-IN': 'dd-MM-yyyy',
  'tg-Cyrl-TJ': 'dd.MM.yyyy',
  'th-TH': 'dd/MM/yyyy',
  'tk-TM': 'dd.MM.yyyy',
  'tn-ZA': 'yyyy/MM/dd',
  'tr-TR': 'dd.MM.yyyy',
  'tt-RU': 'dd.MM.yyyy',
  'tzm-Latn-DZ': 'dd-MM-yyyy',
  'ug-CN': 'yyyy-MM-dd',
  'uk-UA': 'dd.MM.yyyy',
  'ur-PK': 'dd/MM/yyyy',
  'uz-Cyrl-UZ': 'dd.MM.yyyy',
  'uz-Latn-UZ': 'dd/MM yyyy',
  'vi-VN': 'dd/MM/yyyy',
  'wo-SN': 'dd/MM/yyyy',
  'xh-ZA': 'yyyy/MM/dd',
  'yo-NG': 'dd/MM/yyyy',
  'zh-CN': 'yyyy/MM/dd',
  'zh-HK': 'dd/MM/yyyy',
  'zh-MO': 'dd/MM/yyyy',
  'zh-SG': 'dd/MM/yyyy',
  'zh-TW': 'yyyy/MM/dd',
  'zu-ZA': 'yyyy/MM/dd',
}
export const getFormatDateMask = (
  format: string,
  dateCharacters?: DateCharacters,
) => {
  const separators = [' ', '.', '-', '/']
  const separator =
    separators.find((operator) => format.indexOf(operator) > -1) ?? '-'
  const dateObjects = format.split(separator)
  const year: { key: string; index: number } = { key: 'year', index: 0 },
    month: { key: string; index: number } = { key: 'month', index: 1 },
    day: { key: string; index: number } = { key: 'day', index: 2 }

  dateObjects.forEach((dateObject, index) => {
    switch (dateObject[0]) {
      case 'y':
        year.index = index
        break
      case 'm':
        month.index = index
        break
      case 'd':
        day.index = index
        break
    }
  })
  const placeholder = setDateFormatCharacters(format, dateCharacters)

  return createMask<Date>({
    alias: 'datetime',
    inputFormat: format,
    placeholder,
    parser: (value: string) => {
      const values = value.split(separator)
      const y = +values[year.index]
      const m = +values[month.index] - 1
      const d = +values[day.index]
      return new Date(y, m, d)
    },
    onBeforeMask(initialValue: string) {
      if (!initialValue || typeof initialValue !== 'string') return ''
      // If initialValues is in dateTime format, remove seconds that present after the "T"
      if (initialValue.includes('T')) initialValue = initialValue.split('T')[0]
      // initialValue should always be in yyyy-mm-dd no matter if set from control, via datepicker or manually with keyboard
      const values = initialValue.split('-')
      const datePartsInOrder = [year, month, day].sort(
        (a, b) => a.index - b.index,
      )
      // "Insert" correct values for the year/month/day, then join to string with separator
      return datePartsInOrder
        .map(({ key }) => {
          const [yearValue, monthValue, dateValue] = values
          if (key === 'year') return yearValue
          if (key === 'month') return monthValue
          return dateValue
        })
        .join(separator)
    },
  })
}

export interface DateCharacters {
  year: string
  month: string
  day: string
}
export const setDateFormatCharacters = (
  format: string,
  dateCharacters?: DateCharacters,
) => {
  if (!dateCharacters) return format
  format = format.replace(/y/g, dateCharacters.year)
  format = format.replace(/m/g, dateCharacters.month)
  format = format.replace(/d/g, dateCharacters.day)
  return format
}
