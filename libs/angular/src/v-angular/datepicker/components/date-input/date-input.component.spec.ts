import '../../datepicker.globals'

import { Component, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'

import { NgvI18nTestModule } from '../../../i18n'
import * as dateModels from '../../models/dates'
import { NggvDatepickerTestingModule } from '../../test/datepicker-testing.module'
import { DateInputComponent } from './date-input.component'

describe('[NgvDatepicker]', () => {
  // ----------------------------------------------------------------------------
  // DateInputComponent
  // ----------------------------------------------------------------------------
  @Component({
    template: /*html*/ `
      <nggv-dateinput #dateInput [formControl]="fc"></nggv-dateinput>
    `,
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
        declarations: [DateInputComponent, DateInputHostComponent],
        imports: [
          NggvDatepickerTestingModule,
          NgvI18nTestModule,
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
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(DateInputHostComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

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

        spyOn(dateModels, 'setDateFormatCharacters').and.callThrough()

        component.fc.setValue(mockState)
        component.dateInput.dateLocale = mockLocale
        component.dateInput.updatePlaceholderAndMask()

        expect(dateModels.setDateFormatCharacters).toBeCalledWith(
          'mm/dd/yyyy',
          undefined,
        )
      })

      it('should update placeholder based on defaultPlaceholder', () => {
        const mockLocale = 'en-US'
        const defaultPlaceholder = 'yyyy-MM-dd'

        spyOn(dateModels, 'setDateFormatCharacters').and.callThrough()

        component.fc.setValue(mockState)
        component.dateInput.dateLocale = mockLocale
        component.dateInput.defaultPlaceholder = defaultPlaceholder
        component.dateInput.updatePlaceholderAndMask()

        expect(dateModels.setDateFormatCharacters).toBeCalledWith(
          defaultPlaceholder,
          undefined,
        )
      })
    })

    describe('updateFormat()', () => {
      const mockState = new Date('2024-03-05')

      it('should update dateFormatCharacters based on dateFormat', () => {
        const mockDateFormat = 'yyyy-MM-dd'
        const mockLocale = 'en-US'

        spyOn(dateModels, 'setDateFormatCharacters').and.callThrough()

        component.fc.setValue(mockState)
        component.dateInput.dateFormat = mockDateFormat
        component.dateInput.locale = mockLocale
        component.dateInput.updateFormat()

        expect(dateModels.setDateFormatCharacters).toBeCalledWith(
          mockDateFormat.toLowerCase(),
          undefined,
        )
      })
    })
  })
})
