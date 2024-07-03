import { CommonModule } from '@angular/common'
//import { importProvidersFrom } from '@angular/core' // Changes: removed
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms'

import { delay } from 'rxjs/operators'

//import { NgvI18nModule } from '../shared/i18n/i18n.module' // Changes: removed
import {
  //applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { CheckboxComponent } from './checkbox.component'

interface StoryInputListener {
  checked: boolean
  action: (event: Event) => void
  opt1: any
  opt2: any
  opt3: any
}

export default {
  title: 'V-Angular/Checkbox',
  component: CheckboxComponent,
  decorators: [
    // applicationConfig({
    //   providers: [importProvidersFrom(NgvI18nModule)], // Changes: removed
    // }),
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        /* NgvI18nModule*/
      ],
    }),
  ],
} as Meta

const Template: StoryFn<CheckboxComponent & StoryInputListener> = (
  args: CheckboxComponent & StoryInputListener,
) => ({
  template: /*html*/ `
    <ngv-checkbox
      id='123'
      [label]="label"
      [value]="value"
      [disabled]="disabled"
      [required]="required"
      [ngModel]="checked"
      (ngModelChange)="action($event)">
    </ngv-checkbox>`,
  props: args,
})

const TemplateAlt: StoryFn<CheckboxComponent & StoryInputListener> = (
  args: CheckboxComponent & StoryInputListener,
) => ({
  template: /*html*/ `
    <ngv-checkbox
      [id]="opt1.id" [name]="name" [label]="opt1.label" [value]="opt1.value"
      [ngModel]="opt1.ngModel"
      (ngModelChange)="action($event)">
    </ngv-checkbox>
    <ngv-checkbox
      [id]="opt2.id" [name]="name" [label]="opt2.label" [value]="opt2.value"
      [ngModel]="opt2.ngModel"
      (ngModelChange)="action($event)">
    </ngv-checkbox>
    <ngv-checkbox
      [id]="opt3.id" [name]="name" [label]="opt3.label" [value]="opt3.value"
      [ngModel]="opt3.ngModel"
      (ngModelChange)="action($event)">
    </ngv-checkbox>`,
  props: args,
})

const TemplateWithReactiveForm: StoryFn<CheckboxComponent & any> = (
  args: CheckboxComponent & any,
) => {
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
    if (!!disabled) {
      Object.values(grp.controls).forEach((ctrl) => ctrl.enable())
      return
    }
    Object.values(grp.controls).forEach((ctrl) => ctrl.disable())
  }
  return {
    template: /*html*/ `
      <label class="sdv-field-label" style="margin-bottom: 0.25em">Favorite flavours:</label>
      <div [formGroup]="formGroup">
        <ngv-checkbox id="opt1"
          [name]="name"
          label="Vanilla"
          value="vanilla"
          formControlName="vanilla"
          [optional]="false"
          [locked]="locked"
          [displayDisabledAsLocked]="displayDisabledAsLocked">
          <ng-template #labelTpl>Vanilla 🍦</ng-template>
        </ngv-checkbox>
        <ngv-checkbox id="opt2"
          [name]="name"
          label="Strawberry"
          value="strawberry"
          formControlName="strawberry"
          [optional]="false"
          [locked]="locked"
          [displayDisabledAsLocked]="displayDisabledAsLocked">
          <ng-template #labelTpl>Strawberry 🍧</ng-template>
        </ngv-checkbox>
        <ngv-checkbox id="opt3"
          [name]="name"
          label="Chocolate"
          value="chocolate"
          formControlName="chocolate"
          [optional]="false"
          [locked]="locked"
          [displayDisabledAsLocked]="displayDisabledAsLocked">
          <ng-template #labelTpl>Chocolate 🍫</ng-template>
        </ngv-checkbox>
      </div>
      <div style="margin-top: 1rem">
        <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
      </div>
    `,
    props: {
      ...args,
      formGroup: grp,
      disableFn: toggleDisableField,
    },
  }
}

export const Single = Template.bind({})
Single.args = {
  checked: false,
  label: 'Field label',
  value: 'option',
  action: console.log,
  required: true,
  disabled: false,
}

export const Multiple = TemplateAlt.bind({})
Multiple.args = {
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
}

export const WithReactiveForm = TemplateWithReactiveForm.bind({})
WithReactiveForm.args = {
  name: 'iceCream',
  selected: 'chocolate',
}

export const WithLockedInput = TemplateWithReactiveForm.bind({})
WithLockedInput.args = {
  ...WithReactiveForm.args,
  locked: true,
}

export const WithDisplayDisabledAsLocked = TemplateWithReactiveForm.bind({})
WithDisplayDisabledAsLocked.args = {
  ...WithReactiveForm.args,
  locked: false,
  displayDisabledAsLocked: true,
}
