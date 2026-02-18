import{x as n}from"./iframe-CDYwBWwb.js";import{e as S,n as D}from"./ref-CRNBYR0o.js";import{m as k}from"./datepicker.component-BJuzt1BU.js";import{S as r}from"./table-CWbWRb-s.js";import"./card-BE6ML2c4.js";import"./badge-BCTlVZY4.js";import"./dropdown-B5pgHBvL.js";import"./segmented-control-BlogNyoa.js";import"./context-menu-PYqzxgQY.js";import"./input-bPlbOPVp.js";import"./img-5k-vc6do.js";import"./formatted-account-DqhqcMKw.js";import"./pagination-Bp5rZoss.js";import"./dot-grid-one-horizontal-DrxOmEZc.js";import"./arrow-rotate-counter-clockwise.component-D45yvctx.js";import"./zoom-out.component-eWzu-Odj.js";import"./circle-check-DgnTYQbv.js";import"./cross-small-B_9hYWQW.js";import{a as P}from"./argTableProps-CdpJ1EVI.js";import"./localized-decorator-CTPpDN0m.js";import"./query-async-QBT06sAI.js";import"./dropdown.component-Ggs84LXl.js";import"./icon.component-DsQvcCLO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CY1pZw6A.js";import"./form-control-header.component-BVZz5jGv.js";import"./badge.component-DOkIIYzL.js";import"./flex.component-Ci8HJepP.js";import"./triangle-exclamation.component-kru_ealq.js";import"./card.component-CA9Ke_4r.js";import"./unwrap-slots-DsLTz3oa.js";import"./checkmark.component-CoSq204c.js";import"./rbcb-toggle.template-CroFatrj.js";import"./chevron-bottom.component-CpTXIEaR.js";import"./cross-small.component-DVIXh5fg.js";import"./popover.component-D26aIRBH.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cxd3ossz.js";import"./calender-add.component-DqZH7bgG.js";import"./chevron-left.component-DzdVKr5d.js";import"./chevron-right.component-CukdDlWK.js";import"./menu-heading.component-1ad_jZof.js";import"./context-menu.component-CyaeBKE-.js";import"./alert.component-BcJGmxli.js";import"./circle-check.component-DBBzFXcd.js";import"./blur.component-rlG42Rxj.js";import"./breadcrumb.component-05Z3lD7w.js";import"./link.component-B-MWnYiz.js";import"./props-link-Bl9urhyP.js";import"./text-BCzI95gP.js";import"./default-typography.styles-HUtEMzrC.js";import"./card-linked.component-DY3CHwBF.js";import"./checkbox-group.component-BfwMuc-m.js";import"./toggle-control-base.component-Cs8afcKT.js";import"./minus-small.component-CvcM8B-r.js";import"./coachmark.component-xCy2K0Qi.js";import"./details.component-Daa35hTX.js";import"./divider.component-BFknL2F1.js";import"./signal.component-BEfmDaFV.js";import"./filter-chips.component-CCxWqkIa.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-D-_TMEgr.js";import"./arrow-up.component-rw2IUwWS.js";import"./grouped-list.component-DSilSSYk.js";import"./arrow-down.component-yO9xo0IE.js";import"./arrow-left.component-5MdjyX-v.js";import"./arrow-right.component-VvjglSST.js";import"./sun.component-DRslKGl8.js";import"./star.component-D_f2jw6n.js";import"./bubbles.component-CIBORvdM.js";import"./chain-link-CcquaYYS.js";import"./chevron-right-small.component-O30anLhI.js";import"./chevron-top.component-CRdxu2KU.js";import"./circles-three.component-3KkfaKGr.js";import"./cloudy-sun.component-DnfLaekd.js";import"./credit-card.component-BdeBTU_r.js";import"./folder.component-BGUsBGu0.js";import"./magnifying-glass.component-CT0bua8g.js";import"./people-profile.component-B0BM-rrH.js";import"./push.component-C9vfljOL.js";import"./rocket.component-DIGvi3FE.js";import"./square-grid-circle.component-DrFL-fDo.js";import"./img.component-DJLuTObb.js";import"./input.component-B0DMaRDc.js";import"./textarea.component-BdR1a2Sm.js";import"./mask.component-28KSc1WW.js";import"./menu-button.component-BOvGFLeR.js";import"./radio-group.component-CovnVrPa.js";import"./rich-text.component-CDWb41Yu.js";import"./sensitive-number.component-BU19_KD3.js";import"./formatted-number-Cg-Q7hQA.js";import"./formatted-text-lqpZICyp.js";import"./formatted-date-ya0EimD6.js";import"./formatted-date.component-Cta1rmPb.js";import"./sensitive-date.component-CR1kWxEQ.js";import"./sensitive-account.component-DsCn5X-E.js";import"./select.component-Bpu2U17a.js";import"./spinner.component-en6hdc9q.js";import"./video.component-DRU7C-lu.js";import"./card-pattern-01.component-DRDYoquK.js";const R="https://api.seb.io/components/table/table.users.json",T="https://api.seb.io/components/table/table.feedback.json";let h=null,p=null,b=null,u=null;const A=e=>({...e,name:r(e.name,["avatar","value"],e.email),email:r(e.email,["value","copy-button"]),status:r(e.status,["status"]),amount:r(e.amount,["amount"]),account:r(e.account,["main"]),lastLogin:r(e.lastLogin,["main"]),download:r(e.download??"#",["main"])});let y=null,g=null;const x=async()=>y||g||(g=fetch(R).then(e=>e.json()).then(e=>(y=e,e)),g),E=async()=>h||p||(p=x().then(e=>e.map(A)).then(e=>(h=e,e)),p),C=e=>async t=>{let l=await e();if(t.searchQuery){const o=t.searchQuery.toLowerCase();l=l.filter(s=>Object.values(s).some(m=>m==null?void 0:m.toString().toLowerCase().includes(o)))}if(t.sortColumn&&l.length>0){const o=t.sortColumn;l=[...l].sort((s,m)=>{var v,$;const f=((v=s[o])==null?void 0:v.toString())??"",w=(($=m[o])==null?void 0:$.toString())??"";return t.sortDirection==="asc"?f.localeCompare(w):w.localeCompare(f)})}const d=(t.page-1)*t.rows,c=d+t.rows;return{rows:l.slice(d,c),total:l.length}},j=C(E),a={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1,value:e=>`${e.role.toUpperCase()} (${e.department||"N/A"})`},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"lastLogin",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:j,SlotContent:async()=>{const e=await x();return n`
      ${e.map(t=>n`
          <gds-img
            src="${t.avatarUrl??"#"}"
            alt="${t.name}"
            slot="name:${t.email}:avatar"
            width="xl"
            height="xl"
          ></gds-img>
          <gds-icon-copy slot="email:${t.id}:copy-button"></gds-icon-copy>
          <gds-icon-cloud-download
            slot="download:${t.id}:main"
          ></gds-icon-cloud-download>
        `)}
    `}},L=async()=>b||u||(u=fetch(T).then(e=>e.json()).then(e=>(b=e,e)),u),F=C(L),i={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"300px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},ActionLink:{label:"Actions",align:"start",justify:"end",cell:[{type:"link",href:"#",label:"Link"}]},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},Data:F},Pt={title:"Components/Table",component:"gds-table",argTypes:{...P("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},Rt={args:{columns:a.Columns,actions:a.Actions,density:"comfortable",variant:"secondary",data:a.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:e=>n` <gds-table
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
    </gds-table>`},Tt={args:{columns:a.Columns,data:a.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
The \`selectable\` boolean enables row selection with checkboxes. Supports individual row selection, select all via header checkbox, and partial selection indication.

Emits \`gds-table-selection\` event with selected row data and indices. Provides methods for programmatic selection control.

See Developer Guide for complete selection API documentation.
        `}}},render:e=>n`
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
  `},At={args:{columns:a.Columns,data:a.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
#### Search Functionality
The \`searchable\` property adds a search input to the table, enabling real-time filtering across all columns.

#### Column Settings
The \`settings\` property adds a column visibility dropdown, allowing users to show/hide specific columns.
        `}}},render:e=>n`
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
  `},Et={args:{columns:a.Columns,data:a.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:e=>n`
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
  `},jt={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:e=>n`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Lt={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:`
The table supports multiple cell types: badge, image, button, link, context menu, and formatted text (number, account, date).

Cell types correspond to their respective Green Design System components and accept their available properties for customization.
        `}}},render:e=>n`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Ft={args:{columns:i.Columns,data:i.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>n`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy slot="trail"></gds-icon-copy>
      </template>
      <template name="role-link">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Ut={args:{columns:i.Columns,actions:i.MultipleActions,data:i.Data},parameters:{docs:{description:{story:`
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions. Column content justification can be controlled via the \`justify\` property.

        `}}},render:e=>n`
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
  `},zt={args:{columns:a.Columns,data:a.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:e=>n`
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
  `},Ot={args:{columns:a.Columns,data:a.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:e=>n`
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
  `},Vt={args:{columns:a.Columns,data:a.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:e=>n`
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
  `},Mt={args:{columns:a.Columns,data:a.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nThe `density` property allows customizing the table's visual spacing with these options:\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n        "}}},render:e=>n`
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
  `},Nt={args:{columns:a.Columns,data:a.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:e=>{const t=e.variant==="tertiary"?"primary":"tertiary";return n`
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
    `}},It={args:{columns:a.Columns,data:a.Data,responsive:!0},parameters:{docs:{description:{story:`
When the \`responsive\` boolean is set to \`true\`, the table transforms its layout for smaller screens:

- **Mobile Layout**: Rows are restructured into a card-like format
- **Column Presentation**: 
  - Column names are displayed on the left side
  - Corresponding cell values are shown on the right side
- **Header Behavior**: On larger screens table header becomes sticky, ensuring column labels remain visible during scrolling.
        `}}},render:e=>n`
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
  `},Wt={args:{columns:a.Columns,data:a.Data},parameters:{docs:{description:{story:`
Use slots to add custom controls to the table header and footer areas.

- **header-lead**: Add filtering/sorting controls at the start of the header.
- **header-trail**: Add actions (e.g., export buttons) at the end of the header.

> Avoid overloading slots to maintain clarity.
        `}}},render:e=>n`
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
  `},Kt={args:{columns:a.Columns,data:a.Data,simulatedState:"normal"},argTypes:{simulatedState:{control:"select",options:["normal","error","empty","no-results"],description:"Simulate different table states"}},parameters:{docs:{description:{story:`
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `}}},render:e=>{const t=S(),l=async o=>{if(await new Promise(s=>setTimeout(s,500)),e.simulatedState==="error")throw new Error("Simulated error state");return e.simulatedState==="empty"?{rows:[],total:0}:e.simulatedState==="no-results"?{rows:[],total:0}:e.data(o)},d=()=>{e.simulatedState="normal",t.value&&(t.value.dataLoadKey=`retry-${Date.now()}`)},c=()=>{var o;if(e.simulatedState="normal",t.value){t.value.dataLoadKey=`clear-${Date.now()}`;const s=(o=t.value.shadowRoot)==null?void 0:o.querySelector("gds-input");s&&(s.value="")}};return setTimeout(()=>{var o;if(e.simulatedState==="no-results"&&t.value){const s=(o=t.value.shadowRoot)==null?void 0:o.querySelector("gds-input");s&&(s.value="test search",s.dispatchEvent(new Event("input",{bubbles:!0})))}},100),n`
      <gds-table
        ${D(t)}
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

          `}}},render:e=>n`
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
        `}}},render:e=>{const t={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},l=o=>{console.log("🔔 Page change event:",o.detail),t.currentPage=o.detail.page;const s=document.querySelector("#page-status");s&&(s.textContent=`Page: ${t.currentPage}`)},d=o=>{console.log("🔔 Rows change event:",o.detail),t.currentRows=o.detail.rows;const s=document.querySelector("#rows-status");s&&(s.textContent=`Rows: ${t.currentRows}`)},c=o=>{console.log("🔔 Sort change event:",o.detail),t.sortColumn=o.detail.sortColumn,t.sortDirection=o.detail.sortDirection;const s=document.querySelector("#sort-status");s&&(s.textContent=`${t.sortColumn} (${t.sortDirection})`)};return n`
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
    `}},Bt={args:{columns:a.Columns,data:a.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.

Slot content is generated from \`Users.SlotContent()\` which loops through all user data and creates per-row elements (avatars, copy icons, download icons) using raw data values.
        `}}},render:e=>n`
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
        ${k(a.SlotContent(),n``)}
      </gds-table>
    `},Ht=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{Ut as Actions,Et as Caching,Lt as Cell,Mt as Density,Gt as DynamicContent,_t as Events,At as Filtering,Ft as Formatting,zt as Headline,Rt as Overview,Ot as Plain,It as Responsive,Tt as Selection,Bt as SlotComposition,Wt as Slots,jt as Sorting,Kt as StateSlots,Vt as Striped,Nt as Variant,Ht as __namedExportsOrder,Pt as default};
