import{x as a}from"./iframe-Bc4_q3Ov.js";import"./pagination-DZLDnQy_.js";import"./card-CodVnfxr.js";import"./text-CxkV9x__.js";import"./flex-CPn0VONo.js";import"./localized-decorator-CqzOTSZg.js";import"./popover.component-DQ0-NZ8-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-fsTQxr41.js";import"./icon.component-CE4gJ_Rt.js";import"./context-menu.component-DXAyu7gj.js";import"./unwrap-slots-B9rfFvkB.js";import"./ref-Ck60trbs.js";import"./dot-grid-one-horizontal-CI2uu39m.js";import"./menu-heading.component-B96cKcfB.js";import"./dropdown.component-BRSPHgkW.js";import"./query-async-CBPfYnN8.js";import"./form-control-host.style-EMGU3b-B.js";import"./form-control-header.component-DfA0krjo.js";import"./badge.component-CQ1KNaEX.js";import"./flex.component-Cl6lWm1u.js";import"./triangle-exclamation.component-4mc0bInQ.js";import"./card.component-CaiialMi.js";import"./checkmark.component-6FYHDK0R.js";import"./rbcb-toggle.template-BFDAklyl.js";import"./chevron-bottom.component-CRzCYjv7.js";import"./chevron-right-small.component-BBeYakDI.js";import"./chevron-right.component-N09f5RXz.js";import"./input.component-CDo8We7F.js";import"./textarea.component-_-Y-wH6K.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BU0xi_Uu.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
