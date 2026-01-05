export default {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-input'],
  },
  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    formInfo: {
      control: 'text',
    },
  },
}

export const Textarea = {
  render: (args) => `
    <div class="gds-form-group">
      <label for="exampleTextarea">${args.label}</label>
      ${args.formInfo ? '<span class="form-info">' + args.formInfo + '</span>' : ''}
      <textarea id="exampleTextarea" class="${args.validation}" ${args.disabled}></textarea>
      <span class="form-info">${args.validation ? args.validation : 'Neutral'}</span>
    </div>`,
  args: {
    label: 'Textarea label',
    formInfo:
      'Lorem ipsum very long description of textarea and what should be entered',
  },
}
