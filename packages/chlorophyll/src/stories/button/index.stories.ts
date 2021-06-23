import { Meta } from '@storybook/html'
import { story } from '../story'
import template from './template.hbs'

interface ButtonProps {
  className?: string
  type?: string
  innerText: string
  onClick?: () => void
}

export default {
  title: 'Button',
  argTypes: {
    type: {
      control: 'select',
      options: ['none', 'button', 'submit', 'reset']
    },
    className: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'ghost']
    },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template = story<ButtonProps>(template)

export const Default = Template.bind({})
Default.args = {
  innerText: 'Button',
}

export const Submit = Template.bind({})
Submit.args = {
  innerText: 'Submit',
  type: 'submit',
}

export const Primary = Template.bind({})
Primary.args = {
  innerText: 'Primary',
  className: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  innerText: 'Secondary',
  className: 'secondary',
}

export const Ghost = Template.bind({})
Ghost.args = {
  innerText: 'Ghost',
  className: 'ghost',
}
