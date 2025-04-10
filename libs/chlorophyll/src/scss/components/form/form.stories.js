export default {
  title: 'Components/Form',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-form'],
  },
  argTypes: {},
}

export const Disabled = {
  render: (args) => `
   <form class="mw-xs">
      <div class="gds-form-group">
        <label class="gds-label" for="inputValid1">Input group label</label>
        <span class="gds-form-info">Lorem ipsum group description</span>
        <input id="inputValid1" class="gds-input" type="text" disabled required value="Disabled" />
      </div>

      <div class="gds-form-group">
        <label class="gds-label" for="inputValid2">Input group label</label>
        <span class="gds-form-info">
          Example with aria-disabled="true" and .disabled
        </span>
        <div class="gds-group">
          <input id="inputValid2" class="gds-input" type="text" required aria-disabled="true" placeholder="Placeholder" />
          <input id="inputValid3" class="gds-input disabled" type="text" required />
          <button type="button" class="gds-button" disabled aria-disabled="true">
            Button
          </button>
        </div>
      </div>

      <div class="gds-form-group">
        <label class="gds-label" for="inputValid4">Input group label</label>
        <span class="gds-form-info">Lorem ipsum group description</span>
        <div class="gds-group group-border disabled">
          <input id="inputValid4" class="gds-input" type="text" required disabled />
          <input id="inputValid5" class="gds-input" type="text" required aria-disabled="true" />
          <button type="button" class="gds-button" disabled>
            Button
          </button>
        </div>
      </div>

      <div class="gds-form-group">
        <fieldset aria-describedby="checkboxGroupHelp1">
          <legend>Invalid checkbox group</legend>
          <span id="checkboxGroupHelp1" class="gds-form-info">
            Checkbox group description
          </span>
          <label class="gds-form-control">
            <input required type="checkbox" disabled />
            <span>One</span>
            <i />
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" disabled />
            <span>Two</span>
            <i />
          </label>
          <label class="gds-form-control">
            <input required type="checkbox" checked="true" disabled />
            <span>Three</span>
            <i />
          </label>
        </fieldset>
      </div>

      <div class="gds-form-group">
        <fieldset aria-describedby="radioGroupHelp1">
          <legend>Disabled radio group</legend>
          <span id="radioGroupHelp1" class="gds-form-info">
            Radio group description
          </span>
          <label class="gds-form-control">
            <input required type="radio" disabled checked="checked" />
            <span>One</span>
            <i />
          </label>
          <label class="gds-form-control">
            <input required type="radio" disabled />
            <span>Two</span>
            <i />
          </label>
        </fieldset>
      </div>

      <div class="row justify-content-end">
        <div class="col col-sm-auto">
          <button type="button" class="gds-button secondary" disabled>
            Cancel
          </button>
        </div>
        <div class="col col-sm-auto">
          <button type="submit" class="gds-button" disabled>
            Submit
          </button>
        </div>
      </div>
    </form>`,
  args: {},
  parameters: {},
}

export const FormInfoBeforeInput = {
  render: (args) => `
  <div class="gds-form-group">
    <label class="gds-label" for="formInput1">Input</label>
    <span class="gds-form-info" id="formInfo1">
      Some info or help
    </span>
    <input id="formInput1" type="text" class="gds-input" aria-describedby="formInfo1" />
  </div>`,
  args: {},
  parameters: {},
}

export const FormInfoAfterInput = {
  render: (args) => `
  <form class="gds-form-horizontal">
    <div class="gds-form-group">
      <label class="gds-label" for="formInput2">Input</label>
      <input id="formInput2" type="text" class="gds-input" aria-describedby="formInfo2" />
      <span class="gds-form-info" id="formInfo2">
        Some info or help
      </span>
    </div>
    <div class="gds-form-group was-validated">
      <label class="gds-label" for="formInput2a">Valid input</label>
      <input id="formInput2a" type="text" class="gds-input is-valid" aria-describedby="formInfo2a" />
      <span class="gds-form-info" id="formInfo2a">
        When input is valid
      </span>
    </div>
    <div class="gds-form-group was-validated">
      <label class="gds-label" for="formInput2b">Invalid input</label>
      <input id="formInput2b" type="text" class="gds-input is-invalid" aria-describedby="formInfo2b" />
      <span class="gds-form-info" id="formInfo2b">
        When input is invalid
      </span>
    </div>
  </form>`,
  args: {},
  parameters: {},
}

export const FormText = {
  render: (args) => `
  <span class="gds-form-text">Some text</span>`,
  args: {},
  parameters: {},
}

export const FormLayout = {
  render: (args) => `
  <form>
    <div class="gds-form-group">
      <label for="horizontalInput" class="gds-label">Input label</label>
      <input type="text" id="horizontalInput" class="gds-input" placeholder="Regular input" />
    </div>
    <div class="gds-form-group">
      <button class="gds-button">Medium</button>
    </div>
    <div class="gds-form-group">
      <fieldset>
        <label class="gds-form-control">
          <input required type="checkbox" />
          <span>Check me!</span>
          <i></i>
        </label>
      </fieldset>
    </div>
    <div class="gds-form-group">
      <span class="gds-form-text">Static text</span>
    </div>
  </form>`,
  args: {},
  parameters: {},
}

export const FormHorizontalLayout = {
  render: (args) => `
  <form class="gds-form-horizontal">
    <div class="gds-form-group">
      <label for="horizontalInput" class="gds-label">Input label</label>
      <input type="text" id="horizontalInput" class="gds-input" placeholder="Regular input" />
    </div>
    <button class="gds-button">Medium</button>
    <label class="gds-form-control">
      <input required type="checkbox" />
      <span>Check me!</span>
      <i></i>
    </label>
    <span class="gds-form-text">Static text</span>
  </form>`,
  args: {},
  parameters: {},
}

export const SizeSmall = {
  render: (args) => `
  <form>
    <div class="gds-form-group">
      <label for="smInput" class="gds-label">Input label</label>
      <input type="text" id="smInput" class="gds-input small" placeholder="Small input" />
    </div>
    <button class="gds-button small">Small</button>
    <span class="gds-form-text small">Static text</span>
  </form>`,
  args: {},
  parameters: {},
}

export const SizeLarge = {
  render: (args) => `
  <form>
    <div class="gds-form-group">
      <label for="lgInput" class="gds-label">Input label</label>
      <input type="text" id="lgInput" class="gds-input large" placeholder="Large input" />
    </div>
    <button class="gds-button large">Large</button>
    <span class="gds-form-text large">Static text</span>
  </form>`,
  args: {},
  parameters: {},
}

export const FormWithValidation = {
  render: (args) => `
  <form autocomplete="off" class="was-validated">
    <div class="gds-form-group">
      <label for="input" class="gds-label">Input label</label>
      <input id="input" type="text" class="gds-input" required />
      <span class="gds-form-info">Field is required!</span>
    </div>
    <div class="gds-form-group">
      <label for="inputLong" class="gds-label">Input label</label>
      <input id="inputLong" type="text" class="gds-input" required />
      <span class="gds-form-info">
        Field is required! Very long error message, lorem ipsum dolar sit amet.
      </span>
    </div>
    <div class="gds-form-group">
      <label for="numberInput" class="gds-label">Input label</label>
      <input id="numberInput" type="number" class="gds-input" min="1" max="5" required />
      <span class="gds-form-info">Invalid number!</span>
    </div>
  </form>`,
  args: {},
  parameters: {},
}

export const GroupAndFormControl = {
  render: () => `
  <form>
    <div class="gds-form-group">
      <label class="gds-label" for="inputValid1">Input group label</label>
      <span class="gds-form-info">Lorem ipsum group description</span>
      <div class="gds-group is-invalid">
        <input id="inputValid1" class="gds-input" type="text" required />
        <input id="inputValid2" class="gds-input" type="text" required />
        <button type="button" class="gds-button">Button</button>
      </div>
      <span class="gds-form-info">Error</span>
    </div>
    <div class="gds-form-group">
      <label class="gds-label" for="inputValid3">Input group label</label>
      <span class="gds-form-info">Lorem ipsum group description</span>
      <div class="gds-group group-border is-invalid">
        <input id="inputValid3" class="gds-input" type="text" required />
        <input id="inputValid4" class="gds-input" type="text" required />
        <button type="button" class="gds-button">Button</button>
      </div>
      <span class="gds-form-info">Error</span>
    </div>
    <div class="gds-form-group">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span id="checkboxGroupHelp1" class="gds-form-info">
          Checkbox group description
        </span>
        <div>
          <label class="gds-form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>One</span>
            <i></i>
          </label>
          <label class="gds-form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="gds-form-info">Error</span>
    </div>
  </form>`,
  args: {},
  parameters: {},
}
