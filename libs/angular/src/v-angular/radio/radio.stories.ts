/* eslint-disable no-console */
import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvRadioComponent } from './radio.component'

interface StoryInputListener {
  selected: string
  action: (event: Event) => void
}

const meta: Meta<NggvRadioComponent> = {
  title: 'V-Angular/Radio',
  component: NggvRadioComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NggvI18nModule,
        NggCoreWrapperModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    size: {
      options: ['large', 'small'],
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

const Template: StoryFn<NggvRadioComponent & StoryInputListener> = (
  args: any,
) => ({
  template: /*html*/ `
    <nggv-radio
      [label]="label"
      [name]="name"
      [value]="name + '1'"
      [error]="error"
      [invalid]="invalid"
      [size]="size"
      [ngModel]="selected"
      (ngModelChange)="action($event)">
    </nggv-radio>
    <nggv-radio
      [label]="label"
      [name]="name"
      [error]="error"
      [invalid]="invalid"
      [size]="size"
      [value]="name + '2'"
      [ngModel]="selected"
      (ngModelChange)="action($event)">
    </nggv-radio>
    <nggv-radio
      [label]="label"
      [name]="name"
      [error]="error"
      [invalid]="invalid"
      [size]="size"
      [value]="name + '3'"
      [ngModel]="selected"
      (ngModelChange)="action($event)">
    </nggv-radio>
  `,
  props: {
    ...args,
  },
})

const TemplateWithFormControl: StoryFn<NggvRadioComponent & any> = (
  args: NggvRadioComponent & any,
) => {
  const ctrl = new FormControl(args.selected)
  ctrl.valueChanges.subscribe(console.log)
  const toggleDisableField = () => {
    if (ctrl.disabled) return ctrl.enable()
    ctrl.disable()
  }
  return {
    template: /*html*/ `
    <label class="gds-field-label" style="margin-bottom: 0.25em">Field that displays disabled as locked</label>
    <nggv-radio
      [name]="name"
      [value]="name + '1'"
      [formControl]="formControl"
      [locked]="locked"
      [error]="error"
      [invalid]="invalid"
      [size]="size"
      [displayDisabledAsLocked]="displayDisabledAsLocked">
      <ng-template #labelTpl>{{label}} 1</ng-template>
    </nggv-radio>
    <nggv-radio
      [name]="name"
      [value]="name + '2'"
      [formControl]="formControl"
      [locked]="locked"
      [error]="error"
      [invalid]="invalid"
      [size]="size"
      [displayDisabledAsLocked]="displayDisabledAsLocked">
      <ng-template #labelTpl>{{label}} 2</ng-template>
    </nggv-radio>
    <nggv-radio
      [name]="name"
      [value]="name + '3'"
      [formControl]="formControl"
      [locked]="locked"
      [error]="error"
      [invalid]="invalid"
      [size]="size"
      [displayDisabledAsLocked]="displayDisabledAsLocked">
      <ng-template #labelTpl>{{label}} 3</ng-template>
    </nggv-radio>
    <div style="margin-top: 1rem">
      <button type="button" class="gds-button" (click)="disableFn()">Toggle disable control</button>
    </div>
  `,
    props: {
      ...args,
      formControl: ctrl,
      disableFn: toggleDisableField,
    },
  }
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Radio label',
  name: 'radio',
  selected: 'radio2',
  error: '',
  invalid: false,
  size: 'large',
}

export const WithLockedInput = TemplateWithFormControl.bind({})
WithLockedInput.args = {
  ...Primary.args,
  locked: false,
}

export const WithDisplayDisabledAsLocked = TemplateWithFormControl.bind({})
WithDisplayDisabledAsLocked.args = {
  ...Primary.args,
  locked: false,
  displayDisabledAsLocked: true,
}
