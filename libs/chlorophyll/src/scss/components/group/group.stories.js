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
