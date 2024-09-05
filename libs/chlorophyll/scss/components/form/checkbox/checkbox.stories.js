const Template = ({ validation, enabled, checked, indeterminate, text }) => {
  const attrValidation = validation ? `class="${validation}" ` : ``
  const attrEnabled = enabled ? `` : `disabled`
  const attrChecked = checked ? `checked` : ``
  return `
    <script>
      document.getElementById("canvas-checkbox").indeterminate = ${indeterminate};
    </script>
    <label class="form-control">
      <input id="canvas-checkbox" type="checkbox" ${attrValidation} ${attrEnabled} ${attrChecked} />
      <span>${text}</span>
      <i></i>
    </label>`
}

export default {
  title: 'Components/Form/Elements/Checkbox',

  parameters: {
    componentIds: ['component-checkbox'],
  },

  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },

    enabled: {
      control: 'boolean',
    },

    checked: {
      control: 'boolean',
    },

    indeterminate: {
      control: 'boolean',
    },

    text: {
      control: 'text',
    },
  },
}

export const Checkbox = {
  render: Template.bind({}),
  name: 'Checkbox',

  args: {
    text: 'Click me!',
    enabled: true,
    checked: false,
    indeterminate: false,
  },

  parameters: {
    docs: {
      disable: true,
    },
  },
}
