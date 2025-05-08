import { configureLocalization } from '@lit/localize'

import { sourceLocale, targetLocales } from '../../generated/locale-codes'
import * as templates_da from '../../generated/locales/da'
import * as templates_de from '../../generated/locales/de'
import * as templates_fi from '../../generated/locales/fi'
import * as templates_fr from '../../generated/locales/fr'
import * as templates_it from '../../generated/locales/it'
import * as templates_nl from '../../generated/locales/nl'
import * as templates_no from '../../generated/locales/no'
import * as templates_sv from '../../generated/locales/sv'

const localizedTemplates = new Map([
  ['sv', templates_sv],
  ['no', templates_no],
  ['nl', templates_nl],
  ['it', templates_it],
  ['fr', templates_fr],
  ['fi', templates_fi],
  ['de', templates_de],
  ['da', templates_da],
])

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
