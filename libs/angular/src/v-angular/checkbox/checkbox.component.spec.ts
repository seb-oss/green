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
  })
})
