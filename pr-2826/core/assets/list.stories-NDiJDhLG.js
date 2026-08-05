import{b as e}from"./iframe-BoD9ySFF.js";import{a as r}from"./argTableProps-B1kRh6pq.js";import"./list-item-CntHMV_F.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-betgIcuP.js";const l={title:"Components/List",component:"gds-list",subcomponents:{GdsListItem:"gds-list-item"},tags:["autodocs"],argTypes:{...r("gds-list")},parameters:{docs:{description:{component:"`gds-list` is a semantic list container for `gds-list-item` elements.\nIt extends `gds-flex` and defaults `flex-direction` to `column`.\n\n`gds-list-item` is a semantic container with no internal layout — just a\nmain slot in which layout elements can be projected.\n\n[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/list)"}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...i,render:()=>e`
    <gds-list>
      <gds-list-item>Item 1</gds-list-item>
      <gds-list-item>Item 2</gds-list-item>
      <gds-list-item>Item 3</gds-list-item>
    </gds-list>
  `},t={...i,render:()=>e`
    <gds-list dividers>
      <gds-list-item>Item 1</gds-list-item>
      <gds-list-item>Item 2</gds-list-item>
      <gds-list-item>Item 3</gds-list-item>
    </gds-list>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-list>
      <gds-list-item>Item 1</gds-list-item>
      <gds-list-item>Item 2</gds-list-item>
      <gds-list-item>Item 3</gds-list-item>
    </gds-list>
  \`
}`,...s.parameters?.docs?.source},description:{story:"A basic list with simple text items.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-list dividers>
      <gds-list-item>Item 1</gds-list-item>
      <gds-list-item>Item 2</gds-list-item>
      <gds-list-item>Item 3</gds-list-item>
    </gds-list>
  \`
}`,...t.parameters?.docs?.source},description:{story:"When `dividers` is set, borders are rendered between list items.",...t.parameters?.docs?.description}}};const c=["Basic","Dividers"];export{s as Basic,t as Dividers,c as __namedExportsOrder,l as default};
