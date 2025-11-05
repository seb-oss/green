import{n as h,r as v}from"./Reflect-DJ7r0WLU.js";import{e as x}from"./class-map-CXsQwv0r.js";import{n as g}from"./when-BR7zwNJC.js";import{G as z,h as l,g as _}from"./gds-element-DTROifYq.js";import{t as j}from"./tokens.style-CA5ADGwW.js";import{G as L}from"./button.component-jWIOpC9g.js";import{G as be}from"./card.component-DgPbllnK.js";import{G as M}from"./dropdown.component-D7FNft71.js";import{I as ue}from"./cross-small.component-BS14rjKa.js";import{I as ye}from"./magnifying-glass.component-U0Z7YZT0.js";import{I as ve,a as fe,b as me,c as xe,d as Se,e as we,f as ke}from"./sort.component-DkCP_pJk.js";import{G as $e}from"./input-t17hjOpz.js";import{i as P}from"./lit-element-Bx14lxc-.js";import{a as Ce,G as ze}from"./context-menu-CDIXMzW3.js";import{I as _e}from"./chevron-bottom.component-DgyIWO1Z.js";import{G as B}from"./text-BmaBdEcP.js";import{a as Pe}from"./transitional-styles-CbHKJeDE.js";import{c as Re}from"./rbcb-toggle.template-DqXF-ZkM.js";import{I as De}from"./checkmark.component-CddocQY8.js";import{I as Ie}from"./minus-small.component-DOCzMU52.js";var Ge=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,S=(e,t,s,d)=>{for(var n=d>1?void 0:d?Ee(t,s):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(n=(d?p(t,s,n):p(n))||n);return d&&n&&Ge(t,s,n),n};let u=class extends z{constructor(){super(...arguments),this.page=1,this.pageSize=10,this.total=0,this.pageSizes=[5,10,25,50]}get pageCount(){return Math.ceil(this.total/this.pageSize)}getVisiblePages(e){if(e<=7)return Array.from({length:e},(d,n)=>n+1);const t=e;let s=[];return this.page<=4?(s=[2,3,4,5],[1,...s,"...",t]):this.page>=e-3?(s=[e-4,e-3,e-2,e-1],[1,"...",...s,t]):(s=[this.page-1,this.page,this.page+1],[1,"...",...s,"...",t])}render(){const e=this.pageCount,t=this.getVisiblePages(e);return l`
      <div class="pagination">
        <gds-button
          size="small"
          rank="tertiary"
          ?disabled=${this.page===1}
          @click=${()=>this.handlePageChange(1)}
        >
          <gds-icon-chevron-double-left size="l">
          </gds-icon-chevron-double-left>
        </gds-button>

        <gds-button
          size="small"
          rank="tertiary"
          ?disabled=${this.page===1}
          @click=${()=>this.handlePageChange(this.page-1)}
        >
          <gds-icon-chevron-left-small size="l"> </gds-icon-chevron-left-small>
        </gds-button>

        ${t.map(s=>l`
            ${s==="..."?l`<gds-button size="small" rank="tertiary" width="40px" inert
                  >...</gds-button
                >`:l`
                  <gds-button
                    size="small"
                    rank="${this.page===s?"primary":"tertiary"}"
                    @click=${()=>this.handlePageChange(s)}
                  >
                    ${s}
                  </gds-button>
                `}
          `)}

        <gds-button
          rank="tertiary"
          size="small"
          ?disabled=${this.page===e}
          @click=${()=>this.handlePageChange(this.page+1)}
        >
          <gds-icon-chevron-right-small size="l">
          </gds-icon-chevron-right-small>
        </gds-button>

        <gds-button
          rank="tertiary"
          size="small"
          ?disabled=${this.page===e}
          @click=${()=>this.handlePageChange(e)}
        >
          <gds-icon-chevron-double-right size="l">
          </gds-icon-chevron-double-right>
        </gds-button>
      </div>

      <div class="page-size">
        <gds-text font="detail-book-s">Items per page</gds-text>
        <gds-context-menu @gds-menu-item-click=${this.handlePageSizeMenuClick}>
          <gds-button slot="trigger" size="small" rank="secondary">
            ${this.pageSize}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.pageSizes.map(s=>l`
              <gds-menu-item
                data-value=${s}
                class=${x({selected:this.pageSize===s})}
              >
                ${s}
              </gds-menu-item>
            `)}
        </gds-context-menu>
      </div>
    `}handlePageChange(e){this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e},bubbles:!0}))}handlePageSizeMenuClick(e){const t=e.target,s=parseInt(t.dataset.value||"10");s!==this.pageSize&&this.dispatchEvent(new CustomEvent("page-size-change",{detail:{pageSize:s},bubbles:!0}))}};u.styles=[P`
      :host {
        display: flex;
        align-items: center;
        gap: 40px;
      }

      .pagination {
        display: flex;
        gap: 4px;
      }

      .page-size {
        gap: 10px;
        display: flex;
        align-items: center;
        min-width: max-content;
      }
    `];S([h({type:Number})],u.prototype,"page",2);S([h({type:Number})],u.prototype,"pageSize",2);S([h({type:Number})],u.prototype,"total",2);S([h({type:Array})],u.prototype,"pageSizes",2);u=S([_("gds-pagination",{dependsOn:[L,B,M,Ce,ze,_e,ve,fe,me,xe]})],u);var Ae=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,w=(e,t,s,d)=>{for(var n=d>1?void 0:d?Oe(t,s):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(n=(d?p(t,s,n):p(n))||n);return d&&n&&Ae(t,s,n),n};let y=class extends z{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.ariaLabel=""}render(){return l`
      <div
        class="table-row-selector"
        @click=${this.handleClick}
        role="checkbox"
        .aria-checked=${this.indeterminate?"mixed":this.checked.toString()}
        aria-label=${this.ariaLabel}
        tabindex="0"
        @keydown=${this.handleKeydown}
      >
        ${Re({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:!1})}
      </div>
    `}handleClick(e){e.stopPropagation(),!this.disabled&&this.dispatchEvent(new CustomEvent("selector-change",{detail:{checked:!this.checked},bubbles:!0}))}handleKeydown(e){(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this.handleClick(e))}};y.styles=[j,Pe,P`
      :host {
        display: contents;
      }

      .table-row-selector {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        outline: none;
        margin: auto;
      }
    `];w([h({type:Boolean})],y.prototype,"checked",2);w([h({type:Boolean})],y.prototype,"indeterminate",2);w([h({type:Boolean})],y.prototype,"disabled",2);w([h()],y.prototype,"ariaLabel",2);y=w([_("gds-table-row-selector",{dependsOn:[De,Ie]})],y);const Te=P`
  /* Host & Container */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
    color: var(--gds-sys-color-neutral-01);
    text-align: left;
    contain: paint;
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gds-sys-space-xl);
  }

  /* Density Modes */
  /* Default (comfortable) density */
  .gds-table {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
  }

  /* Compact density */
  .gds-table.compact {
    --table-cell-padding-y: var(--gds-sys-space-xs);
    --table-cell-padding-x: var(--gds-sys-space-s);
    --table-header-padding-y: var(--gds-sys-space-xs);
    --table-header-padding-x: var(--gds-sys-space-s);
    --table-row-min-height: var(--gds-sys-space-xl);
    --table-font-size: var(--gds-sys-text-detail-book-xs);
    --table-gap: var(--gds-sys-space-m);
  }

  /* Comfortable density (explicit) */
  .gds-table.comfortable {
    --table-cell-padding-y: var(--gds-sys-space-s);
    --table-cell-padding-x: var(--gds-sys-space-m);
    --table-header-padding-y: var(--gds-sys-space-s);
    --table-header-padding-x: var(--gds-sys-space-m);
    --table-row-min-height: var(--gds-sys-space-4xl);
    --table-font-size: var(--gds-sys-text-detail-book-s);
    --table-gap: var(--gds-sys-space-xl);
  }

  /* Spacious density */
  .gds-table.spacious {
    --table-cell-padding-y: var(--gds-sys-space-m);
    --table-cell-padding-x: var(--gds-sys-space-l);
    --table-header-padding-y: var(--gds-sys-space-m);
    --table-header-padding-x: var(--gds-sys-space-l);
    --table-row-min-height: var(--gds-sys-space-5xl);
    --table-font-size: var(--gds-sys-text-detail-book-m);
    --table-gap: 32px;
  }

  /* Apply density variables */
  .gds-table {
    gap: var(--table-gap);
    font: var(--table-font-size);
  }

  /* Container that enables horizontal scroll */
  .data {
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
  }

  .data:not(.responsive) {
    border-radius: var(--gds-sys-space-m);
    border: var(--gds-sys-space-5xs) solid var(--gds-sys-color-border-subtle-01);
    padding: var(--gds-sys-space-3xs);
  }

  /* Table Structure */
  table {
    width: max-content;
    min-width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
  }

  /* Base cell styling (shared by th and td) */
  th,
  td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
    font-weight: normal;
  }

  /* Table Header */
  thead {
    position: relative;
    font-weight: normal;
  }

  /* Header background overlay */
  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gds-sys-color-l2-neutral-01);
    border-radius: var(--gds-sys-space-s);
    z-index: 0;
  }

  /* Header cells */
  thead th {
    padding: var(--table-header-padding-y) var(--table-header-padding-x);
    border: none;
    font-weight: 500;
    position: relative;
    z-index: 1;
    background: transparent;
  }

  /* Header cell hover effect background */
  thead th::before {
    content: '';
    display: none;
    position: absolute;
    background: var(--gds-sys-color-l3-neutral-02);
    border-radius: var(--gds-sys-space-xs);
    transition: all var(--gds-sys-motion-duration-fast);
    inset: var(--gds-sys-space-2xs) var(--gds-sys-space-3xs);
    z-index: -1;

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
      scale: 0.8;
    }
  }

  thead tr th {
    position: relative;
  }

  /* Sortable Columns */
  thead th.sortable {
    cursor: pointer;
    user-select: none;
  }

  @media (pointer: fine) {
    thead th.sortable:hover::before {
      display: flex;
      scale: 1;
    }
  }

  thead th.sortable:active::before {
    translate: 0 1px;
    background: var(--gds-sys-color-l3-neutral-03);
  }

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--gds-sys-space-l);
  }

  .column-label {
    font-weight: normal;
  }

  .sort-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 420ms ease;
    opacity: 0;
    z-index: 1;
  }

  @media (pointer: fine) {
    thead th.sortable:hover:not(.sorted) .sort-icon {
      opacity: 0.8;
    }
  }

  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* Table Body */

  tbody tr {
    opacity: 1;
    transition:
      opacity var(--gds-sys-motion-duration-fastest)
        var(--gds-sys-motion-easing-ease-in-out),
      border-color var(--gds-sys-motion-duration-fastest)
        var(--gds-sys-motion-easing-linear);
    min-height: var(--table-row-min-height);
    border-top: var(--gds-sys-space-5xs) solid
      var(--gds-sys-color-border-subtle-01);
  }

  .responsive tbody tr:last-child {
    border-bottom: var(--gds-sys-space-5xs) solid
      var(--gds-sys-color-border-subtle-01);
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* Row Selection */
  tr {
    position: relative;
  }

  .checkbox-cell {
    min-width: var(--gds-sys-space-l);
    width: var(--gds-sys-space-l);
    max-width: var(--gds-sys-space-l);
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  tr:first-child {
    border-top-width: var(--gds-sys-space-4xs);
  }

  tr.selected,
  tr:first-child {
    border-color: transparent;
  }

  tr.selected + tr {
    border-color: transparent;
  }

  tr.selected:last-child {
    border-bottom-color: transparent;
  }

  /* Selected row highlight */
  tr.selected::after {
    content: '';
    display: flex;
    position: absolute;
    inset: var(--gds-sys-space-5xs) 0;
    border-radius: var(--gds-sys-space-s);
    background-color: var(--gds-sys-color-l3-notice-02);
    z-index: -1;
    pointer-events: none;
    transition: all var(--gds-sys-motion-duration-fastest);

    @starting-style {
      opacity: 0;
      translate: var(--gds-sys-space-3xs) 0;
    }
  }

  @media (pointer: fine) {
    tr.selected:hover::after {
      background-color: var(--gds-sys-color-l3-notice-03);
    }
  }

  /* Header & Footer Layout */
  .header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--table-gap) * 0.8);
  }

  .header-meta {
    display: flex;
    flex-direction: column;
  }

  .header-slots {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  /* Shared layout for header and footer sections */
  .header .lead,
  .header .trail,
  .footer .lead,
  .footer .trail {
    display: flex;
    align-items: center;
    gap: calc(var(--table-gap) * 0.8);
  }

  /* Footer specific styling */
  .footer .lead {
    padding-left: var(--gds-sys-space-s);
    font: var(--gds-sys-text-detail-book-xs);
    color: var(--gds-sys-color-content-neutral-02);
  }

  .selection-info {
    display: flex;
    align-items: center;
    gap: var(--gds-sys-space-s);
  }

  /* Cell Content & Alignment */
  .cell-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Text alignment utilities */
  .text-right {
    text-align: right;
  }

  .text-right .column-header,
  th.actions {
    flex-direction: row-reverse;
  }

  .text-right .cell-content,
  td.actions-cell .cell-content {
    justify-content: flex-end;
  }

  .space-between .cell-content {
    justify-content: space-between;
  }

  /*
  * Responsive Design  
  */

  .checkbox-label,
  .actions-label {
    display: none;
  }

  .responsive.data {
    display: contents;
  }

  .responsive thead {
    position: sticky;
    top: var(--gds-sys-space-l);
    z-index: 2;
  }

  @media (max-width: 760px) {
    .responsive thead {
      display: none;
    }

    .responsive tbody {
      display: flex;
      flex-direction: column;
      gap: var(--table-gap);
    }

    .responsive tr {
      display: block;
      padding: var(--table-cell-padding-x);
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-subtle-01);
      border-radius: var(--gds-sys-space-s);
      margin: 0;
    }

    .responsive tr.selected {
      border-color: transparent;
    }

    .responsive td {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--gds-sys-space-xs) 0;
    }

    .responsive td::before {
      content: attr(data-label);
      color: var(--gds-sys-color-content-neutral-02);
      font-weight: 500;
      margin-right: var(--gds-sys-space-s);
    }

    .responsive .checkbox-label {
      display: none;
    }

    .responsive .actions-label {
      display: none;
    }

    .responsive .cell-content {
      justify-content: flex-end;
    }
  }

  /* Skeleton Loading State */
  .skeleton {
    display: inline-block;
    background: linear-gradient(
      90deg,
      var(--gds-sys-color-l3-neutral-01) 25%,
      var(--gds-sys-color-l2-neutral-01) 50%,
      var(--gds-sys-color-l3-neutral-01) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
    border-radius: var(--gds-sys-space-max);
    opacity: 0.1;
  }

  @keyframes skeleton-shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  /* Skeleton elements */
  .skeleton-text {
    height: 14px;
    width: 80%;
    min-width: 60px;
  }

  .skeleton-checkbox {
    height: 18px;
    width: 18px;
    border-radius: var(--gds-sys-space-3xs);
  }

  .skeleton-action {
    height: 24px;
    width: 24px;
    border-radius: var(--gds-sys-space-max);
  }

  /* Skeleton row styling */
  .skeleton-row {
    opacity: 1;
    pointer-events: none;
  }

  .skeleton-row td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* Vary skeleton text widths for more natural look */
  .skeleton-row:nth-child(odd) .skeleton-text {
    width: 70%;
  }

  .skeleton-row:nth-child(3n) .skeleton-text {
    width: 90%;
  }

  .skeleton-row:nth-child(4n) .skeleton-text {
    width: 60%;
  }
`;var je=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,H=e=>{throw TypeError(e)},c=(e,t,s,d)=>{for(var n=d>1?void 0:d?Le(t,s):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(n=(d?p(t,s,n):p(n))||n);return d&&n&&je(t,s,n),n},Q=(e,t,s)=>t.has(e)||H("Cannot "+s),b=(e,t,s)=>(Q(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),i=(e,t,s)=>(Q(e,t,"access private method"),s),k,R,a,D,$,U,q,V,f,K,N,W,F,J,X,Y,Z,ee,te,se,ae,ie,le,ne,oe,re,de,ce,he,pe,I,G,m;let r=class extends z{constructor(){super(...arguments),C(this,a),C(this,k,{}),C(this,R,5*60*1e3),this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.tableState={page:1,pageSize:10,searchQuery:"",visibleColumns:new Set},this.initialLoad=!0,this.loading=!1,this.data=[],this.totalRows=0,this.selectedRows=new Set,this.error=null,this.slots={}}async connectedCallback(){super.connectedCallback(),this.tableState.visibleColumns=new Set(this.columns.map(e=>e.key)),await i(this,a,f).call(this)}render(){return l`
      <div class="gds-table ${this.density}">
        ${i(this,a,W).call(this)}
        ${g(this.error,()=>i(this,a,ae).call(this),()=>i(this,a,se).call(this))}
        ${i(this,a,ie).call(this)}
      </div>
    `}clearSelection(){i(this,a,G).call(this),i(this,a,m).call(this)}selectAll(){i(this,a,I).call(this),i(this,a,m).call(this)}setSelection(e){const t=e.filter(s=>s>=0&&s<this.data.length);this.selectedRows=new Set(t),i(this,a,m).call(this),this.requestUpdate()}getSelection(){const e=Array.from(this.selectedRows);return{indices:e,data:e.map(t=>this.data[t])}}setCellSlot(e,t,s,d,n){const o=`${e}-${t}`;this.slots={...this.slots,[o]:{lead:s,trail:d,value:n}},this.requestUpdate()}clearCellSlots(e,t){if(e!==void 0&&t!==void 0){const s=`${e}-${t}`;delete this.slots[s]}else this.slots={};this.requestUpdate()}};k=new WeakMap;R=new WeakMap;a=new WeakSet;D=function(){return this.selectedRows.size>0};$=function(){return this.data.length>0&&this.selectedRows.size===this.data.length};U=function(){return b(this,a,D)&&!b(this,a,$)};q=function(){return JSON.stringify({page:this.tableState.page,pageSize:this.tableState.pageSize,sortColumn:this.tableState.sortColumn,sortDirection:this.tableState.sortDirection,searchQuery:this.tableState.searchQuery})};V=function(e){return Date.now()-e.timestamp<b(this,R)};f=async function(){if(!this.dataProvider)return;const e=i(this,a,q).call(this),t=b(this,k)[e];if(t&&i(this,a,V).call(this,t)){this.data=t.data,this.totalRows=t.total,this.initialLoad=!1;return}this.loading=!0,this.error=null;try{const s=await this.dataProvider({page:this.tableState.page,pageSize:this.tableState.pageSize,sortColumn:this.tableState.sortColumn,sortDirection:this.tableState.sortDirection,searchQuery:this.tableState.searchQuery});b(this,k)[e]={data:s.data,total:s.total,timestamp:Date.now()},this.data=s.data,this.totalRows=s.total,this.selectedRows.clear(),this.initialLoad=!1,this.dispatchEvent(new CustomEvent("gds-table-data-loaded",{detail:s,bubbles:!0}))}catch(s){this.error=s,this.dispatchEvent(new CustomEvent("gds-table-data-error",{detail:s,bubbles:!0}))}finally{this.loading=!1}};K=function(e,t,s){var A,O,T;const d=`${s.key}-${t}`,n=this.slots[d],o=s.slots,p=(n==null?void 0:n.lead)??((A=o==null?void 0:o.lead)==null?void 0:A.call(o,e,t)),ge=(n==null?void 0:n.value)??((O=o==null?void 0:o.value)==null?void 0:O.call(o,e,t))??e[s.key],E=(n==null?void 0:n.trail)??((T=o==null?void 0:o.trail)==null?void 0:T.call(o,e,t));return l`
      <div class="cell-content">
        ${p&&l`<span class="cell-lead">${p}</span>`}
        <span class="cell-value">${ge}</span>
        ${E&&l`<span class="cell-trail">${E}</span>`}
      </div>
    `};N=function(e){const t=this.tableState.sortColumn===e.key,s=this.tableState.sortDirection;return t?s==="asc"?l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:l`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:l`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};W=function(){return this.plain?null:l`
      <div class="header">
        ${g(this.title||this.subtitle,()=>l`
            <div class="header-meta">
              ${g(this.title,()=>l`
                  <gds-text tag="h2" font="heading-m">${this.title}</gds-text>
                `)}
              ${g(this.subtitle,()=>l`
                  <gds-text tag="p" font="detail-book-s"
                    >${this.subtitle}</gds-text
                  >
                `)}
            </div>
          `)}
        <div class="header-slots">
          <div class="lead">
            <gds-input
              type="text"
              size="small"
              plain
              clearable
              placeholder="Search..."
              .value=${this.tableState.searchQuery}
              @input=${i(this,a,le)}
              @gds-input-cleared=${i(this,a,ne)}
              width="240px"
            >
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
            </gds-input>
            <slot name="header-lead"></slot>
          </div>
          <div class="trail">
            <slot name="header-trail"></slot>
            <gds-dropdown
              multiple
              plain
              size="small"
              searchable
              .value=${Array.from(this.tableState.visibleColumns)}
              @change=${i(this,a,ce)}
            >
              <span slot="trigger">Columns</span>
              ${this.columns.map(e=>l`
                  <gds-option
                    value=${e.key}
                    ?selected=${this.tableState.visibleColumns.has(e.key)}
                  >
                    ${e.label}
                  </gds-option>
                `)}
            </gds-dropdown>
          </div>
        </div>
      </div>
    `};F=function(e){const t=this.tableState.sortColumn===e.key,s=this.tableState.sortDirection;return l`
      <th
        class=${x({sortable:!!e.sortable,sorted:t,"sort-asc":t&&s==="asc","sort-desc":t&&s==="desc","text-right":e.align==="right","space-between":e.justify===!0})}
        @click=${e.sortable?()=>i(this,a,oe).call(this,e.key):null}
      >
        <div class="column-header">
          <span class="column-label">${e.label}</span>
          ${g(e.sortable,()=>l`
              <span class="sort-icon">${i(this,a,N).call(this,e)}</span>
            `)}
        </div>
      </th>
    `};J=function(){return l`
      <thead>
        <tr>
          ${g(this.selectable,()=>l`
              <th class="checkbox-cell">
                <gds-table-row-selector
                  .checked=${b(this,a,$)}
                  .indeterminate=${b(this,a,U)}
                  aria-label="Select all rows"
                  @selector-change=${i(this,a,he)}
                ></gds-table-row-selector>
              </th>
            `)}
          ${this.columns.filter(e=>this.tableState.visibleColumns.has(e.key)).map(e=>i(this,a,F).call(this,e))}
          ${g(this.actions,()=>l`<th class="column-header actions">
                <div class="column-label">Actions</div>
              </th>`)}
        </tr>
      </thead>
    `};X=function(e,t,s){return l`
      <td
        data-label=${s.label}
        class=${x({"text-right":s.align==="right","space-between":s.justify===!0})}
      >
        ${i(this,a,K).call(this,e,t,s)}
      </td>
    `};Y=function(e,t){return l`
      <tr
        class=${x({selected:this.selectedRows.has(t),loading:this.loading})}
      >
        ${g(this.selectable,()=>l`
            <td class="checkbox-cell" data-label="Select">
              <div class="cell-content">
                <gds-table-row-selector
                  .checked=${this.selectedRows.has(t)}
                  aria-label="Select row ${t+1}"
                  @selector-change=${s=>i(this,a,pe).call(this,t,s)}
                ></gds-table-row-selector>
              </div>
            </td>
          `)}
        ${this.columns.filter(s=>this.tableState.visibleColumns.has(s.key)).map(s=>i(this,a,X).call(this,e,t,s))}
        ${g(this.actions,()=>l`
            <td class="actions-cell" data-label="Actions">
              <div class="cell-content">${this.actions(e,t)}</div>
            </td>
          `)}
      </tr>
    `};Z=function(){return l`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `};ee=function(e){return l`
      <tr class="skeleton-row">
        ${g(this.selectable,()=>l`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `)}
        ${this.columns.filter(t=>this.tableState.visibleColumns.has(t.key)).map(()=>l` <td>${i(this,a,Z).call(this)}</td> `)}
        ${g(this.actions,()=>l`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `)}
      </tr>
    `};te=function(){if(this.loading&&this.initialLoad){const e=Array.from({length:this.tableState.pageSize},(t,s)=>i(this,a,ee).call(this,s));return l`<tbody>
        ${e}
      </tbody>`}return l`
      <tbody>
        ${this.data.map((e,t)=>i(this,a,Y).call(this,e,t))}
      </tbody>
    `};se=function(){const e=x({responsive:this.responsive,data:!0});return l`
      <div class=${e}>
        <table>
          ${i(this,a,J).call(this)} ${i(this,a,te).call(this)}
        </table>
      </div>
    `};ae=function(){return l`
      <gds-card
        variant="negative"
        justify-content="center"
        align-items="flex-start"
      >
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button @click=${()=>i(this,a,f).call(this)} variant="negative">
          Retry
        </gds-button>
      </gds-card>
    `};ie=function(){return this.plain?null:l`
      <div class="footer">
        <div class="lead">
          <slot name="footer-lead">
            ${g(this.selectable&&b(this,a,D),()=>l`
                <div class="selection-info">
                  <span>
                    ${this.selectedRows.size} of ${this.data.length} selected
                  </span>
                  <gds-button
                    size="xs"
                    rank="secondary"
                    @click=${this.clearSelection}
                  >
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </div>
              `,()=>l`
                <span>
                  Showing
                  ${(this.tableState.page-1)*this.tableState.pageSize+1}
                  to
                  ${Math.min(this.tableState.page*this.tableState.pageSize,this.totalRows)}
                  of ${this.totalRows} entries
                </span>
              `)}
          </slot>
        </div>
        <div class="trail">
          <slot name="footer-trail"></slot>
          <gds-pagination
            .page=${this.tableState.page}
            .pageSize=${this.tableState.pageSize}
            .total=${this.totalRows}
            .pageSizes=${[5,10,20,50,100]}
            @page-change=${i(this,a,re)}
            @page-size-change=${i(this,a,de)}
          ></gds-pagination>
        </div>
      </div>
    `};le=async function(e){const t=e.target;this.tableState={...this.tableState,searchQuery:t.value,page:1},await i(this,a,f).call(this)};ne=async function(){this.tableState={...this.tableState,searchQuery:"",page:1},await i(this,a,f).call(this)};oe=async function(e){this.tableState={...this.tableState,sortColumn:e,sortDirection:this.tableState.sortColumn===e&&this.tableState.sortDirection==="asc"?"desc":"asc",page:1},await i(this,a,f).call(this)};re=async function(e){this.tableState={...this.tableState,page:e.detail.page},await i(this,a,f).call(this)};de=async function(e){this.tableState={...this.tableState,pageSize:e.detail.pageSize,page:1},await i(this,a,f).call(this)};ce=function(e){const t=e.detail.value;this.tableState={...this.tableState,visibleColumns:new Set(t)},this.requestUpdate()};he=function(e){b(this,a,$)?i(this,a,G).call(this):i(this,a,I).call(this),i(this,a,m).call(this)};pe=function(e,t){t.detail.checked?this.selectedRows.add(e):this.selectedRows.delete(e),i(this,a,m).call(this),this.requestUpdate()};I=function(){this.selectedRows=new Set(this.data.map((e,t)=>t)),this.requestUpdate()};G=function(){this.selectedRows.clear(),this.requestUpdate()};m=function(){this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedIndices:Array.from(this.selectedRows),selectedData:Array.from(this.selectedRows).map(e=>this.data[e]),count:this.selectedRows.size},bubbles:!0}))};r.styles=[j,Te];c([h({type:String})],r.prototype,"subtitle",2);c([h({type:Array})],r.prototype,"columns",2);c([h()],r.prototype,"dataProvider",2);c([h({reflect:!1})],r.prototype,"density",2);c([h({type:Boolean,reflect:!1})],r.prototype,"selectable",2);c([h({type:Boolean,reflect:!1})],r.prototype,"responsive",2);c([h({type:Boolean})],r.prototype,"plain",2);c([h()],r.prototype,"actions",2);c([v()],r.prototype,"tableState",2);c([v()],r.prototype,"initialLoad",2);c([v()],r.prototype,"loading",2);c([v()],r.prototype,"data",2);c([v()],r.prototype,"totalRows",2);c([v()],r.prototype,"selectedRows",2);c([v()],r.prototype,"error",2);c([v()],r.prototype,"slots",2);r=c([_("gds-table",{dependsOn:[y,L,$e,be,B,M,u,ye,Se,we,ke,ue]})],r);r.define();export{u as G};
