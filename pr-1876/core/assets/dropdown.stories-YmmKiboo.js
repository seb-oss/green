import{x as e}from"./lit-element-C_s9q329.js";import"./dropdown-FpZqylZi.js";import"./menu-heading-h-jSB7as.js";import"./push-DR6CPeRJ.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-iufJoRiP.js";import"./custom-element-scoping-BRwcB39g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-Ct9lF4W9.js";import"./icon-B0MZHPzy.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./tokens.style-SarioPsh.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./button-Ck5JCMxE.js";import"./class-map-Bz98xO8-.js";import"./static-_ukc2i0J.js";import"./transitional-styles-CXWlQDsX.js";import"./field-base-DipKZHhv.js";import"./triangle-exclamation-B-wIpajX.js";import"./card-aIEaOFVy.js";import"./style-expression-property-Dbto4vYM.js";import"./container-CQV8FXoH.js";import"./badge-Bk0Oy8yr.js";import"./flex-DYJ5h7D3.js";import"./ref-D_ho-JAG.js";import"./directive-helpers-C6DiESt7.js";import"./checkmark-U2REtlhW.js";import"./chevron-bottom-bIUUPBrH.js";import"./popover-B9FhscPU.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-yxU1jNo3.js";import"./backdrop-ec3yctIc.js";const Yo={title:"Components/Dropdown",component:"gds-dropdown",subcomponents:{Option:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)

A dropdown enables the user to choose one or multiple options from a list. It's ideal for
situations where there are numerous predetermined choices and space is limited.

The dropdown can be searchable, allowing users to filter the options by typing in the input
field, and it also suports both single and multiple selection.`}}},tags:["autodocs"]},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{innerHTML:`
      <span slot="extended-supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-push slot="lead"></gds-icon-push>
      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
    `,label:"Select an option",supportingText:"Label support text"}},g={...o},t={...o,render:n=>e`
    <gds-dropdown
      onchange="document.getElementById('selected-value').innerText = event.target.value"
      label="Select a starship"
      supporting-text="Label support text"
    >
      <span slot="extended-supporting-text"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-menu-heading>Space vehicles</gds-menu-heading>
      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
      <gds-option value="yamato-1">Yamato</gds-option>
      <gds-option value="equinox-1">Equinox</gds-option>
      <gds-option value="daedalus-1">Daedalus</gds-option>
      <gds-menu-heading>Ground vehicles</gds-menu-heading>
      <gds-option value="at-at">AT-AT</gds-option>
      <gds-option value="at-st">AT-ST</gds-option>
      <gds-option value="at-te">AT-TE</gds-option>
      <gds-option value="at-rt">AT-RT</gds-option>
      <gds-option value="at-ap">AT-AP</gds-option>
    </gds-dropdown>
    <br />
    <div>Selected starship: <span id="selected-value"></span></div>
  `},i={...o,name:"Custom trigger content",render:n=>e`
    <gds-dropdown
      onchange="document.getElementById('trigger-value').innerText = event.target.value"
    >
      <div slot="trigger">
        <b>Selected: </b>
        <span id="trigger-value">v1</span>
      </div>
      <gds-option value="v1">Value 1</gds-option>
      <gds-option value="v2">Value 2</gds-option>
      <gds-option value="v3">Value 3</gds-option>
    </gds-dropdown>
  `},s={...o,name:"Synced popover width",render:n=>e`
    <gds-dropdown
      label="Synced popover width"
      sync-popover-width
      style="width: 200px"
    >
      <gds-option value="1701-D-1">
        Enterprise 1701-D is a starship from the TNG series
      </gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
    </gds-dropdown>
  `},a={...o,render:n=>e`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},d={...o,render:n=>e`
    <gds-dropdown size="small" label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},r={...o,render:n=>e`
    <gds-dropdown label="Select tech">
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},p={...o,render:n=>e`
    <gds-dropdown label="Select tech" searchable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
      <gds-option value="ai">Artificial Intelligence</gds-option>
      <gds-option value="robotics">Robotics</gds-option>
      <gds-option value="quantum-computing">Quantum Computing</gds-option>
      <gds-option value="biotechnology">Biotechnology</gds-option>
      <gds-option value="genetic-engineering">Genetic Engineering</gds-option>
      <gds-option value="holography">Holography</gds-option>
      <gds-option value="fusion-power">Fusion Power</gds-option>
      <gds-option value="antimatter">Antimatter</gds-option>
      <gds-option value="dark-matter">Dark Matter</gds-option>
      <gds-option value="neural-interfaces">Neural Interfaces</gds-option>
      <gds-option value="exoskeletons">Exoskeletons</gds-option>
      <gds-option value="space-elevators">Space Elevators</gds-option>
      <gds-option value="terraforming">Terraforming</gds-option>
      <gds-option value="nanobots">Nanobots</gds-option>
      <gds-option value="smart-materials">Smart Materials</gds-option>
      <gds-option value="augmented-reality">Augmented Reality</gds-option>
      <gds-option value="virtual-reality">Virtual Reality</gds-option>
      <gds-option value="brain-computer-interface"
        >Brain-Computer Interface</gds-option
      >
      <gds-option value="cybersecurity">Cybersecurity</gds-option>
      <gds-option value="biometrics">Biometrics</gds-option>
    </gds-dropdown>
  `},l={...o,render:n=>e`
    <gds-dropdown label="Select tech" searchable multiple>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},c={...o,render:n=>e`
    <gds-dropdown
      label="Select tech"
      searchable
      aria-invalid="true"
      errorMessage="This field is required"
    >
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},u={...o,render:n=>e`
    <gds-dropdown label="Select tech" searchable disabled>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `};var v,m,h;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(h=(m=g.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,b,w,f,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown
      onchange="document.getElementById('selected-value').innerText = event.target.value"
      label="Select a starship"
      supporting-text="Label support text"
    >
      <span slot="extended-supporting-text"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-menu-heading>Space vehicles</gds-menu-heading>
      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
      <gds-option value="yamato-1">Yamato</gds-option>
      <gds-option value="equinox-1">Equinox</gds-option>
      <gds-option value="daedalus-1">Daedalus</gds-option>
      <gds-menu-heading>Ground vehicles</gds-menu-heading>
      <gds-option value="at-at">AT-AT</gds-option>
      <gds-option value="at-st">AT-ST</gds-option>
      <gds-option value="at-te">AT-TE</gds-option>
      <gds-option value="at-rt">AT-RT</gds-option>
      <gds-option value="at-ap">AT-AP</gds-option>
    </gds-dropdown>
    <br />
    <div>Selected starship: <span id="selected-value"></span></div>
  \`
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.description}}};var C,S,D,x,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom trigger content',
  render: args => html\`
    <gds-dropdown
      onchange="document.getElementById('trigger-value').innerText = event.target.value"
    >
      <div slot="trigger">
        <b>Selected: </b>
        <span id="trigger-value">v1</span>
      </div>
      <gds-option value="v1">Value 1</gds-option>
      <gds-option value="v2">Value 2</gds-option>
      <gds-option value="v3">Value 3</gds-option>
    </gds-dropdown>
  \`
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.description}}};var A,N,E,W,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Synced popover width',
  render: args => html\`
    <gds-dropdown
      label="Synced popover width"
      sync-popover-width
      style="width: 200px"
    >
      <gds-option value="1701-D-1">
        Enterprise 1701-D is a starship from the TNG series
      </gds-option>
      <gds-option value="falcon-1">Millenium Falcon</gds-option>
      <gds-option value="defiant-1">Defiant</gds-option>
      <gds-option value="voyager-1">Voyager</gds-option>
      <gds-option value="prometheus-1">Prometheus</gds-option>
      <gds-option value="discovery-1">Discovery</gds-option>
      <gds-option value="columbia-1">Columbia</gds-option>
    </gds-dropdown>
  \`
}`,...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...(I=(W=s.parameters)==null?void 0:W.docs)==null?void 0:I.description}}};var M,V,B,k,q;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(B=(V=a.parameters)==null?void 0:V.docs)==null?void 0:B.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...(q=(k=a.parameters)==null?void 0:k.docs)==null?void 0:q.description}}};var L,O,R,z,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown size="small" label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:`A common use case for the small version is in constrained areas, such as table cells. In those cases,
it is also often desirable to hide the label. This can be done with the \`hide-label\` attribute.

Omitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to
screen readers.`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};var H,G,Q,U,Y;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech">
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(Q=(G=r.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...(Y=(U=r.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var _,j,J,K,X;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech" searchable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
      <gds-option value="ai">Artificial Intelligence</gds-option>
      <gds-option value="robotics">Robotics</gds-option>
      <gds-option value="quantum-computing">Quantum Computing</gds-option>
      <gds-option value="biotechnology">Biotechnology</gds-option>
      <gds-option value="genetic-engineering">Genetic Engineering</gds-option>
      <gds-option value="holography">Holography</gds-option>
      <gds-option value="fusion-power">Fusion Power</gds-option>
      <gds-option value="antimatter">Antimatter</gds-option>
      <gds-option value="dark-matter">Dark Matter</gds-option>
      <gds-option value="neural-interfaces">Neural Interfaces</gds-option>
      <gds-option value="exoskeletons">Exoskeletons</gds-option>
      <gds-option value="space-elevators">Space Elevators</gds-option>
      <gds-option value="terraforming">Terraforming</gds-option>
      <gds-option value="nanobots">Nanobots</gds-option>
      <gds-option value="smart-materials">Smart Materials</gds-option>
      <gds-option value="augmented-reality">Augmented Reality</gds-option>
      <gds-option value="virtual-reality">Virtual Reality</gds-option>
      <gds-option value="brain-computer-interface"
        >Brain-Computer Interface</gds-option
      >
      <gds-option value="cybersecurity">Cybersecurity</gds-option>
      <gds-option value="biometrics">Biometrics</gds-option>
    </gds-dropdown>
  \`
}`,...(J=(j=p.parameters)==null?void 0:j.docs)==null?void 0:J.source},description:{story:"In order to show a search field on the dropdown, set the `searchable` attribute.",...(X=(K=p.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var Z,$,oo,eo,no;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech" searchable multiple>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(oo=($=l.parameters)==null?void 0:$.docs)==null?void 0:oo.source},description:{story:"Use the `multiple` attribute to allow multiple selections. The selected values will be displayed",...(no=(eo=l.parameters)==null?void 0:eo.docs)==null?void 0:no.description}}};var to,io,so;c.parameters={...c.parameters,docs:{...(to=c.parameters)==null?void 0:to.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown
      label="Select tech"
      searchable
      aria-invalid="true"
      errorMessage="This field is required"
    >
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(so=(io=c.parameters)==null?void 0:io.docs)==null?void 0:so.source}}};var ao,ro,po;u.parameters={...u.parameters,docs:{...(ao=u.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech" searchable disabled>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(po=(ro=u.parameters)==null?void 0:ro.docs)==null?void 0:po.source}}};const _o=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Searchable","Multiple","Invalid","Disabled"];export{g as Basic,i as CustomTrigger,u as Disabled,d as HiddenLabel,c as Invalid,l as Multiple,t as OptionHeadings,r as PlaceholderOptions,p as Searchable,a as Size,s as SyncedPopoverWidth,_o as __namedExportsOrder,Yo as default};
