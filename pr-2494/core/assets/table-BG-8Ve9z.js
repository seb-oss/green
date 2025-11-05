import{n as c,r as v}from"./Reflect-DJ7r0WLU.js";import{e as S}from"./class-map-CXsQwv0r.js";import{n as g}from"./when-BR7zwNJC.js";import{G as z,h as n,g as _}from"./gds-element-DTROifYq.js";import{t as j}from"./tokens.style-CA5ADGwW.js";import{G as M}from"./button.component-jWIOpC9g.js";import{G as pe}from"./card.component-DgPbllnK.js";import{G as B}from"./dropdown.component-D7FNft71.js";import{I as ge}from"./cross-small.component-BS14rjKa.js";import{I as be}from"./magnifying-glass.component-U0Z7YZT0.js";import{I as ue,a as ye,b as fe,c as ve,d as me,e as Se,f as we}from"./sort.component-DkCP_pJk.js";import{G as xe}from"./input-t17hjOpz.js";import{i as P}from"./lit-element-Bx14lxc-.js";import{a as $e,G as Ce}from"./context-menu-CDIXMzW3.js";import{I as ke}from"./chevron-bottom.component-DgyIWO1Z.js";import{G as H}from"./text-BmaBdEcP.js";import{a as ze}from"./transitional-styles-CbHKJeDE.js";import{c as _e}from"./rbcb-toggle.template-DqXF-ZkM.js";import{I as Pe}from"./checkmark.component-CddocQY8.js";import{I as Re}from"./minus-small.component-DOCzMU52.js";var De=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,w=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ie(t,s):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&De(t,s,i),i};let u=class extends z{constructor(){super(...arguments),this.page=1,this.pageSize=10,this.total=0,this.pageSizes=[5,10,25,50]}get pageCount(){return Math.ceil(this.total/this.pageSize)}getVisiblePages(e){if(e<=7)return Array.from({length:e},(r,i)=>i+1);const t=e;let s=[];return this.page<=4?(s=[2,3,4,5],[1,...s,"...",t]):this.page>=e-3?(s=[e-4,e-3,e-2,e-1],[1,"...",...s,t]):(s=[this.page-1,this.page,this.page+1],[1,"...",...s,"...",t])}render(){const e=this.pageCount,t=this.getVisiblePages(e);return n`
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

        ${t.map(s=>n`
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
    `];w([c({type:Number})],u.prototype,"page",2);w([c({type:Number})],u.prototype,"pageSize",2);w([c({type:Number})],u.prototype,"total",2);w([c({type:Array})],u.prototype,"pageSizes",2);u=w([_("gds-pagination",{dependsOn:[M,H,B,$e,Ce,ke,ue,ye,fe,ve]})],u);var Ge=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,x=(e,t,s,r)=>{for(var i=r>1?void 0:r?Ee(t,s):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Ge(t,s,i),i};let y=class extends z{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.ariaLabel=""}render(){return n`
      <div
        class="table-row-selector"
        @click=${this.handleClick}
        role="checkbox"
        .aria-checked=${this.indeterminate?"mixed":this.checked.toString()}
        aria-label=${this.ariaLabel}
        tabindex="0"
        @keydown=${this.handleKeydown}
      >
        ${_e({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:!1})}
      </div>
    `}handleClick(e){e.stopPropagation(),!this.disabled&&this.dispatchEvent(new CustomEvent("selector-change",{detail:{checked:!this.checked},bubbles:!0}))}handleKeydown(e){(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this.handleClick(e))}};y.styles=[j,ze,P`
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
    `];x([c({type:Boolean})],y.prototype,"checked",2);x([c({type:Boolean})],y.prototype,"indeterminate",2);x([c({type:Boolean})],y.prototype,"disabled",2);x([c()],y.prototype,"ariaLabel",2);y=x([_("gds-table-row-selector",{dependsOn:[Pe,Re]})],y);const Te=P`
  /* 
   * Host & Container
   * Base component setup and main container
   *  */
  :host {
    display: block;
    font: var(--gds-sys-text-detail-book-s);
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gds-sys-space-xl);
  }

  /* 
   * Density Modes
   * Spacing variables for different density levels
   *  */

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

  /*
   * Container that enables horizontal scroll
   **/
  .data {
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
  }

  /* 
   * Table Structure
   **/
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

  /* 
   * Table Header
   * Sticky header with background and sorting
   *  */
  thead {
    position: relative;
    font-weight: normal;
  }

  /* Header background overlay */
  thead::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #eee;
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
    transition: all 0.2s ease;
  }

  /* Header cell hover effect background */
  thead th::before {
    content: '';
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    border-radius: var(--gds-sys-space-xs);
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

  /* Sort icon styling */
  .sort-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 420ms ease;
    translate: 0 -2px;
    opacity: 0;
    z-index: 1;
  }

  thead th.sortable:hover:not(.sorted) .sort-icon {
    opacity: 0.8;
    translate: 0;
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
    min-height: var(--table-row-min-height);
  }

  tbody tr.loading {
    opacity: 0.3;
    pointer-events: none;
  }

  tbody td {
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  }

  /* 
   * Row Selection
   * Checkbox and selected state styles
   *  */
  tr {
    position: relative;
  }

  .checkbox-cell {
    min-width: var(--gds-sys-space-l);
    width: var(--gds-sys-space-l);
    max-width: var(--gds-sys-space-l);
    padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
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
    border-radius: var(--gds-sys-space-s);
    background-color: rgba(59, 130, 246, 0.1);
    z-index: 0;
    pointer-events: none;
  }

  tr.selected:hover::before {
    background-color: rgba(59, 130, 246, 0.15);
  }

  /* 
   * Header & Footer Layout
   * Top and bottom control sections
   *  */
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

  /* 
   * Cell Content & Alignment
   * Cell content layout and text alignment
   *  */
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
   * Mobile and tablet adaptations
   *  */
  .responsive.data {
    display: contents;
  }

  .responsive thead {
    position: sticky;
    top: var(--gds-sys-space-l);
    z-index: 2;
  }

  @media (max-width: 760px) {
    .responsive td {
      width: 100%;
      min-width: unset;
      display: flex;
      justify-content: space-between;
      padding: var(--gds-sys-space-xs);
    }

    .responsive td::before {
      content: attr(data-label);
      font-weight: bold;
    }
  }
`;var Ae=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},h=(e,t,s,r)=>{for(var i=r>1?void 0:r?Oe(t,s):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&Ae(t,s,i),i},U=(e,t,s)=>t.has(e)||Q("Cannot "+s),b=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),l=(e,t,s)=>(U(e,t,"access private method"),s),$,R,a,D,C,q,L,K,f,N,V,W,F,J,X,Y,Z,ee,te,se,ae,ie,le,ne,oe,re,de,ce,I,G,m;let d=class extends z{constructor(){super(...arguments),k(this,a),k(this,$,{}),k(this,R,5*60*1e3),this.columns=[],this.density="comfortable",this.selectable=!1,this.responsive=!1,this.plain=!1,this.tableState={page:1,pageSize:10,searchQuery:"",visibleColumns:new Set},this.loading=!1,this.data=[],this.totalRows=0,this.selectedRows=new Set,this.error=null,this.slots={}}async connectedCallback(){super.connectedCallback(),this.tableState.visibleColumns=new Set(this.columns.map(e=>e.key)),await l(this,a,f).call(this)}render(){return n`
      <div class="gds-table ${this.density}">
        ${l(this,a,W).call(this)}
        ${g(this.error,()=>l(this,a,te).call(this),()=>l(this,a,ee).call(this))}
        ${l(this,a,se).call(this)}
      </div>
    `}clearSelection(){l(this,a,G).call(this),l(this,a,m).call(this)}selectAll(){l(this,a,I).call(this),l(this,a,m).call(this)}setSelection(e){const t=e.filter(s=>s>=0&&s<this.data.length);this.selectedRows=new Set(t),l(this,a,m).call(this),this.requestUpdate()}getSelection(){const e=Array.from(this.selectedRows);return{indices:e,data:e.map(t=>this.data[t])}}setCellSlot(e,t,s,r,i){const o=`${e}-${t}`;this.slots={...this.slots,[o]:{lead:s,trail:r,value:i}},this.requestUpdate()}clearCellSlots(e,t){if(e!==void 0&&t!==void 0){const s=`${e}-${t}`;delete this.slots[s]}else this.slots={};this.requestUpdate()}};$=new WeakMap;R=new WeakMap;a=new WeakSet;D=function(){return this.selectedRows.size>0};C=function(){return this.data.length>0&&this.selectedRows.size===this.data.length};q=function(){return b(this,a,D)&&!b(this,a,C)};L=function(){return JSON.stringify({page:this.tableState.page,pageSize:this.tableState.pageSize,sortColumn:this.tableState.sortColumn,sortDirection:this.tableState.sortDirection,searchQuery:this.tableState.searchQuery})};K=function(e){return Date.now()-e.timestamp<b(this,R)};f=async function(){if(!this.dataProvider)return;const e=l(this,a,L).call(this),t=b(this,$)[e];if(t&&l(this,a,K).call(this,t)){this.data=t.data,this.totalRows=t.total;return}this.loading=!0,this.error=null;try{const s=await this.dataProvider({page:this.tableState.page,pageSize:this.tableState.pageSize,sortColumn:this.tableState.sortColumn,sortDirection:this.tableState.sortDirection,searchQuery:this.tableState.searchQuery});b(this,$)[e]={data:s.data,total:s.total,timestamp:Date.now()},this.data=s.data,this.totalRows=s.total,this.selectedRows.clear(),this.dispatchEvent(new CustomEvent("data-loaded",{detail:s,bubbles:!0}))}catch(s){this.error=s,this.dispatchEvent(new CustomEvent("data-error",{detail:s,bubbles:!0}))}finally{this.loading=!1}};N=function(e,t,s){var T,A,O;const r=`${s.key}-${t}`,i=this.slots[r],o=s.slots,p=(i==null?void 0:i.lead)??((T=o==null?void 0:o.lead)==null?void 0:T.call(o,e,t)),he=(i==null?void 0:i.value)??((A=o==null?void 0:o.value)==null?void 0:A.call(o,e,t))??e[s.key],E=(i==null?void 0:i.trail)??((O=o==null?void 0:o.trail)==null?void 0:O.call(o,e,t));return n`
      <div class="cell-content">
        ${p&&n`<span class="cell-lead">${p}</span>`}
        <span class="cell-value">${he}</span>
        ${E&&n`<span class="cell-trail">${E}</span>`}
      </div>
    `};V=function(e){const t=this.tableState.sortColumn===e.key,s=this.tableState.sortDirection;return t?s==="asc"?n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`:n`<gds-icon-sort-down size="m"></gds-icon-sort-down>`:n`<gds-icon-sort-up size="m"></gds-icon-sort-up>`};W=function(){return this.plain?null:n`
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
              @input=${l(this,a,ae)}
              @gds-input-cleared=${l(this,a,ie)}
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
              @change=${l(this,a,re)}
            >
              <span slot="trigger">Columns</span>
              ${this.columns.map(e=>n`
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
    `};F=function(e){const t=this.tableState.sortColumn===e.key,s=this.tableState.sortDirection;return n`
      <th
        class=${S({sortable:!!e.sortable,sorted:t,"sort-asc":t&&s==="asc","sort-desc":t&&s==="desc","text-right":e.align==="right","space-between":e.justify===!0})}
        @click=${e.sortable?()=>l(this,a,le).call(this,e.key):null}
      >
        <div class="column-header">
          <span class="column-label">${e.label}</span>
          ${g(e.sortable,()=>n`
              <span class="sort-icon">${l(this,a,V).call(this,e)}</span>
            `)}
        </div>
      </th>
    `};J=function(){return n`
      <thead>
        <tr>
          ${g(this.selectable,()=>n`
              <th class="checkbox-cell">
                <gds-table-row-selector
                  .checked=${b(this,a,C)}
                  .indeterminate=${b(this,a,q)}
                  aria-label="Select all rows"
                  @selector-change=${l(this,a,de)}
                ></gds-table-row-selector>
              </th>
            `)}
          ${this.columns.filter(e=>this.tableState.visibleColumns.has(e.key)).map(e=>l(this,a,F).call(this,e))}
          ${g(this.actions,()=>n`<th class="column-header actions">
                <div class="column-label">Actions</div>
              </th>`)}
        </tr>
      </thead>
    `};X=function(e,t,s){return n`
      <td
        data-label=${s.label}
        class=${S({"text-right":s.align==="right","space-between":s.justify===!0})}
      >
        ${l(this,a,N).call(this,e,t,s)}
      </td>
    `};Y=function(e,t){return n`
      <tr
        class=${S({selected:this.selectedRows.has(t),loading:this.loading})}
      >
        ${g(this.selectable,()=>n`
            <td class="checkbox-cell">
              <gds-table-row-selector
                .checked=${this.selectedRows.has(t)}
                aria-label="Select row ${t+1}"
                @selector-change=${s=>l(this,a,ce).call(this,t,s)}
              ></gds-table-row-selector>
            </td>
          `)}
        ${this.columns.filter(s=>this.tableState.visibleColumns.has(s.key)).map(s=>l(this,a,X).call(this,e,t,s))}
        ${g(this.actions,()=>n`
            <td class="actions-cell">
              <div class="cell-content">${this.actions(e,t)}</div>
            </td>
          `)}
      </tr>
    `};Z=function(){return n`
      <tbody>
        ${this.data.map((e,t)=>l(this,a,Y).call(this,e,t))}
      </tbody>
    `};ee=function(){const e=S({responsive:this.responsive,data:!0});return n`
      <div class=${e}>
        <table>
          ${l(this,a,J).call(this)} ${l(this,a,Z).call(this)}
        </table>
      </div>
    `};te=function(){return n`
      <gds-card
        variant="negative"
        justify-content="center"
        align-items="flex-start"
      >
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button @click=${()=>l(this,a,f).call(this)} variant="negative">
          Retry
        </gds-button>
      </gds-card>
    `};se=function(){return this.plain?null:n`
      <div class="footer">
        <div class="lead">
          <slot name="footer-lead">
            ${g(this.selectable&&b(this,a,D),()=>n`
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
            @page-change=${l(this,a,ne)}
            @page-size-change=${l(this,a,oe)}
          ></gds-pagination>
        </div>
      </div>
    `};ae=async function(e){const t=e.target;this.tableState={...this.tableState,searchQuery:t.value,page:1},await l(this,a,f).call(this)};ie=async function(){this.tableState={...this.tableState,searchQuery:"",page:1},await l(this,a,f).call(this)};le=async function(e){this.tableState={...this.tableState,sortColumn:e,sortDirection:this.tableState.sortColumn===e&&this.tableState.sortDirection==="asc"?"desc":"asc",page:1},await l(this,a,f).call(this)};ne=async function(e){this.tableState={...this.tableState,page:e.detail.page},await l(this,a,f).call(this)};oe=async function(e){this.tableState={...this.tableState,pageSize:e.detail.pageSize,page:1},await l(this,a,f).call(this)};re=function(e){const t=e.detail.value;this.tableState={...this.tableState,visibleColumns:new Set(t)},this.requestUpdate()};de=function(e){b(this,a,C)?l(this,a,G).call(this):l(this,a,I).call(this),l(this,a,m).call(this)};ce=function(e,t){t.detail.checked?this.selectedRows.add(e):this.selectedRows.delete(e),l(this,a,m).call(this),this.requestUpdate()};I=function(){this.selectedRows=new Set(this.data.map((e,t)=>t)),this.requestUpdate()};G=function(){this.selectedRows.clear(),this.requestUpdate()};m=function(){this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedIndices:Array.from(this.selectedRows),selectedData:Array.from(this.selectedRows).map(e=>this.data[e]),count:this.selectedRows.size},bubbles:!0}))};d.styles=[j,Te];h([c({type:String})],d.prototype,"subtitle",2);h([c({type:Array})],d.prototype,"columns",2);h([c()],d.prototype,"dataProvider",2);h([c({reflect:!1})],d.prototype,"density",2);h([c({type:Boolean,reflect:!1})],d.prototype,"selectable",2);h([c({type:Boolean,reflect:!1})],d.prototype,"responsive",2);h([c({type:Boolean})],d.prototype,"plain",2);h([c()],d.prototype,"actions",2);h([v()],d.prototype,"tableState",2);h([v()],d.prototype,"loading",2);h([v()],d.prototype,"data",2);h([v()],d.prototype,"totalRows",2);h([v()],d.prototype,"selectedRows",2);h([v()],d.prototype,"error",2);h([v()],d.prototype,"slots",2);d=h([_("gds-table",{dependsOn:[y,M,xe,pe,H,B,u,be,me,Se,we,ge]})],d);d.define();export{u as G};
