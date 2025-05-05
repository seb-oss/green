// We must force tsc to interpret this file as a module, resolves
// "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."
export {}

declare global {
  interface Window {
    /** Counter for unique identifiers */
    ngv: {
      ids: { [namespace: string]: number; default: number }
      nextId: (namespace?: string) => string
    }
  }
}

;(() => {
  // Make sure there is an incremental ID each component can use
  if (typeof window !== 'undefined' && !window.ngv) {
    window.ngv = {
      ids: { default: -1 },
      nextId(namespace = 'default'): string {
        let id = this.ids[namespace] || 0
        if (typeof this.ids[namespace] === 'number') id++
        this.ids[namespace] = id
        return namespace === 'default'
          ? `nggv-${id}`
          : `nggv-${namespace}-${id}`
      },
    }
  }
})()
