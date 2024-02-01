import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { Story, Meta, moduleMetadata } from '@storybook/angular'
import Documentation from './documentation.mdx'

export default {
  title: 'Components/Form/Input',
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-input'],
  },
} as Meta

const Template: Story = (args) => {
  return {
    template: `
      <div class="mb-5">Value: {{ value }}</div>
      <input [value]="value" (input)="value = $event.target.value"/>
    `,
    props: {
      ...args,
      value: 'Hello',
    },
  }
}

export const Default = Template.bind({})

const TemplateTemplateDriven: Story = (args) => {
  return {
    template: `
      <div class="mb-5">Value: {{ value }}</div>
      <input [(ngModel)]="value"/>
    `,
    props: {
      ...args,
      value: 'Hello',
    },
  }
}

export const TemplateDriven = TemplateTemplateDriven.bind({})

const TemplateReactiveForms: Story = (args) => {
  return {
    template: `
      <div class="mb-5">Value: {{ control.value }}</div>
      <input [formControl]="control" />
    `,
    props: {
      ...args,
      control: new FormControl('Hello'),
    },
  }
}

export const ReactiveForms = TemplateReactiveForms.bind({})
