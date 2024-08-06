import '../core.globals';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@ngneat/transloco';
import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive';
import { TextareaComponent } from './textarea.component';

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // TextareaComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TextareaComponent - constructor()', () => {
    let component: TextareaComponent;
    let fixture: ComponentFixture<TextareaComponent>;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [TextareaComponent, CharacterCountdownDirective],
          providers: [{ provide: NgControl, useValue: new FormControl() }],
          imports: [FormsModule, ReactiveFormsModule, TranslocoModule, NgvI18nTestModule],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(TextareaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
