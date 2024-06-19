import '../core.globals';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import { CheckboxComponent } from './checkbox.component';

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // CheckboxComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('CheckboxComponent - constructor()', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;
    let checkbox: HTMLInputElement;

    beforeEach(
      waitForAsync(async () => {
        await TestBed.configureTestingModule({
          declarations: [CheckboxComponent],
          imports: [FormsModule, ReactiveFormsModule, NgvI18nTestModule],
          providers: [{ provide: NgControl, useValue: new FormControl() }],
        }).compileComponents();
        
        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        checkbox = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
      }),
    );

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('onInputChange', () => {
      it('should toggle state if not disabled', () => {
        component.disabled = false;
        checkbox.click();
        expect(component.state).toBe(true);
      });
      it('should not toggle state if disabled', () => {
        component.state = true;
        component.disabled = true;
        checkbox.click();
        expect(component.state).toBe(true);
      });
    });
  });
});
