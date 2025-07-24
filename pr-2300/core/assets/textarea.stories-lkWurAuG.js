import{x as e}from"./lit-element-Bx14lxc-.js";import{a as Te}from"./argTableProps-Byfttane.js";import"./textarea-wkpIdwJl.js";import"./badge-DjWskOIs.js";import"./flex-6YMVJR_L.js";import"./text-XnPKgJoQ.js";import"./divider-RZPaqpXu.js";import"./credit-card-BI4xyooj.js";import"./magnifying-glass-CnjHLHcM.js";import"./custom-elements-CKiH5858.js";import"./textarea.component-Be78s5v6.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./form-control-host.style-DbYCwU_E.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-BiORlPgX.js";import"./tokens.style-Khpz0lp_.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-CuIHKeYV.js";import"./badge.component-D4FxP9Pi.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";import"./triangle-exclamation.component-DHVFdFv1.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./button.component-CP7I7SJN.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-UD91Xhmi.js";import"./resize-observer-B9k8v2TZ.js";import"./cross-large.component-BCNcIVoh.js";import"./text.component-m9A6I6j-.js";import"./divider.component-CwagVNTp.js";import"./credit-card.component-B5SecYEV.js";import"./magnifying-glass.component-BYV8NIlH.js";const ut={title:"Components/Textarea",component:"gds-textarea",parameters:{layout:"centered",docs:{description:{component:`A textarea enables multi-line text input from users.

@status beta`}}},tags:["autodocs"],argTypes:{...Te("gds-textarea")}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},m={...t,name:"Default",render:()=>e`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  `},r={...t,name:"Slot: Lead",render:()=>e`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  `},s={...t,name:"Slot: Trail",render:()=>e`
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
  `},n={...t,name:"Length",render:()=>e`
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
  `},l={...t,name:"Rows",render:()=>e`
    <gds-flex gap="xl" width="680px">
      <gds-flex flex-direction="column" gap="s" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Rows:8</gds-text>
          <gds-text tag="small" color="secondary">
            Clearable and auto resize
          </gds-text>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Example value with 8 rows"
          clearable
          rows="8"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" gap="s" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Rows:8</gds-text>
          <gds-text tag="small" color="secondary">
            Clearable and no resize
          </gds-text>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Example value with 8 rows"
          clearable
          resizable="false"
          rows="8"
        >
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},d={...t,name:"Resize",render:()=>e`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: Auto</gds-text>
          <gds-text tag="small" color="secondary">
            Based on the content
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="auto"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: Manual</gds-text>
          <gds-text tag="small" color="secondary">
            Draging the pull tab to resize
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="manual"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: False</gds-text>
          <gds-text tag="small" color="secondary">
            Will not resize at all
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="false"
        >
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},o={...t,name:"Size",render:()=>e`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Size: Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="false"
          size="small"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Size: Large(default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea label="Label" supporting-text="Label support text">
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},i={...t,name:"Clearable",render:()=>e`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  `},p={...t,name:"Supporting Text",render:()=>e`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  `},g={...t,name:"Extended Supporting Text",render:()=>e`
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
  `},x={...t,name:"Validation",render:()=>e`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:a=>{if(a.value==="")return[{...a.validity,valid:!1,customError:!0},"You need to enter a value."];if(a.value.length!==12||isNaN(a.value))return[{...a.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
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
          error-message="This is explicitly set error message."
          .validator=${{validate:a=>{if(a.value==="")return[{...a.validity,valid:!1,customError:!0},"Error message."];if(a.value.length!==12||isNaN(a.value))return[{...a.validity,valid:!1,customError:!0},"The value must be a 12 characters long numeric value. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},c={...t,name:"Standard Attributes",render:()=>e`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  `},u={...t,name:"Disabled",render:()=>e`
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
  `};var f,b,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(b=m.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,L,y,w,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  \`
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the `gds-textarea` field.\n\n```html\n <gds-textarea label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-textarea>```',...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var z,T,E,D,R;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the textarea field.\n\n```html\n <gds-textarea label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-textarea>```',...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var P,C,q,A,I;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(C=n.parameters)==null?void 0:C.docs)==null?void 0:q.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the textarea field.<br> A badge will be displayed, updating as the textarea approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the textarea field.\n\n```html\n <gds-textarea maxLength="20"></gds-textarea>\n```',...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var N,V,$,k,F;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rows',
  render: () => html\`
    <gds-flex gap="xl" width="680px">
      <gds-flex flex-direction="column" gap="s" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Rows:8</gds-text>
          <gds-text tag="small" color="secondary">
            Clearable and auto resize
          </gds-text>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Example value with 8 rows"
          clearable
          rows="8"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" gap="s" flex="1">
        <gds-flex flex-direction="column">
          <gds-text>Rows:8</gds-text>
          <gds-text tag="small" color="secondary">
            Clearable and no resize
          </gds-text>
        </gds-flex>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Example value with 8 rows"
          clearable
          resizable="false"
          rows="8"
        >
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:'Minimum number of rows to display in the textarea is `4` by default. <br>\nYou can specify the number of rows to display in the textarea using the `rows` attribute.\n\n@property rows - The number of rows to display in the textarea.\n\n```html\n <gds-textarea rows="8"></gds-textarea>\n```',...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};var M,W,U,Y,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Resize',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: Auto</gds-text>
          <gds-text tag="small" color="secondary">
            Based on the content
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="auto"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: Manual</gds-text>
          <gds-text tag="small" color="secondary">
            Draging the pull tab to resize
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="manual"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text>Resize: False</gds-text>
          <gds-text tag="small" color="secondary">
            Will not resize at all
          </gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="false"
        >
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...(U=(W=d.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:'The `resize` property is set to `auto` by default, allowing the user to resize the textarea.\n\nTo disable the resize functionality, set the `resize` property to `false`.\n\nWhen the `resize` property is set to `auto`, a resize handle will appear at the bottom center of the textarea when the user hovers over it. Dragging this handle will resize the textarea.\n\nThe textarea\'s size is adjustable based on the `rows` attribute and the content within the textarea.\n\n@property resize - Controls whether and how the textarea can be resized by the user.\n\n```html\n <gds-textarea resizable="false"></gds-textarea>\n```',...(j=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:j.description}}};var B,G,K,_,O;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Size: Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resizable="false"
          size="small"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Size: Large(default)</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea label="Label" supporting-text="Label support text">
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...(K=(G=o.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:'The `size` property controls the font-size of the text in form control header and footer.\n\nThe `size` property can be set to `small` or `large`.<br>\nThe default size is `large`.\n\n```html\n <gds-textarea size="small"></gds-textarea>\n```',...(O=(_=o.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var H,J,Q,X,Z;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(J=i.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the textarea field.\n\n```html\n <gds-textarea label="Label text" value="Clear this text" clearable></gds-textarea>\n```',...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,ae,re,se;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the textarea field.\n\n**@property supporting-text** - Additional information about the textarea field.\n\n```html\n  <gds-textarea label="Label text" supporting-text="Supporting text"></gds-textarea>\n```',...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var ne,le,de,oe,ie;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(le=g.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the textarea field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the textarea field.\n\n```html\n<gds-textarea label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-textarea>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-textarea show-extended-supporting-text></gds-textarea>\n```',...(ie=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var pe,ge,xe,ce,ue;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      }, 'You need to enter a value.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
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
          error-message="This is explicitly set error message."
          .validator=\${{
    validate: (el: GdsFormControlElement) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be a 12 characters long numeric value. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...(xe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:xe.source},description:{story:`Textarea has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

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
\`\`\``,...(ue=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ue.description}}};var me,fe,be,he,ve;c.parameters={...c.parameters,docs:{...(me=c.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Standard Attributes',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
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
}`,...(be=(fe=c.parameters)==null?void 0:fe.docs)==null?void 0:be.source},description:{story:"Most standard attributes are supported, and will be forwarded to the internal textarea element.",...(ve=(he=c.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};var Le,ye,we,Se,ze;u.parameters={...u.parameters,docs:{...(Le=u.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:"The `disabled` property can be set to disable the textarea field.\n\n**@property disabled** - Disables the textarea field.\n\n```html\n <gds-textarea disabled></gds-textarea>\n```",...(ze=(Se=u.parameters)==null?void 0:Se.docs)==null?void 0:ze.description}}};const mt=["Default","Lead","Trail","Length","Rows","Resize","Size","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","Disabled"];export{i as Clearable,m as Default,u as Disabled,g as ExtendedSupportingText,r as Lead,n as Length,d as Resize,l as Rows,o as Size,c as StandardAttributes,p as SupportingText,s as Trail,x as Validation,mt as __namedExportsOrder,ut as default};
