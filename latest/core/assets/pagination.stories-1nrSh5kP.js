import{x as r}from"./iframe-OLtVCvf3.js";import"./pagination-YhXGsQUJ.js";import"./card-vYEjmawN.js";import"./text-BaG8JG3N.js";import"./flex-Dka5goo8.js";import"./localized-decorator-Bn_Y8u2H.js";import"./popover.component-zPog_XeU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CZGd4hUi.js";import"./icon.component-CBMPXjbb.js";import"./context-menu.component-DM6bgfN7.js";import"./unwrap-slots-lU80jU42.js";import"./ref-BqGGA4cC.js";import"./dot-grid-one-horizontal-CBLyI1vB.js";import"./menu-heading.component-DtluXRu-.js";import"./dropdown.component-CpgloZbZ.js";import"./query-async-BuCzUFQu.js";import"./form-control-host.style-CXf4R-8o.js";import"./form-control-header.component-Zba6CTnD.js";import"./badge.component-DxXC5zdx.js";import"./flex.component-C4C0DT38.js";import"./triangle-exclamation.component-D0tAEOQu.js";import"./card.component-LAF1gNJU.js";import"./checkmark.component-DiNb3fwa.js";import"./rbcb-toggle.template-DYZ5yXxN.js";import"./chevron-bottom.component-C-T9UBsM.js";import"./chevron-right-small.component-DkY-pXz1.js";import"./chevron-right.component-YXtbIq2q.js";import"./input.component-CkmEF0AL.js";import"./textarea.component-CQkOXQrJ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C40djFVV.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
