export default {
  title: 'Components/Input',
  tags: ['autodocs'],
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
  render: (args) => `
    <div class="form-group">
      <label for="inputInvalid">${args.text}</label>
      ${args.formInfo ? '<span class="form-info">' + args.formInfo + '</span>' : ''}
      <input id="inputInvalid" type="text" ${args.validation ? 'class="' + args.validation + '"' : ''} ${args.disabled ? 'disabled' : ''} />
      <span class="form-info">${args.validation ? args.validation : ''}</span>
    </div>`,
  args: {
    text: 'Input label',
    formInfo:
      'Lorem ipsum very long description of input and what should be entered',
    enabled: true,
  },
}
