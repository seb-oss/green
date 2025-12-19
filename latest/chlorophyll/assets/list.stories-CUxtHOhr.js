const e={title:"Components/List",tags:["autodocs"],parameters:{componentIds:["component-list"]}},t={render:()=>`
  <ul>
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>`},i={render:()=>`
  <ul class="check">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="check primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`]},l={render:()=>`
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
  </dl>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`],name:"(Deprecated) Value list"},s={render:()=>`
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
  </dl>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`],name:"(Deprecated) Horisontal Value list"},o={render:()=>`
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
  </figure>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`],name:"(Deprecated) List Group"},r=["UnorderedList","CheckList","ValueList","HorisontalValueList","ListGroup"];export{i as CheckList,s as HorisontalValueList,o as ListGroup,t as UnorderedList,l as ValueList,r as __namedExportsOrder,e as default};
