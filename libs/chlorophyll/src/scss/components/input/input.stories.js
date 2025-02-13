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

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/form/input)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-input)
 */
export const Input = {
  render: (args) => `
<div class="gds-form-group">
  <label for="inputInvalid" class="gds-label">${args.text}</label>
  ${args.formInfo ? '<span class="gds-form-info">' + args.formInfo + '</span>' : ''}
  <input id="inputInvalid" type="text" class="gds-input ${args.validation}" ${args.disabled ? 'disabled' : ''} />
  <span class="gds-form-info">${args.validation ? args.validation : ''}</span>
</div>`,
  args: {
    text: 'Input label',
    formInfo:
      'Lorem ipsum very long description of input and what should be entered',
    enabled: true,
  },
}
