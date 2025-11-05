import{n as d,r as y}from"./Reflect-DJ7r0WLU.js";import{e as S}from"./class-map-CXsQwv0r.js";import{n as g}from"./when-BR7zwNJC.js";import{G as _,h as n,g as z}from"./gds-element-DTROifYq.js";import{t as B}from"./tokens.style-CA5ADGwW.js";import{G as j}from"./button.component-jWIOpC9g.js";import{G as pt}from"./card.component-DgPbllnK.js";import{G as M}from"./dropdown.component-D7FNft71.js";import{I as gt}from"./cross-small.component-BS14rjKa.js";import{I as ut}from"./magnifying-glass.component-U0Z7YZT0.js";import{I as bt,a as ft,b as mt,c as yt,d as vt,e as St,f as wt}from"./sort.component-DkCP_pJk.js";import{G as $t}from"./input-t17hjOpz.js";import{i as P}from"./lit-element-Bx14lxc-.js";import{a as xt,G as Ct}from"./context-menu-CDIXMzW3.js";import{I as kt}from"./chevron-bottom.component-DgyIWO1Z.js";import{G as H}from"./text-BmaBdEcP.js";import{a as _t}from"./transitional-styles-CbHKJeDE.js";import{c as zt}from"./rbcb-toggle.template-DqXF-ZkM.js";import{I as Pt}from"./checkmark.component-CddocQY8.js";import{I as Rt}from"./minus-small.component-DOCzMU52.js";var Dt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,w=(t,e,s,r)=>{for(var i=r>1?void 0:r?It(e,s):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(i=(r?p(e,s,i):p(i))||i);return r&&i&&Dt(e,s,i),i};let b=class extends _{constructor(){super(...arguments),this.page=1,this.pageSize=10,this.total=0,this.pageSizes=[5,10,25,50]}get pageCount(){return Math.ceil(this.total/this.pageSize)}getVisiblePages(t){if(t<=7)return Array.from({length:t},(r,i)=>i+1);const e=t;let s=[];return this.page<=4?(s=[2,3,4,5],[1,...s,"...",e]):this.page>=t-3?(s=[t-4,t-3,t-2,t-1],[1,"...",...s,e]):(s=[this.page-1,this.page,this.page+1],[1,"...",...s,"...",e])}render(){const t=this.pageCount,e=this.getVisiblePages(t);return n`
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

        ${e.map(s=>n`
            ${s==="..."?n`<gds-button size="small" rank="tertiary" width="40px" inert
                  >...</gds-button
                >`:n`
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
          ?disabled=${this.page===t}
          @click=${()=>this.handlePageChange(this.page+1)}
        >
          <gds-icon-chevron-right-small size="l">
          </gds-icon-chevron-right-small>
        </gds-button>

        <gds-button
          rank="tertiary"
          size="small"
          ?disabled=${this.page===t}
          @click=${()=>this.handlePageChange(t)}
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
          ${this.pageSizes.map(s=>n`
              <gds-menu-item
                data-value=${s}
                class=${S({selected:this.pageSize===s})}
              >
                ${s}
              </gds-menu-item>
            `)}
        </gds-context-menu>
      </div>
    `}handlePageChange(t){this.dispatchEvent(new CustomEvent("page-change",{detail:{page:t},bubbles:!0}))}handlePageSizeMenuClick(t){const e=t.target,s=parseInt(e.dataset.value||"10");s!==this.pageSize&&this.dispatchEvent(new CustomEvent("page-size-change",{detail:{pageSize:s},bubbles:!0}))}};b.styles=[P`
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
    `];w([d({type:Number})],b.prototype,"page",2);w([d({type:Number})],b.prototype,"pageSize",2);w([d({type:Number})],b.prototype,"total",2);w([d({type:Array})],b.prototype,"pageSizes",2);b=w([z("gds-pagination",{dependsOn:[j,H,M,xt,Ct,kt,bt,ft,mt,yt]})],b);var Gt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,$=(t,e,s,r)=>{for(var i=r>1?void 0:r?Et(e,s):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(i=(r?p(e,s,i):p(i))||i);return r&&i&&Gt(e,s,i),i};let f=class extends _{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.ariaLabel=""}render(){return n`
      <div
        class="table-row-selector"
        @click=${this.handleClick}
        role="checkbox"
        .aria-checked=${this.indeterminate?"mixed":this.checked.toString()}
        aria-label=${this.ariaLabel}
        tabindex="0"
        @keydown=${this.handleKeydown}
      >
        ${zt({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:!1})}
      </div>
    `}handleClick(t){t.stopPropagation(),!this.disabled&&this.dispatchEvent(new CustomEvent("selector-change",{detail:{checked:!this.checked},bubbles:!0}))}handleKeydown(t){(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this.handleClick(t))}};f.styles=[B,_t,P`
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
    `];$([d({type:Boolean})],f.prototype,"checked",2);$([d({type:Boolean})],f.prototype,"indeterminate",2);$([d({type:Boolean})],f.prototype,"disabled",2);$([d()],f.prototype,"ariaLabel",2);f=$([z("gds-table-row-selector",{dependsOn:[Pt,Rt]})],f);const Tt=P`
  /* ============================================
   * Host & Container
   * Base component setup and main container
   * ============================================ */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
  }

  /* ============================================
   * Table Structure
   * Core table element and layout configuration
   * ============================================ */
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
    table-layout: auto;
    overflow: auto;
  }

  /* Base cell styling (shared by th and td) */
  th,
  td {
    padding: 8px;
    font-weight: normal;
  }

  /* ============================================
   * Table Header
   * Sticky header with background and sorting
   * ============================================ */
  thead {
    position: sticky;
    font-weight: normal;
    top: 20px;
    z-index: 2;
  }

  /* Header background overlay */
  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #eee;
    border-radius: 12px;
    z-index: 0;
  }

  /* Header cells */
  thead th {
    padding: 12px 16px;
    border: none;
    font-weight: 500;
    position: relative;
    z-index: 1;
    background: transparent;
    transition: all 0.2s ease;
  }

  /* Header cell hover effect background */
  thead th::before {
    content: '';
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: all 420ms;
    inset: 6px 4px;
    z-index: -1;

    @starting-style {
      opacity: 0;
      translate: 0 -2px;
      scale: 0.8;
    }
  }

  /** 
   * Sortable Columns
   **/
  thead th.sortable {
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;
  }

  thead th.sortable:hover::before {
    display: flex;
    scale: 1;
  }

  thead th.sortable:active::before {
    background: rgba(0, 0, 0, 0.2);
  }
  /* 
  thead th.sorted::before {
    display: flex;
  } */

  /* Column header content layout */
  .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    min-height: 20px;
  }

  .column-label {
    font-weight: normal;
  }

  /* Sort icon styling */
  .sort-icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    transition: opacity 420ms ease;
    z-index: 1;
    opacity: 0;
  }

  thead th.sortable:hover:not(.sorted) .sort-icon {
    opacity: 0.8;
  }

  thead th.sorted .sort-icon {
    opacity: 1;
  }

  /* 
   * Table Body
   * Data rows and cells styling
   **/

  tbody tr {
    border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody td {
    padding-inline: 16px;
    padding-block: 12px;
  }

  /* ============================================
   * Row Selection
   * Checkbox and selected state styles
   * ============================================ */
  tr {
    position: relative;
  }

  .checkbox-cell {
    min-width: 20px;
    width: 20px;
    max-width: 20px;
    padding: 12px 16px;
  }

  tr.selected {
    border-color: transparent;
  }

  /* Selected row highlight */
  tr.selected::after {
    content: '';
    display: flex;
    position: absolute;
    inset: 1px 0;
    border-radius: 12px;
    background-color: rgba(59, 130, 246, 0.1);
    z-index: 0;
    pointer-events: none;
  }

  tr.selected:hover::before {
    background-color: rgba(59, 130, 246, 0.15);
  }

  /* ============================================
   * Header & Footer Layout
   * Top and bottom control sections
   * ============================================ */
  .header {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    gap: 20px;
  }

  /* Footer specific styling */
  .footer .lead {
    padding-left: 12px;
    font: var(--gds-sys-text-detail-book-xs);
    color: var(--gds-sys-color-content-neutral-02);
  }

  .selection-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* ============================================
   * Cell Content & Alignment
   * Cell content layout and text alignment
   * ============================================ */
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

  .text-right .sort-icon {
    margin-left: 0;
    margin-right: 8px;
  }

  .text-right .cell-content,
  td.actions-cell .cell-content {
    justify-content: flex-end;
  }

  .space-between .cell-content {
    justify-content: space-between;
  }

  /* ============================================
   * Responsive Design
   * Mobile and tablet adaptations
   * ============================================ */
  @media (max-width: 768px) {
    .responsive-table td {
      display: flex;
      justify-content: space-between;
      padding: 8px;
    }

    .responsive-table td::before {
      content: attr(data-label);
      font-weight: bold;
    }

    .sort-icon {
      margin-left: 4px;
    }
  }

  /* ============================================
   * Density modes
   * TBD
   * ============================================ */
`;var Ot=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Q=t=>{throw TypeError(t)},h=(t,e,s,r)=>{for(var i=r>1?void 0:r?At(e,s):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(i=(r?p(e,s,i):p(i))||i);return r&&i&&Ot(e,s,i),i},U=(t,e,s)=>e.has(t)||Q("Cannot "+s),u=(t,e,s)=>(U(t,e,"read from private field"),s?s.call(t):e.get(t)),k=(t,e,s)=>e.has(t)?Q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l=(t,e,s)=>(U(t,e,"access private method"),s),x,R,a,D,C,q,L,K,m,N,V,W,F,J,X,Y,Z,tt,et,st,at,it,lt,nt,ot,rt,ct,dt,I,G,v;let c=class extends _{constructor(){super(...arguments),k(this,a),k(this,x,{}),k(this,R,5*60*1e3),this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.tableState={page:1,pageSize:10,searchQuery:"",visibleColumns:new Set},this.loading=!1,this.data=[],this.totalRows=0,this.selectedRows=new Set,this.error=null,this.slots={}}async connectedCallback(){super.connectedCallback(),this.tableState.visibleColumns=new Set(this.columns.map(t=>t.key)),await l(this,a,m).call(this)}render(){return n`
      <div class="gds-table ${this.density}">
        ${l(this,a,W).call(this)}
        ${g(this.error,()=>l(this,a,et).call(this),()=>l(this,a,tt).call(this))}
        ${l(this,a,st).call(this)}
      </div>
    `}clearSelection(){l(this,a,G).call(this),l(this,a,v).call(this)}selectAll(){l(this,a,I).call(this),l(this,a,v).call(this)}setSelection(t){const e=t.filter(s=>s>=0&&s<this.data.length);this.selectedRows=new Set(e),l(this,a,v).call(this),this.requestUpdate()}getSelection(){const t=Array.from(this.selectedRows);return{indices:t,data:t.map(e=>this.data[e])}}setCellSlot(t,e,s,r,i){const o=`${t}-${e}`;this.slots={...this.slots,[o]:{lead:s,trail:r,value:i}},this.requestUpdate()}clearCellSlots(t,e){if(t!==void 0&&e!==void 0){const s=`${t}-${e}`;delete this.slots[s]}else this.slots={};this.requestUpdate()}};x=new WeakMap;R=new WeakMap;a=new WeakSet;D=function(){return this.selectedRows.size>0};C=function(){return this.data.length>0&&this.selectedRows.size===this.data.length};q=function(){return u(this,a,D)&&!u(this,a,C)};L=function(){return JSON.stringify({page:this.tableState.page,pageSize:this.tableState.pageSize,sortColumn:this.tableState.sortColumn,sortDirection:this.tableState.sortDirection,searchQuery:this.tableState.searchQuery})};K=function(t){return Date.now()-t.timestamp<u(this,R)};m=async function(){if(!this.dataProvider)return;const t=l(this,a,L).call(this),e=u(this,x)[t];if(e&&l(this,a,K).call(this,e)){this.data=e.data,this.totalRows=e.total;return}this.loading=!0,this.error=null;try{const s=await this.dataProvider({page:this.tableState.page,pageSize:this.tableState.pageSize,sortColumn:this.tableState.sortColumn,sortDirection:this.tableState.sortDirection,searchQuery:this.tableState.searchQuery});u(this,x)[t]={data:s.data,total:s.total,timestamp:Date.now()},this.data=s.data,this.totalRows=s.total,this.selectedRows.clear(),this.dispatchEvent(new CustomEvent("data-loaded",{detail:s,bubbles:!0}))}catch(s){this.error=s,this.dispatchEvent(new CustomEvent("data-error",{detail:s,bubbles:!0}))}finally{this.loading=!1}};N=function(t,e,s){var T,O,A;const r=`${s.key}-${e}`,i=this.slots[r],o=s.slots,p=(i==null?void 0:i.lead)??((T=o==null?void 0:o.lead)==null?void 0:T.call(o,t,e)),ht=(i==null?void 0:i.value)??((O=o==null?void 0:o.value)==null?void 0:O.call(o,t,e))??t[s.key],E=(i==null?void 0:i.trail)??((A=o==null?void 0:o.trail)==null?void 0:A.call(o,t,e));return n`
      <div class="cell-content">
        ${p&&n`<span class="cell-lead">${p}</span>`}
        <span class="cell-value">${ht}</span>
        ${E&&n`<span class="cell-trail">${E}</span>`}
      </div>
    `};V=function(t){const e=this.tableState.sortColumn===t.key,s=this.tableState.sortDirection;return e?s==="asc"?n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:n`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};W=function(){return this.plain?null:n`
      <div class="header">
        ${g(this.title||this.subtitle,()=>n`
            <div class="header-meta">
              ${g(this.title,()=>n`
                  <gds-text tag="h2" font="heading-m">${this.title}</gds-text>
                `)}
              ${g(this.subtitle,()=>n`
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
              @input=${l(this,a,at)}
              @gds-input-cleared=${l(this,a,it)}
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
              @change=${l(this,a,rt)}
            >
              <span slot="trigger">Columns</span>
              ${this.columns.map(t=>n`
                  <gds-option
                    value=${t.key}
                    ?selected=${this.tableState.visibleColumns.has(t.key)}
                  >
                    ${t.label}
                  </gds-option>
                `)}
            </gds-dropdown>
          </div>
        </div>
      </div>
    `};F=function(t){const e=this.tableState.sortColumn===t.key,s=this.tableState.sortDirection;return n`
      <th
        class=${S({sortable:!!t.sortable,sorted:e,"sort-asc":e&&s==="asc","sort-desc":e&&s==="desc","text-right":t.align==="right","space-between":t.justify===!0})}
        @click=${t.sortable?()=>l(this,a,lt).call(this,t.key):null}
      >
        <div class="column-header">
          <span class="column-label">${t.label}</span>
          ${g(t.sortable,()=>n`
              <span class="sort-icon">${l(this,a,V).call(this,t)}</span>
            `)}
        </div>
      </th>
    `};J=function(){return n`
      <thead>
        <tr>
          ${g(this.selectable,()=>n`
              <th class="checkbox-cell">
                <gds-table-row-selector
                  .checked=${u(this,a,C)}
                  .indeterminate=${u(this,a,q)}
                  aria-label="Select all rows"
                  @selector-change=${l(this,a,ct)}
                ></gds-table-row-selector>
              </th>
            `)}
          ${this.columns.filter(t=>this.tableState.visibleColumns.has(t.key)).map(t=>l(this,a,F).call(this,t))}
          ${g(this.actions,()=>n`<th class="column-header actions">
                <div class="column-label">Actions</div>
              </th>`)}
        </tr>
      </thead>
    `};X=function(t,e,s){return n`
      <td
        data-label=${s.label}
        class=${S({"text-right":s.align==="right","space-between":s.justify===!0})}
      >
        ${l(this,a,N).call(this,t,e,s)}
      </td>
    `};Y=function(t,e){return n`
      <tr
        class=${S({selected:this.selectedRows.has(e),loading:this.loading})}
      >
        ${g(this.selectable,()=>n`
            <td class="checkbox-cell">
              <gds-table-row-selector
                .checked=${this.selectedRows.has(e)}
                aria-label="Select row ${e+1}"
                @selector-change=${s=>l(this,a,dt).call(this,e,s)}
              ></gds-table-row-selector>
            </td>
          `)}
        ${this.columns.filter(s=>this.tableState.visibleColumns.has(s.key)).map(s=>l(this,a,X).call(this,t,e,s))}
        ${g(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">${this.actions(t,e)}</div>
            </td>
          `)}
      </tr>
    `};Z=function(){return n`
      <tbody>
        ${this.data.map((t,e)=>l(this,a,Y).call(this,t,e))}
      </tbody>
    `};tt=function(){return n`
      <table class=${S({"responsive-table":this.responsive})}>
        ${l(this,a,J).call(this)} ${l(this,a,Z).call(this)}
      </table>
    `};et=function(){return n`
      <gds-card
        variant="negative"
        justify-content="center"
        align-items="flex-start"
      >
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button @click=${()=>l(this,a,m).call(this)} variant="negative">
          Retry
        </gds-button>
      </gds-card>
    `};st=function(){return this.plain?null:n`
      <div class="footer">
        <div class="lead">
          <slot name="footer-lead">
            ${g(this.selectable&&u(this,a,D),()=>n`
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
              `,()=>n`
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
            @page-change=${l(this,a,nt)}
            @page-size-change=${l(this,a,ot)}
          ></gds-pagination>
        </div>
      </div>
    `};at=async function(t){const e=t.target;this.tableState={...this.tableState,searchQuery:e.value,page:1},await l(this,a,m).call(this)};it=async function(){this.tableState={...this.tableState,searchQuery:"",page:1},await l(this,a,m).call(this)};lt=async function(t){this.tableState={...this.tableState,sortColumn:t,sortDirection:this.tableState.sortColumn===t&&this.tableState.sortDirection==="asc"?"desc":"asc",page:1},await l(this,a,m).call(this)};nt=async function(t){this.tableState={...this.tableState,page:t.detail.page},await l(this,a,m).call(this)};ot=async function(t){this.tableState={...this.tableState,pageSize:t.detail.pageSize,page:1},await l(this,a,m).call(this)};rt=function(t){const e=t.detail.value;this.tableState={...this.tableState,visibleColumns:new Set(e)},this.requestUpdate()};ct=function(t){u(this,a,C)?l(this,a,G).call(this):l(this,a,I).call(this),l(this,a,v).call(this)};dt=function(t,e){e.detail.checked?this.selectedRows.add(t):this.selectedRows.delete(t),l(this,a,v).call(this),this.requestUpdate()};I=function(){this.selectedRows=new Set(this.data.map((t,e)=>e)),this.requestUpdate()};G=function(){this.selectedRows.clear(),this.requestUpdate()};v=function(){this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedIndices:Array.from(this.selectedRows),selectedData:Array.from(this.selectedRows).map(t=>this.data[t]),count:this.selectedRows.size},bubbles:!0}))};c.styles=[B,Tt];h([d({type:String})],c.prototype,"subtitle",2);h([d({type:Array})],c.prototype,"columns",2);h([d()],c.prototype,"dataProvider",2);h([d({reflect:!1})],c.prototype,"density",2);h([d({type:Boolean,reflect:!1})],c.prototype,"selectable",2);h([d({type:Boolean,reflect:!1})],c.prototype,"responsive",2);h([d({type:Boolean})],c.prototype,"plain",2);h([d()],c.prototype,"actions",2);h([y()],c.prototype,"tableState",2);h([y()],c.prototype,"loading",2);h([y()],c.prototype,"data",2);h([y()],c.prototype,"totalRows",2);h([y()],c.prototype,"selectedRows",2);h([y()],c.prototype,"error",2);h([y()],c.prototype,"slots",2);c=h([z("gds-table",{dependsOn:[f,j,$t,pt,H,M,b,ut,vt,St,wt,gt]})],c);c.define();export{b as G};
