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
export type ProxyInputEntry =
  | string
  | {
      inputName: string
      propName: string
    }

export function ProxyInputs(inputNames: ProxyInputEntry[]) {
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
      inputNames.forEach((entry) => {
        const inputName = typeof entry === 'string' ? entry : entry.inputName
        const propName = typeof entry === 'string' ? entry : entry.propName
        const currentValue = this[inputName]
        if (currentValue !== undefined && this.element) {
          this.zone.runOutsideAngular(() => {
            // Prefer setting using the explicit propName (kebab-case) when provided
            try {
              this.element[propName] = currentValue
            } catch {
              // Fallback to inputName if propName is not a valid property on the element
              this.element[inputName] = currentValue
            }
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

      // Build a map of inputName -> propName for quick lookup
      const mapping: Record<string, string> = {}
      inputNames.forEach((entry) => {
        if (typeof entry === 'string') mapping[entry] = entry
        else mapping[entry.inputName] = entry.propName
      })

      // Sync changed properties to the web component
      Object.keys(changes).forEach((propertyName) => {
        const propName = mapping[propertyName]
        if (propName && this.element) {
          const change = changes[propertyName]
          this.zone.runOutsideAngular(() => {
            this.element[propName] = change.currentValue
          })
        }
      })
    }
  }
}
