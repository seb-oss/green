import { Component, ElementRef, Renderer2, NgZone } from '@angular/core'
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms'
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { GdsFormControlBase } from './form-control-base'

// Mock component that extends GdsFormControlBase
@Component({
  selector: 'test-form-control',
  template: '<input>',
  standalone: true,
})
class TestFormControlComponent extends GdsFormControlBase<string> {}

describe('GdsFormControlBase', () => {
  let component: TestFormControlComponent
  let fixture: ComponentFixture<TestFormControlComponent>
  let element: HTMLElement
  let renderer: Renderer2

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormControlComponent, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(TestFormControlComponent)
    component = fixture.componentInstance
    element = fixture.nativeElement
    renderer = fixture.componentRef.injector.get(Renderer2)
  })

  describe('ControlValueAccessor interface', () => {
    it('should have all required ControlValueAccessor methods', () => {
      expect(typeof component.writeValue).toBe('function')
      expect(typeof component.registerOnChange).toBe('function')
      expect(typeof component.registerOnTouched).toBe('function')
      expect(typeof component.setDisabledState).toBe('function')
    })

    describe('writeValue', () => {
      it('should set value on the element', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')
        
        component.writeValue('test-value')

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'value', 'test-value')
      })

      it('should handle null value', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')
        
        component.writeValue(null as any)

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'value', null)
      })
    })

    describe('registerOnChange', () => {
      it('should register onChange callback', () => {
        const callback = jest.fn()
        
        component.registerOnChange(callback)
        // Need to call ngAfterViewInit to set up event listeners
        component.ngAfterViewInit()

        // Trigger an input event with proper structure
        const event = new Event('input', { bubbles: true })
        Object.defineProperty(event, 'target', {
          value: { value: 'new-value' },
          writable: false,
        })
        element.dispatchEvent(event)

        expect(callback).toHaveBeenCalledWith('new-value')
      })

      it('should listen to input events', () => {
        const callback = jest.fn()
        component.registerOnChange(callback)
        // Need to call ngAfterViewInit to set up event listeners
        component.ngAfterViewInit()

        // Trigger input event
        const inputEvent = new Event('input', { bubbles: true })
        Object.defineProperty(inputEvent, 'target', {
          value: { value: 'typed-value' },
          writable: false,
        })
        element.dispatchEvent(inputEvent)

        expect(callback).toHaveBeenCalledWith('typed-value')
      })
    })

    describe('registerOnTouched', () => {
      it('should register onTouched callback', () => {
        const callback = jest.fn()
        
        component.registerOnTouched(callback)
        // Need to call ngAfterViewInit to set up event listeners
        component.ngAfterViewInit()

        // Trigger a blur event
        element.dispatchEvent(new Event('blur'))

        expect(callback).toHaveBeenCalled()
      })

      it('should listen to blur and change events', () => {
        const callback = jest.fn()
        component.registerOnTouched(callback)
        // Need to call ngAfterViewInit to set up event listeners
        component.ngAfterViewInit()

        element.dispatchEvent(new Event('blur'))
        expect(callback).toHaveBeenCalledTimes(1)

        element.dispatchEvent(new Event('change'))
        expect(callback).toHaveBeenCalledTimes(2)
      })
    })

    describe('setDisabledState', () => {
      it('should set disabled property to true', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')
        
        component.setDisabledState?.(true)

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'disabled', true)
      })

      it('should set disabled property to false', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')
        
        component.setDisabledState?.(false)

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'disabled', false)
      })
    })
  })

  describe('Validation state synchronization', () => {
    it('should sync invalid state when control becomes invalid', async () => {
      const control = new FormControl('', {
        validators: [(c) => (c.value ? null : { required: true })],
      })

      // Mock NgControl
      const mockNgControl = {
        statusChanges: control.statusChanges,
        valueChanges: control.valueChanges,
        control: control,
      } as unknown as NgControl

      // Mock the injector to return our NgControl
      ;(component as any).injector = {
        get: (token: any, notFoundValue?: any) => {
          if (token === NgControl) return mockNgControl
          return notFoundValue
        },
      }

      // Register callbacks (simulating what Angular does)
      component.registerOnChange(() => {})
      component.registerOnTouched(() => {})

      const setPropertySpy = jest.spyOn(renderer, 'setProperty')

      component.ngAfterViewInit()

      // Wait for subscriptions to be set up
      await new Promise(resolve => setTimeout(resolve, 10))

      // Make control invalid
      control.markAsTouched()
      control.updateValueAndValidity()

      // Wait for async updates
      await new Promise(resolve => setTimeout(resolve, 50))

      expect(setPropertySpy).toHaveBeenCalledWith(element, 'invalid', true)
    })

    it('should sync invalid state when control becomes valid', async () => {
      const control = new FormControl('', {
        validators: [(c) => (c.value ? null : { required: true })],
      })

      const mockNgControl = {
        statusChanges: control.statusChanges,
        valueChanges: control.valueChanges,
        control: control,
      } as unknown as NgControl

      // Mock the injector to return our NgControl
      ;(component as any).injector = {
        get: (token: any, notFoundValue?: any) => {
          if (token === NgControl) return mockNgControl
          return notFoundValue
        },
      }

      // Register callbacks (simulating what Angular does)
      component.registerOnChange(() => {})
      component.registerOnTouched(() => {})

      const setPropertySpy = jest.spyOn(renderer, 'setProperty')

      component.ngAfterViewInit()

      // Wait for subscriptions to be set up
      await new Promise(resolve => setTimeout(resolve, 10))

      // Make control valid
      control.setValue('valid-value')
      control.markAsTouched()
      control.updateValueAndValidity()

      // Wait for async updates
      await new Promise(resolve => setTimeout(resolve, 50))

      expect(setPropertySpy).toHaveBeenCalledWith(element, 'invalid', false)
    })
  })

  describe('Form submit handling', () => {
    it('should mark as touched on form submit', async () => {
      const control = new FormControl('')

      const mockNgControl = {
        statusChanges: control.statusChanges,
        valueChanges: control.valueChanges,
        control: control,
      } as unknown as NgControl

      // Mock the injector to return our NgControl
      ;(component as any).injector = {
        get: (token: any, notFoundValue?: any) => {
          if (token === NgControl) return mockNgControl
          return notFoundValue
        },
      }

      // Create form and add element before calling ngAfterViewInit
      const form = document.createElement('form')
      form.appendChild(element)
      document.body.appendChild(form)

      // Register callbacks (simulating what Angular does)
      component.registerOnChange(() => {})
      component.registerOnTouched(() => {})

      const setPropertySpy = jest.spyOn(renderer, 'setProperty')

      // Initialize after DOM is set up
      component.ngAfterViewInit()

      // Wait for subscriptions to be set up
      await new Promise(resolve => setTimeout(resolve, 10))

      // Trigger submit
      form.dispatchEvent(new Event('submit'))

      // Wait for the update
      await new Promise(resolve => setTimeout(resolve, 50))

      expect(setPropertySpy).toHaveBeenCalledWith(element, 'invalid', expect.any(Boolean))

      // Cleanup
      document.body.removeChild(form)
    })
  })

  describe('Lifecycle hooks', () => {
    it('should call ngOnInit without errors', () => {
      expect(() => component.ngOnInit()).not.toThrow()
    })

    it('should call ngAfterViewInit and setup subscriptions', () => {
      expect(() => component.ngAfterViewInit()).not.toThrow()
    })
  })
})
