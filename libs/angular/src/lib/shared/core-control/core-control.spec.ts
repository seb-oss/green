import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { By } from '@angular/platform-browser'

import { NggCoreControlDirective } from './core-control.directive'

@Component({
  template: `
    <form [formGroup]="form">
      <input formControlName="name" nggCoreControl required />
    </form>
  `,
})
class TestComponent {
  form = new FormGroup({
    name: new FormControl(''),
  })
}

describe('NggCoreControlDirective', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>
  let inputEl: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, NggCoreControlDirective],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    inputEl = fixture.debugElement.query(By.directive(NggCoreControlDirective))
  })

  it('should set invalid property on the element', async () => {
    const control = component.form.get('name')
    control?.setValue('') // Set an invalid value
    control?.markAsTouched()
    control?.markAsDirty()
    control?.setErrors({ required: true })
    fixture.detectChanges()

    await fixture.whenStable()

    expect(inputEl.nativeElement.invalid).toBe(true)
  })

  it('should write value to the element', () => {
    const directive = inputEl.injector.get(NggCoreControlDirective)
    directive.writeValue('test value')
    expect(inputEl.nativeElement.value).toBe('test value')
  })

  it('should register onChange function', () => {
    const directive = inputEl.injector.get(NggCoreControlDirective)
    const fn = jest.fn()
    directive.registerOnChange(fn)

    inputEl.nativeElement.value = 'new value'
    inputEl.nativeElement.dispatchEvent(new Event('input'))

    expect(fn).toHaveBeenCalledWith('new value')
  })

  it('should register onTouched function', () => {
    const directive = inputEl.injector.get(NggCoreControlDirective)
    const fn = jest.fn()
    directive.registerOnTouched(fn)

    inputEl.nativeElement.dispatchEvent(new Event('blur'))

    expect(fn).toHaveBeenCalled()
  })

  it('should set disabled state on the element', () => {
    const directive = inputEl.injector.get(NggCoreControlDirective)
    directive.setDisabledState?.(true)
    expect(inputEl.nativeElement.disabled).toBe(true)

    directive.setDisabledState?.(false)
    expect(inputEl.nativeElement.disabled).toBe(false)
  })
})
