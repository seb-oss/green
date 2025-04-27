import{r as y,E as c}from"./lit-element-Bx14lxc-.js";import{n as v,G as $,h as r,g as w,r as u}from"./custom-element-scoping-b4c89-hi.js";import{t as F}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const P=[{key:"account",label:"Account",sortable:!0,dragaggable:!1,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,dragaggable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!1,dragaggable:!1,filterable:!0,visible:!0}],T=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"}},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:" ",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],R=".dragging{opacity:.5}gds-table-cell[draggable=true]{cursor:grab}gds-table-cell[draggable=true]:active{cursor:grabbing}",I=":host{display:contents}[draggable]{cursor:grab}";var j=Object.defineProperty,U=Object.getOwnPropertyDescriptor,C=(e,t,s,l)=>{for(var a=l>1?void 0:l?U(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(l?o(t,s,a):o(a))||a);return l&&a&&j(t,s,a),a};let p=class extends ${constructor(){super(...arguments),this.variant="",this.draggable=!1}render(){return r`
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
        <gds-flex gap="s">
          <slot name="lead"></slot>
          <gds-flex class="cell-value" flex-direction="column">
            <slot></slot>
            <gds-text tag="small" color="secondary">
              <slot name="supporting-text"></slot>
            </gds-text>
          </gds-flex>
        </gds-flex>
        <slot name="trail"></slot>
      </gds-flex>
    `}};p.styles=[y(I)];C([v()],p.prototype,"variant",2);C([v({type:Boolean})],p.prototype,"draggable",2);p=C([w("gds-table-cell")],p);p.define();const B=":host{display:contents}";var q=Object.defineProperty,L=Object.getOwnPropertyDescriptor,_=(e,t,s,l)=>{for(var a=l>1?void 0:l?L(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(l?o(t,s,a):o(a))||a);return l&&a&&q(t,s,a),a};let m=class extends ${constructor(){super(...arguments),this.variant=""}render(){return r`
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
    `}};m.styles=[y(B)];_([v()],m.prototype,"variant",2);m=_([w("gds-table-row")],m);m.define();var N=Object.defineProperty,G=Object.getOwnPropertyDescriptor,d=(e,t,s,l)=>{for(var a=l>1?void 0:l?G(t,s):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(a=(l?o(t,s,a):o(a))||a);return l&&a&&N(t,s,a),a};let n=class extends ${constructor(){super(...arguments),this.columns=P,this.data=T,this.selectedRows=new Set,this.selectAll=!1,this.searchQuery="",this.filteredData=this.data,this.sortConfig={column:null,direction:"asc"},this.draggedColumn=null,this.dragOverColumn=null,this.selectedFilterColumn=null,this.selectedFilterValues=[]}handleSearch(e){const t=e.target;this.searchQuery=t.value.toLowerCase(),this.filterData()}handleSort(e){var t;(t=this.columns.find(s=>s.key===e))!=null&&t.sortable&&(this.sortConfig.column===e?this.sortConfig={column:e,direction:this.sortConfig.direction==="asc"?"desc":"asc"}:this.sortConfig={column:e,direction:"asc"},this.sortData())}sortData(){this.sortConfig.column&&(this.filteredData=[...this.filteredData].sort((e,t)=>{const s=this.columns.findIndex(i=>i.key===this.sortConfig.column);if(s===-1)return 0;const l=e.cells[s].value,a=t.cells[s].value;if(this.sortConfig.column==="balance"){const i=parseFloat(l.replace(/[^0-9.-]+/g,"")),o=parseFloat(a.replace(/[^0-9.-]+/g,""));return this.sortConfig.direction==="asc"?i-o:o-i}return this.sortConfig.direction==="asc"?l.localeCompare(a):a.localeCompare(l)}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("sort-change",{detail:{column:this.sortConfig.column,direction:this.sortConfig.direction}})))}renderIcon(e,t,s){switch(e){case"bank":return r`<gds-icon-bank
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
        ></gds-icon-plus-small>`;default:return c}}handleDragStart(e,t){var l,a;if(!((l=this.columns.find(i=>i.key===t))!=null&&l.dragaggable))return;this.draggedColumn=t,e.target.classList.add("dragging"),(a=e.dataTransfer)==null||a.setData("text/plain",t)}handleDragOver(e,t){const s=this.columns.find(l=>l.key===t);!this.draggedColumn||!(s!=null&&s.dragaggable)||this.draggedColumn===t||(e.preventDefault(),this.dragOverColumn=t)}handleDragEnd(e){e.target.classList.remove("dragging"),this.draggedColumn=null,this.dragOverColumn=null}handleDrop(e,t){e.preventDefault();const s=this.visibleColumns.find(g=>g.key===this.draggedColumn),l=this.visibleColumns.find(g=>g.key===t);if(!(s!=null&&s.dragaggable)||!(l!=null&&l.dragaggable)||!this.draggedColumn||this.draggedColumn===t)return;const a=this.columns.findIndex(g=>g.key===this.draggedColumn),i=this.columns.findIndex(g=>g.key===t),o=[...this.columns],[f]=o.splice(a,1);o.splice(i,0,f);const h=g=>g.map(k=>{const D={...k},x=[...k.cells],[V]=x.splice(a,1);return x.splice(i,0,V),D.cells=x,D});this.data=h(this.data),this.filteredData=h(this.filteredData),this.columns=o,this.draggedColumn=null,this.dragOverColumn=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this.columns,fromIndex:a,toIndex:i,sourceColumn:s,targetColumn:l}}))}getUniqueValuesForColumn(e){const t=this.columns.findIndex(l=>l.key===e);if(t===-1)return[];const s=new Map;return this.data.forEach(l=>{var f,h;const a=l.cells[t],i=((f=a.badge)==null?void 0:f.label)||a.value,o=s.get(i)||{count:0,variant:((h=a.badge)==null?void 0:h.variant)||a.variant||"notice"};s.set(i,{count:o.count+1,variant:o.variant})}),Array.from(s.entries()).map(([l,a])=>({value:l,count:a.count,variant:a.variant}))}handleFilterSelect(e){const t=Array.isArray(e.detail.value)?e.detail.value:[];this.selectedFilterValues=t,this.filterData(),this.dispatchEvent(new CustomEvent("filter-change",{detail:{filterValues:this.selectedFilterValues}}))}filterData(){let e=this.data;if(this.searchQuery&&(e=e.filter(t=>t.cells.some((s,l)=>{var i;return this.columns[l].visible?[s.value,s.supportingText,(i=s.badge)==null?void 0:i.label].filter(Boolean).join(" ").toLowerCase().includes(this.searchQuery):!1}))),this.selectedFilterValues.length>0){const t=this.columns.findIndex(s=>s.key==="branch");t!==-1&&(e=e.filter(s=>{var a;const l=((a=s.cells[t].badge)==null?void 0:a.label)||s.cells[t].value;return this.selectedFilterValues.includes(l)}))}this.filteredData=e,this.requestUpdate()}handleColumnVisibility(e){const t=Array.isArray(e.detail.value)?e.detail.value:[];this.columns=this.columns.map(s=>({...s,visible:t.includes(s.key)})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-visibility-change",{detail:{visibleColumns:t}}))}get visibleColumns(){return this.columns.filter(e=>e.visible)}handleRowSelection(e,t){t?this.selectedRows.add(e):this.selectedRows.delete(e),this.requestUpdate()}handleSelectAll(e){const t=e.target.checked;this.selectAll=t,t?this.filteredData.forEach((s,l)=>{this.selectedRows.add(l)}):this.selectedRows.clear(),this.requestUpdate()}render(){return r`
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

                ${e.cells.map((s,l)=>this.columns[l].visible?r`
                        <gds-table-cell variant=${s.variant||""}>
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
                          ${s.value}
                          ${s.supportingText?r`
                                <span slot="supporting-text"
                                  >${s.supportingText}</span
                                >
                              `:c}
                          ${s.options?r`
                                <gds-context-menu slot="trail">
                                  ${s.options.map(a=>r`
                                      <gds-menu-item
                                        >${a.label}</gds-menu-item
                                      >
                                    `)}
                                </gds-context-menu>
                              `:c}
                        </gds-table-cell>
                      `:c)}
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
    `}};n.styles=[F,y(R)];d([v({type:Array})],n.prototype,"columns",2);d([v({type:Array})],n.prototype,"data",2);d([u()],n.prototype,"selectedRows",2);d([u()],n.prototype,"selectAll",2);d([u()],n.prototype,"searchQuery",2);d([u()],n.prototype,"filteredData",2);d([u()],n.prototype,"sortConfig",2);d([u()],n.prototype,"draggedColumn",2);d([u()],n.prototype,"dragOverColumn",2);d([u()],n.prototype,"selectedFilterColumn",2);d([u()],n.prototype,"selectedFilterValues",2);n=d([w("gds-table")],n);n.define();const Ge={title:"Components/Table",component:"gds-table",tags:["autodocs"]},Q={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},b={...Q,name:"table"};var A,E,S,O,z;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(S=(E=b.parameters)==null?void 0:E.docs)==null?void 0:S.source},description:{story:"TODO: Add documentation",...(z=(O=b.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};const Qe=["Table"];export{b as Table,Qe as __namedExportsOrder,Ge as default};
