import{x as r}from"./iframe-DHyn3rYy.js";import"./pagination-n72xVVmg.js";import"./card-DOhmmrRz.js";import"./text-BzInb03K.js";import"./flex-CtdbGu15.js";import"./localized-decorator-1ASOYd7l.js";import"./popover.component-D_9uIu6P.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CwSpiLiu.js";import"./icon.component-DIcPDEU1.js";import"./context-menu.component-Devzc5jY.js";import"./unwrap-slots-BtQp-v5X.js";import"./ref-eGZUNRvJ.js";import"./dot-grid-one-horizontal-CnST5nGK.js";import"./menu-heading.component-CQGcCKRW.js";import"./dropdown.component-CN98Q1Du.js";import"./query-async-HKztkoAV.js";import"./form-control-host.style-m3y_VVIQ.js";import"./form-control-header.component-Cb_KpBAP.js";import"./badge.component-1kIauyfI.js";import"./flex.component-DdHhs7J9.js";import"./triangle-exclamation.component-BljgfZXo.js";import"./card.component-ee3MQ_1G.js";import"./checkmark.component-Csbavgoz.js";import"./rbcb-toggle.template-CRi-XLwp.js";import"./chevron-bottom.component-BrXaOJRu.js";import"./chevron-right-small.component-0AXBk0vh.js";import"./chevron-right.component-DAOoUqzo.js";import"./input.component-Briv6RJd.js";import"./textarea.component-BiSfeB_H.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-yyNpi92v.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
