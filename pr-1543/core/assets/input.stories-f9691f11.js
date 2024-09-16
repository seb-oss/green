import{k as d}from"./lit-element-1d72f0ce.js";import"./input-fd2927d3.js";import"./badge-14ea8264.js";import"./flex-cb6e8ea5.js";import"./credit-card-aed5fef2.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./button-6eebc491.js";import"./static-c0094392.js";import"./if-defined-5f576255.js";import"./class-map-f04c1558.js";import"./transitional-styles-8ea9588a.js";import"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./circle-info-52fe3396.js";import"./container-67ac32c7.js";import"./style-expression-property-0e3d4d40.js";import"./text-99b3f55e.js";const de={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",multiline:!1}},t={...e,name:"Variant: Default"},a={...e,name:"Variant: Simplified",args:{label:"Simplified",variant:"simplified"}},r={...e,name:"Slot: Lead",render:()=>d`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Lead Icon">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `},n={...e,name:"Slot: Trail",render:()=>d`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Trail Badge" variant="default">
        <gds-badge variant="information" slot="trail">KR</gds-badge>
      </gds-input>
    </gds-flex>
  `},o={...e,name:"Length",args:{maxlength:20}},s={...e,name:"Clearable",render:()=>d`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Label text" clearable></gds-input>
    </gds-flex>
  `},i={...e,name:"Supporting Text",args:{label:"Label",supportingText:"Supporting text"}},l={...e,render:()=>d`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        variant="default"
      >
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </gds-input>
    </gds-flex>
  `};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Variant: Default'
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Variant: Simplified',
  args: {
    label: 'Simplified',
    variant: 'simplified'
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Lead Icon">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  \`
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var L,h,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Trail Badge" variant="default">
        <gds-badge variant="information" slot="trail">KR</gds-badge>
      </gds-input>
    </gds-flex>
  \`
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var D,P,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  args: {
    maxlength: 20
  }
}`,...(v=(P=o.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var y,C,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Label text" clearable></gds-input>
    </gds-flex>
  \`
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var q,B,V;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  args: {
    label: 'Label',
    supportingText: 'Supporting text'
  }
}`,...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var w,E,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        variant="default"
      >
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </gds-input>
    </gds-flex>
  \`
}`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const pe=["Basic","Simplified","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText"];export{t as Basic,s as Clearable,l as ExtendedSupportingText,r as Lead,o as Length,a as Simplified,i as SupportingText,n as Trail,pe as __namedExportsOrder,de as default};
