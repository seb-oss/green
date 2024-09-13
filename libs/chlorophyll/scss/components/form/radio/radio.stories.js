const Template = ({ validation, enabled, text1, text2 }) => {
  const attrValidation = validation ? `class="${validation}" ` : ``
  const attrEnabled = enabled ? `` : `disabled`
  return `
  <form>
    <div class="form-group">
      <fieldset>
        <legend>Radio group</legend>
        <div>
          <label class="form-control">
            <input type="radio" name="default" ${attrValidation} ${attrEnabled} />
            <span>${text1}</span><i></i>
          </label>
          <label class="form-control">
            <input type="radio" name="default" checked ${attrValidation} ${attrEnabled} />
            <span>${text2}</span><i></i>
          </label>
        </div>
      </fieldset>
    </div>
  </form>`
}

export default {
  title: 'Components/Form/Elements/Radio button',

  parameters: {
    componentIds: ['component-radiobutton'],
  },

  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },

    enabled: {
      control: 'boolean',
    },

    text1: {
      control: 'text',
    },

    text2: {
      control: 'text',
    },
  },
}

export const Radiobutton = {
  render: Template.bind({}),
  name: 'Radiobutton',

  args: {
    text1: 'Radiobutton 1',
    text2: 'Radiobutton 2',
    enabled: true,
  },
}
