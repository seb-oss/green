import { configureLocalization } from '@lit/localize'

import { sourceLocale, targetLocales } from '../generated/locale-codes'

import * as templates_sv from '../generated/locales/sv'

const localizedTemplates = new Map([['sv', templates_sv]])

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (locale) => {
    let localModule = localizedTemplates.get(locale)
    if (localModule) {
      return localModule
    }
    return Promise.reject(new Error(`Locale ${locale} not found`))
  },
})
