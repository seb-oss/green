import{n as p,r as c}from"./Reflect-DJ7r0WLU.js";import{e as g}from"./class-map-CXsQwv0r.js";import{G as u,h as r,g as b}from"./gds-element-DTROifYq.js";import{t as m}from"./tokens.style-CA5ADGwW.js";import{G as f}from"./button.component-nte5-sOS.js";import{I as v,a as y}from"./chevron-double-right.component-YaP_lce2.js";import{I as $}from"./chevron-left.component-D8lZsGKs.js";import{I as w}from"./chevron-right.component-BAjvqtzM.js";import{i as S}from"./lit-element-Bx14lxc-.js";const k=S`
  :host {
    display: block;
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

  .footer {
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
    padding: 20px;
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
`;var x=Object.defineProperty,z=Object.getOwnPropertyDescriptor,n=(e,s,t,a)=>{for(var i=a>1?void 0:a?z(s,t):s,l=e.length-1,d;l>=0;l--)(d=e[l])&&(i=(a?d(s,t,i):d(i))||i);return a&&i&&x(s,t,i),i};let o=class extends u{constructor(){super(...arguments),this.columns=[],this.data=[],this.page=1,this.pageSize=10,this.selectedRows=new Set,this.sortDirection="asc"}getPageCount(){return Math.ceil(this.filteredData.length/this.pageSize)}get filteredData(){var a;const e=(a=this.shadowRoot)==null?void 0:a.querySelector('input[type="search"]'),s=(e==null?void 0:e.value.toLowerCase())||"";let t=this.data;return s&&(t=this.data.filter(i=>Object.values(i).some(l=>String(l).toLowerCase().includes(s)))),this.sortColumn&&(t=[...t].sort((i,l)=>{const d=String(i[this.sortColumn]),h=String(l[this.sortColumn]);return this.sortDirection==="asc"?d.localeCompare(h):h.localeCompare(d)})),t}get paginatedData(){const e=(this.page-1)*this.pageSize;return this.filteredData.slice(e,e+this.pageSize)}render(){const e=this.getPageCount(),s=this.getVisiblePages(e);return r`
      <div>
        <div style="margin-bottom: 16px">
          <input
            type="search"
            placeholder="Search..."
            @input=${this.handleSearch}
          />
        </div>

        <table class=${g({"responsive-table":!0})}>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <input
                  type="checkbox"
                  @change=${this.handleSelectAll}
                  .checked=${this.selectedRows.size===this.paginatedData.length}
                />
              </th>
              ${this.columns.map(t=>r`
                  <th @click=${()=>this.handleSort(t.key)}>
                    ${t.label}
                    ${t.sortable?r` <span>${this.getSortIcon(t.key)}</span> `:""}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.paginatedData.map((t,a)=>r`
                <tr>
                  <td class="checkbox-cell">
                    <input
                      type="checkbox"
                      .checked=${this.selectedRows.has(a)}
                      @change=${i=>this.handleRowSelect(a,i)}
                    />
                  </td>
                  ${this.columns.map(i=>r`
                      <td data-label=${i.label}>${t[i.key]}</td>
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
                  size="m"
                ></gds-icon-chevron-double-left>
              </gds-button>

              <gds-button
                size="xs"
                rank="secondary"
                ?disabled=${this.page===1}
                @click=${()=>this.page--}
              >
                <gds-icon-chevron-left size="m"></gds-icon-chevron-left>
              </gds-button>

              ${s.map(t=>r`
                  ${t==="..."?r`<gds-button size="xs" rank="tertiary" inert disabled
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
                rank="secondary"
                size="xs"
                ?disabled=${this.page===e}
                @click=${()=>this.page++}
              >
                <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
              </gds-button>

              <gds-button
                rank="secondary"
                size="xs"
                ?disabled=${this.page===e}
                @click=${()=>this.page=e}
              >
                <gds-icon-chevron-double-right
                  size="m"
                ></gds-icon-chevron-double-right>
              </gds-button>
            </div>
            <select @change=${this.handlePageSizeChange}>
              ${[5,10,25,50].map(t=>r`
                  <option value=${t} ?selected=${this.pageSize===t}>
                    ${t} per page
                  </option>
                `)}
            </select>
          </div>
        </div>
      </div>
    `}getVisiblePages(e){if(e<=7)return Array.from({length:e},(a,i)=>i+1);const s=e;let t=[];return this.page<=4?(t=[2,3,4,5],[1,...t,"...",s]):this.page>=e-3?(t=[e-4,e-3,e-2,e-1],[1,"...",...t,s]):(t=[this.page-1,this.page,this.page+1],[1,"...",...t,"...",s])}getSortIcon(e){return this.sortColumn!==e?"↕":this.sortDirection==="asc"?"↑":"↓"}handleSearch(){this.page=1,this.requestUpdate()}handleSort(e){const s=this.columns.find(t=>t.key===e);s!=null&&s.sortable&&(this.sortColumn===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=e,this.sortDirection="asc"),this.page=1,this.requestUpdate())}handlePageSizeChange(e){this.pageSize=Number(e.target.value),this.page=1,this.requestUpdate()}handleSelectAll(e){const s=e.target.checked;this.selectedRows=s?new Set(this.paginatedData.map((t,a)=>a)):new Set,this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedRows:Array.from(this.selectedRows)}}))}handleRowSelect(e,s){s.target.checked?this.selectedRows.add(e):this.selectedRows.delete(e),this.requestUpdate(),this.dispatchEvent(new CustomEvent("selection-change",{detail:{selectedRows:Array.from(this.selectedRows)}}))}};o.styles=[m,k];n([p({type:Array})],o.prototype,"columns",2);n([p({type:Array})],o.prototype,"data",2);n([c()],o.prototype,"page",2);n([c()],o.prototype,"pageSize",2);n([c()],o.prototype,"selectedRows",2);n([c()],o.prototype,"sortColumn",2);n([c()],o.prototype,"sortDirection",2);o=n([b("gds-table",{dependsOn:[f,$,v,w,y]})],o);o.define();
