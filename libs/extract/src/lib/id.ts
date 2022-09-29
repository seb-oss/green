export const randomId = (): string =>
  'sg_' + Math.random().toString(36).substr(2, 9)
  
export const randomName = (seed: string): string => seed + String(Math.random() * 1000 + new Date().getTime());
