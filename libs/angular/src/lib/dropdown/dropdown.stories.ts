// Dropdown.stories.ts

import { moduleMetadata } from '@storybook/angular'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { NggDropdownModule } from './dropdown.module'

export default {
  title: 'Components/Dropdown',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        NggDropdownModule,
      ],
    }),
  ],
}

export const Select = () => {
  return {
    template: `<ngg-dropdown text="Select" [options]='options'></ngg-dropdown>`,
    props: {
      options: [
        { key: 'Tacos', value: 'tacos' },
        { key: 'Pizza', value: 'pizza' },
        { key: 'Sushi', value: 'sushi' },
      ],
    },
  }
}

Select.story = {}

/*import { Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular'
import { of } from 'rxjs'
import { GreenDropdownComponent } from './dropdown.component'
import { ReactiveFormsModule } from '@angular/forms'
import { template } from '@babel/core'

export default {
  title: 'Components/Dropdown',
  component: GreenDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule]
    }),
    componentWrapperDecorator(story => `<form [formGroup]='dropdownForm'>${story}</form>`),
  ],
} as Meta;

export const Select = () => ({
  props: {
    options: [{
      key:'Option 1',
      value: 1
    },{
      key:'Option 2',
      value: 2
    },{
      key:'Option 3',
      value: 3
    }],
    control: 'dropdownForm.control.select'
  },
});
*/
