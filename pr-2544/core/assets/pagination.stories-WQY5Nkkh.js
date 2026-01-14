import{x as r}from"./iframe-CcFU4emh.js";import"./pagination-0Fn49OJj.js";import"./card-C4KapWvm.js";import"./text-gIl1LXRH.js";import"./flex-Cxajg43G.js";import"./localized-decorator-D5xzM0ED.js";import"./popover.component-DGYTtf9u.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvU5-oOa.js";import"./icon.component-BLQGDtNO.js";import"./context-menu.component-DMm2yG4j.js";import"./unwrap-slots-DBsz2rXu.js";import"./ref-DxHZnzyi.js";import"./dot-grid-one-horizontal-DhjcRXn9.js";import"./menu-heading.component-IwPeLpGo.js";import"./dropdown.component-Wip0KH3h.js";import"./query-async-BB4XWqOO.js";import"./form-control-host.style-JbWRn3_X.js";import"./form-control-header.component-CBNHaJ09.js";import"./badge.component-L4BqGbGp.js";import"./flex.component-hHq_mvyF.js";import"./triangle-exclamation.component-BBPAsN-N.js";import"./card.component-DPlNLuYN.js";import"./checkmark.component-DAZs-1DZ.js";import"./rbcb-toggle.template-C65nVCR4.js";import"./chevron-bottom.component-Ctf3La8z.js";import"./chevron-right-small.component-P3BBWhzL.js";import"./chevron-right.component-xo0eq9Wo.js";import"./input.component-k6eUIEXI.js";import"./textarea.component-GK1lrNz8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-OUL87_py.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
