import{x as a}from"./iframe-CGSLjpeR.js";import"./pagination-BHgkR1px.js";import"./card-C3e_t8ig.js";import"./text-Uc6DVqcq.js";import"./flex-D42WbMbX.js";import"./localized-decorator-BeZC_Pw3.js";import"./popover.component-mN0uwBNZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BSEwZ0sF.js";import"./icon.component-Dwpe8fY6.js";import"./context-menu.component-DhioT225.js";import"./unwrap-slots-6EIUOMtq.js";import"./ref-CUBi9cHg.js";import"./dot-grid-one-horizontal-feEJIiKK.js";import"./menu-heading.component-VYZRn5CL.js";import"./dropdown.component-DHfUTIjC.js";import"./query-async-ClBGR0Yh.js";import"./form-control-host.style-DSDBBV61.js";import"./form-control-header.component-UdmzLak4.js";import"./badge.component-CtAPJgXt.js";import"./flex.component-9qGYLtSv.js";import"./triangle-exclamation.component-CbVacNzD.js";import"./card.component-CCf2EyhB.js";import"./checkmark.component-DF4PmrgK.js";import"./rbcb-toggle.template-DP-AL77Z.js";import"./chevron-bottom.component-mMbtsPoJ.js";import"./chevron-right-small.component-CVWSUi8C.js";import"./chevron-right.component-BuQ1KXGY.js";import"./input.component-B2AHFYxW.js";import"./textarea.component-CDkaTYWG.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-YNOlami5.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
