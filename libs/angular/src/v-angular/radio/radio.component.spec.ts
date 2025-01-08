import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { TranslocoTestingModule } from '@jsverse/transloco'

import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import en from '../i18n/i18n.json'

import '../core/core.globals'

import { NgvRadioComponent } from './radio.component'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // RadioComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('RadioComponent - constructor()', () => {
    let component: NgvRadioComponent
    let fixture: ComponentFixture<NgvRadioComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvRadioComponent],
        providers: [{ provide: NgControl, useValue: new FormControl() }],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          NgvI18nTestModule,
          TranslocoTestingModule.forRoot({
            langs: { en },
            translocoConfig: {
              availableLangs: ['en'],
              defaultLang: 'en',
            },
            preloadLangs: true,
          }),
        ],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvRadioComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
