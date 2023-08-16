import { LitElement } from 'lit'

/**
 * This function is used to constrain the slots of a component to only allow
 * certain types of slotted elements. Add the `gds-allow` attribute to the slot
 * element and specify the allowed elements as a space-separated list. Slots
 * without the `gds-allow` attribute will not be constrained.
 *
 * Example:
 * ```html
 * <slot gds-allow="span p"></slot>
 * ```
 * This will only allow `span` and `p` elements to be slotted into this slot. Any other
 * elements will be removed from the shadow DOM.
 *
 * @param self The element to apply the slot constraints to
 */
export function constrainSlots(self: LitElement) {
  self.updateComplete.then(() => {
    const slots =
      self.shadowRoot?.querySelectorAll<HTMLSlotElement>('slot[gds-allow]')
    if (!slots) return

    // Trim whitespace-only text nodes
    for (const node of Array.from(self.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === '') {
        node.parentNode?.removeChild(node)
      }
    }

    const constrain = (slot: HTMLSlotElement) => {
      const allowed = slot.getAttribute('gds-allow')?.split(' ') || []
      for (const node of Array.from(slot.assignedNodes())) {
        if (!allowed.includes(node.nodeName.toLowerCase())) {
          node.parentNode?.removeChild(node)
        }
      }
    }

    slots.forEach((slot) => {
      constrain(slot)
      slot.addEventListener('slotchange', () => constrain(slot))
    })
  })
}
