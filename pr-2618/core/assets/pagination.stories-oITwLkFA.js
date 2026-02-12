import{x as a}from"./iframe-3rIzNoLA.js";import"./pagination-odPoB2hG.js";import"./card-fyje3Ait.js";import"./text-BS6qM3Xa.js";import"./flex-BFNpdl07.js";import"./localized-decorator-BD_IdVsx.js";import"./popover.component-DwlqHWHR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D7p3lnJE.js";import"./icon.component-D5eym7mm.js";import"./context-menu.component-m6rawEXy.js";import"./unwrap-slots-SXc1OHb8.js";import"./ref-zGt94KEm.js";import"./dot-grid-one-horizontal-Bb4vdqki.js";import"./menu-heading.component-DeS-ENAh.js";import"./dropdown.component-DLBiz9Ql.js";import"./query-async-lTzDkmAM.js";import"./form-control-host.style-CHnwt6Ti.js";import"./form-control-header.component-Di3oMqzq.js";import"./badge.component-fbGF4cUW.js";import"./flex.component-DRbWzKfG.js";import"./triangle-exclamation.component-CJnFtLju.js";import"./card.component-DrrYU94N.js";import"./checkmark.component-DJAX2zZZ.js";import"./rbcb-toggle.template-DvbIwwd9.js";import"./chevron-bottom.component-DqAvDkiV.js";import"./chevron-right-small.component-C_82149l.js";import"./chevron-right.component-VodOkbr2.js";import"./input.component-Cl26cBAG.js";import"./textarea.component-BDa07Or_.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BBUYTE10.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
