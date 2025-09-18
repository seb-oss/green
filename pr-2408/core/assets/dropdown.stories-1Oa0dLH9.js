import{x as n}from"./lit-element-Bx14lxc-.js";import{a as To}from"./argTableProps-CKUnRBa1.js";import"./option-BdJavJb5.js";import"./menu-heading-BFIm_Bkm.js";import"./push-D57Whups.js";import"./custom-elements-bn2ze8EQ.js";import"./dropdown.component-uOEeh7FR.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./unsafe-html-CYO4avEf.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-CPtp5zqH.js";import"./gds-element-DTROifYq.js";import"./transitional-styles-D2m6PuZd.js";import"./tokens.style-BS_h03Rl.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-C-yQvAXj.js";import"./badge.component-cjposznY.js";import"./declarative-layout-mixins-XrCARJjW.js";import"./flex.component-CK9zIHJP.js";import"./div.component-DevXYBKS.js";import"./triangle-exclamation.component-DHLEwxeu.js";import"./icon-BDarXmWU.js";import"./button.component-CpGiPPR4.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BoyFZUS8.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-CufDiWNZ.js";import"./checkmark.component-CMelikpB.js";import"./rbcb-toggle.template-B-MDayTD.js";import"./chevron-bottom.component-CckYduX_.js";import"./cross-small.component-dzuPrqzv.js";import"./popover.component-C7ifnrUG.js";const le={title:"Components/Dropdown",component:"gds-dropdown",subcomponents:{GdsOption:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)

A dropdown enables the user to choose one or multiple options from a list.

The dropdown can be searchable, allowing users to filter the options by typing in the input
field, and it also supports both single and multiple selection.`}}},tags:["autodocs"],argTypes:{...To("gds-dropdown")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{innerHTML:`
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
    `,label:"Select an option",supportingText:"Label support text"}},u={...e},t={...e,render:o=>n`
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
  `},i={...e,name:"Custom trigger content",render:o=>n`
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
  `},s={...e,name:"Synced popover width",render:o=>n`
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
  `},a={...e,render:o=>n`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},r={...e,render:o=>n`
    <gds-dropdown label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},d={...e,render:o=>n`
    <gds-dropdown label="Select tech">
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},p={...e,render:o=>n`
    <gds-dropdown label="Select tech" value="teleportation" clearable>
      <gds-option isplaceholder>None</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},l={...e,render:o=>n`
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
  `},g={...e,render:o=>n`
    <gds-dropdown label="Select tech" searchable multiple clearable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},c={...e,render:o=>n`
    <gds-dropdown label="Favorite sci-fi tech" combobox>
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
  `},v={...e,render:()=>n`
    <gds-dropdown
      label="Select tech"
      searchable
      @change=${o=>o.target.reportValidity()}
      .validator=${{validate:o=>{if(!o.value)return[{...o.validity,valid:!1,customError:!0},"Please select a technology"];if(o.value==="warp")return[{...o.validity,valid:!1,customError:!0},"Warp drive is not yet available"]}}}
    >
      <gds-option value="" isplaceholder>Select a technology</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},m={...e,render:o=>n`
    <gds-dropdown label="Select tech" searchable disabled>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `};var h,y,b;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(b=(y=u.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,f,C,T,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...(S=(T=t.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var D,x,N,P,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var A,W,k,I,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(W=s.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.description}}};var B,M,R,F,q;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(M=a.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...(q=(F=a.parameters)==null?void 0:F.docs)==null?void 0:q.description}}};var G,H,L,O,z;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(L=(H=r.parameters)==null?void 0:H.docs)==null?void 0:L.source},description:{story:`A common use case for the small version is in constrained areas, such as table cells. In those cases,
it is also often desirable to hide the label. This can be done with the \`hide-label\` attribute.

Omitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to
screen readers.`,...(z=(O=r.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};var Q,U,$,Y,_;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...(_=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:_.description}}};var j,J,K,X,Z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech" value="teleportation" clearable>
      <gds-option isplaceholder>None</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"To make it easy for users to clear a field, an x-icon button can be placed at the end of the field. This is commonly used in search/filter forms.",...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var oo,eo,no,to,io;l.parameters={...l.parameters,docs:{...(oo=l.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(no=(eo=l.parameters)==null?void 0:eo.docs)==null?void 0:no.source},description:{story:"In order to show a search field on the dropdown, set the `searchable` attribute.",...(io=(to=l.parameters)==null?void 0:to.docs)==null?void 0:io.description}}};var so,ao,ro,po,lo;g.parameters={...g.parameters,docs:{...(so=g.parameters)==null?void 0:so.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Select tech" searchable multiple clearable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(ro=(ao=g.parameters)==null?void 0:ao.docs)==null?void 0:ro.source},description:{story:"Use the `multiple` attribute to allow multiple selections. The selected values will be displayed",...(lo=(po=g.parameters)==null?void 0:po.docs)==null?void 0:lo.description}}};var go,co,uo,vo,mo;c.parameters={...c.parameters,docs:{...(go=c.parameters)==null?void 0:go.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown label="Favorite sci-fi tech" combobox>
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
}`,...(uo=(co=c.parameters)==null?void 0:co.docs)==null?void 0:uo.source},description:{story:"The dropdown supports the combobox pattern with the `combobox` attribute.\n\nUse combobox when the user needs to have the option of entering a custom value but is also helped by a list of predefined options.\n\nDon't use combobox if you only need a searchable dropdown but don't want to allow custom values. Use the `searchable` attribute instead in that case.\n\n***Note:***\n- The `combobox` attribute doesn't work with the `multiple` attribute. If both are used, the `combobox` attribute will be ignored.\n- Custom trigger content will not be rendered when the `combobox` attribute is used, since it will be replaced with an input element internally.\n- Never combine the `searchable` attribute with the `combobox` attribute, since the combobox input is already used for filtering.\n- For practical reasons, mobile styles are disabled when the `combobox` attribute is used.",...(mo=(vo=c.parameters)==null?void 0:vo.docs)==null?void 0:mo.description}}};var ho,yo,bo;v.parameters={...v.parameters,docs:{...(ho=v.parameters)==null?void 0:ho.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-dropdown
      label="Select tech"
      searchable
      @change=\${(e: any) => e.target.reportValidity()}
      .validator=\${{
    validate: (el: any) => {
      if (!el.value) {
        return [{
          ...el.validity,
          valid: false,
          customError: true
        }, 'Please select a technology'];
      }
      if (el.value === 'warp') {
        return [{
          ...el.validity,
          valid: false,
          customError: true
        }, 'Warp drive is not yet available'];
      }
    }
  }}
    >
      <gds-option value="" isplaceholder>Select a technology</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(bo=(yo=v.parameters)==null?void 0:yo.docs)==null?void 0:bo.source}}};var wo,fo,Co;m.parameters={...m.parameters,docs:{...(wo=m.parameters)==null?void 0:wo.docs,source:{originalSource:`{
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
}`,...(Co=(fo=m.parameters)==null?void 0:fo.docs)==null?void 0:Co.source}}};const ge=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Clearable","Searchable","Multiple","Combobox","Validation","Disabled"];export{u as Basic,p as Clearable,c as Combobox,i as CustomTrigger,m as Disabled,r as HiddenLabel,g as Multiple,t as OptionHeadings,d as PlaceholderOptions,l as Searchable,a as Size,s as SyncedPopoverWidth,v as Validation,ge as __namedExportsOrder,le as default};
