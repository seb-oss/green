// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from '../projects/green-angular/src/lib/button/button/button.component';
import { ButtonComponent } from '../projects/green-angular/src/lib/button/button/button.component'


export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    classes: { control: 'text' },
    size: {
      control: 'select',
      options: ['none', 'size-sm', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'ghost'],
    },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
  template: `<sg-ng-button classes='${args.classes}' variant='${args.variant}' size='${args.size}'>${args.content}</sg-ng-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  content: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'size-lg',
  content: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'size-sm',
  content: 'Button',
};
