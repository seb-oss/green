/**
 * Check if the code is running on the server
 */
export const isServer =
  typeof process !== 'undefined' && process.env !== undefined

/**
 * Simple UA check to determine if the platform is iOS
 */
export const isIOS = /iPad|iPhone|iPod/.test(
  isServer ? '' : navigator.userAgent,
)
