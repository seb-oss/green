import{k as c}from"./lit-element-1d72f0ce.js";import"./input-390b9bca.js";import"./badge-14ea8264.js";import"./flex-7f848c39.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./form-control-e1f3f4f4.js";import"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./circle-info-52fe3396.js";import"./static-c0094392.js";import"./style-expression-property-0e3d4d40.js";import"./container-43d463a2.js";const O={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",multiline:!0}},e={...o,args:{maxlength:20}},t={...o,args:{label:"Simplified",variant:"simplified",clearable:!0}},i={...o,render:()=>c`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        maxLength="20"
        variant="default"
      >
        <span slot="lead">LEAD</span>
        <gds-badge slot="trail">TRAIL</gds-badge>
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </gds-input>
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        maxLength="20"
        variant="simplified"
        multiline
      >
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
   
      <gds-input
        label="default "
        supporting-text="Supporting text"
        show-extended-supporting-text
        maxLength="20"
        variant="default"
      >
        <div slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </span>
      </gds-input>

 
    </gds-flex>
  `};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    maxlength: 20
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,r,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Simplified',
    variant: 'simplified',
    clearable: true
  }
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var u,l,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        maxLength="20"
        variant="default"
      >
        <span slot="lead">LEAD</span>
        <gds-badge slot="trail">TRAIL</gds-badge>
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </gds-input>
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        maxLength="20"
        variant="simplified"
        multiline
      >
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
   
      <gds-input
        label="default "
        supporting-text="Supporting text"
        show-extended-supporting-text
        maxLength="20"
        variant="default"
      >
        <div slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </span>
      </gds-input>

 
    </gds-flex>
  \`
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["Basic","Simplified","ExtendedSupportingText"];export{e as Basic,i as ExtendedSupportingText,t as Simplified,j as __namedExportsOrder,O as default};
