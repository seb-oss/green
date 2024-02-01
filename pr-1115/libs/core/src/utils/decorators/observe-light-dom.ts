import type { LitElement } from 'lit'

type Handler = () => void

/**
 * Runs when the light DOM children of the component changes.
 */
export function observeLightDOM() {
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    _propertyKey: string,
    descriptor: TypedPropertyDescriptor<Handler>
  ) => {
    const observerConfig = { attributes: true, childList: true, subtree: false }

    let observer: MutationObserver

    const connectedCallback = proto.connectedCallback
    const disconnectedCallback = proto.disconnectedCallback

    proto.connectedCallback = function (this: ElemClass) {
      connectedCallback?.call(this)

      const callback: MutationCallback = (_mutationList, _observer) => {
        descriptor.value?.call(this)
      }

      observer = new MutationObserver(callback)
      observer.observe(this, observerConfig)
    }

    proto.disconnectedCallback = function (this: ElemClass) {
      disconnectedCallback?.call(this)
      observer.disconnect()
    }
  }
}
