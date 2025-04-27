import{r as y,E as c}from"./lit-element-Bx14lxc-.js";import{n as v,G as C,h as r,g as $,r as g}from"./custom-element-scoping-b4c89-hi.js";import{t as F}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const P=[{key:"account",label:"Account",sortable:!0,dragaggable:!1,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,dragaggable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!1,dragaggable:!1,filterable:!0,visible:!0}],R=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"}},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:" ",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],T=".dragging{opacity:.5}gds-table-cell[draggable=true]{cursor:grab}gds-table-cell[draggable=true]:active{cursor:grabbing}",I=":host{display:contents}[draggable]{cursor:grab}";var U=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=(e,t,s,a)=>{for(var l=a>1?void 0:a?j(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&U(t,s,l),l};let p=class extends C{constructor(){super(...arguments),this.variant="",this.draggable=!1}render(){return r`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        padding="xs m"
        border-style="solid"
        border-width="0 0 0 4xs"
        min-height="100%"
        flex="1"
        .background=${this.variant}
        .color=${this.variant}
        .border-color=${this.variant}
        draggable=${this.draggable}
        @dragstart=${e=>this.dispatchEvent(new CustomEvent("cell-dragstart",{detail:e}))}
        @dragover=${e=>this.dispatchEvent(new CustomEvent("cell-dragover",{detail:e}))}
        @dragend=${e=>this.dispatchEvent(new CustomEvent("cell-dragend",{detail:e}))}
        @drop=${e=>this.dispatchEvent(new CustomEvent("cell-drop",{detail:e}))}
      >
        <gds-flex gap="s" align-items="center">
          <slot name="lead"></slot>
          <gds-flex class="cell-value" flex-direction="column" flex="1">
            <slot></slot>
            <gds-text tag="small" color="secondary">
              <slot name="supporting-text"></slot>
            </gds-text>
          </gds-flex>
        </gds-flex>
        <slot name="trail"></slot>
      </gds-flex>
    `}};p.styles=[y(I)];w([v()],p.prototype,"variant",2);w([v({type:Boolean})],p.prototype,"draggable",2);p=w([$("gds-table-cell")],p);p.define();const q=":host{display:contents}";var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,z=(e,t,s,a)=>{for(var l=a>1?void 0:a?N(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&B(t,s,l),l};let m=class extends C{constructor(){super(...arguments),this.variant=""}render(){return r`
      <gds-flex
        min-width="100%"
        position="relative"
        borde-color="secondary"
        border-width="0 0 4xs 0"
        align-items="center"
        min-height="max-content"
        .background=${this.variant}
        .color=${this.variant}
        .border-color=${this.variant}
        overflow="hidden"
      >
        <gds-flex
          align-items="center"
          justify-content="center"
          height="100%"
          width="max-content"
          position="absolute"
          inset="0 0 0 -24px"
        >
          <slot name="drag"></slot>
        </gds-flex>

        <gds-flex align-items="center" justify-content="center" width="40px">
          <slot name="lead"></slot>
        </gds-flex>

        <gds-flex flex="1">
          <slot></slot>
        </gds-flex>

        <gds-flex
          align-items="center"
          justify-content="center"
          width="40px"
          border-style="solid"
          border-width="0 0 0 4xs"
          min-height="100%"
          height="100%"
        >
          <slot name="trail"></slot>
        </gds-flex>
      </gds-flex>
    `}};m.styles=[y(q)];z([v()],m.prototype,"variant",2);m=z([$("gds-table-row")],m);m.define();var L=Object.defineProperty,G=Object.getOwnPropertyDescriptor,d=(e,t,s,a)=>{for(var l=a>1?void 0:a?G(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&L(t,s,l),l};let o=class extends C{constructor(){super(...arguments),this.columns=P,this.data=R,this.selectedRows=new Set,this.selectAll=!1,this.searchQuery="",this.filteredData=this.data,this.sortConfig={column:null,direction:"asc"},this.draggedColumn=null,this.dragOverColumn=null,this.selectedFilterColumn=null,this.selectedFilterValues=[],this.editingCell=null,this.editingValue=""}handleSearch(e){const t=e.target;this.searchQuery=t.value.toLowerCase(),this.filterData()}handleSort(e){var t;(t=this.columns.find(s=>s.key===e))!=null&&t.sortable&&(this.sortConfig.column===e?this.sortConfig={column:e,direction:this.sortConfig.direction==="asc"?"desc":"asc"}:this.sortConfig={column:e,direction:"asc"},this.sortData())}sortData(){this.sortConfig.column&&(this.filteredData=[...this.filteredData].sort((e,t)=>{const s=this.columns.findIndex(i=>i.key===this.sortConfig.column);if(s===-1)return 0;const a=e.cells[s].value,l=t.cells[s].value;if(this.sortConfig.column==="balance"){const i=parseFloat(a.replace(/[^0-9.-]+/g,"")),n=parseFloat(l.replace(/[^0-9.-]+/g,""));return this.sortConfig.direction==="asc"?i-n:n-i}return this.sortConfig.direction==="asc"?a.localeCompare(l):l.localeCompare(a)}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("sort-change",{detail:{column:this.sortConfig.column,direction:this.sortConfig.direction}})))}renderIcon(e,t,s){switch(e){case"bank":return r`<gds-icon-bank
          slot=${t||"lead"}
          size=${s||"m"}
        ></gds-icon-bank>`;case"pin":return r`<gds-icon-pin
          slot=${t||"lead"}
          size=${s||"m"}
        ></gds-icon-pin>`;case"ai":return r`<gds-icon-ai
          slot=${t||"lead"}
          size=${s||"m"}
        ></gds-icon-ai>`;case"dot-grid-two":return r`<gds-icon-dot-grid-two
          slot=${t||"lead"}
          size=${s||"m"}
        ></gds-icon-dot-grid-two>`;case"plus":return r`<gds-icon-plus-small
          slot=${t||"lead"}
          size=${s||"m"}
        ></gds-icon-plus-small>`;default:return c}}handleDragStart(e,t){var a,l;if(!((a=this.columns.find(i=>i.key===t))!=null&&a.dragaggable))return;this.draggedColumn=t,e.target.classList.add("dragging"),(l=e.dataTransfer)==null||l.setData("text/plain",t)}handleDragOver(e,t){const s=this.columns.find(a=>a.key===t);!this.draggedColumn||!(s!=null&&s.dragaggable)||this.draggedColumn===t||(e.preventDefault(),this.dragOverColumn=t)}handleDragEnd(e){e.target.classList.remove("dragging"),this.draggedColumn=null,this.dragOverColumn=null}handleDrop(e,t){e.preventDefault();const s=this.visibleColumns.find(u=>u.key===this.draggedColumn),a=this.visibleColumns.find(u=>u.key===t);if(!(s!=null&&s.dragaggable)||!(a!=null&&a.dragaggable)||!this.draggedColumn||this.draggedColumn===t)return;const l=this.columns.findIndex(u=>u.key===this.draggedColumn),i=this.columns.findIndex(u=>u.key===t),n=[...this.columns],[f]=n.splice(l,1);n.splice(i,0,f);const h=u=>u.map(D=>{const k={...D},x=[...D.cells],[_]=x.splice(l,1);return x.splice(i,0,_),k.cells=x,k});this.data=h(this.data),this.filteredData=h(this.filteredData),this.columns=n,this.draggedColumn=null,this.dragOverColumn=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this.columns,fromIndex:l,toIndex:i,sourceColumn:s,targetColumn:a}}))}getUniqueValuesForColumn(e){const t=this.columns.findIndex(a=>a.key===e);if(t===-1)return[];const s=new Map;return this.data.forEach(a=>{var f,h;const l=a.cells[t],i=((f=l.badge)==null?void 0:f.label)||l.value,n=s.get(i)||{count:0,variant:((h=l.badge)==null?void 0:h.variant)||l.variant||"notice"};s.set(i,{count:n.count+1,variant:n.variant})}),Array.from(s.entries()).map(([a,l])=>({value:a,count:l.count,variant:l.variant}))}handleFilterSelect(e){const t=Array.isArray(e.detail.value)?e.detail.value:[];this.selectedFilterValues=t,this.filterData(),this.dispatchEvent(new CustomEvent("filter-change",{detail:{filterValues:this.selectedFilterValues}}))}filterData(){let e=this.data;if(this.searchQuery&&(e=e.filter(t=>t.cells.some((s,a)=>{var i;return this.columns[a].visible?[s.value,s.supportingText,(i=s.badge)==null?void 0:i.label].filter(Boolean).join(" ").toLowerCase().includes(this.searchQuery):!1}))),this.selectedFilterValues.length>0){const t=this.columns.findIndex(s=>s.key==="branch");t!==-1&&(e=e.filter(s=>{var l;const a=((l=s.cells[t].badge)==null?void 0:l.label)||s.cells[t].value;return this.selectedFilterValues.includes(a)}))}this.filteredData=e,this.requestUpdate()}handleColumnVisibility(e){const t=Array.isArray(e.detail.value)?e.detail.value:[];this.columns=this.columns.map(s=>({...s,visible:t.includes(s.key)})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-visibility-change",{detail:{visibleColumns:t}}))}get visibleColumns(){return this.columns.filter(e=>e.visible)}handleRowSelection(e,t){t?this.selectedRows.add(e):this.selectedRows.delete(e),this.requestUpdate()}handleSelectAll(e){const t=e.target.checked;this.selectAll=t,t?this.filteredData.forEach((s,a)=>{this.selectedRows.add(a)}):this.selectedRows.clear(),this.requestUpdate()}handleCellDoubleClick(e,t,s){e!==-1&&(this.editingCell={rowIndex:e,columnIndex:t},this.editingValue=s,this.requestUpdate())}handleCellEdit(e){const t=e.target;this.editingValue=t.value}handleCellEditKeyDown(e){e.key==="Enter"?this.saveCellEdit():e.key==="Escape"&&(this.editingCell=null,this.requestUpdate())}saveCellEdit(){if(!this.editingCell)return;const{rowIndex:e,columnIndex:t}=this.editingCell;this.filteredData=this.filteredData.map((a,l)=>{if(l===e){const i={...a};return i.cells=[...a.cells],i.cells[t]={...a.cells[t],value:this.editingValue},i}return a});const s=this.data.findIndex(a=>JSON.stringify(a)===JSON.stringify(this.filteredData[e]));s!==-1&&(this.data=this.data.map((a,l)=>{if(l===s){const i={...a};return i.cells=[...a.cells],i.cells[t]={...a.cells[t],value:this.editingValue},i}return a})),this.editingCell=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("cell-edit",{detail:{rowIndex:e,columnIndex:t,newValue:this.editingValue}}))}render(){return r`
      <gds-flex flex-direction="column" gap="s">
        <gds-flex data-title="Filter" flex="1" width="100%">
          <gds-flex data-title="Search" gap="s" z-index="1">
            <gds-input
              size="small"
              plain
              placeholder="Search data"
              clearable
              width="400px"
              .value=${this.searchQuery}
              @input=${this.handleSearch}
            >
              <gds-icon-search-menu slot="lead"></gds-icon-search-menu>
            </gds-input>

            <gds-dropdown
              size="small"
              searchable
              plain
              combobox
              multiple
              placeholder="Filter"
              .value=${this.selectedFilterValues}
              @change=${this.handleFilterSelect}
            >
              <gds-option isplaceholder>Filter by branches</gds-option>
              ${this.getUniqueValuesForColumn("branch").map(e=>r`
                  <gds-option value=${e.value}>
                    <span>${e.value}</span>
                    <gds-badge
                      variant=${e.variant||"none"}
                      size="small"
                      rounded
                      >${e.count}</gds-badge
                    >
                  </gds-option>
                `)}
            </gds-dropdown>
          </gds-flex>
          <gds-flex margin="0 0 0 auto" gap="s" align-items="center">
            <gds-button size="small" rank="tertiary">
              <gds-icon-pencil-sparkle slot="lead"></gds-icon-pencil-sparkle>
              Compact
            </gds-button>
            <gds-dropdown
              size="small"
              searchable
              plain
              multiple
              @change=${this.handleColumnVisibility}
            >
              <gds-option isplaceholder>Columns</gds-option>
              ${this.columns.map(e=>r`
                  <gds-option value=${e.key} .selected=${e.visible}>
                    <gds-flex align-items="center" gap="s">
                      ${e.label}
                      ${e.dragaggable?r`
                            <gds-badge variant="notice" size="small"
                              >Draggable</gds-badge
                            >
                          `:c}
                      ${e.sortable?r`
                            <gds-badge variant="positive" size="small"
                              >Sortable</gds-badge
                            >
                          `:c}
                    </gds-flex>
                  </gds-option>
                `)}
            </gds-dropdown>
          </gds-flex>
        </gds-flex>

        <gds-flex
          flex-direction="column"
          border-radius="xs"
          border-style="solid"
          border-width="4xs"
        >
          <gds-table-row class="table-head">
            <input
              type="checkbox"
              slot="lead"
              .checked=${this.selectAll}
              @change=${this.handleSelectAll}
            />
            ${this.columns.filter(e=>e.visible).map(e=>r`
                  <gds-table-cell
                    ?draggable=${e.dragaggable}
                    class=${this.draggedColumn===e.key?"dragging":""}
                    @cell-dragstart=${t=>this.handleDragStart(t.detail,e.key)}
                    @cell-dragover=${t=>this.handleDragOver(t.detail,e.key)}
                    @cell-dragend=${t=>this.handleDragEnd(t.detail)}
                    @cell-drop=${t=>this.handleDrop(t.detail,e.key)}
                  >
                    ${e.dragaggable?r`
                          <gds-icon-dot-grid-two
                            slot="lead"
                          ></gds-icon-dot-grid-two>
                        `:c}
                    ${e.label}
                    ${e.sortable?r`
                          <gds-button
                            slot="trail"
                            size="xs"
                            rank="tertiary"
                            class=${this.sortConfig.column===e.key?`sort-${this.sortConfig.direction}`:""}
                            @click=${t=>{t.stopPropagation(),e.sortable&&this.handleSort(e.key)}}
                          >
                            <gds-icon-arrow-bottom-top
                              size="s"
                            ></gds-icon-arrow-bottom-top>
                          </gds-button>
                        `:c}
                  </gds-table-cell>
                `)}
          </gds-table-row>

          <!-- Data Rows -->
          ${this.filteredData.map((e,t)=>r`
              <gds-table-row
                ?sortable=${e.sortable}
                ?selectable=${e.selectable}
                href=${e.href||""}
                variant=${this.selectedRows.has(t)?"positive":e.variant||""}
              >
                ${e.sortable?r`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `:c}

                <input
                  type="checkbox"
                  slot="lead"
                  .checked=${this.selectedRows.has(t)}
                  @change=${s=>this.handleRowSelection(t,s.target.checked)}
                />

                ${e.cells.map((s,a)=>{var l,i;return this.columns[a].visible?r`
                        <gds-table-cell
                          variant=${s.variant||""}
                          @dblclick=${()=>this.handleCellDoubleClick(t,a,s.value)}
                        >
                          ${s.icon?this.renderIcon(s.icon.name,s.icon.slot,s.icon.size):c}
                          ${s.badge?r`
                                <gds-badge
                                  variant=${s.badge.variant}
                                  size="small"
                                  slot="lead"
                                >
                                  ${s.badge.label}
                                </gds-badge>
                              `:c}
                          ${((l=this.editingCell)==null?void 0:l.rowIndex)===t&&((i=this.editingCell)==null?void 0:i.columnIndex)===a?r`
                                <gds-input
                                  size="small"
                                  .value=${this.editingValue}
                                  @input=${this.handleCellEdit}
                                  @keydown=${this.handleCellEditKeyDown}
                                  @blur=${this.saveCellEdit}
                                ></gds-input>
                              `:s.value}
                          ${s.supportingText?r`
                                <span slot="supporting-text"
                                  >${s.supportingText}</span
                                >
                              `:c}
                          ${s.options?r`
                                <gds-context-menu slot="trail">
                                  ${s.options.map(n=>r`
                                      <gds-menu-item
                                        >${n.label}</gds-menu-item
                                      >
                                    `)}
                                </gds-context-menu>
                              `:c}
                        </gds-table-cell>
                      `:c})}
                ${e.href?r`
                      <gds-icon-chevron-right
                        slot="trail"
                      ></gds-icon-chevron-right>
                    `:r`
                      <gds-button slot="trail" rank="tertiary" size="xs">
                        <gds-icon-dot-grid-one-vertical size="s">
                        </gds-icon-dot-grid-one-vertical>
                      </gds-button>
                    `}
              </gds-table-row>
            `)}

          <gds-table-row href="#" variant="primary">
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-text tag="small">
                Use this row to have a documentation link or no matter what just
                simply all of it
              </gds-text>
            </gds-table-cell>
            <gds-icon-chevron-right slot="trail"></gds-icon-chevron-right>
          </gds-table-row>
        </gds-flex>
        <!-- Footer -->
        <gds-flex align-items="center" gap="s">
          <gds-text tag="small" color="secondary">
            ${this.selectedRows.size} of ${this.filteredData.length} row(s)
            selected.
          </gds-text>
          <gds-flex margin="0 0 0 auto" gap="s">
            <gds-flex align-items="center" gap="xs">
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
              </gds-button>
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-left size="s"></gds-icon-chevron-left>
              </gds-button>
              <gds-text tag="small"> Page 1 of 10 </gds-text>
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-right size="s"></gds-icon-chevron-right>
              </gds-button>
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
              </gds-button>
            </gds-flex>

            <gds-card
              flex-direction="row"
              padding="2xs 2xs 2xs s"
              gap="xs"
              align-items="center"
              variant="secondary"
            >
              <gds-dropdown size="small" searchable plain>
                <gds-option value="10"> 10 </gds-option>
                <gds-option value="20"> 10 </gds-option>
                <gds-option value="40"> 10 </gds-option>
                <gds-option value="100"> 10 </gds-option>
                <gds-option value="1000"> 10 </gds-option>
              </gds-dropdown>
            </gds-card>
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `}};o.styles=[F,y(T)];d([v({type:Array})],o.prototype,"columns",2);d([v({type:Array})],o.prototype,"data",2);d([g()],o.prototype,"selectedRows",2);d([g()],o.prototype,"selectAll",2);d([g()],o.prototype,"searchQuery",2);d([g()],o.prototype,"filteredData",2);d([g()],o.prototype,"sortConfig",2);d([g()],o.prototype,"draggedColumn",2);d([g()],o.prototype,"dragOverColumn",2);d([g()],o.prototype,"selectedFilterColumn",2);d([g()],o.prototype,"selectedFilterValues",2);d([g()],o.prototype,"editingCell",2);d([g()],o.prototype,"editingValue",2);o=d([$("gds-table")],o);o.define();const Ge={title:"Components/Table",component:"gds-table",tags:["autodocs"]},Q={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},b={...Q,name:"table"};var E,A,S,V,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(S=(A=b.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"TODO: Add documentation",...(O=(V=b.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};const Qe=["Table"];export{b as Table,Qe as __namedExportsOrder,Ge as default};
