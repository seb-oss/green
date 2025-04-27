import{r as h,E as d}from"./lit-element-Bx14lxc-.js";import{n as b,G as f,h as r,g as x,r as y}from"./custom-element-scoping-b4c89-hi.js";import{t as z}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const E=[{key:"account",label:"Account",sortable:!0,dragaggable:!1,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,dragaggable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,dragaggable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!1,dragaggable:!1,filterable:!0,visible:!0}],P=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"}},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:" ",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],S=".dragging{opacity:.5}gds-table-cell[draggable=true]{cursor:grab}gds-table-cell[draggable=true]:active{cursor:grabbing}",T=":host{display:contents}[draggable]{cursor:grab}";var B=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=(t,e,s,o)=>{for(var a=o>1?void 0:o?j(e,s):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(a=(o?i(e,s,a):i(a))||a);return o&&a&&B(e,s,a),a};let c=class extends f{constructor(){super(...arguments),this.variant="",this.draggable=!1}render(){return r`
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
    `}};c.styles=[h(T)];w([b()],c.prototype,"variant",2);w([b({type:Boolean})],c.prototype,"draggable",2);c=w([x("gds-table-cell")],c);c.define();const I=":host{display:contents}";var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,A=(t,e,s,o)=>{for(var a=o>1?void 0:o?F(e,s):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(a=(o?i(e,s,a):i(a))||a);return o&&a&&N(e,s,a),a};let m=class extends f{constructor(){super(...arguments),this.variant=""}render(){return r`
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
    `}};m.styles=[h(I)];A([b()],m.prototype,"variant",2);m=A([x("gds-table-row")],m);m.define();var G=Object.defineProperty,L=Object.getOwnPropertyDescriptor,p=(t,e,s,o)=>{for(var a=o>1?void 0:o?L(e,s):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(a=(o?i(e,s,a):i(a))||a);return o&&a&&G(e,s,a),a};let n=class extends f{constructor(){super(...arguments),this.columns=E,this.data=P,this.sortConfig={column:null,direction:"asc"},this.draggedColumn=null,this.dragOverColumn=null}handleSort(t){var e;(e=this.columns.find(s=>s.key===t))!=null&&e.sortable&&(this.sortConfig.column===t?this.sortConfig={column:t,direction:this.sortConfig.direction==="asc"?"desc":"asc"}:this.sortConfig={column:t,direction:"asc"},this.sortData())}sortData(){this.sortConfig.column&&(this.data=[...this.data].sort((t,e)=>{const s=this.columns.findIndex(l=>l.key===this.sortConfig.column);if(s===-1)return 0;const o=t.cells[s].value,a=e.cells[s].value;if(this.sortConfig.column==="balance"){const l=parseFloat(o.replace(/[^0-9.-]+/g,"")),i=parseFloat(a.replace(/[^0-9.-]+/g,""));return this.sortConfig.direction==="asc"?l-i:i-l}return this.sortConfig.direction==="asc"?o.localeCompare(a):a.localeCompare(o)}),this.requestUpdate())}renderIcon(t,e,s){switch(t){case"bank":return r`<gds-icon-bank
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-bank>`;case"pin":return r`<gds-icon-pin
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-pin>`;case"ai":return r`<gds-icon-ai
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-ai>`;case"dot-grid-two":return r`<gds-icon-dot-grid-two
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-dot-grid-two>`;case"plus":return r`<gds-icon-plus-small
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-plus-small>`;default:return d}}handleDragStart(t,e){var o;this.draggedColumn=e,t.target.classList.add("dragging"),(o=t.dataTransfer)==null||o.setData("text/plain",e)}handleDragOver(t,e){t.preventDefault(),this.dragOverColumn=e}handleDragEnd(t){t.target.classList.remove("dragging"),this.draggedColumn=null,this.dragOverColumn=null}handleDrop(t,e){if(t.preventDefault(),!this.draggedColumn||this.draggedColumn===e)return;const s=this.columns.findIndex(g=>g.key===this.draggedColumn),o=this.columns.findIndex(g=>g.key===e),a=[...this.columns],[l]=a.splice(s,1);a.splice(o,0,l);const i=this.data.map(g=>{const v=[...g.cells],[_]=v.splice(s,1);return v.splice(o,0,_),{...g,cells:v}});this.columns=a,this.data=i,this.draggedColumn=null,this.dragOverColumn=null,this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this.columns}}))}render(){return r`
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

            ${this.columns.map(t=>r`
                <gds-table-cell
                  ?draggable=${t.dragaggable}
                  class=${this.draggedColumn===t.key?"dragging":""}
                  @cell-dragstart=${e=>this.handleDragStart(e.detail,t.key)}
                  @cell-dragover=${e=>this.handleDragOver(e.detail,t.key)}
                  @cell-dragend=${e=>this.handleDragEnd(e.detail)}
                  @cell-drop=${e=>this.handleDrop(e.detail,t.key)}
                >
                  ${t.dragaggable?r`
                        <gds-icon-dot-grid-two
                          slot="lead"
                        ></gds-icon-dot-grid-two>
                      `:d}
                  ${t.label}
                  ${t.sortable?r`
                        <gds-button
                          slot="trail"
                          size="xs"
                          rank="tertiary"
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
          ${this.data.map(t=>r`
              <gds-table-row
                ?sortable=${t.sortable}
                ?selectable=${t.selectable}
                href=${t.href||""}
                variant=${t.variant||""}
              >
                ${t.sortable?r`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `:d}

                <input type="checkbox" slot="lead" />

                ${t.cells.map(e=>r`
                    <gds-table-cell variant=${e.variant||""}>
                      ${e.icon?this.renderIcon(e.icon.name,e.icon.slot,e.icon.size):d}
                      ${e.badge?r`
                            <gds-badge
                              variant=${e.badge.variant}
                              size="small"
                              slot="lead"
                            >
                              ${e.badge.label}
                            </gds-badge>
                          `:d}
                      ${e.value}
                      ${e.supportingText?r`
                            <span slot="supporting-text"
                              >${e.supportingText}</span
                            >
                          `:d}
                      ${e.options?r`
                            <gds-context-menu slot="trail">
                              ${e.options.map(s=>r`
                                  <gds-menu-item>${s.label}</gds-menu-item>
                                `)}
                            </gds-context-menu>
                          `:d}
                    </gds-table-cell>
                  `)}
                ${t.href?r`
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
    `}};n.styles=[z,h(S)];p([b({type:Array})],n.prototype,"columns",2);p([b({type:Array})],n.prototype,"data",2);p([y()],n.prototype,"sortConfig",2);p([y()],n.prototype,"draggedColumn",2);p([y()],n.prototype,"dragOverColumn",2);n=p([x("gds-table")],n);n.define();const Le={title:"Components/Table",component:"gds-table",tags:["autodocs"]},V={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},u={...V,name:"table"};var $,C,k,D,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:"TODO: Add documentation",...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};const Ve=["Table"];export{u as Table,Ve as __namedExportsOrder,Le as default};
