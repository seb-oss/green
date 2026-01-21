import{x as a}from"./iframe-2bPt0s27.js";import"./pagination-Cmhultql.js";import"./card-ptPY6VGT.js";import"./text-a0ku0o0J.js";import"./flex-DGnl2_VG.js";import"./localized-decorator-Dkq3yWld.js";import"./popover.component-Bj59Ayi8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Gj2c04a4.js";import"./icon.component-wvAac8OZ.js";import"./context-menu.component-WIoP_COT.js";import"./unwrap-slots-UkSwGyRN.js";import"./ref-CcHTx4Xm.js";import"./dot-grid-one-horizontal-D1duC5hg.js";import"./menu-heading.component-CKoMZrjO.js";import"./dropdown.component-xM-euSLL.js";import"./query-async-BHLaVUbF.js";import"./form-control-host.style-DnTrZlDw.js";import"./form-control-header.component-DHhiUicn.js";import"./badge.component-DsRQio4F.js";import"./flex.component-CDR14qMl.js";import"./triangle-exclamation.component-DrRaauYE.js";import"./card.component-CVA6Fgq6.js";import"./checkmark.component-CuKHIidq.js";import"./rbcb-toggle.template-Cq5L5kl3.js";import"./chevron-bottom.component-zEWwq9tx.js";import"./chevron-right-small.component-CqDRtKbR.js";import"./chevron-right.component-CT30BFLc.js";import"./input.component-CMUMPABO.js";import"./textarea.component-TEuqeMPg.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C7BrPbKi.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
