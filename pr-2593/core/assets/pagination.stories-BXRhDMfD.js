import{x as a}from"./iframe-Log8YVZJ.js";import"./pagination-B11zwGzt.js";import"./card-C9uepfMu.js";import"./text-NXBM_2Bw.js";import"./flex-BT_zBN5q.js";import"./localized-decorator-DxuCzUTn.js";import"./popover.component-byG2L-VM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BsKUCbal.js";import"./icon.component-Dp0XZAbo.js";import"./context-menu.component--7wBZx6K.js";import"./unwrap-slots-D4YA3Zl1.js";import"./ref-CQkpTT3s.js";import"./dot-grid-one-horizontal-BD5Uaxuz.js";import"./menu-heading.component-QCZ5_rL3.js";import"./dropdown.component-DKZMzFAl.js";import"./query-async-D-DAVWWU.js";import"./form-control-host.style-CJ0_r7Zk.js";import"./form-control-header.component-B4j3CqQY.js";import"./badge.component-DfUQGqEY.js";import"./flex.component-eClUdjnn.js";import"./triangle-exclamation.component-Cp6HcACj.js";import"./card.component-BHD0fAQV.js";import"./checkmark.component-CFKxLmjY.js";import"./rbcb-toggle.template-mxmWomyC.js";import"./chevron-bottom.component-Wmp8tqWh.js";import"./chevron-right-small.component-BUcLN-N7.js";import"./chevron-right.component-gl7yvC06.js";import"./input.component-CDmgPeQm.js";import"./textarea.component-BNdgATSU.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ByeKdWmx.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
