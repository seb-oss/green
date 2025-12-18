import{x as t}from"./iframe-BBaqs3eY.js";import{a as qe}from"./argTableProps-BFfFFV6P.js";import"./textarea-B_uSaX_v.js";import"./badge-CxaWcSMW.js";import"./flex-Bv6-T22K.js";import"./text-AkNkFFpg.js";import"./divider-BbAYhvmo.js";import"./credit-card-Da6A2dsd.js";import"./magnifying-glass--g_qLUDE.js";import"./preload-helper-Dp1pzeXC.js";import"./textarea.component-k7mK2mNb.js";import"./localized-decorator-rnJJRWaL.js";import"./query-async-B9aOs_FT.js";import"./form-control-host.style-DQAUnqre.js";import"./form-control-header.component-C0bBgrCU.js";import"./badge.component-DP4SoLlo.js";import"./flex.component-DMyfDKhZ.js";import"./triangle-exclamation.component-lW-vIiAb.js";import"./icon.component-WjWnmMep.js";import"./card.component-D4OUWNkI.js";import"./resize-observer-B9k8v2TZ.js";import"./cross-small.component-CZiv9AvY.js";import"./default-typography.styles-Cm0FWDRN.js";import"./divider.component-D_Hkyzs7.js";import"./credit-card.component-B6D3VixX.js";import"./magnifying-glass.component-oR463Hf7.js";const nt={title:"Components/Textarea",component:"gds-textarea",parameters:{layout:"centered",docs:{description:{component:"A textarea enables multi-line text input from users."}}},tags:["autodocs"],argTypes:{...qe("gds-textarea")}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},b={...a,name:"Default",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  `},s={...a,name:"Slot: Lead",render:()=>t`
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
  `},l={...a,name:"Length",render:()=>t`
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
  `},d={...a,name:"Rows",render:()=>t`
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
  `},o={...a,name:"Resize",render:()=>t`
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
  `},i={...a,name:"Size",render:()=>t`
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
  `},g={...a,name:"Clearable",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  `},p={...a,name:"Supporting Text",render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  `},x={...a,name:"Extended Supporting Text",render:()=>t`
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
  `},c={...a,name:"Validation",render:()=>t`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"You need to enter a value."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
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
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be a 12 characters long numeric value. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `},u={...a,name:"Standard Attributes",render:()=>t`
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
  `},m={...a,name:"Disabled",render:()=>t`
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
  `},f={...a,name:"Custom counter badge",render:()=>t`
      <gds-textarea
        label="Label"
        maxlength="100"
        .charCounterCallback=${e=>{let r="positive";if(e.value)switch(e.value.length%5){case 0:r="positive";break;case 1:r="negative";break;case 2:r="notice";break;case 3:r="warning";break;case 4:r="information";break}return[e.value.length,r]}}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  `};var h,v,y;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(v=b.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var L,w,S,z,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  \`
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:'**@slot lead** - Slot for an icon or other content to be placed at the beginning of the `gds-textarea` field.\n\n```html\n <gds-textarea label="Lead Icon">\n   <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>\n</gds-textarea>```',...(T=(z=s.parameters)==null?void 0:z.docs)==null?void 0:T.description}}};var E,D,C,k,R;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source},description:{story:'**@slot trail** - Slot for an icon or other content to be placed at the end of the textarea field.\n\n```html\n <gds-textarea label="Trail Icon">\n   <gds-badge variant="information" slot="trail">USD</gds-badge>\n</gds-textarea>```',...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};var P,q,A,I,$;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:'The `length` property can be set to a number to limit the number of characters that can be entered into the textarea field.<br> A badge will be displayed, updating as the textarea approaches the character limit.\n\n**@property maxLength** - The maximum number of characters that can be entered into the textarea field.\n\n```html\n <gds-textarea maxLength="20"></gds-textarea>\n```',...($=(I=l.parameters)==null?void 0:I.docs)==null?void 0:$.description}}};var N,V,B,F,G;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source},description:{story:'Minimum number of rows to display in the textarea is `4` by default. <br>\nYou can specify the number of rows to display in the textarea using the `rows` attribute.\n\n@property rows - The number of rows to display in the textarea.\n\n```html\n <gds-textarea rows="8"></gds-textarea>\n```',...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var M,W,U,Y,j;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(W=o.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:'The `resize` property is set to `auto` by default, allowing the user to resize the textarea.\n\nTo disable the resize functionality, set the `resize` property to `false`.\n\nWhen the `resize` property is set to `auto`, a resize handle will appear at the bottom center of the textarea when the user hovers over it. Dragging this handle will resize the textarea.\n\nThe textarea\'s size is adjustable based on the `rows` attribute and the content within the textarea.\n\n@property resize - Controls whether and how the textarea can be resized by the user.\n\n```html\n <gds-textarea resizable="false"></gds-textarea>\n```',...(j=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:j.description}}};var K,_,O,H,J;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:'The `size` property controls the font-size of the text in form control header and footer.\n\nThe `size` property can be set to `small` or `large`.<br>\nThe default size is `large`.\n\n```html\n <gds-textarea size="small"></gds-textarea>\n```',...(J=(H=i.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,X,Z,ee,te;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:'When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.\n\n@property clearable - Enables the clear button for the textarea field.\n\n```html\n <gds-textarea label="Label text" value="Clear this text" clearable></gds-textarea>\n```',...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,re,se,ne,le;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:'The `supporting-text` property can be set to a string to provide additional information about the textarea field.\n\n**@property supporting-text** - Additional information about the textarea field.\n\n```html\n  <gds-textarea label="Label text" supporting-text="Supporting text"></gds-textarea>\n```',...(le=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:le.description}}};var de,oe,ie,ge,pe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the textarea field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n**@slot extended-supporting-text** - Extended information about the textarea field.\n\n```html\n<gds-textarea label="Label text" supporting-text="Supporting text">\n  <span slot="extended-supporting-text">Extended supporting text</span>\n</gds-textarea>\n```\n\n**@property show-extended-supporting-text** - Shows the extended supporting text.\n\n```html\n<gds-textarea show-extended-supporting-text></gds-textarea>\n```',...(pe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:pe.description}}};var xe,ce,ue,me,fe;c.parameters={...c.parameters,docs:{...(xe=c.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ue=(ce=c.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:`Textarea has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using \`ElementInternals\` and \`Constraint Validation API\`.

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
\`\`\``,...(fe=(me=c.parameters)==null?void 0:me.docs)==null?void 0:fe.description}}};var be,he,ve,ye,Le;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(he=u.parameters)==null?void 0:he.docs)==null?void 0:ve.source},description:{story:"Most standard attributes are supported, and will be forwarded to the internal textarea element.",...(Le=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:Le.description}}};var we,Se,ze,Te,Ee;m.parameters={...m.parameters,docs:{...(we=m.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ze=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:ze.source},description:{story:"The `disabled` property can be set to disable the textarea field.\n\n**@property disabled** - Disables the textarea field.\n\n```html\n <gds-textarea disabled></gds-textarea>\n```",...(Ee=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:Ee.description}}};var De,Ce,ke,Re,Pe;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom counter badge',
  render: () => html\`
      <gds-textarea
        label="Label"
        maxlength="100"
        .charCounterCallback=\${(inp: GdsTextarea) => {
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
      </gds-textarea>
    </gds-flex>
  \`
}`,...(ke=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source},description:{story:"The `charCounterCallback` property can be used to customize the character counter badge.\n\nCheck the [story source](https://github.com/seb-oss/green/blob/main/libs/core/src/components/textarea/textarea.stories.ts) to see the full code for this example, as Storybook strips away property assignments in the code examples.",...(Pe=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Pe.description}}};const lt=["Default","Lead","Trail","Length","Rows","Resize","Size","Clearable","SupportingText","ExtendedSupportingText","Validation","StandardAttributes","Disabled","CustomCounterBadge"];export{g as Clearable,f as CustomCounterBadge,b as Default,m as Disabled,x as ExtendedSupportingText,s as Lead,l as Length,o as Resize,d as Rows,i as Size,u as StandardAttributes,p as SupportingText,n as Trail,c as Validation,lt as __namedExportsOrder,nt as default};
