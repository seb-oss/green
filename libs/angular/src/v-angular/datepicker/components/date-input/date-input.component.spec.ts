import '../../datepicker.globals'

import { Component, Directive, Input, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'

import { NggvI18nTestModule } from '../../../i18n'
import * as dateModels from '../../models/dates'
import { NggvDatepickerTestingModule } from '../../test/datepicker-testing.module'
import { DateInputComponent } from './date-input.component'

@Directive({
    selector: '[nggvInputMask]',
    standalone: false
})
class NggvInputMaskStubDirective {
  @Input() nggvInputMask: any
}

describe('[NggvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // DateInputComponent
  // ----------------------------------------------------------------------------
  let hostElement: HTMLElement

  @Component({
    template: /*html*/ `
      <nggv-dateinput #dateInput [formControl]="fc"></nggv-dateinput>
    `,
    standalone: false
})
  class DateInputHostComponent {
    @ViewChild('dateInput', { static: true }) dateInput!: DateInputComponent
    fc = new FormControl()
  }

  describe('DateInputComponent', () => {
    let component: DateInputHostComponent
    let fixture: ComponentFixture<DateInputHostComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          DateInputComponent,
          DateInputHostComponent,
          NggvInputMaskStubDirective,
        ],
        imports: [
          NggvDatepickerTestingModule,
          NggvI18nTestModule,
          FormsModule,
          ReactiveFormsModule,
        ],
        providers: [
          {
            provide: NgControl,
            useValue: new FormControl(),
          },
        ],
      }).compileComponents()

      fixture = TestBed.createComponent(DateInputHostComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
      hostElement = fixture.debugElement.nativeElement
    }))

    describe('constructor()', () => {
      it('should create', () => {
        expect(component).toBeTruthy()
      })
    })

    describe('closeCalendarOnEscape input', () => {
      it('should close the calendar on escape keydown when closeCalendarOnEscape is set to true', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        component.dateInput.closeCalendarOnEscape = true
        component.dateInput.shown = true

        component.dateInput.keyListener(event)

        expect(component.dateInput.shown).toBe(false)
      })

      it('should not close the calendar on escape keydown when closeCalendarOnEscape is set to false', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        component.dateInput.closeCalendarOnEscape = false
        component.dateInput.shown = true

        component.dateInput.keyListener(event)

        expect(component.dateInput.shown).not.toBe(false)
      })
    })

    describe('updatePlaceholderAndMask()', () => {
      const mockState = new Date('2024-03-05')

      it('should update placeholder based on dateLocale', () => {
        const mockLocale = 'en-US'

        jest.spyOn(dateModels, 'setDateFormatCharacters')

        component.fc.setValue(mockState)
        component.dateInput.dateLocale = mockLocale
        component.dateInput.updatePlaceholderAndMask()

        expect(dateModels.setDateFormatCharacters).toHaveBeenCalledWith(
          'mm/dd/yyyy',
          undefined,
        )
      })

      it('should update placeholder based on defaultPlaceholder', () => {
        const mockLocale = 'en-US'
        const defaultPlaceholder = 'yyyy-MM-dd'

        jest.spyOn(dateModels, 'setDateFormatCharacters')

        component.fc.setValue(mockState)
        component.dateInput.dateLocale = mockLocale
        component.dateInput.defaultPlaceholder = defaultPlaceholder
        component.dateInput.updatePlaceholderAndMask()

        expect(dateModels.setDateFormatCharacters).toHaveBeenCalledWith(
          defaultPlaceholder,
          undefined,
        )
      })

      describe('size input', () => {
        it('should set class to small when size is set to "small"', () => {
          component.dateInput.size = 'small'
          fixture.detectChanges()

          expect(
            hostElement.querySelector('nggv-dateinput')?.classList,
          ).toContain('small')
          expect(
            hostElement.querySelector('nggv-dateinput')?.classList,
          ).not.toContain('large')
        })

        it('should set class to large when size is set to "large"', () => {
          component.dateInput.size = 'large'
          fixture.detectChanges()

          expect(
            hostElement.querySelector('nggv-dateinput')?.classList,
          ).toContain('large')
          expect(
            hostElement.querySelector('nggv-dateinput')?.classList,
          ).not.toContain('small')
        })
      })
    })

    describe('updateFormat()', () => {
      const mockState = new Date('2024-03-05')

      it('should update dateFormatCharacters based on dateFormat', () => {
        const mockDateFormat = 'yyyy-MM-dd'
        const mockLocale = 'en-US'

        jest.spyOn(dateModels, 'setDateFormatCharacters')

        component.fc.setValue(mockState)
        component.dateInput.dateFormat = mockDateFormat
        component.dateInput.locale = mockLocale
        component.dateInput.updateFormat()

        expect(dateModels.setDateFormatCharacters).toHaveBeenCalledWith(
          mockDateFormat.toLowerCase(),
          undefined,
        )
      })
    })
  })
})
