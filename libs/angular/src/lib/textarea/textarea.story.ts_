import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';

import { NgvI18nModule } from '@sebgroup/ngv-i18n';
import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive';
import { TextareaComponent } from './textarea.component';

export default {
  title: 'Core/Textarea',
  component: TextareaComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      declarations: [CharacterCountdownDirective],
      imports: [CommonModule, FormsModule, NgvI18nModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

type TextareaComponentStory = StoryFn<TextareaComponent & any>;

let formControlValue: any = undefined;
const Template: TextareaComponentStory = (args: TextareaComponent & any) => {
  const formControl = new UntypedFormControl(formControlValue, [Validators.maxLength(140)]);
  formControl.valueChanges.subscribe((val) => (formControlValue = val));
  const toggleDisableField = () => {
    if (!!formControl.disabled) return formControl.enable();
    formControl.disable();
  };
  return {
    template: /*html*/ `
    <div style="width: 15rem">
      <ngv-textarea
        [formControl]="formControl"
        [label]="label"
        [invalid]="invalid"
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [rows]="rows"
        [locked]="locked"
        [displayDisabledAsLocked]="displayDisabledAsLocked">
      </ngv-textarea>
      <div style="margin-top: 1rem">
        <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
      </div>
    </div>
    `,
    props: {
      ...args,
      formControl: formControl,
      disableFn: toggleDisableField,
    },
  };
};

export const Primary = Template.bind({});
Primary.args = {
  id: '123',
  label: 'This is a field label',
  placeholder: 'This is a placeholder',
  maxlength: 140,
  invalid: false,
};

export const WithErrorAndCountdown = Template.bind({});
WithErrorAndCountdown.args = {
  ...Primary.args,
  invalid: true,
  error: 'this is a test error',
};

export const WithFixedRows = Template.bind({});
WithFixedRows.args = {
  ...Primary.args,
  rows: 3,
};

export const WithFixedRowsAndTextPrefilled = Template.bind({});
WithFixedRowsAndTextPrefilled.args = {
  ...Primary.args,
  rows: 3,
  state:
    'Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello',
};

export const WithLockedInput = Template.bind({});
WithLockedInput.args = {
  ...Primary.args,
  locked: true,
  description: undefined,
};

export const WithDisplayDisabledAsLocked = Template.bind({});
WithDisplayDisabledAsLocked.args = {
  ...Primary.args,
  invalid: undefined,
  required: undefined,
  optional: undefined,
  valid: undefined,
  locked: false,
  description: undefined,
  displayDisabledAsLocked: true,
};
