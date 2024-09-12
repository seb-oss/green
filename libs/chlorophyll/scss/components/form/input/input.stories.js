const Template = ({ validation, enabled, text, formInfo }) => {
  const attrValidation = validation ? `class="${validation}" ` : ``
  const attrEnabled = enabled ? `` : `disabled`
  const hasExtraInfo = formInfo.length > 0
  return `
    <div class="form-group">
      <label for="inputInvalid">${text}</label>
      ${hasExtraInfo ? '<span class="form-info">' + formInfo + '</span>' : ''}
      <input id="inputInvalid" type="text" ${attrValidation} ${attrEnabled} />
      <span class="form-info">${validation ? validation : 'Neutral'}</span>
    </div>`
}

export default {
  title: 'Components/Form/Elements/Input',

  parameters: {
    componentIds: ['component-input'],
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

export const Input = {
  render: Template.bind({}),
  name: 'Input',

  args: {
    text: 'Input label',
    formInfo:
      'Lorem ipsum very long description of input and what should be entered',
    enabled: true,
  },
}
