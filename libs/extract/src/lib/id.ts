export const randomId = (): string =>
  'gds_' + Math.random().toString(36).substr(2, 9)
