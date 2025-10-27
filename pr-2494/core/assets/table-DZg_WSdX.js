import{n as g,r as d}from"./Reflect-DJ7r0WLU.js";import{e as h}from"./class-map-CXsQwv0r.js";import{G as p,h as o,g as u}from"./gds-element-DTROifYq.js";import{t as b}from"./tokens.style-CA5ADGwW.js";import{G as f}from"./button.component-nte5-sOS.js";import{G as m}from"./dropdown.component-EBACwo34.js";import{I as y,a as v,b as $}from"./sort.component-DX-m5813.js";import{I as x}from"./chevron-left.component-D8lZsGKs.js";import{I as w}from"./chevron-right.component-BAjvqtzM.js";import{I as k}from"./magnifying-glass.component-U0Z7YZT0.js";import{G as S}from"./input-C0jvozuq.js";import{i as z}from"./lit-element-Bx14lxc-.js";const C=z`
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
`;var D=Object.defineProperty,R=Object.getOwnPropertyDescriptor,l=(t,s,e,i)=>{for(var a=i>1?void 0:i?R(s,e):s,n=t.length-1,c;n>=0;n--)(c=t[n])&&(a=(i?c(s,e,a):c(a))||a);return i&&a&&D(s,e,a),a};let r=class extends p{constructor(){super(...arguments),this.columns=[],this.data=[],this.page=1,this.pageSize=10,this.selectedRows=new Set,this.sortDirection="asc",this.searchQuery=""}getPageCount(){return Math.ceil(this.filteredData.length/this.pageSize)}get filteredData(){const t=this.searchQuery.toLowerCase();let s=this.data;return t&&(s=this.data.filter(e=>Object.values(e).some(i=>String(i).toLowerCase().includes(t)))),this.sortColumn&&(s=[...s].sort((e,i)=>{const a=String(e[this.sortColumn]),n=String(i[this.sortColumn]);return this.sortDirection==="asc"?a.localeCompare(n):n.localeCompare(a)})),s}get paginatedData(){const t=(this.page-1)*this.pageSize;return this.filteredData.slice(t,t+this.pageSize)}render(){const t=this.getPageCount(),s=this.getVisiblePages(t);return o`
      <div class="gds-table">
        <div class="header">
          <div class="lead">
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
          </div>
          <div class="trail">Trail content</div>
        </div>

        <table class=${h({"responsive-table":!0})}>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <input
                  type="checkbox"
                  @change=${this.handleSelectAll}
                  .checked=${this.selectedRows.size===this.paginatedData.length}
                />
              </th>

              ${this.columns.map(e=>o`
                  <th
                    class=${h({"text-right":e.align==="right","text-center":e.align==="center"})}
                  >
                    ${e.label}
                    ${e.sortable?o`
                          <gds-button
                            size="xs"
                            rank="tertiary"
                            ?disabled=${!e.sortable}
                            @click=${()=>this.handleSort(e.key)}
                          >
                            <gds-icon-sort size="s"></gds-icon-sort>
                          </gds-button>
                        `:""}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.paginatedData.map((e,i)=>o`
                <tr>
                  <td class="checkbox-cell">
                    <input
                      type="checkbox"
                      .checked=${this.selectedRows.has(i)}
                      @change=${a=>this.handleRowSelect(i,a)}
                    />
                  </td>
                  ${this.columns.map(a=>o`
                      <!-- <td data-label=${a.label}>${e[a.key]}</td> -->
                      <td
                        data-label=${a.label}
                        class=${h({"text-right":a.align==="right","text-center":a.align==="center",selected:this.selectedRows.has(i)})}
                      >
                        ${e[a.key]}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
        <div class="footer">
          <div class="lead"></div>
          <div class="trail">
            <div class="pagination">
              <gds-button
                size="xs"
                rank="secondary"
                ?disabled=${this.page===1}
                @click=${()=>this.page=1}
              >
                <gds-icon-chevron-double-left
                  stroke="2"
                  size="l"
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
                  size="l"
                  slot="lead"
                ></gds-icon-chevron-left>
                Prev
              </gds-button>

              ${s.map(e=>o`
                  ${e==="..."?o`<gds-button size="xs" rank="tertiary" inert disabled
                        >...</gds-button
                      >`:o`
                        <gds-button
                          size="xs"
                          rank="${this.page===e?"secondary":"tertiary"}"
                          class="page-unit page-button ${this.page===e?"current-page":""}"
                          @click=${()=>this.page=e}
                        >
                          ${e}
                        </gds-button>
                      `}
                `)}

              <gds-button
                rank="secondary"
                size="xs"
                ?disabled=${this.page===t}
                @click=${()=>this.page++}
              >
                Next
                <gds-icon-chevron-right
                  slot="trail"
                  stroke="2"
                  size="l"
                ></gds-icon-chevron-right>
              </gds-button>

              <gds-button
                rank="secondary"
                size="xs"
                ?disabled=${this.page===t}
                @click=${()=>this.page=t}
              >
                <gds-icon-chevron-double-right
                  stroke="2"
                  size="l"
                ></gds-icon-chevron-double-right>
              </gds-button>
            </div>

            <gds-dropdown
              plain
              size="small"
              @change=${this.handlePageSizeChange}
            >
              ${[5,10,25,50].map(e=>o`
                  <gds-option value=${e} ?selected=${this.pageSize===e}>
                    ${e} per page
                  </gds-option>
                `)}
            </gds-dropdown>
          </div>
        </div>
      </div>
    `}getVisiblePages(t){if(t<=7)return Array.from({length:t},(i,a)=>a+1);const s=t;let e=[];return this.page<=4?(e=[2,3,4,5],[1,...e,"...",s]):this.page>=t-3?(e=[t-4,t-3,t-2,t-1],[1,"...",...e,s]):(e=[this.page-1,this.page,this.page+1],[1,"...",...e,"...",s])}getSortIcon(t){return this.sortColumn!==t?"↕":this.sortDirection==="asc"?"↑":"↓"}handleSearch(t){const s=t.target;this.searchQuery=s.value,this.page=1,this.requestUpdate()}handleSearchClear(){this.searchQuery="",this.page=1,this.requestUpdate()}handleSort(t){const s=this.columns.find(e=>e.key===t);s!=null&&s.sortable&&(this.sortColumn===t?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=t,this.sortDirection="asc"),this.page=1,this.requestUpdate())}handlePageSizeChange(t){this.pageSize=Number(t.detail.value),this.page=1,this.requestUpdate()}handleSelectAll(t){const s=t.target.checked;this.selectedRows=s?new Set(this.paginatedData.map((e,i)=>i)):new Set,this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedRows:Array.from(this.selectedRows)}}))}handleRowSelect(t,s){s.target.checked?this.selectedRows.add(t):this.selectedRows.delete(t),this.requestUpdate(),this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedRows:Array.from(this.selectedRows)}}))}};r.styles=[b,C];l([g({type:Array})],r.prototype,"columns",2);l([g({type:Array})],r.prototype,"data",2);l([d()],r.prototype,"page",2);l([d()],r.prototype,"pageSize",2);l([d()],r.prototype,"selectedRows",2);l([d()],r.prototype,"sortColumn",2);l([d()],r.prototype,"sortDirection",2);l([d()],r.prototype,"searchQuery",2);r=l([u("gds-table",{dependsOn:[f,S,m,x,y,w,v,k,$]})],r);r.define();
