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
    let hostElement: HTMLElement

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
      hostElement = fixture.debugElement.nativeElement
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })

    it('should have "small" class when size is set to "small"', () => {
      component.size = 'small'
      fixture.detectChanges()
      expect(hostElement.classList.contains('small')).toBeTruthy()
      expect(hostElement.classList.contains('large')).toBeFalsy()
    })

    it('should have "large" class when size is set to "large"', () => {
      component.size = 'large'
      fixture.detectChanges()
      expect(hostElement.classList.contains('large')).toBeTruthy()
      expect(hostElement.classList.contains('small')).toBeFalsy()
    })
  })
})
