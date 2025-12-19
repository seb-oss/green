import { CommonModule } from '@angular/common'
import { NgModule, Pipe, PipeTransform } from '@angular/core'
import {
  HashMap,
  Translation,
  TRANSLOCO_FALLBACK_STRATEGY,
  TRANSLOCO_INTERCEPTOR,
  TRANSLOCO_MISSING_HANDLER,
  TRANSLOCO_TRANSPILER,
  TranslocoConfig,
  TranslocoFallbackStrategy,
  TranslocoInterceptor,
  TranslocoMissingHandler,
  TranslocoTranspilerFunction,
} from '@jsverse/transloco'

@Pipe({
    name: 'transloco',
    standalone: false
})
export class TranslocoMockPipe implements PipeTransform {
  transform = (value: number): number => value
}

export class TranslocoMockTranspiler implements TranslocoTranspilerFunction {
  transpile = (..._args: string[]) => ''
}

export class TranslocoMockMissingHandler implements TranslocoMissingHandler {
  handle = (key: string, _: TranslocoConfig, _params: HashMap) => key
}

export class TranslocoMockStrategy implements TranslocoFallbackStrategy {
  getNextLangs = (_failedLang: string): any => ''
}

export class TranslocoMockInterceptor implements TranslocoInterceptor {
  preSaveTranslation(translation: Translation, _lang: string): Translation {
    return translation
  }

  preSaveTranslationKey(_key: string, value: string, _lang: string): string {
    return value
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [TranslocoMockPipe],
  exports: [TranslocoMockPipe],
  providers: [
    {
      provide: TRANSLOCO_TRANSPILER,
      useClass: TranslocoMockTranspiler,
    },
    {
      provide: TRANSLOCO_INTERCEPTOR,
      useClass: TranslocoMockInterceptor,
    },
    {
      provide: TRANSLOCO_FALLBACK_STRATEGY,
      useClass: TranslocoMockStrategy,
    },
    {
      provide: TRANSLOCO_MISSING_HANDLER,
      useClass: TranslocoMockMissingHandler,
      deps: [TRANSLOCO_TRANSPILER],
    },
  ],
})
export class NggvI18nTestModule {}
