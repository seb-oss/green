import{b as t}from"./iframe-CPRCDjfR.js";import{a as K}from"./argTableProps-BT2RR-hs.js";import"./select-B9mtsrJH.js";import"./flex-Fi0_kUhV.js";import"./sun-Bfow9M7l.js";import"./rocket-CSk2fRii.js";import"./square-grid-circle-DRGD7dHb.js";import"./preload-helper-Dp1pzeXC.js";import"./select.component-Bgc17sMn.js";import"./localized-decorator-BGUdOJjD.js";import"./form-control-host.style-CBcyRdBV.js";import"./form-control-header.component-B4pHrv4V.js";import"./badge.component-DN6llxP0.js";import"./flex.component-C9uw9EMv.js";import"./triangle-exclamation.component-YsSc9gaK.js";import"./icon.component-B1VasaLS.js";import"./card.component-CJelrqzn.js";import"./circle-info.component-BQB39Eyd.js";import"./chevron-bottom.component-4jDtgFxa.js";import"./sun.component-DWNH2Pnm.js";import"./rocket.component-qcPoFXmT.js";import"./square-grid-circle.component-Bk2Xfh99.js";const ye={title:"Components/Select",component:"gds-select",tags:["autodocs"],argTypes:{...K("gds-select")},parameters:{docs:{description:{component:`A select enables the user to choose a single option from a list.

\`gds-select\` is a wrapper component for the native select element.

Use this component instead of \`<gds-dropdown>\` when you need to leverage the inherent behavior of the native select element, for example when native accessibility features, some of which are not currently replicable in custom dropdowns, are required. Usability on mobile devices is also sometimes better with native select elements.

Don't use this component when you need to customize the dropdown behavior or appearance, or when you need to display complex content in the dropdown, or require multi-select functionality. While the native select element does support multi-select, it is not recommended for use in most cases.

The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
element, and not on the enclosed select element. Also, state should also be handled only through the host.
Setting value or selected props on the select element will not work as expected.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},o={...e,name:"Select",args:{label:"Label text",supportingText:"Supporting text",value:"",innerHTML:`
      <gds-icon-books slot="lead"></gds-icon-books>
      <select>
        <option value="">Select a value</option>
        <optgroup label="Physics">
          <option value="quantum-mechanics">Quantum Mechanics</option>
          <option value="relativity">Relativity</option>
        </optgroup>
        <optgroup label="Chemistry">
          <option value="organic-chemistry">Organic Chemistry</option>
          <option value="inorganic-chemistry">Inorganic Chemistry</option>
        </optgroup>
        <optgroup label="Biology">
          <option value="genetics">Genetics</option>
          <option value="microbiology">Microbiology</option>
          <option value="ecology">Ecology</option>
        </optgroup>
      </select>
    `}},n={...e,name:"Options",render:()=>t`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        <select>
          <optgroup label="Astronomy">
            <option value="cosmology">Cosmology</option>
            <option value="astrophysics">Astrophysics</option>
          </optgroup>
          <optgroup label="Geology">
            <option value="volcanology">Volcanology</option>
            <option value="seismology">Seismology</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `},s={...e,name:"Lead Icon",render:()=>t`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-brand-green slot="lead"></gds-icon-brand-green>
        <select>
          <option value="green">Green Design System</option>
          <option value="carbon">Carbon Design System</option>
        </select>
      </gds-select>
    </gds-flex>
  `},i={...e,name:"Disabled",render:()=>t`
    <gds-flex>
      <gds-select disabled label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select>
          <option value="thunder">Thunder</option>
          <option value="lightning">Lightning</option>
        </select>
      </gds-select>
    </gds-flex>
  `},a={...e,name:"Invalid",render:()=>t`
    <gds-flex>
      <gds-select
        invalid
        label="Label text"
        supporting-text="Supporting text"
        .required=${!0}
        error-message="This field is required"
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="">Incorrect Value</option>
          <optgroup label="Propulsion">
            <option value="ion-thrusters">Ion Thrusters</option>
            <option value="chemical-rockets">Chemical Rockets</option>
          </optgroup>
          <optgroup label="Communication">
            <option value="satellite-communication">
              Satellite Communication
            </option>
            <option value="deep-space-network">Deep Space Network</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `},r={...e,name:"Extended Supporting Text",render:()=>t`
    <gds-flex
      gap="xl"
      align-items="center"
      justify-content="center"
      width="100%"
    >
      <gds-select
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="">First option</option>
          <optgroup label="Propulsion">
            <option value="ion-thrusters">Ion Thrusters</option>
            <option value="chemical-rockets">Chemical Rockets</option>
          </optgroup>
          <optgroup label="Communication">
            <option value="satellite-communication">
              Satellite Communication
            </option>
            <option value="deep-space-network">Deep Space Network</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `},l={...e,name:"Size",render:()=>t`
    <gds-flex>
      <gds-select
        size="small"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-bank slot="lead"></gds-icon-bank>
        <select>
          <optgroup label="International">
            <option value="nasa">NASA</option>
            <option value="esa">ESA</option>
          </optgroup>
          <optgroup label="National">
            <option value="isro">ISRO</option>
            <option value="cnsa">CNSA</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `},p={...e,name:"ARIA Forwarding",render:()=>t`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="select-label">Label text outside</div>
      <div id="select-description">Associated description outside</div>
      <gds-select
        plain
        gds-aria-labelledby="select-label"
        gds-aria-describedby="select-description"
        gds-aria-errormessage="select-error"
        invalid
      >
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </gds-select>
      <div id="select-error">Associated error message outside</div>
    </gds-flex>
  `};var d,c,u,g,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select',
  args: {
    label: 'Label text',
    supportingText: 'Supporting text',
    value: '',
    innerHTML: \`
      <gds-icon-books slot="lead"></gds-icon-books>
      <select>
        <option value="">Select a value</option>
        <optgroup label="Physics">
          <option value="quantum-mechanics">Quantum Mechanics</option>
          <option value="relativity">Relativity</option>
        </optgroup>
        <optgroup label="Chemistry">
          <option value="organic-chemistry">Organic Chemistry</option>
          <option value="inorganic-chemistry">Inorganic Chemistry</option>
        </optgroup>
        <optgroup label="Biology">
          <option value="genetics">Genetics</option>
          <option value="microbiology">Microbiology</option>
          <option value="ecology">Ecology</option>
        </optgroup>
      </select>
    \`
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"Basic example showing the select component with a label, supporting text and a lead icon.\nThe wrapped `<select>` element is making use of `<optgroup>` elements to group the options.",...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};var h,b,x,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Options',
  render: () => html\`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-square-grid-circle slot="lead"></gds-icon-square-grid-circle>
        <select>
          <optgroup label="Astronomy">
            <option value="cosmology">Cosmology</option>
            <option value="astrophysics">Astrophysics</option>
          </optgroup>
          <optgroup label="Geology">
            <option value="volcanology">Volcanology</option>
            <option value="seismology">Seismology</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:'It is mandatory to use a native `<select>` element with options inside `<gds-select>`. `<gds-select>` is only a wrapper that allows native select to be used seamlessly along with the other form controls in the design system.\n\ne.g\n\n```html\n   <gds-select>\n    <select>\n      <optgroup label="Astronomy">\n        <option value="cosmology">Cosmology</option>\n        <option value="astrophysics">Astrophysics</option>\n      </optgroup>\n    </select>\n  </gds-select>\n```\n> In web components using Shadow DOM, elements cannot be associated with each other across Shadow DOM boundaries. This is why you need to wrap a full native `select` element and it\'s options, rather than just putting options directly under `<gds-select>`. If placed in a slot, options would not be picked up due to the Shadow DOM encapsulation.',...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var f,w,S,k,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Lead Icon',
  render: () => html\`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-brand-green slot="lead"></gds-icon-brand-green>
        <select>
          <option value="green">Green Design System</option>
          <option value="carbon">Carbon Design System</option>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It is set by adding an icon component to the 'lead' slot.`,...(L=(k=s.parameters)==null?void 0:k.docs)==null?void 0:L.description}}};var I,D,A,T,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
    <gds-flex>
      <gds-select disabled label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-lightning slot="lead"></gds-icon-lightning>
        <select>
          <option value="thunder">Thunder</option>
          <option value="lightning">Lightning</option>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};var q,O,P,M,z;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Invalid',
  render: () => html\`
    <gds-flex>
      <gds-select
        invalid
        label="Label text"
        supporting-text="Supporting text"
        .required=\${true}
        error-message="This field is required"
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="">Incorrect Value</option>
          <optgroup label="Propulsion">
            <option value="ion-thrusters">Ion Thrusters</option>
            <option value="chemical-rockets">Chemical Rockets</option>
          </optgroup>
          <optgroup label="Communication">
            <option value="satellite-communication">
              Satellite Communication
            </option>
            <option value="deep-space-network">Deep Space Network</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(P=(O=a.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"The invalid state can be set either directly using the `invalid` boolean property together with the `error-message` property, or by using a [validator](/docs/components-form-validation--docs).",...(z=(M=a.parameters)==null?void 0:M.docs)==null?void 0:z.description}}};var R,N,E,F,G;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html\`
    <gds-flex
      gap="xl"
      align-items="center"
      justify-content="center"
      width="100%"
    >
      <gds-select
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        <select>
          <option value="">First option</option>
          <optgroup label="Propulsion">
            <option value="ion-thrusters">Ion Thrusters</option>
            <option value="chemical-rockets">Chemical Rockets</option>
          </optgroup>
          <optgroup label="Communication">
            <option value="satellite-communication">
              Satellite Communication
            </option>
            <option value="deep-space-network">Deep Space Network</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(E=(N=r.parameters)==null?void 0:N.docs)==null?void 0:E.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the select field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n```html\n<gds-select show-extended-supporting-text>\n <span slot="extended-supporting-text">...</span>\n <select><option value="">...</option></select>\n</gds-select>\n```',...(G=(F=r.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var V,j,B,H,Q;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <gds-flex>
      <gds-select
        size="small"
        label="Label text"
        supporting-text="Supporting text"
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-bank slot="lead"></gds-icon-bank>
        <select>
          <optgroup label="International">
            <option value="nasa">NASA</option>
            <option value="esa">ESA</option>
          </optgroup>
          <optgroup label="National">
            <option value="isro">ISRO</option>
            <option value="cnsa">CNSA</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(Q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:Q.description}}};var U,_,$,W,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="select-label">Label text outside</div>
      <div id="select-description">Associated description outside</div>
      <gds-select
        plain
        gds-aria-labelledby="select-label"
        gds-aria-describedby="select-description"
        gds-aria-errormessage="select-error"
        invalid
      >
        <select>
          <option value="">Please select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </gds-select>
      <div id="select-error">Associated error message outside</div>
    </gds-flex>
  \`
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:`In some cases it may be necessary to label the select using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal select element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-select), and not only the inner select.
For selects, prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal select element.`,...(J=(W=p.parameters)==null?void 0:W.docs)==null?void 0:J.description}}};const fe=["Default","Option","Lead","Disabled","Invalid","ExtendedSupportingText","Size","AriaForwarding"];export{p as AriaForwarding,o as Default,i as Disabled,r as ExtendedSupportingText,a as Invalid,s as Lead,n as Option,l as Size,fe as __namedExportsOrder,ye as default};
