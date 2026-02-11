import{x as a}from"./iframe-DBW64OS2.js";import"./pagination-ClLRedSa.js";import"./card-CJBCwjcV.js";import"./text-BJG-x9Wt.js";import"./flex-DPzRndwJ.js";import"./localized-decorator-CxexuxZQ.js";import"./popover.component-Btoenqba.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CX6M_NkQ.js";import"./icon.component-POUIiQrW.js";import"./context-menu.component-CL2QIdnf.js";import"./unwrap-slots-Btaovt9M.js";import"./ref-DfF7RndY.js";import"./dot-grid-one-horizontal-DEb3PvIw.js";import"./menu-heading.component-D4P2W_mR.js";import"./dropdown.component-BLeUE6vL.js";import"./query-async-Duuabrga.js";import"./form-control-host.style-B5UxD-H-.js";import"./form-control-header.component-ByLX1fbm.js";import"./badge.component-Ci_7cTjN.js";import"./flex.component-xcxbZ-V6.js";import"./triangle-exclamation.component-D3GwV0Zw.js";import"./card.component-Bji3JkL7.js";import"./checkmark.component-CA8xwvBC.js";import"./rbcb-toggle.template-76NSMSGg.js";import"./chevron-bottom.component-M4FqUg7G.js";import"./chevron-right-small.component-DExeMHZQ.js";import"./chevron-right.component-BRry_L0w.js";import"./input.component-7OLaTXiB.js";import"./textarea.component-BAVlFq7s.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CTHBRRb4.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page>${t.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows>${t.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${t.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination
          page="${t.page}"
          rows="${t.rows}"
          .total=${t.total}
          .options=${t.options}
          ?hide-options="${t.hideOptions}"
          @gds-page-change=${e}
          @gds-rows-change=${i}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
