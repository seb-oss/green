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
export type ProxyInputEntry = string

export function ProxyInputs(inputNames: ProxyInputEntry[]) {
  return (cls: any) => {
    // Store original ngAfterViewInit and ngOnChanges if they exist
    const originalNgAfterViewInit = cls.prototype.ngAfterViewInit
    const originalNgOnChanges = cls.prototype.ngOnChanges

    // Build mapping at decorator time: map Angular inputName (camelCase) => element propName (kebab-case)
    const mapping = inputNames.map((entry) => {
      const kebab = entry.replace(/\'/g, '')
      const camel = kebab.includes('-')
        ? kebab.replace(/-([a-z])/g, (_, l) => l.toUpperCase())
        : kebab
      return { inputName: camel, propName: kebab }
    })

    // Quick lookup by Angular input name -> element prop name
    const propLookup: Record<string, string> = mapping.reduce((acc, cur) => {
      acc[cur.inputName] = cur.propName
      return acc
    }, {} as Record<string, string>)

    // Add ngAfterViewInit to set up initial values
    cls.prototype.ngAfterViewInit = function () {
      // Call original ngAfterViewInit first
      if (originalNgAfterViewInit) {
        originalNgAfterViewInit.call(this)
      }

      // Sync all current property values to the web component using the mapping
      mapping.forEach(({ inputName, propName }: { inputName: string; propName: string }) => {
        const currentValue = this[inputName]
        if (currentValue !== undefined && this.element) {
          this.zone.runOutsideAngular(() => {
            // Use bracket notation so kebab-case prop names work as object properties
            this.element[propName] = currentValue
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

      // Sync changed properties to the web component using the propLookup
      Object.keys(changes).forEach((propertyName) => {
        const propName = propLookup[propertyName]
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
