import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import '../core.globals';
import { ExternalLinkDirective } from '../external-link/external-link.directive';
import { ButtonComponent } from './button.component';

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // ButtonComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('ButtonComponent - constructor()', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ButtonComponent, ExternalLinkDirective],
          providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
            { provide: NgControl, useValue: new FormControl() },
          ],
          imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(ButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});