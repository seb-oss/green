import{k as u}from"./lit-element-1d72f0ce.js";import"./input-3f5adcc0.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./form-control-e1f3f4f4.js";import"./tokens.style-b5b8efd2.js";const B={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",multiline:!0}},e={...s,args:{maxlength:20}},t={...s,args:{label:"Simplified",variant:"simplified",clearable:!0}},r={...s,render:()=>u`
    <gds-input label="Label text" supporting-text="Supporting text" show-extended-supporting-text>
      <span slot="message">Extended supporting text</span>
    </gds-input>
  `};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    maxlength: 20
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Simplified',
    variant: 'simplified',
    clearable: true
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-input label="Label text" supporting-text="Supporting text" show-extended-supporting-text>
      <span slot="message">Extended supporting text</span>
    </gds-input>
  \`
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const U=["Basic","Simplified","ExtendedSupportingText"];export{e as Basic,r as ExtendedSupportingText,t as Simplified,U as __namedExportsOrder,B as default};
