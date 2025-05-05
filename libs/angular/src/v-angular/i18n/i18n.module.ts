import { Inject, Injectable, isDevMode, NgModule } from '@angular/core'
import {
  HashMap,
  provideTransloco,
  provideTranslocoMissingHandler,
  TRANSLOCO_TRANSPILER,
  TranslocoLoader,
  TranslocoMissingHandler,
  TranslocoMissingHandlerData,
  TranslocoModule,
  TranslocoTranspiler,
} from '@jsverse/transloco'
import { delay, lastValueFrom, of } from 'rxjs'

import defaultLang from './i18n.json'

@Injectable()
export class NggvMissingHandler implements TranslocoMissingHandler {
  constructor(
    @Inject(TRANSLOCO_TRANSPILER) private transpiler: TranslocoTranspiler,
  ) {}
  handle(key: string, _: TranslocoMissingHandlerData, params: HashMap) {
    const keyWithoutLocale = key.charAt(2) === '.' ? key.substring(3) : key
    const withoutScope = keyWithoutLocale.replace(
      /^((?:\w+)(?<!label|heading|button|alt|link|title|href|fieldhelp|error|text|image|list)(?:\.))/,
      '',
    )
    const transpileParams = {
      value: defaultLang[keyWithoutLocale as keyof typeof defaultLang],
      params,
      translation: {},
      key: keyWithoutLocale,
    }
    const transpiledKey = this.transpiler.transpile(transpileParams)
    return transpiledKey || withoutScope
  }
}

const en = {
  'error.fieldinputmask': 'Invalid value pattern',
  'error.fieldrequired': 'Field must have content',
  'error.fieldmaxlength':
    'Field content should not be longer than {{requiredLength}} characters',
  'label.defaultlabel': 'Label',
  'label.maxlength': 'characters left',
  'label.optional': 'Optional',
}

const sv = {
  'error.fieldinputmask': 'Icke giltigt tecken mönster',
  'error.fieldrequired': 'Fältet får inte lämnas tomt',
  'error.fieldmaxlength':
    'Fältinnehållet måste vara längre än {{requiredLength}} tecken',
  'label.maxlength': 'tecken kvar',
}
class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    if (lang === 'sv') {
      return lastValueFrom(of(sv).pipe(delay(1500)))
    }
    return lastValueFrom(of(en).pipe(delay(500)))
  }
}

@NgModule({
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['en', 'sv'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoInlineLoader,
    }),
    provideTranslocoMissingHandler(NggvMissingHandler),
  ],
  exports: [TranslocoModule],
})
export class NggvI18nModule {}
