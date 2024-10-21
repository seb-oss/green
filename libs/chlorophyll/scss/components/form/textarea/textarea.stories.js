const Template = ({ validation, enabled, text, formInfo }) => {
  const attrValidation = validation ? `class="${validation}" ` : ``
  const attrEnabled = enabled ? `` : `disabled`
  const hasExtraInfo = formInfo.length > 0
  return `
    <div class="form-group">
      <label for="exampleTextarea">${text}</label>
      ${hasExtraInfo ? '<span class="form-info">' + formInfo + '</span>' : ''}
      <textarea id="exampleTextarea" ${attrValidation} ${attrEnabled}></textarea>
      <span class="form-info">${validation ? validation : 'Neutral'}</span>
    </div>`
}

export default {
  title: 'Components/Form/Elements/Textarea',

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

export const Textarea = {
  render: Template.bind({}),
  name: 'Textarea',

  args: {
    text: 'Textarea label',
    formInfo:
      'Lorem ipsum very long description of textarea and what should be entered',
    enabled: true,
  },
}
