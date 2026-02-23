import{x as l,ac as d}from"./iframe-C8zps3Hr.js";import{n as c,e as m}from"./ref-GilDiy6B.js";import{S as b}from"./table-BUPuCgrk.js";import"./card-CnbLwzG_.js";import"./badge-BRI1MrzY.js";import"./dropdown-DQvnwhnB.js";import"./segmented-control-BEnYmmkJ.js";import"./context-menu-BkndZfKq.js";import"./input-DuADNa1P.js";import"./img-yuw4ABPT.js";import"./formatted-account-BjfvgPII.js";import"./formatted-number-B0XyN_m_.js";import"./formatted-date-TW3nJ8Mc.js";import"./pagination-ntSHxI-i.js";import"./dot-grid-one-horizontal-DJPSTrii.js";import"./arrow-rotate-counter-clockwise.component-3sMkpk7I.js";import"./zoom-out.component-BkBy1RQ-.js";import"./circle-check-CRBWIpQv.js";import"./cross-small-CqpC7Sg6.js";import{a as R}from"./argTableProps-BLdVJPJE.js";import"./localized-decorator-D8esT-iY.js";import"./popover.component-Cm-zfSgb.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D2vnY7S-.js";import"./icon.component-Chb4T9tJ.js";import"./dropdown.component-By7yAZAb.js";import"./query-async-qomeD8LK.js";import"./form-control-host.style-BavwrjIv.js";import"./form-control-header.component-Bbv1j5bg.js";import"./badge.component-Bs56dGNt.js";import"./flex.component-CeiZ5H-k.js";import"./triangle-exclamation.component-DjZQ_odg.js";import"./card.component-BPP-KrvG.js";import"./unwrap-slots-C4vfFqJV.js";import"./checkmark.component-ffn2nTlK.js";import"./rbcb-toggle.template-DnThoDMC.js";import"./chevron-bottom.component-DkzqChti.js";import"./menu-heading.component-B-mQJ89X.js";import"./context-menu.component-CEpF8jjy.js";import"./alert.component-fF4FGcVC.js";import"./circle-check.component-xAMfI9uU.js";import"./blur.component-H142H4u4.js";import"./breadcrumb.component-CrGo3VWa.js";import"./chevron-left.component-l_0O7PVA.js";import"./link.component-CQr2Y_76.js";import"./props-link-D2HpXxXA.js";import"./text-BrFkZI3i.js";import"./default-typography.styles-BAd40BYC.js";import"./calendar.component-BwqNscoD.js";import"./card-linked.component-C-_00Yzp.js";import"./checkbox-group.component-2aKI6CZO.js";import"./toggle-control-base.component-CbN6VzhQ.js";import"./minus-small.component-CSTQ4fXo.js";import"./coachmark.component-Bx_vZa1v.js";import"./datepicker.component-D0RyFwAn.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-je6FSFmc.js";import"./chevron-right.component-D7O2xPMc.js";import"./details.component-BIhzZfVH.js";import"./divider.component-D7O_-rey.js";import"./signal.component-0NWiLVU9.js";import"./filter-chips.component-BWRU3MEq.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-DPxH6HeJ.js";import"./arrow-up.component-DVjCCnxC.js";import"./grouped-list.component-v4BK14MV.js";import"./arrow-down.component-BQ0IvLt7.js";import"./arrow-left.component-NU0CZI8r.js";import"./arrow-right.component-B4Oct6j7.js";import"./sun.component-4iUN3c0s.js";import"./star.component-5ZrYKwXH.js";import"./bubbles.component-Cg2faTQx.js";import"./chain-link-3VeVx-0w.js";import"./chevron-right-small.component-tevuhHKf.js";import"./chevron-top.component-CpSqyW5d.js";import"./circles-three.component-QPKdTeJg.js";import"./cloudy-sun.component-CD_pF_-4.js";import"./credit-card.component-7Il2-T13.js";import"./folder.component-CAlOOkqE.js";import"./magnifying-glass.component-CY5yUufJ.js";import"./people-profile.component-C7lWYtpi.js";import"./push.component-BqdeJ3Jq.js";import"./rocket.component-BUBBJycp.js";import"./square-grid-circle.component-BmaRqrw9.js";import"./img.component-BtxQ50vP.js";import"./input.component-DKljpIQC.js";import"./textarea.component-CAZw6ryE.js";import"./mask.component-Cx3ryHUx.js";import"./menu-button.component-vyLInGVY.js";import"./radio-group.component-Drv3nKcm.js";import"./rich-text.component-DS2NwH68.js";import"./sensitive-number.component-BdmirxJh.js";import"./sensitive-date.component-B_f8GxGI.js";import"./formatted-date.component-B2LwPiGF.js";import"./formatted-text-8DvHvizB.js";import"./sensitive-account.component-AOIl5HQt.js";import"./select.component-DPnHd7i9.js";import"./spinner.component-qZE1rxOj.js";import"./video.component-C8wB2j90.js";import"./card-pattern-01.component-Bt8x6k9W.js";const L="https://api.seb.io/components/table/table.users.json",A="https://api.seb.io/components/table/table.feedback.json";let $=null,h=null,v=null,f=null;const P=t=>({...t,name:b(t.name,["avatar","value"]),email:b(t.email,["value","copy-button"]),status:b(t.status,["status"]),amount:b(t.amount,["amount","currency"]),account:b(t.account,["main"]),login:b(t.lastLogin,["main"]),download:b(t.download??"#",["main"])});let w=null,y=null;const E=async()=>w||y||(y=fetch(L).then(t=>t.json()).then(t=>(w=t,t)),y),T=async()=>$||h||(h=E().then(t=>t.map(P)).then(t=>($=t,t)),h),k=t=>async e=>{let a=await t();if(e.searchQuery){const i=e.searchQuery.toLowerCase();a=a.filter(u=>Object.values(u).some(r=>r==null?void 0:r.toString().toLowerCase().includes(i)))}if(e.sortColumn&&a.length>0){const i=e.sortColumn;a=[...a].sort((u,r)=>{var C,S;const g=((C=u[i])==null?void 0:C.toString())??"",x=((S=r[i])==null?void 0:S.toString())??"";return e.sortDirection==="asc"?g.localeCompare(x):x.localeCompare(g)})}const s=(e.page-1)*e.rows,o=s+e.rows;return{rows:a.slice(s,o),total:a.length}},z=k(T),n={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"login",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:z,SlotContent:t=>l`
      ${t.map(e=>l`
          <!-- name: avatar -->
          <gds-img
            src="${e.avatarUrl??"#"}"
            alt="${String(e.name)}"
            slot="name:${e.id}:avatar"
            width="xl"
            height="xl"
          ></gds-img>

          <!-- email: copy button -->
          <gds-button
            slot="email:${e.id}:copy-button"
            rank="tertiary"
            size="small"
          >
            <gds-icon-copy></gds-icon-copy>
          </gds-button>

          <!-- status: badge -->
          <gds-badge
            slot="status:${e.id}:status"
            variant="${String(e.status)==="Active"?"positive":"negative"}"
            size="small"
          >
            ${String(e.status)}
          </gds-badge>

          <!-- amount: formatted number -->
          <gds-formatted-number
            slot="amount:${e.id}:amount"
            .value=${e.amount}
          ></gds-formatted-number>

          <!-- amount: currency -->
          <gds-badge slot="amount:${e.id}:currency" size="small">
            SEK
          </gds-badge>

          <!-- account: formatted account -->
          <gds-formatted-account
            slot="account:${e.id}:main"
            account="${e.account}"
            format="seb-account"
          ></gds-formatted-account>

          <!-- login: formatted date -->
          <gds-formatted-date
            slot="login:${e.id}:main"
            .value="${String(e.login)}"
            locale="sv-SE"
            format="dateLong"
          ></gds-formatted-date>

          <!-- download: link with icon -->
          <gds-link
            slot="download:${e.id}:main"
            href="${e.download??"#"}"
            text-decoration="underline"
            download
          >
            Download file
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </gds-link>

          <!-- actions: context menu -->
          <gds-context-menu slot="actions:${e.id}:main">
            <gds-button slot="trigger" rank="tertiary" size="small">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <gds-menu-item>Edit ${String(e.name)}</gds-menu-item>
            <gds-menu-item>Delete</gds-menu-item>
          </gds-context-menu>
        `)}
    `},j=async()=>v||f||(f=fetch(A).then(t=>t.json()).then(t=>(v=t,t)),f),F=k(j),p={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",align:"start",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"460px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},MultipleActionsSlotContent:t=>l`
      ${t.map((e,a)=>l`
          <gds-button
            slot="actions:${e.id??a+1}:main"
            rank="tertiary"
            size="small"
          >
            <gds-icon-pin></gds-icon-pin>
            Activate
          </gds-button>
          <gds-button
            slot="actions:${e.id??a+1}:main"
            rank="tertiary"
            size="small"
          >
            <gds-icon-cross-small></gds-icon-cross-small>
            Delete
          </gds-button>
        `)}
    `,ActionLink:{label:"Actions",align:"start",justify:"end"},ActionLinkSlotContent:t=>l`
      ${t.map((e,a)=>l`
          <gds-link slot="actions:${e.id??a+1}:main" href="#">
            View details
          </gds-link>
        `)}
    `,ActionButton:{label:"Actions",align:"start",justify:"start"},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},ActionContextMenuSlotContent:t=>l`
      ${t.map((e,a)=>l`
          <gds-context-menu slot="actions:${e.id??a+1}:main">
            <gds-button slot="trigger" rank="secondary" size="small">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <gds-menu-item>Edit</gds-menu-item>
            <gds-menu-item>Archive</gds-menu-item>
            <gds-menu-item>Delete</gds-menu-item>
          </gds-context-menu>
        `)}
    `,Data:F},D=new WeakSet,M=t=>l`
  <div
    ${c(e=>{if(!e||D.has(e))return;D.add(e);const a=new IntersectionObserver(s=>{if(s[0].isIntersecting){a.disconnect();const o=t();d(o,e);const i=e.parentNode;if(i){for(;e.firstChild;)i.insertBefore(e.firstChild,e);i.removeChild(e)}}},{rootMargin:"200px"});a.observe(e)})}
    style="min-height:40vh"
  ></div>
`,Ae={title:"Components/Table",component:"gds-table",argTypes:{...R("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],decorators:[(t,e)=>e.viewMode==="docs"?M(()=>t()):t()],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},Pe={args:{columns:n.Columns,actions:n.Actions,density:"comfortable",variant:"secondary",data:n.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        density="${t.density}"
        variant="${t.variant}"
        search-label="${t.searchLabel}"
        ?searchable="${t.searchable}"
        ?settings="${t.settings}"
        ?plain="${t.plain}"
        ?responsive="${t.responsive}"
        ?nocache="${t.nocache}"
        ?height="${t.height}"
        ?striped="${t.striped}"
        ?selectable="${t.selectable}"
        .columns="${t.columns}"
        .data="${t.data}"
        .actions="${t.actions}"
        rows="60"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ee={args:{columns:n.Columns,data:n.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
The \`selectable\` boolean enables row selection with checkboxes. Supports individual row selection, select all via header checkbox, and partial selection indication.

Emits \`gds-table-selection\` event with selected row data and indices. Provides methods for programmatic selection control.

See Developer Guide for complete selection API documentation.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .density="${t.density}"
        ?selectable="${t.selectable}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Te={args:{columns:n.Columns,data:n.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
#### Search Functionality
The \`searchable\` property adds a search input to the table, enabling real-time filtering across all columns.

#### Column Settings
The \`settings\` property adds a column visibility dropdown, allowing users to show/hide specific columns.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        ?searchable="${t.searchable}"
        ?settings="${t.settings}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},ze={args:{columns:n.Columns,data:n.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        ?nocache="${t.nocache}"
        ?searchable="${t.searchable}"
        ?settings="${t.settings}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},je={args:{columns:n.Columns,data:n.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Fe={args:{columns:n.Columns,data:n.Data},parameters:{docs:{description:{story:`
The table supports multiple cell types: badge, image, button, link, context menu, and formatted text (number, account, date).

Cell types correspond to their respective Green Design System components and accept their available properties for customization.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Me={args:{columns:p.Columns,data:p.Data},parameters:{docs:{description:{story:`
**Column justification** <br />
Default alignment is left (start), with options to justify content to the right (end), and supports space-between layouts. <br /> Example: in email columns where cell value and action buttons need clear distinction and consistent alignment across rows.

---

**Column width and wrapping** <br />
Columns can have custom width. When width is set, content will wrap within the cell.

---

**Cell vertical alignment** <br />
Cells can be vertically aligned to start (default centered). Recommended to align to start when long or wrapped content is present, ensuring consistent top alignment for labels or values across rows.

---

**Sortable columns** <br />
When justified to the right, sorting indicator appears on the left. Column label positioned to the right of the indicator.
        `}}},render:t=>l`
    <gds-table .columns="${t.columns}" .data="${t.data}"></gds-table>
  `},Oe={args:{columns:p.Columns,actions:p.MultipleActions,data:p.Data},parameters:{docs:{description:{story:`
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions.

When passed as an object \`{ label, align, justify }\`, it configures the actions column header and cell layout.
The actual action content is provided through named slots using the \`actions:rowKey:main\` convention.

        `}}},render:t=>{const e=m(),a=m(),s=m();return l`
      <gds-table
        ${c(e)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${t.columns}"
        .data="${t.data}"
        .actions="${t.actions}"
        @gds-table-data-loaded=${o=>{const i=e.value;i&&d(p.MultipleActionsSlotContent(o.detail.rows),i)}}
      >
      </gds-table>

      <br />
      <br />
      <br />

      <gds-table
        ${c(a)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${t.columns}"
        .data="${t.data}"
        .actions="${p.ActionContextMenu}"
        @gds-table-data-loaded=${o=>{const i=a.value;i&&d(p.ActionContextMenuSlotContent(o.detail.rows),i)}}
      >
      </gds-table>

      <br />
      <br />
      <br />

      <gds-table
        ${c(s)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${t.columns}"
        .data="${t.data}"
        .actions="${p.ActionLink}"
        @gds-table-data-loaded=${o=>{const i=s.value;i&&d(p.ActionLinkSlotContent(o.detail.rows),i)}}
      >
      </gds-table>
    `}},Ue={args:{columns:n.Columns,data:n.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        headline="${t.headline}"
        headline-tag="${t.headlineTag}"
        summary="${t.summary}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ve={args:{columns:n.Columns,data:n.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        ?plain="${t.plain}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},We={args:{columns:n.Columns,data:n.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .density="${t.density}"
        ?striped="${t.striped}"
        .columns="${t.columns}"
        .data="${t.data}"
        rows="20"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ie={args:{columns:n.Columns,data:n.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nThe `density` property allows customizing the table's visual spacing with these options:\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        headline="${t.headline}"
        summary="${t.summary}"
        searchable
        settings
        .density="${t.density}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ne={args:{columns:n.Columns,data:n.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:t=>{const e=t.variant==="tertiary"?"primary":"tertiary",a=m(),s=o=>{const i=a.value;i&&d(n.SlotContent(o.detail.rows),i)};return l`
      <gds-card variant="${e}" padding="l" border-radius="m">
        <gds-table
          ${c(a)}
          .density="${t.density}"
          .variant="${t.variant}"
          .columns="${t.columns}"
          .data="${t.data}"
          searchable
          settings
          selectable
          rows="5"
          @gds-table-data-loaded=${s}
        >
        </gds-table>
      </gds-card>
    `}},Ke={args:{columns:n.Columns,data:n.Data,responsive:!0},parameters:{docs:{description:{story:`
When the \`responsive\` boolean is set to \`true\`, the table transforms its layout for smaller screens:

- **Mobile Layout**: Rows are restructured into a card-like format
- **Column Presentation**: 
  - Column names are displayed on the left side
  - Corresponding cell values are shown on the right side
- **Header Behavior**: On larger screens table header becomes sticky, ensuring column labels remain visible during scrolling.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        ?responsive="${t.responsive}"
        .columns="${t.columns}"
        .data="${t.data}"
        height="80vh"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Be={args:{columns:n.Columns,data:n.Data},parameters:{docs:{description:{story:`
Use slots to add custom controls to the table header and footer areas.

- **header-lead**: Add filtering/sorting controls at the start of the header.
- **header-trail**: Add actions (e.g., export buttons) at the end of the header.

> Avoid overloading slots to maintain clarity.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .columns="${t.columns}"
        .data="${t.data}"
        rows="4"
        settings
        searchable
        @gds-table-data-loaded=${a}
      >
        <gds-dropdown size="small" slot="header-lead" plain searchable>
          <span slot="trigger">Sorting</span>
          <gds-option value="by-name">Sort by Name</gds-option>
          <gds-option value="by-status">Sort by Status</gds-option>
        </gds-dropdown>
        <gds-button slot="header-trail" rank="secondary" size="small">
          Export
        </gds-button>
      </gds-table>
    `}},_e={args:{columns:n.Columns,data:n.Data,simulatedState:"normal"},argTypes:{simulatedState:{control:"select",options:["normal","error","empty","no-results"],description:"Simulate different table states"}},parameters:{docs:{description:{story:`
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `}}},render:t=>{const e=m(),a=async u=>{if(await new Promise(r=>setTimeout(r,500)),t.simulatedState==="error")throw new Error("Simulated error state");return t.simulatedState==="empty"?{rows:[],total:0}:t.simulatedState==="no-results"?{rows:[],total:0}:t.data(u)},s=u=>{const r=e.value;r&&d(n.SlotContent(u.detail.rows),r)},o=()=>{t.simulatedState="normal",e.value&&(e.value.dataLoadKey=`retry-${Date.now()}`)},i=()=>{var u;if(t.simulatedState="normal",e.value){e.value.dataLoadKey=`clear-${Date.now()}`;const r=(u=e.value.shadowRoot)==null?void 0:u.querySelector("gds-input");r&&(r.value="")}};return setTimeout(()=>{var u;if(t.simulatedState==="no-results"&&e.value){const r=(u=e.value.shadowRoot)==null?void 0:u.querySelector("gds-input");r&&(r.value="test search",r.dispatchEvent(new Event("input",{bubbles:!0})))}},100),l`
      <gds-table
        ${c(e)}
        .columns="${t.columns}"
        .data="${a}"
        .dataLoadKey="${t.simulatedState}"
        rows="4"
        searchable
        settings
        @gds-table-data-loaded=${s}
      >
        <gds-flex
          slot="error"
          flex-direction="column"
          gap="s"
          align-items="flex-start"
        >
          <gds-text font="heading-s">Unable to load data</gds-text>
          <gds-text font="detail-book-m">
            An error occurred while loading the data. Please try again.
          </gds-text>
          <gds-button rank="secondary" size="small" @click=${o}>
            Retry
          </gds-button>
        </gds-flex>

        <gds-flex
          slot="empty"
          flex-direction="column"
          gap="s"
          align-items="flex-start"
        >
          <gds-text font="heading-s">No data available</gds-text>
          <gds-text font="detail-book-m">
            There are currently no records to display in this table.
          </gds-text>
        </gds-flex>

        <gds-flex
          slot="no-results"
          flex-direction="column"
          gap="s"
          align-items="flex-start"
        >
          <gds-text font="heading-s">No search results</gds-text>
          <gds-text font="detail-book-m">
            Your search did not match any records. Try different keywords.
          </gds-text>
          <gds-button rank="secondary" size="small" @click=${i}>
            Clear search
          </gds-button>
        </gds-flex>
      </gds-table>
    `}},Ge={args:{columns:n.Columns,data:n.Data},parameters:{docs:{description:{story:`



⚠️ REWRITE FOR SLOTS

See Developer Guide for complete documentation.

          `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .columns="${t.columns}"
        .data="${t.data}"
        rows="4"
        plain
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},He={args:{columns:n.Columns,data:n.Data},parameters:{docs:{description:{story:`
The table component dispatches events for various user interactions. 

**Pagination Events**
- **gds-page-change**: Fired when the active page changes. Detail: \`{ page: number }\`
- **gds-rows-change**: Fired when the rows per page value changes. Detail: \`{ rows: number }\`

**Sorting Events**
- **gds-sort-change**: Fired when sorting changes. Detail: \`{ sortColumn: string, sortDirection: 'asc' | 'desc' }\`

**Data Events**
- **gds-table-data-loaded**: Fired when data is successfully loaded
- **gds-table-data-error**: Fired when data loading fails
- **gds-table-selection**: Fired when row selection changes

This example demonstrates listening to pagination and sorting events and displaying the current state.
        `}}},render:t=>{const e=m(),a={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},s=r=>{const g=e.value;g&&d(n.SlotContent(r.detail.rows),g)},o=r=>{console.log("🔔 Page change event:",r.detail),a.currentPage=r.detail.page;const g=document.querySelector("#page-status");g&&(g.textContent=`Page: ${a.currentPage}`)},i=r=>{console.log("🔔 Rows change event:",r.detail),a.currentRows=r.detail.rows;const g=document.querySelector("#rows-status");g&&(g.textContent=`Rows: ${a.currentRows}`)},u=r=>{console.log("🔔 Sort change event:",r.detail),a.sortColumn=r.detail.sortColumn,a.sortDirection=r.detail.sortDirection;const g=document.querySelector("#sort-status");g&&(g.textContent=`${a.sortColumn} (${a.sortDirection})`)};return l`
      <gds-flex flex-direction="column" gap="l">
        <gds-flex flex-direction="column" gap="m">
          <gds-card variant="secondary" padding="m" border-radius="m">
            <gds-flex flex-direction="column" gap="s">
              <gds-text font="heading-s">Event Monitor</gds-text>
              <gds-text font="detail-book-s" color="neutral-01">
                Open your browser console (F12) to see event logs
              </gds-text>
              <gds-flex gap="m">
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-text font="detail-book-s" color="neutral-01">
                    Current Page
                  </gds-text>
                  <gds-text
                    id="page-status"
                    font="body-regular-m"
                    color="primary"
                  >
                    Page: ${a.currentPage}
                  </gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-text font="detail-book-s" color="neutral-01">
                    Rows Per Page
                  </gds-text>
                  <gds-text
                    id="rows-status"
                    font="body-regular-m"
                    color="primary"
                  >
                    Rows: ${a.currentRows}
                  </gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-text font="detail-book-s" color="neutral-01">
                    Sort Column
                  </gds-text>
                  <gds-text
                    id="sort-status"
                    font="body-regular-m"
                    color="primary"
                  >
                    ${a.sortColumn?`${a.sortColumn} (${a.sortDirection})`:"None"}
                  </gds-text>
                </gds-flex>
              </gds-flex>
            </gds-flex>
          </gds-card>
        </gds-flex>

        <gds-table
          ${c(e)}
          .columns="${t.columns}"
          .data="${t.data}"
          rows="5"
          selectable
          searchable
          settings
          @gds-table-data-loaded=${s}
          @gds-page-change=${r=>o(r)}
          @gds-rows-change=${r=>i(r)}
          @gds-sort-change=${r=>u(r)}
        >
        </gds-table>
      </gds-flex>
    `}},Qe={args:{columns:n.Columns,data:n.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.

Slot content is generated from \`Users.SlotContent(rows)\` which receives the current page's rows from the \`gds-table-data-loaded\` event and creates per-row elements (avatars, copy icons, download icons).

Only the current page's slot content is rendered — when pages change, previous slot elements are replaced with new ones for the visible rows.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return l`
      <gds-table
        ${c(e)}
        .columns="${t.columns}"
        .data="${t.data}"
        .headline="${t.headline}"
        .summary="${t.summary}"
        ?selectable="${t.selectable}"
        ?searchable="${t.searchable}"
        ?settings="${t.settings}"
        density="${t.density}"
        responsive
        rows="5"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ye=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{Oe as Actions,ze as Caching,Fe as Cell,Ie as Density,Ge as DynamicContent,He as Events,Te as Filtering,Me as Formatting,Ue as Headline,Pe as Overview,Ve as Plain,Ke as Responsive,Ee as Selection,Qe as SlotComposition,Be as Slots,je as Sorting,_e as StateSlots,We as Striped,Ne as Variant,Ye as __namedExportsOrder,Ae as default};
