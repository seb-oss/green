import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { By } from '@angular/platform-browser'

import { NggCoreControlDirective } from './core-control.directive'

import '@sebgroup/green-core/components/input/index.js'

import { provideCoreRenderer } from '../core-renderer'
import { NggCoreFormsModule } from './core-control.module'

@Component({
    template: `
    <form [formGroup]="form">
      <input formControlName="name" nggCoreControl required />
      <gds-input formControlName="email" name="email" required></gds-input>
      <gds-input
        formControlName="password"
        ngDefaultControl
        name="password"
        required
      ></gds-input>
      <gds-input name="nonReactive" required></gds-input>
      <gds-input
        name="formControl"
        [formControl]="formControl"
        required
      ></gds-input>
    </form>
  `,
    standalone: false
})
class TestComponent {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  formControl = new FormControl('')
}

describe('NggCoreControlDirective', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>
  let nameInputEl: DebugElement
  let emailInputEl: DebugElement
  let passwordInputEl: DebugElement
  let nonReactiveInputEl: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ReactiveFormsModule, FormsModule, NggCoreFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideCoreRenderer()],
    }).compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    nameInputEl = fixture.debugElement.query(
      By.directive(NggCoreControlDirective),
    )
    emailInputEl = fixture.debugElement.query(By.css('[name="email"]'))
    passwordInputEl = fixture.debugElement.query(By.css('[name="password"]'))
    nonReactiveInputEl = fixture.debugElement.query(
      By.css('[name="nonReactive"]'),
    )
  })

  it('should set invalid property on the element', async () => {
    const control = component.form.get('name')
    control?.setValue('') // Set an invalid value
    control?.markAsTouched()
    control?.markAsDirty()
    control?.setErrors({ required: true })
    fixture.detectChanges()

    await fixture.whenStable()

    expect(nameInputEl.nativeElement.invalid).toBe(true)
  })

  it('should write value to the element', () => {
    const directive = nameInputEl.injector.get(NggCoreControlDirective)
    directive.writeValue('test value')
    expect(nameInputEl.nativeElement.value).toBe('test value')
  })

  it('should register onChange function', () => {
    const directive = nameInputEl.injector.get(NggCoreControlDirective)
    const fn = jest.fn()
    directive.registerOnChange(fn)

    nameInputEl.nativeElement.value = 'new value'
    nameInputEl.nativeElement.dispatchEvent(new Event('input'))

    expect(fn).toHaveBeenCalledWith('new value')
  })

  it('should register onTouched function', () => {
    const directive = nameInputEl.injector.get(NggCoreControlDirective)
    const fn = jest.fn()
    directive.registerOnTouched(fn)

    nameInputEl.nativeElement.dispatchEvent(new Event('blur'))

    expect(fn).toHaveBeenCalled()
  })

  it('should set disabled state on the element', () => {
    const directive = nameInputEl.injector.get(NggCoreControlDirective)
    directive.setDisabledState?.(true)
    expect(nameInputEl.nativeElement.disabled).toBe(true)

    directive.setDisabledState?.(false)
    expect(nameInputEl.nativeElement.disabled).toBe(false)
  })

  it('should validate when dirty', async () => {
    const control = component.form.get('name')
    control?.markAsDirty()
    fixture.detectChanges()

    await fixture.whenStable()

    expect(nameInputEl.nativeElement.invalid).toBe(true)
  })

  it('should validate gds-input', async () => {
    const control = component.form.get('email')
    control?.markAsDirty()
    fixture.detectChanges()

    await fixture.whenStable()

    expect(emailInputEl.nativeElement.invalid).toBe(true)
  })

  it('should not set `invalid` automatically when using ngDefaultControl', async () => {
    const control = component.form.get('password')
    control?.markAsDirty()
    fixture.detectChanges()

    await fixture.whenStable()

    expect(passwordInputEl.nativeElement.invalid).toBe(false)
  })

  it('should not apply controlValueAccessor to non-reactive input', async () => {
    const control = component.form.get('nonReactive')
    control?.markAsDirty()
    fixture.detectChanges()

    await fixture.whenStable()

    expect(nonReactiveInputEl.nativeElement.invalid).toBe(false)
  })

  it('should work with [formControl] directive', async () => {
    const control = component.form.get('formControl')
    control?.markAsDirty()
    fixture.detectChanges()

    await fixture.whenStable()

    expect(nonReactiveInputEl.nativeElement.invalid).toBe(false)
  })
})
