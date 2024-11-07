import '../core/core.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'

import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive'
import { NgvTextareaComponent } from './textarea.component'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // TextareaComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TextareaComponent - constructor()', () => {
    let component: NgvTextareaComponent
    let fixture: ComponentFixture<NgvTextareaComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvTextareaComponent, CharacterCountdownDirective],
        providers: [{ provide: NgControl, useValue: new FormControl() }],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          TranslocoModule,
          NgvI18nTestModule,
        ],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvTextareaComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
