import{x as t}from"./lit-element-C_s9q329.js";import"./textarea-CG9vlPxB.js";import"./badge-B7pEuVzS.js";import"./flex-DnAdyWkx.js";import"./divider-B4sL62Bm.js";import"./credit-card-V3vs1n1r.js";import"./magnifying-glass-zSavWvzJ.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-B8fm5KIw.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./form-control-footer-Zk3rr_2z.js";import"./when-BR7zwNJC.js";import"./button-DQUdf42P.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-B6Zq2CtY.js";import"./transitional-styles-BbA4VtzU.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-di0WtSeu.js";import"./icon-BAGUC4Iy.js";import"./card-XqiHdOAu.js";import"./style-expression-property-CYg4CGI6.js";import"./container-C9hIB2Az.js";import"./cross-small-CgIxxlLH.js";const Be={title:"Components/Textarea",component:"gds-textarea",parameters:{layout:"centered",docs:{description:{component:"Textareas are used for longer multiline text inputs, such as comments or descriptions.<br>\nThey can be used in forms, dialogs, and data tables.\nThe `gds-textarea` component is a wrapper around the native textarea element and provides a consistent look and feel across browsers. It has 4 rows by default and it resizes vertically to fit the content as the user types.\n\nSome features of the Textarea include:\n- Built-in support for form validation\n- Slots for `lead` and `trail` icons\n- `Supporting` and `Extended` text\n- `Clearable` input fields\n- `Length` validation\n- `Disabled` state\n- Custom number of `Rows`\n\n@status beta"}}},tags:["autodocs"]},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},c={...a,name:"Default",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  `},r={...a,name:"Slot: Lead",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  `},n={...a,name:"Slot: Trail",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        clearable
      >
        <gds-badge variant="information" slot="trail">SEK</gds-badge>
      </gds-textarea>
    </gds-flex>
  `},s={...a,name:"Length",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-textarea>
    </gds-flex>
  `},l={...a,name:"Rows",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value with 8 rows"
        clearable
        rows="8"
      >
      </gds-textarea>
    </gds-flex>
  `},o={...a,name:"Resize",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Resize: False</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resize="false"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Resize: True</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea label="Label" supporting-text="Label support text">
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},d={...a,name:"Clearable",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  `},i={...a,name:"Supporting Text",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  `},p={...a,name:"Extended Supporting Text",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
      <gds-textarea
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
    </gds-flex>
  `},x={...a,name:"Validation",render:()=>t`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
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
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          maxLength="12"
          clearable
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},g={...a,name:"Disabled",render:()=>t`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
      <gds-textarea
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  `};var u,m,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  \`
}`,...(f=(m=c.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,h,v,L,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  \`
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the `gds-textarea` field.\n\n```html\n <gds-textarea label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-textarea>```',...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.description}}};var w,S,T,E,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        clearable
      >
        <gds-badge variant="information" slot="trail">SEK</gds-badge>
      </gds-textarea>
    </gds-flex>
  \`
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the textarea field.\n\n```html\n <gds-textarea label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-textarea>```',...(D=(E=n.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var z,P,R,C,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Length',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-textarea>
    </gds-flex>
  \`
}`,...(R=(P=s.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the textarea field.<br> A badge will be displayed, updating as the textarea approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the textarea field.\n\n```html\n <gds-textarea maxLength="20"></gds-textarea>\n```',...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var q,N,V,$,A;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rows',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value with 8 rows"
        clearable
        rows="8"
      >
      </gds-textarea>
    </gds-flex>
  \`
}`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:'Minimum number of rows to display in the textarea is `4` by default. <br>\nYou can specify the number of rows to display in the textarea using the `rows` attribute.\n\n@property rows - The number of rows to display in the textarea.\n\n```html\n <gds-textarea rows="8"></gds-textarea>\n```',...(A=($=l.parameters)==null?void 0:$.docs)==null?void 0:A.description}}};var j,k,F,K,W;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Resize',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Resize: False</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resize="false"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Resize: True</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea label="Label" supporting-text="Label support text">
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source},description:{story:'The `resize` property is set to `auto` by default, allowing the user to resize the textarea.\n\nTo disable the resize functionality, set the `resize` property to `false`.\n\nWhen the `resize` property is set to `auto`, a resize handle will appear at the bottom center of the textarea when the user hovers over it. Dragging this handle will resize the textarea.\n\nThe textarea\'s size is adjustable based on the `rows` attribute and the content within the textarea.\n\n@property resize - Controls whether and how the textarea can be resized by the user.\n\n```html\n <gds-textarea resize="false"></gds-textarea>\n```',...(W=(K=o.parameters)==null?void 0:K.docs)==null?void 0:W.description}}};var _,B,G,M,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Clearable',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  \`
}`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the textarea field.\n\n```html\n <gds-textarea label="Label text" value="Clear this text" clearable></gds-textarea>\n```',...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var U,Y,H,J,Q;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  \`
}`,...(H=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:H.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the textarea field.\n\n**@property supporting-text** - Additional information about the textarea field.\n\n```html\n  <gds-textarea label="Label text" supporting-text="Supporting text"></gds-textarea>\n```',...(Q=(J=i.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,ee,te,ae;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
      <gds-textarea
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
    </gds-flex>
  \`
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the textarea field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the textarea field.\n\n```html\n<gds-textarea label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-textarea>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-textarea show-extended-supporting-text></gds-textarea>\n```',...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var re,ne,se,le,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
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
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          maxLength="12"
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
      }, 'The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source},description:{story:`Textarea has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the \`GdsValidator\` interface:

\`\`\`html
<gds-textarea
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
 }}></gds-textarea>
\`\`\`
**@property invalid** - Indicates that the textarea field contains an error.

\`\`\`html
<gds-textarea invalid></gds-textarea>
\`\`\``,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.description}}};var de,ie,pe,xe,ge;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
      <gds-textarea
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  \`
}`,...(pe=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:pe.source},description:{story:"The `disabled` property can be set to disable the textarea field.\n\n**@property disabled** - Disables the textarea field.\n\n```html\n <gds-textarea disabled></gds-textarea>\n```",...(ge=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ge.description}}};const Ge=["Default","Lead","Trail","Length","Rows","Resize","Clearable","SupportingText","ExtendedSupportingText","Validation","Disabled"];export{d as Clearable,c as Default,g as Disabled,p as ExtendedSupportingText,r as Lead,s as Length,o as Resize,l as Rows,i as SupportingText,n as Trail,x as Validation,Ge as __namedExportsOrder,Be as default};
