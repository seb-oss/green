import{x as o}from"./lit-element-Bx14lxc-.js";import{a as te}from"./argTableProps-3TZlOkdv.js";import{G as ne}from"./select.component-CZ_L6L55.js";import"./flex-BNobuLJH.js";import"./lightning-CVGnPEYQ.js";import"./rocket-B_9gkun-.js";import"./sun-tYOEX09H.js";import"./square-grid-circle-BtDYeorP.js";import"./brand-green-BDyuAIe0.js";import"./custom-elements-3S7hEpq-.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./form-control-host.style-XtoWBGtT.js";import"./transitional-styles-unlae3Cp.js";import"./tokens.style-Cct4pBht.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-D7XCcRww.js";import"./badge.component-i6097UKo.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./flex.component-BfKO9GTN.js";import"./div.component-CLY16RHW.js";import"./triangle-exclamation.component-BQNg54Op.js";import"./icon-BXUh_f_p.js";import"./unsafe-html-CYO4avEf.js";import"./button.component-BkjhbsKb.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-DkFuee-h.js";import"./chevron-bottom.component-DUScgZc3.js";import"./lightning.component-BjY1Oyuc.js";import"./rocket.component-BrkIHo-V.js";import"./sun.component-Dulk5Lwh.js";import"./square-grid-circle.component-Bc6ZjUmV.js";import"./brand-green.component-BZU8zl7J.js";ne.define();const Fe={title:"Components/Select",component:"gds-select",tags:["autodocs"],argTypes:{...te("gds-select")},parameters:{docs:{description:{component:`A select enables the user to choose a single option from a list.

\`gds-select\` is a wrapper component for the native select element.

Use this component instead of \`<gds-dropdown>\` when you need to leverage the inherent behavior of the native select element, for example when native accessibility features, some of which are not currently replicable in custom dropdowns, are required. Usability on mobile devices is also sometimes better with native select elements.

Don't use this component when you need to customize the dropdown behavior or appearance, or when you need to display complex content in the dropdown, or require multi-select functionality. While the native select element does support multi-select, it is not recommended for use in most cases.

The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
element, and not on the enclosed select element. Also, state should also be handled only through the host.
Setting value or selected props on the select element will not work as expected.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...e,name:"Select",args:{label:"Label text",supportingText:"Supporting text",value:"",innerHTML:`
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
    `}},n={...e,name:"Options",render:()=>o`
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
  `},i={...e,name:"Lead Icon",render:()=>o`
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
  `},s={...e,name:"Disabled",render:()=>o`
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
  `},a={...e,name:"Invalid",render:()=>o`
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
  `},p={...e,name:"Extended Supporting Text",render:()=>o`
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
  `},l={...e,name:"Size",render:()=>o`
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
  `},r={...e,name:"Multiple",render:()=>o`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-sun slot="lead"></gds-icon-sun>
        <select multiple>
          <option value="black-holes">Black Holes</option>
          <option value="neutron-stars">Neutron Stars</option>
          <option value="supernovae">Supernovae</option>
          <option value="galaxies">Galaxies</option>
          <option value="exoplanets">Exoplanets</option>
          <option value="dark-matter">Dark Matter</option>
        </select>
      </gds-select>
    </gds-flex>
  `},u={...e,name:"Select Size",render:()=>o`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-compass-round slot="lead"></gds-icon-compass-round>
        <select multiple size="14">
          <optgroup label="Mars Missions">
            <option value="curiosity">Curiosity</option>
            <option value="perseverance">Perseverance</option>
            <option value="spirit">Spirit</option>
            <option value="opportunity">Opportunity</option>
          </optgroup>
          <optgroup label="Moon Missions">
            <option value="apollo-11">Apollo 11</option>
            <option value="luna-2">Luna 2</option>
            <option value="chang-e-4">Chang'e 4</option>
            <option value="artemis-1">Artemis 1</option>
          </optgroup>
          <optgroup label="Jupiter Missions">
            <option value="galileo">Galileo</option>
            <option value="juno">Juno</option>
          </optgroup>
          <optgroup label="Saturn Missions">
            <option value="cassini">Cassini</option>
            <option value="huygens">Huygens</option>
          </optgroup>
          <optgroup label="Asteroid Missions">
            <option value="hayabusa">Hayabusa</option>
            <option value="osiris-rex">OSIRIS-REx</option>
          </optgroup>
          <optgroup label="Comet Missions">
            <option value="rosetta">Rosetta</option>
            <option value="deep-impact">Deep Impact</option>
          </optgroup>
          <optgroup label="Venus Missions">
            <option value="magellan">Magellan</option>
            <option value="akatsuki">Akatsuki</option>
          </optgroup>
          <optgroup label="Mercury Missions">
            <option value="messenger">MESSENGER</option>
            <option value="bepi-colombo">BepiColombo</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `};var d,c,g,m,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source},description:{story:"Basic example showing the select component with a label, supporting text and a lead icon.\nThe wrapped `<select>` element is making use of `<optgroup>` elements to group the options.",...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.description}}};var b,v,x,y,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:'It is mandatory to use a native `<select>` element with options inside `<gds-select>`. `<gds-select>` is only a wrapper that allows native select to be used seamlessly along with the other form controls in the design system.\n\ne.g\n\n```html\n   <gds-select>\n    <select>\n      <optgroup label="Astronomy">\n        <option value="cosmology">Cosmology</option>\n        <option value="astrophysics">Astrophysics</option>\n      </optgroup>\n    </select>\n  </gds-select>\n```\n> In web components using Shadow DOM, elements cannot be associated with each other across Shadow DOM boundaries. This is why you need to wrap a full native `select` element and it\'s options, rather than just putting options directly under `<gds-select>`. If placed in a slot, options would not be picked up due to the Shadow DOM encapsulation.',...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var f,w,k,L,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:`The lead icon is displayed to the left of the select field.
<br>It can be used to provide additional context or to visually represent the select field's purpose.
<br>It is set by adding an icon component to the 'lead' slot.`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var C,D,T,I,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"The `disabled` property can be set to disable the `gds-select` field.\n<br> e.g\n\n```html\n<gds-select disabled> ... </gds-select>\n```",...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.description}}};var A,z,P,E,O;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(z=a.parameters)==null?void 0:z.docs)==null?void 0:P.source},description:{story:"The invalid state can be set either directly using the `invalid` boolean property together with the `error-message` property, or by using a [validator](/docs/components-form-validation--docs).",...(O=(E=a.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var R,G,N,H,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(G=p.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:'The `extended-supporting-text` slot can be used to provide extended information about the select field.<br>\nThe slot will show by default when the `show-extended-supporting-text` property is set.<br>\nIf not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.\n\n```html\n<gds-select show-extended-supporting-text>\n <span slot="extended-supporting-text">...</span>\n <select><option value="">...</option></select>\n</gds-select>\n```',...(B=(H=p.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};var V,j,J,F,Q;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(j=l.parameters)==null?void 0:j.docs)==null?void 0:J.source},description:{story:"The `size` property can be set to 'small' to reduce the size of the select field.<br>\n**@property size** - The size of the select field.\n\n```html\n <gds-select size=\"small\"></gds-select>\n```",...(Q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:Q.description}}};var U,_,$,W,K;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Multiple',
  render: () => html\`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-sun slot="lead"></gds-icon-sun>
        <select multiple>
          <option value="black-holes">Black Holes</option>
          <option value="neutron-stars">Neutron Stars</option>
          <option value="supernovae">Supernovae</option>
          <option value="galaxies">Galaxies</option>
          <option value="exoplanets">Exoplanets</option>
          <option value="dark-matter">Dark Matter</option>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...($=(_=r.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"The `multiple` attribute can be set to allow multiple options to be selected on the native `<select>` element.\n\nHowever, it is not recommended to use the native select element in multi-select mode. The native select element does not provide a good user experience for multi-select, especially when there are many options. Prefer to use checkbox groups or the `<gds-dropdown>` component for multi-select functionality instead.",...(K=(W=r.parameters)==null?void 0:W.docs)==null?void 0:K.description}}};var X,Y,Z,ee,oe;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Select Size',
  render: () => html\`
    <gds-flex>
      <gds-select label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <gds-icon-compass-round slot="lead"></gds-icon-compass-round>
        <select multiple size="14">
          <optgroup label="Mars Missions">
            <option value="curiosity">Curiosity</option>
            <option value="perseverance">Perseverance</option>
            <option value="spirit">Spirit</option>
            <option value="opportunity">Opportunity</option>
          </optgroup>
          <optgroup label="Moon Missions">
            <option value="apollo-11">Apollo 11</option>
            <option value="luna-2">Luna 2</option>
            <option value="chang-e-4">Chang'e 4</option>
            <option value="artemis-1">Artemis 1</option>
          </optgroup>
          <optgroup label="Jupiter Missions">
            <option value="galileo">Galileo</option>
            <option value="juno">Juno</option>
          </optgroup>
          <optgroup label="Saturn Missions">
            <option value="cassini">Cassini</option>
            <option value="huygens">Huygens</option>
          </optgroup>
          <optgroup label="Asteroid Missions">
            <option value="hayabusa">Hayabusa</option>
            <option value="osiris-rex">OSIRIS-REx</option>
          </optgroup>
          <optgroup label="Comet Missions">
            <option value="rosetta">Rosetta</option>
            <option value="deep-impact">Deep Impact</option>
          </optgroup>
          <optgroup label="Venus Missions">
            <option value="magellan">Magellan</option>
            <option value="akatsuki">Akatsuki</option>
          </optgroup>
          <optgroup label="Mercury Missions">
            <option value="messenger">MESSENGER</option>
            <option value="bepi-colombo">BepiColombo</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  \`
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:'The native `<select size="...">` to not be confused with property `size` <br> it is the native attribute that sets the number of visible options in a select element.\n\n```html\n <gds-select>\n <select multiple size="14">\n   ...\n </select>\n</gds-select>\n```',...(oe=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};const Qe=["Default","Option","Lead","Disabled","Invalid","ExtendedSupportingText","Size","Multiple","SelectSize"];export{t as Default,s as Disabled,p as ExtendedSupportingText,a as Invalid,i as Lead,r as Multiple,n as Option,u as SelectSize,l as Size,Qe as __namedExportsOrder,Fe as default};
