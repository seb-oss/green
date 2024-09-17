import{k as d}from"./lit-element-1d72f0ce.js";import"./container-def7f44d.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-b5b8efd2.js";import"./style-expression-property-0e3d4d40.js";import"./watch-c4961afe.js";const b={title:"Docs/Layout/Container",component:"gds-container",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-container` component is a container element that can be used to wrap other components.\n\n@extends `gds-flex`"}}}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},n={...g,name:"Container",render:p=>d` <gds-container> Container </gds-container>`},e={...g,name:"Margin",render:p=>d` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>`};var r,t,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Container',
  render: args => html\` <gds-container> Container </gds-container>\`
}`,...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var o,s,i,c,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Margin',
  render: args => html\` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>\`
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:'The `margin` property can be used to set the margin of the container.\n\nIt supports all the spacing tokens from the design system.\nThe margin can be set in the following ways:\n- `margin="auto"`: Center aligns the container.\n- `margin="auto 2xl 4xl auto"`: Sets the margin of the container in the following order: `top`, `right`, `bottom`, `left`.',...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};const w=["Container","ContainerMargin"];export{n as Container,e as ContainerMargin,w as __namedExportsOrder,b as default};
