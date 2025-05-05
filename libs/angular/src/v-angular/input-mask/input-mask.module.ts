import { ModuleWithProviders, NgModule } from '@angular/core'

import { INPUT_MASK_CONFIG, InputMaskConfig } from './config'
import { InputMaskFormatPipe } from './input-mask-format.pipe'
import { NggvInputMaskDirective } from './input-mask.directive'

@NgModule({
  declarations: [NggvInputMaskDirective, InputMaskFormatPipe],
  exports: [NggvInputMaskDirective, InputMaskFormatPipe],
  providers: [
    {
      provide: INPUT_MASK_CONFIG,
      useClass: InputMaskConfig,
    },
  ],
})
export class NggvInputMaskModule {
  static forRoot(
    config?: Partial<InputMaskConfig>,
  ): ModuleWithProviders<NggvInputMaskModule> {
    return {
      ngModule: NggvInputMaskModule,
      providers: [{ provide: INPUT_MASK_CONFIG, useValue: config }],
    }
  }
}
