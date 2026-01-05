/* eslint-disable no-console */
import './datepicker.globals'

import { CommonModule, registerLocaleData, WeekDay } from '@angular/common'
import localeEn from '@angular/common/locales/en'
import localeSv from '@angular/common/locales/sv'
import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core'
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'
import { applicationConfig, moduleMetadata, StoryFn } from '@storybook/angular'
import { Subject } from 'rxjs'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '../../lib/shared'
import { NggvI18nModule } from '../i18n'
import { NggvInputMaskModule } from '../input-mask'
import { CalendarControlComponent } from './components/calendar-control/calendar-control.component'
import { CalendarComponent } from './components/calendar/calendar.component'
import { DateInputComponent } from './components/date-input/date-input.component'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { bankHolidays } from './datepicker.mocks'
import { CalendarDateDirective } from './directives/calendar-date.directive'
import { DateThookPipe } from './pipes/date-thook.pipe'
import { IsDisabledPipe } from './pipes/is-disabled.pipe'
import { MatchesPipe } from './pipes/matches.pipe'

registerLocaleData(localeSv, 'sv-SV')
registerLocaleData(localeSv, 'sv')
registerLocaleData(localeEn, 'en-GB')
registerLocaleData(localeEn, 'en')

const meta: Meta<DateInputComponent> = {
  title: 'V-Angular/Date Input',
  component: DateInputComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NggvI18nModule),
        importProvidersFrom(NggvInputMaskModule.forRoot({ isAsync: true })),
      ],
    }),
    moduleMetadata({
      declarations: [
        CalendarComponent,
        CalendarDateDirective,
        IsDisabledPipe,
        DateThookPipe,
        CalendarControlComponent,
        DatepickerComponent,
        DateInputComponent,
        MatchesPipe,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule,
        NggvInputMaskModule,
        NggCoreWrapperModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  args: {
    locale: 'sv',
  },
  argTypes: {
    locale: {
      options: ['sv', 'en'],
      control: {
        type: 'radio',
      },
    },
    locked: {
      control: {
        type: 'boolean',
      },
    },
    closeOnScroll: {
      control: {
        type: 'boolean',
      },
    },
    dateLocale: {
      options: ['sv-SE', 'en-GB', 'da-DK'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['small', 'large'],
      control: {
        type: 'select',
        labels: {
          large: 'Large',
          small: 'Small',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<DateInputComponent>

type DateStoryArgs = DateInputComponent

const notTomorrowValidator = (control: AbstractControl) => {
  if (control.value == null || control.value == '') return null
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const controlDate = new Date(control.value)
  if (controlDate.getDate() === tomorrow.getDate()) return { notTomorrow: true }
  return null
}

const PrimaryTemplate: StoryFn<DateStoryArgs & any> = (args) => {
  const dateFc = new UntypedFormControl(args.ngModel)

  console.log(args)

  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })

  // remove non-input args
  return {
    template: /*html*/ `
    <nggv-dateinput
      [label]="label"
      [locale]="locale"
      [dateFormat]="dateFormat"
      [dateLocale]="dateLocale"
      [disableDates]="disableDates"
      [disableWeekDays]="disableWeekDays"
      [required]="required"
      [invalid]="invalid"
      [error]="error"
      [errorList]="errorList"
      [withErrorIcon]="withErrorIcon"
      [firstDayOfWeek]="firstDayOfWeek"
      [formControl]="formControl"
      [locked]="locked"
      [size]="size"
      [displayDisabledAsLocked]="displayDisabledAsLocked"
      [closeCalendarOnEscape]="closeCalendarOnEscape"
      [closeOnScroll]="closeOnScroll"
      >
    </nggv-dateinput>
    `,
    props: {
      ...args,
      formControl: dateFc,
    },
  }
}

const TemplateWithSelected: StoryFn<DateStoryArgs> = (args) => {
  const dateFc = new UntypedFormControl()
  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })
  // remove non-input args
  return {
    template: /*html*/ `
    <nggv-dateinput
      [label]="label"
      [dateLocale]="dateLocale"
      [dateFormat]="dateFormat"
      [locale]="locale"
      [disableDates]="disableDates"
      [disableWeekDays]="disableWeekDays"
      [required]="required"
      [invalid]="invalid"
      [error]="error"
      [errorList]="errorList"
      [withErrorIcon]="withErrorIcon"
      [defaultValue]="defaultValue"
      [dateFormat]="dateFormat"
      [dateCharacters]="dateCharacters"
      [firstDayOfWeek]="firstDayOfWeek"
      [formControl]="formControl"
      [closeOnScroll]="closeOnScroll"
      >
    </nggv-dateinput>
    `,
    props: {
      ...args,
      formControl: dateFc,
    },
  }
}

const TemplateWithFormControl: StoryFn<DateStoryArgs & any> = (
  args: DateStoryArgs & any,
) => {
  const dateFc = new UntypedFormControl(args.ngModel, {
    validators: [Validators.required, notTomorrowValidator],
    updateOn: 'blur',
  })
  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })
  const resetSubj = new Subject()
  const resetFn = () => resetSubj.next(true)
  const toggleDisableField = () => {
    if (dateFc.disabled) return dateFc.enable()
    dateFc.disable()
  }
  // remove non-input args
  return {
    template: /*html*/ `
      <div style="margin-bottom: 0.5rem">
        <nggv-dateinput
          [label]="label"
          [locale]="locale"
          [dateFormat]="dateFormat"
          [disableDates]="disableDates"
          [disableWeekDays]="disableWeekDays"
          [required]="required"
          [invalid]="invalid || (formControl.statusChanges | async) === 'INVALID'"
          [error]="error"
          [errorList]="errorList"
          [withErrorIcon]="withErrorIcon"
          [defaultValue]="defaultValue"
          [firstDayOfWeek]="firstDayOfWeek"
          [formControl]="formControl"
          [reset]="reset$"
          [locked]="locked"
          [displayDisabledAsLocked]="displayDisabledAsLocked"
          [closeOnScroll]="closeOnScroll"
          >
        </nggv-dateinput>
      </div>
      <div style="display: flex; justify-items: space-between; margin-top: 1rem">
        <button class="gds-button gds-button-alternative" type="button" (click)="resetCtrl()">Reset input</button>
        <button class="gds-button" type="button" (click)="disableFn()">Toggle disable control</button>
        {{ formControl.value | json }}
      </div>
    `,
    props: {
      ...args,
      formControl: dateFc,
      resetCtrl: resetFn,
      disableFn: toggleDisableField,
      reset$: resetSubj,
    },
  }
}

const TemplateWithFormGroup: StoryFn<DateStoryArgs & any> = (
  args: DateStoryArgs & any,
) => {
  const dateFg = new UntypedFormGroup({
    dateControl: new UntypedFormControl(args.ngModel),
    textControl: new UntypedFormControl(),
  })
  dateFg.controls?.dateControl.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })
  const dateSubj = new Subject()
  const resetFn = () => {
    const date = new Date('11/16/2022')
    const formattedDate = new Intl.DateTimeFormat('sv-SE').format(date)
    return dateFg.controls?.dateControl.patchValue(formattedDate)
  }
  // remove non-input args
  return {
    template: /*html*/ `
      <div style="margin-bottom: 0.5rem" [formGroup]="formGroup">
        <nggv-dateinput formControlName="dateControl"
          [label]="label"
          [disableDates]="disableDates"
          [dateFormat]="dateFormat"
          [defaultValue]="defaultValue"
          [disableWeekDays]="disableWeekDays"
          [required]="required"
          [invalid]="invalid"
          [error]="error"
          [errorList]="errorList"
          [withErrorIcon]="withErrorIcon"
          [dateCharacters]="dateCharacters"
          [firstDayOfWeek]="firstDayOfWeek"
          [closeOnScroll]="closeOnScroll"
          >
        </nggv-dateinput>
      </div>
      {{ formGroup.controls.dateControl.value | json }}
      <div style="margin-bottom: 0.5rem" [formGroup]="formGroup">
        <label class="gds-field-label">Other input label</label>
        <input class="gds-field" formControlName="textControl">
      </div>
      <button class="gds-button" type="button" (click)="setDefault()">Set Default</button>
    `,
    props: {
      ...args,
      formGroup: dateFg,
      setDefault: resetFn,
      date$: dateSubj,
    },
  }
}

const AltTemplate: StoryFn<DateStoryArgs> = (args) => {
  const dateFc = new UntypedFormControl()
  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })
  return {
    template: /*html*/ `
      <nggv-dateinput
        [label]="label"
        [locale]="locale"
        [disableDates]="disableDates"
        [disableWeekDays]="disableWeekDays"
        [firstValid]="firstValid"
        [lastValid]="lastValid"
        [closingTime]="closingTime"
        [invalid]="invalid"
        [error]="error"
        [errorList]="errorList"
        [withErrorIcon]="withErrorIcon"
        [firstDayOfWeek]="firstDayOfWeek"
        [formControl]="formControl"
        [closeOnScroll]="closeOnScroll"
        >
      </nggv-dateinput>
    `,
    props: {
      ...args,
      formControl: dateFc,
    },
  }
}

const ExtendedTemplate: StoryFn<DateStoryArgs> = (args) => {
  const dateFc = new UntypedFormControl()
  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })
  return {
    template: /*html*/ `
      <nggv-dateinput
        #datepicker
        type="extended"
        [label]="label"
        [locale]="locale"
        [disableDates]="disableDates"
        [disableWeekDays]="disableWeekDays"
        [invalid]="invalid"
        [error]="error"
        [errorList]="errorList"
        [withErrorIcon]="withErrorIcon"
        [firstDayOfWeek]="firstDayOfWeek"
        [formControl]="formControl"
        [closeOnScroll]="closeOnScroll"
        >
        <button class="gds-button gds-button-alternative gds-button--small" (click)="emitToday('${new Date().toISOString()}'); datepicker.close()">
          Today
        </button>
        <button class="gds-button gds-button-alternative gds-button--small" (click)="emitOther()">
          Other action
        </button>
      </nggv-dateinput>
    `,
    props: {
      ...args,
      formControl: dateFc,
      emitToday: (val: any) => console.log('emit today', val),
      emitOther: () => console.log('emit other'),
    },
  }
}

const TemplateWithTwoInputs: StoryFn<DateStoryArgs> = (args) => {
  const dateFc = new UntypedFormControl()
  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })
  return {
    template: /*html*/ `
      <div style="display: flex">
        <nggv-dateinput
          style="width: 264px"
          [label]="label"
          [locale]="locale"
          [disableDates]="disableDates"
          [disableWeekDays]="disableWeekDays"
          [firstValid]="firstValid"
          [lastValid]="lastValid"
          [closingTime]="closingTime"
          [invalid]="invalid"
          [error]="error"
          [errorList]="errorList"
          [withErrorIcon]="withErrorIcon"
          [firstDayOfWeek]="firstDayOfWeek"
          [formControl]="formControl"
          [closeOnScroll]="closeOnScroll"
          >
        </nggv-dateinput>
        <input class="gds-field" style="margin-left: 1rem; width: 264px; height: 42px; margin-top: 2.5rem"/>
      </div>
    `,
    props: {
      ...args,
      formControl: dateFc,
    },
  }
}

const CustomLockedTemplate: StoryFn<DateStoryArgs & any> = (args) => {
  const dateFc = new UntypedFormControl(args.ngModel)

  dateFc.valueChanges.subscribe((val) => {
    console.log('control value:', val)
  })

  // remove non-input args
  return {
    template: /*html*/ `
    <nggv-dateinput
      [label]="label"
      [locale]="locale"
      [dateLocale]="dateLocale"
      [disableDates]="disableDates"
      [disableWeekDays]="disableWeekDays"
      [required]="required"
      [invalid]="invalid"
      [error]="error"
      [errorList]="errorList"
      [withErrorIcon]="withErrorIcon"
      [firstDayOfWeek]="firstDayOfWeek"
      [formControl]="formControl"
      [locked]="locked"
      [displayDisabledAsLocked]="displayDisabledAsLocked"
      [closeCalendarOnEscape]="closeCalendarOnEscape"
      [closeOnScroll]="closeOnScroll"
      >
      <ng-template #lockedTpl let-state>Today ({{ state | date: 'shortDate' }})</ng-template>
    </nggv-dateinput>
    `,
    props: {
      ...args,
      formControl: dateFc,
    },
  }
}
const LargeBodyTemplate: StoryFn<DateStoryArgs & any> = (args) => {
  const dateFc = new UntypedFormControl(args.ngModel)

  return {
    template: /*html*/ `
    <div style="height: 2000px; padding-top:800px;">
    <nggv-dateinput
      [label]="label"
      [locale]="locale"
      [dateLocale]="dateLocale"
      [disableDates]="disableDates"
      [disableWeekDays]="disableWeekDays"
      [required]="required"
      [invalid]="invalid"
      [error]="error"
      [errorList]="errorList"
      [withErrorIcon]="withErrorIcon"
      [firstDayOfWeek]="firstDayOfWeek"
      [formControl]="formControl"
      [locked]="locked"
      [size]="size"
      [displayDisabledAsLocked]="displayDisabledAsLocked"
      [closeCalendarOnEscape]="closeCalendarOnEscape"
      [closeOnScroll]="closeOnScroll"
      [dynamicPosition]="dynamicPosition"
      >
    </nggv-dateinput>

    </div>
    `,
    props: {
      ...args,
      formControl: dateFc,
    },
  }
}

export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  label: 'Date label',
  locale: 'sv',
  dateLocale: 'sv-SE',
  disableDates: [],
  disableWeekDays: [],
  closeCalendarOnEscape: true,
  closeOnScroll: false,
  required: true,
  invalid: false,
  ngModel: null,
  firstDayOfWeek: WeekDay.Monday,
  dateFormat: 'yyyy-mm-dd',
  dateCharacters: { year: 'å', month: 'm', day: 'd' },
  errorList: [],
  withErrorIcon: false,
  size: 'large',
}

export const WithFormControl = TemplateWithFormControl.bind({})
WithFormControl.args = {
  ...Primary.args,
  dateFormat: 'dd/mm/yyyy',
}

export const WithFormGroup = TemplateWithFormGroup.bind({})
WithFormGroup.args = {
  ...Primary.args,
  defaultValue: new Date().toISOString(),
  dateFormat: 'dd/mm/yyyy',
}

export const InEnglish = AltTemplate.bind({})
InEnglish.args = {
  ...Primary.args,
  disableDates: bankHolidays,
  locale: 'en',
  dateLocale: 'en-GB',
}

export const WithBankHolidays = AltTemplate.bind({})
WithBankHolidays.args = {
  ...Primary.args,
  disableDates: bankHolidays,
}

export const WithDisabledWeekDays = AltTemplate.bind({})
WithDisabledWeekDays.args = {
  ...Primary.args,
  disableWeekDays: [WeekDay.Monday, WeekDay.Wednesday, WeekDay.Friday],
}

const firstValid = new Date()
export const WithStartDate = AltTemplate.bind({})
WithStartDate.args = {
  ...Primary.args,
  firstValid: firstValid,
}

const lastValid = new Date()
lastValid.setDate(lastValid.getDate() + 5)
export const WithEndDate = AltTemplate.bind({})
WithEndDate.args = {
  ...Primary.args,
  lastValid: lastValid,
}

const selectDate = new Date().toISOString()
export const WithPreSelectedDate = TemplateWithSelected.bind({})
WithPreSelectedDate.args = {
  ...Primary.args,
  defaultValue: selectDate,
}

const closingTime = new Date()
closingTime.setHours(8, 30, 0, 0)
const selected = new Date()
selected.setDate(selected.getDate() + 1)
export const WithClosingTime = AltTemplate.bind({})
WithClosingTime.args = {
  ...Primary.args,
  firstValid: firstValid,
  closingTime: closingTime,
}

export const StartsWithSunday = AltTemplate.bind({})
StartsWithSunday.args = {
  ...Primary.args,
  firstDayOfWeek: WeekDay.Sunday,
}

export const Extended = ExtendedTemplate.bind({})
Extended.args = {
  ...Primary.args,
}

export const WithTwoControls = TemplateWithTwoInputs.bind({})
WithTwoControls.args = {
  ...Primary.args,
  invalid: true,
  error: 'Permanent error',
}

export const WithLockedInput = PrimaryTemplate.bind({})
WithLockedInput.args = {
  ...Primary.args,
  locked: true,
  description: undefined,
  displayDisabledAsLocked: false,
}

export const WithCustomLockedTemplate = CustomLockedTemplate.bind({})
WithCustomLockedTemplate.args = {
  ...Primary.args,
  ngModel: new Date(),
  locked: true,
  description: undefined,
  displayDisabledAsLocked: false,
}

export const WithDisplayDisabledAsLocked = TemplateWithFormControl.bind({})
WithDisplayDisabledAsLocked.args = {
  ...Primary.args,
  locked: false,
  description: undefined,
  displayDisabledAsLocked: true,
}

export const DoNotCloseCalendarOnEscClick = PrimaryTemplate.bind({})
DoNotCloseCalendarOnEscClick.args = {
  ...Primary.args,
  closeCalendarOnEscape: false,
}

export const DynamicPosition = LargeBodyTemplate.bind({})
DynamicPosition.args = {
  ...Primary.args,
  dynamicPosition: true,
}

export const CustomDateFormat = PrimaryTemplate.bind({})
CustomDateFormat.args = {
  ...Primary.args,
  dateFormat: 'dd/mm/yyyy',
}
