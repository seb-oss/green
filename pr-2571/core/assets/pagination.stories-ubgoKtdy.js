import{x as a}from"./iframe-Dq4KnV63.js";import"./pagination-BG2aGacW.js";import"./card-DxE75Ocd.js";import"./text-x4kS8ocY.js";import"./flex-B9ezabvY.js";import"./localized-decorator-C-CcTGIl.js";import"./popover.component-BXSvquuo.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3NNzybn.js";import"./icon.component-BHGNAYjw.js";import"./context-menu.component-WxgPiGom.js";import"./unwrap-slots-Dd_WEpqp.js";import"./ref-CtLJujVs.js";import"./dot-grid-one-horizontal-DaxajgBj.js";import"./menu-heading.component-O3OLwpxh.js";import"./dropdown.component-BQJIQk4G.js";import"./query-async-CX2yabFj.js";import"./form-control-host.style-B2qVm3Uu.js";import"./form-control-header.component-BS8e5oYT.js";import"./badge.component-CNs8ys8e.js";import"./flex.component-BnWYtpRs.js";import"./triangle-exclamation.component-DiM029I-.js";import"./card.component-C6G7l2lb.js";import"./checkmark.component-CwAdZ8TD.js";import"./rbcb-toggle.template-Cbi5yTL0.js";import"./chevron-bottom.component-1RkXHrgR.js";import"./chevron-right-small.component-jy8r08RQ.js";import"./chevron-right.component-1gCppXRR.js";import"./input.component-DFIKuMww.js";import"./textarea.component-DmP-R0WS.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D_ltfjF3.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
