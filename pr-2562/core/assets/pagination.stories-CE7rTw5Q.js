import{x as r}from"./iframe-7i7lbGMR.js";import"./pagination-CSxNtAQF.js";import"./card-DeEbe1Xm.js";import"./text-D4tvslQK.js";import"./flex-DdIb4vgO.js";import"./localized-decorator-Cvbd25nG.js";import"./popover.component-CKsc2RZG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BI4tkiBk.js";import"./icon.component-jWB8-sWt.js";import"./context-menu.component-BZVX9O1L.js";import"./unwrap-slots-CeSq5oC_.js";import"./ref-CVxDMerP.js";import"./dot-grid-one-horizontal-DmQBHvWb.js";import"./menu-heading.component-CkeSmESI.js";import"./dropdown.component-B7kICihc.js";import"./query-async-B4a2Xm5L.js";import"./form-control-host.style-CwTsUFKu.js";import"./form-control-header.component-BZqLtI-j.js";import"./badge.component-BfsJdQUl.js";import"./flex.component-Bexu0K20.js";import"./triangle-exclamation.component-6d06OCcW.js";import"./card.component-AzsogQO4.js";import"./checkmark.component-DoaxbUyx.js";import"./rbcb-toggle.template-DReyLblG.js";import"./chevron-bottom.component-CkvJ19af.js";import"./chevron-right-small.component-Dh44oWJI.js";import"./chevron-right.component-Cg4znOTn.js";import"./input.component-CXpAeHqd.js";import"./textarea.component-CBtE3npj.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BHvGbRgn.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
