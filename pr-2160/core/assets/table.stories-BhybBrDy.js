import{r as v}from"./lit-element-Bx14lxc-.js";import{n as w,G as c,h as p,g as m}from"./custom-element-scoping-b4c89-hi.js";import{t as _}from"./tokens.style-OWC-W9l-.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./flex-DvFpiQV2.js";import"./input-C-H0gf07.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./search-menu-CmKHAQCf.js";import"./pin-B9RHIrzB.js";import"./text-wRgsyUTH.js";import"./grid-Kq-JYBKs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dropdown.component-D7ogdPVz.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./if-defined-CVqwUuaf.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./button.component-DxfU86xO.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./cross-large.component-CW5O8emt.js";import"./chevron-right.component-B3rpjwFs.js";import"./text.component-CLfG34IB.js";const O="",P=":host{display:contents}";var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,y=(d,e,o,s)=>{for(var t=s>1?void 0:s?j(e,o):e,l=d.length-1,r;l>=0;l--)(r=d[l])&&(t=(s?r(e,o,t):r(t))||t);return s&&t&&$(e,o,t),t};let a=class extends c{constructor(){super(...arguments),this.variant=""}render(){return p`
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
    `}};a.styles=[v(P)];y([w()],a.prototype,"variant",2);a=y([m("gds-table-cell")],a);a.define();var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,z=(d,e,o,s)=>{for(var t=s>1?void 0:s?T(e,o):e,l=d.length-1,r;l>=0;l--)(r=d[l])&&(t=(s?r(e,o,t):r(t))||t);return s&&t&&D(e,o,t),t};let n=class extends c{constructor(){super(...arguments),this.variant=""}render(){return p`
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
    `}};z([w()],n.prototype,"variant",2);n=z([m("gds-table-row")],n);n.define();var C=Object.defineProperty,F=Object.getOwnPropertyDescriptor,H=(d,e,o,s)=>{for(var t=s>1?void 0:s?F(e,o):e,l=d.length-1,r;l>=0;l--)(r=d[l])&&(t=(s?r(e,o,t):r(t))||t);return s&&t&&C(e,o,t),t};let g=class extends c{render(){return p`
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
            <gds-table-cell>
              <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
              Head column
              <gds-button slot="trail" size="xs" rank="tertiary">
                <gds-icon-arrow-bottom-top size="s"></gds-icon-arrow-bottom-top>
              </gds-button>
            </gds-table-cell>
            <gds-table-cell>
              <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
              Head column
              <gds-button slot="trail" size="xs" rank="tertiary">
                <gds-icon-arrow-bottom-top size="s"></gds-icon-arrow-bottom-top>
              </gds-button>
            </gds-table-cell>
            <gds-table-cell> Unsorted column </gds-table-cell>
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
              With cell options
              <gds-context-menu slot="trail">
                <gds-menu-item>Action 1</gds-menu-item>
                <gds-menu-item>Action 2</gds-menu-item>
                <gds-menu-item>Action 3</gds-menu-item>
              </gds-context-menu>
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
    `}};g.styles=[_,v(O)];g=H([m("gds-table")],g);g.define();const Ct={title:"Components/Table",component:"gds-table",tags:["autodocs"]},A={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...A,name:"table"};var b,u,x,h,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"TODO: Add documentation",...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const Ft=["Table"];export{i as Table,Ft as __namedExportsOrder,Ct as default};
