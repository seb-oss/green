export default {
  title: 'Components/Group',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-input'],
  },
}

export const Input = {
  render: () => `
    <div class="gds-group">
  <input type="text" placeholder="Input field" class="gds-input" />
  <button type="button" class="gds-button">Normal button</button>
</div>`,
}
export const Inputs = {
  render: () => `
    <form>
  <div class="gds-form-group">
    <div class="gds-group">
      <input type="text" placeholder="First input field" class="gds-input" />
      <input type="text" placeholder="Second input field" class="gds-input" />
      <input type="text" placeholder="Third input field" class="gds-input" />
    </div>
  </div>

  <div class="gds-form-group">
    <div class="gds-group is-invalid">
      <input type="text" placeholder="Forth input field" class="gds-input" />
      <input type="text" placeholder="Fifth input field" class="gds-input" />
      <input type="text" placeholder="Sixth input field" class="gds-input" />
    </div>
    <span class="gds-form-info">Error</span>
  </div>
</form>`,
}
export const ButtonGroup = {
  render: () => `
    <div class="gds-group">
      <button type="button" class="gds-button secondary">First button</button>
      <button type="button" class="gds-button secondary">Second button</button>
      <button type="button" class="gds-button secondary active">Third button</button>
    </div>
    <br>
    <div class="gds-group size-sm">
      <button type="button" class="gds-button ghost-dark">First button</button>
      <button type="button" class="gds-button ghost-dark">Second button</button>
      <button type="button" class="gds-button ghost-dark active">Third button</button>
      <button type="button" class="gds-button ghost-dark">Forth button</button>
    </div>`,
}

export const StaticText = {
  render: () => `
    <form>
      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus">
          <input type="text" placeholder="Normal input" class="gds-input" />
          <span class="gds-form-text">First static</span>
        </div>
      </div>

      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus is-valid">
          <input type="text" placeholder="Successful input" class="gds-input" />
          <span class="gds-form-text">Second static</span>
        </div>
        <span class="gds-form-info">Success</span>
      </div>

      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus is-invalid">
          <input type="text" placeholder="Erroneous input" class="gds-input" />
          <span class="gds-form-text">Third static</span>
        </div>
        <span class="gds-form-info">Error</span>
      </div>
    </form>`,
}

export const InputAndButtons = {
  render: () => `
    <div class="gds-group gds-group-border">
      <input type="text" placeholder="Input and buttons" class="gds-input" />
      <button type="button" class="gds-button secondary">Default button</button>
      <button type="button" class="gds-button primary">Primary button</button>
    </div>`,
}

export const Sizes = {
  render: () => `
  <div class="gds-group size-sm">
    <input type="text" placeholder="Small input" class="gds-input small" />
    <button type="button" class="gds-button primary small">Small button</button>
  </div>
  <br>
  <br>
  <div class="gds-group">
    <input type="text" placeholder="Normal input" class="gds-input" />
    <button type="button" class="gds-button primary">Normal button</button>
  </div>
  <br>
  <br>
  <div class="gds-group size-lg">
    <input type="text" placeholder="Large input" class="gds-input large" />
    <button type="button" class="gds-button primary large">Large button</button>
  </div>`,
}
