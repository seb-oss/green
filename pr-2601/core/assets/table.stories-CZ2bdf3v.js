import{E as D,x as s,ac as k}from"./iframe-D3LkGrTu.js";import{e as x,n as C}from"./ref-CXSVQ8-J.js";import{S as c}from"./table-DXUU27ac.js";import"./card-DLwRJ7ia.js";import"./badge-c-DAPjBO.js";import"./dropdown-BCeLnA_S.js";import"./segmented-control-BJuOqbm7.js";import"./context-menu-DSO0yzn1.js";import"./input-DWTNNd4z.js";import"./img-KWYHxGlj.js";import"./formatted-account-DtWmfs1X.js";import"./pagination-DDbp2aXo.js";import"./dot-grid-one-horizontal-DffDIXet.js";import"./arrow-rotate-counter-clockwise.component-DeF6VyQF.js";import"./zoom-out.component-48kaPjAs.js";import"./circle-check-Bx1orbQE.js";import"./cross-small-G-ox2KOG.js";import{a as R}from"./argTableProps-B3G29lOC.js";import"./localized-decorator-B9Zts4yp.js";import"./popover.component-BbycZSjJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bh33xCXa.js";import"./icon.component-BGKmC-sG.js";import"./dropdown.component-KH2PCnww.js";import"./query-async-Df9s8pij.js";import"./form-control-host.style-UnwN4dPP.js";import"./form-control-header.component-DaaGaivf.js";import"./badge.component-D3GS4mu2.js";import"./flex.component-BNcfiOGN.js";import"./triangle-exclamation.component-U58N0vV1.js";import"./card.component-68vw3gHC.js";import"./unwrap-slots-D-BS7JUx.js";import"./checkmark.component-BsVz1wIr.js";import"./rbcb-toggle.template-DN40HB6B.js";import"./chevron-bottom.component-DALJJjN2.js";import"./menu-heading.component-BlvvPB0a.js";import"./context-menu.component-Cm4Jyu_7.js";import"./alert.component-ZCVz0AxA.js";import"./circle-check.component-DEZTuXX5.js";import"./blur.component-shm7LGZx.js";import"./breadcrumb.component-COJsWT59.js";import"./chevron-left.component-BczYewcU.js";import"./link.component-b-ryxWYV.js";import"./props-link-Cx4sU3w-.js";import"./text-B-VazQsq.js";import"./default-typography.styles-De9gKBxa.js";import"./calendar.component-D4XXq4DI.js";import"./card-linked.component-DtGzewW3.js";import"./checkbox-group.component-B3wNlskx.js";import"./toggle-control-base.component-CMkfM4Nz.js";import"./minus-small.component-D8UCP7Mc.js";import"./coachmark.component-BeUOD495.js";import"./datepicker.component-BEpxZARc.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BCPzioXr.js";import"./chevron-right.component-CkNcf4xk.js";import"./details.component-BNqADAsG.js";import"./divider.component-D0-8fgln.js";import"./signal.component-5lvY1MHP.js";import"./filter-chips.component-xEIMaSrt.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-CaolzzmR.js";import"./arrow-up.component-xbBiJUcZ.js";import"./grouped-list.component-rN80Uccn.js";import"./arrow-down.component-CVu9ipg1.js";import"./arrow-left.component-DiKrgBHo.js";import"./arrow-right.component-nzuRIM2K.js";import"./sun.component-Bz4hpIkH.js";import"./star.component-CtYf_SAx.js";import"./bubbles.component-DUhAHfak.js";import"./chain-link-CIY9XXQy.js";import"./chevron-right-small.component-iUZfy9Rf.js";import"./chevron-top.component-CTiePsFf.js";import"./circles-three.component-BhM8ZCSm.js";import"./cloudy-sun.component-CpHGpK_z.js";import"./credit-card.component-Z_yButIs.js";import"./folder.component-BGDF6eRy.js";import"./magnifying-glass.component-CAqg69XG.js";import"./people-profile.component-BaRG8eou.js";import"./push.component-eyvDQDwA.js";import"./rocket.component-B4YevKvB.js";import"./square-grid-circle.component-BiAyiAyn.js";import"./img.component-CKnuCO2_.js";import"./input.component-DLAG5IRo.js";import"./textarea.component-lj1-VFyS.js";import"./mask.component-BybHRuGA.js";import"./menu-button.component-B13qkUdW.js";import"./radio-group.component-fHTsXgd1.js";import"./rich-text.component-I0HElY0P.js";import"./sensitive-number.component-BuNdch6x.js";import"./formatted-number-B6Rnc-qN.js";import"./formatted-text-DzJnFb59.js";import"./formatted-date-CM1Aukei.js";import"./formatted-date.component-DBMkIZM0.js";import"./sensitive-date.component-BpEIZ5yO.js";import"./sensitive-account.component-IfJnMJbd.js";import"./select.component-C58OKYS6.js";import"./spinner.component-hFvQZYwt.js";import"./video.component-BQTi6pun.js";import"./card-pattern-01.component-BFSvnr7Z.js";const P="https://api.seb.io/components/table/table.users.json",A="https://api.seb.io/components/table/table.feedback.json";let h=null,p=null,b=null,u=null;const E=e=>({...e,name:c(e.name,["avatar","value"],e.email),email:c(e.email,["value","copy-button"]),status:c(e.status,["status"]),amount:c(e.amount,["amount"]),account:c(e.account,["main"]),lastLogin:c(e.lastLogin,["main"]),download:c(e.download??"#",["main"])});let y=null,g=null;const T=async()=>y||g||(g=fetch(P).then(e=>e.json()).then(e=>(y=e,e)),g),j=async()=>h||p||(p=T().then(e=>e.map(E)).then(e=>(h=e,e)),p),S=e=>async t=>{let l=await e();if(t.searchQuery){const o=t.searchQuery.toLowerCase();l=l.filter(n=>Object.values(n).some(r=>r==null?void 0:r.toString().toLowerCase().includes(o)))}if(t.sortColumn&&l.length>0){const o=t.sortColumn;l=[...l].sort((n,r)=>{var v,$;const f=((v=n[o])==null?void 0:v.toString())??"",w=(($=r[o])==null?void 0:$.toString())??"";return t.sortDirection==="asc"?f.localeCompare(w):w.localeCompare(f)})}const d=(t.page-1)*t.rows,i=d+t.rows;return{rows:l.slice(d,i),total:l.length}},L=S(j),a={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1,value:e=>`${e.role.toUpperCase()} (${e.department||"N/A"})`},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"lastLogin",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:L,SlotContent:e=>!e||e.length===0?D:s`
      ${e.map(t=>{var l;return s`
          <gds-img
            src="${t.avatarUrl??"#"}"
            alt="${String(t.name)}"
            slot="name:${((l=t.name)==null?void 0:l.key)??t.email}:avatar"
            width="xl"
            height="xl"
          ></gds-img>
          <gds-icon-copy slot="email:${t.id}:copy-button"></gds-icon-copy>
          <gds-icon-cloud-download
            slot="download:${t.id}:main"
          ></gds-icon-cloud-download>
        `})}
    `},F=async()=>b||u||(u=fetch(A).then(e=>e.json()).then(e=>(b=e,e)),u),U=S(F),m={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"300px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},ActionLink:{label:"Actions",align:"start",justify:"end",cell:[{type:"link",href:"#",label:"Link"}]},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},Data:U},Pt={title:"Components/Table",component:"gds-table",argTypes:{...R("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},At={args:{columns:a.Columns,actions:a.Actions,density:"comfortable",variant:"secondary",data:a.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:e=>s` <gds-table
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
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>`},Et={args:{columns:a.Columns,data:a.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
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
  `},Tt={args:{columns:a.Columns,data:a.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
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
  `},jt={args:{columns:a.Columns,data:a.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:e=>s`
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
  `},Lt={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:e=>s`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Ft={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:`
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
  `},Ut={args:{columns:m.Columns,data:m.Data},parameters:{docs:{description:{story:`
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
  `},zt={args:{columns:m.Columns,actions:m.MultipleActions,data:m.Data},parameters:{docs:{description:{story:`
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions. Column content justification can be controlled via the \`justify\` property.

        `}}},render:e=>s`
    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${e.columns}"
      .data="${e.data}"
      .actions="${e.actions}"
    >
      <template name="actions-activate">
        <gds-icon-pin></gds-icon-pin>
      </template>
      <template name="actions-delete">
        <gds-icon-cross-small></gds-icon-cross-small>
      </template>
    </gds-table>

    <br />
    <br />
    <br />

    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${e.columns}"
      .data="${e.data}"
      .actions="${m.ActionContextMenu}"
    >
    </gds-table>

    <br />
    <br />
    <br />

    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${e.columns}"
      .data="${e.data}"
      .actions="${m.ActionLink}"
    >
    </gds-table>
  `},Ot={args:{columns:a.Columns,data:a.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:e=>s`
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
  `},Vt={args:{columns:a.Columns,data:a.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:e=>s`
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
  `},Mt={args:{columns:a.Columns,data:a.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:e=>s`
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
  `},Nt={args:{columns:a.Columns,data:a.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nThe `density` property allows customizing the table's visual spacing with these options:\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n        "}}},render:e=>s`
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
  `},It={args:{columns:a.Columns,data:a.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:e=>{const t=e.variant==="tertiary"?"primary":"tertiary";return s`
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
    `}},Wt={args:{columns:a.Columns,data:a.Data,responsive:!0},parameters:{docs:{description:{story:`
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
  `},Kt={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:`
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
  `},Bt={args:{columns:a.Columns,data:a.Data,simulatedState:"normal"},argTypes:{simulatedState:{control:"select",options:["normal","error","empty","no-results"],description:"Simulate different table states"}},parameters:{docs:{description:{story:`
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `}}},render:e=>{const t=x(),l=async o=>{if(await new Promise(n=>setTimeout(n,500)),e.simulatedState==="error")throw new Error("Simulated error state");return e.simulatedState==="empty"?{rows:[],total:0}:e.simulatedState==="no-results"?{rows:[],total:0}:e.data(o)},d=()=>{e.simulatedState="normal",t.value&&(t.value.dataLoadKey=`retry-${Date.now()}`)},i=()=>{var o;if(e.simulatedState="normal",t.value){t.value.dataLoadKey=`clear-${Date.now()}`;const n=(o=t.value.shadowRoot)==null?void 0:o.querySelector("gds-input");n&&(n.value="")}};return setTimeout(()=>{var o;if(e.simulatedState==="no-results"&&t.value){const n=(o=t.value.shadowRoot)==null?void 0:o.querySelector("gds-input");n&&(n.value="test search",n.dispatchEvent(new Event("input",{bubbles:!0})))}},100),s`
      <gds-table
        ${C(t)}
        .columns="${e.columns}"
        .data="${l}"
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
          <gds-button rank="secondary" size="small" @click=${d}>
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
    `}},Gt={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:`
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
  `},_t={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>{const t={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},l=o=>{console.log("🔔 Page change event:",o.detail),t.currentPage=o.detail.page;const n=document.querySelector("#page-status");n&&(n.textContent=`Page: ${t.currentPage}`)},d=o=>{console.log("🔔 Rows change event:",o.detail),t.currentRows=o.detail.rows;const n=document.querySelector("#rows-status");n&&(n.textContent=`Rows: ${t.currentRows}`)},i=o=>{console.log("🔔 Sort change event:",o.detail),t.sortColumn=o.detail.sortColumn,t.sortDirection=o.detail.sortDirection;const n=document.querySelector("#sort-status");n&&(n.textContent=`${t.sortColumn} (${t.sortDirection})`)};return s`
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
          @gds-page-change=${o=>l(o)}
          @gds-rows-change=${o=>d(o)}
          @gds-sort-change=${o=>i(o)}
        >
          <template name="email-copy">
            <gds-icon-copy></gds-icon-copy>
          </template>
          <template name="download-image">
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </template>
        </gds-table>
      </gds-flex>
    `}},Ht={args:{columns:a.Columns,data:a.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.

Slot content is generated from \`Users.SlotContent(rows)\` which receives the current page's rows from the \`gds-table-data-loaded\` event and creates per-row elements (avatars, copy icons, download icons).

Only the current page's slot content is rendered — when pages change, previous slot elements are replaced with new ones for the visible rows.
        `}}},render:e=>{const t=x(),l=d=>{const i=t.value;if(!i)return;i.querySelectorAll("[data-slot-content]").forEach(r=>r.remove());const o=document.createDocumentFragment(),n=document.createElement("div");for(k(a.SlotContent(d.detail.rows),n);n.firstChild;){const r=n.firstChild;r instanceof Element&&r.setAttribute("data-slot-content",""),o.appendChild(r)}i.appendChild(o)};return s`
      <gds-table
        ${C(t)}
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
        @gds-table-data-loaded=${l}
      >
      </gds-table>
    `}},qt=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{zt as Actions,jt as Caching,Ft as Cell,Nt as Density,Gt as DynamicContent,_t as Events,Tt as Filtering,Ut as Formatting,Ot as Headline,At as Overview,Vt as Plain,Wt as Responsive,Et as Selection,Ht as SlotComposition,Kt as Slots,Lt as Sorting,Bt as StateSlots,Mt as Striped,It as Variant,qt as __namedExportsOrder,Pt as default};
