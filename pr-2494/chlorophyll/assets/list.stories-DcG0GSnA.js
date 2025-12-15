const k={title:"Components/List",tags:["autodocs"],parameters:{componentIds:["component-list"]}},e={render:()=>`
  <ul>
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>`},t={render:()=>`
  <ul class="check">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="check primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`]},s={render:()=>`
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
  </dl>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`],name:"(Deprecated) Value list"},i={render:()=>`
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
  </dl>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`],name:"(Deprecated) Horisontal Value list"},l={render:()=>`
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
  </figure>`,decorators:[d=>`<div style="display:flex;flex-direction: column;gap:1rem;">${d()}</div>`],name:"(Deprecated) List Group"};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => \`
  <ul>
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>\`
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,c,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => \`
  <ul class="check">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="check primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`]
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,v,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`
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
  </dl>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`],
  name: '(Deprecated) Value list'
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,m,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
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
  </dl>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`],
  name: '(Deprecated) Horisontal Value list'
}`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,y,L;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => \`
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
  </figure>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`],
  name: '(Deprecated) List Group'
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const V=["UnorderedList","CheckList","ValueList","HorisontalValueList","ListGroup"];export{t as CheckList,i as HorisontalValueList,l as ListGroup,e as UnorderedList,s as ValueList,V as __namedExportsOrder,k as default};
