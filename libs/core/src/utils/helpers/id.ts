// Use crypto API for secure random id generation
export const randomId = (): string => {
  // Generate 7 bytes and convert to base36 string (similar to original substring size)
  const array = new Uint32Array(2)
  window.crypto.getRandomValues(array)
  // Concatenate the two 32-bit numbers and slice base36 to 7 chars
  const id = (array[0].toString(36) + array[1].toString(36)).substring(0, 7)
  return 'gds-' + id
}
