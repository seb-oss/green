/**
 * Tests for ProxyInputs decorator
 *
 * The decorator syncs Angular component properties to the underlying web component element.
 * Individual @Input decorators (with booleanAttribute transforms) are added in the generated code.
 */

import { NgZone } from '@angular/core'

import { ProxyInputs } from './proxy-inputs.decorator'

describe('ProxyInputs decorator', () => {
  it('should sync properties to web component element on ngAfterViewInit', () => {
    @ProxyInputs(['variant', 'open'])
    class TestComponent {
      variant = 'primary'
      open = true

      element = { variant: undefined, open: undefined } as any
      zone = {
        runOutsideAngular: (fn: Function) => fn(),
      } as unknown as NgZone

      ngAfterViewInit() {}
    }

    const component = new TestComponent()
    component.ngAfterViewInit()

    expect(component.element.variant).toBe('primary')
    expect(component.element.open).toBe(true)
  })

  it('should sync property changes on ngOnChanges', () => {
    @ProxyInputs(['variant', 'open'])
    class TestComponent {
      variant?: string
      open?: boolean

      element = { variant: undefined, open: undefined } as any
      zone = {
        runOutsideAngular: (fn: Function) => fn(),
      } as unknown as NgZone

      ngOnChanges(changes: any) {}
    }

    const component = new TestComponent()
    component.variant = 'secondary'
    component.open = false

    component.ngOnChanges({
      variant: {
        currentValue: 'secondary',
        previousValue: 'primary',
        firstChange: false,
        isFirstChange: () => false,
      },
      open: {
        currentValue: false,
        previousValue: true,
        firstChange: false,
        isFirstChange: () => false,
      },
    })

    expect(component.element.variant).toBe('secondary')
    expect(component.element.open).toBe(false)
  })
})
