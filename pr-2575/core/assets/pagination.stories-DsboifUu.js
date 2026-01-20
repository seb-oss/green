import{x as a}from"./iframe-BjB7oDKT.js";import"./pagination-kpUt5a-O.js";import"./card-Be4T82WB.js";import"./text-CGzplvtA.js";import"./flex-CZsta-58.js";import"./localized-decorator-CWtqtl7U.js";import"./popover.component-DbSl4lKp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BibNx_RM.js";import"./icon.component-DlGg0fkI.js";import"./context-menu.component-CFmQmlT1.js";import"./unwrap-slots-DkQ2eWz4.js";import"./ref-fEHZrf-Z.js";import"./dot-grid-one-horizontal-x68wc97U.js";import"./menu-heading.component-EHzrtegk.js";import"./dropdown.component-Di1g-3sZ.js";import"./query-async-BcYiSKxG.js";import"./form-control-host.style-DtOpjgwO.js";import"./form-control-header.component-P1bophgl.js";import"./badge.component-D2O7e3R5.js";import"./flex.component-Z2JnHsVp.js";import"./triangle-exclamation.component-DVr_sHsg.js";import"./card.component-CVQTQ-EQ.js";import"./checkmark.component-DgHnM_NT.js";import"./rbcb-toggle.template-Bh1KoPvv.js";import"./chevron-bottom.component-CUYdhV_X.js";import"./chevron-right-small.component-BPY-9cM5.js";import"./chevron-right.component-CrJYzUNw.js";import"./input.component-Bndc5Obs.js";import"./textarea.component-C1IbCfam.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BrFKFl9e.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
