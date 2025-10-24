import{x as e}from"./lit-element-Bx14lxc-.js";import{a as Do}from"./argTableProps-CjhkjDs6.js";import"./option-nRnoT3NS.js";import"./menu-heading-CXLtAxzh.js";import"./flex-DzfdRhFs.js";import"./push-BNNl93qD.js";import{o as So}from"./if-defined-CVqwUuaf.js";import"./custom-elements-D9-drIBV.js";import"./dropdown.component-EBACwo34.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-BLMLDB8q.js";import"./class-map-CXsQwv0r.js";import"./gds-element-DTROifYq.js";import"./transitional-styles-C1gztw0h.js";import"./tokens.style-CA5ADGwW.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-DSof6t8L.js";import"./badge.component-31Ffk_Dp.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./flex.component-DjV-SouM.js";import"./div.component-DTdhfIq2.js";import"./triangle-exclamation.component-DRCnlnnD.js";import"./icon-Cyq3udZ2.js";import"./button.component-nte5-sOS.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-DgPbllnK.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-CufDiWNZ.js";import"./checkmark.component-CddocQY8.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-DgyIWO1Z.js";import"./cross-small.component-BS14rjKa.js";import"./popover.component-D4dN7FfN.js";const me={title:"Components/Dropdown",component:"gds-dropdown",subcomponents:{GdsOption:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)

A dropdown enables the user to choose one or multiple options from a list.

The dropdown can be searchable, allowing users to filter the options by typing in the input
field, and it also supports both single and multiple selection.`}}},tags:["autodocs"],argTypes:{...Do("gds-dropdown")}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{innerHTML:`
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
    `,label:"Select an option",supportingText:"Label support text"}},v={...t},n={...t,render:o=>e`
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
  `},i={...t,name:"Custom trigger content",render:o=>{const u=To=>e` <gds-flex
        slot="${So(To)}"
        gap="xs"
        width="100%"
        justify-content="space-between"
      >
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-regular-s">Account</gds-text>
          <gds-text>123 456</gds-text>
        </gds-flex>
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-regular-s" text-align="end">Balance</gds-text>
          <gds-text text-align="end">9 654,00</gds-text>
        </gds-flex>
      </gds-flex>`;return e`
      <gds-dropdown
        width="250px"
        onchange="document.getElementById('trigger-value').innerText = event.target.value"
      >
        ${u("trigger")}
        <gds-option value="v1">${u()}</gds-option>
        <gds-option value="v2">${u()}</gds-option>
        <gds-option value="v3">${u()}</gds-option>
      </gds-dropdown>
    `}},s={...t,name:"Synced popover width",render:o=>e`
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
  `},a={...t,render:o=>e`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},r={...t,render:o=>e`
    <gds-dropdown label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},d={...t,render:o=>e`
    <gds-dropdown label="Select tech">
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},p={...t,render:o=>e`
    <gds-dropdown label="Select tech" value="teleportation" clearable>
      <gds-option isplaceholder>None</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},l={...t,render:o=>e`
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
  `},g={...t,render:o=>e`
    <gds-dropdown label="Select tech" searchable multiple clearable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},c={...t,render:o=>e`
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
  `},m={...t,render:()=>e`
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
  `},h={...t,render:o=>e`
    <gds-dropdown label="Select tech" searchable disabled>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `};var y,b,w;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(w=(b=v.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,x,C,T,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var S,N,P,A,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom trigger content',
  render: args => {
    const optionTemplate = (slot?: string) => html\` <gds-flex
        slot="\${ifDefined(slot)}"
        gap="xs"
        width="100%"
        justify-content="space-between"
      >
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-regular-s">Account</gds-text>
          <gds-text>123 456</gds-text>
        </gds-flex>
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-regular-s" text-align="end">Balance</gds-text>
          <gds-text text-align="end">9 654,00</gds-text>
        </gds-flex>
      </gds-flex>\`;
    return html\`
      <gds-dropdown
        width="250px"
        onchange="document.getElementById('trigger-value').innerText = event.target.value"
      >
        \${optionTemplate('trigger')}
        <gds-option value="v1">\${optionTemplate()}</gds-option>
        <gds-option value="v2">\${optionTemplate()}</gds-option>
        <gds-option value="v3">\${optionTemplate()}</gds-option>
      </gds-dropdown>
    \`;
  }
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var W,k,B,I,M;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...(M=(I=s.parameters)==null?void 0:I.docs)==null?void 0:M.description}}};var R,$,F,V,q;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=($=a.parameters)==null?void 0:$.docs)==null?void 0:F.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...(q=(V=a.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var G,H,L,O,z;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
screen readers.`,...(z=(O=r.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};var Q,U,j,Y,_;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...(_=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:_.description}}};var J,K,X,Z,oo;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=p.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"To make it easy for users to clear a field, an x-icon button can be placed at the end of the field. This is commonly used in search/filter forms.",...(oo=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:oo.description}}};var eo,to,no,io,so;l.parameters={...l.parameters,docs:{...(eo=l.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(no=(to=l.parameters)==null?void 0:to.docs)==null?void 0:no.source},description:{story:"In order to show a search field on the dropdown, set the `searchable` attribute.",...(so=(io=l.parameters)==null?void 0:io.docs)==null?void 0:so.description}}};var ao,ro,po,lo,go;g.parameters={...g.parameters,docs:{...(ao=g.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(po=(ro=g.parameters)==null?void 0:ro.docs)==null?void 0:po.source},description:{story:"Use the `multiple` attribute to allow multiple selections. The selected values will be displayed",...(go=(lo=g.parameters)==null?void 0:lo.docs)==null?void 0:go.description}}};var co,uo,vo,mo,ho;c.parameters={...c.parameters,docs:{...(co=c.parameters)==null?void 0:co.docs,source:{originalSource:`{
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
}`,...(vo=(uo=c.parameters)==null?void 0:uo.docs)==null?void 0:vo.source},description:{story:"The dropdown supports the combobox pattern with the `combobox` attribute.\n\nUse combobox when the user needs to have the option of entering a custom value but is also helped by a list of predefined options.\n\nDon't use combobox if you only need a searchable dropdown but don't want to allow custom values. Use the `searchable` attribute instead in that case.\n\n***Note:***\n- The `combobox` attribute doesn't work with the `multiple` attribute. If both are used, the `combobox` attribute will be ignored.\n- Custom trigger content will not be rendered when the `combobox` attribute is used, since it will be replaced with an input element internally.\n- Never combine the `searchable` attribute with the `combobox` attribute, since the combobox input is already used for filtering.\n- For practical reasons, mobile styles are disabled when the `combobox` attribute is used.",...(ho=(mo=c.parameters)==null?void 0:mo.docs)==null?void 0:ho.description}}};var yo,bo,wo;m.parameters={...m.parameters,docs:{...(yo=m.parameters)==null?void 0:yo.docs,source:{originalSource:`{
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
}`,...(wo=(bo=m.parameters)==null?void 0:bo.docs)==null?void 0:wo.source}}};var fo,xo,Co;h.parameters={...h.parameters,docs:{...(fo=h.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
}`,...(Co=(xo=h.parameters)==null?void 0:xo.docs)==null?void 0:Co.source}}};const he=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Clearable","Searchable","Multiple","Combobox","Validation","Disabled"];export{v as Basic,p as Clearable,c as Combobox,i as CustomTrigger,h as Disabled,r as HiddenLabel,g as Multiple,n as OptionHeadings,d as PlaceholderOptions,l as Searchable,a as Size,s as SyncedPopoverWidth,m as Validation,he as __namedExportsOrder,me as default};
