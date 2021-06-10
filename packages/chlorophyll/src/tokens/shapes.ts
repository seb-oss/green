export type Display = 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'inherit' | 'none'
export type Spacing = string | { v: string, h: string } | { t: string, r: string, b: string, l: string }

export interface Shape {
  display: Display
  padding: Spacing
  margin: Spacing
  borderRadius: Spacing
}

export const button: Shape = {
  display: 'inline-block',
  padding: { v: '0', h: '16px' },
  margin: '0px',
  borderRadius: '.25em',
}

export const input: Shape = {
  display: 'inline-block',
  padding: { v: '0', h: '16px' },
  margin: '0px',
  borderRadius: '4px',
}
