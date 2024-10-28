import{k as e}from"./lit-element-BoQqPHl6.js";import"./dropdown-DG6puxnu.js";import"./menu-heading-CrrC9x42.js";import"./gds-element-RTlSuh_R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./icon-jzQ8K1tO.js";import"./directive-Ctav8iJK.js";import"./when-BxLAFfhK.js";import"./if-defined-OiR-h1RO.js";import"./class-map-BBGuaYF3.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./chevron-bottom-vJKcTK_L.js";import"./checkmark-Dmy_7y5A.js";import"./ref-Bq52Xjdl.js";import"./async-directive-DPLqQocF.js";import"./directive-helpers-8zWUTkHM.js";import"./transitional-styles-9whFD-yV.js";import"./tokens.style-DI3Y9gRF.js";import"./popover-acoF-ckh.js";import"./floating-ui.dom-DaFISw-x.js";import"./cross-small-BgcbB_fi.js";import"./backdrop-CljoM9rw.js";import"./button-DkAXBv-k.js";import"./static-C_6dgFWo.js";const No={title:"Docs/Components/Form/Dropdown",component:"gds-dropdown",subcomponents:{Option:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)

A dropdown enables the user to choose one or multiple options from a list. It's ideal for
situations where there are numerous predetermined choices and space is limited.

The dropdown can be searchable, allowing users to filter the options by typing in the input
field, and it also suports both single and multiple selection.`}}},tags:["autodocs"]},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{innerHTML:`<gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
<gds-option value="falcon-1">Millenium Falcon</gds-option>
<gds-option value="defiant-1">Defiant</gds-option>
<gds-option value="voyager-1">Voyager</gds-option>
<gds-option value="prometheus-1">Prometheus</gds-option>
<gds-option value="discovery-1">Discovery</gds-option>
<gds-option value="columbia-1">Columbia</gds-option>`,label:"Select an option"}},g={...o},t={...o,render:n=>e`
    <gds-dropdown
      onchange="document.getElementById('selected-value').innerText = event.target.value"
      label="Select a starship"
    >
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
  `},s={...o,name:"Custom trigger content",render:n=>e`
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
  `},i={...o,name:"Synced popover width",render:n=>e`
    <gds-dropdown sync-popover-width style="width: 200px">
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
    <gds-dropdown size="small" label="Select tech" hide-label>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `},p={...o,render:n=>e`
    <gds-dropdown size="small" label="Select tech" searchable hide-label>
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
    <gds-dropdown
      size="small"
      label="Select tech"
      searchable
      multiple
      hide-label
    >
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  `};var c,u,v;g.parameters={...g.parameters,docs:{...(c=g.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(v=(u=g.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var m,h,y,b,w;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown
      onchange="document.getElementById('selected-value').innerText = event.target.value"
      label="Select a starship"
    >
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
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var f,T,C,D,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var P,A,E,x,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Synced popover width',
  render: args => html\`
    <gds-dropdown sync-popover-width style="width: 200px">
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
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.description}}};var I,k,z,V,W;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(k=a.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...(W=(V=a.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var B,M,F,O,R;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(M=d.parameters)==null?void 0:M.docs)==null?void 0:F.source},description:{story:`A common use case for the small version is in constrained areas, such as table cells. In those cases,
it is also often desirable to hide the label. This can be done with the \`hide-label\` attribute.

Omitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to
screen readers.`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var H,q,G,L,Q;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown size="small" label="Select tech" hide-label>
      <gds-option value="" isplaceholder>This is a placeholder</gds-option>
      <gds-option value="warp">Warp Drive</gds-option>
      <gds-option value="cybernetics">Cybernetics</gds-option>
      <gds-option value="nanotechnology">Nanotechnology</gds-option>
      <gds-option value="cloning">Cloning</gds-option>
      <gds-option value="cryonics">Cryonics</gds-option>
      <gds-option value="teleportation">Teleportation</gds-option>
    </gds-dropdown>
  \`
}`,...(G=(q=r.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...(Q=(L=r.parameters)==null?void 0:L.docs)==null?void 0:Q.description}}};var U,Y,_,j,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown size="small" label="Select tech" searchable hide-label>
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
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source},description:{story:"In order to show a search field on the dropdown, set the `searchable` attribute.",...(J=(j=p.parameters)==null?void 0:j.docs)==null?void 0:J.description}}};var K,X,Z,$,oo;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-dropdown
      size="small"
      label="Select tech"
      searchable
      multiple
      hide-label
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
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Use the `multiple` attribute to allow multiple selections. The selected values will be displayed",...(oo=($=l.parameters)==null?void 0:$.docs)==null?void 0:oo.description}}};const Io=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Searchable","Multiple"];export{g as Basic,s as CustomTrigger,d as HiddenLabel,l as Multiple,t as OptionHeadings,r as PlaceholderOptions,p as Searchable,a as Size,i as SyncedPopoverWidth,Io as __namedExportsOrder,No as default};