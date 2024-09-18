import{k as a}from"./lit-element-1d72f0ce.js";import"./input-a79b48e2.js";import"./badge-14ea8264.js";import"./flex-e77ecaa5.js";import"./divider-c2c10b07.js";import"./credit-card-aed5fef2.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./button-c89fd615.js";import"./static-c0094392.js";import"./if-defined-5f576255.js";import"./class-map-f04c1558.js";import"./transitional-styles-8ea9588a.js";import"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./triangle-exclamation-da39395f.js";import"./container-43da555d.js";import"./style-expression-property-0e3d4d40.js";import"./text-4793c6cc.js";const ye={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",multiline:!1}},r={...t,name:"All",render:()=>a`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex gap="xl">
        <gds-input label="Label" supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Custom error message"];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Custom error message"];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input label="Label" disabled supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `},s={...t,name:"Variant: Default"},l={...t,name:"Variant: Simplified",args:{label:"Simplified",variant:"simplified"}},i={...t,name:"Slot: Lead",render:()=>a`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Lead Icon">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `},d={...t,name:"Slot: Trail",render:()=>a`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Trail Badge" variant="default">
        <gds-badge variant="information" slot="trail">KR</gds-badge>
      </gds-input>
    </gds-flex>
  `},n={...t,name:"Length",args:{maxlength:20}},o={...t,name:"Clearable",render:()=>a`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Label text" clearable></gds-input>
    </gds-flex>
  `},p={...t,name:"Supporting Text",args:{label:"Label",supportingText:"Supporting text"}},u={...t,name:"Extended Supporting Text",render:()=>a`
    <gds-flex gap="xl">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},g={...t,name:"Validation",render:()=>a`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Make sure text is at least 12 characters long."
        show-extended-supporting-text
        length="12"
        .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Custom error message"];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
      >
      </gds-input>
    </gds-flex>
  `},c={...t,name:"Multiline",args:{label:"Multiline",supportingText:"Supporting text",multiline:!0}};var m,x,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'All',
  render: () => html\`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex gap="xl">
        <gds-input label="Label" supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Custom error message'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Custom error message'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input label="Label" disabled supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  \`
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,v,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Variant: Default'
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var h,S,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Variant: Simplified',
  args: {
    label: 'Simplified',
    variant: 'simplified'
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var y,D,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Lead Icon">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  \`
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,P,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Trail Badge" variant="default">
        <gds-badge variant="information" slot="trail">KR</gds-badge>
      </gds-input>
    </gds-flex>
  \`
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var V,M,$;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  args: {
    maxlength: 20
  }
}`,...($=(M=n.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var w,I,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Label text" clearable></gds-input>
    </gds-flex>
  \`
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var q,z,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  args: {
    label: 'Label',
    supportingText: 'Supporting text'
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,K,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
    <gds-flex gap="xl">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  \`
}`,...(R=(K=u.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,_,F;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Make sure text is at least 12 characters long."
        show-extended-supporting-text
        length="12"
        .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Custom error message'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
      >
      </gds-input>
    </gds-flex>
  \`
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,j,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Multiline',
  args: {
    label: 'Multiline',
    supportingText: 'Supporting text',
    multiline: true
  }
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const De=["All","Basic","Simplified","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","Multiline"];export{r as All,s as Basic,o as Clearable,u as ExtendedSupportingText,i as Lead,n as Length,c as Multiline,l as Simplified,p as SupportingText,d as Trail,g as Validation,De as __namedExportsOrder,ye as default};
