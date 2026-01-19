import{x as a}from"./iframe-BQ4eNaz6.js";import"./pagination-xYovuqBQ.js";import"./card-DwB-XfN3.js";import"./text-CUz5McFs.js";import"./flex-DLRQzNAh.js";import"./localized-decorator-gl2Mi8lZ.js";import"./popover.component-CuS54Khp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D1IbJpKt.js";import"./icon.component-CjYBnmJh.js";import"./context-menu.component-DRrgEiqi.js";import"./unwrap-slots-CoxYACWp.js";import"./ref-WwsxjMAQ.js";import"./dot-grid-one-horizontal-BGzyxPJ6.js";import"./menu-heading.component-B9QwWz8H.js";import"./dropdown.component-vyaBybno.js";import"./query-async-S9tlB0oE.js";import"./form-control-host.style-C4btTQmD.js";import"./form-control-header.component-C1ot8qTD.js";import"./badge.component-vtnItBZ4.js";import"./flex.component-BRb9Ckho.js";import"./triangle-exclamation.component-s7-XlqVU.js";import"./card.component-B2Lp7-rO.js";import"./checkmark.component-BXLv6pt4.js";import"./rbcb-toggle.template-z_ElTH4R.js";import"./chevron-bottom.component-piiKETGy.js";import"./chevron-right-small.component-D8AhQOo3.js";import"./chevron-right.component-ENnpf8rI.js";import"./input.component-CoUiMsVl.js";import"./textarea.component-BWIS72vc.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Cz8sT2uQ.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
