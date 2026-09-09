const l={title:"Components/List",tags:["autodocs"],parameters:{componentIds:["component-list"]}},e={render:()=>`
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
  </ul>`,decorators:[i=>`<div style="display:flex;flex-direction: column;gap:1rem;">${i()}</div>`]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <ul class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>\`
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <ol class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ol>\`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const d=["UnorderedList","OrderedList","CheckList"];export{s as CheckList,r as OrderedList,e as UnorderedList,d as __namedExportsOrder,l as default};
