import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'

import { TranslocoModule } from '@jsverse/transloco';
import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'

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
        imports: [FormsModule, ReactiveFormsModule, NgvI18nTestModule, TranslocoModule,],
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
