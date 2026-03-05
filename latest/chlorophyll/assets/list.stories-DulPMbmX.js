const p={title:"Components/List",tags:["autodocs"],parameters:{componentIds:["component-list"]}},e={render:()=>`
  <ul class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>`},r={render:()=>`
  <ol class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ol>`},s={render:()=>`
  <ul class="gds-list check-list">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="gds-list check-list primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>`,decorators:[u=>`<div style="display:flex;flex-direction: column;gap:1rem;">${u()}</div>`]};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => \`
  <ul class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>\`
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => \`
  <ol class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ol>\`
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,a,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
  <ul class="gds-list check-list">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="gds-list check-list primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`]
}`,...(h=(a=s.parameters)==null?void 0:a.docs)==null?void 0:h.source}}};const m=["UnorderedList","OrderedList","CheckList"];export{s as CheckList,r as OrderedList,e as UnorderedList,m as __namedExportsOrder,p as default};
