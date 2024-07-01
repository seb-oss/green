import '../modal.globals';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import { DialogComponent } from './dialog.component';

describe('[NgvModal]', () => {
  // ----------------------------------------------------------------------------
  // DialogComponent
  // ----------------------------------------------------------------------------
  describe('DialogComponent', () => {
    let component: DialogComponent;
    let fixture: ComponentFixture<DialogComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DialogComponent],
        imports: [NgvI18nTestModule],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('constructor()', () => {
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('closeModalOnEscape input', () => {
      it('should not close the modal on escape keydown when closeModalOnEscape is false', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' });
        component.shown = true;
        component.closeModalOnEscape = false;

        component.close(event);

        expect(component.shown).toBe(true);
      });

      it('should close the modal on escape keydown when closeModalOnEscape is true', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' });
        component.shown = true;
        component.closeModalOnEscape = true;

        component.close(event);

        expect(component.shown).toBe(false);
      });
    });
  });
});
