/* eslint-disable no-console */
import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms'
import { applicationConfig, moduleMetadata } from '@storybook/angular'
import { delay } from 'rxjs/operators'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvI18nModule } from '../i18n'
import { NggvCheckboxComponent } from './checkbox.component'

interface StoryInputListener {
  checked: boolean
  action: (event: Event) => void
  opt1: any
  opt2: any
  opt3: any
  selected: string
}

const meta: Meta<NggvCheckboxComponent> = {
  title: 'V-Angular/Checkbox',
  component: NggvCheckboxComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)], // Changes: removed
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
      options: ['small', 'large'],
      control: {
        type: 'select',
        labels: {
          small: 'Small',
          large: 'Large',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<NggvCheckboxComponent & StoryInputListener>

export const Single: Story = {
  render: (args: any) => ({
    template: /*html*/ `
    <nggv-checkbox
      id='123'
      [label]="label"
      [value]="value"
      [disabled]="disabled"
      [required]="required"
      [invalid]="invalid"
      [error]="error"
      [size]="size"
      [ngModel]="checked"
      (ngModelChange)="action($event)">
    </nggv-checkbox>`,
    props: { ...args, size: args.size || 'large' },
  }),
  args: {
    checked: false,
    label: 'Field label',
    value: 'option',
    action: console.log,
    required: true,
    disabled: false,
    invalid: false,
    error: '',
    locked: false,
  },
}

export const Multiple: Story = {
  render: (args: any) => ({
    template: /*html*/ `
    <nggv-checkbox
      [id]="opt1.id" [name]="name" [label]="opt1.label" [value]="opt1.value"
      [size]="size"
      [ngModel]="opt1.ngModel"
      (ngModelChange)="action($event)">
    </nggv-checkbox>
    <nggv-checkbox
      [id]="opt2.id" [name]="name" [label]="opt2.label" [value]="opt2.value"
      [size]="size"
      [ngModel]="opt2.ngModel"
      (ngModelChange)="action($event)">
    </nggv-checkbox>
    <nggv-checkbox
      [id]="opt3.id" [name]="name" [label]="opt3.label" [value]="opt3.value"
      [size]="size"
      [ngModel]="opt3.ngModel"
      (ngModelChange)="action($event)">
    </nggv-checkbox>`,
    props: args,
  }),
  args: {
    name: 'options',
    opt1: {
      id: 'opt1',
      checked: false,
      label: 'Field label 1',
      value: 'option1',
    },
    opt2: {
      id: 'opt2',
      checked: false,
      label: 'Field label 2',
      value: 'option2',
    },
    opt3: {
      id: 'opt3',
      checked: false,
      label: 'Field label 3',
      value: 'option3',
    },
    action: console.log,
  },
}

export const WithReactiveForm: Story = {
  render: (args: any) => {
    const grp = new UntypedFormGroup({
      vanilla: new UntypedFormControl(
        args.selected === 'vanilla' ? args.selected : null,
      ),
      strawberry: new UntypedFormControl(
        args.selected === 'strawberry' ? args.selected : null,
      ),
      chocolate: new UntypedFormControl(
        args.selected === 'chocolate' ? args.selected : null,
      ),
    })
    grp.valueChanges.pipe(delay(0)).subscribe(console.log)
    let disabled = true
    const toggleDisableField = () => {
      disabled = !disabled
      if (disabled) {
        Object.values(grp.controls).forEach((ctrl) => ctrl.enable())
        return
      }
      Object.values(grp.controls).forEach((ctrl) => ctrl.disable())
    }
    return {
      template: /*html*/ `
      <label class="gds-field-label" style="margin-bottom: 0.25em">Favorite flavours:</label>
      <div [formGroup]="formGroup">
        <nggv-checkbox id="opt1"
          [name]="name"
          label="Vanilla"
          value="vanilla"
          formControlName="vanilla"
          [optional]="false"
          [invalid]="invalid"
          [error]="error"
          [locked]="locked"
          [size]="size"
          [displayDisabledAsLocked]="displayDisabledAsLocked">
          <ng-template #labelTpl>Vanilla 🍦</ng-template>
        </nggv-checkbox>
        <nggv-checkbox id="opt2"
          [name]="name"
          label="Strawberry"
          value="strawberry"
          formControlName="strawberry"
          [optional]="false"
          [invalid]="invalid"
          [error]="error"
          [locked]="locked"
          [size]="size"
          [displayDisabledAsLocked]="displayDisabledAsLocked">
          <ng-template #labelTpl>Strawberry 🍧</ng-template>
        </nggv-checkbox>
        <nggv-checkbox id="opt3"
          [name]="name"
          label="Chocolate"
          value="chocolate"
          formControlName="chocolate"
          [optional]="false"
          [invalid]="invalid"
          [error]="error"
          [locked]="locked"
          [size]="size"
          [displayDisabledAsLocked]="displayDisabledAsLocked">
          <ng-template #labelTpl>Chocolate 🍫</ng-template>
        </nggv-checkbox>
      </div>
      <div style="margin-top: 1rem">
        <button type="button" class="gds-button" (click)="disableFn()">Toggle disable control</button>
      </div>
    `,
      props: {
        ...args,
        formGroup: grp,
        disableFn: toggleDisableField,
        size: args.size || 'large',
      },
    }
  },
  args: {
    name: 'iceCream',
    selected: 'chocolate',
  },
}

export const WithLockedInput: Story = {
  render: WithReactiveForm.render,
  args: {
    ...WithReactiveForm.args,
    locked: true,
  },
}

export const WithDisplayDisabledAsLocked: Story = {
  render: WithReactiveForm.render,
  args: {
    ...WithReactiveForm.args,
    locked: false,
    displayDisabledAsLocked: true,
  },
}
