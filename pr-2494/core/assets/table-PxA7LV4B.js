import{n as u,r as h}from"./Reflect-DJ7r0WLU.js";import{e as p}from"./class-map-CXsQwv0r.js";import{n as m}from"./when-BR7zwNJC.js";import{G as b,h as r,g as f}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-CA5ADGwW.js";import{G as v}from"./button.component-nte5-sOS.js";import{G as $}from"./dropdown.component-EBACwo34.js";import{I as w,a as k,b as x}from"./sort.component-DX-m5813.js";import{I as S}from"./chevron-left.component-D8lZsGKs.js";import{I as C}from"./chevron-right.component-BAjvqtzM.js";import{I as z}from"./magnifying-glass.component-U0Z7YZT0.js";import{G as D}from"./input-C0jvozuq.js";import{i as R}from"./lit-element-Bx14lxc-.js";const P=R`
  :host {
    display: block;
  }

  .gds-table {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    font-weight: normal;
  }

  .column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .checkbox-cell {
    width: 40px;
    text-align: center;
  }

  .footer,
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .lead,
    .trail {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  /** Pagination stuff */
  .pagination {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .page-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

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
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  tr.selected,
  td.selected {
    background-color: #ccc;
  }
`;var I=Object.defineProperty,G=Object.getOwnPropertyDescriptor,n=(e,s,i,a)=>{for(var o=a>1?void 0:a?G(s,i):s,d=e.length-1,t;d>=0;d--)(t=e[d])&&(o=(a?t(s,i,o):t(o))||o);return a&&o&&I(s,i,o),o};let l=class extends b{constructor(){super(...arguments),this.columns=[],this.data=[],this.density="comfortable",this.page=1,this.pageSize=10,this.selectedRows=new Set,this.sortDirection="asc",this.visibleColumns=new Set,this.searchQuery=""}getPageCount(){return Math.ceil(this.filteredData.length/this.pageSize)}get filteredData(){const e=this.searchQuery.toLowerCase();let s=this.data;return e&&(s=this.data.filter(i=>Object.values(i).some(a=>String(a).toLowerCase().includes(e)))),this.sortColumn&&(s=[...s].sort((i,a)=>{const o=String(i[this.sortColumn]),d=String(a[this.sortColumn]);return this.sortDirection==="asc"?o.localeCompare(d):d.localeCompare(o)})),s}get paginatedData(){const e=(this.page-1)*this.pageSize;return this.filteredData.slice(e,e+this.pageSize)}connectedCallback(){super.connectedCallback(),this.visibleColumns=new Set(this.columns.map(e=>e.key))}render(){const e=this.getPageCount(),s=this.getVisiblePages(e),i=this.selectedRows.size,a=this.filteredData.length,o=(this.page-1)*this.pageSize+1,d=Math.min(this.page*this.pageSize,a);return r`
      <div class="gds-table ${this.density}">
        <div class="header">
          <div class="lead">
            <slot name="header-lead">
              <gds-input
                type="text"
                size="small"
                plain
                clearable
                placeholder="Search..."
                .value=${this.searchQuery}
                @input=${this.handleSearch}
                @gds-input-cleared=${this.handleSearchClear}
              >
                <gds-icon-magnifying-glass
                  slot="lead"
                ></gds-icon-magnifying-glass>
              </gds-input>
            </slot>
          </div>
          <div class="trail">
            <slot name="header-trail">
              <gds-dropdown
                multiple
                plain
                .value=${Array.from(this.visibleColumns)}
                size="small"
                @change=${this.handleColumnVisibility}
              >
                ${this.columns.map(t=>r`
                    <gds-option
                      value=${t.key}
                      ?selected=${this.visibleColumns.has(t.key)}
                    >
                      ${t.label}
                    </gds-option>
                  `)}
              </gds-dropdown>
            </slot>
          </div>
        </div>

        <table
          class=${p({"responsive-table":!0,[this.density]:!0})}
        >
          <thead>
            <tr>
              <th class="checkbox-cell">
                <input
                  type="checkbox"
                  @change=${this.handleSelectAll}
                  .checked=${this.selectedRows.size===this.paginatedData.length}
                />
              </th>

              ${this.columns.filter(t=>this.visibleColumns.has(t.key)).map(t=>r`
                    <th
                      class=${p({"text-right":t.align==="right","text-center":t.align==="center"})}
                    >
                      <div class="column">
                        ${t.label}
                        ${t.sortable?r`
                              <gds-button
                                size="xs"
                                rank="tertiary"
                                ?disabled=${!t.sortable}
                                @click=${()=>this.handleSort(t.key)}
                              >
                                <gds-icon-sort size="s"></gds-icon-sort>
                              </gds-button>
                            `:""}
                      </div>
                    </th>
                  `)}
            </tr>
          </thead>
          <tbody>
            ${this.paginatedData.map((t,g)=>r`
                <tr>
                  <td class="checkbox-cell">
                    <input
                      type="checkbox"
                      .checked=${this.selectedRows.has(g)}
                      @change=${c=>this.handleRowSelect(g,c)}
                    />
                  </td>
                  ${this.columns.filter(c=>this.visibleColumns.has(c.key)).map(c=>r`
                        <td
                          data-label=${c.label}
                          class=${p({"text-right":c.align==="right","text-center":c.align==="center",selected:this.selectedRows.has(g)})}
                        >
                          ${t[c.key]}
                        </td>
                      `)}
                </tr>
              `)}
          </tbody>
        </table>
        <div class="footer">
          <div class="lead">
            <slot name="footer-lead">
              ${m(i>0,()=>r`<span class="selected-count"
                    >${i} rows selected</span
                  >`,()=>r`<span
                    >Showing ${o} to ${d} of ${a} entries</span
                  >`)}
            </slot>
          </div>
          <div class="trail">
            <slot name="footer-trail">
              <div class="pagination">
                <gds-button
                  size="xs"
                  rank="secondary"
                  ?disabled=${this.page===1}
                  @click=${()=>this.page=1}
                >
                  <gds-icon-chevron-double-left
                    stroke="2"
                    size="m"
                  ></gds-icon-chevron-double-left>
                </gds-button>

                <gds-button
                  size="xs"
                  rank="tertiary"
                  ?disabled=${this.page===1}
                  @click=${()=>this.page--}
                >
                  <gds-icon-chevron-left
                    stroke="2"
                    size="m"
                  ></gds-icon-chevron-left>
                </gds-button>

                ${s.map(t=>r`
                    ${t==="..."?r`<gds-button
                          size="xs"
                          rank="tertiary"
                          inert
                          disabled
                          >...</gds-button
                        >`:r`
                          <gds-button
                            size="xs"
                            rank="${this.page===t?"secondary":"tertiary"}"
                            class="page-unit page-button ${this.page===t?"current-page":""}"
                            @click=${()=>this.page=t}
                          >
                            ${t}
                          </gds-button>
                        `}
                  `)}

                <gds-button
                  rank="tertiary"
                  size="xs"
                  ?disabled=${this.page===e}
                  @click=${()=>this.page++}
                >
                  <gds-icon-chevron-right
                    stroke="2"
                    size="m"
                  ></gds-icon-chevron-right>
                </gds-button>

                <gds-button
                  rank="secondary"
                  size="xs"
                  ?disabled=${this.page===e}
                  @click=${()=>this.page=e}
                >
                  <gds-icon-chevron-double-right
                    stroke="2"
                    size="m"
                  ></gds-icon-chevron-double-right>
                </gds-button>
              </div>

              <gds-dropdown
                plain
                size="small"
                @change=${this.handlePageSizeChange}
              >
                ${[5,10,25,50].map(t=>r`
                    <gds-option
                      value=${t}
                      ?selected=${this.pageSize===t}
                    >
                      ${t} per page
                    </gds-option>
                  `)}
              </gds-dropdown>
            </slot>
          </div>
        </div>
      </div>
    `}getVisiblePages(e){if(e<=7)return Array.from({length:e},(a,o)=>o+1);const s=e;let i=[];return this.page<=4?(i=[2,3,4,5],[1,...i,"...",s]):this.page>=e-3?(i=[e-4,e-3,e-2,e-1],[1,"...",...i,s]):(i=[this.page-1,this.page,this.page+1],[1,"...",...i,"...",s])}getSortIcon(e){return this.sortColumn!==e?"↕":this.sortDirection==="asc"?"↑":"↓"}handleSearch(e){const s=e.target;this.searchQuery=s.value,this.page=1,this.requestUpdate()}handleSearchClear(){this.searchQuery="",this.page=1,this.requestUpdate()}handleSort(e){const s=this.columns.find(i=>i.key===e);s!=null&&s.sortable&&(this.sortColumn===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=e,this.sortDirection="asc"),this.page=1,this.requestUpdate())}handleColumnVisibility(e){const s=e.detail.value;this.visibleColumns=new Set(s),this.requestUpdate()}handlePageSizeChange(e){this.pageSize=Number(e.detail.value),this.page=1,this.requestUpdate()}handleSelectAll(e){const s=e.target.checked;this.selectedRows=s?new Set(this.paginatedData.map((i,a)=>a)):new Set,this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedRows:Array.from(this.selectedRows)}}))}handleRowSelect(e,s){s.target.checked?this.selectedRows.add(e):this.selectedRows.delete(e),this.requestUpdate(),this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedRows:Array.from(this.selectedRows)}}))}};l.styles=[y,P];n([u({type:Array})],l.prototype,"columns",2);n([u({type:Array})],l.prototype,"data",2);n([u({reflect:!1})],l.prototype,"density",2);n([h()],l.prototype,"page",2);n([h()],l.prototype,"pageSize",2);n([h()],l.prototype,"selectedRows",2);n([h()],l.prototype,"sortColumn",2);n([h()],l.prototype,"sortDirection",2);n([h()],l.prototype,"visibleColumns",2);n([h()],l.prototype,"searchQuery",2);l=n([f("gds-table",{dependsOn:[v,D,$,S,w,C,k,z,x]})],l);l.define();
