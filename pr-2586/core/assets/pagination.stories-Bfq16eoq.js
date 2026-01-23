import{x as a}from"./iframe-CIVWH4Mv.js";import"./pagination-BnvMNlft.js";import"./card-DdF-C0Hw.js";import"./text-D7OSEXAR.js";import"./flex-B3_3QfjH.js";import"./localized-decorator-B2RSqNUR.js";import"./popover.component-C-zF00cL.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DjADvGIh.js";import"./icon.component-DIi6KvFX.js";import"./context-menu.component-Bpc1ToVR.js";import"./unwrap-slots-CHX9xXWU.js";import"./ref-CWIFtQ46.js";import"./dot-grid-one-horizontal-Czu-ns4A.js";import"./menu-heading.component-D2gTUCj7.js";import"./dropdown.component-BcaMLByF.js";import"./query-async-COlJGK7B.js";import"./form-control-host.style-ZwTMzsJn.js";import"./form-control-header.component-CUi15paH.js";import"./badge.component-BCo110oT.js";import"./flex.component--kjnXqAK.js";import"./triangle-exclamation.component-B7MVRYgG.js";import"./card.component-9Yif2FC1.js";import"./checkmark.component-C1jxH-Yg.js";import"./rbcb-toggle.template-Bd1Q2jEs.js";import"./chevron-bottom.component-yHJ-m_vL.js";import"./chevron-right-small.component-D1PAQXoM.js";import"./chevron-right.component-DRb2VjP8.js";import"./input.component-DDXuYYBt.js";import"./textarea.component-DWfkgtoi.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-t-I60LXz.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
