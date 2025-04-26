import{r as p}from"./lit-element-Bx14lxc-.js";import{G as c,h as m,g as b}from"./custom-element-scoping-b4c89-hi.js";import{t as w}from"./tokens.style-OWC-W9l-.js";import"./input-C-H0gf07.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./card-G_rzxrp_.js";import"./div-62vir6xI.js";import"./context-menu-DLDKEUUm.js";import"./menu-item-ZoaDBsAY.js";import"./magnifying-glass-Ds0w1W1K.js";import"./text-edit-C2z8pwi0.js";import"./arrow-left-CdUX3wGx.js";import"./arrow-right-DFW4NlNo.js";import"./chevron-right-CABFgpIH.js";import"./dot-grid-two-CXO_K-1g.js";import"./bank-fmmVaPb7.js";import"./cell-Dzboj_By.js";import"./row-DN_kdKbx.js";import"./button-DLS0bV1b.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./when-BR7zwNJC.js";import"./form-control-host.style-GwSQv2RY.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-Ckr_5-pT.js";import"./watch-tFciLXSI.js";import"./form-control-header.component-BHPTElKC.js";import"./badge.component-BbHeY5MQ.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./flex.component-CYboTd6A.js";import"./div.component-DlGsFHOd.js";import"./triangle-exclamation.component-7Z9_MCa_.js";import"./icon-BISRwovF.js";import"./button.component-DxfU86xO.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BkDO6s2X.js";import"./cross-large.component-CW5O8emt.js";import"./dropdown.component-D7ogdPVz.js";import"./floating-ui.dom-BmFOYU71.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-FAjIHkMD.js";import"./chevron-bottom.component-DXzT4jUC.js";import"./popover.component-Dm8mNWll.js";import"./cross-small.component-CbU4_NWn.js";import"./menu-heading.component-DVZTfZQC.js";import"./chevron-left.component-Cg969HFC.js";import"./chevron-right.component-BtEd6I0J.js";const y=".gds-table{display:flex;flex-direction:column;gap:10px;padding:20px}.gds-table .gds-table-filter{display:flex;gap:10px;z-index:2}.gds-table .gds-table-filter .gds-filter-content{display:flex;align-items:center;gap:10px;width:max-content;margin-right:auto}.gds-table .gds-table-filter .gds-filter-content>*{width:240px}.gds-table .gds-table-content{display:grid;align-items:top;border:1px solid #ccc;border-radius:8px}.gds-table .gds-table-head{border-bottom:1px solid #ccc}.gds-table .gds-table-head .gds-head-select{display:flex;align-items:center;justify-content:center;width:40px;height:40px}.gds-table .gds-table-head .gds-table-head-column{display:flex;align-items:center;justify-content:space-between;flex:1;border-left:1px solid #ccc;padding-inline:20px}.gds-table .gds-table-head .gds-table-head-column:hover{background-color:#f0f0f0}.gds-table .gds-table-row{display:grid;grid-template-columns:40px repeat(2,2fr) repeat(2,1fr) 40px;position:relative;border-bottom:1px solid #ccc}.gds-table .gds-table-row .gds-row-select,.gds-table .gds-table-row .gds-row-options{display:flex;align-items:center;justify-content:center;width:40px;height:40px}.gds-table .gds-table-row .gds-cell{display:flex;align-items:center;justify-content:space-between;flex:1;padding-inline:20px;border-left:1px solid #ccc}.gds-table .gds-table-row .gds-cell .cell-content{display:flex;align-items:center;gap:10px;width:max-content}.gds-table .gds-table-row .gds-cell-edit{opacity:0;visibility:hidden;transition:all .24s;translate:4px 0}.gds-cell:hover :is(.gds-table .gds-table-row .gds-cell-edit){opacity:1;visibility:visible;translate:0 0}.gds-table .gds-table-row .gds-row-drag{display:flex;align-items:center;position:absolute;left:-20px;height:100%;top:0;bottom:0;margin-block:auto}.gds-table .gds-table-footer{display:flex;align-content:center}.gds-table .gds-table-footer .footer-actions{display:flex;align-items:center;gap:20px;margin-left:auto}.gds-table .gds-table-footer .footer-actions .footer-actions-rows{display:flex;align-items:center;width:max-content;gap:10px}.gds-table .gds-table-footer .footer-actions .footer-actions-rows .rows-dropdown{max-width:60px}",_="";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,j=(i,t,o,s)=>{for(var e=s>1?void 0:s?P(t,o):t,l=i.length-1,d;l>=0;l--)(d=i[l])&&(e=(s?d(t,o,e):d(e))||e);return s&&e&&O(t,o,e),e};let r=class extends c{render(){return m`
      <div class="gds-table-filter">
        <div class="gds-filter-content">
          <gds-input size="small" plain placeholder="Search data" clearable>
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
        </div>
        <div class="gds-filter-columns">
          <gds-dropdown size="small" searchable plain>
            <gds-option value="columns">Columns</gds-option>
          </gds-dropdown>
        </div>
      </div>
    `}};r.styles=[p(_)];r=j([b("gds-table-filter")],r);r.define();const z="";var C=Object.defineProperty,D=Object.getOwnPropertyDescriptor,T=(i,t,o,s)=>{for(var e=s>1?void 0:s?D(t,o):t,l=i.length-1,d;l>=0;l--)(d=i[l])&&(e=(s?d(t,o,e):d(e))||e);return s&&e&&C(t,o,e),e};let n=class extends c{render(){return m`
      <div class="gds-table-footer">
        <gds-flex flex="1"> 0 of 100 row(s) selected. </gds-flex>
        <div class="footer-actions">
          <span>Number of rows</span>
          <div class="footer-actions-rows">
            <gds-dropdown size="small" searchable plain class="rows-dropdown">
              <gds-option value="10"> 10 </gds-option>
              <gds-option value="20"> 10 </gds-option>
              <gds-option value="40"> 10 </gds-option>
              <gds-option value="100"> 10 </gds-option>
              <gds-option value="1000"> 10 </gds-option>
            </gds-dropdown>
          </div>

          <gds-flex
            flex="1"
            align-items="center"
            justify-content="space-between"
          >
            <span>1-10 of 100</span>
          </gds-flex>
          <gds-flex>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
            </gds-button>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
            </gds-button>
          </gds-flex>
        </div>
      </div>
    `}};n.styles=[p(z)];n=T([b("gds-table-footer")],n);n.define();var $=Object.defineProperty,G=Object.getOwnPropertyDescriptor,F=(i,t,o,s)=>{for(var e=s>1?void 0:s?G(t,o):t,l=i.length-1,d;l>=0;l--)(d=i[l])&&(e=(s?d(t,o,e):d(e))||e);return s&&e&&$(t,o,e),e};let g=class extends c{render(){return m`
      <div class="gds-table">
        <gds-table-filter></gds-table-filter>
        <div class="gds-table-content">
          <div class="gds-table-row gds-table-head">
            <div class="gds-row-select">
              <input type="checkbox" />
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Title</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Services</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Branches</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Street</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
          </div>
          <gds-table-row href="#">
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
          <gds-table-row hasOptions>
            <gds-table-cell> Hello cell </gds-table-cell>

            <!-- Custom options menu -->
            <div slot="options">
              <gds-dropdown>
                <gds-option>Custom Option 1</gds-option>
                <gds-option>Custom Option 2</gds-option>
              </gds-dropdown>
            </div>
          </gds-table-row>
          <gds-table-row sortable selectable>
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
        </div>
        <gds-table-footer></gds-table-footer>
      </div>
    `}};g.styles=[w,p(y)];g=F([b("gds-table")],g);g.define();const Ae={title:"Components/Table",component:"gds-table",tags:["autodocs"]},S={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},a={...S,name:"table"};var f,v,u,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'table'
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source},description:{story:"TODO: Add documentation",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};const Ne=["Table"];export{a as Table,Ne as __namedExportsOrder,Ae as default};
