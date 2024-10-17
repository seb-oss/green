import{k as t}from"./lit-element-BoQqPHl6.js";import"./input-CWcfj2ZD.js";import"./badge-C4n--NGw.js";import"./flex-HuK12lhR.js";import"./divider-CmoJvVpe.js";import"./credit-card-DfmlSRLD.js";import"./magnifying-glass-CVzq-6y-.js";import"./people-profile-Odv-rXvC.js";import"./gds-element-RTlSuh_R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./until-BfWLtGmt.js";import"./directive-helpers-8zWUTkHM.js";import"./async-directive-DPLqQocF.js";import"./directive-Ctav8iJK.js";import"./when-BxLAFfhK.js";import"./choose-Dh3k58u9.js";import"./runtime-CMQcyTl6.js";import"./button-3kPB1G4k.js";import"./static-C_6dgFWo.js";import"./if-defined-OiR-h1RO.js";import"./class-map-BBGuaYF3.js";import"./transitional-styles-9whFD-yV.js";import"./tokens.style-Dwr4YKnv.js";import"./watch-tFciLXSI.js";import"./cross-small-BgcbB_fi.js";import"./icon-jzQ8K1tO.js";import"./triangle-exclamation-CZ0g0XuL.js";import"./container-BxFejZmF.js";import"./style-expression-property-Da3P080T.js";import"./card-h2h4ZaIW.js";import"./text-DKZiGorS.js";const Be={title:"Docs/Components/Form/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:"Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.\n\nSome features of the input field include:\n- Two different sizes, `small` and `default`\n- Built-in support for form validation\n- Slots for `lead` and `trail` icons\n- `Supporting` and `Extended` text\n- `Clearable` input fields\n- `Length` validation\n\n@status beta"}}},tags:["autodocs"]},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text",textarea:!1}},c={...a,name:"Default",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text.">
        <gds-icon-people-profile slot="lead"></gds-icon-people-profile>
      </gds-input>
    </gds-flex>
  `},n={...a,name:"Size",render:()=>t`
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},r={...a,name:"Slot: Lead",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  `},i={...a,name:"Slot: Trail",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Label support text" value="10,000.00" clearable>
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-input>
    </gds-flex>
  `},s={...a,name:"Length",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Label support text" value="Example value" maxLength="20" clearable>
      </gds-input>
    </gds-flex>
  `},l={...a,name:"Clearable",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label text" value="Clear this text" clearable></gds-input>
    </gds-flex>
  `},o={...a,name:"Supporting Text",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  `},d={...a,name:"Extended Supporting Text",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </gds-input>
      <gds-input label="Label text" supporting-text="Supporting text" show-extended-supporting-text>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},p={...a,name:"Validation",render:()=>t`
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
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
  `},u={...a,name:"Disabled",render:()=>t`
    <gds-flex gap="xl">
      <gds-input label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input label="Label" disabled supporting-text="Support text" value="Disabled with value" clearable>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `};var g,m,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text.">
        <gds-icon-people-profile slot="lead"></gds-icon-people-profile>
      </gds-input>
    </gds-flex>
  \`
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,b,h,v,L;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  \`
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the input field.<br>\n**@property size** - The size of the input field.\n\n```html\n <gds-input size=\"small\"></gds-input>\n```",...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var y,S,w,E,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  \`
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the input field.\n\n```html\n <gds-input label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-input>```',...(T=(E=r.parameters)==null?void 0:E.docs)==null?void 0:T.description}}};var D,I,z,N,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Label support text" value="10,000.00" clearable>
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-input>
    </gds-flex>
  \`
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the input field.\n\n```html\n <gds-input label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-input>```',...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var C,q,$,V,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Label support text" value="Example value" maxLength="20" clearable>
      </gds-input>
    </gds-flex>
  \`
}`,...($=(q=s.parameters)==null?void 0:q.docs)==null?void 0:$.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the input field.<br> A badge will be displayed, updating as the input approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the input field.\n\n```html\n <gds-input maxLength="20"></gds-input>\n```',...(A=(V=s.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var U,k,_,j,B;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label text" value="Clear this text" clearable></gds-input>
    </gds-flex>
  \`
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the input field.\n\n```html\n <gds-input label="Label text" value="Clear this text" clearable></gds-input>\n```',...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var F,G,O,W,H;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  \`
}`,...(O=(G=o.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the input field.\n\n**@property supporting-text** - Additional information about the input field.\n\n```html\n  <gds-input label="Label text" supporting-text="Supporting text"></gds-input>\n```',...(H=(W=o.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};var J,K,M,Q,R;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </gds-input>
      <gds-input label="Label text" supporting-text="Supporting text" show-extended-supporting-text>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  \`
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the input field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the input field.\n\n```html\n<gds-input label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-input>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-input show-extended-supporting-text></gds-input>\n```',...(R=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var X,Y,Z,ee,te;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
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
      <gds-input label="Label" disabled supporting-text="Support text" value="Disabled with value" clearable>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  \`
}`,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"The `disabled` property can be set to disable the input field.\n\n**@property disabled** - Disables the input field.\n\n```html\n <gds-input disabled></gds-input>\n```",...(se=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};const Fe=["Default","Size","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","Disabled"];export{l as Clearable,c as Default,u as Disabled,d as ExtendedSupportingText,r as Lead,s as Length,n as Size,o as SupportingText,i as Trail,p as Validation,Fe as __namedExportsOrder,Be as default};
