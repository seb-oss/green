import { toggle } from './mock'

const Template = ({ label, checked }) => `
<div>
  <span id="slide-toggle-label-1">${label}</span>
  <button role="switch" aria-checked="${checked}" aria-labelledby="slide-toggle-label-1"></button>
</div>
`

export default {
  title: 'Components/Slide Toggle',

  parameters: {
    componentIds: ['component-slidetoggle'],
  },

  argTypes: {
    label: {
      control: 'text',
    },

    checked: {
      control: 'boolean',
    },
  },
}

export const SlideToggle = {
  render: Template.bind({}),
  name: 'Slide Toggle',

  args: {
    label: 'Toggle me',
    checked: false,
  },
}
