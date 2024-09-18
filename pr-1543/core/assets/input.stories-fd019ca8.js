import{k as a}from"./lit-element-1d72f0ce.js";import"./input-68309be9.js";import"./badge-14ea8264.js";import"./flex-265a890a.js";import"./divider-c2c10b07.js";import"./credit-card-aed5fef2.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./constrain-slots-08d8606c.js";import"./watch-c4961afe.js";import"./button-c89fd615.js";import"./static-c0094392.js";import"./if-defined-5f576255.js";import"./class-map-f04c1558.js";import"./transitional-styles-8ea9588a.js";import"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./triangle-exclamation-da39395f.js";import"./container-888f3969.js";import"./style-expression-property-0e3d4d40.js";import"./text-4793c6cc.js";const Te={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
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
        <gds-text tag="h2">Small</gds-text>
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
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Custom error message"];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Custom error message"];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `},l={...t,name:"Variant: Default"},s={...t,name:"Variant: Simplified",args:{label:"Simplified",variant:"simplified"}},i={...t,name:"Slot: Lead",render:()=>a`
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
  `},u={...t,name:"Supporting Text",args:{label:"Label",supportingText:"Supporting text"}},g={...t,name:"Extended Supporting Text",render:()=>a`
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
  `},p={...t,name:"Validation",render:()=>a`
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
        <gds-text tag="h2">Small</gds-text>
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
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
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
          size="small"
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
    </gds-flex>
  \`
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,b,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Variant: Default'
}`,...(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var h,S,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Variant: Simplified',
  args: {
    label: 'Simplified',
    variant: 'simplified'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,E,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Lead Icon">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  \`
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var D,C,P;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Trail Badge" variant="default">
        <gds-badge variant="information" slot="trail">KR</gds-badge>
      </gds-input>
    </gds-flex>
  \`
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,$,z;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  args: {
    maxlength: 20
  }
}`,...(z=($=n.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var M,w,I;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Label text" clearable></gds-input>
    </gds-flex>
  \`
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,q,A;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  args: {
    label: 'Label',
    supportingText: 'Supporting text'
  }
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var B,K,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(K=g.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,_,F;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,j,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Multiline',
  args: {
    label: 'Multiline',
    supportingText: 'Supporting text',
    multiline: true
  }
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const Ee=["All","Basic","Simplified","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","Multiline"];export{r as All,l as Basic,o as Clearable,g as ExtendedSupportingText,i as Lead,n as Length,c as Multiline,s as Simplified,u as SupportingText,d as Trail,p as Validation,Ee as __namedExportsOrder,Te as default};
