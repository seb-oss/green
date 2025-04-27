import{r as y,E as d}from"./lit-element-Bx14lxc-.js";import{n as v,G as $,h as r,g as w,r as u}from"./custom-element-scoping-b4c89-hi.js";import{t as F}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const P=[{key:"account",label:"Account",sortable:!0,dragaggable:!1,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,dragaggable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!1,dragaggable:!1,filterable:!0,visible:!0}],T=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"}},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:" ",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],I=".dragging{opacity:.5}gds-table-cell[draggable=true]{cursor:grab}gds-table-cell[draggable=true]:active{cursor:grabbing}",j=":host{display:contents}[draggable]{cursor:grab}";var B=Object.defineProperty,U=Object.getOwnPropertyDescriptor,C=(e,t,a,i)=>{for(var s=i>1?void 0:i?U(t,a):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&B(t,a,s),s};let p=class extends ${constructor(){super(...arguments),this.variant="",this.draggable=!1}render(){return r`
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
    `}};p.styles=[y(j)];C([v()],p.prototype,"variant",2);C([v({type:Boolean})],p.prototype,"draggable",2);p=C([w("gds-table-cell")],p);p.define();const L=":host{display:contents}";var N=Object.defineProperty,q=Object.getOwnPropertyDescriptor,_=(e,t,a,i)=>{for(var s=i>1?void 0:i?q(t,a):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&N(t,a,s),s};let m=class extends ${constructor(){super(...arguments),this.variant=""}render(){return r`
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
    `}};m.styles=[y(L)];_([v()],m.prototype,"variant",2);m=_([w("gds-table-row")],m);m.define();var G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,g=(e,t,a,i)=>{for(var s=i>1?void 0:i?Q(t,a):t,l=e.length-1,o;l>=0;l--)(o=e[l])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&G(t,a,s),s};let n=class extends ${constructor(){super(...arguments),this.columns=P,this.data=T,this.searchQuery="",this.filteredData=this.data,this.sortConfig={column:null,direction:"asc"},this.draggedColumn=null,this.dragOverColumn=null,this.selectedFilterColumn=null,this.selectedFilterValues=[]}handleSearch(e){const t=e.target;this.searchQuery=t.value.toLowerCase(),this.filterData()}handleSort(e){var t;(t=this.columns.find(a=>a.key===e))!=null&&t.sortable&&(this.sortConfig.column===e?this.sortConfig={column:e,direction:this.sortConfig.direction==="asc"?"desc":"asc"}:this.sortConfig={column:e,direction:"asc"},this.sortData())}sortData(){this.sortConfig.column&&(this.filteredData=[...this.filteredData].sort((e,t)=>{const a=this.columns.findIndex(l=>l.key===this.sortConfig.column);if(a===-1)return 0;const i=e.cells[a].value,s=t.cells[a].value;if(this.sortConfig.column==="balance"){const l=parseFloat(i.replace(/[^0-9.-]+/g,"")),o=parseFloat(s.replace(/[^0-9.-]+/g,""));return this.sortConfig.direction==="asc"?l-o:o-l}return this.sortConfig.direction==="asc"?i.localeCompare(s):s.localeCompare(i)}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("sort-change",{detail:{column:this.sortConfig.column,direction:this.sortConfig.direction}})))}renderIcon(e,t,a){switch(e){case"bank":return r`<gds-icon-bank
          slot=${t||"lead"}
          size=${a||"m"}
        ></gds-icon-bank>`;case"pin":return r`<gds-icon-pin
          slot=${t||"lead"}
          size=${a||"m"}
        ></gds-icon-pin>`;case"ai":return r`<gds-icon-ai
          slot=${t||"lead"}
          size=${a||"m"}
        ></gds-icon-ai>`;case"dot-grid-two":return r`<gds-icon-dot-grid-two
          slot=${t||"lead"}
          size=${a||"m"}
        ></gds-icon-dot-grid-two>`;case"plus":return r`<gds-icon-plus-small
          slot=${t||"lead"}
          size=${a||"m"}
        ></gds-icon-plus-small>`;default:return d}}handleDragStart(e,t){var i,s;if(!((i=this.columns.find(l=>l.key===t))!=null&&i.dragaggable))return;this.draggedColumn=t,e.target.classList.add("dragging"),(s=e.dataTransfer)==null||s.setData("text/plain",t)}handleDragOver(e,t){const a=this.columns.find(i=>i.key===t);!this.draggedColumn||!(a!=null&&a.dragaggable)||this.draggedColumn===t||(e.preventDefault(),this.dragOverColumn=t)}handleDragEnd(e){e.target.classList.remove("dragging"),this.draggedColumn=null,this.dragOverColumn=null}handleDrop(e,t){e.preventDefault();const a=this.visibleColumns.find(c=>c.key===this.draggedColumn),i=this.visibleColumns.find(c=>c.key===t);if(!(a!=null&&a.dragaggable)||!(i!=null&&i.dragaggable)||!this.draggedColumn||this.draggedColumn===t)return;const s=this.columns.findIndex(c=>c.key===this.draggedColumn),l=this.columns.findIndex(c=>c.key===t),o=[...this.columns],[f]=o.splice(s,1);o.splice(l,0,f);const h=c=>c.map(D=>{const k={...D},x=[...D.cells],[V]=x.splice(s,1);return x.splice(l,0,V),k.cells=x,k});this.data=h(this.data),this.filteredData=h(this.filteredData),this.columns=o,this.draggedColumn=null,this.dragOverColumn=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this.columns,fromIndex:s,toIndex:l,sourceColumn:a,targetColumn:i}}))}getUniqueValuesForColumn(e){const t=this.columns.findIndex(i=>i.key===e);if(t===-1)return[];const a=new Map;return this.data.forEach(i=>{var f,h;const s=i.cells[t],l=((f=s.badge)==null?void 0:f.label)||s.value,o=a.get(l)||{count:0,variant:((h=s.badge)==null?void 0:h.variant)||s.variant||"notice"};a.set(l,{count:o.count+1,variant:o.variant})}),Array.from(a.entries()).map(([i,s])=>({value:i,count:s.count,variant:s.variant}))}handleFilterSelect(e){const t=Array.isArray(e.detail.value)?e.detail.value:[];this.selectedFilterValues=t,this.filterData(),this.dispatchEvent(new CustomEvent("filter-change",{detail:{filterValues:this.selectedFilterValues}}))}filterData(){let e=this.data;if(this.searchQuery&&(e=e.filter(t=>t.cells.some((a,i)=>{var l;return this.columns[i].visible?[a.value,a.supportingText,(l=a.badge)==null?void 0:l.label].filter(Boolean).join(" ").toLowerCase().includes(this.searchQuery):!1}))),this.selectedFilterValues.length>0){const t=this.columns.findIndex(a=>a.key==="branch");t!==-1&&(e=e.filter(a=>{var s;const i=((s=a.cells[t].badge)==null?void 0:s.label)||a.cells[t].value;return this.selectedFilterValues.includes(i)}))}this.filteredData=e,this.requestUpdate()}handleColumnVisibility(e){const t=Array.isArray(e.detail.value)?e.detail.value:[];this.columns=this.columns.map(a=>({...a,visible:t.includes(a.key)})),this.filterData(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-visibility-change",{detail:{visibleColumns:this.columns.filter(a=>a.visible).map(a=>a.key)}}))}get visibleColumns(){return this.columns.filter(e=>e.visible)}render(){return r`
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
                          `:d}
                      ${e.sortable?r`
                            <gds-badge variant="positive" size="small"
                              >Sortable</gds-badge
                            >
                          `:d}
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
            <input type="checkbox" slot="lead" />

            ${this.visibleColumns.map(e=>r`
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
                      `:d}
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
                      `:d}
                </gds-table-cell>
              `)}
          </gds-table-row>
          <!-- Data Rows -->
          ${this.filteredData.map(e=>r`
              <gds-table-row
                ?sortable=${e.sortable}
                ?selectable=${e.selectable}
                href=${e.href||""}
                variant=${e.variant||""}
              >
                ${e.sortable?r`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `:d}

                <input type="checkbox" slot="lead" />

                ${e.cells.map(t=>r`
                    <gds-table-cell variant=${t.variant||""}>
                      ${t.icon?this.renderIcon(t.icon.name,t.icon.slot,t.icon.size):d}
                      ${t.badge?r`
                            <gds-badge
                              variant=${t.badge.variant}
                              size="small"
                              slot="lead"
                            >
                              ${t.badge.label}
                            </gds-badge>
                          `:d}
                      ${t.value}
                      ${t.supportingText?r`
                            <span slot="supporting-text"
                              >${t.supportingText}</span
                            >
                          `:d}
                      ${t.options?r`
                            <gds-context-menu slot="trail">
                              ${t.options.map(a=>r`
                                  <gds-menu-item>${a.label}</gds-menu-item>
                                `)}
                            </gds-context-menu>
                          `:d}
                    </gds-table-cell>
                  `)}
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
            0 of 100 row(s) selected.
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
    `}};n.styles=[F,y(I)];g([v({type:Array})],n.prototype,"columns",2);g([v({type:Array})],n.prototype,"data",2);g([u()],n.prototype,"searchQuery",2);g([u()],n.prototype,"filteredData",2);g([u()],n.prototype,"sortConfig",2);g([u()],n.prototype,"draggedColumn",2);g([u()],n.prototype,"dragOverColumn",2);g([u()],n.prototype,"selectedFilterColumn",2);g([u()],n.prototype,"selectedFilterValues",2);n=g([w("gds-table")],n);n.define();const Qe={title:"Components/Table",component:"gds-table",tags:["autodocs"]},M={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},b={...M,name:"table"};var A,E,O,S,z;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(O=(E=b.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"TODO: Add documentation",...(z=(S=b.parameters)==null?void 0:S.docs)==null?void 0:z.description}}};const Me=["Table"];export{b as Table,Me as __namedExportsOrder,Qe as default};
