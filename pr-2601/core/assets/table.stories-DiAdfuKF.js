import{x as s}from"./iframe-CNQuyvRb.js";import{e as $,n as x}from"./ref-CkQEL7vj.js";import{S as r}from"./table-B840cGkD.js";import"./card-BItlIG1A.js";import"./badge-VmbQGjjM.js";import"./dropdown-B6h4oKUU.js";import"./segmented-control-Ru2piCVd.js";import"./context-menu-CHmznPRB.js";import"./input-DW8lmsTm.js";import"./img-0n6b1OGT.js";import"./formatted-account-CF2end5z.js";import"./pagination-GCP4Z10n.js";import"./dot-grid-one-horizontal-6D-hHUlZ.js";import"./arrow-rotate-counter-clockwise.component-B1YQ79h7.js";import"./zoom-out.component-BXXp1OrC.js";import"./circle-check-uSt5u9OV.js";import"./cross-small-B0KypHkd.js";import{a as C}from"./argTableProps-BLnSuWwU.js";import"./localized-decorator-BXyTGXnb.js";import"./popover.component-DTqnKVdx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BwITJTLF.js";import"./icon.component-DaaHJEBV.js";import"./dropdown.component-Ca55ujIE.js";import"./query-async-DmbivNiU.js";import"./form-control-host.style-CNRcxNCb.js";import"./form-control-header.component-BmWI0G16.js";import"./badge.component-DwqN34fi.js";import"./flex.component-BRTHS8Pd.js";import"./triangle-exclamation.component-Cf_PDayD.js";import"./card.component-CIUZbWPA.js";import"./unwrap-slots-DxzOqBXY.js";import"./checkmark.component-Iz52spwT.js";import"./rbcb-toggle.template-BN4zZirl.js";import"./chevron-bottom.component-BTn-Eelm.js";import"./menu-heading.component-CEl8XzrU.js";import"./context-menu.component-ztLndpaa.js";import"./alert.component-Bpvpx7WC.js";import"./circle-check.component-DJXv6MBi.js";import"./blur.component-NkyeSLB0.js";import"./breadcrumb.component-C8tGpply.js";import"./chevron-left.component-Bu1YVLkD.js";import"./link.component-Cb9FGXiP.js";import"./props-link-5oB28sTa.js";import"./text-CN8k_8z1.js";import"./default-typography.styles-DhRKsXst.js";import"./calendar.component-BtaT5vtZ.js";import"./card-linked.component-vXkGHQqb.js";import"./checkbox-group.component-Yzbtih_l.js";import"./toggle-control-base.component-AkW00_Xe.js";import"./minus-small.component-DJKGKlpc.js";import"./coachmark.component-DJjTZsN1.js";import"./datepicker.component-Bf-7SIxZ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CTOJk3oC.js";import"./chevron-right.component-DHX6IEKE.js";import"./details.component-CstfkwiF.js";import"./divider.component-Dk-vtwuO.js";import"./signal.component-B7JheYA3.js";import"./filter-chips.component-C04IpS6b.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-l2Ebsyke.js";import"./arrow-up.component-Ca71NfpN.js";import"./grouped-list.component-mCvaab8I.js";import"./arrow-down.component-BkmtrpmW.js";import"./arrow-left.component-BjzGNc2l.js";import"./arrow-right.component-BBuMSgLG.js";import"./sun.component-CNjw-uK3.js";import"./star.component-bdcPw9Lh.js";import"./bubbles.component-TvwBS2PF.js";import"./chain-link-DeKfou_C.js";import"./chevron-right-small.component-C41DFfdk.js";import"./chevron-top.component-D4rjFm68.js";import"./circles-three.component-D_Csr51R.js";import"./cloudy-sun.component-CrbTB85C.js";import"./credit-card.component-F34K1aYt.js";import"./folder.component-DQQWN-IU.js";import"./magnifying-glass.component-DKRxypY_.js";import"./people-profile.component-l2QEWdyh.js";import"./push.component-DDPqR4YU.js";import"./rocket.component-BKi3pZVU.js";import"./square-grid-circle.component-DShodvO7.js";import"./img.component-eU5o4L_L.js";import"./input.component-DMTWMk_D.js";import"./textarea.component-B0Zqv-WM.js";import"./mask.component-vUZCxyfT.js";import"./menu-button.component-Csd3uwVS.js";import"./radio-group.component-CUG9Ix1H.js";import"./rich-text.component-CLRIJoDM.js";import"./sensitive-number.component-D_CSEQpX.js";import"./formatted-number-BWhndESZ.js";import"./formatted-text-9rdF-NoW.js";import"./formatted-date-CKsDQdsV.js";import"./formatted-date.component-JgUiAkWm.js";import"./sensitive-date.component-MhTEFsW9.js";import"./sensitive-account.component-xYLiLpCI.js";import"./select.component-D55s-EKv.js";import"./spinner.component-DAYR6lrb.js";import"./video.component-knyqBDV-.js";import"./card-pattern-01.component-D9Mx5tAA.js";const S="https://api.seb.io/components/table/table.users.json",D="https://api.seb.io/components/table/table.feedback.json";let g=null,p=null,h=null,u=null;const k=e=>({...e,name:r(e.name,["avatar","value"],e.email),email:r(e.email,["value","copy-button"]),status:r(e.status,["status"]),amount:r(e.amount,["amount"]),account:r(e.account,["main"]),lastLogin:r(e.lastLogin,["main"]),download:r(e.download??"#",["main"])}),P=async()=>g||p||(p=fetch(S).then(e=>e.json()).then(e=>e.map(k)).then(e=>(g=e,e)),p),v=e=>async a=>{let l=await e();if(a.searchQuery){const o=a.searchQuery.toLowerCase();l=l.filter(n=>Object.values(n).some(m=>m==null?void 0:m.toString().toLowerCase().includes(o)))}if(a.sortColumn&&l.length>0){const o=a.sortColumn;l=[...l].sort((n,m)=>{var f,w;const b=((f=n[o])==null?void 0:f.toString())??"",y=((w=m[o])==null?void 0:w.toString())??"";return a.sortDirection==="asc"?b.localeCompare(y):y.localeCompare(b)})}const d=(a.page-1)*a.rows,c=d+a.rows;return{rows:l.slice(d,c),total:l.length}},A=v(P),t={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1,value:e=>`${e.role.toUpperCase()} (${e.department||"N/A"})`},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"lastLogin",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:A},R=async()=>h||u||(u=fetch(D).then(e=>e.json()).then(e=>(h=e,e)),u),T=v(R),i={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"300px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},ActionLink:{label:"Actions",align:"start",justify:"end",cell:[{type:"link",href:"#",label:"Link"}]},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},Data:T},Ct={title:"Components/Table",component:"gds-table",argTypes:{...C("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},St={args:{columns:t.Columns,actions:t.Actions,density:"comfortable",variant:"secondary",data:t.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:e=>s` <gds-table
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
    </gds-table>`},Dt={args:{columns:t.Columns,data:t.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
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
  `},kt={args:{columns:t.Columns,data:t.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
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
  `},Pt={args:{columns:t.Columns,data:t.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:e=>s`
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
  `},At={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:e=>s`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Rt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
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
  `},Tt={args:{columns:i.Columns,data:i.Data},parameters:{docs:{description:{story:`
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
  `},Et={args:{columns:i.Columns,actions:i.MultipleActions,data:i.Data},parameters:{docs:{description:{story:`
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
      .actions="${i.ActionContextMenu}"
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
      .actions="${i.ActionLink}"
    >
    </gds-table>
  `},jt={args:{columns:t.Columns,data:t.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:e=>s`
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
  `},Lt={args:{columns:t.Columns,data:t.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:e=>s`
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
  `},Ft={args:{columns:t.Columns,data:t.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:e=>s`
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
  `},zt={args:{columns:t.Columns,data:t.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nThe `density` property allows customizing the table's visual spacing with these options:\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n        "}}},render:e=>s`
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
  `},Ut={args:{columns:t.Columns,data:t.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:e=>{const a=e.variant==="tertiary"?"primary":"tertiary";return s`
      <gds-card variant="${a}" padding="l" border-radius="m">
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
    `}},Ot={args:{columns:t.Columns,data:t.Data,responsive:!0},parameters:{docs:{description:{story:`
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
  `},Vt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
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
  `},Mt={args:{columns:t.Columns,data:t.Data,simulatedState:"normal"},argTypes:{simulatedState:{control:"select",options:["normal","error","empty","no-results"],description:"Simulate different table states"}},parameters:{docs:{description:{story:`
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `}}},render:e=>{const a=$(),l=async o=>{if(await new Promise(n=>setTimeout(n,500)),e.simulatedState==="error")throw new Error("Simulated error state");return e.simulatedState==="empty"?{rows:[],total:0}:e.simulatedState==="no-results"?{rows:[],total:0}:e.data(o)},d=()=>{e.simulatedState="normal",a.value&&(a.value.dataLoadKey=`retry-${Date.now()}`)},c=()=>{var o;if(e.simulatedState="normal",a.value){a.value.dataLoadKey=`clear-${Date.now()}`;const n=(o=a.value.shadowRoot)==null?void 0:o.querySelector("gds-input");n&&(n.value="")}};return setTimeout(()=>{var o;if(e.simulatedState==="no-results"&&a.value){const n=(o=a.value.shadowRoot)==null?void 0:o.querySelector("gds-input");n&&(n.value="test search",n.dispatchEvent(new Event("input",{bubbles:!0})))}},100),s`
      <gds-table
        ${x(a)}
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
          <gds-button rank="secondary" size="small" @click=${c}>
            Clear search
          </gds-button>
        </gds-flex>
      </gds-table>
    `}},Nt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
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
  `},It={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>{const a={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},l=o=>{console.log("🔔 Page change event:",o.detail),a.currentPage=o.detail.page;const n=document.querySelector("#page-status");n&&(n.textContent=`Page: ${a.currentPage}`)},d=o=>{console.log("🔔 Rows change event:",o.detail),a.currentRows=o.detail.rows;const n=document.querySelector("#rows-status");n&&(n.textContent=`Rows: ${a.currentRows}`)},c=o=>{console.log("🔔 Sort change event:",o.detail),a.sortColumn=o.detail.sortColumn,a.sortDirection=o.detail.sortDirection;const n=document.querySelector("#sort-status");n&&(n.textContent=`${a.sortColumn} (${a.sortDirection})`)};return s`
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
          .columns="${e.columns}"
          .data="${e.data}"
          rows="5"
          selectable
          searchable
          settings
          @gds-page-change=${o=>l(o)}
          @gds-rows-change=${o=>d(o)}
          @gds-sort-change=${o=>c(o)}
        >
          <template name="email-copy">
            <gds-icon-copy></gds-icon-copy>
          </template>
          <template name="download-image">
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </template>
        </gds-table>
      </gds-flex>
    `}},Wt={args:{columns:t.Columns,data:t.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.
 
        `}}},render:(e,{updateArgs:a})=>s`
      <gds-table
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
      >
      </gds-table>
    `},Kt=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{Et as Actions,Pt as Caching,Rt as Cell,zt as Density,Nt as DynamicContent,It as Events,kt as Filtering,Tt as Formatting,jt as Headline,St as Overview,Lt as Plain,Ot as Responsive,Dt as Selection,Wt as SlotComposition,Vt as Slots,At as Sorting,Mt as StateSlots,Ft as Striped,Ut as Variant,Kt as __namedExportsOrder,Ct as default};
