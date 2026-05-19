import{b as e,o as Io}from"./iframe-BfjVQBhS.js";import{a as Wo}from"./argTableProps-Qs7z-sFD.js";import"./dropdown-NRdvC807.js";import"./option-__cg0Lor.js";import"./menu-heading-C-PqzWQq.js";import"./flex-CsQQXgbH.js";import"./push-ChEXgA4U.js";import"./preload-helper-Dp1pzeXC.js";import"./dropdown.component-DtaaeMzu.js";import"./localized-decorator-BcwMFhzh.js";import"./query-async-DoOeR5E9.js";import"./icon.component-3GLbOB5p.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./form-control-host.style-BU-hyWGr.js";import"./form-control-header.component-CLuwxSq3.js";import"./badge.component-CR-q8Pvq.js";import"./flex.component-C3_-0YKv.js";import"./triangle-exclamation.component-wXhuPvu0.js";import"./card.component-S9m9p97C.js";import"./ref-BddKMkQt.js";import"./unwrap-slots-BmZuA9MO.js";import"./checkmark.component-CWbIvAVU.js";import"./rbcb-toggle.template-DMyWnMmw.js";import"./chevron-bottom.component-BvRY5pS_.js";import"./cross-small.component-LD7gsb2L.js";import"./popover.component-D5XlO4V2.js";import"./menu-heading.component-Bz3lvvpe.js";import"./push.component-D8Y3Aj6x.js";const ae={title:"Components/Dropdown",component:"gds-dropdown",subcomponents:{GdsOption:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)

A dropdown enables the user to choose one or multiple options from a list.

The dropdown can be searchable, allowing users to filter the options by typing in the input
field, and it also supports both single and multiple selection.`}}},tags:["autodocs"],argTypes:{...Wo("gds-dropdown")}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{innerHTML:`
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
    `,label:"Select an option",supportingText:"Label support text"}},m={...n},t={...n,render:o=>e`
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
  `},i={...n,name:"Custom trigger content",render:o=>{const v=Eo=>e` <gds-flex
        slot="${Io(Eo)}"
        gap="xs"
        width="100%"
        justify-content="space-between"
      >
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-s-regular">Account</gds-text>
          <gds-text>123 456</gds-text>
        </gds-flex>
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-s-regular" text-align="end">Balance</gds-text>
          <gds-text text-align="end">9 654,00</gds-text>
        </gds-flex>
      </gds-flex>`;return e`
      <gds-dropdown
        width="250px"
        onchange="document.getElementById('trigger-value').innerText = event.target.value"
      >
        ${v("trigger")}
        <gds-option value="v1">${v()}</gds-option>
        <gds-option value="v2">${v()}</gds-option>
        <gds-option value="v3">${v()}</gds-option>
      </gds-dropdown>
    `}},s={...n,name:"Synced popover width",render:o=>e`
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
  `},a={...n,render:o=>e`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},d={...n,render:o=>e`
    <gds-dropdown label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},r={...n,render:o=>e`
    <gds-dropdown label="Select tech">
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},p={...n,render:o=>e`
    <gds-dropdown label="Select tech" value="teleportation" clearable>
      <gds-option isplaceholder>None</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},l={...n,render:o=>e`
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
  `},g={...n,render:o=>e`
    <gds-dropdown label="Select tech" searchable multiple clearable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},c={...n,render:o=>e`
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
  `},h={...n,render:()=>e`
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
  `},y={...n,render:o=>e`
    <gds-dropdown label="Select tech" searchable disabled>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},u={...n,name:"ARIA Forwarding",render:()=>e`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="dropdown-label">Label text outside</div>
      <div id="dropdown-description">Associated description outside</div>
      <gds-dropdown
        plain
        gds-aria-labelledby="dropdown-label"
        gds-aria-describedby="dropdown-description"
        gds-aria-errormessage="dropdown-error"
        invalid
      >
        <gds-option value="" isplaceholder>Select an option</gds-option>
        <gds-option value="1">Option 1</gds-option>
        <gds-option value="2">Option 2</gds-option>
      </gds-dropdown>
      <div id="dropdown-error">Associated error message outside</div>
    </gds-flex>
  `};var b,w,f;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(f=(w=m.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,C,T,D,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(C=t.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...(S=(D=t.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var A,P,N,E,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
          <gds-text font="detail-s-regular">Account</gds-text>
          <gds-text>123 456</gds-text>
        </gds-flex>
        <gds-flex flex-direction="column" gap="2xs">
          <gds-text font="detail-s-regular" text-align="end">Balance</gds-text>
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
}`,...(N=(P=i.parameters)==null?void 0:P.docs)==null?void 0:N.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var W,k,B,F,M;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...(M=(F=s.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var R,O,$,V,q;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(O=a.parameters)==null?void 0:O.docs)==null?void 0:$.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...(q=(V=a.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var L,G,H,z,Q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:`A common use case for the small version is in constrained areas, such as table cells. In those cases,
it is also often desirable to hide the label. This can be done with the \`hide-label\` attribute.

Omitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to
screen readers.`,...(Q=(z=d.parameters)==null?void 0:z.docs)==null?void 0:Q.description}}};var U,j,Y,_,J;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:Y.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...(J=(_=r.parameters)==null?void 0:_.docs)==null?void 0:J.description}}};var K,X,Z,oo,eo;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"To make it easy for users to clear a field, an x-icon button can be placed at the end of the field. This is commonly used in search/filter forms.",...(eo=(oo=p.parameters)==null?void 0:oo.docs)==null?void 0:eo.description}}};var no,to,io,so,ao;l.parameters={...l.parameters,docs:{...(no=l.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(io=(to=l.parameters)==null?void 0:to.docs)==null?void 0:io.source},description:{story:"In order to show a search field on the dropdown, set the `searchable` attribute.",...(ao=(so=l.parameters)==null?void 0:so.docs)==null?void 0:ao.description}}};var ro,po,lo,go,co;g.parameters={...g.parameters,docs:{...(ro=g.parameters)==null?void 0:ro.docs,source:{originalSource:`{
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
}`,...(lo=(po=g.parameters)==null?void 0:po.docs)==null?void 0:lo.source},description:{story:"Use the `multiple` attribute to allow multiple selections. The selected values will be displayed",...(co=(go=g.parameters)==null?void 0:go.docs)==null?void 0:co.description}}};var uo,vo,mo,ho,yo;c.parameters={...c.parameters,docs:{...(uo=c.parameters)==null?void 0:uo.docs,source:{originalSource:`{
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
}`,...(mo=(vo=c.parameters)==null?void 0:vo.docs)==null?void 0:mo.source},description:{story:"The dropdown supports the combobox pattern with the `combobox` attribute.\n\nUse combobox when the user needs to have the option of entering a custom value but is also helped by a list of predefined options.\n\nDon't use combobox if you only need a searchable dropdown but don't want to allow custom values. Use the `searchable` attribute instead in that case.\n\n***Note:***\n- The `combobox` attribute doesn't work with the `multiple` attribute. If both are used, the `combobox` attribute will be ignored.\n- Custom trigger content will not be rendered when the `combobox` attribute is used, since it will be replaced with an input element internally.\n- Never combine the `searchable` attribute with the `combobox` attribute, since the combobox input is already used for filtering.\n- For practical reasons, mobile styles are disabled when the `combobox` attribute is used.",...(yo=(ho=c.parameters)==null?void 0:ho.docs)==null?void 0:yo.description}}};var bo,wo,fo;h.parameters={...h.parameters,docs:{...(bo=h.parameters)==null?void 0:bo.docs,source:{originalSource:`{
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
}`,...(fo=(wo=h.parameters)==null?void 0:wo.docs)==null?void 0:fo.source}}};var xo,Co,To;y.parameters={...y.parameters,docs:{...(xo=y.parameters)==null?void 0:xo.docs,source:{originalSource:`{
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
}`,...(To=(Co=y.parameters)==null?void 0:Co.docs)==null?void 0:To.source}}};var Do,So,Ao,Po,No;u.parameters={...u.parameters,docs:{...(Do=u.parameters)==null?void 0:Do.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="dropdown-label">Label text outside</div>
      <div id="dropdown-description">Associated description outside</div>
      <gds-dropdown
        plain
        gds-aria-labelledby="dropdown-label"
        gds-aria-describedby="dropdown-description"
        gds-aria-errormessage="dropdown-error"
        invalid
      >
        <gds-option value="" isplaceholder>Select an option</gds-option>
        <gds-option value="1">Option 1</gds-option>
        <gds-option value="2">Option 2</gds-option>
      </gds-dropdown>
      <div id="dropdown-error">Associated error message outside</div>
    </gds-flex>
  \`
}`,...(Ao=(So=u.parameters)==null?void 0:So.docs)==null?void 0:Ao.source},description:{story:`In some cases it may be necessary to label the dropdown using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal trigger element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-dropdown), and not only the inner trigger.
For dropdowns, prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal trigger element.`,...(No=(Po=u.parameters)==null?void 0:Po.docs)==null?void 0:No.description}}};const de=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Clearable","Searchable","Multiple","Combobox","Validation","Disabled","AriaForwarding"];export{u as AriaForwarding,m as Basic,p as Clearable,c as Combobox,i as CustomTrigger,y as Disabled,d as HiddenLabel,g as Multiple,t as OptionHeadings,r as PlaceholderOptions,l as Searchable,a as Size,s as SyncedPopoverWidth,h as Validation,de as __namedExportsOrder,ae as default};
