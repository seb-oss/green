/**
 * Check if the code is running on the server
 */
export const isServer =
  typeof process !== 'undefined' && process.env !== undefined
