import { CommonModule } from '@angular/common'
import {
  ApplicationRef,
  Component,
  forwardRef,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { INPUT_MASK_CONFIG, InputMaskConfig } from './config'
import { createMask } from './constants'
import { NggvInputMaskDirective } from './input-mask.directive'
import { NggvInputMaskModule } from './input-mask.module'
import { InputmaskOptions } from './input-mask.types'

describe('[NggvInputMask] -> InputMaskDirective', () => {
  @Component({
    selector: 'nggv-lib-custom-input',
    template: `
      <input
        *ngIf="!isAsync"
        class="nggv-lib-custom-input"
        [formControl]="control"
        [nggvInputMask]="inputMask"
        [placeholder]="placeholder"
      />
    `,
    standalone: false
})
  class CustomInputComponent implements OnInit {
    @Input() control!: FormControl
    @Input() inputMask!: InputmaskOptions<any>
    @Input() placeholder: string | undefined
    @Input() isAsync = false
    ngOnInit() {
      if (this.isAsync) {
        setTimeout(() => {
          this.isAsync = false
        }, 1000)
      }
    }
  }

  @Component({
    template: `
      <input class="date" [nggvInputMask]="dateMask" [formControl]="dateFC" />
      <input class="ip" [nggvInputMask]="ipAddressMask" [formControl]="ipFC" />
      <input
        class="initDate"
        [nggvInputMask]="dateMask"
        [formControl]="initDateFC"
      />
      <input
        class="phone"
        [nggvInputMask]="phoneMask"
        [formControl]="phoneFC"
      />
      <nggv-lib-custom-input
        [control]="dateFCCustom"
        [inputMask]="dateMask"
        [isAsync]="isAsync"
        placeholder="Date"
      ></nggv-lib-custom-input>
    `,
    standalone: false
})
  class TestComponent {
    dateMask = createMask<Date>({
      alias: 'datetime',
      inputFormat: 'dd/mm/yyyy',
      parser: (value: string) => {
        const values = value.split('/')
        const year = +values[2]
        const month = +values[1] - 1
        const day = +values[0]
        return new Date(year, month, day)
      },
    })
    dateFC = new FormControl('', [Validators.required])
    initDateFC = new FormControl('28/02/1988')

    ipAddressMask = createMask({ alias: 'ip' })
    ipFC = new FormControl('')

    phoneFC = new FormControl({ value: '', disabled: true })
    phoneMask = createMask('(999) 999-9999')

    dateFCCustom = new FormControl('')
    isAsync = false
  }

  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>

  const inputField = (selector: string): HTMLInputElement =>
    fixture.debugElement.nativeElement.querySelector(selector)
  const updateInput = async (
    element: HTMLInputElement | string,
    value: string | null,
  ) => {
    if (!element) return

    const target: HTMLInputElement =
      typeof element === 'string' ? inputField(element) : element

    if (!target) return

    target.dispatchEvent(new Event('focus'))
    ;(target.value as any) = value
    target.dispatchEvent(new Event('input'))

    fixture.detectChanges()
    await fixture.whenStable().then() // await for the promises to finish before asserting
    fixture.detectChanges()

    target.dispatchEvent(new Event('blur'))

    fixture.detectChanges()
    await fixture.whenStable().then() // await for the promises to finish before asserting
    fixture.detectChanges()
  }

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CustomInputComponent],
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        NggvInputMaskModule.forRoot({ isAsync: true }),
      ],
      providers: [
        InputMaskConfig,
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: INPUT_MASK_CONFIG,
          useClass: InputMaskConfig,
        },
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => NggvInputMaskDirective),
          multi: true,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should get the instance', () => {
    expect(component).toBeDefined()
  })

  it('should update the UI value as per mask', () => {
    const dateInput = inputField('.date')
    updateInput(dateInput, '28021988')
    expect(dateInput.value).toEqual('28/02/1988')

    updateInput('.ip', '111111111111')
    expect(component.ipFC.value).toEqual('111.111.111.111')
  })

  it('should update the control value as per mask parser', () => {
    updateInput('.date', '28021988')
    expect(component.dateFC.value).toEqual(new Date(1988, 1, 28))
  })

  it('should keep the existing validators', () => {
    expect(component.dateFC.invalid).toBeTruthy()
    expect(component.dateFC.errors).toHaveProperty('required')
    expect(component.dateFC.errors).not.toHaveProperty('invalidformat')

    updateInput('.date', '28')
    expect(component.dateFC.invalid).toBeTruthy()
    expect(component.dateFC.errors).not.toHaveProperty('required')
    expect(component.dateFC.errors).toHaveProperty('invalidformat')
  })

  it('should make form control invalid for non-compliant value', () => {
    updateInput('.date', '28')
    expect(component.dateFC.invalid).toBeTruthy()
    updateInput('.ip', '1')
    expect(component.ipFC.invalid).toBeTruthy()
  })

  it('should render with initial value', () => {
    const initDateInput = inputField('.initDate')
    expect(initDateInput.value).toEqual('28/02/1988')
  })

  it('should update the non-native UI value as per mask', () => {
    const customInput = inputField('.nggv-lib-custom-input')
    updateInput(customInput, '28021988')
    expect(customInput.value).toEqual('28/02/1988')
  })

  it('should update the non-native control value as per mask parser', () => {
    updateInput('.nggv-lib-custom-input', '28021988')
    expect(component.dateFCCustom.value).toEqual(new Date(1988, 1, 28))
  })

  it('should make non-native form control invalid for non-compliant value', () => {
    updateInput('.nggv-lib-custom-input', '28')
    expect(component.dateFCCustom.invalid).toBeTruthy()
  })

  it('should render non-native with initial value', () => {
    component.dateFCCustom.setValue('28/02/1988')
    const input = inputField('.nggv-lib-custom-input')
    expect(input.value).toEqual('28/02/1988')
  })

  it('should capture the input asynchronously', async () => {
    component.isAsync = true
    fixture.detectChanges()

    let input = inputField('.nggv-lib-custom-input')
    expect(input).toBeNull()

    component.isAsync = false
    fixture.detectChanges()

    await new Promise((r) => setTimeout(r, 1000))

    input = inputField('.nggv-lib-custom-input')
    component.dateFCCustom.setValue('28/02/1988')
    expect(input.value).toEqual('28/02/1988')
  })

  it('should disable the input if the disabled property was provided through a FormControl options', () => {
    expect(inputField('.phone')).toHaveProperty('disabled')
    component.phoneFC.enable()
    expect(inputField('.phone').disabled).toStrictEqual(false)
  })
})

describe('[NggvInputMask] -> InputMaskDirective -> Change detection', () => {
  @Component({
    template: `
      <input class="ip" [nggvInputMask]="ipAddressMask" [formControl]="ipFC" />
    `,
    standalone: false
})
  class ChangeDetectionTestComponent {
    ipAddressMask = createMask({ alias: 'ip' })
    ipFC = new FormControl('')
  }

  const inputField = (selector: string): HTMLInputElement =>
    fixture.debugElement.nativeElement.querySelector(selector)

  let component: ChangeDetectionTestComponent
  let fixture: ComponentFixture<ChangeDetectionTestComponent>

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeDetectionTestComponent],
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        NggvInputMaskModule.forRoot({ isAsync: true }),
      ],
      providers: [
        InputMaskConfig,
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: INPUT_MASK_CONFIG,
          useClass: InputMaskConfig,
        },
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => NggvInputMaskDirective),
          multi: true,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ChangeDetectionTestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should not run change detections when `mouseenter`, `mouseleave` and `click` events are fired on the input', async () => {
    // Arrange
    const appRef = TestBed.inject(ApplicationRef)
    const input = inputField('input')

    appRef.tick = jest.fn(() => {
      // Empty function
    })

    // Act
    // Caretaker note: `spectator.dispatchMouseEvent` is not used here explicitly
    // since it runs `detectChanges()` internally.
    input.dispatchEvent(new MouseEvent('mouseenter'))
    input.dispatchEvent(new MouseEvent('mouseleave'))
    input.dispatchEvent(new MouseEvent('click'))
    // Assert
    expect(appRef.tick).toHaveBeenCalledTimes(0)
  })
})
