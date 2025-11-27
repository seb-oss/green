import { Pipe, PipeTransform } from '@angular/core'

/** Pipe used to transform text with special characters into a simple kebab-case id. */
@Pipe({
    name: 'slug',
    standalone: false
})
export class SlugPipe implements PipeTransform {
  /**
   * Function for executing the transformation to kebab-case id.
   * @param value the text with special characters which to transform.
   */
  transform(value?: string): unknown {
    if (!value) {
      return value
    }
    return value
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }
}
