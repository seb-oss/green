import { Injectable } from '@angular/core'

export interface Option<K, V> {
  key: K
  label: V
  disabled?: boolean
}

export interface OptionGroup<T extends Option<any, any>> {
  label: string
  options: T[]
  disabled?: boolean
}

export type OptionBase<T extends Option<any, any>> = T | OptionGroup<T>

@Injectable()
export class DropdownUtils<
  K = string | null,
  V = string,
  T extends Option<K, V> = Option<K, V>,
> {
  public flattenOptions(
    options: OptionBase<T>[] | undefined,
    mustHaveLabel: boolean,
  ): T[] {
    if (!options) return [] as T[]
    return options.reduce((acc, current) => {
      if (this.isGroup(current))
        return acc.concat(this.flattenOptions(current.options, mustHaveLabel))
      if (!current.disabled && !(mustHaveLabel && !current.label))
        acc.push(current) // skip disabled
      return acc
    }, [] as T[])
  }

  /**
   * Returns true if argument is an {@link OptionGroup}.
   * @param option the object to check.
   */
  public isGroup(option: OptionBase<T>): option is OptionGroup<T> {
    return 'options' in option
  }

  public deepEqual(original: any, change: any): boolean {
    if (original === change) return true

    // breaks early if either original or change is a primitive value
    if (
      typeof original !== 'object' ||
      typeof change !== 'object' ||
      original == null ||
      change == null
    )
      return false

    const keysOriginal = Object.keys(original)
    const keysChange = Object.keys(change)

    if (keysOriginal.length !== keysChange.length) return false

    for (const key of keysOriginal) {
      if (!keysChange.includes(key)) return false

      switch (true) {
        case Array.isArray(original[key]) && Array.isArray(change[key]):
          if (
            JSON.stringify(original[key].sort()) !==
            JSON.stringify(change[key].sort())
          )
            return false
          break
        case typeof original[key] === 'function':
        case typeof change[key] === 'function':
          if (original[key].toString() !== change[key].toString()) return false
          break
        default:
          if (!this.deepEqual(original[key], change[key])) return false
      }
    }

    return true
  }
}
