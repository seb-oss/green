import{x as c}from"./lit-element-C_s9q329.js";import"./div-C3mzrM3A.js";import{g as m}from"./getArgTableCategories-DSxGb21L.js";import"./custom-element-scoping-BEGY3AqQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-CFvqdzpw.js";import"./style-expression-property-w7JDbrjA.js";import"./declarative-layout-mixins-DZOZCYEp.js";import"./custom-elements-DFJeCQ1z.js";const D={title:"Components/Div",component:"gds-div",tags:["autodocs"],argTypes:{...m("gds-div")},parameters:{docs:{description:{component:"@status beta\n\n`gds-div` is a base element in the declarative layout system. It accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`"}}}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...g},e={...g,render:l=>c`
    <gds-div display="flex" gap="xl" justify-content="center">
      <gds-div width="50px" height="50px" background="primary"></gds-div>
      <gds-div
        width="50px"
        height="50px"
        background="secondary"
        border="4xs"
      ></gds-div>
      <gds-div width="50px" height="50px" background="tertiary"></gds-div>
    </gds-div>
  `};var r,t,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var d,i,o,n,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-div display="flex" gap="xl" justify-content="center">
      <gds-div width="50px" height="50px" background="primary"></gds-div>
      <gds-div
        width="50px"
        height="50px"
        background="secondary"
        border="4xs"
      ></gds-div>
      <gds-div width="50px" height="50px" background="tertiary"></gds-div>
    </gds-div>
  \`
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source},description:{story:"Here is an example of a simple layout structure using `gds-div`:",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.description}}};const P=["Default","Example"];export{s as Default,e as Example,P as __namedExportsOrder,D as default};
