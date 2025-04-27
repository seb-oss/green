import{r as y,E as c}from"./lit-element-Bx14lxc-.js";import{n as b,G as $,h as o,g as w,r as u}from"./custom-element-scoping-b4c89-hi.js";import{t as P}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const F=[{key:"account",label:"Account",sortable:!0,dragaggable:!1,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,dragaggable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!1,dragaggable:!1,filterable:!0,visible:!0}],T=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"}},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:" ",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],I=".dragging{opacity:.5}gds-table-cell[draggable=true]{cursor:grab}gds-table-cell[draggable=true]:active{cursor:grabbing}",V=":host{display:contents}[draggable]{cursor:grab}";var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,C=(t,e,a,r)=>{for(var s=r>1?void 0:r?B(e,a):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&j(e,a,s),s};let p=class extends ${constructor(){super(...arguments),this.variant="",this.draggable=!1}render(){return o`
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
        @dragstart=${t=>this.dispatchEvent(new CustomEvent("cell-dragstart",{detail:t}))}
        @dragover=${t=>this.dispatchEvent(new CustomEvent("cell-dragover",{detail:t}))}
        @dragend=${t=>this.dispatchEvent(new CustomEvent("cell-dragend",{detail:t}))}
        @drop=${t=>this.dispatchEvent(new CustomEvent("cell-drop",{detail:t}))}
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
    `}};p.styles=[y(V)];C([b()],p.prototype,"variant",2);C([b({type:Boolean})],p.prototype,"draggable",2);p=C([w("gds-table-cell")],p);p.define();const U=":host{display:contents}";var L=Object.defineProperty,N=Object.getOwnPropertyDescriptor,_=(t,e,a,r)=>{for(var s=r>1?void 0:r?N(e,a):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&L(e,a,s),s};let m=class extends ${constructor(){super(...arguments),this.variant=""}render(){return o`
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
    `}};m.styles=[y(U)];_([b()],m.prototype,"variant",2);m=_([w("gds-table-row")],m);m.define();var G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,g=(t,e,a,r)=>{for(var s=r>1?void 0:r?Q(e,a):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(s=(r?i(e,a,s):i(s))||s);return r&&s&&G(e,a,s),s};let n=class extends ${constructor(){super(...arguments),this.columns=F,this.data=T,this.searchQuery="",this.filteredData=this.data,this.sortConfig={column:null,direction:"asc"},this.draggedColumn=null,this.dragOverColumn=null,this.selectedFilterColumn=null,this.selectedFilterValues=[]}handleSearch(t){const e=t.target;this.searchQuery=e.value.toLowerCase(),this.filterData()}handleSort(t){var e;(e=this.columns.find(a=>a.key===t))!=null&&e.sortable&&(this.sortConfig.column===t?this.sortConfig={column:t,direction:this.sortConfig.direction==="asc"?"desc":"asc"}:this.sortConfig={column:t,direction:"asc"},this.sortData())}sortData(){this.sortConfig.column&&(this.filteredData=[...this.filteredData].sort((t,e)=>{const a=this.columns.findIndex(l=>l.key===this.sortConfig.column);if(a===-1)return 0;const r=t.cells[a].value,s=e.cells[a].value;if(this.sortConfig.column==="balance"){const l=parseFloat(r.replace(/[^0-9.-]+/g,"")),i=parseFloat(s.replace(/[^0-9.-]+/g,""));return this.sortConfig.direction==="asc"?l-i:i-l}return this.sortConfig.direction==="asc"?r.localeCompare(s):s.localeCompare(r)}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("sort-change",{detail:{column:this.sortConfig.column,direction:this.sortConfig.direction}})))}renderIcon(t,e,a){switch(t){case"bank":return o`<gds-icon-bank
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-bank>`;case"pin":return o`<gds-icon-pin
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-pin>`;case"ai":return o`<gds-icon-ai
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-ai>`;case"dot-grid-two":return o`<gds-icon-dot-grid-two
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-dot-grid-two>`;case"plus":return o`<gds-icon-plus-small
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-plus-small>`;default:return c}}handleDragStart(t,e){var r,s;if(!((r=this.columns.find(l=>l.key===e))!=null&&r.dragaggable))return;this.draggedColumn=e,t.target.classList.add("dragging"),(s=t.dataTransfer)==null||s.setData("text/plain",e)}handleDragOver(t,e){const a=this.columns.find(r=>r.key===e);!this.draggedColumn||!(a!=null&&a.dragaggable)||this.draggedColumn===e||(t.preventDefault(),this.dragOverColumn=e)}handleDragEnd(t){t.target.classList.remove("dragging"),this.draggedColumn=null,this.dragOverColumn=null}handleDrop(t,e){t.preventDefault();const a=this.columns.find(d=>d.key===this.draggedColumn),r=this.columns.find(d=>d.key===e);if(!(a!=null&&a.dragaggable)||!(r!=null&&r.dragaggable)||!this.draggedColumn||this.draggedColumn===e)return;const s=this.columns.findIndex(d=>d.key===this.draggedColumn),l=this.columns.findIndex(d=>d.key===e),i=[...this.columns],[v]=i.splice(s,1);i.splice(l,0,v);const f=this.data.map(d=>{const D={...d},x=[...d.cells],[z]=x.splice(s,1);return x.splice(l,0,z),D.cells=x,D});this.columns=i,this.data=f,this.draggedColumn=null,this.dragOverColumn=null,this.requestUpdate(),this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this.columns,fromIndex:s,toIndex:l,sourceColumn:a,targetColumn:r}}))}getUniqueValuesForColumn(t){const e=this.columns.findIndex(r=>r.key===t);if(e===-1)return[];const a=new Map;return this.data.forEach(r=>{var v,f;const s=r.cells[e],l=((v=s.badge)==null?void 0:v.label)||s.value,i=a.get(l)||{count:0,variant:((f=s.badge)==null?void 0:f.variant)||s.variant||"notice"};a.set(l,{count:i.count+1,variant:i.variant})}),Array.from(a.entries()).map(([r,s])=>({value:r,count:s.count,variant:s.variant}))}handleFilterSelect(t){this.selectedFilterValues=t.detail.value||[],this.filterData()}filterData(){let t=this.data;if(this.searchQuery&&(t=t.filter(e=>e.cells.some(a=>{var s;return[a.value,a.supportingText,(s=a.badge)==null?void 0:s.label].filter(Boolean).join(" ").toLowerCase().includes(this.searchQuery)}))),this.selectedFilterValues.length>0){const e=this.columns.findIndex(a=>a.key==="branch");t=t.filter(a=>{var s;const r=((s=a.cells[e].badge)==null?void 0:s.label)||a.cells[e].value;return this.selectedFilterValues.includes(r)})}this.filteredData=t,this.requestUpdate()}render(){return o`
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
              ${this.getUniqueValuesForColumn("branch").map(t=>o`
                  <gds-option value=${t.value}>
                    <span>${t.value}</span>
                    <gds-badge
                      variant=${t.variant||"none"}
                      size="small"
                      rounded
                      >${t.count}</gds-badge
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
            <gds-dropdown size="small" searchable plain>
              <gds-option value="columns">Columns</gds-option>
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

            ${this.columns.map(t=>o`
                <gds-table-cell
                  ?draggable=${t.dragaggable}
                  class=${this.draggedColumn===t.key?"dragging":""}
                  @cell-dragstart=${e=>this.handleDragStart(e.detail,t.key)}
                  @cell-dragover=${e=>this.handleDragOver(e.detail,t.key)}
                  @cell-dragend=${e=>this.handleDragEnd(e.detail)}
                  @cell-drop=${e=>this.handleDrop(e.detail,t.key)}
                >
                  ${t.dragaggable?o`
                        <gds-icon-dot-grid-two
                          slot="lead"
                        ></gds-icon-dot-grid-two>
                      `:c}
                  ${t.label}
                  ${t.sortable?o`
                        <gds-button
                          slot="trail"
                          size="xs"
                          rank="tertiary"
                          class=${this.sortConfig.column===t.key?`sort-${this.sortConfig.direction}`:""}
                          @click=${e=>{e.stopPropagation(),t.sortable&&this.handleSort(t.key)}}
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
          ${this.filteredData.map(t=>o`
              <gds-table-row
                ?sortable=${t.sortable}
                ?selectable=${t.selectable}
                href=${t.href||""}
                variant=${t.variant||""}
              >
                ${t.sortable?o`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `:c}

                <input type="checkbox" slot="lead" />

                ${t.cells.map(e=>o`
                    <gds-table-cell variant=${e.variant||""}>
                      ${e.icon?this.renderIcon(e.icon.name,e.icon.slot,e.icon.size):c}
                      ${e.badge?o`
                            <gds-badge
                              variant=${e.badge.variant}
                              size="small"
                              slot="lead"
                            >
                              ${e.badge.label}
                            </gds-badge>
                          `:c}
                      ${e.value}
                      ${e.supportingText?o`
                            <span slot="supporting-text"
                              >${e.supportingText}</span
                            >
                          `:c}
                      ${e.options?o`
                            <gds-context-menu slot="trail">
                              ${e.options.map(a=>o`
                                  <gds-menu-item>${a.label}</gds-menu-item>
                                `)}
                            </gds-context-menu>
                          `:c}
                    </gds-table-cell>
                  `)}
                ${t.href?o`
                      <gds-icon-chevron-right
                        slot="trail"
                      ></gds-icon-chevron-right>
                    `:o`
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
    `}};n.styles=[P,y(I)];g([b({type:Array})],n.prototype,"columns",2);g([b({type:Array})],n.prototype,"data",2);g([u()],n.prototype,"searchQuery",2);g([u()],n.prototype,"filteredData",2);g([u()],n.prototype,"sortConfig",2);g([u()],n.prototype,"draggedColumn",2);g([u()],n.prototype,"dragOverColumn",2);g([u()],n.prototype,"selectedFilterColumn",2);g([u()],n.prototype,"selectedFilterValues",2);n=g([w("gds-table")],n);n.define();const Qe={title:"Components/Table",component:"gds-table",tags:["autodocs"]},q={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},h={...q,name:"table"};var k,A,O,E,S;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(O=(A=h.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"TODO: Add documentation",...(S=(E=h.parameters)==null?void 0:E.docs)==null?void 0:S.description}}};const qe=["Table"];export{h as Table,qe as __namedExportsOrder,Qe as default};
