import { Pipe, PipeTransform } from '@angular/core';

import type Inputmask from 'inputmask';
import _Inputmask from 'inputmask';

import type { InputmaskOptions } from './input-mask.types';

const InputmaskStatic = (_Inputmask as unknown as { default?: Inputmask.Static }).default || _Inputmask;

@Pipe({
  name: 'ngvInputMaskFormat',
})
export class InputMaskFormatPipe implements PipeTransform {
  transform<T = any>(value: any, options: InputmaskOptions<T>): any {
    if (!value) return value;
    return InputmaskStatic.format(value, options);
  }
}
