import{x as o}from"./lit-element-Bx14lxc-.js";import"./table-CuL4GnhP.js";import"./card-DyXo8X_p.js";import"./dropdown-DVry7Sq_.js";import"./context-menu-CDIXMzW3.js";import"./input-t17hjOpz.js";import"./img-DEXixTDX.js";import"./dot-grid-one-horizontal-BOnAowu1.js";import"./plus-small-CiRRkLCU.js";import"./sort.component-DkCP_pJk.js";import"./formatted-number-CvRzgrtG.js";import"./formatted-account-DzsWd_LT.js";import"./formatted-date-BD57dwK5.js";import{a as h}from"./argTableProps-NNVD2bfK.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CA5ADGwW.js";import"./button.component-jWIOpC9g.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CbHKJeDE.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./watch-tFciLXSI.js";import"./card.component-DgPbllnK.js";import"./div.component-DTdhfIq2.js";import"./dropdown.component-D7FNft71.js";import"./runtime-CNluP0A8.js";import"./query-async-MEroNOeJ.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-D0_bY0pL.js";import"./form-control-header.component-Dfb0kX8g.js";import"./badge.component-31Ffk_Dp.js";import"./flex.component-DjV-SouM.js";import"./triangle-exclamation.component-DRCnlnnD.js";import"./icon-Cyq3udZ2.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-BAfI8-gi.js";import"./checkmark.component-CddocQY8.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-DgyIWO1Z.js";import"./cross-small.component-BS14rjKa.js";import"./popover.component-DCEJN6lh.js";import"./magnifying-glass.component-U0Z7YZT0.js";import"./text-BmaBdEcP.js";import"./default-typography.styles-CqiDF2RS.js";import"./minus-small.component-DOCzMU52.js";import"./menu-heading.component-IcKfQh5D.js";import"./textarea.component-DZR1ihIH.js";import"./resize-observer-B9k8v2TZ.js";import"./img.component-BEvkoull.js";import"./formatted-text-B1Gf-los.js";import"./formatted-date.component-Bwr0RgRA.js";import"./custom-elements-Dcfl3d6C.js";const y=100,f=1e3,d=["Admin","User","Editor"],c=["Active","Inactive"],g=["Engineering","Sales","Marketing","Support","HR"],$=t=>{const e=t+1,a=["Jane","John","Bob","Alice","Charlie","Diana"][t%6],s=["Smith","Doe","Williams","Brown","Jones"][t%5];return{id:e,name:`${a} ${s}`,email:`${a.toLowerCase()}.${s.toLowerCase()}@company.com`,role:d[t%d.length],status:c[t%c.length],department:g[t%g.length],amount:Math.floor(Math.random()*1e5)+1e3,account:`5440${String(Math.floor(Math.random()*1e7)).padStart(7,"0")}`,lastLogin:new Date(Date.now()-Math.random()*1e10).toISOString(),avatarUrl:t===1?"https://github.com/astrit.png":void 0}},S=()=>Array.from({length:y},(t,e)=>$(e)),D=async t=>{await new Promise(n=>setTimeout(n,f));let a=[...S()];if(t.searchQuery){const n=t.searchQuery.toLowerCase();a=a.filter(l=>Object.values(l).some(i=>String(i).toLowerCase().includes(n)))}t.sortColumn&&a.sort((n,l)=>{const i=String(n[t.sortColumn]),m=String(l[t.sortColumn]);return t.sortDirection==="asc"?i.localeCompare(m):m.localeCompare(i)});const s=(t.page-1)*t.pageSize,v=s+t.pageSize;return{data:a.slice(s,v),total:a.length}},A=[{key:"id",label:"ID",sortable:!1,align:"left"},{key:"name",label:"Name",sortable:!0,slots:{lead:t=>t.avatarUrl?o` <gds-img
              src="${t.avatarUrl}"
              alt="${t.name} avatar"
              border-radius="max"
              width="24px"
              height="24px"
            ></gds-img>`:null}},{key:"email",label:"Email",sortable:!0,justify:!0,slots:{trail:t=>o`
        <gds-button
          size="small"
          rank="tertiary"
          @click=${async e=>{e.stopPropagation(),await navigator.clipboard.writeText(t.email),console.log(`Copied email: ${t.email}`)}}
          title="Copy email"
        >
          <gds-icon-copy size="m"></gds-icon-copy>
        </gds-button>
      `}},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0,slots:{value:t=>o`
        <gds-badge
          size="small"
          variant="${t.status==="Active"?"positive":"negative"}"
        >
          ${t.status}
        </gds-badge>
      `}},{key:"amount",label:"Amount",sortable:!0,align:"right",slots:{value:t=>o`
        <gds-formatted-number>${t.amount}</gds-formatted-number>
      `,trail:()=>o` <gds-badge size="small">SEK</gds-badge> `}},{key:"account",label:"Account",sortable:!0,align:"right",slots:{value:t=>o`
        <gds-formatted-account
          .account="${t.account}"
          format="seb-account"
        ></gds-formatted-account>
      `}},{key:"lastLogin",label:"Last Login",sortable:!0,align:"left",slots:{value:t=>o`
        <gds-formatted-date
          .value="${t.lastLogin}"
          locale="sv-SE"
          format="dateLong"
        ></gds-formatted-date>
      `}}],k=t=>o`
  <gds-context-menu>
    <gds-button
      slot="trigger"
      size="small"
      rank="tertiary"
      aria-label="Actions for ${t.name}"
    >
      <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
    </gds-button>

    <!-- Status toggle action -->
    <gds-menu-item @click=${()=>console.log("Toggle status for:",t)}>
      ${t.status==="Active"?"Deactivate":"Activate"}
    </gds-menu-item>

    <!-- View logs action -->
    <gds-menu-item @click=${()=>console.log("View activity log for:",t)}>
      View Activity Log
    </gds-menu-item>

    <!-- Edit action -->
    <gds-menu-item @click=${()=>console.log("Edit user:",t)}>
      Edit User
    </gds-menu-item>

    <gds-divider></gds-divider>

    <!-- Delete action -->
    <gds-menu-item
      variant="negative"
      @click=${()=>{confirm(`Delete user ${t.name}?`)&&console.log("Delete user:",t)}}
    >
      Delete User
    </gds-menu-item>
  </gds-context-menu>
`,Rt={title:"Components/Table",component:"gds-table",argTypes:{...h("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},selectable:{control:{type:"boolean"},defaultValue:!0}},tags:["autodocs"],parameters:{docs:{description:{component:`
A comprehensive table component with enterprise features:

- **Data Management**: Async data loading with pagination
- **Search & Filter**: Built-in search functionality
- **Sorting**: Column-based sorting (ascending/descending)
- **Selection**: Row selection with select all capability
- **Responsive**: Mobile-friendly responsive design
- **Customization**: Flexible column rendering with slots
- **Actions**: Row-level actions via context menu
- **Performance**: Client-side caching for better UX
        `}}}},r={args:{columns:A,actions:k,density:"comfortable",dataProvider:D,selectable:!0,title:"User Management",subtitle:"Manage system users and their permissions"},render:t=>o`
    <gds-table
      responsive
      title="${t.title}"
      subtitle="${t.subtitle}"
      ?selectable="${t.selectable}"
      density="${t.density}"
      .columns="${t.columns}"
      .dataProvider="${t.dataProvider}"
      .actions="${t.actions}"
      @data-loaded="${e=>console.log("✓ Data loaded:",e.detail)}"
      @data-error="${e=>console.error("✗ Error loading data:",e.detail)}"
      @selection-change="${e=>console.log("→ Selection changed:",e.detail)}"
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
  `};var p,u,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      responsive
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
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const Tt=["Default"];export{r as Default,Tt as __namedExportsOrder,Rt as default};
