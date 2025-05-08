import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'trThook',
  standalone: true,
})
export class TrThookPipe implements PipeTransform {
  transform<V>(
    value: V,
    index: number,
    thookFn?: (rowData: V) => string,
  ): string {
    // call thook fn to set thook for active row
    if (thookFn != null) {
      return thookFn(value)
    }

    // default thook
    return `table-row-${index}`
  }
}
