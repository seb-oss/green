import{x as a}from"./iframe-Dyp66QAI.js";import"./pagination-Dsh5KcyG.js";import"./card-CKOKyKCm.js";import"./text-CCDJrdYw.js";import"./flex-_BP4Q3uA.js";import"./localized-decorator-CMm4RR_6.js";import"./popover.component-B83dDhMU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Chgvmx6e.js";import"./icon.component-DraLhdkX.js";import"./context-menu.component-Dhy0jDLJ.js";import"./unwrap-slots-awI2S8Wz.js";import"./ref-CbaFRCRZ.js";import"./dot-grid-one-horizontal-CrmR6PZB.js";import"./menu-heading.component-cmFLIu57.js";import"./dropdown.component-qfGheMU_.js";import"./query-async-BAKE91eB.js";import"./form-control-host.style-2jsFriqf.js";import"./form-control-header.component-DwpOg073.js";import"./badge.component-CYPeLYDJ.js";import"./flex.component-rHWEU2RC.js";import"./triangle-exclamation.component-ntLFccpd.js";import"./card.component-DU9QvY6-.js";import"./checkmark.component-DMi7fnHU.js";import"./rbcb-toggle.template-CIvRENxv.js";import"./chevron-bottom.component-CRW3c-Lz.js";import"./chevron-right-small.component-mE2AlpAV.js";import"./chevron-right.component-Tw_XLS2H.js";import"./input.component-DqU2m-T1.js";import"./textarea.component-Ra1cLjov.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B3IpUQw6.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
