// Dropdown.stories.ts
import Documentation from './documentation.mdx'
import { moduleMetadata, Story, Meta } from '@storybook/angular'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { NggDropdownModule } from './dropdown.module'
import { NggDropdownComponent } from './dropdown.component'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

export default {
  title: 'Components/Dropdown',
  component: NggDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, NggDropdownModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta<NggDropdownComponent>

const Template: Story<NggDropdownComponent> = (args: NggDropdownComponent) => ({
  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop"></ngg-dropdown>`,
  props: args,
})

export const Select = Template.bind({})
Select.args = {
  id: '',
  texts: { placeholder: 'Select meal' },
  value: '',
  loop: true,
  options: [
    { key: 'Tacos', value: 'tacos' },
    { key: 'Pizza', value: 'pizza' },
    { key: 'Sushi', value: 'sushi' },
  ],
}

const FormControlTemplate: Story<NggDropdownComponent> = (
  args: NggDropdownComponent
) => {
  const validationForm = new FormGroup({
    country: new FormControl(undefined, [Validators.required]),
  })

  const options$ = of([
    {
      key: 'Sweden',
      value: 'sweden',
    },
    {
      key: 'Denmark',
      value: 'denmark',
    },
    {
      key: 'Finland',
      value: 'Finland',
    },
    {
      key: 'Norway',
      value: 'norway',
    },
    {
      key: 'England',
      value: 'england',
    },
    {
      key: 'Germany',
      value: 'germany',
    },
    {
      key: 'Estonia',
      value: 'estonia',
    },
    {
      key: 'Lithuania',
      value: 'lithuania',
    },
    {
      key: 'Belarus',
      value: 'belarus',
    },
    {
      key: 'Latvia',
      value: 'latvia',
    },
    {
      key: 'Greece',
      value: 'greece',
    },
    {
      key: 'Italy',
      value: 'italy',
    },
    {
      key: 'Austria',
      value: 'austria',
    },
    {
      key: 'Switzerland',
      value: 'switzerland',
    },
    {
      key: 'Netherlands',
      value: 'netherlands',
    },
    {
      key: 'Belgium',
      value: 'belgium',
    },
    {
      key: 'France',
      value: 'france',
    },
    {
      key: 'Spain',
      value: 'spain',
    },
    {
      key: 'Portugal',
      value: 'portugal',
    },
    {
      key: 'Poland',
      value: 'poland',
    },
  ]).pipe(delay(3000))

  const save = (form: any) => {
    console.log('Saved!', form)
  }

  return {
    component: NggDropdownComponent,
    template: `
      <form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save(validationForm.value)">
  <div class="form-group" *ngIf="validationForm.get('country') as dropdown">
    <ngg-dropdown
      label="Country"
      [options]="options$ | async"
      formControlName="country"
      [valid]="dropdown.valid && ngForm.submitted"
      [invalid]="dropdown.invalid && ngForm.submitted"
    >
      <!-- Hint text when not submitted -->
      <ng-container data-form-info *ngIf="!ngForm['submitted']"
        >Select country</ng-container
      >
      <ng-container data-form-info *ngIf="ngForm['submitted']">
        <!-- Text when form control contains one or more errors -->
        <ng-container *ngIf="dropdown.errors as errors">
          <!-- Text for each error (only one will be displayed at a time) -->
          <ng-container *ngIf="errors['required']">Select country</ng-container>
        </ng-container>
      </ng-container>
    </ngg-dropdown>
  </div>
  <button type="submit" [disabled]="ngForm?.submitted && validationForm.invalid">
    Save
  </button>
    `,
    props: {
      ...args,
      validationForm,
      options$,
      save,
    },
  }
}

export const Form = FormControlTemplate.bind({})
Form.args = {}
