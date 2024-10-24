import { configureLocalization } from '@lit/localize'

import { sourceLocale, targetLocales } from '../../generated/locale-codes'
import * as templates_sv from '../../generated/locales/sv'

const localizedTemplates = new Map([['sv', templates_sv]])

type LocalizationConfig = {
  extraLocales: string[]
  extraTemplates: typeof localizedTemplates
}

/**
 * A list of available built-in locales
 */
export { targetLocales }

/**
 * Initializes localization for Green Core. This is a wrapper around Lit's `configureLocalization`,
 * which adds the ability to add extra locales and templates.
 *
 * @param extraLocales - Extra locales to add to the list of target locales
 * @param extraTemplates - Extra templates to add to the list of localized templates
 */
export const gdsInitLocalization = (
  { extraLocales, extraTemplates }: LocalizationConfig = {
    extraLocales: [],
    extraTemplates: new Map(),
  },
) => {
  const _targetLocales = [...targetLocales] as string[]

  for (const [locale, template] of extraTemplates) {
    localizedTemplates.set(locale, template)
  }

  for (const locale of extraLocales) {
    _targetLocales.push(locale)
  }

  return configureLocalization({
    sourceLocale,
    targetLocales: _targetLocales,
    loadLocale: async (locale: string) => {
      const localModule = localizedTemplates.get(locale)
      if (localModule) {
        return localModule
      }
      return Promise.reject(new Error(`Locale ${locale} not found`))
    },
  })
}
