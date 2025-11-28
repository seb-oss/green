/**
 * Shared decorators for Angular web component wrappers
 */

/**
 * Decorator that automatically forwards properties to the underlying web component DOM element.
 *  Usage:
 * ```typescript
 * @ProxyInputs(['variant', 'rank'])
 * export class ButtonComponent {
 *  ...
 * }
 * ```
 */
export function ProxyInputs(inputNames: string[]) {
  return (cls: any) => {
    // Store original ngAfterViewInit and ngOnChanges if they exist
    const originalNgAfterViewInit = cls.prototype.ngAfterViewInit
    const originalNgOnChanges = cls.prototype.ngOnChanges

    // Add ngAfterViewInit to set up initial values
    cls.prototype.ngAfterViewInit = function () {
      // Call original ngAfterViewInit first
      if (originalNgAfterViewInit) {
        originalNgAfterViewInit.call(this)
      }

      // Sync all current property values to the web component
      inputNames.forEach((inputName) => {
        const currentValue = this[inputName]
        if (currentValue !== undefined && this.element) {
          this.zone.runOutsideAngular(() => {
            this.element[inputName] = currentValue
          })
        }
      })
    }

    // Add ngOnChanges to sync property changes
    cls.prototype.ngOnChanges = function (changes: any) {
      // Call original ngOnChanges first
      if (originalNgOnChanges) {
        originalNgOnChanges.call(this, changes)
      }

      // Sync changed properties to the web component
      Object.keys(changes).forEach((propertyName) => {
        if (inputNames.includes(propertyName) && this.element) {
          const change = changes[propertyName]
          this.zone.runOutsideAngular(() => {
            this.element[propertyName] = change.currentValue
          })
        }
      })
    }
  }
}
