import { render } from '@testing-library/angular'

export default {
  title: 'Components/List',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-list'],
  },
}

export const UnorderedList = {
  render: () => `
  <ul class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>`,
}

export const OrderedList = {
  render: () => `
  <ol class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ol>`,
}

export const CheckList = {
  render: () => `
  <ul class="gds-list check-list">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="gds-list check-list primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>`,
  decorators: [
    (story) =>
      `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`,
  ],
}
