import { Meta } from '@storybook/html'
import { story } from '../story'
const template =require('./template.ejs')

interface CardProps {
  headline: string
  body: string
  buttonText1: string
  buttonText2: string
}

export default {
  title: 'Card',
  argTypes: {
    headline: { control: 'text' },
    body: { control: 'text' },
    buttonText1: { control: 'text' },
    buttonText2: { control: 'text' },
  },
} as Meta

const Template = story<CardProps>(template, { buttonText1: '', buttonText2: '' })

export const Default = Template.bind({})
Default.args = {
  headline: 'Welcome to a card',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed volutpat, lorem nec convallis rutrum, orci metus tempor 
    felis, sit amet congue mi dui et lectus. Pellentesque 
    elementum libero vel varius dictum. Aenean nec odio nec tortor
    efficitur accumsan.`,
}

export const WithButtons = Template.bind({})
WithButtons.args = {
  headline: 'Welcome to a card',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed volutpat, lorem nec convallis rutrum, orci metus tempor 
    felis, sit amet congue mi dui et lectus. Pellentesque 
    elementum libero vel varius dictum. Aenean nec odio nec tortor
    efficitur accumsan.`,
  buttonText1: 'Do something',
  buttonText2: 'Do something else',
}
