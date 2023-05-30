import type { LitElement } from 'lit'

type Handler = () => void

type NonUndefined<A> = A extends undefined ? never : A

type HandlerFunctionKeys<T extends object> = {
  [K in keyof T]-?: NonUndefined<T[K]> extends Handler ? K : never
}[keyof T]

/**
 * Runs when the light DOM children of the component changes.
 */
export function observeLightDOM() {
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    decoratedFnName: HandlerFunctionKeys<ElemClass>
  ) => {
    const observerConfig = { attributes: true, childList: true, subtree: false }

    let observer: MutationObserver

    const connectedCallback = proto.connectedCallback
    const disconnectedCallback = proto.disconnectedCallback

    proto.connectedCallback = function (this: ElemClass) {
      connectedCallback?.call(this)

      const callback: MutationCallback = (_mutationList, _observer) => {
        ;(this[decoratedFnName] as unknown as Handler)()
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
