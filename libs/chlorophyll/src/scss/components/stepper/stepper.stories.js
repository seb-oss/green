export default {
  title: 'Components/Stepper',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-stepper'],
  },
  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },
    disabled: {
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
  render: (args) => `
    <div class="gds-form-group">
        <label for="stepperInput">${args.text}</label>
        ${args.formInfo ? '<span class="form-info">' + args.formInfo + '</span>' : ''}
        <div class="group group-border group-stepper ${args.validation} ${args.disabled}">
            <button class="tertiary" ${args.attrEnabled}>-</button>
            <input id="stepperInput" type="number" placeholder="0" ${args.attrEnabled} />
            <button class="tertiary" ${args.attrEnabled}>+</button>
        </div>
        <span class="form-info">${args.validation ? args.validation : 'Neutral'}</span>
    </div>`,
  args: {
    text: 'Stepper label',
    formInfo: 'Lorem ipsum very long supporting text of what should be entered',
    enabled: true,
  },
}
