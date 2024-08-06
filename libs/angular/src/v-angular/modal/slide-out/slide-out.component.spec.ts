import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import { SlideOutComponent } from './slide-out.component';

describe('SlideOutComponent', () => {
  let component: SlideOutComponent;
  let fixture: ComponentFixture<SlideOutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SlideOutComponent],
      imports: [FontAwesomeModule, NgvI18nTestModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onAction', () => {
    it('should prevent default event behavior', () => {
      const event = new Event('click');
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      component.onAction(event, 'positive');

      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it('should emit ngvPositiveEvent when action is "positive"', () => {
      const emitSpy = jest.spyOn(component.ngvPositiveEvent, 'emit');
      const event = new Event('click');

      component.onAction(event, 'positive');

      expect(emitSpy).toHaveBeenCalled();
    });

    it('should emit ngvNeutralEvent when action is "neutral"', () => {
      const emitSpy = jest.spyOn(component.ngvNeutralEvent, 'emit');
      const event = new Event('click');

      component.onAction(event, 'neutral');

      expect(emitSpy).toHaveBeenCalled();
    });

    it('should emit ngvNegativeEvent when action is "negative"', () => {
      const emitSpy = jest.spyOn(component.ngvNegativeEvent, 'emit');
      const event = new Event('click');

      component.onAction(event, 'negative');

      expect(emitSpy).toHaveBeenCalled();
    });

    it('should call close method with event and "action" parameter', () => {
      const event = new Event('click');
      const closeSpy = jest.spyOn(component, 'close');

      component.onAction(event, 'positive');

      expect(closeSpy).toHaveBeenCalledWith(event, 'action');
    });
  });
});
