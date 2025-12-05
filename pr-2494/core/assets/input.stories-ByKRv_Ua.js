import{x as a}from"./iframe-CVpOu8hK.js";import"./input-DrE5v1l9.js";import"./badge-CNG39sqL.js";import"./flex-C7Pf8j15.js";import"./divider-B7HE5iuw.js";import"./credit-card-DNdTdzU9.js";import"./magnifying-glass-ClZ2q5mB.js";import"./people-profile-D4gPUImi.js";import{a as ye}from"./argTableProps-Dd0LYG43.js";import"./preload-helper-Dp1pzeXC.js";import"./input.component-DfMOpPbw.js";import"./query-async-DsYXwAKh.js";import"./form-control-host.style-plZQ-DF_.js";import"./form-control-header.component-BNoZzr1K.js";import"./badge.component-Cqbb-tSj.js";import"./flex.component-Dz5Jd6q1.js";import"./triangle-exclamation.component-fBlXp9tk.js";import"./icon-NdDe49Kt.js";import"./card.component-DFGjbNky.js";import"./cross-small.component-JM3VbJ02.js";import"./textarea.component-BWF-7XAY.js";import"./resize-observer-B9k8v2TZ.js";import"./divider.component-8geZElLS.js";import"./credit-card.component-CmEhrUGF.js";import"./magnifying-glass.component-7BYmwd0R.js";import"./people-profile.component-C8mx_mu4.js";const We={title:"Components/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:"An input lets users enter and edit text or numerical values in forms."}}},tags:["autodocs"],argTypes:{...ye("gds-input"),value:{control:"text"},variant:{options:["default"],control:{type:"select"}},size:{options:["large","small"],control:{type:"select"}},invalid:{control:"boolean"}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label",variant:"default",size:"large",supportingText:"Label support text.",innerHTML:'<gds-icon-people-profile slot="lead"></gds-icon-people-profile>'}},x={...t,name:"Default"},r={...t,name:"Size",render:()=>a`
    <gds-flex width="800px" gap="4xl" align-items="flex-start">
      <gds-input label="Lead Icon" size="small">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Lead Icon"
        supporting-text="Example support text"
        size="small"
        clearable
        .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Required field."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `},i={...t,name:"Slot: Lead",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  `},s={...t,name:"Slot: Trail",render:()=>a`
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
  `},l={...t,name:"Length",render:()=>a`
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
  `},o={...t,name:"Clearable",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  `},d={...t,name:"Supporting Text",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  `},p={...t,name:"Extended Supporting Text",render:()=>a`
    <gds-flex gap="xl" width="800px">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
  `},u={...t,name:"Validation",render:()=>a`
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
          error-message="This displays if the input is invalid."
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"This displays if the input doesn`t have any value."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long. "]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `},c={...t,name:"Standard Attributes",render:()=>a`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        min="0"
        max="100"
        step="5"
        type="number"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  `},g={...t,name:"Disabled",render:()=>a`
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
  `},m={...t,name:"Custom counter badge",render:()=>a`
      <gds-input
        label="Label"
        maxlength="100"
        .charCounterCallback=${e=>{let n="positive";if(e.value)switch(e.value.length%5){case 0:n="positive";break;case 1:n="negative";break;case 2:n="notice";break;case 3:n="warning";break;case 4:n="information";break}return[e.value.length,n]}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `};var b,f,h;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Default'
}`,...(h=(f=x.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,L,S,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      }, 'Required field.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
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
}`,...(L=(y=r.parameters)==null?void 0:y.docs)==null?void 0:L.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the input field.<br>\n**@property size** - The size of the input field.\n\n```html\n <gds-input size=\"small\"></gds-input>\n```",...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var w,E,D,C,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  \`
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the input field.\n\n```html\n <gds-input label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-input>```',...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var z,I,P,N,q;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the input field.\n\n```html\n <gds-input label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-input>```',...(q=(N=s.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var $,A,V,G,U;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the input field.<br> A badge will be displayed, updating as the input approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the input field.\n\n```html\n <gds-input maxLength="20"></gds-input>\n```',...(U=(G=l.parameters)==null?void 0:G.docs)==null?void 0:U.description}}};var B,F,M,R,_;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(F=o.parameters)==null?void 0:F.docs)==null?void 0:M.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the input field.\n\n```html\n <gds-input label="Label text" value="Clear this text" clearable></gds-input>\n```',...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var j,H,O,W,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  \`
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the input field.\n\n**@property supporting-text** - Additional information about the input field.\n\n```html\n  <gds-input label="Label text" supporting-text="Supporting text"></gds-input>\n```',...(J=(W=d.parameters)==null?void 0:W.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the input field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the input field.\n\n```html\n<gds-input label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-input>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-input show-extended-supporting-text></gds-input>\n```',...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,ae,ne,re;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    validate: (el: GdsFormControlElement): [ValidityState, string] | undefined => {
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
          error-message="This displays if the input is invalid."
          .validator=\${{
    validate: (el: GdsFormControlElement): [ValidityState, string] | undefined => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'This displays if the input doesn\`t have any value.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long. '];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  \`
}`,...(ae=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:`Input has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

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
\`\`\``,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ie,se,le,oe,de;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Standard Attributes',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        min="0"
        max="100"
        step="5"
        type="number"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  \`
}`,...(le=(se=c.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:"Most standard attributes are supported, and will be forwarded to the internal input element.",...(de=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:de.description}}};var pe,ue,ce,ge,me;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ce.source},description:{story:"The `disabled` property can be set to disable the input field.\n\n**@property disabled** - Disables the input field.\n\n```html\n <gds-input disabled></gds-input>\n```",...(me=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:me.description}}};var xe,be,fe,he,ve;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom counter badge',
  render: () => html\`
      <gds-input
        label="Label"
        maxlength="100"
        .charCounterCallback=\${(inp: GdsInput) => {
    let badgeType: GdsBadge['variant'] = 'positive';
    if (inp.value) {
      switch (inp.value.length % 5) {
        case 0:
          badgeType = 'positive';
          break;
        case 1:
          badgeType = 'negative';
          break;
        case 2:
          badgeType = 'notice';
          break;
        case 3:
          badgeType = 'warning';
          break;
        case 4:
          badgeType = 'information';
          break;
      }
    }
    return [inp.value!.length, badgeType] as const;
  }}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  \`
}`,...(fe=(be=m.parameters)==null?void 0:be.docs)==null?void 0:fe.source},description:{story:"The `charCounterCallback` property can be used to customize the character counter badge.\n\nCheck the [story source](https://github.com/seb-oss/green/blob/main/libs/core/src/components/input/input.stories.ts) to see the full code for this example, as Storybook strips away property assignments in the code examples.",...(ve=(he=m.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};const Je=["Default","Size","Lead","Trail","Length","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","Disabled","CustomCounterBadge"];export{o as Clearable,m as CustomCounterBadge,x as Default,g as Disabled,p as ExtendedSupportingText,i as Lead,l as Length,r as Size,c as StandardAttributes,d as SupportingText,s as Trail,u as Validation,Je as __namedExportsOrder,We as default};
