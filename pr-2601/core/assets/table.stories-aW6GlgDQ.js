import{o as R,x as l}from"./iframe-C4uuVPzH.js";import{e as E,n as j}from"./ref-DgrieuU5.js";import{S as p}from"./table-BZ9ueX4X.js";import"./card-BnbVFn-H.js";import"./badge-Bn3HPMVO.js";import"./dropdown-FJ94m5j8.js";import"./segmented-control-C1G7awkX.js";import"./context-menu-DynWmbtj.js";import"./input-BT-El32M.js";import"./img-B_DBoO2-.js";import"./formatted-account-C1Ooi4p6.js";import"./pagination-zzhmFbJM.js";import"./dot-grid-one-horizontal-Dv2x7q1j.js";import"./arrow-rotate-counter-clockwise.component-BPP1-VAX.js";import"./zoom-out.component-D_aENrP4.js";import"./circle-check-BLBheGAN.js";import"./cross-small-Cd0fEVTR.js";import{a as F}from"./argTableProps-BM-EQa4W.js";import"./localized-decorator-Bep-fVVs.js";import"./popover.component-CG62K97A.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DaQtDsz0.js";import"./icon.component-BOdqx_Z5.js";import"./dropdown.component-CYoYOd7G.js";import"./query-async-BQEYl374.js";import"./form-control-host.style-CHCwye6B.js";import"./form-control-header.component-0UHnrO6_.js";import"./badge.component-ov4ZrA5C.js";import"./flex.component-CnOoPqjX.js";import"./triangle-exclamation.component-CKLqpedP.js";import"./card.component-BQsfVdbK.js";import"./unwrap-slots-DkhAejeW.js";import"./checkmark.component-DFDKDFwb.js";import"./rbcb-toggle.template-DCplSnOw.js";import"./chevron-bottom.component-Dc-iXEby.js";import"./menu-heading.component-DGgDaVw9.js";import"./context-menu.component-SQ_EDJdz.js";import"./alert.component-C2ffVwH7.js";import"./circle-check.component--VzjxqqF.js";import"./blur.component-Dzyn6DIr.js";import"./breadcrumb.component-CrPsx0Ff.js";import"./chevron-left.component-NtzhVRlw.js";import"./link.component-CwOD4TBn.js";import"./props-link-BBzVNo_4.js";import"./text-79o4k6CO.js";import"./default-typography.styles-CqErZofN.js";import"./calendar.component-C1x4Dkcr.js";import"./card-linked.component-BH9qc7rQ.js";import"./checkbox-group.component-C-aUImSh.js";import"./toggle-control-base.component-IH6lrBsZ.js";import"./minus-small.component-C7dhm2ai.js";import"./coachmark.component-Bhq1-dlu.js";import"./datepicker.component-CApFCkaG.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-C__HaTBj.js";import"./chevron-right.component-BeGySsxM.js";import"./details.component-DmQzeVvP.js";import"./divider.component-14euxAKR.js";import"./signal.component-BOIR9fWO.js";import"./filter-chips.component-D0tfEUeU.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-BgDJwuGy.js";import"./arrow-up.component-gZpCRmXW.js";import"./grouped-list.component-FmUTIVWs.js";import"./arrow-down.component-uZVP_qgW.js";import"./arrow-left.component-BoksTE30.js";import"./arrow-right.component-H_HQtgoa.js";import"./sun.component-BgAMu0oy.js";import"./star.component-DVRKyqUH.js";import"./bubbles.component-CrvFZk8H.js";import"./chain-link-295EbreC.js";import"./chevron-right-small.component-kAVEOyIJ.js";import"./chevron-top.component-ednyDW32.js";import"./circles-three.component-C-7WQoSw.js";import"./cloudy-sun.component-Ce18ZAL7.js";import"./credit-card.component-BG91ZANc.js";import"./folder.component-DWqX4Gw9.js";import"./magnifying-glass.component-DoT7NsK2.js";import"./people-profile.component-DRHRBjes.js";import"./push.component-CvqGsr6t.js";import"./rocket.component-DvkDO0vZ.js";import"./square-grid-circle.component-BzGvnrIW.js";import"./img.component-wRP9EsbA.js";import"./input.component-CfBaiQKt.js";import"./textarea.component-DTAnE3no.js";import"./mask.component-BCn-n3tm.js";import"./menu-button.component-BIQz8XRK.js";import"./radio-group.component-DB5E5BcN.js";import"./rich-text.component-JiyLVerV.js";import"./sensitive-number.component-zA5UHSL3.js";import"./formatted-number-D_hKEsEK.js";import"./formatted-text-D2U15IT8.js";import"./formatted-date-C4PsP_jO.js";import"./formatted-date.component-DbVX7wJ1.js";import"./sensitive-date.component-CE9pkuwl.js";import"./sensitive-account.component-Dr-y5EtX.js";import"./select.component-DYB9W3iR.js";import"./spinner.component-BG7_m0Nk.js";import"./video.component-TvITcCcC.js";import"./card-pattern-01.component-BWt_SGPs.js";const U="https://api.seb.io/components/table/table.users.json",z="https://api.seb.io/components/table/table.feedback.json";let b=null,g=null,y=null,h=null;const I=(e,a)=>{const s=String(e.name),d=s.split(" ")[0]||`User-${e.id}`,c=a<6;return{...e,name:c?p(s,["lead","value"],d):p(s,["lead","value"]),email:p(String(e.email),["value","copy-button"]),status:p(String(e.status),["status"]),amount:p(Number(e.amount),["amount"]),account:p(String(e.account),["main"]),lastLogin:p(String(e.lastLogin),["main"]),download:p(String(e.download??"#"),["main"])}},N=async()=>b||g||(g=fetch(U).then(e=>e.json()).then(e=>e.map(I)).then(e=>(b=e,e)),g),O=async e=>{await new Promise(o=>setTimeout(o,1e3));let s=[...await N()];if(e.searchQuery){const o=e.searchQuery.toLowerCase();s=s.filter(i=>Object.values(i).some(r=>String(r).toLowerCase().includes(o)))}e.sortColumn&&s.sort((o,i)=>{const r=String(o[e.sortColumn]),m=String(i[e.sortColumn]);return e.sortDirection==="asc"?r.localeCompare(m):m.localeCompare(r)});const d=(e.page-1)*e.rows,c=d+e.rows;return{rows:s.slice(d,c),total:s.length}},t={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1,value:e=>`${e.role.toUpperCase()} (${e.department||"N/A"})`},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"lastLogin",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:O},V=async()=>y||h||(h=fetch(z).then(e=>e.json()).then(e=>(y=e,e)),h),K=async e=>{await new Promise(o=>setTimeout(o,800));let s=[...await V()];if(e.searchQuery){const o=e.searchQuery.toLowerCase();s=s.filter(i=>Object.values(i).some(r=>String(r).toLowerCase().includes(o)))}e.sortColumn&&s.sort((o,i)=>{const r=String(o[e.sortColumn]),m=String(i[e.sortColumn]);return e.sortDirection==="asc"?r.localeCompare(m):m.localeCompare(r)});const d=(e.page-1)*e.rows,c=d+e.rows;return{rows:s.slice(d,c),total:s.length}},u={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"300px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},ActionLink:{label:"Actions",align:"start",justify:"end",cell:[{type:"link",href:"#",label:"Link"}]},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},Data:K},M=(e,a)=>{const d=a??1,c=(d-1)*10,n=c+10,o=e.slice(c,n);return console.log(`Generating slots for page ${d}: rows ${c+1}-${n}`),o.map(i=>{const r=i.id,m=i.name,$=i.email,x=i.status,S=i.amount,C=i.account,D=i.lastLogin;i.download;const k=String(m.value),P=m.key||r,f=String($.value),w=String(x.value),T=w==="Active"?"positive":"notice",L=Number(S.value),v=String(C.value),A=String(D.value);return l`
      <gds-img
        slot="name:${P}:lead"
        src="${R(i.avatarUrl)}"
        alt="${k}"
        width="xl"
        height="xl"
      ></gds-img>
      <gds-badge
        slot="status:${r}:status"
        size="small"
        variant="${T}"
      >
        ${w}
      </gds-badge>
      <gds-text slot="email:${r}:value">${f}</gds-text>
      <gds-button
        slot="email:${r}:copy-button"
        size="small"
        rank="tertiary"
        @click=${()=>navigator.clipboard.writeText(f)}
      >
        <gds-icon-copy></gds-icon-copy>
      </gds-button>
      <gds-flex slot="amount:${r}:amount" gap="xs" align-items="center">
        <gds-text>${L.toLocaleString("sv-SE")}</gds-text>
        <gds-badge variant="information" size="small">SEK</gds-badge>
      </gds-flex>
      <gds-formatted-account slot="account:${r}:main" .value=${v}>
        ${v}
      </gds-formatted-account>
      <gds-link
        slot="download:${r}:main"
        href="#"
        text-decoration="underline"
        download
      >
        Download
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </gds-link>
      <gds-formatted-date
        slot="lastLogin:${r}:main"
        .value=${A}
        locale="sv-SE"
        format="dateLong"
      >
      </gds-formatted-date>
    `})},W=()=>b??[],zt={title:"Components/Table",component:"gds-table",argTypes:{...F("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},It={args:{columns:t.Columns,actions:t.Actions,density:"comfortable",variant:"secondary",data:t.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:e=>l` <gds-table
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
    </gds-table>`},Nt={args:{columns:t.Columns,data:t.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
The \`selectable\` boolean enables row selection with checkboxes. Supports individual row selection, select all via header checkbox, and partial selection indication.

Emits \`gds-table-selection\` event with selected row data and indices. Provides methods for programmatic selection control.

See Developer Guide for complete selection API documentation.
        `}}},render:e=>l`
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
  `},Ot={args:{columns:t.Columns,data:t.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
#### Search Functionality
The \`searchable\` property adds a search input to the table, enabling real-time filtering across all columns.

#### Column Settings
The \`settings\` property adds a column visibility dropdown, allowing users to show/hide specific columns.
        `}}},render:e=>l`
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
  `},Vt={args:{columns:t.Columns,data:t.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:e=>l`
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
  `},Kt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:e=>l`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Mt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
The table supports multiple cell types: badge, image, button, link, context menu, and formatted text (number, account, date).

Cell types correspond to their respective Green Design System components and accept their available properties for customization.
        `}}},render:e=>l`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Wt={args:{columns:u.Columns,data:u.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>l`
    <gds-table .columns="${e.columns}" .data="${e.data}">
      <template name="email-copy">
        <gds-icon-copy slot="trail"></gds-icon-copy>
      </template>
      <template name="role-link">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `},Gt={args:{columns:u.Columns,actions:u.MultipleActions,data:u.Data},parameters:{docs:{description:{story:`
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions. Column content justification can be controlled via the \`justify\` property.

        `}}},render:e=>l`
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
      .actions="${u.ActionContextMenu}"
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
      .actions="${u.ActionLink}"
    >
    </gds-table>
  `},Qt={args:{columns:t.Columns,data:t.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:e=>l`
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
  `},_t={args:{columns:t.Columns,data:t.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:e=>l`
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
  `},Bt={args:{columns:t.Columns,data:t.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:e=>l`
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
  `},Ht={args:{columns:t.Columns,data:t.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nThe `density` property allows customizing the table's visual spacing with these options:\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n        "}}},render:e=>l`
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
  `},Yt={args:{columns:t.Columns,data:t.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:e=>{const a=e.variant==="tertiary"?"primary":"tertiary";return l`
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
    `}},Jt={args:{columns:t.Columns,data:t.Data,responsive:!0},parameters:{docs:{description:{story:`
When the \`responsive\` boolean is set to \`true\`, the table transforms its layout for smaller screens:

- **Mobile Layout**: Rows are restructured into a card-like format
- **Column Presentation**: 
  - Column names are displayed on the left side
  - Corresponding cell values are shown on the right side
- **Header Behavior**: On larger screens table header becomes sticky, ensuring column labels remain visible during scrolling.
        `}}},render:e=>l`
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
  `},Xt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
Use slots to add custom controls to the table header and footer areas.

- **header-lead**: Add filtering/sorting controls at the start of the header.
- **header-trail**: Add actions (e.g., export buttons) at the end of the header.

> Avoid overloading slots to maintain clarity.
        `}}},render:e=>l`
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
  `},Zt={args:{columns:t.Columns,data:t.Data,simulatedState:"normal"},argTypes:{simulatedState:{control:"select",options:["normal","error","empty","no-results"],description:"Simulate different table states"}},parameters:{docs:{description:{story:`
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `}}},render:e=>{const a=E(),s=async n=>{if(await new Promise(o=>setTimeout(o,500)),e.simulatedState==="error")throw new Error("Simulated error state");return e.simulatedState==="empty"?{rows:[],total:0}:e.simulatedState==="no-results"?{rows:[],total:0}:e.data(n)},d=()=>{e.simulatedState="normal",a.value&&(a.value.dataLoadKey=`retry-${Date.now()}`)},c=()=>{var n;if(e.simulatedState="normal",a.value){a.value.dataLoadKey=`clear-${Date.now()}`;const o=(n=a.value.shadowRoot)==null?void 0:n.querySelector("gds-input");o&&(o.value="")}};return setTimeout(()=>{var n;if(e.simulatedState==="no-results"&&a.value){const o=(n=a.value.shadowRoot)==null?void 0:n.querySelector("gds-input");o&&(o.value="test search",o.dispatchEvent(new Event("input",{bubbles:!0})))}},100),l`
      <gds-table
        ${j(a)}
        .columns="${e.columns}"
        .data="${s}"
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
    `}},qt={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
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

          `}}},render:e=>l`
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
  `},ea={args:{columns:t.Columns,data:t.Data},parameters:{docs:{description:{story:`
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
        `}}},render:e=>{const a={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},s=n=>{console.log("🔔 Page change event:",n.detail),a.currentPage=n.detail.page;const o=document.querySelector("#page-status");o&&(o.textContent=`Page: ${a.currentPage}`)},d=n=>{console.log("🔔 Rows change event:",n.detail),a.currentRows=n.detail.rows;const o=document.querySelector("#rows-status");o&&(o.textContent=`Rows: ${a.currentRows}`)},c=n=>{console.log("🔔 Sort change event:",n.detail),a.sortColumn=n.detail.sortColumn,a.sortDirection=n.detail.sortDirection;const o=document.querySelector("#sort-status");o&&(o.textContent=`${a.sortColumn} (${a.sortDirection})`)};return l`
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
          @gds-page-change=${n=>s(n)}
          @gds-rows-change=${n=>d(n)}
          @gds-sort-change=${n=>c(n)}
        >
          <template name="email-copy">
            <gds-icon-copy></gds-icon-copy>
          </template>
          <template name="download-image">
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </template>
        </gds-table>
      </gds-flex>
    `}},ta={args:{columns:t.Columns,data:t.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.
 
        `}}},render:e=>{const a=W();let s=1;const d=c=>{s=c.detail.page,console.log("Current page number:",s)};return l`
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
        rows="10"
        @gds-page-change="${d}"
      >
        ${M(a,s)}
      </gds-table>
    `}},aa=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{Gt as Actions,Vt as Caching,Mt as Cell,Ht as Density,qt as DynamicContent,ea as Events,Ot as Filtering,Wt as Formatting,Qt as Headline,It as Overview,_t as Plain,Jt as Responsive,Nt as Selection,ta as SlotComposition,Xt as Slots,Kt as Sorting,Zt as StateSlots,Bt as Striped,Yt as Variant,aa as __namedExportsOrder,zt as default};
