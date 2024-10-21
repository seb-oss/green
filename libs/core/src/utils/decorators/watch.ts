// Adapted from original source:
// https://github.com/shoelace-style/shoelace/blob/1af711bc89365a50e24da1d23c2bff777b1b8b57/src/internal/watch.ts

import type { LitElement } from 'lit'

type UpdateHandler = (prev?: unknown, next?: unknown) => void

interface WatchOptions {
  /**
   * If true, will only start watching after the initial update/render
   */
  waitUntilFirstUpdate?: boolean
}

/**
 * Runs when observed properties change, e.g. @property or @state, but before the component updates. To wait for an
 * update to complete after a change occurs, use `await this.updateComplete` in the handler. To start watching after the
 * initial update/render, use `{ waitUntilFirstUpdate: true }` or `this.hasUpdated` in the handler.
 *
 * Usage:
 * ```javascript
 * \@watch('propName')
 * handlePropChange(oldValue, newValue) {
 *   ...
 * }
 * ```
 */
export function watch(propertyName: string | string[], options?: WatchOptions) {
  const resolvedOptions: Required<WatchOptions> = {
    waitUntilFirstUpdate: false,
    ...options,
  }
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<UpdateHandler>,
  ) => {
    // @ts-expect-error - update is a protected property
    const { update } = proto
    const watchedProperties = Array.isArray(propertyName)
      ? propertyName
      : [propertyName]

    // @ts-expect-error - update is a protected property
    proto.update = function (
      this: ElemClass,
      changedProps: Map<keyof ElemClass, ElemClass[keyof ElemClass]>,
    ) {
      watchedProperties.forEach((property) => {
        const key = property as keyof ElemClass
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key)
          const newValue = this[key]

          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              descriptor.value?.call(this, oldValue, newValue)
            }
          }
        }
      })

      update.call(this, changedProps)
    }
  }
}
