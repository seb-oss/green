import{x as r}from"./iframe-ZOlFYfLy.js";import"./pagination-D8dj--wZ.js";import"./card-CZjioQHz.js";import"./text-DMlLn2te.js";import"./flex-DhzznBBd.js";import"./localized-decorator-Dp7ZB-qa.js";import"./popover.component-BPSct5Hk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C4sXXw9y.js";import"./icon.component-CZj7Ui7t.js";import"./context-menu.component-BZcUcPQk.js";import"./unwrap-slots-D-bT6lUx.js";import"./ref-ByV2Xpjd.js";import"./dot-grid-one-horizontal-CYoa025E.js";import"./menu-heading.component-7OW7bVmq.js";import"./dropdown.component-D-DsMH-9.js";import"./query-async-nMG0gEyS.js";import"./form-control-host.style-vD866N63.js";import"./form-control-header.component-Csu1JtTO.js";import"./badge.component-DGoL3ouW.js";import"./flex.component-N13VCGcr.js";import"./triangle-exclamation.component-BJjnBBjP.js";import"./card.component-C62jPbK8.js";import"./checkmark.component-D4CzBJi3.js";import"./rbcb-toggle.template-qamksaq_.js";import"./chevron-bottom.component-B93Nz1nv.js";import"./chevron-right-small.component-Cb9zBP1Q.js";import"./chevron-right.component-dfhWVdOt.js";import"./input.component-CVd1PCyH.js";import"./textarea.component-CPLledrs.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Ba6dvBEY.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
