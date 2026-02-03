import{x as a}from"./iframe-Bnz-Jxbc.js";import"./pagination-DP1cYzN2.js";import"./card-C6iZArMl.js";import"./text-BJamJXgr.js";import"./flex-BwwAP2Of.js";import"./localized-decorator-DBBG6ALZ.js";import"./popover.component-CkWt0eVK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CIqhkPC_.js";import"./icon.component-DzKqo047.js";import"./context-menu.component-BUXXCdyJ.js";import"./unwrap-slots-DHU5JNq1.js";import"./ref-D3eVjTnp.js";import"./dot-grid-one-horizontal-CT_8SH5B.js";import"./menu-heading.component-BYAbJdXI.js";import"./dropdown.component-7b-9o7C9.js";import"./query-async-BxLkzc2X.js";import"./form-control-host.style-DYrfWRw2.js";import"./form-control-header.component-Hs13BJJ1.js";import"./badge.component-BMV2PXuv.js";import"./flex.component-BX2aWvL_.js";import"./triangle-exclamation.component-BYplp8ec.js";import"./card.component-oFDBdUNx.js";import"./checkmark.component-DREVrtC7.js";import"./rbcb-toggle.template-k-Y9TGzj.js";import"./chevron-bottom.component-D8z6TKNW.js";import"./chevron-right-small.component-BQ7-llp1.js";import"./chevron-right.component-DIoRwTst.js";import"./input.component-DHwlgF8a.js";import"./textarea.component-541CQLoL.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BZp7ZTXG.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
