import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { IconAi } from './icons/ai'

class TestIcon extends IconAi {
  public static _regularSVG = '<path d="M5 3l14 9-14 9V3z"/>'
  public static _solidSVG = '<path d="M5 3v18l14-9L5 3z"/>'
  public static _width = 24
  public static _height = 24
  public static _viewBox = '0 0 24 24'
}

// Use unique tag name to avoid conflicts with actual icon registration
const testTagName = `gds-icon-test-${Math.random().toString(36).slice(2, 8)}`
customElements.define(testTagName, TestIcon)

// Helper to create test icon instances with properties
async function createTestIcon(
  props: Partial<{
    label: string
    size: string
    stroke: string
    color: string
    solid: boolean
  }> = {},
): Promise<TestIcon> {
  const el = document.createElement(testTagName) as TestIcon
  if (props.label) el.label = props.label
  if (props.size) (el as any).size = props.size
  if (props.stroke) el.stroke = props.stroke
  if (props.color) (el as any).color = props.color
  if (props.solid !== undefined) el.solid = props.solid
  document.body.appendChild(el)
  await el.updateComplete
  return el
}

describe('IconAi', () => {
  let element: TestIcon

  beforeEach(async () => {
    element = await createTestIcon()
  })

  afterEach(() => {
    element?.remove()
  })

  it('should instantiate the IconAi', () => {
    expect(element).toBeInstanceOf(IconAi)
  })

  it('should render the regular SVG with correct attributes', async () => {
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveAttribute('role', 'presentation')
    expect(svg?.innerHTML.trim()).toBe('<path d="M5 3l14 9-14 9V3z"></path>')
  })

  it('should render the solid SVG when solid is true', async () => {
    element.solid = true
    await element.updateComplete
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg?.innerHTML.trim()).toBe('<path d="M5 3v18l14-9L5 3z"></path>')
  })

  it('should be accessible with label', async () => {
    element?.remove()
    element = await createTestIcon({ label: 'Arrow' })
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg).toHaveAttribute('aria-label', 'Arrow')
    expect(svg?.hasAttribute('role')).toBe(false)
    await expect(element).toBeAccessible()
  })

  it('should apply size property correctly', async () => {
    element?.remove()
    element = await createTestIcon({ size: 'xl' })

    // This only checks that the style expression property got initialized.
    // Computed style never changes in the test runner environment for unknown reason.
    expect(element._dynamicStylesController.has('sep_size')).toBe(true)
    expect((element as any).__size).toBe('xl')
  })

  it('should apply stroke width when specified', async () => {
    element?.remove()
    element = await createTestIcon({ stroke: '2' })
    const path = element.shadowRoot?.querySelector('path')
    expect(path).toHaveAttribute('stroke-width', '2')
  })

  it('should be presentational when no label is provided', async () => {
    const svg = element.shadowRoot?.querySelector('svg')
    expect(svg).toHaveAttribute('role', 'presentation')
    expect(svg?.hasAttribute('aria-label')).toBe(false)
  })

  it('should apply color property correctly', async () => {
    element?.remove()
    element = await createTestIcon({ color: 'primary' })
    expect((element as any).__color).toBe('primary')
  })

  it('should apply color with transparency correctly', async () => {
    element?.remove()
    element = await createTestIcon({ color: 'primary/0.2' })
    expect((element as any).__color).toBe('primary/0.2')
  })
})
