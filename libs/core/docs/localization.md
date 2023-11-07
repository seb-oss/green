# Localization

Green Core has built in localization for English (default) and Swedish. The current language can be set by calling the `setLocale` function from Green Core:

```ts
import { gdsInitLocalization, targetLocales } from '@sebgroup/green-core/localization'
const { setLocale, getLocales } = gdsInitLocalization()

setLocale('se')

// Returns the active locale
getLocale()

// log a list of avaibale built-in locales
console.log(targetLocales)
```

This can be called at any time, and it will cause all Green Core components on the page to re-render with the correct locale.

## Additional locales

Green should have translations for all the required languages built-in, so if you are missing the locale that you need, please get in touch and we will help you add it.

If you find yourself in some edge case where you absolutely need a custom translation or locale, we got you covered too.

When calling `gdsInitLocalization` you can supply additional locales and templates:

```ts
const { setLocale, getLocale } = gdsInitLocalization({
  extraLocales,
  extraTemplates,
})
```

`extraLocales` is just an array of locale ids, like `['es', 'fr']` and `extraTempletes` needs to be a `Map` with locale id keys and `@lit/localize` templates as values. These templates can be generated using the `lit-localize` CLI. Check the Lit website for more info. You can also check the Green Core source code to see how it is done there.
