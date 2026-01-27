import{x as a}from"./iframe-CJRfEGsj.js";import"./pagination-CXYQKnTy.js";import"./card-B98nCxRd.js";import"./text-BGW9-tDI.js";import"./flex-us9rEMon.js";import"./localized-decorator-bnc5vlTW.js";import"./popover.component-lqDLou-6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CrK2q8zh.js";import"./icon.component-HGYExgJl.js";import"./context-menu.component-CKPsRzD4.js";import"./unwrap-slots-DQrdBXFp.js";import"./ref-k4IaeWXf.js";import"./dot-grid-one-horizontal-BOqFOkHT.js";import"./menu-heading.component-By55qa_n.js";import"./dropdown.component-DSYrJ4M4.js";import"./query-async-B6g4zKNk.js";import"./form-control-host.style-BsB4Rlcf.js";import"./form-control-header.component-Bifo4n9C.js";import"./badge.component-DN8Q1GqG.js";import"./flex.component-g7nEBmBL.js";import"./triangle-exclamation.component-BWzSUwsd.js";import"./card.component-CU8R5XfF.js";import"./checkmark.component-CmN0yaht.js";import"./rbcb-toggle.template-MVFq5vSP.js";import"./chevron-bottom.component-NN6S77vU.js";import"./chevron-right-small.component-C93LT7dU.js";import"./chevron-right.component-CcCREbix.js";import"./input.component-DicsBkDG.js";import"./textarea.component-VPBcEGuY.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-1WVx0LJY.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
