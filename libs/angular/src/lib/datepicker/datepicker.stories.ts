// Datepicker.stories.ts
import Documentation from './documentation.mdx'

import { moduleMetadata, Story, Meta } from '@storybook/angular'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { NggDatepickerComponent } from './datepicker.component'
import { NggDatepickerModule } from './datepicker.module'

export default {
  title: 'Components/Datepicker',
  component: NggDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, NggDatepickerModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    value: {
      control: 'date',
    },
  },
} as Meta<NggDatepickerComponent>

const Template: Story<NggDatepickerComponent> = (
  args: NggDatepickerComponent
) => ({
  props: args,
})

export const Simple = Template.bind({})
Simple.args = {
  value: new Date(),
  label: 'Date',
}

const FormControlTemplate: Story<NggDatepickerComponent> = (
  args: NggDatepickerComponent
) => {
  const validationForm = new FormGroup({
    date: new FormControl(undefined, [Validators.required]),
  })

  const save = (form: any) => {
    console.log('Saved!', form)
  }

  return {
    component: NggDatepickerComponent,
    template: `
<form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save(validationForm.value)">
  <ng-container *ngIf="validationForm.get('date') as date">
    <ngg-datepicker
      formControlName="date"
      label="Date"
      [valid]="date.valid && ngForm.submitted"
      [invalid]="date.invalid && ngForm.submitted"
    >
      <!-- Hint text when not submitted -->
      <ng-container data-form-info *ngIf="!ngForm['submitted']"
        >Select date</ng-container
      >
      <ng-container data-form-info *ngIf="ngForm['submitted']">
        <!-- Text when form control contains one or more errors -->
        <ng-container *ngIf="date.errors as errors">
          <!-- Text for each error (only one will be displayed at a time) -->
          <ng-container *ngIf="errors['required']">Select a date</ng-container>
        </ng-container>
      </ng-container>
    </ngg-datepicker>
  </ng-container>
  <button type="submit" [disabled]="ngForm.submitted && validationForm.invalid">Save</button>
</form>
    `,
    props: {
      ...args,
      validationForm,
      save,
    },
  }
}

export const Form = FormControlTemplate.bind({})
Form.args = {}
