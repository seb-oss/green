import { Component, Renderer2 } from '@angular/core'
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms'
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { GdsCheckboxFormControlBase } from './checkbox-form-control-base'

// Mock checkbox component that extends GdsCheckboxFormControlBase
@Component({
  selector: 'test-checkbox',
  template: '<input type="checkbox">',
  standalone: true,
})
class TestCheckboxComponent extends GdsCheckboxFormControlBase {}

describe('GdsCheckboxFormControlBase', () => {
  let component: TestCheckboxComponent
  let fixture: ComponentFixture<TestCheckboxComponent>
  let element: HTMLElement
  let renderer: Renderer2

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCheckboxComponent, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(TestCheckboxComponent)
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
      it('should set checked property to true', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')

        component.writeValue(true)

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'checked', true)
      })

      it('should set checked property to false', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')

        component.writeValue(false)

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'checked', false)
      })

      it('should handle null/undefined as false', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')

        component.writeValue(null as any)
        expect(setPropertySpy).toHaveBeenCalledWith(element, 'checked', null)

        component.writeValue(undefined as any)
        expect(setPropertySpy).toHaveBeenCalledWith(element, 'checked', undefined)
      })
    })

    describe('registerOnChange', () => {
      it('should register onChange callback for checked state', () => {
        const callback = jest.fn()

        component.registerOnChange(callback)
        component.ngAfterViewInit()

        // Trigger an input event with checked=true
        const event = new Event('input', { bubbles: true })
        Object.defineProperty(event, 'target', {
          value: { checked: true },
          writable: false,
        })
        element.dispatchEvent(event)

        expect(callback).toHaveBeenCalledWith(true)
      })

      it('should emit boolean checked state, not string value', () => {
        const callback = jest.fn()

        component.registerOnChange(callback)
        component.ngAfterViewInit()

        // Trigger input event with checked=false
        const event = new Event('input', { bubbles: true })
        Object.defineProperty(event, 'target', {
          value: { checked: false, value: 'some-string-value' },
          writable: false,
        })
        element.dispatchEvent(event)

        // Should use checked, not value
        expect(callback).toHaveBeenCalledWith(false)
        expect(callback).not.toHaveBeenCalledWith('some-string-value')
      })
    })

    describe('registerOnTouched', () => {
      it('should register onTouched callback', () => {
        const callback = jest.fn()

        component.registerOnTouched(callback)
        component.ngAfterViewInit()

        // Trigger a blur event
        element.dispatchEvent(new Event('blur'))

        expect(callback).toHaveBeenCalled()
      })
    })

    describe('setDisabledState', () => {
      it('should set disabled property to true', () => {
        const setPropertySpy = jest.spyOn(renderer, 'setProperty')

        component.setDisabledState?.(true)

        expect(setPropertySpy).toHaveBeenCalledWith(element, 'disabled', true)
      })
    })
  })

  describe('Boolean type handling', () => {
    it('should work with FormControl<boolean>', async () => {
      const control = new FormControl<boolean>(false)
      const callback = jest.fn()

      const mockNgControl = {
        statusChanges: control.statusChanges,
        valueChanges: control.valueChanges,
        control: control,
      } as unknown as NgControl

      ;(component as any).injector = {
        get: (token: any, notFoundValue?: any) => {
          if (token === NgControl) return mockNgControl
          return notFoundValue
        },
      }

      component.registerOnChange(callback)
      component.registerOnTouched(() => {})

      const setPropertySpy = jest.spyOn(renderer, 'setProperty')

      component.ngAfterViewInit()

      // Verify initial value is written
      control.setValue(true)
      component.writeValue(true)
      expect(setPropertySpy).toHaveBeenCalledWith(element, 'checked', true)

      // Verify change event emits boolean
      const event = new Event('input', { bubbles: true })
      Object.defineProperty(event, 'target', {
        value: { checked: false },
        writable: false,
      })
      element.dispatchEvent(event)

      expect(callback).toHaveBeenCalledWith(false)
    })

    it('should handle toggling between true and false', () => {
      const setPropertySpy = jest.spyOn(renderer, 'setProperty')

      // Set to true
      component.writeValue(true)
      expect(setPropertySpy).toHaveBeenLastCalledWith(element, 'checked', true)

      // Toggle to false
      component.writeValue(false)
      expect(setPropertySpy).toHaveBeenLastCalledWith(element, 'checked', false)

      // Toggle back to true
      component.writeValue(true)
      expect(setPropertySpy).toHaveBeenLastCalledWith(element, 'checked', true)
    })
  })
})
