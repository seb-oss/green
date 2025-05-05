import '../core/core.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive'
import { NggvTextareaComponent } from './textarea.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // TextareaComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TextareaComponent - constructor()', () => {
    let component: NggvTextareaComponent
    let fixture: ComponentFixture<NggvTextareaComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvTextareaComponent, CharacterCountdownDirective],
        providers: [{ provide: NgControl, useValue: new FormControl() }],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          TranslocoModule,
          NggvI18nTestModule,
        ],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvTextareaComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
