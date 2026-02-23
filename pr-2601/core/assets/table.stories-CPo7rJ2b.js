import{x as r,ac as d}from"./iframe-ptTl63C5.js";import{n as c,e as m}from"./ref-YIgLp-vV.js";import{S as b}from"./table-DEHFxrb1.js";import"./card-4xXt3x6U.js";import"./badge-rSk_ohmZ.js";import"./dropdown-_kXdjfm0.js";import"./segmented-control-D56-Q4EK.js";import"./context-menu-C4ePR-Of.js";import"./input-ntg3o4ER.js";import"./img-idFXbLqa.js";import"./formatted-account-BkKc2cLm.js";import"./formatted-number-Z-ebybTC.js";import"./formatted-date-CzHZyVEP.js";import"./pagination-DqkVTP7w.js";import"./dot-grid-one-horizontal-6xjt3gT8.js";import"./arrow-rotate-counter-clockwise.component-CSiiAwyc.js";import"./zoom-out.component-DniNf82L.js";import"./circle-check-BEshxB7T.js";import"./cross-small-CxChT1ph.js";import{a as R}from"./argTableProps-CncuKXYX.js";import"./localized-decorator-DptVLhNd.js";import"./popover.component-DTl5Bh9B.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-pjLjsZM1.js";import"./icon.component-C5NyBM3a.js";import"./dropdown.component-DX61mQ9Y.js";import"./query-async-DFURPGDy.js";import"./form-control-host.style-Cgkyvxn9.js";import"./form-control-header.component-Dc4wFyMr.js";import"./badge.component-7oM-BhbO.js";import"./flex.component-CzelF5f6.js";import"./triangle-exclamation.component-uiwZwaOi.js";import"./card.component-Cf8IDD58.js";import"./unwrap-slots-CSGB9x5q.js";import"./checkmark.component-ClDjiKEI.js";import"./rbcb-toggle.template-DJSsAZrY.js";import"./chevron-bottom.component-C8GXg_JL.js";import"./menu-heading.component-DYyr_OKV.js";import"./context-menu.component-DLfmZsOI.js";import"./alert.component-Cf5FvD3o.js";import"./circle-check.component-BOnItMtG.js";import"./blur.component-CkNoHYR2.js";import"./breadcrumb.component-l_L4LPeq.js";import"./chevron-left.component-BWsLlFzf.js";import"./link.component-DiVYImQv.js";import"./props-link-_LHdvQyM.js";import"./text-Cd4eHWM5.js";import"./default-typography.styles-Q0Uhwf2Y.js";import"./calendar.component-DgGsrwty.js";import"./card-linked.component-D57SH4mY.js";import"./checkbox-group.component-TjVq8psY.js";import"./toggle-control-base.component-C9x5Hz-Y.js";import"./minus-small.component-DRSK2IqW.js";import"./coachmark.component-OLIdxm-4.js";import"./datepicker.component-CtgWYTOP.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component--I1rH2pk.js";import"./chevron-right.component-Dl-Nfdty.js";import"./details.component-D2wFmHEc.js";import"./divider.component-CYfAC-84.js";import"./signal.component-G7XBpEQu.js";import"./filter-chips.component-Ck9crRrN.js";import"./resize-observer-B9k8v2TZ.js";import"./summary.component-CRNusoXA.js";import"./arrow-up.component-CSI5jfBO.js";import"./grouped-list.component-DGP_qqdO.js";import"./arrow-down.component-BNMFNZwx.js";import"./arrow-left.component-D6spqyUg.js";import"./arrow-right.component-BZo7QFIf.js";import"./sun.component-B__zAljZ.js";import"./star.component-CWHEtG2B.js";import"./bubbles.component-NyDeWF8E.js";import"./chain-link-BMEGV96M.js";import"./chevron-right-small.component-CwWfWHeM.js";import"./chevron-top.component-BKVcedks.js";import"./circles-three.component-BW393l_b.js";import"./cloudy-sun.component-0r5BZWQ2.js";import"./credit-card.component-uncWVKfc.js";import"./folder.component-CAchdU2B.js";import"./magnifying-glass.component-BV8bFR8W.js";import"./people-profile.component-CfxZFOaj.js";import"./push.component-eAijNhmt.js";import"./rocket.component-DV2W2H3N.js";import"./square-grid-circle.component-DIhtBHGS.js";import"./img.component-CSg_-iei.js";import"./input.component-gFxRVIu6.js";import"./textarea.component-B2YvbhgE.js";import"./mask.component-COXLNRqC.js";import"./menu-button.component-DRYR1QsP.js";import"./radio-group.component-70Ps1Gml.js";import"./rich-text.component-C22o9kPl.js";import"./sensitive-number.component-DWm__hUY.js";import"./sensitive-date.component-Bw37AkR2.js";import"./formatted-date.component-CeWn7EX3.js";import"./formatted-text-6DD4c7-A.js";import"./sensitive-account.component-BXlVDuoO.js";import"./select.component-CzQkhzVT.js";import"./spinner.component-CdNSB2IS.js";import"./video.component-CEKw7yx_.js";import"./card-pattern-01.component-BUg79blm.js";const L="https://api.seb.io/components/table/table.users.json",A="https://api.seb.io/components/table/table.feedback.json";let $=null,h=null,v=null,f=null;const T=t=>({...t,name:b(t.name,["avatar","value"]),email:b(t.email,["value","copy-button"]),status:b(t.status,["status"]),amount:b(t.amount,["amount","currency"]),account:b(t.account,["main"]),login:b(t.lastLogin,["main"]),download:b(t.download??"#",["main"])});let w=null,y=null;const z=async()=>w||y||(y=fetch(L).then(t=>t.json()).then(t=>(w=t,t)),y),P=async()=>$||h||(h=z().then(t=>t.map(T)).then(t=>($=t,t)),h),k=t=>async e=>{let a=await t();if(e.searchQuery){const i=e.searchQuery.toLowerCase();a=a.filter(u=>Object.values(u).some(l=>l==null?void 0:l.toString().toLowerCase().includes(i)))}if(e.sortColumn&&a.length>0){const i=e.sortColumn;a=[...a].sort((u,l)=>{var C,S;const g=((C=u[i])==null?void 0:C.toString())??"",x=((S=l[i])==null?void 0:S.toString())??"";return e.sortDirection==="asc"?g.localeCompare(x):x.localeCompare(g)})}const s=(e.page-1)*e.rows,o=s+e.rows;return{rows:a.slice(s,o),total:a.length}},E=k(P),n={Columns:[{key:"id",label:"ID",sortable:!1},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0,justify:"space-between"},{key:"role",label:"Role",sortable:!0,visible:!1},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"amount",label:"Amount",sortable:!0,justify:"end"},{key:"account",label:"Account",sortable:!0},{key:"login",label:"Last Login",sortable:!0},{key:"download",label:"Download"}],Actions:{label:"Actions",justify:"end"},Data:E,SlotContent:t=>r`
      ${t.map(e=>r`
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
    `},j=async()=>v||f||(f=fetch(A).then(t=>t.json()).then(t=>(v=t,t)),f),F=k(j),p={Columns:[{key:"name",label:"Name",sortable:!0,align:"start"},{key:"feedback",label:"Feedback",align:"start",width:"350px"},{key:"notes",label:"Notes",align:"start",width:"460px"},{key:"department",label:"Department",align:"start",width:"120px"},{key:"status",label:"Status",sortable:!0,align:"start",justify:"end",width:"100px"}],MultipleActions:{label:"Actions",align:"start",justify:"start"},MultipleActionsSlotContent:t=>r`
      ${t.map((e,a)=>r`
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
    `,ActionLink:{label:"Actions",align:"start",justify:"end"},ActionLinkSlotContent:t=>r`
      ${t.map((e,a)=>r`
          <gds-link slot="actions:${e.id??a+1}:main" href="#">
            View details
          </gds-link>
        `)}
    `,ActionButton:{label:"Actions",align:"start",justify:"start"},ActionContextMenu:{label:"Actions",align:"start",justify:"end"},ActionContextMenuSlotContent:t=>r`
      ${t.map((e,a)=>r`
          <gds-context-menu slot="actions:${e.id??a+1}:main">
            <gds-button slot="trigger" rank="secondary" size="small">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <gds-menu-item>Edit</gds-menu-item>
            <gds-menu-item>Archive</gds-menu-item>
            <gds-menu-item>Delete</gds-menu-item>
          </gds-context-menu>
        `)}
    `,Data:F},D=new WeakSet,M=t=>r`
  <div
    ${c(e=>{if(!e||D.has(e))return;D.add(e);const a=new IntersectionObserver(s=>{if(s[0].isIntersecting){a.disconnect();const o=t();d(o,e);const i=e.parentNode;if(i){for(;e.firstChild;)i.insertBefore(e.firstChild,e);i.removeChild(e)}}},{rootMargin:"200px"});a.observe(e)})}
    style="min-height:40vh"
  ></div>
`,Ae={title:"Components/Table",component:"gds-table",argTypes:{...R("gds-table"),density:{control:{type:"select"},options:["comfortable","compact","spacious"],defaultValue:"comfortable"},variant:{control:{type:"select"},options:["primary","secondary","tertiary"],defaultValue:"secondary"},selectable:{control:{type:"boolean"},defaultValue:!0},searchLabel:{control:{type:"text"}},height:{control:{type:"string"},defaultValue:!1}},tags:["autodocs"],decorators:[(t,e)=>e.viewMode==="docs"?M(()=>t()):t()],parameters:{docs:{description:{component:`
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `}}}},Te={args:{columns:n.Columns,actions:n.Actions,density:"comfortable",variant:"secondary",data:n.Data,selectable:!0,searchable:!0,searchLabel:"Search users",settings:!0,plain:!1,height:"80vh",responsive:!1,nocache:!1,striped:!1},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
    `}},ze={args:{columns:n.Columns,data:n.Data,selectable:!0,density:"comfortable"},parameters:{docs:{description:{story:`
The \`selectable\` boolean enables row selection with checkboxes. Supports individual row selection, select all via header checkbox, and partial selection indication.

Emits \`gds-table-selection\` event with selected row data and indices. Provides methods for programmatic selection control.

See Developer Guide for complete selection API documentation.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
      <gds-table
        ${c(e)}
        .density="${t.density}"
        ?selectable="${t.selectable}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Pe={args:{columns:n.Columns,data:n.Data,searchable:!0,settings:!0},parameters:{docs:{description:{story:`
#### Search Functionality
The \`searchable\` property adds a search input to the table, enabling real-time filtering across all columns.

#### Column Settings
The \`settings\` property adds a column visibility dropdown, allowing users to show/hide specific columns.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
      <gds-table
        ${c(e)}
        ?searchable="${t.searchable}"
        ?settings="${t.settings}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ee={args:{columns:n.Columns,data:n.Data,searchable:!0,settings:!0,nocache:!0},parameters:{docs:{description:{story:"\nThe `nocache` property provides direct control over data retrieval. When set to `true`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.\n\n> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
    `}},je={args:{columns:n.Columns,data:n.Data},parameters:{docs:{description:{story:"\nSorting is enabled by setting `sortable: true` on column configuration. <br />\nClicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />\nThe sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a `gds-table-data-loaded` event with the sorted data.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
        `}}},render:t=>r`
    <gds-table .columns="${t.columns}" .data="${t.data}"></gds-table>
  `},Ue={args:{columns:p.Columns,actions:p.MultipleActions,data:p.Data},parameters:{docs:{description:{story:`
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions.

When passed as an object \`{ label, align, justify }\`, it configures the actions column header and cell layout.
The actual action content is provided through named slots using the \`actions:rowKey:main\` convention.

        `}}},render:t=>{const e=m(),a=m(),s=m();return r`
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
    `}},Oe={args:{columns:n.Columns,data:n.Data,headline:"User Management",headlineTag:"h2",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:"\nWhen the `headline` and `summary` properties are set, they will be displayed at the top of the table.\n\nYou can change the `headline-tag` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
    `}},Ie={args:{columns:n.Columns,data:n.Data,plain:!0},parameters:{docs:{description:{story:"\nWhen `plain` boolean is set, the table header and footer are removed, rendering only the data table.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
      <gds-table
        ${c(e)}
        ?plain="${t.plain}"
        .columns="${t.columns}"
        .data="${t.data}"
        @gds-table-data-loaded=${a}
      >
      </gds-table>
    `}},Ke={args:{columns:n.Columns,data:n.Data,striped:!0,density:"compact"},parameters:{docs:{description:{story:"\nWhen `striped` boolean is set, alternating row background colors are applied to even-numbered rows.\n        "}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
    `}},Ve={args:{columns:n.Columns,data:n.Data,density:"compact",headline:"User Management",summary:"Overview of all users in the system"},parameters:{docs:{description:{story:'\nThe `density` property controls the table\'s visual spacing and affects the table\'s **built-in UI** (search input, column settings dropdown, pagination).\n\n- **`comfortable`** (Default) · Standard spacing for balanced readability\n- **`compact`** · Reduced spacing to maximize information density\n- **`spacious`** · Increased spacing for enhanced readability\n\n> **Slot content sizing** — The density mode does **not** automatically resize components you provide via slots. When using a specific density, size your slotted components accordingly. For example, use `size="small"` on badges and buttons in `compact` or `comfortable` mode, and `size="medium"` in `spacious` mode to maintain visual consistency.\n        '}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
    `}},We={args:{columns:n.Columns,data:n.Data,variant:"secondary",density:"comfortable"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},parameters:{docs:{description:{story:"\nThe `variant` property controls the visual style of the table container card.\nThese variants can be used: `primary`, `secondary` (Default), `tertiary` \n\n> Variant naming subject to change on the next major release\n        "}}},render:t=>{const e=t.variant==="tertiary"?"primary":"tertiary",a=m(),s=o=>{const i=a.value;i&&d(n.SlotContent(o.detail.rows),i)};return r`
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
    `}},Ne={args:{columns:n.Columns,data:n.Data,responsive:!0},parameters:{docs:{description:{story:`
When the \`responsive\` boolean is set to \`true\`, the table transforms its layout for smaller screens:

- **Mobile Layout**: Rows are restructured into a card-like format
- **Column Presentation**: 
  - Column names are displayed on the left side
  - Corresponding cell values are shown on the right side
- **Header Behavior**: On larger screens table header becomes sticky, ensuring column labels remain visible during scrolling.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
        `}}},render:t=>{const e=m(),a=async u=>{if(await new Promise(l=>setTimeout(l,500)),t.simulatedState==="error")throw new Error("Simulated error state");return t.simulatedState==="empty"?{rows:[],total:0}:t.simulatedState==="no-results"?{rows:[],total:0}:t.data(u)},s=u=>{const l=e.value;l&&d(n.SlotContent(u.detail.rows),l)},o=()=>{t.simulatedState="normal",e.value&&(e.value.dataLoadKey=`retry-${Date.now()}`)},i=()=>{var u;if(t.simulatedState="normal",e.value){e.value.dataLoadKey=`clear-${Date.now()}`;const l=(u=e.value.shadowRoot)==null?void 0:u.querySelector("gds-input");l&&(l.value="")}};return setTimeout(()=>{var u;if(t.simulatedState==="no-results"&&e.value){const l=(u=e.value.shadowRoot)==null?void 0:u.querySelector("gds-input");l&&(l.value="test search",l.dispatchEvent(new Event("input",{bubbles:!0})))}},100),r`
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
The table uses **slot composition** to render rich cell content. Instead of built-in cell types, you control what renders in each cell through standard web component slots.

**How it works:**

1. Wrap cell values with \`Slot(value, ['slotId'])\` during row normalization
2. Listen for the \`gds-table-data-loaded\` event
3. Render elements with \`slot="columnKey:rowKey:slotId"\` into the table's light DOM

The \`value\` parameter is used for sorting and search. The \`slots\` array defines the cell layout order — use \`'value'\` to render the plain text inline alongside slotted components.

\`\`\`
Slot(row.email, ['value', 'copy-button'])
→ renders text + <slot name="email:rowKey:copy-button">
\`\`\`

> See the **Developer Guide** for full details on slot naming, framework integration, and migration from the old cell types.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
        `}}},render:t=>{const e=m(),a={currentPage:1,currentRows:10,sortColumn:"",sortDirection:"asc"},s=l=>{const g=e.value;g&&d(n.SlotContent(l.detail.rows),g)},o=l=>{console.log("🔔 Page change event:",l.detail),a.currentPage=l.detail.page;const g=document.querySelector("#page-status");g&&(g.textContent=`Page: ${a.currentPage}`)},i=l=>{console.log("🔔 Rows change event:",l.detail),a.currentRows=l.detail.rows;const g=document.querySelector("#rows-status");g&&(g.textContent=`Rows: ${a.currentRows}`)},u=l=>{console.log("🔔 Sort change event:",l.detail),a.sortColumn=l.detail.sortColumn,a.sortDirection=l.detail.sortDirection;const g=document.querySelector("#sort-status");g&&(g.textContent=`${a.sortColumn} (${a.sortDirection})`)};return r`
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
          @gds-page-change=${l=>o(l)}
          @gds-rows-change=${l=>i(l)}
          @gds-sort-change=${l=>u(l)}
        >
        </gds-table>
      </gds-flex>
    `}},Qe={args:{columns:n.Columns,data:n.Data,headline:"User Management",summary:"Overview of all users in the system",selectable:!0,searchable:!0,settings:!0,density:"comfortable"},parameters:{docs:{description:{story:`
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.

Slot content is generated from \`Users.SlotContent(rows)\` which receives the current page's rows from the \`gds-table-data-loaded\` event and creates per-row elements (avatars, copy icons, download icons).

Only the current page's slot content is rendered — when pages change, previous slot elements are replaced with new ones for the visible rows.
        `}}},render:t=>{const e=m(),a=s=>{const o=e.value;o&&d(n.SlotContent(s.detail.rows),o)};return r`
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
    `}},Ye=["Overview","Selection","Filtering","Caching","Sorting","Cell","Formatting","Actions","Headline","Plain","Striped","Density","Variant","Responsive","Slots","StateSlots","DynamicContent","Events","SlotComposition"];export{Ue as Actions,Ee as Caching,Fe as Cell,Ve as Density,Ge as DynamicContent,He as Events,Pe as Filtering,Me as Formatting,Oe as Headline,Te as Overview,Ie as Plain,Ne as Responsive,ze as Selection,Qe as SlotComposition,Be as Slots,je as Sorting,_e as StateSlots,Ke as Striped,We as Variant,Ye as __namedExportsOrder,Ae as default};
