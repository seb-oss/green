import { Stepper, StepperProps } from './stepper'

const Template = (props) => <Stepper {...props} />

export default {
  title: 'Components/Stepper',
  component: Stepper,
}

export const Default = {
  render: Template.bind({}),
  name: 'Stepper',

  parameters: {
    componentIds: ['component-stepper'],
  },

  args: {
    label: 'Label',
    description: 'Label information',
  },
}

export const BasicStepper = {
  name: 'Basic stepper',

  args: {
    label: 'Label',
  },
}

export const PrimitiveStepper = {
  name: 'Primitive Stepper',
}

export const StepperValidation = {
  name: 'Stepper validation',

  args: {
    value: 'Two',

    validator: {
      message: 'Must be a number',
      indicator: 'error',
    },
  },
}
