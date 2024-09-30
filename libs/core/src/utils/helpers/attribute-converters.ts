import type { ComplexAttributeConverter } from 'lit'

/**
 * Converts between an ISO date string and a Date object.
 */
export const dateConverter: ComplexAttributeConverter<Date, string> = {
  fromAttribute(value: string) {
    return new Date(value)
  },
  toAttribute(value: Date) {
    return value.toISOString()
  },
}

/**
 * Converts between a comma-separated list of ISO date strings and an array of Date objects.

 */
export const dateArrayConverter: ComplexAttributeConverter<Date[], string> = {
  fromAttribute(value: string) {
    return value.split(',').map((d) => new Date(d.trim()))
  },
  toAttribute(value: Date[]) {
    return JSON.stringify(value.map((d) => d.toISOString()))
  },
}

/**
 * Converts between a comma-separated list of strings and an array of strings.
 */
export const stringArrayConverter: ComplexAttributeConverter<string[], string> =
  {
    fromAttribute(value: string) {
      return value.split(',')
    },
    toAttribute(value: string[]) {
      return Array.isArray(value) ? value.join(',') : value
    },
  }
