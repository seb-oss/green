import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvSlideOutComponent } from './slide-out.component'

describe('SlideOutComponent', () => {
  let component: NgvSlideOutComponent
  let fixture: ComponentFixture<NgvSlideOutComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgvSlideOutComponent],
      imports: [NgvI18nTestModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NgvSlideOutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('onAction', () => {
    it('should prevent default event behavior', () => {
      const event = new Event('click')
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault')

      component.onAction(event, 'positive')

      expect(preventDefaultSpy).toHaveBeenCalled()
    })

    it('should emit nggvPositiveEvent when action is "positive"', () => {
      const emitSpy = jest.spyOn(component.nggvPositiveEvent, 'emit')
      const event = new Event('click')

      component.onAction(event, 'positive')

      expect(emitSpy).toHaveBeenCalled()
    })

    it('should emit nggvNeutralEvent when action is "neutral"', () => {
      const emitSpy = jest.spyOn(component.nggvNeutralEvent, 'emit')
      const event = new Event('click')

      component.onAction(event, 'neutral')

      expect(emitSpy).toHaveBeenCalled()
    })

    it('should emit nggvNegativeEvent when action is "negative"', () => {
      const emitSpy = jest.spyOn(component.nggvNegativeEvent, 'emit')
      const event = new Event('click')

      component.onAction(event, 'negative')

      expect(emitSpy).toHaveBeenCalled()
    })

    it('should call close method with event and "action" parameter', () => {
      const event = new Event('click')
      const closeSpy = jest.spyOn(component, 'close')

      component.onAction(event, 'positive')

      expect(closeSpy).toHaveBeenCalledWith(event, 'action')
    })
  })
})
