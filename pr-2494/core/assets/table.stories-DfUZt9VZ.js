import{x as a}from"./lit-element-Bx14lxc-.js";import"./table-BG6pL1CJ.js";import"./card-DyXo8X_p.js";import"./dropdown-DVry7Sq_.js";import"./context-menu-CDIXMzW3.js";import"./input-t17hjOpz.js";import"./img-DEXixTDX.js";import"./dot-grid-one-horizontal-BOnAowu1.js";import"./plus-small-CiRRkLCU.js";import"./sort.component-DkCP_pJk.js";import"./formatted-number-CvRzgrtG.js";import"./formatted-account-DzsWd_LT.js";import"./formatted-date-BD57dwK5.js";import{a as M}from"./argTableProps-BQm2AZMG.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CA5ADGwW.js";import"./button.component-jWIOpC9g.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CbHKJeDE.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./card.component-DgPbllnK.js";import"./div.component-DTdhfIq2.js";import"./dropdown.component-D7FNft71.js";import"./runtime-CNluP0A8.js";import"./query-async-MEroNOeJ.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-D0_bY0pL.js";import"./form-control-header.component-Dfb0kX8g.js";import"./badge.component-31Ffk_Dp.js";import"./flex.component-DjV-SouM.js";import"./triangle-exclamation.component-DRCnlnnD.js";import"./icon-Cyq3udZ2.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-BAfI8-gi.js";import"./checkmark.component-CddocQY8.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-DgyIWO1Z.js";import"./cross-small.component-BS14rjKa.js";import"./popover.component-DCEJN6lh.js";import"./magnifying-glass.component-U0Z7YZT0.js";import"./text-BmaBdEcP.js";import"./default-typography.styles-CqiDF2RS.js";import"./minus-small.component-DOCzMU52.js";import"./menu-heading.component-IcKfQh5D.js";import"./textarea.component-DZR1ihIH.js";import"./resize-observer-B9k8v2TZ.js";import"./img.component-BEvkoull.js";import"./formatted-text-B1Gf-los.js";import"./formatted-date.component-Bwr0RgRA.js";import"./custom-elements-BN2SrMp0.js";const U=100,z=1e3,b=["Admin","User","Editor"],$=["Active","Inactive"],v=["Engineering","Sales","Marketing","Support","HR"],R=e=>{const t=e+1,o=["Jane","John","Bob","Alice","Charlie","Diana"][e%6],s=["Smith","Doe","Williams","Brown","Jones"][e%5];return{id:t,name:`${o} ${s}`,email:`${o.toLowerCase()}.${s.toLowerCase()}@company.com`,role:b[e%b.length],status:$[e%$.length],department:v[e%v.length],amount:Math.floor(Math.random()*1e5)+1e3,account:`5440${String(Math.floor(Math.random()*1e7)).padStart(7,"0")}`,lastLogin:new Date(Date.now()-Math.random()*1e10).toISOString(),avatarUrl:e===1?"https://github.com/astrit.png":void 0}},w=()=>Array.from({length:U},(e,t)=>R(t)),m=async e=>{await new Promise(n=>setTimeout(n,z));let o=[...w()];if(e.searchQuery){const n=e.searchQuery.toLowerCase();o=o.filter(c=>Object.values(c).some(l=>String(l).toLowerCase().includes(n)))}e.sortColumn&&o.sort((n,c)=>{const l=String(n[e.sortColumn]),p=String(c[e.sortColumn]);return e.sortDirection==="asc"?l.localeCompare(p):p.localeCompare(l)});const s=(e.page-1)*e.pageSize,P=s+e.pageSize;return{data:o.slice(s,P),total:o.length}},g=[{key:"id",label:"ID",sortable:!1,align:"left"},{key:"name",label:"Name",sortable:!0,slots:{lead:e=>e.avatarUrl?a` <gds-img
              src="${e.avatarUrl}"
              alt="${e.name} avatar"
              border-radius="max"
              width="24px"
              height="24px"
            ></gds-img>`:null}},{key:"email",label:"Email",sortable:!0,justify:!0,slots:{trail:e=>a`
        <gds-button
          size="small"
          rank="tertiary"
          @click=${async t=>{t.stopPropagation(),await navigator.clipboard.writeText(e.email),console.log(`Copied email: ${e.email}`)}}
          title="Copy email"
        >
          <gds-icon-copy size="m"></gds-icon-copy>
        </gds-button>
      `}},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0,slots:{value:e=>a`
        <gds-badge
          size="small"
          variant="${e.status==="Active"?"positive":"negative"}"
        >
          ${e.status}
        </gds-badge>
      `}},{key:"amount",label:"Amount",sortable:!0,align:"right",slots:{value:e=>a`
        <gds-formatted-number>${e.amount}</gds-formatted-number>
      `,trail:()=>a` <gds-badge size="small">SEK</gds-badge> `}},{key:"account",label:"Account",sortable:!0,align:"right",slots:{value:e=>a`
        <gds-formatted-account
          .account="${e.account}"
          format="seb-account"
        ></gds-formatted-account>
      `}},{key:"lastLogin",label:"Last Login",sortable:!0,align:"left",slots:{value:e=>a`
        <gds-formatted-date
          .value="${e.lastLogin}"
          locale="sv-SE"
          format="dateLong"
        ></gds-formatted-date>
      `}}],u=e=>a`
  <gds-context-menu>
    <gds-button
      slot="trigger"
      size="small"
      rank="tertiary"
      aria-label="Actions for ${e.name}"
    >
      <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
    </gds-button>

    <!-- Status toggle action -->
    <gds-menu-item @click=${()=>console.log("Toggle status for:",e)}>
      ${e.status==="Active"?"Deactivate":"Activate"}
    </gds-menu-item>

    <!-- View logs action -->
    <gds-menu-item @click=${()=>console.log("View activity log for:",e)}>
      View Activity Log
    </gds-menu-item>

    <!-- Edit action -->
    <gds-menu-item @click=${()=>console.log("Edit user:",e)}>
      Edit User
    </gds-menu-item>

    <gds-divider></gds-divider>

    <!-- Delete action -->
    <gds-menu-item
      variant="negative"
      @click=${()=>{confirm(`Delete user ${e.name}?`)&&console.log("Delete user:",e)}}
    >
      Delete User
    </gds-menu-item>
  </gds-context-menu>
`,Be={title:"Components/Table",component:"gds-table",argTypes:{...M("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},selectable:{control:{type:"boolean"},defaultValue:!0}},tags:["autodocs"],parameters:{docs:{description:{component:`
A comprehensive table component with enterprise features:

- **Data Management**: Async data loading with pagination
- **Search & Filter**: Built-in search functionality
- **Sorting**: Column-based sorting (ascending/descending)
- **Selection**: Row selection with select all capability
- **Responsive**: Mobile-friendly responsive design
- **Customization**: Flexible column rendering with slots
- **Actions**: Row-level actions via context menu
- **Performance**: Client-side caching for better UX
        `}}}},r={args:{columns:g,actions:u,density:"comfortable",dataProvider:m,selectable:!0,title:"User Management",subtitle:"Manage system users and their permissions"},render:e=>a`
    <gds-table
      title="${e.title}"
      subtitle="${e.subtitle}"
      ?selectable="${e.selectable}"
      density="${e.density}"
      .columns="${e.columns}"
      .dataProvider="${e.dataProvider}"
      .actions="${e.actions}"
      @data-loaded="${t=>console.log("✓ Data loaded:",t.detail)}"
      @data-error="${t=>console.error("✗ Error loading data:",t.detail)}"
      @selection-change="${t=>console.log("→ Selection changed:",t.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  `},i={args:{columns:g,actions:u,density:"comfortable",dataProvider:m,selectable:!0,title:"User Management",subtitle:"Manage system users and their permissions",plain:!0},render:e=>a`
    <gds-table
      .plain="${e.plain}"
      title="${e.title}"
      subtitle="${e.subtitle}"
      ?selectable="${e.selectable}"
      density="${e.density}"
      .columns="${e.columns}"
      .dataProvider="${e.dataProvider}"
      .actions="${e.actions}"
      @data-loaded="${t=>console.log("✓ Data loaded:",t.detail)}"
      @data-error="${t=>console.error("✗ Error loading data:",t.detail)}"
      @selection-change="${t=>console.log("→ Selection changed:",t.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  `},d={args:{columns:g,actions:u,density:"comfortable",dataProvider:m,selectable:!0,title:"User Management",subtitle:"Manage system users and their permissions",responsive:!0},render:e=>a`
    <gds-table
      .responsive="${e.responsive}"
      title="${e.title}"
      subtitle="${e.subtitle}"
      ?selectable="${e.selectable}"
      density="${e.density}"
      .columns="${e.columns}"
      .dataProvider="${e.dataProvider}"
      .actions="${e.actions}"
      @data-loaded="${t=>console.log("✓ Data loaded:",t.detail)}"
      @data-error="${t=>console.error("✗ Error loading data:",t.detail)}"
      @selection-change="${t=>console.log("→ Selection changed:",t.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  `};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns: tableColumns,
    actions: renderRowActions,
    density: 'comfortable',
    dataProvider: mockDataProvider,
    selectable: true,
    title: 'User Management',
    subtitle: 'Manage system users and their permissions'
  },
  render: args => html\`
    <gds-table
      title="\${args.title}"
      subtitle="\${args.subtitle}"
      ?selectable="\${args.selectable}"
      density="\${args.density}"
      .columns="\${args.columns}"
      .dataProvider="\${args.dataProvider}"
      .actions="\${args.actions}"
      @data-loaded="\${(e: CustomEvent) => console.log('✓ Data loaded:', e.detail)}"
      @data-error="\${(e: CustomEvent) => console.error('✗ Error loading data:', e.detail)}"
      @selection-change="\${(e: CustomEvent) => console.log('→ Selection changed:', e.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  \`
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var E,S,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    columns: tableColumns,
    actions: renderRowActions,
    density: 'comfortable',
    dataProvider: mockDataProvider,
    selectable: true,
    title: 'User Management',
    subtitle: 'Manage system users and their permissions',
    plain: true
  },
  render: args => html\`
    <gds-table
      .plain="\${args.plain}"
      title="\${args.title}"
      subtitle="\${args.subtitle}"
      ?selectable="\${args.selectable}"
      density="\${args.density}"
      .columns="\${args.columns}"
      .dataProvider="\${args.dataProvider}"
      .actions="\${args.actions}"
      @data-loaded="\${(e: CustomEvent) => console.log('✓ Data loaded:', e.detail)}"
      @data-error="\${(e: CustomEvent) => console.error('✗ Error loading data:', e.detail)}"
      @selection-change="\${(e: CustomEvent) => console.log('→ Selection changed:', e.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  \`
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,C,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: tableColumns,
    actions: renderRowActions,
    density: 'comfortable',
    dataProvider: mockDataProvider,
    selectable: true,
    title: 'User Management',
    subtitle: 'Manage system users and their permissions',
    responsive: true
  },
  render: args => html\`
    <gds-table
      .responsive="\${args.responsive}"
      title="\${args.title}"
      subtitle="\${args.subtitle}"
      ?selectable="\${args.selectable}"
      density="\${args.density}"
      .columns="\${args.columns}"
      .dataProvider="\${args.dataProvider}"
      .actions="\${args.actions}"
      @data-loaded="\${(e: CustomEvent) => console.log('✓ Data loaded:', e.detail)}"
      @data-error="\${(e: CustomEvent) => console.error('✗ Error loading data:', e.detail)}"
      @selection-change="\${(e: CustomEvent) => console.log('→ Selection changed:', e.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  \`
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const Fe=["Default","Plain","Responsive"];export{r as Default,i as Plain,d as Responsive,Fe as __namedExportsOrder,Be as default};
