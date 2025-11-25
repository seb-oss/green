import { Component, Input, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { CalendarDateDirective, DateCss } from './calendar-date.directive'

@Component({
    selector: 'nggv-directive-host', // eslint-disable-line @angular-eslint/component-selector
    template: /*html*/ `<button
    [calendarDate]="date"
    [disabled]="disable"
  ></button>`,
    standalone: false
})
class TestHostComponent {
  @ViewChild(CalendarDateDirective, { static: true })
  dateDirectiveRef!: CalendarDateDirective
  @Input() date!: Date
  @Input() disable = false
}

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // CalendarDateDirective - constructor()
  // ----------------------------------------------------------------------------
  describe('CalendarDateDirective - constructor()', () => {
    let component: TestHostComponent
    let fixture: ComponentFixture<TestHostComponent>
    let directive: CalendarDateDirective

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestHostComponent, CalendarDateDirective],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent<TestHostComponent>(TestHostComponent)
      component = fixture.componentInstance
      component.date = new Date()
      directive = component.dateDirectiveRef
    })

    it('creates an instance', () => {
      fixture.detectChanges()
      expect(directive).toBeTruthy()
    })

    it(`adds class '.today' to host element`, () => {
      fixture.detectChanges()
      expect(directive.isToday).toBeTruthy()
      const buttonElementWithClass = fixture.debugElement.query(
        By.css(`.${DateCss.today}`),
      )
      expect(buttonElementWithClass).toBeTruthy()
    })

    it(`class '.today' is missing on host element`, () => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      component.date = yesterday
      fixture.detectChanges()
      expect(directive.isToday).toBeFalsy()
      const buttonElementWithClass = fixture.debugElement.query(
        By.css(`.${DateCss.today}`),
      )
      expect(buttonElementWithClass).toBeFalsy()
    })

    it(`adds class '.not-within-month' to host element`, () => {
      directive.notWithinMonth = true
      fixture.detectChanges()
      expect(directive.notWithinMonth).toBeTruthy()
      const buttonElementWithClass = fixture.debugElement.query(
        By.css(`.${DateCss.notWithinMonth}`),
      )
      expect(buttonElementWithClass).toBeTruthy()
    })

    it(`adds class '.selected' to host element`, () => {
      directive.selected = true
      fixture.detectChanges()
      expect(directive.selected).toBeTruthy()
      const buttonElementWithClass = fixture.debugElement.query(
        By.css(`.${DateCss.selected}`),
      )
      expect(buttonElementWithClass).toBeTruthy()
    })

    it('disables host element', () => {
      fixture.detectChanges()
      expect(directive.disabled).toBeFalsy()
      component.disable = true
      fixture.detectChanges()
      expect(directive.disabled).toBeTruthy()
      const disabledButtonElement = fixture.debugElement.query(
        By.css('button[disabled]'),
      )
      expect(disabledButtonElement).toBeTruthy()
    })
  })
})
