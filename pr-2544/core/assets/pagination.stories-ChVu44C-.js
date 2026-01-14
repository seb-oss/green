import{x as r}from"./iframe-CDTFv-C8.js";import"./pagination-OslFtlfT.js";import"./card-BQE9D101.js";import"./text-Cpc0Aa2b.js";import"./flex-Bk9zj1Ie.js";import"./localized-decorator-De96p8FJ.js";import"./popover.component-Bh_0CVbR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BmAku09M.js";import"./icon.component-BD9gw1Q3.js";import"./context-menu.component-BUG3eR2f.js";import"./unwrap-slots-BHSDCyxa.js";import"./ref-W6bRgyxi.js";import"./dot-grid-one-horizontal-C1nHSTHi.js";import"./menu-heading.component-D-Ed1b60.js";import"./dropdown.component-DuTuEGbo.js";import"./query-async-BdXIivAD.js";import"./form-control-host.style-B5qHfjrN.js";import"./form-control-header.component-DOgwvtBM.js";import"./badge.component-BQWBTu9s.js";import"./flex.component-DealITh5.js";import"./triangle-exclamation.component-CY53aWF8.js";import"./card.component-CrPfjVg7.js";import"./checkmark.component-DjIDtIz9.js";import"./rbcb-toggle.template-llI16XEs.js";import"./chevron-bottom.component-BfTbqR3t.js";import"./chevron-right-small.component-DY_0NMF5.js";import"./chevron-right.component-7VGCMyoA.js";import"./input.component-CuQ1SpA9.js";import"./textarea.component-C0SQm64C.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BtSdAxzw.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
