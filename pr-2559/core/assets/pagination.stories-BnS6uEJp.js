import{x as r}from"./iframe-D7LW9HlS.js";import"./pagination-D_xR6CBH.js";import"./card-CqGEukbk.js";import"./text-DXVMu8g-.js";import"./flex-Dn5og5k9.js";import"./localized-decorator-D2NO-b-n.js";import"./popover.component-xqtD-veO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cq-2Duvv.js";import"./icon.component-CT-VwdJz.js";import"./context-menu.component-xNvbSsda.js";import"./unwrap-slots-0pgkyNOz.js";import"./ref-Ct_Nqoj0.js";import"./dot-grid-one-horizontal-BOX1141I.js";import"./menu-heading.component-DhYD7aFs.js";import"./dropdown.component-BPf1ChVq.js";import"./query-async-DfDYiAiZ.js";import"./form-control-host.style-CuFd2vHE.js";import"./form-control-header.component-B-H7YkP8.js";import"./badge.component-BtIVS7mT.js";import"./flex.component-llKK8EQ2.js";import"./triangle-exclamation.component-is7GTGqS.js";import"./card.component-Bxf8mI4M.js";import"./checkmark.component-DCz4mvvt.js";import"./rbcb-toggle.template-FSQSEtYX.js";import"./chevron-bottom.component-DOKFRbpX.js";import"./chevron-right-small.component-Bvcsi_8m.js";import"./chevron-right.component-DLYgRcSY.js";import"./input.component-CNXVMxbJ.js";import"./textarea.component-9yuPWO3A.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D7s8x7Ey.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
