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
  <ul>
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>`,
}

export const CheckList = {
  render: () => `
  <ul class="check">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="check primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>`,
  decorators: [
    (story) =>
      `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`,
  ],
}

export const ValueList = {
  render: () => `
  <div class="alert-ribbon danger">
   <strong>This style is deprecated, please use the Core component <a href="https://storybook.seb.io/latest/core/?path=/docs/components-grouped-list--docs">Grouped List</a> instead.</strong>
  </div>
  <dl class="gds-list">
    <dt>First label</dt>
    <dd>First value</dd>
    <dt>Second label</dt>
    <dd>Second value</dd>
    <dt>Third label</dt>
    <dd>Third value</dd>
  </dl>`,
  decorators: [
    (story) =>
      `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`,
  ],
  name: '(Deprecated) Value list',
}

export const HorisontalValueList = {
  render: () => `
  <div class="alert-ribbon danger">
   <strong>This style is deprecated, please use the Core component <a href="https://storybook.seb.io/latest/core/?path=/docs/components-grouped-list--docs">Grouped List</a> instead.</strong>
  </div>
  <dl class="gds-list gds-list--horizontal">
    <dt>First label</dt>
    <dd>First value</dd>
    <dt>Second label</dt>
    <dd>Second value</dd>
    <dt>Third label</dt>
    <dd>Third value</dd>
  </dl>`,
  decorators: [
    (story) =>
      `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`,
  ],
  name: '(Deprecated) Horisontal Value list',
}

export const ListGroup = {
  render: () => `
  <div class="alert-ribbon danger">
   <strong>This style is deprecated, please use the Core component <a href="https://storybook.seb.io/latest/core/?path=/docs/components-grouped-list--docs">Grouped List</a> instead.</strong>
  </div>
  <figure>
    <figcaption class="table-list-caption">List group</figcaption>
    <dl>
      <div>
        <dt>First label</dt>
        <dd>First value</dd>
      </div>
      <div>
        <dt>Second label</dt>
        <dd>Value value</dd>
      </div>
      <div>
        <dt>Third label</dt>
        <dd>Value value</dd>
      </div>
    </dl>
  </figure>

  <figure>
    <figcaption class="table-list-caption">List group</figcaption>
    <dl>
      <div>
        <dt>First label</dt>
        <dd>First value</dd>
      </div>
      <div>
        <dt>Second label</dt>
        <dd>Second value</dd>
      </div>
      <div>
        <dt>Third label</dt>
        <dd>Third value</dd>
      </div>
    </dl>
  </figure>

  <figure>
    <figcaption class="table-list-caption">List group 2</figcaption>
    <dl>
      <div>
        <dt>First label</dt>
        <dd>Value 1</dd>
        <dd>Value 2</dd>
      </div>
      <div>
        <dt>Second label</dt>
        <dd>Value 1</dd>
        <dd>Value 2</dd>
      </div>
      <div>
        <dt>Third label</dt>
        <dd>Value 1</dd>
        <dd>Value 2</dd>
      </div>
    </dl>
  </figure>`,
  decorators: [
    (story) =>
      `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`,
  ],
  name: '(Deprecated) List Group',
}
