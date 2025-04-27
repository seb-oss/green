import{r as f}from"./lit-element-Bx14lxc-.js";import{n as O,G as n,h as g,g as c}from"./custom-element-scoping-b4c89-hi.js";import{t as P}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./input-C-H0gf07.js";import"./card-G_rzxrp_.js";import"./div-62vir6xI.js";import"./button-DLS0bV1b.js";import"./filter-DyFtmNbr.js";import"./chevron-right-CEmHJbUE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./text.component-CLfG34IB.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";const z=".gds-table{display:flex;flex-direction:column;gap:10px;padding:20px}.gds-table-content{display:flex;flex-direction:column;border-radius:8px;border:1px solid #ccc}",$=":host{display:contents}";var D=Object.defineProperty,j=Object.getOwnPropertyDescriptor,_=(d,t,l,s)=>{for(var e=s>1?void 0:s?j(t,l):t,o=d.length-1,r;o>=0;o--)(r=d[o])&&(e=(s?r(t,l,e):r(e))||e);return s&&e&&D(t,l,e),e};let i=class extends n{constructor(){super(...arguments),this.variant=""}render(){return g`
      <gds-flex
        align-items="center"
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
    `}};i.styles=[f($)];_([O()],i.prototype,"variant",2);i=_([c("gds-table-cell")],i);i.define();var T=Object.defineProperty,C=Object.getOwnPropertyDescriptor,F=(d,t,l,s)=>{for(var e=s>1?void 0:s?C(t,l):t,o=d.length-1,r;o>=0;o--)(r=d[o])&&(e=(s?r(t,l,e):r(e))||e);return s&&e&&T(t,l,e),e};let x=class extends n{render(){return g`
      <gds-flex
        min-width="100%"
        position="relative"
        borde-color="secondary"
        border-width="0 0 4xs 0"
        align-items="center"
        min-height="max-content"
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
    `}};x=F([c("gds-table-row")],x);x.define();const G="";var H=Object.defineProperty,E=Object.getOwnPropertyDescriptor,S=(d,t,l,s)=>{for(var e=s>1?void 0:s?E(t,l):t,o=d.length-1,r;o>=0;o--)(r=d[o])&&(e=(s?r(t,l,e):r(e))||e);return s&&e&&H(t,l,e),e};let p=class extends n{render(){return g`
      <gds-flex z-index="12" position="relative">
        <gds-flex margin="0 auto 0 0" gap="s">
          <gds-input
            size="small"
            plain
            placeholder="Search data"
            clearable
            width="400px"
          >
            <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
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
              <gds-badge variant="notice" size="small" rounded> 24 </gds-badge>
            </gds-option>
            <gds-option value="branch-two">
              <span>Branch Two</span>
              <gds-badge variant="notice" size="small" rounded> 24 </gds-badge>
            </gds-option>
          </gds-dropdown>
        </gds-flex>
        <gds-flex align-items="center" gap="m">
          <gds-flex gap="xs">
            <gds-text tag="small">Compact</gds-text>
            <input type="checkbox" />
          </gds-flex>
          <gds-dropdown size="small" searchable plain>
            <gds-option value="columns">Columns</gds-option>
          </gds-dropdown>
        </gds-flex>
      </gds-flex>
    `}};p.styles=[f(G)];p=S([c("gds-table-filter")],p);p.define();const A=".gds-table-footer{display:flex;align-items:center;width:100%}";var B=Object.defineProperty,R=Object.getOwnPropertyDescriptor,L=(d,t,l,s)=>{for(var e=s>1?void 0:s?R(t,l):t,o=d.length-1,r;o>=0;o--)(r=d[o])&&(e=(s?r(t,l,e):r(e))||e);return s&&e&&B(t,l,e),e};let m=class extends n{render(){return g`
      <div class="gds-table-footer">
        <div class="footer-selected">0 of 100 row(s) selected.</div>
        <gds-flex margin="0 0 0 auto" gap="s">
          <gds-card
            flex-direction="row"
            padding="2xs 2xs 2xs s"
            gap="xs"
            align-items="center"
            align-items="center"
            variant="secondary"
          >
            <gds-flex flex="0 1 auto">
              <gds-text tag="small"> Rows per page </gds-text>
            </gds-flex>
            <gds-flex>
              <gds-dropdown size="small" searchable plain>
                <gds-option value="10"> 10 </gds-option>
                <gds-option value="20"> 10 </gds-option>
                <gds-option value="40"> 10 </gds-option>
                <gds-option value="100"> 10 </gds-option>
                <gds-option value="1000"> 10 </gds-option>
              </gds-dropdown>
            </gds-flex>
          </gds-card>

          <gds-card
            flex-direction="row"
            align-items="center"
            padding="xs m"
            gap="xs"
          >
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
            </gds-button>
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-text tag="small">Page 1 of 10</gds-text>
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
            <gds-button size="xs" rank="tertiary">
              <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
            </gds-button>
          </gds-card>
        </gds-flex>
      </div>
    `}};m.styles=[f(A)];m=L([c("gds-table-footer")],m);m.define();var N=Object.defineProperty,W=Object.getOwnPropertyDescriptor,q=(d,t,l,s)=>{for(var e=s>1?void 0:s?W(t,l):t,o=d.length-1,r;o>=0;o--)(r=d[o])&&(e=(s?r(t,l,e):r(e))||e);return s&&e&&N(t,l,e),e};let b=class extends n{render(){return g`
      <div class="gds-table">
        <gds-table-filter></gds-table-filter>
        <div class="gds-table-content">
          <gds-table-row class="table-head">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
              Head column
              <gds-button slot="trail" size="xs" rank="tertiary">
                <gds-icon-filter></gds-icon-filter>
              </gds-button>
            </gds-table-cell>
          </gds-table-row>
          <gds-table-row href="#">
            <input type="checkbox" slot="lead" />
            <gds-table-cell> Linked row </gds-table-cell>
            <gds-icon-chevron-right slot="trail"></gds-icon-chevron-right>
          </gds-table-row>
          <gds-table-row data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-icon-car slot="lead"></gds-icon-car>
              Hello cell with custom select
              <span slot="supporting-text">Supporting text</span>
            </gds-table-cell>
            <gds-table-cell>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              Hello cell
            </gds-table-cell>
            <gds-table-cell>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              Hello cell
              <gds-button size="xs" rank="tertiary" slot="trail">
                ...
              </gds-button>
            </gds-table-cell>
            <gds-button slot="trail" rank="tertiary" size="xs">
              <gds-icon-dot-grid-one-vertical
                size="s"
              ></gds-icon-dot-grid-one-vertical>
            </gds-button>
          </gds-table-row>
          <gds-table-row sortable selectable data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell variant="notice">
              <gds-badge variant="notice" slot="lead" size="small">
                Docs
              </gds-badge>
              And this is just regular information
            </gds-table-cell>
            <gds-table-cell variant="positive">
              <gds-badge variant="positive" slot="lead" size="small">
                New
              </gds-badge>
              This can be something new
            </gds-table-cell>
            <gds-table-cell variant="warning">
              <gds-badge variant="warning" slot="lead" size="small">
                Deprecated
              </gds-badge>
              With a badge
            </gds-table-cell>
          </gds-table-row>
          <gds-table-row sortable selectable data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell> Hello cell </gds-table-cell>
            <gds-table-cell editable>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              Hello cell
            </gds-table-cell>
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
        </div>
        <gds-table-footer></gds-table-footer>
      </div>
    `}};b.styles=[P,f(z)];b=q([c("gds-table")],b);b.define();const We={title:"Components/Table",component:"gds-table",tags:["autodocs"]},I={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},a={...I,name:"table"};var u,v,h,w,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:"TODO: Add documentation",...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};const qe=["Table"];export{a as Table,qe as __namedExportsOrder,We as default};
