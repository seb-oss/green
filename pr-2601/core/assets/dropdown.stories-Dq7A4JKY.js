import{x as e,o as s}from"./iframe-DZfCx1ov.js";import{a as d}from"./argTableProps-ChfjJlnJ.js";import"./dropdown-C3cCtmY5.js";import"./option-kwtMenhi.js";import"./menu-heading-yeKbP368.js";import"./flex-DQL0f5nx.js";import"./push-DxfkTPK8.js";import"./dropdown.component-D_u2YXb4.js";import"./localized-decorator-1X_YDkor.js";import"./query-async-bLsOLXDr.js";import"./icon.component-I5R4l-On.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bp2KcGdq.js";import"./form-control-header.component-BXb7LC9Q.js";import"./badge.component-DpJKJmAc.js";import"./flex.component-DTmNbtRV.js";import"./triangle-exclamation.component-BfIVf862.js";import"./card.component-BiYx90g4.js";import"./ref-DHGzGutZ.js";import"./unwrap-slots-BqWkyLT6.js";import"./checkmark.component-B3dyB-tG.js";import"./rbcb-toggle.template-Cd84ukjQ.js";import"./chevron-bottom.component-E8u2PLZU.js";import"./cross-small.component-Cg2CuOEF.js";import"./popover.component-Dbc0tYqd.js";import"./menu-heading.component-D0WLiUue.js";import"./push.component-lYyI-gb9.js";const I={title:"Components/Dropdown",component:"gds-dropdown",subcomponents:{GdsOption:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)

A dropdown enables the user to choose one or multiple options from a list.

The dropdown can be searchable, allowing users to filter the options by typing in the input
field, and it also supports both single and multiple selection.`}}},tags:["autodocs"],argTypes:{...d("gds-dropdown")}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{innerHTML:`
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
    `,label:"Select an option",supportingText:"Label support text"}},V={...t},F={...t,render:o=>e`
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
  `},H={...t,name:"Custom trigger content",render:o=>{const n=i=>e` <gds-flex
        slot="${s(i)}"
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
        ${n("trigger")}
        <gds-option value="v1">${n()}</gds-option>
        <gds-option value="v2">${n()}</gds-option>
        <gds-option value="v3">${n()}</gds-option>
      </gds-dropdown>
    `}},L={...t,name:"Synced popover width",render:o=>e`
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
  `},R={...t,render:o=>e`
    <gds-dropdown size="small" label="Select tech">
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},$={...t,render:o=>e`
    <gds-dropdown label="Select tech" hide-label>
      <gds-option value="">Select tech</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},q={...t,render:o=>e`
    <gds-dropdown label="Select tech">
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},O={...t,render:o=>e`
    <gds-dropdown label="Select tech" value="teleportation" clearable>
      <gds-option isplaceholder>None</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},G={...t,render:o=>e`
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
  `},z={...t,render:o=>e`
    <gds-dropdown label="Select tech" searchable multiple clearable>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},Q={...t,render:o=>e`
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
  `},_={...t,render:()=>e`
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
  `},j={...t,render:o=>e`
    <gds-dropdown label="Select tech" searchable disabled>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},U=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Clearable","Searchable","Multiple","Combobox","Validation","Disabled"];export{V as Basic,O as Clearable,Q as Combobox,H as CustomTrigger,j as Disabled,$ as HiddenLabel,z as Multiple,F as OptionHeadings,q as PlaceholderOptions,G as Searchable,R as Size,L as SyncedPopoverWidth,_ as Validation,U as __namedExportsOrder,I as default};
