import type { LitElement } from 'lit'

type Handler = () => void

/**
 * Runs when the size of the component changes.
 *
 * Usage:
 * ```javascript
 * \@resizeObserver('(max-width: 576px)')
 * handleResize() {
 *  // Do some layout calculation or something
 * }
 * ```
 */
export function resizeObserver() {
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    _propertyKey: string,
    descriptor: TypedPropertyDescriptor<Handler>,
  ) => {
    let tid: any
    let resizeObserver: ResizeObserver

    const connectedCallback = proto.connectedCallback
    const disconnectedCallback = proto.disconnectedCallback

    proto.connectedCallback = function (this: ElemClass) {
      connectedCallback?.call(this)

      resizeObserver = new ResizeObserver(() => {
        tid && clearTimeout(tid)
        tid = setTimeout(() => {
          descriptor.value?.call(this)
        }, 20)
      })

      resizeObserver.observe(this)
    }

    proto.disconnectedCallback = function (this: ElemClass) {
      disconnectedCallback?.call(this)
      resizeObserver.disconnect()
    }
  }
}
