import{r as v,E as d}from"./lit-element-Bx14lxc-.js";import{n as b,G as h,h as i,g as f,r as A}from"./custom-element-scoping-b4c89-hi.js";import{t as P}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const x=[{key:"account",label:"Account",sortable:!0,dragaggable:!1,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,dragaggable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!1,dragaggable:!0,filterable:!0,visible:!0}],T=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"}},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:" ",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],S=".dragging{opacity:.5}gds-table-cell[draggable=true]{cursor:grab}gds-table-cell[draggable=true]:active{cursor:grabbing}",I=":host{display:contents}";var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,D=(t,e,a,o)=>{for(var s=o>1?void 0:o?B(e,a):e,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(o?l(e,a,s):l(s))||s);return o&&s&&j(e,a,s),s};let p=class extends h{constructor(){super(...arguments),this.variant=""}render(){return i`
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
    `}};p.styles=[v(I)];D([b()],p.prototype,"variant",2);p=D([f("gds-table-cell")],p);p.define();const E=":host{display:contents}";var N=Object.defineProperty,K=Object.getOwnPropertyDescriptor,_=(t,e,a,o)=>{for(var s=o>1?void 0:o?K(e,a):e,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(o?l(e,a,s):l(s))||s);return o&&s&&N(e,a,s),s};let u=class extends h{constructor(){super(...arguments),this.variant=""}render(){return i`
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
    `}};u.styles=[v(E)];_([b()],u.prototype,"variant",2);u=_([f("gds-table-row")],u);u.define();var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,m=(t,e,a,o)=>{for(var s=o>1?void 0:o?G(e,a):e,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(o?l(e,a,s):l(s))||s);return o&&s&&F(e,a,s),s};let g=class extends h{constructor(){super(...arguments),this.columns=x,this.data=T,this.sortConfig={column:null,direction:"asc"},this.draggedColumnKey=null}handleSort(t){var e;(e=this.columns.find(a=>a.key===t))!=null&&e.sortable&&(this.sortConfig.column===t?this.sortConfig={column:t,direction:this.sortConfig.direction==="asc"?"desc":"asc"}:this.sortConfig={column:t,direction:"asc"},this.sortData())}sortData(){this.sortConfig.column&&(this.data=[...this.data].sort((t,e)=>{const a=this.columns.findIndex(r=>r.key===this.sortConfig.column);if(a===-1)return 0;const o=t.cells[a].value,s=e.cells[a].value;if(this.sortConfig.column==="balance"){const r=parseFloat(o.replace(/[^0-9.-]+/g,"")),l=parseFloat(s.replace(/[^0-9.-]+/g,""));return this.sortConfig.direction==="asc"?r-l:l-r}return this.sortConfig.direction==="asc"?o.localeCompare(s):s.localeCompare(o)}),this.requestUpdate())}renderIcon(t,e,a){switch(t){case"bank":return i`<gds-icon-bank
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-bank>`;case"pin":return i`<gds-icon-pin
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-pin>`;case"ai":return i`<gds-icon-ai
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-ai>`;case"dot-grid-two":return i`<gds-icon-dot-grid-two
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-dot-grid-two>`;case"plus":return i`<gds-icon-plus-small
          slot=${e||"lead"}
          size=${a||"m"}
        ></gds-icon-plus-small>`;default:return d}}handleColumnDragStart(t,e){var a,o;(a=this.columns.find(s=>s.key===e))!=null&&a.dragaggable&&(this.draggedColumnKey=e,(o=t.dataTransfer)==null||o.setData("text/plain",e))}handleColumnDragOver(t,e){var a;!this.draggedColumnKey||!((a=this.columns.find(o=>o.key===e))!=null&&a.dragaggable)||t.preventDefault()}handleColumnDrop(t,e){var l;if(t.preventDefault(),!this.draggedColumnKey||this.draggedColumnKey===e||!((l=this.columns.find(n=>n.key===e))!=null&&l.dragaggable))return;const a=this.columns.findIndex(n=>n.key===this.draggedColumnKey),o=this.columns.findIndex(n=>n.key===e),s=[...this.columns],[r]=s.splice(a,1);s.splice(o,0,r),this.columns=s,this.data=this.data.map(n=>({...n,cells:n.cells.map((V,z)=>n.cells[this.columns.findIndex(O=>O.key===x[z].key)])})),this.draggedColumnKey=null,this.requestUpdate()}handleColumnDragEnd(){this.draggedColumnKey=null}render(){return i`
      <gds-flex flex-direction="column" gap="s">
        <gds-flex data-title="Filter" flex="1" width="100%">
          <gds-flex data-title="Search" gap="s" z-index="1">
            <gds-input
              size="small"
              plain
              placeholder="Search data"
              clearable
              width="400px"
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
            >
              <gds-option isplaceholder>Filter by branches</gds-option>
              <gds-option value="columns">
                <span>Branch One</span>
                <gds-badge variant="notice" size="small" rounded>
                  24
                </gds-badge>
              </gds-option>
              <gds-option value="branch-two">
                <span>Branch Two</span>
                <gds-badge variant="notice" size="small" rounded>
                  24
                </gds-badge>
              </gds-option>
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
            ${this.columns.map(t=>i`
                <gds-table-cell>
                  ${t.dragaggable?i`<gds-icon-dot-grid-two
                        slot="lead"
                      ></gds-icon-dot-grid-two>`:d}
                  ${t.label}
                  ${t.sortable?i`
                        <gds-button
                          slot="trail"
                          size="xs"
                          rank=${t.sortable?"tertiary":"primary"}
                          class=${this.sortConfig.column===t.key?`sort-${this.sortConfig.direction}`:""}
                          @click=${()=>t.sortable&&this.handleSort(t.key)}
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
          ${this.data.map(t=>i`
              <gds-table-row
                ?sortable=${t.sortable}
                ?selectable=${t.selectable}
                href=${t.href||""}
                variant=${t.variant||""}
              >
                ${t.sortable?i`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `:d}

                <input type="checkbox" slot="lead" />

                ${t.cells.map(e=>i`
                    <gds-table-cell variant=${e.variant||""}>
                      ${e.icon?this.renderIcon(e.icon.name,e.icon.slot,e.icon.size):d}
                      ${e.badge?i`
                            <gds-badge
                              variant=${e.badge.variant}
                              size="small"
                              slot="lead"
                            >
                              ${e.badge.label}
                            </gds-badge>
                          `:d}
                      ${e.value}
                      ${e.supportingText?i`
                            <span slot="supporting-text"
                              >${e.supportingText}</span
                            >
                          `:d}
                      ${e.options?i`
                            <gds-context-menu slot="trail">
                              ${e.options.map(a=>i`
                                  <gds-menu-item>${a.label}</gds-menu-item>
                                `)}
                            </gds-context-menu>
                          `:d}
                    </gds-table-cell>
                  `)}
                ${t.href?i`
                      <gds-icon-chevron-right
                        slot="trail"
                      ></gds-icon-chevron-right>
                    `:i`
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
    `}};g.styles=[P,v(S)];m([b({type:Array})],g.prototype,"columns",2);m([b({type:Array})],g.prototype,"data",2);m([A()],g.prototype,"sortConfig",2);m([A()],g.prototype,"draggedColumnKey",2);g=m([f("gds-table")],g);g.define();const Ue={title:"Components/Table",component:"gds-table",tags:["autodocs"]},U={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...U,name:"table"};var y,w,$,C,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...($=(w=c.parameters)==null?void 0:w.docs)==null?void 0:$.source},description:{story:"TODO: Add documentation",...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};const Ve=["Table"];export{c as Table,Ve as __namedExportsOrder,Ue as default};
