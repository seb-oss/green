const Template = ({ validation, enabled, text, formInfo }) => {
  const attrValidation = validation ? validation : ``
  const attrEnabled = enabled ? `` : `disabled`
  const hasExtraInfo = formInfo.length > 0
  return `
    <div class="form-group">
        <label for="stepperInput">${text}</label>
        ${hasExtraInfo ? '<span class="form-info">' + formInfo + '</span>' : ''}
        <div class="group group-border group-stepper ${attrValidation} ${attrEnabled}">
            <button class="tertiary" ${attrEnabled}>-</button>
            <input id="stepperInput" type="number" placeholder="0" ${attrEnabled} />
            <button class="tertiary" ${attrEnabled}>+</button>
        </div>
        <span class="form-info">${validation ? validation : 'Neutral'}</span>
    </div>`
}

export default {
  title: 'Components/Form/Elements/Stepper',

  parameters: {
    componentIds: ['component-stepper'],
  },

  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },

    enabled: {
      control: 'boolean',
    },

    text: {
      control: 'text',
    },

    formInfo: {
      control: 'text',
    },
  },
}

export const Stepper = {
  render: Template.bind({}),
  name: 'Stepper',

  args: {
    text: 'Stepper label',
    formInfo:
      'Lorem ipsum very long description of stepper and what should be entered',
    enabled: true,
  },
}
