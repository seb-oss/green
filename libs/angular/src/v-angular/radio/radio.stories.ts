import { CommonModule } from '@angular/common'
import { importProvidersFrom } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NgvRadioComponent } from './radio.component'

interface StoryInputListener {
  selected: string
  action: (event: Event) => void
}

export default {
  title: 'V-Angular/Radio',
  component: NgvRadioComponent,

  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, NgvI18nModule],
    }),
  ],
} as Meta<NgvRadioComponent>

const Template: StoryFn<NgvRadioComponent & StoryInputListener> = (
  args: any,
) => ({
  template: /*html*/ `
    <nggv-radio
      [label]="label"
      [name]="name"
      [value]="name + '1'"
      [ngModel]="selected"
      (ngModelChange)="action($event)">
    </nggv-radio>
    <nggv-radio
      [label]="label"
      [name]="name"
      [value]="name + '2'"
      [ngModel]="selected"
      (ngModelChange)="action($event)">
    </nggv-radio>
    <nggv-radio
      [label]="label"
      [name]="name"
      [value]="name + '3'"
      [ngModel]="selected"
      (ngModelChange)="action($event)">
    </nggv-radio>
  `,
  props: {
    ...args,
  },
})

const TemplateWithFormControl: StoryFn<NgvRadioComponent & any> = (
  args: NgvRadioComponent & any,
) => {
  const ctrl = new FormControl(args.selected)
  ctrl.valueChanges.subscribe(console.log)
  const toggleDisableField = () => {
    if (ctrl.disabled) return ctrl.enable()
    ctrl.disable()
  }
  return {
    template: /*html*/ `
    <label class="sdv-field-label" style="margin-bottom: 0.25em">Field that displays disabled as locked</label>
    <nggv-radio
      [name]="name"
      [value]="name + '1'"
      [formControl]="formControl"
      [locked]="locked"
      [displayDisabledAsLocked]="displayDisabledAsLocked">
      <ng-template #labelTpl>{{label}} 1</ng-template>
    </nggv-radio>
    <nggv-radio
      [name]="name"
      [value]="name + '2'"
      [formControl]="formControl"
      [locked]="locked"
      [displayDisabledAsLocked]="displayDisabledAsLocked">
      <ng-template #labelTpl>{{label}} 2</ng-template>
    </nggv-radio>
    <nggv-radio
      [name]="name"
      [value]="name + '3'"
      [formControl]="formControl"
      [locked]="locked"
      [displayDisabledAsLocked]="displayDisabledAsLocked">
      <ng-template #labelTpl>{{label}} 3</ng-template>
    </nggv-radio>
    <div style="margin-top: 1rem">
      <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
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
