const Template = ({ validation, enabled, checked, indeterminate, text }) => {
  const attrValidation = validation ? `class="${validation}" ` : ``
  const attrEnabled = enabled ? `` : `disabled`
  const attrChecked = checked ? `checked` : ``
  return `<label class="form-control">
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

  parameters: {},
}

export const Invalid = {
  render: () => `<div class="form-group">
  <label class="form-control was-validated is-invalid">
    <input type="checkbox" class="is-invalid" />

    <span>Invalid checkbox</span>

    <i />
  </label>

  <span class="form-info">Error</span>
</div>`,
}

export const Group = {
  render: () => `<div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend class="sr-only">Hidden checkbox group legend</legend>

        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Hidden legend one</span>
            <i />
          </label>

          <label class="form-control">
            <input required type="checkbox" required />
            <span>Hidden legend two</span>
            <i />
          </label>
        </div>
      </fieldset>
    </div>
  `,
}

export const HorizontalGroup = {
  render: () => `
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Visible checkbox group legend</legend>

        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Visible legend one</span>
            <i />
          </label>

          <label class="form-control">
            <input required type="checkbox" required />
            <span>Visible legend two</span>
            <i />
          </label>
        </div>
      </fieldset>
    </div>
  `,
  name: 'HorizontalGroup',
  parameters: {},
}

export const Validation = {
  render: () => `
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>

        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>

        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Normal one</span>
            <i />
          </label>

          <label class="form-control">
            <input required type="checkbox" required />
            <span>Normal two</span>
            <i />
          </label>
        </div>
      </fieldset>

      <span class="form-info">Neutral</span>
    </div>

    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>

        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>

        <div>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" />
            <span>Valid one</span>
            <i />
          </label>

          <label class="form-control">
            <input required class="is-valid" type="checkbox" required />
            <span>Valid two</span>
            <i />
          </label>
        </div>
      </fieldset>

      <span class="form-info">Valid</span>
    </div>

    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>

        <div>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Invalid one</span>
            <i />
          </label>

          <label class="form-control">
            <input required class="is-invalid" type="checkbox" required />
            <span>Invalid two</span>
            <i />
          </label>
        </div>
      </fieldset>

      <span class="form-info">Error</span>
    </div>
  `,
  name: 'Validation',
  parameters: {},
}

export const HorizontalValidation = {
  render: () => `
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>

        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>

        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>One</span>
            <i></i>
          </label>

          <label class="form-control">
            <input required type="checkbox" required />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>

      <span class="form-info">Neutral</span>
    </div>

    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>

        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>

        <div>
          <label class="form-control">
            <span>One</span>

            <input required class="is-valid" type="checkbox" />

            <i></i>
          </label>

          <label class="form-control">
            <span>Two</span>

            <input required class="is-valid" type="checkbox" required />

            <i></i>
          </label>
        </div>
      </fieldset>

      <span class="form-info">Valid</span>
    </div>

    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>

        <div>
          <label class="form-control">
            <span>One</span>

            <input required class="is-invalid" type="checkbox" />

            <i></i>
          </label>

          <label class="form-control">
            <span>Two</span>

            <input required class="is-invalid" type="checkbox" required />

            <i></i>
          </label>
        </div>
      </fieldset>

      <span class="form-info">Error</span>
    </div>
  `,
  name: 'HorizontalValidation',
  parameters: {},
}
