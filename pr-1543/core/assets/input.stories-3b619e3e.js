import{k as c}from"./lit-element-1d72f0ce.js";import"./input-30ba0749.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./form-control-e1f3f4f4.js";import"./tokens.style-b5b8efd2.js";const B={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",multiline:!0}},e={...n,args:{maxlength:20}},t={...n,args:{label:"Simplified",variant:"simplified",clearable:!0}},s={...n,render:()=>c`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="message">Extended supporting text</span>
      </gds-input>
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="message">Extended supporting text</span>
      </gds-input>
    </gds-flex>
  `};var r,a,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    maxlength: 20
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Simplified',
    variant: 'simplified',
    clearable: true
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="message">Extended supporting text</span>
      </gds-input>
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="message">Extended supporting text</span>
      </gds-input>
    </gds-flex>
  \`
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const U=["Basic","Simplified","ExtendedSupportingText"];export{e as Basic,s as ExtendedSupportingText,t as Simplified,U as __namedExportsOrder,B as default};
