import{x as a}from"./iframe-CVFmexQP.js";import"./pagination-lJaLHRzt.js";import"./card-Dz_7A01K.js";import"./text-Uw6uLsg0.js";import"./flex-gzUAHg-6.js";import"./localized-decorator-BNQExEAA.js";import"./popover.component-ecYmGvc_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CqAFuBps.js";import"./icon.component-Da1jjeO2.js";import"./context-menu.component-zngE19Ss.js";import"./unwrap-slots-DnWo2wWM.js";import"./ref-Be1dJHWd.js";import"./dot-grid-one-horizontal-Cu8vohIp.js";import"./menu-heading.component-DlG9toNG.js";import"./dropdown.component-BbMiaohD.js";import"./query-async-BF5o5Skz.js";import"./form-control-host.style-BUf6DaqT.js";import"./form-control-header.component-BbX-eBR7.js";import"./badge.component-Cd6zhJEr.js";import"./flex.component-CNFtT5Hn.js";import"./triangle-exclamation.component-CF18PKoi.js";import"./card.component-BfEPcx_t.js";import"./checkmark.component-CtPU_pie.js";import"./rbcb-toggle.template-CLCJ0a5m.js";import"./chevron-bottom.component-BBm1Dnnc.js";import"./chevron-right-small.component-DOv88L2-.js";import"./chevron-right.component-Cv22YMT2.js";import"./input.component-RnmAkwFo.js";import"./textarea.component-xutEPp5h.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-De6p4ggV.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
