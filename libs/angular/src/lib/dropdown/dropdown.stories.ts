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
    componentIds: ['component-dropdown'],
  },
} as Meta<NggDropdownComponent>

const Template: Story<NggDropdownComponent> = (args: NggDropdownComponent) => ({
  template: `<ngg-dropdown [texts]="texts" [options]="options" [(value)]="value" [loop]="loop" [multiSelect]="multiSelect" [searchable]="searchable" [useValue]="useValue" [display]="display" [id]="id"></ngg-dropdown>`,
  props: args,
})

export const Select = Template.bind({})
Select.args = {
  id: '',
  texts: { placeholder: 'Select meal' },
  value: '',
  loop: true,
  multiSelect: false,
  searchable: false,
  options: [
    { label: 'Tacos', value: 'tacos' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Sushi', value: 'sushi' },
  ],
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  id: '',
  texts: { placeholder: 'Select meal(s)' },
  value: '',
  loop: true,
  multiSelect: true,
  searchable: false,
  display: 'name',
  options: [
    { name: 'Tacos', value: 'tacos' },
    { name: 'Pizza', value: 'pizza' },
    { name: 'Sushi', value: 'sushi' },
  ],
}

export const Searchable = Template.bind({})
Searchable.args = {
  id: '',
  texts: { placeholder: 'Select meal(s)', searchPlaceholder: 'Search meal' },
  value: '',
  loop: true,
  multiSelect: false,
  searchable: true,
  display: 'name',
  options: [
    { name: 'Tacos', value: 'tacos' },
    { name: 'Pizza', value: 'pizza' },
    { name: 'Sushi', value: 'sushi' },
    { name: 'Ramen', value: 'ramen' },
    { name: 'Tori Ramen', value: 'tori' },
    { name: 'Tokyo Ramen', value: 'tokyo' },
    { name: 'Kyoto Ramen', value: 'kyoto' },
    { name: 'Sriracha Ramen', value: 'sriracha' },
    { name: 'Kimchi Ramen', value: 'kimchi' },
    { name: 'Hakodate Ramen', value: 'hakodate' },
  ],
}

const CustomOptionTemplate: Story<NggDropdownComponent> = (
  args: NggDropdownComponent
) => {
  args.compareWith = (o1: any, o2: any) => o1.id === o2.id
  args.searchFilter = (search: string, value: any) =>
    ['kitchen', 'id'].some((key) =>
      value[key].toLowerCase().includes(search.toLowerCase())
    )
  return {
    component: NggDropdownComponent,
    template: `
    <ngg-dropdown 
      [texts]="texts" 
      [options]="options" 
      [(value)]="value" 
      [loop]="loop" 
      [multiSelect]="multiSelect" 
      [searchable]="searchable" 
      [searchFilter]="searchFilter" 
      [compareWith]="compareWith" 
      [useValue]="useValue" 
      [display]="display" 
      [id]="id">
      <ng-template nggDropdownOption let-option="option" let-index="index">
        <div>
          <div>{{ index }}. {{ option.name }}</div>
          <div style="font-size: 0.8em">{{ option.val.kitchen }}</div>
        </div>
      </ng-template>
    </ngg-dropdown>
    `,
    props: args,
  }
}

export const CustomOption = CustomOptionTemplate.bind({})
CustomOption.args = {
  id: '',
  texts: { placeholder: 'Select meal(s)' },
  value: '',
  loop: true,
  multiSelect: true,
  searchable: true,
  useValue: 'val',
  display: 'name',
  options: [
    {
      name: 'Tacos',
      val: {
        id: 'tacos',
        kitchen: 'mexican',
      },
    },
    {
      name: 'Pizza',
      val: {
        id: 'pizza',
        kitchen: 'italian',
      },
    },
    {
      name: 'Sushi',
      val: {
        id: 'sushi',
        kitchen: 'japanese',
      },
    },
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
      label: 'Sweden',
      value: 'sweden',
    },
    {
      label: 'Denmark',
      value: 'denmark',
    },
    {
      label: 'Finland',
      value: 'Finland',
    },
    {
      label: 'Norway',
      value: 'norway',
    },
    {
      label: 'England',
      value: 'england',
    },
    {
      label: 'Germany',
      value: 'germany',
    },
    {
      label: 'Estonia',
      value: 'estonia',
    },
    {
      label: 'Lithuania',
      value: 'lithuania',
    },
    {
      label: 'Belarus',
      value: 'belarus',
    },
    {
      label: 'Latvia',
      value: 'latvia',
    },
    {
      label: 'Greece',
      value: 'greece',
    },
    {
      label: 'Italy',
      value: 'italy',
    },
    {
      label: 'Austria',
      value: 'austria',
    },
    {
      label: 'Switzerland',
      value: 'switzerland',
    },
    {
      label: 'Netherlands',
      value: 'netherlands',
    },
    {
      label: 'Belgium',
      value: 'belgium',
    },
    {
      label: 'France',
      value: 'france',
    },
    {
      label: 'Spain',
      value: 'spain',
    },
    {
      label: 'Portugal',
      value: 'portugal',
    },
    {
      label: 'Poland',
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

const FormControlWithResetTemplate: Story<NggDropdownComponent> = (
  args: NggDropdownComponent
) => {
  const validationFormAdvance = new FormGroup({
    country: new FormControl(undefined, [Validators.required]),
  })

  const options$ = of([
    {
      label: 'Sweden',
      value: { country: 'sweden', id: '1' },
    },
    {
      label: 'Australia',
      value: { country: 'Australia', id: '2' },
    },
  ]).pipe(delay(3000))

  const save = (form: any) => {
    console.log('Saved!', form)
  }

  return {
    component: NggDropdownComponent,
    template: `
    <form [formGroup]="validationFormAdvance" #ngForm="ngForm" (submit)="save(validationFormAdvance.value)">
    <div class="form-group" *ngIf="validationFormAdvance.get('country') as dropdown">
      <ngg-dropdown
        label="Country"
        [options]="options$ | async"
        formControlName="country"
        [invalid]="validationFormAdvance.get('country').invalid && validationFormAdvance.get('country').touched"
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
    <button type="submit" [disabled]="ngForm?.submitted && validationFormAdvance.invalid">
      Save
    </button>
    <button (click)="validationFormAdvance.reset()">
    Reset
    </button>
    `,
    props: {
      ...args,
      validationFormAdvance,
      options$,
      save,
    },
  }
}

export const FormWithReset = FormControlWithResetTemplate.bind({})
FormWithReset.args = {}
