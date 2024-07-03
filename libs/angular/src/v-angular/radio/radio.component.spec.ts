import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import '../core.globals';
import { RadioComponent } from './radio.component';

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // RadioComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('RadioComponent - constructor()', () => {
    let component: RadioComponent;
    let fixture: ComponentFixture<RadioComponent>;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [RadioComponent],
          providers: [{ provide: NgControl, useValue: new FormControl() }],
          imports: [FormsModule, ReactiveFormsModule, NgvI18nTestModule],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(RadioComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
