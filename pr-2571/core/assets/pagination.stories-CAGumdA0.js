import{x as a}from"./iframe-DMDyobL-.js";import"./pagination-B6ycUn6M.js";import"./card-BGcd2HbP.js";import"./text-B-vzt8Fz.js";import"./flex-D8CHi21X.js";import"./localized-decorator-DmrrsYJI.js";import"./popover.component-D-9eA2uF.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DKrDzxP7.js";import"./icon.component-_ErWSD7Y.js";import"./context-menu.component-CtlFMuJv.js";import"./unwrap-slots-B34TvfTI.js";import"./ref-X__og6nn.js";import"./dot-grid-one-horizontal-D6ANIR1u.js";import"./menu-heading.component-C2tBqzRt.js";import"./dropdown.component-DhttihFU.js";import"./query-async-3ktO8T6I.js";import"./form-control-host.style-CWRrKGTO.js";import"./form-control-header.component-CZlHtPfT.js";import"./badge.component-BU63UI20.js";import"./flex.component-Wi0Fp2wR.js";import"./triangle-exclamation.component-DP2FUfXB.js";import"./card.component-jNowQivA.js";import"./checkmark.component-BvSZ5VVw.js";import"./rbcb-toggle.template-BM31sMer.js";import"./chevron-bottom.component-C37ElrLr.js";import"./chevron-right-small.component-B_POb1KD.js";import"./chevron-right.component-Dk_T4QFv.js";import"./input.component-BP_S6giM.js";import"./textarea.component-CN2KjQfB.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-e6bvIdGX.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
