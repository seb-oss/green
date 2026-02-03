import{x as a}from"./iframe-DSf9_LvW.js";import"./pagination-Blrkprsj.js";import"./card-DchccluB.js";import"./text-BLJABEjk.js";import"./flex-ChIeOriE.js";import"./localized-decorator-BO2Z1bIQ.js";import"./popover.component-BXksBs2q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DlYNlu4M.js";import"./icon.component-C4RQA5n_.js";import"./context-menu.component-CXCYMyK-.js";import"./unwrap-slots-DbHxlebI.js";import"./ref-BRQSEM6S.js";import"./dot-grid-one-horizontal-CWMd-ZlG.js";import"./menu-heading.component-CRZj_q6b.js";import"./dropdown.component-C4RSq8sc.js";import"./query-async-CGjM2uOB.js";import"./form-control-host.style-IV1ubbQo.js";import"./form-control-header.component-emtmnr5j.js";import"./badge.component-DGQwnDw4.js";import"./flex.component-Du3E9zfb.js";import"./triangle-exclamation.component-DFBDhAzi.js";import"./card.component-CItJSOYu.js";import"./checkmark.component-Cn4iuj3-.js";import"./rbcb-toggle.template-BLqIwDi1.js";import"./chevron-bottom.component-DLVHmMKX.js";import"./chevron-right-small.component-C9sx25Oy.js";import"./chevron-right.component-BtgLYxrI.js";import"./input.component-mnGCgvy4.js";import"./textarea.component-C7bJQwiZ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-AyUN2D44.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
