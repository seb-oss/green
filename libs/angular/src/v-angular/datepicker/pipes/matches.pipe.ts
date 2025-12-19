import { Pipe, PipeTransform } from '@angular/core'

import { match } from '../datepicker.utils'

@Pipe({
    name: 'matches',
    standalone: false
})
export class MatchesPipe implements PipeTransform {
  transform(value: Date, selected: Date | undefined): boolean {
    return match(value, selected)
  }
}
