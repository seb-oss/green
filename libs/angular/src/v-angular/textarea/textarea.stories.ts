import { CommonModule } from '@angular/common'
import { importProvidersFrom } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { CharacterCountdownDirective } from '@sebgroup/green-angular/src/v-angular/character-countdown/character-countdown.directive'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggCoreWrapperModule } from '../../lib/shared'
import { NggvTextareaComponent } from './textarea.component'

const meta: Meta<NggvTextareaComponent> = {
  title: 'V-Angular/Textarea',
  component: NggvTextareaComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      declarations: [CharacterCountdownDirective],
      imports: [
        CommonModule,
        FormsModule,
        NggvI18nModule,
        ReactiveFormsModule,
        NggCoreWrapperModule,
      ],
    }),
  ],
  argTypes: {
    invalid: {
      control: {
        type: 'boolean',
      },
    },
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
type Story = StoryObj<NggvTextareaComponent>

let formControlValue: any = undefined

export const Primary: Story = {
  render: (args: NggvTextareaComponent & any) => {
    const formControl = new UntypedFormControl(formControlValue, [
      Validators.maxLength(140),
    ])
    formControl.valueChanges.subscribe((val) => (formControlValue = val))
    const toggleDisableField = () => {
      if (formControl.disabled) return formControl.enable()
      formControl.disable()
    }
    return {
      template: /*html*/ `
    <div style="width: 15rem">
      <nggv-textarea
        [formControl]="formControl"
        [label]="label"
        [description]="description"
        [invalid]="invalid"
        [error]="error"
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [rows]="rows"
        [locked]="locked"
        [size]="size"
        [displayDisabledAsLocked]="displayDisabledAsLocked">
      </nggv-textarea>
      <div style="margin-top: 1rem">
        <button type="button" class="gds-button" (click)="disableFn()">Toggle disable control</button>
      </div>
    </div>
    `,
      props: {
        ...args,
        formControl: formControl,
        disableFn: toggleDisableField,
      },
    }
  },
  args: {
    id: '123',
    label: 'This is a field label',
    placeholder: 'This is a placeholder',
    maxlength: 140,
    invalid: false,
    size: 'large',
  },
}

export const WithErrorAndCountdown: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    description: 'This is a field description',
    invalid: true,
    error: 'this is a test error',
  },
}

export const WithFixedRows: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    rows: 3,
  },
}

export const WithFixedRowsAndTextPrefilled: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    rows: 3,
    state:
      'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
  },
}

export const WithLockedInput: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    locked: true,
    description: undefined,
  },
}

export const WithDisplayDisabledAsLocked: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    invalid: undefined,
    required: undefined,
    optional: undefined,
    valid: undefined,
    locked: false,
    description: undefined,
    displayDisabledAsLocked: true,
  },
}
