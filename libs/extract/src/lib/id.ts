export const randomId = (): string =>
  'gds-' + Math.random().toString(36).substring(2, 9)
