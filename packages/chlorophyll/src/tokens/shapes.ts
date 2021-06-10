export type Display = 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'inline' | 'inherit' | 'none'
export type Spacing = string | { v: string, h: string } | { t: string, r: string, b: string, l: string }

export interface Shape {
  display: Display
  padding: Spacing
  margin: Spacing
  borderRadius: Spacing
}
export type Shapes = 'button' | 'input'

export const shapes: Record<Shapes, Shape> = {
  button: {
    display: 'inline-block',
    padding: { v: '0', h: '16px' },
    margin: '0px',
    borderRadius: '.25em',
  },
  input: {
    display: 'inline-block',
    padding: { v: '0', h: '16px' },
    margin: '0px',
    borderRadius: '4px',
  },
}
