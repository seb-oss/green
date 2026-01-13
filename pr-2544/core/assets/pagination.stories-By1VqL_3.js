import{x as r}from"./iframe-lV-WZRkU.js";import"./pagination-C32wBqty.js";import"./card-C5yV1ZNi.js";import"./text-0YceOCLr.js";import"./flex-YZeQ_2g9.js";import"./localized-decorator-Bfo8VZz8.js";import"./popover.component-DW6lKZbC.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-q-71JxD2.js";import"./icon.component-BYc8JeYU.js";import"./context-menu.component-CXaEDiKO.js";import"./unwrap-slots-CqrDwRxt.js";import"./ref-DLkRUTTE.js";import"./dot-grid-one-horizontal-tA_ios_5.js";import"./menu-heading.component-Cn4aTHrU.js";import"./dropdown.component-DqmIWLjN.js";import"./query-async-4ept2Bne.js";import"./form-control-host.style-XLTdUCij.js";import"./form-control-header.component-CDo3KRv_.js";import"./badge.component-DWK23WQk.js";import"./flex.component-SMBXM1bE.js";import"./triangle-exclamation.component-CbJke0fa.js";import"./card.component-CeI5UucY.js";import"./checkmark.component-Xn2Cbn7D.js";import"./rbcb-toggle.template-C-BIrqF1.js";import"./chevron-bottom.component-By8ZO4iG.js";import"./chevron-right-small.component-CcppDOhD.js";import"./chevron-right.component-DCy6ZRXv.js";import"./input.component-B96G2nbV.js";import"./textarea.component-BQrXbmr_.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-sV3rw3P0.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
          @gds-page-change=${e}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
