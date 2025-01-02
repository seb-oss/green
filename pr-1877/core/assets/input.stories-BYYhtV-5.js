import{x as a}from"./lit-element-C_s9q329.js";import"./input-DPEPcsan.js";import"./badge-B7pEuVzS.js";import"./flex-DnAdyWkx.js";import"./divider-B4sL62Bm.js";import"./credit-card-V3vs1n1r.js";import"./magnifying-glass-zSavWvzJ.js";import"./people-profile-DTi2859C.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-B8fm5KIw.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./field-base-C3nKzmfH.js";import"./when-BR7zwNJC.js";import"./button-DnilZTBH.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-B6Zq2CtY.js";import"./transitional-styles-DL4r0Z8_.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-di0WtSeu.js";import"./icon-BAGUC4Iy.js";import"./card-XqiHdOAu.js";import"./style-expression-property-CYg4CGI6.js";import"./container-C9hIB2Az.js";import"./map-DiiNQ3pp.js";import"./cross-small-CgIxxlLH.js";import"./theme-BF9mlNuE.js";const Ge={title:"Components/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`Input are used to let the user enter text or numbers in a form.

@status beta`}}},tags:["autodocs"],argTypes:{value:{control:"text"},variant:{options:["default"],control:{type:"select"}},size:{options:["large","small"],control:{type:"select"}},invalid:{control:"boolean"}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label",variant:"default",size:"large",supportingText:"Label support text.",innerHTML:'<gds-icon-people-profile slot="lead"></gds-icon-people-profile>'}},c={...t,name:"Default"},n={...t,name:"Size",render:()=>a`
    <gds-flex width="800px" gap="4xl" align-items="flex-start">
      <gds-input label="Lead Icon" size="small">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Lead Icon"
        supporting-text="Example support text"
        size="small"
        clearable
        .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},r={...t,name:"Slot: Lead",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  `},i={...t,name:"Slot: Trail",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="10,000.00"
        clearable
      >
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-input>
    </gds-flex>
  `},s={...t,name:"Length",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-input>
    </gds-flex>
  `},l={...t,name:"Clearable",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  `},o={...t,name:"Supporting Text",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  `},d={...t,name:"Extended Supporting Text",render:()=>a`
    <gds-flex gap="xl" width="800px">
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
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          clearable
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long. "]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `},u={...t,name:"Disabled",render:()=>a`
    <gds-flex gap="xl">
      <gds-input label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `};var g,m,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default'
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,f,h,v,L;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <gds-flex width="800px" gap="4xl" align-items="flex-start">
      <gds-input label="Lead Icon" size="small">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Lead Icon"
        supporting-text="Example support text"
        size="small"
        clearable
        .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  \`
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the input field.<br>\n**@property size** - The size of the input field.\n\n```html\n <gds-input size=\"small\"></gds-input>\n```",...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var y,S,E,w,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  \`
}`,...(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the input field.\n\n```html\n <gds-input label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-input>```',...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var D,I,z,N,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="10,000.00"
        clearable
      >
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-input>
    </gds-flex>
  \`
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the input field.\n\n```html\n <gds-input label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-input>```',...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var q,C,$,V,A;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-input>
    </gds-flex>
  \`
}`,...($=(C=s.parameters)==null?void 0:C.docs)==null?void 0:$.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the input field.<br> A badge will be displayed, updating as the input approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the input field.\n\n```html\n <gds-input maxLength="20"></gds-input>\n```',...(A=(V=s.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var U,_,j,k,G;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  \`
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the input field.\n\n```html\n <gds-input label="Label text" value="Clear this text" clearable></gds-input>\n```',...(G=(k=l.parameters)==null?void 0:k.docs)==null?void 0:G.description}}};var H,M,O,W,B;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  \`
}`,...(O=(M=o.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the input field.\n\n**@property supporting-text** - Additional information about the input field.\n\n```html\n  <gds-input label="Label text" supporting-text="Supporting text"></gds-input>\n```',...(B=(W=o.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var F,J,K,Q,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
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
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the input field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the input field.\n\n```html\n<gds-input label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-input>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-input show-extended-supporting-text></gds-input>\n```',...(R=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var X,Y,Z,ee,te;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex flex-direction="column" width="800px">
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
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          clearable
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long. '];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  \`
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Input has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the \`GdsValidator\` interface:

\`\`\`html
<gds-input
 label="Label"
 value=" "
 .validator=\${{
   validate: (el: any) => {
     if (el.value === '')
       return [
         {
           ...el.validity,
           valid: false,
           customError: true,
         },
         'Error message.',
       ]
   },
 }}></gds-input>
\`\`\`
**@property invalid** - Indicates that the input field contains an error.

\`\`\`html
<gds-input invalid></gds-input>
\`\`\``,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,re,ie,se;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
    <gds-flex gap="xl">
      <gds-input label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  \`
}`,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"The `disabled` property can be set to disable the input field.\n\n**@property disabled** - Disables the input field.\n\n```html\n <gds-input disabled></gds-input>\n```",...(se=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};const He=["Default","Size","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","Disabled"];export{l as Clearable,c as Default,u as Disabled,d as ExtendedSupportingText,r as Lead,s as Length,n as Size,o as SupportingText,i as Trail,p as Validation,He as __namedExportsOrder,Ge as default};
