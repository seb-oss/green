import{x as s,ac as u}from"./iframe-cyAD0rhm.js";import{n as m,e as p}from"./ref-hUD0t2Ef.js";import{S as c}from"./table-BTdY7qlB.js";import"./card-BEJA5BhD.js";import"./badge-CNBM1txx.js";import"./dropdown-DO0EAyrW.js";import"./segmented-control-DdlbsU0S.js";import"./context-menu-BoMH4guj.js";import"./input-C5Gb-V07.js";import"./img-BZpgDpG8.js";import"./formatted-account-C8OnE4SP.js";import"./formatted-number-Dl3rdFDz.js";import"./formatted-date-DvrY1zp2.js";import"./pagination-CbD5OjDG.js";import"./dot-grid-one-horizontal-TYf6bto5.js";import"./arrow-rotate-counter-clockwise.component-ssGE0Dhg.js";import"./zoom-out.component-C-JLD_Oi.js";import"./circle-check-z6uRy5-6.js";import"./cross-small-kLsNxcBE.js";import{a as A}from"./argTableProps-DKg5GzzV.js";import"./localized-decorator-hSII2u8H.js";import"./popover.component-BEl3kYQV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-t5Zhk1ew.js";import"./icon.component-C0MD-nYh.js";import"./dropdown.component-BP9D2Ush.js";import"./query-async-C5RI8nND.js";import"./form-control-host.style-C8g6e45V.js";import"./form-control-header.component-BwoaZZHO.js";import"./badge.component-DvOoJozs.js";import"./flex.component-UOsYcIWT.js";import"./triangle-exclamation.component-C0Cb2MVU.js";import"./card.component-BXbgzksP.js";import"./unwrap-slots-w2ji7qoS.js";import"./checkmark.component-BpsvmZZP.js";import"./rbcb-toggle.template-CgdLEetQ.js";import"./chevron-bottom.component-Ci_lr-Ty.js";import"./menu-heading.component-CfYEV5xu.js";import"./context-menu.component-DbPEs51G.js";import"./alert.component-CgJiEzzm.js";import"./circle-check.component-Bs5ykaqu.js";import"./blur.component-PaxSfzRL.js";import"./breadcrumb.component-DBBehbzZ.js";import"./chevron-left.component-BMxNRGAR.js";import"./link.component-BzrB24Tz.js";import"./props-link-DcDexn1e.js";import"./text-BM626_vL.js";import"./default-typography.styles-Bcnjlt63.js";import"./calendar.component-OQlRHo4j.js";import"./card-linked.component-CNSrCXr0.js";import"./checkbox-group.component-Dbr7F4DV.js";import"./toggle-control-base.component-c6laLowt.js";import"./minus-small.component-Dn6YC38o.js";import"./coachmark.component-C6R77Vqw.js";import"./datepicker.component-DUAsdvjQ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DdyYR8A0.js";import"./chevron-right.component-DhKjeP3n.js";import"./details.component-DFzW7kSx.js";import"./divider.component-DN1wggvl.js";import"./signal.component-BCrUeVT9.js";import"./filter-chips.component-C3Rsgkzx.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-DCbqi8WH.js";import"./arrow-up.component-cejucZlg.js";import"./grouped-list.component-Cnpmh4sG.js";import"./arrow-down.component-Bv2i3Fhu.js";import"./arrow-left.component-CYAUeg3R.js";import"./arrow-right.component-DDzx8UHB.js";import"./sun.component-CPFk4-rO.js";import"./star.component-Bk3IElHD.js";import"./bubbles.component-C_E3PW2f.js";import"./chain-link-Q5sLcrGn.js";import"./chevron-right-small.component-0mRX3Fur.js";import"./chevron-top.component-BcgQQFOD.js";import"./circles-three.component-BZQwaKUk.js";import"./cloudy-sun.component-CYv2ZFw1.js";import"./credit-card.component-DSNo8wwM.js";import"./folder.component-CtyXjrbc.js";import"./magnifying-glass.component-DrLz7D0z.js";import"./people-profile.component-S4MvKlii.js";import"./push.component-pA3JZmyZ.js";import"./rocket.component-B6f5Qlir.js";import"./square-grid-circle.component-qB7hiHcv.js";import"./img.component-D8kAIx50.js";import"./input.component-CNuGlDJR.js";import"./textarea.component-CBrYG1gk.js";import"./mask.component-DCBynmlz.js";import"./menu-button.component-Cb_ip9ss.js";import"./radio-group.component-Cq4etFqy.js";import"./rich-text.component-BZdEDAOP.js";import"./sensitive-number.component-tA42ZYxZ.js";import"./sensitive-date.component-BtBeM-HS.js";import"./formatted-date.component-BL7TIVmb.js";import"./formatted-text-BzI-PntM.js";import"./sensitive-account.component-DmZiEdOy.js";import"./select.component-O8PCXzf1.js";import"./spinner.component-BYE6rIi9.js";import"./video.component-CU9pKqQs.js";import"./card-pattern-01.component-CFor-c0D.js";const R="https://api.seb.io/components/table/table.users.json",P="https://api.seb.io/components/table/table.feedback.json";let f=null,h=null,w=null,b=null;const z=e=>({...e,name:c(e.name,["avatar","value"]),email:c(e.email,["value","copy-button"]),status:c(e.status,["status"]),amount:c(e.amount,["amount","currency"]),account:c(e.account,["main"]),login:c(e.lastLogin,["main"]),download:c(e.download??"#",["main"])});let $=null,y=null;const T=async()=>$||y||(y=fetch(R).then(e=>e.json()).then(e=>($=e,e)),y),E=async()=>f||h||(h=T().then(e=>e.map(z)).then(e=>(f=e,e)),h),D=e=>async t=>{let n=await e();if(t.searchQuery){const a=t.searchQuery.toLowerCase();n=n.filter(l=>Object.values(l).some(g=>g==null?void 0:g.toString().toLowerCase().includes(a)))}if(t.sortColumn&&n.length>0){const a=t.sortColumn;n=[...n].sort((l,g)=>{var C,S;const v=((C=l[a])==null?void 0:C.toString())??"",x=((S=g[a])==null?void 0:S.toString())??"";return t.sortDirection==="asc"?v.localeCompare(x):x.localeCompare(v)})}const r=(t.page-1)*t.rows,i=r+t.rows;return{rows:n.slice(r,i),total:n.length}},j=D(E),o={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"login",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:j,SlotContent:e=>s`
      ${e.map(t=>s`
          <!-- name: avatar -->
          <gds-img
            src="${t.avatarUrl??"#"}"
            alt="${String(t.name)}"
            slot="name:${t.id}:avatar"
            width="xl"
            height="xl"
          ></gds-img>

          <!-- email: copy button -->
          <gds-button
            slot="email:${t.id}:copy-button"
            rank="tertiary"
            size="small"
          >
            <gds-icon-copy></gds-icon-copy>
          </gds-button>

          <!-- status: badge -->
          <gds-badge
            slot="status:${t.id}:status"
            variant="${String(t.status)==="Active"?"positive":"negative"}"
            size="small"
          >
            ${String(t.status)}
          </gds-badge>

          <!-- amount: formatted number -->
          <gds-formatted-number
            slot="amount:${t.id}:amount"
            .value=${t.amount}
          ></gds-formatted-number>

          <!-- amount: currency -->
          <gds-badge slot="amount:${t.id}:currency" size="small">
            SEK
          </gds-badge>

          <!-- account: formatted account -->
          <gds-formatted-account
            slot="account:${t.id}:main"
            account="${t.account}"
            format="seb-account"
          ></gds-formatted-account>

          <!-- login: formatted date -->
          <gds-formatted-date
            slot="login:${t.id}:main"
            .value="${String(t.login)}"
            locale="sv-SE"
            format="dateLong"
          ></gds-formatted-date>

          <!-- download: link with icon -->
          <gds-link
            slot="download:${t.id}:main"
            href="${t.download??"#"}"
            text-decoration="underline"
            download
          >
            Download file
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </gds-link>

          <!-- actions: context menu -->
          <gds-context-menu slot="actions:${t.id}:main">
            <gds-button slot="trigger" rank="tertiary" size="small">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <gds-menu-item>Edit ${String(t.name)}</gds-menu-item>
            <gds-menu-item>Delete</gds-menu-item>
          </gds-context-menu>
        `)}
    `},L=async()=>w||b||(b=fetch(P).then(e=>e.json()).then(e=>(w=e,e)),b),F=D(L),d={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",align:"start",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"460px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},MultipleActionsSlotContent:e=>s`
      ${e.map((t,n)=>s`
          <gds-button
            slot="actions:${t.id??n+1}:main"
            rank="tertiary"
            size="small"
          >
            <gds-icon-pin></gds-icon-pin>
            Activate
          </gds-button>
          <gds-button
            slot="actions:${t.id??n+1}:main"
            rank="tertiary"
            size="small"
          >
            <gds-icon-cross-small></gds-icon-cross-small>
            Delete
          </gds-button>
        `)}
    `,ActionLink:{label:"Actions",align:"start",justify:"end"},ActionLinkSlotContent:e=>s`
      ${e.map((t,n)=>s`
          <gds-link slot="actions:${t.id??n+1}:main" href="#">
            View details
          </gds-link>
        `)}
    `,ActionButton:{label:"Actions",align:"start",justify:"start"},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},ActionContextMenuSlotContent:e=>s`
      ${e.map((t,n)=>s`
          <gds-context-menu slot="actions:${t.id??n+1}:main">
            <gds-button slot="trigger" rank="secondary" size="small">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <gds-menu-item>Edit</gds-menu-item>
            <gds-menu-item>Archive</gds-menu-item>
            <gds-menu-item>Delete</gds-menu-item>
          </gds-context-menu>
        `)}
    `,Data:F},k=new WeakSet,M=e=>s`
  <div
    ${m(t=>{if(!t||k.has(t))return;k.add(t);const n=new IntersectionObserver(r=>{if(r[0].isIntersecting){n.disconnect();const i=e();u(i,t);const a=t.parentNode;if(a){for(;t.firstChild;)a.insertBefore(t.firstChild,t);a.removeChild(t)}}},{rootMargin:"200px"});n.observe(t)})}
    style="min-height:200px"
  ></div>
`,Pt={title:"Components/Table",component:"gds-table",argTypes:{...A("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],decorators:[(e,t)=>t.viewMode==="docs"?M(()=>e()):e()],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},zt={args:{columns:o.Columns,actions:o.Actions,density:"comfortable",variant:"secondary",data:o.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:e=>{const t=p(),n=r=>{const i=t.value;i&&u(o.SlotContent(r.detail.rows),i)};return s`
      <gds-table
        ${m(t)}
        density="${e.density}"
        variant="${e.variant}"
        search-label="${e.searchLabel}"
        ?searchable="${e.searchable}"
        ?settings="${e.settings}"
        ?plain="${e.plain}"
        ?responsive="${e.responsive}"
        ?nocache="${e.nocache}"
        ?height="${e.height}"
        ?striped="${e.striped}"
        ?selectable="${e.selectable}"
        .columns="${e.columns}"
        .data="${e.data}"
        .actions="${e.actions}"
        rows="60"
        @gds-table-data-loaded=${n}
      >
      </gds-table>
    `}},Tt={args:{columns:o.Columns,data:o.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
The \`selectable\` boolean enables row selection with checkboxes. Supports individual row selection, select all via header checkbox, and partial selection indication.

Emits \`gds-table-selection\` event with selected row data and indices. Provides methods for programmatic selection control.

See Developer Guide for complete selection API documentation.
        `}}},render:e=>s`
    <gds-table
      .density="${e.density}"
      ?selectable="${e.selectable}"
      .columns="${e.columns}"
      .data="${e.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Et={args:{columns:o.Columns,data:o.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
#### Search Functionality
The \`searchable\` property adds a search input to the table, enabling real-time filtering across all columns.

#### Column Settings
The \`settings\` property adds a column visibility dropdown, allowing users to show/hide specific columns.
        `}}},render:e=>s`
    <gds-table
      ?searchable="${e.searchable}"
      ?settings="${e.settings}"
      .columns="${e.columns}"
      .data="${e.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},jt={args:{columns:o.Columns,data:o.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:e=>s`
    <gds-table
      ?nocache="${e.nocache}"
      ?searchable="${e.searchable}"
      ?settings="${e.settings}"
      .columns="${e.columns}"
      .data="${e.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Lt={args:{columns:o.Columns,data:o.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:e=>s`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Ft={args:{columns:o.Columns,data:o.Data},parameters:{docs:{description:{story:`
The table supports multiple cell types: badge, image, button, link, context menu, and formatted text (number, account, date).

Cell types correspond to their respective Green Design System components and accept their available properties for customization.
        `}}},render:e=>s`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Mt={args:{columns:d.Columns,data:d.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>s`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy slot="trail"></gds-icon-copy>
      </template>
      <template name="role-link">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Ot={args:{columns:d.Columns,actions:d.MultipleActions,data:d.Data},parameters:{docs:{description:{story:`
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions.

When passed as an object \`{ label, align, justify }\`, it configures the actions column header and cell layout.
The actual action content is provided through named slots using the \`actions:rowKey:main\` convention.

        `}}},render:e=>{const t=p(),n=p(),r=p();return s`
      <gds-table
        ${m(t)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${e.columns}"
        .data="${e.data}"
        .actions="${e.actions}"
        @gds-table-data-loaded=${i=>{const a=t.value;a&&u(d.MultipleActionsSlotContent(i.detail.rows),a)}}
      >
      </gds-table>

      <br />
      <br />
      <br />

      <gds-table
        ${m(n)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${e.columns}"
        .data="${e.data}"
        .actions="${d.ActionContextMenu}"
        @gds-table-data-loaded=${i=>{const a=n.value;a&&u(d.ActionContextMenuSlotContent(i.detail.rows),a)}}
      >
      </gds-table>

      <br />
      <br />
      <br />

      <gds-table
        ${m(r)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${e.columns}"
        .data="${e.data}"
        .actions="${d.ActionLink}"
        @gds-table-data-loaded=${i=>{const a=r.value;a&&u(d.ActionLinkSlotContent(i.detail.rows),a)}}
      >
      </gds-table>
    `}},Ut={args:{columns:o.Columns,data:o.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:e=>s`
    <gds-table
      headline="${e.headline}"
      headline-tag="${e.headlineTag}"
      summary="${e.summary}"
      .columns="${e.columns}"
      .data="${e.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Vt={args:{columns:o.Columns,data:o.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:e=>s`
    <gds-table
      ?plain="${e.plain}"
      .columns="${e.columns}"
      .data="${e.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},It={args:{columns:o.Columns,data:o.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:e=>s`
    <gds-table
      .density="${e.density}"
      ?striped="${e.striped}"
      .columns="${e.columns}"
      .data="${e.data}"
      rows="20"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Nt={args:{columns:o.Columns,data:o.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nThe `density` property allows customizing the table's visual spacing with these options:\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n        "}}},render:e=>s`
    <gds-table
      headline="${e.headline}"
      summary="${e.summary}"
      searchable
      settings
      .density="${e.density}"
      .columns="${e.columns}"
      .data="${e.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Wt={args:{columns:o.Columns,data:o.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:e=>{const t=e.variant==="tertiary"?"primary":"tertiary";return s`
      <gds-card variant="${t}" padding="l" border-radius="m">
        <gds-table
          .density="${e.density}"
          .variant="${e.variant}"
          .columns="${e.columns}"
          .data="${e.data}"
          searchable
          settings
          selectable
          rows="5"
        >
          <template name="email-copy">
            <gds-icon-copy></gds-icon-copy>
          </template>
          <template name="download-image">
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </template>
        </gds-table>
      </gds-card>
    `}},Kt={args:{columns:o.Columns,data:o.Data,responsive:!0},parameters:{docs:{description:{story:`
When the \`responsive\` boolean is set to \`true\`, the table transforms its layout for smaller screens:

- **Mobile Layout**: Rows are restructured into a card-like format
- **Column Presentation**: 
  - Column names are displayed on the left side
  - Corresponding cell values are shown on the right side
- **Header Behavior**: On larger screens table header becomes sticky, ensuring column labels remain visible during scrolling.
        `}}},render:e=>s`
    <gds-table
      ?responsive="${e.responsive}"
      .columns="${e.columns}"
      .data="${e.data}"
      height="80vh"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Bt={args:{columns:o.Columns,data:o.Data},parameters:{docs:{description:{story:`
Use slots to add custom controls to the table header and footer areas.

- **header-lead**: Add filtering/sorting controls at the start of the header.
- **header-trail**: Add actions (e.g., export buttons) at the end of the header.

> Avoid overloading slots to maintain clarity.
        `}}},render:e=>s`
    <gds-table
      .columns="${e.columns}"
      .data="${e.data}"
      rows="4"
      settings
      searchable
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
  `},_t={args:{columns:o.Columns,data:o.Data,simulatedState:"normal"},argTypes:{simulatedState:{control:"select",options:["normal","error","empty","no-results"],description:"Simulate different table states"}},parameters:{docs:{description:{story:`
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `}}},render:e=>{const t=p(),n=async a=>{if(await new Promise(l=>setTimeout(l,500)),e.simulatedState==="error")throw new Error("Simulated error state");return e.simulatedState==="empty"?{rows:[],total:0}:e.simulatedState==="no-results"?{rows:[],total:0}:e.data(a)},r=()=>{e.simulatedState="normal",t.value&&(t.value.dataLoadKey=`retry-${Date.now()}`)},i=()=>{var a;if(e.simulatedState="normal",t.value){t.value.dataLoadKey=`clear-${Date.now()}`;const l=(a=t.value.shadowRoot)==null?void 0:a.querySelector("gds-input");l&&(l.value="")}};return setTimeout(()=>{var a;if(e.simulatedState==="no-results"&&t.value){const l=(a=t.value.shadowRoot)==null?void 0:a.querySelector("gds-input");l&&(l.value="test search",l.dispatchEvent(new Event("input",{bubbles:!0})))}},100),s`
      <gds-table
        ${m(t)}
        .columns="${e.columns}"
        .data="${n}"
        .dataLoadKey="${e.simulatedState}"
        rows="4"
        searchable
        settings
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
          <gds-button rank="secondary" size="small" @click=${r}>
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
    `}},Gt={args:{columns:o.Columns,data:o.Data},parameters:{docs:{description:{story:`
Templates provide reusable content for cell types. Reference them using the \`template\` property with the template's \`name\` attribute.

**Icon properties:** Icon size and color can be specified either in the column configuration or directly in the template. Column configuration takes precedence.

\`\`\`typescript
{
  cell: {
    lead: {
      type: 'icon',
      template: 'department-icon',
      size: 'm',      // Overrides template size
      color: 'primary' // Overrides template color
    }
  }
}
\`\`\`

See Developer Guide for complete documentation.

          `}}},render:e=>s`
    <gds-table .columns="${e.columns}" .data="${e.data}" rows="4" plain>
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
      <template name="department-icon">
        <gds-icon-buildings></gds-icon-buildings>
      </template>
    </gds-table>
  `},Ht={args:{columns:o.Columns,data:o.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>{const t={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},n=a=>{console.log("🔔 Page change event:",a.detail),t.currentPage=a.detail.page;const l=document.querySelector("#page-status");l&&(l.textContent=`Page: ${t.currentPage}`)},r=a=>{console.log("🔔 Rows change event:",a.detail),t.currentRows=a.detail.rows;const l=document.querySelector("#rows-status");l&&(l.textContent=`Rows: ${t.currentRows}`)},i=a=>{console.log("🔔 Sort change event:",a.detail),t.sortColumn=a.detail.sortColumn,t.sortDirection=a.detail.sortDirection;const l=document.querySelector("#sort-status");l&&(l.textContent=`${t.sortColumn} (${t.sortDirection})`)};return s`
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
                    Page: ${t.currentPage}
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
                    Rows: ${t.currentRows}
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
                    ${t.sortColumn?`${t.sortColumn} (${t.sortDirection})`:"None"}
                  </gds-text>
                </gds-flex>
              </gds-flex>
            </gds-flex>
          </gds-card>
        </gds-flex>

        <gds-table
          .columns="${e.columns}"
          .data="${e.data}"
          rows="5"
          selectable
          searchable
          settings
          @gds-page-change=${a=>n(a)}
          @gds-rows-change=${a=>r(a)}
          @gds-sort-change=${a=>i(a)}
        >
          <template name="email-copy">
            <gds-icon-copy></gds-icon-copy>
          </template>
          <template name="download-image">
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </template>
        </gds-table>
      </gds-flex>
    `}},Qt={args:{columns:o.Columns,data:o.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.

Slot content is generated from \`Users.SlotContent(rows)\` which receives the current page's rows from the \`gds-table-data-loaded\` event and creates per-row elements (avatars, copy icons, download icons).

Only the current page's slot content is rendered — when pages change, previous slot elements are replaced with new ones for the visible rows.
        `}}},render:e=>{const t=p(),n=r=>{const i=t.value;i&&u(o.SlotContent(r.detail.rows),i)};return s`
      <gds-table
        ${m(t)}
        .columns="${e.columns}"
        .data="${e.data}"
        .headline="${e.headline}"
        .summary="${e.summary}"
        ?selectable="${e.selectable}"
        ?searchable="${e.searchable}"
        ?settings="${e.settings}"
        density="${e.density}"
        responsive
        rows="5"
        @gds-table-data-loaded=${n}
      >
      </gds-table>
    `}},Yt=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{Ot as Actions,jt as Caching,Ft as Cell,Nt as Density,Gt as DynamicContent,Ht as Events,Et as Filtering,Mt as Formatting,Ut as Headline,zt as Overview,Vt as Plain,Kt as Responsive,Tt as Selection,Qt as SlotComposition,Bt as Slots,Lt as Sorting,_t as StateSlots,It as Striped,Wt as Variant,Yt as __namedExportsOrder,Pt as default};
