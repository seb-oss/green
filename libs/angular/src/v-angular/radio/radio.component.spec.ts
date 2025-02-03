import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { TranslocoTestingModule } from '@jsverse/transloco'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import en from '../i18n/i18n.json'

import '../core/core.globals'

import { NggvRadioComponent } from './radio.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // RadioComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('RadioComponent - constructor()', () => {
    let component: NggvRadioComponent
    let fixture: ComponentFixture<NggvRadioComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvRadioComponent],
        providers: [{ provide: NgControl, useValue: new FormControl() }],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          NggvI18nTestModule,
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
      fixture = TestBed.createComponent(NggvRadioComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
