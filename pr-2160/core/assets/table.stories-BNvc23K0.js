import{r as b,E as n}from"./lit-element-Bx14lxc-.js";import{n as u,G as m,h as o,g as v}from"./custom-element-scoping-b4c89-hi.js";import{t as z}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./bank-fmmVaPb7.js";import"./pin-B9RHIrzB.js";import"./plus-small-DJRaoZXW.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const k=[{key:"account",label:"Account",sortable:!0,filterable:!0,visible:!0},{key:"type",label:"Type",sortable:!0,filterable:!0,visible:!0},{key:"balance",label:"Balance",sortable:!0,filterable:!1,visible:!0},{key:"status",label:"Status",sortable:!0,filterable:!0,visible:!0},{key:"branch",label:"Branch",sortable:!0,filterable:!0,visible:!0}],O=[{id:"1",sortable:!0,selectable:!0,cells:[{value:"Personal Savings",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Today",editable:!0},{value:"Savings Account",badge:{label:"Savings",variant:"notice"}},{value:"50,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Stockholm Central",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"2",sortable:!0,selectable:!0,cells:[{value:"Business Account Pro",icon:{name:"bank",slot:"lead"},supportingText:"Last transaction: Yesterday",editable:!0},{value:"Business Account",badge:{label:"Business",variant:"notice"}},{value:"250,000 kr",variant:"positive"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Gothenburg Main",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"3",sortable:!0,selectable:!0,cells:[{value:"Investment Portfolio",icon:{name:"bank",slot:"lead"},supportingText:"Last updated: 2 days ago",editable:!0},{value:"Investment Account",badge:{label:"Investment",variant:"warning"}},{value:"150,000 kr",variant:"warning"},{value:"Under Review",badge:{label:"Review",variant:"warning"}},{value:"Malmö Branch",icon:{name:"pin",slot:"lead"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]}]},{id:"4",sortable:!0,selectable:!0,cells:[{value:"Student Savings",icon:{name:"bank",slot:"lead"},supportingText:"Student benefits applied",editable:!0},{value:"Student Account",badge:{label:"Student",variant:"notice"},options:[{label:"View Details",action:"view"},{label:"Edit",action:"edit"}]},{value:"15,000 kr",variant:"notice"},{value:"Active",badge:{label:"Active",variant:"positive"}},{value:"Uppsala Campus",icon:{name:"pin",slot:"lead"}}]},{id:"5",cells:[{value:"Open New Account",icon:{name:"plus",slot:"lead"},supportingText:"Click to start application"},{value:"New Account",badge:{label:"New",variant:"positive"}},{value:"--",variant:"notice"},{value:"Available",badge:{label:"Available",variant:"notice"}},{value:"All Branches",icon:{name:"pin",slot:"lead"}}]}],P="",T=":host{display:contents}";var D=Object.defineProperty,S=Object.getOwnPropertyDescriptor,A=(a,e,s,i)=>{for(var t=i>1?void 0:i?S(e,s):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(i?r(e,s,t):r(t))||t);return i&&t&&D(e,s,t),t};let g=class extends m{constructor(){super(...arguments),this.variant=""}render(){return o`
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
    `}};g.styles=[b(T)];A([u()],g.prototype,"variant",2);g=A([v("gds-table-cell")],g);g.define();const C=":host{display:contents}";var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,_=(a,e,s,i)=>{for(var t=i>1?void 0:i?B(e,s):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(i?r(e,s,t):r(t))||t);return i&&t&&j(e,s,t),t};let p=class extends m{constructor(){super(...arguments),this.variant=""}render(){return o`
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
    `}};p.styles=[b(C)];_([u()],p.prototype,"variant",2);p=_([v("gds-table-row")],p);p.define();var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=(a,e,s,i)=>{for(var t=i>1?void 0:i?G(e,s):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(i?r(e,s,t):r(t))||t);return i&&t&&E(e,s,t),t};let d=class extends m{constructor(){super(...arguments),this.columns=k,this.data=O}renderIcon(a,e,s){switch(a){case"bank":return o`<gds-icon-bank
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-bank>`;case"pin":return o`<gds-icon-pin
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-pin>`;case"ai":return o`<gds-icon-ai
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-ai>`;case"dot-grid-two":return o`<gds-icon-dot-grid-two
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-dot-grid-two>`;case"plus":return o`<gds-icon-plus-small
          slot=${e||"lead"}
          size=${s||"m"}
        ></gds-icon-plus-small>`;default:return n}}render(){return o`
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
            ${this.columns.map(a=>o`
                <gds-table-cell>
                  <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
                  ${a.label}
                  ${a.sortable?o`
                        <gds-button slot="trail" size="xs" rank="tertiary">
                          <gds-icon-arrow-bottom-top
                            size="s"
                          ></gds-icon-arrow-bottom-top>
                        </gds-button>
                      `:n}
                </gds-table-cell>
              `)}
          </gds-table-row>
          <!-- Data Rows -->
          ${this.data.map(a=>o`
              <gds-table-row
                ?sortable=${a.sortable}
                ?selectable=${a.selectable}
                href=${a.href||""}
                variant=${a.variant||""}
              >
                ${a.sortable?o`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `:n}

                <input type="checkbox" slot="lead" />

                ${a.cells.map(e=>o`
                    <gds-table-cell variant=${e.variant||""}>
                      ${e.icon?this.renderIcon(e.icon.name,e.icon.slot,e.icon.size):n}
                      ${e.badge?o`
                            <gds-badge
                              variant=${e.badge.variant}
                              size="small"
                              slot="lead"
                            >
                              ${e.badge.label}
                            </gds-badge>
                          `:n}
                      ${e.value}
                      ${e.supportingText?o`
                            <span slot="supporting-text"
                              >${e.supportingText}</span
                            >
                          `:n}
                      ${e.options?o`
                            <gds-context-menu slot="trail">
                              ${e.options.map(s=>o`
                                  <gds-menu-item>${s.label}</gds-menu-item>
                                `)}
                            </gds-context-menu>
                          `:n}
                    </gds-table-cell>
                  `)}
                ${a.href?o`
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
    `}};d.styles=[z,b(P)];h([u({type:Array})],d.prototype,"columns",2);h([u({type:Array})],d.prototype,"data",2);d=h([v("gds-table")],d);d.define();const Ge={title:"Components/Table",component:"gds-table",tags:["autodocs"]},N={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...N,name:"table"};var x,f,w,y,$;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"TODO: Add documentation",...($=(y=c.parameters)==null?void 0:y.docs)==null?void 0:$.description}}};const Ne=["Table"];export{c as Table,Ne as __namedExportsOrder,Ge as default};
