import{x as a}from"./iframe-CZ05hS3M.js";import"./pagination-BZ1d-UW5.js";import"./card-DC3nFRR8.js";import"./text-Dg4esbyo.js";import"./flex-XqteE1sH.js";import"./localized-decorator-DZttVeom.js";import"./popover.component-B-0og8UC.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cq-CWVFT.js";import"./icon.component-DB_HYxEe.js";import"./context-menu.component-DI0Ih7Yd.js";import"./unwrap-slots-DwCaIq7_.js";import"./ref-DKapJldL.js";import"./dot-grid-one-horizontal-CMiYIAu2.js";import"./menu-heading.component-D363WG-H.js";import"./dropdown.component-FXTgMIz1.js";import"./query-async-C7MTxdp1.js";import"./form-control-host.style-B_C1RsJd.js";import"./form-control-header.component-BEY2bW8Z.js";import"./badge.component-7PbZjNIE.js";import"./flex.component-COAKd3b7.js";import"./triangle-exclamation.component-BN1OXbHv.js";import"./card.component-CjvQ4has.js";import"./checkmark.component-DHdogfIo.js";import"./rbcb-toggle.template-BjWsI-Q5.js";import"./chevron-bottom.component-QYQ1FhWb.js";import"./chevron-right-small.component-BKRMKSCo.js";import"./chevron-right.component-BTZ5XWTH.js";import"./input.component-B4Am0O0c.js";import"./textarea.component-DJ6-qvVw.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DoQRGpyO.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
