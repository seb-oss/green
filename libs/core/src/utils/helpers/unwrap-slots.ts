/**
 * Unwraps nested slots and returns the first slot that has actual assigned elements as children.
 */
export function unwrap(slotRef: HTMLSlotElement) {
  let slot = slotRef

  while (
    slot.assignedElements().length > 0 &&
    slot.assignedElements()[0].nodeName === 'SLOT'
  ) {
    slot = slot.assignedElements()[0] as HTMLSlotElement
  }

  return slot
}
