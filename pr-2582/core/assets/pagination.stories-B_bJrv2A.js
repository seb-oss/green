import{x as a}from"./iframe-ws1MlFGZ.js";import"./pagination-BKvtQyqZ.js";import"./card-DqN4x-W7.js";import"./text-COvUSJaP.js";import"./flex-D29d2Q1o.js";import"./localized-decorator-Co9lq93q.js";import"./popover.component-kE68GLlu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B_iAO7Xh.js";import"./icon.component-CYaFRt3a.js";import"./context-menu.component-BaFTezoM.js";import"./unwrap-slots-CZdp6qUr.js";import"./ref-4FogBlET.js";import"./dot-grid-one-horizontal-CykfQORY.js";import"./menu-heading.component-BomIMKTs.js";import"./dropdown.component-U7Xtdxj4.js";import"./query-async-DDsuYwdj.js";import"./form-control-host.style-Bm9al9Q0.js";import"./form-control-header.component-D-gW4__C.js";import"./badge.component-DUk4mhVi.js";import"./flex.component-BHjGU510.js";import"./triangle-exclamation.component-DUTNnAul.js";import"./card.component-BZd9eAUU.js";import"./checkmark.component-B9Irdx1C.js";import"./rbcb-toggle.template-B08_5RnV.js";import"./chevron-bottom.component-C9oYU6ZT.js";import"./chevron-right-small.component-VmlGx9M2.js";import"./chevron-right.component-CQgRXNDM.js";import"./input.component-Cy0PmfxG.js";import"./textarea.component-whagidgp.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-mZJAAUIR.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
