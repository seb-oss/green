import{x as r}from"./lit-element-C_s9q329.js";import"./container-Cse-xpk8.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-D447YQ0G.js";import"./style-expression-property-CYg4CGI6.js";const T={title:"Components/Container",component:"gds-container",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-container` component is a container element that can be used to wrap other components.\n\n@extends `gds-flex`"}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...a,name:"Container",render:o=>r`<gds-container> Container </gds-container>`},n={...a,name:"Margin",render:o=>r` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>`},e={...a,name:"Padding",render:o=>r` <gds-container padding="xl s md xs"> Container </gds-container>`};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Container',
  render: args => html\`<gds-container> Container </gds-container>\`
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,g,m,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Margin',
  render: args => html\` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>\`
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source},description:{story:'The `margin` property can be used to set the margin of the container.\n\nIt supports all the spacing tokens from the design system.\nThe margin can be set in the following ways:\n- `margin="auto"`: Center aligns the container.\n- `margin="auto 2xl 4xl auto"`: Sets the margin of the container in the following order: `top`, `right`, `bottom`, `left`.',...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var u,h,f,x,C;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Padding',
  render: args => html\` <gds-container padding="xl s md xs"> Container </gds-container>\`
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:'The `padding` property can be used to set the padding of the container.\n\nIt supports all the spacing tokens from the design system.\nThe padding can be set in the following ways:\n- `padding="auto"`: Center aligns the container.\n- `padding="auto 2xl 4xl auto"`: Sets the padding of the container in the following order: `top`, `right`, `bottom`, `left`.',...(C=(x=e.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};const D=["Container","ContainerMargin","PaddingMargin"];export{t as Container,n as ContainerMargin,e as PaddingMargin,D as __namedExportsOrder,T as default};
