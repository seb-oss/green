import '../core/core.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { TranslocoTestingModule } from '@jsverse/transloco'

import en from '../i18n/i18n.json'
import { NggvCheckboxComponent } from './checkbox.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // CheckboxComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('CheckboxComponent - constructor()', () => {
    let component: NggvCheckboxComponent
    let fixture: ComponentFixture<NggvCheckboxComponent>
    let checkbox: HTMLInputElement
    let hostElement: HTMLElement

    beforeEach(waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [NggvCheckboxComponent],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          TranslocoTestingModule.forRoot({
            langs: { en },
            translocoConfig: {
              availableLangs: ['en'],
              defaultLang: 'en',
            },
            preloadLangs: true,
          }),
        ],
        providers: [{ provide: NgControl, useValue: new FormControl() }],
      }).compileComponents()

      fixture = TestBed.createComponent(NggvCheckboxComponent)
      component = fixture.componentInstance
      fixture.detectChanges()

      checkbox = fixture.debugElement.nativeElement.querySelector('input')
      hostElement = fixture.debugElement.nativeElement
    }))

    it('should create', () => {
      expect(component).toBeTruthy()
    })

    describe('onInputChange', () => {
      it('should toggle state if not disabled', () => {
        fixture.detectChanges()
        component.disabled = false

        checkbox.click()
        expect(component.state).toBe(true)
      })

      it('should not toggle state if disabled', () => {
        component.state = true
        component.disabled = true
        checkbox.click()
        expect(component.state).toBe(true)
      })
    })

    describe('size input', () => {
      it('should apply "small" class when size is set to "small"', () => {
        component.size = 'small'
        fixture.detectChanges()
        expect(hostElement.classList.contains('small')).toBe(true)
        expect(hostElement.classList.contains('large')).toBe(false)
      })

      it('should apply "large" class when size is set to "large"', () => {
        component.size = 'large'
        fixture.detectChanges()
        expect(hostElement.classList.contains('large')).toBe(true)
        expect(hostElement.classList.contains('small')).toBe(false)
      })
    })
  })
})
