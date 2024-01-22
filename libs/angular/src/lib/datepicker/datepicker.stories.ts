// Datepicker.stories.ts
import Documentation from './documentation.mdx'
import { startOfYear, subYears } from 'date-fns'

import { moduleMetadata, Story, Meta } from '@storybook/angular'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { dateValidator, NggDatepickerComponent } from './datepicker.component'
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
    componentIds: ['component-datepicker'],
  },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    value: {
      control: 'date',
    },
    options: {
      control: {
        type: 'object',
      },
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

export const CustomOptions = Template.bind({})
CustomOptions.args = {
  label: 'Birthday',
  options: {
    minDate: startOfYear(subYears(new Date(), 100)),
    maxDate: new Date(),
    showWeeks: true,
    dateFormat: 'd/m/y',
  },
}

const FormControlTemplate: Story<NggDatepickerComponent> = (
  args: NggDatepickerComponent
) => {
  const validationForm = new FormGroup({
    date: new FormControl(undefined, [
      Validators.required,
      dateValidator({
        min: args.options?.minDate,
        max: args.options?.maxDate,
      }),
    ]),
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
      [isValid]="ngForm.submitted ? date.valid : null"
      [options]="options"
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
          <ng-container *ngIf="errors['validDate'] === true"
            >Enter valid date</ng-container
          >
          <ng-container
            *ngIf="errors['validDate'] && errors['validDate']['minDate']"
            >Enter date after
            {{
              errors['validDate']['minDate'] | date: 'shortDate'
            }}</ng-container>
          <ng-container
            *ngIf="errors['validDate'] && errors['validDate']['maxDate']"
            >Enter date before
            {{
              errors['validDate']['maxDate'] | date: 'shortDate'
            }}</ng-container>
        </ng-container>
      </ng-container>
    </ngg-datepicker>
  </ng-container>
  <button type="reset" (click)="ngForm.reset()">Reset</button>
  <button class="ms-3" type="submit" [disabled]="ngForm.submitted && validationForm.invalid">
    Save
  </button>
  <br/>
  <code>{{validationForm.value | json}}</code>
  <h5 class="mb-0">Errors</h5>
  <code>
    <div *ngFor="let f of validationForm?.controls | keyvalue">
      {{ f.key }}:{{ f.value.errors | json }}
    </div>
  </code>
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
Form.args = {
  label: 'Birthday',
  options: {
    minDate: startOfYear(subYears(new Date(), 100)),
    maxDate: new Date(),
    showWeeks: true,
  },
}
