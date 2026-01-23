import{x as a}from"./iframe-DMCXEGAu.js";import"./pagination-F8W8u6OJ.js";import"./card-BuYc4qkW.js";import"./text-BFdeU0QE.js";import"./flex-DzLrWfEw.js";import"./localized-decorator-BZdAib6r.js";import"./popover.component-BMzFlfQP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BXsopI24.js";import"./icon.component-Biye4ssi.js";import"./context-menu.component-B2PbnXUC.js";import"./unwrap-slots-wNymKo7B.js";import"./ref-BHw8Lwyk.js";import"./dot-grid-one-horizontal-gtGJnfxo.js";import"./menu-heading.component-GWsPwSET.js";import"./dropdown.component-CjjavJF5.js";import"./query-async-R6IyWz66.js";import"./form-control-host.style-C25skd3j.js";import"./form-control-header.component-CiO1KsOp.js";import"./badge.component-Dr7Ia8kr.js";import"./flex.component-BKRTXpEx.js";import"./triangle-exclamation.component-Cyzgb3Lg.js";import"./card.component-Pu_1pl35.js";import"./checkmark.component-DQrtt9So.js";import"./rbcb-toggle.template-BJL2ueSN.js";import"./chevron-bottom.component-DljMsFHf.js";import"./chevron-right-small.component-BX9JfDcO.js";import"./chevron-right.component-BN33GBC0.js";import"./input.component-DSOTDrr-.js";import"./textarea.component-nuXwhWtS.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C9x5wGJo.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
