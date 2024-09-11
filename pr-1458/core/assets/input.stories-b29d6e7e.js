import{x as u}from"./lit-element-2a5e401f.js";import"./input-770f5af1.js";import"./gds-element-90c5f05b.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-87c9e354.js";import"./directive-helpers-5872e68c.js";import"./async-directive-71ec3066.js";import"./directive-12249aa5.js";import"./when-cf7256a5.js";import"./lit-localize-87611c26.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./form-control-341856bb.js";import"./tokens.style-681e2422.js";const U={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",multiline:!0}},e={...s,args:{maxlength:20}},t={...s,args:{label:"Simplified",variant:"simplified",clearable:!0}},r={...s,render:()=>u`
    <gds-input
      label="Label text"
      supporting-text="Supporting text"
      show-extended-supporting-text
    >
      <span slot="message">Extended supporting text</span>
    </gds-input>
  `};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    maxlength: 20
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Simplified',
    variant: 'simplified',
    clearable: true
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-input
      label="Label text"
      supporting-text="Supporting text"
      show-extended-supporting-text
    >
      <span slot="message">Extended supporting text</span>
    </gds-input>
  \`
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _=["Basic","Simplified","ExtendedSupportingText"];export{e as Basic,r as ExtendedSupportingText,t as Simplified,_ as __namedExportsOrder,U as default};
