import{x}from"./lit-element-C_s9q329.js";import"./div-CwAlVl-X.js";import{g as C}from"./getArgTableCategories-B1vQrk6Y.js";import"./custom-element-scoping-BEGY3AqQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-CFvqdzpw.js";import"./style-expression-property-w7JDbrjA.js";import"./declarative-layout-mixins-DZOZCYEp.js";import"./custom-elements-CDAq52np.js";const I={title:"Components/Div",component:"gds-div",tags:["autodocs"],argTypes:{...C("gds-div")},parameters:{docs:{description:{component:"The `gds-container` component is a container element that can be used to wrap other components.\n\n@extends `gds-flex`"}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...r},e={...r,name:"Margin",render:y=>x` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>`},n={...r,name:"Padding",render:y=>x` <gds-container padding="xl s md xs"> Container </gds-container>`};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,d,c,m,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Margin',
  render: args => html\` <gds-container margin="auto 2xl 4xl auto">
      Container
    </gds-container>\`
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:'The `margin` property can be used to set the margin of the container.\n\nIt supports all the spacing tokens from the design system.\nThe margin can be set in the following ways:\n- `margin="auto"`: Center aligns the container.\n- `margin="auto 2xl 4xl auto"`: Sets the margin of the container in the following order: `top`, `right`, `bottom`, `left`.',...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var p,l,u,h,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Padding',
  render: args => html\` <gds-container padding="xl s md xs"> Container </gds-container>\`
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:'The `padding` property can be used to set the padding of the container.\n\nIt supports all the spacing tokens from the design system.\nThe padding can be set in the following ways:\n- `padding="auto"`: Center aligns the container.\n- `padding="auto 2xl 4xl auto"`: Sets the padding of the container in the following order: `top`, `right`, `bottom`, `left`.',...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const _=["Default","ContainerMargin","PaddingMargin"];export{e as ContainerMargin,t as Default,n as PaddingMargin,_ as __namedExportsOrder,I as default};
