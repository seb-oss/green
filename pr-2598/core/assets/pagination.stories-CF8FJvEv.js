import{x as a}from"./iframe-aXTL5SNE.js";import"./pagination-CmNiVss_.js";import"./card-CQ-gEn2R.js";import"./text-CI89AXus.js";import"./flex-BXEGbT5S.js";import"./localized-decorator-CM3Vzjzt.js";import"./popover.component-NGi7o0wZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ChwPojX4.js";import"./icon.component-DhFG2JS7.js";import"./context-menu.component-D8LMNBs_.js";import"./unwrap-slots-lIdkDJBo.js";import"./ref-1OBy-VeM.js";import"./dot-grid-one-horizontal-DpI_JS8-.js";import"./menu-heading.component-Bgj86-mt.js";import"./dropdown.component-9EdgZPgF.js";import"./query-async-BfThUFw1.js";import"./form-control-host.style-Cok-stmV.js";import"./form-control-header.component-5TyQRsGt.js";import"./badge.component-D5ugRCK4.js";import"./flex.component-BzB6S2Pb.js";import"./triangle-exclamation.component-CaWaEaPo.js";import"./card.component-2prNoFXS.js";import"./checkmark.component-D4dHiKwr.js";import"./rbcb-toggle.template-CLIYOJHj.js";import"./chevron-bottom.component-DbQe1NgH.js";import"./chevron-right-small.component-DHZd1TYA.js";import"./chevron-right.component-C-J4nQ8M.js";import"./input.component-CkLlZb54.js";import"./textarea.component-4Z4wd1Qc.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CZ5ASlZr.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
