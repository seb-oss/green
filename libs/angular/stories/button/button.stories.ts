import { Story, Meta } from '@storybook/angular'
import Documentation from './documentation.mdx'

export default {
  title: 'Components/Form/Button',
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-button']
  },
} as Meta

const Template: Story = (args) => {
  //eslint-disable-next-line
  let counter = 0;

  return {
    template: `
      <div class="mb-5" *ngIf="counter > 0">Button was clicked {{counter}} times</div>
      <button (click)="counter = counter + 1">Click me</button>
    `,
    props: {
      ...args,
      counter
    },
  }
}

export const Default = Template.bind({})

const TemplatePrimary: Story = (args) => {
  //eslint-disable-next-line
  let counter = 0;

  return {
    template: `
      <div class="mb-5" *ngIf="counter > 0">Button was clicked {{counter}} times</div>
      <button class="primary" (click)="counter = counter + 1">Click me</button>
    `,
    props: {
      ...args,
      counter
    },
  }
}

export const Primary = TemplatePrimary.bind({})