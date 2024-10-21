import type { LitElement } from 'lit'

type Handler = () => void
type ObserverStorage = {
  __resizeObservers: { [propertyKey: string]: ResizeObserver }
  __resizeObserver_tids: {
    [propertyKey: string]: ReturnType<typeof setTimeout>
  }
}

/**
 * Runs when the size of the component changes.
 *
 * Usage:
 * ```javascript
 * \@resizeObserver()
 * handleResize() {
 *  // Do some layout calculation or something
 * }
 * ```
 */
export function resizeObserver() {
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<Handler>,
  ) => {
    const connectedCallback = proto.connectedCallback
    const disconnectedCallback = proto.disconnectedCallback

    proto.connectedCallback = function (this: ElemClass & ObserverStorage) {
      connectedCallback?.call(this)

      this.__resizeObservers = this.__resizeObservers || {}
      this.__resizeObserver_tids = this.__resizeObserver_tids || {}

      this.__resizeObservers[propertyKey] = new ResizeObserver(() => {
        this.__resizeObserver_tids[propertyKey] &&
          clearTimeout(this.__resizeObserver_tids[propertyKey])
        this.__resizeObserver_tids[propertyKey] = setTimeout(() => {
          descriptor.value?.call(this)
        }, 20)
      })

      this.__resizeObservers[propertyKey].observe(this)
    }

    proto.disconnectedCallback = function (this: ElemClass & ObserverStorage) {
      disconnectedCallback?.call(this)
      this.__resizeObservers[propertyKey].disconnect()
    }
  }
}
