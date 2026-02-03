import{x as a}from"./iframe-n1Dj8K3S.js";import"./pagination-DJKmzSwF.js";import"./card-B2rP9g62.js";import"./text-Cgk3KxdX.js";import"./flex-Bi-ZIuoN.js";import"./localized-decorator-ByBCMnLw.js";import"./popover.component-SpG8tFxh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DHRswq-2.js";import"./icon.component-CHAW-RNs.js";import"./context-menu.component-BJlSjtot.js";import"./unwrap-slots-z-iMYNXz.js";import"./ref-BLA4Jmd7.js";import"./dot-grid-one-horizontal-8ifxqm47.js";import"./menu-heading.component-CB451nD4.js";import"./dropdown.component-7eBKYZpd.js";import"./query-async-B4nIaPki.js";import"./form-control-host.style-BTVdo_LP.js";import"./form-control-header.component-7THiSgZW.js";import"./badge.component-D3CwcAsc.js";import"./flex.component-C4rDnwBK.js";import"./triangle-exclamation.component-zHVZf05v.js";import"./card.component-CQJwQRLA.js";import"./checkmark.component-BmTfmwN4.js";import"./rbcb-toggle.template-BDWlZUH9.js";import"./chevron-bottom.component-Cj-kOYXL.js";import"./chevron-right-small.component-BbUpQVTx.js";import"./chevron-right.component-COM-L1i5.js";import"./input.component-Bjn9vnHg.js";import"./textarea.component-BiUSSiBs.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CKPwKUI2.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
