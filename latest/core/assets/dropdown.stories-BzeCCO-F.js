import{k as e}from"./lit-element-BoQqPHl6.js";import"./dropdown-B0EA2qdT.js";import"./menu-heading-Uetv9M9_.js";import"./gds-element-CNG85WuL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./icon-DqepV8Oa.js";import"./directive-Ctav8iJK.js";import"./when-BxLAFfhK.js";import"./if-defined-OiR-h1RO.js";import"./class-map-BBGuaYF3.js";import"./runtime-CMQcyTl6.js";import"./constrain-slots-I5VCMCIw.js";import"./watch-tFciLXSI.js";import"./chevron-bottom-DvoZQsCf.js";import"./checkmark-CJZ0AXZ-.js";import"./ref-Bq52Xjdl.js";import"./async-directive-DPLqQocF.js";import"./directive-helpers-8zWUTkHM.js";import"./transitional-styles-CR09P99V.js";import"./tokens.style-DuOE18tp.js";import"./popover-BHnekmV_.js";import"./floating-ui.dom-DaFISw-x.js";import"./cross-small-C29wuPxj.js";import"./backdrop-DOU9KOvk.js";import"./button-eMGaOrM6.js";import"./static-C_6dgFWo.js";const No={title:"Docs/Components/Form/Dropdown",component:"gds-dropdown",subcomponents:{Option:"gds-option"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/dropdown)
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
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var f,T,D,S,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var P,A,E,x,z;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...(z=(x=i.parameters)==null?void 0:x.docs)==null?void 0:z.description}}};var N,W,V,I,M;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(W=a.parameters)==null?void 0:W.docs)==null?void 0:V.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...(M=(I=a.parameters)==null?void 0:I.docs)==null?void 0:M.description}}};var O,B,F,k,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:`A common use case for the small version is in constrained areas, such as table cells. In those cases,
it is also often desirable to hide the label. This can be done with the \`hide-label\` attribute.

Omitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to
screen readers.`,...(H=(k=d.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var q,G,L,R,U;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(G=r.parameters)==null?void 0:G.docs)==null?void 0:L.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...(U=(R=r.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var Y,_,j,J,K;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    </gds-dropdown>
  \`
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:"In order to show a search field on the dropdown, set the `searchable` attribute.",...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,$,oo;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Use the `multiple` attribute to allow multiple selections. The selected values will be displayed",...(oo=($=l.parameters)==null?void 0:$.docs)==null?void 0:oo.description}}};const Wo=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions","Searchable","Multiple"];export{g as Basic,s as CustomTrigger,d as HiddenLabel,l as Multiple,t as OptionHeadings,r as PlaceholderOptions,p as Searchable,a as Size,i as SyncedPopoverWidth,Wo as __namedExportsOrder,No as default};