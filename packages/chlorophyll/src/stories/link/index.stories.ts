import { Meta } from '@storybook/html'
import { story } from '../story'
import template from './template.hbs'

interface LinkProps {
  className?: string
  innerText: string
  href: string
}

export default {
  title: 'Link',
  argTypes: {
    innerText: { control: 'text' },
    className: {
      control: 'select',
      options: ['none', 'button']
    },
    href: { control: 'text' },
  },
} as Meta

const Template = story<LinkProps>(template, { href: '#' })

export const Default = Template.bind({})
Default.args = {
  innerText: 'Normal link',
}

export const Button = Template.bind({})
Button.args = {
  innerText: 'Button link',
  className: 'button',
}
