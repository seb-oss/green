import { ModuleWithProviders, NgModule } from '@angular/core'

import { INPUT_MASK_CONFIG, InputMaskConfig } from './config'
import { InputMaskFormatPipe } from './input-mask-format.pipe'
import { NgvInputMaskDirective } from './input-mask.directive'

@NgModule({
  declarations: [NgvInputMaskDirective, InputMaskFormatPipe],
  exports: [NgvInputMaskDirective, InputMaskFormatPipe],
  providers: [
    {
      provide: INPUT_MASK_CONFIG,
      useClass: InputMaskConfig,
    },
  ],
})
export class NgvInputMaskModule {
  static forRoot(
    config?: Partial<InputMaskConfig>,
  ): ModuleWithProviders<NgvInputMaskModule> {
    return {
      ngModule: NgvInputMaskModule,
      providers: [{ provide: INPUT_MASK_CONFIG, useValue: config }],
    }
  }
}
