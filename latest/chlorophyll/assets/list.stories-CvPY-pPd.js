const i={title:"Components/List",tags:["autodocs"],parameters:{componentIds:["component-list"]}},s={render:()=>`
  <ul class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ul>`},d={render:()=>`
  <ol class="gds-list">
    <li>Unordered first</li>
    <li>Unordered second</li>
    <li>Unordered third</li>
  </ol>`},l={render:()=>`
  <ul class="gds-list check-list">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>
  <ul class="gds-list check-list primary">
    <li>Checked first</li>
    <li>Checked second</li>
    <li>Checked third</li>
  </ul>`,decorators:[e=>`<div style="display:flex;flex-direction: column;gap:1rem;">${e()}</div>`]},r=["UnorderedList","OrderedList","CheckList"];export{l as CheckList,d as OrderedList,s as UnorderedList,r as __namedExportsOrder,i as default};
