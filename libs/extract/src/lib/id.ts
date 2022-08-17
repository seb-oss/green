export const randomId = (): string =>
  'sg_' + Math.random().toString(36).substr(2, 9)
