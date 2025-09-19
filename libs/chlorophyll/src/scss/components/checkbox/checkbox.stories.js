export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-checkbox'],
  },
  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },
    disabled: {
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
  render: (args) => `<label class="gds-form-control">
  <input id="canvas-checkbox" type="checkbox" class="${args.validation}"  ${args.disabled ? 'disabled' : ''} ${args.checked ? 'checked' : ''} />
  <span>${args.text}</span>
  <i></i>
</label>`,
  args: {
    text: 'Click me!',
    disabled: false,
    checked: false,
    indeterminate: false,
  },
  parameters: {},
}

export const Invalid = {
  render: () => `<div class="gds-form-group">
  <label class="gds-form-control was-validated is-invalid">
    <input type="checkbox" class="is-invalid" />
    <span>Invalid checkbox</span>
    <i></i>
  </label>
  <span class="gds-form-info">Error</span>
</div>`,
}

export const Group = {
  render: () => `<div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend class="sr-only">Hidden checkbox group legend</legend>
        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>Hidden legend one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Hidden legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `,
}

export const HorizontalGroup = {
  render: () => `
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Visible checkbox group legend</legend>
        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>Visible legend one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Visible legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `,
  name: 'HorizontalGroup',
  parameters: {},
}

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/form/checkbox)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-checkbox)
 */
export const Validation = {
  render: () => `
    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>
        <span id="checkboxGroupHelp" class="gds-form-info">
          Checkbox group description
        </span>
        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>Normal one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Normal two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Neutral</span>
    </div>
    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>
        <span id="checkboxGroupHelp1" class="gds-form-info">
          Checkbox group description
        </span>
        <div>
          <label class="gds-form-control">
            <input required class="is-valid" type="checkbox" />
            <span>Valid one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required class="is-valid" type="checkbox" required />
            <span>Valid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Valid</span>
    </div>
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="gds-form-info">Checkbox group description</span>
        <div>
          <label class="gds-form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Invalid one</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required class="is-invalid" type="checkbox" required />
            <span>Invalid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Error</span>
    </div>
  `,
}

export const HorizontalValidation = {
  render: () => `
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>        <span id="checkboxGroupHelp" class="gds-form-info">
          Checkbox group description
        </span>        <div>
          <label class="gds-form-control">
            <input required type="checkbox" />
            <span>One</span>
            <i></i>
          </label>          <label class="gds-form-control">
            <input required type="checkbox" required />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>      <span class="gds-form-info">Neutral</span>
    </div>    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>        <span id="checkboxGroupHelp1" class="gds-form-info">
          Checkbox group description
        </span>        <div>
          <label class="gds-form-control">
            <span>One</span>            <input required class="is-valid" type="checkbox" />            <i></i>
          </label>          <label class="gds-form-control">
            <span>Two</span>            <input required class="is-valid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="gds-form-info">Valid</span>
    </div>    <div class="gds-form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="gds-form-info">Checkbox group description</span>        <div>
          <label class="gds-form-control">
            <span>One</span>            <input required class="is-invalid" type="checkbox" />            <i></i>
          </label>          <label class="gds-form-control">
            <span>Two</span>            <input required class="is-invalid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="gds-form-info">Error</span>
    </div>
  `,
  name: 'HorizontalValidation',
  parameters: {},
}
