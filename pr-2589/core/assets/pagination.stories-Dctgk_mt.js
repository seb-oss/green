import{x as a}from"./iframe-1F4SKICq.js";import"./pagination-Bo0Rx9ev.js";import"./card-BVOukmD1.js";import"./text-CmOQqe3d.js";import"./flex-CrFbvP8x.js";import"./localized-decorator-B9zHb0OH.js";import"./popover.component-r8YlN6Fa.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CoJsr_cV.js";import"./icon.component-0VF-ANJx.js";import"./context-menu.component-BXlnS5nA.js";import"./unwrap-slots-DAJKdcHw.js";import"./ref-B8GukhfU.js";import"./dot-grid-one-horizontal-BSh6XZh0.js";import"./menu-heading.component-SadOz8wl.js";import"./dropdown.component-DNuFo7a9.js";import"./query-async-fQNhZeyO.js";import"./form-control-host.style-nGXz20Vn.js";import"./form-control-header.component-Cn-Hw8Xz.js";import"./badge.component-BD7ADR-p.js";import"./flex.component-DSn4JYs1.js";import"./triangle-exclamation.component-Cd0wi4fM.js";import"./card.component-DgL5FTy7.js";import"./checkmark.component-8aXcbKex.js";import"./rbcb-toggle.template-Bz-MbcQY.js";import"./chevron-bottom.component-BN7mXXnG.js";import"./chevron-right-small.component-C9853tdQ.js";import"./chevron-right.component-C96f8ZaC.js";import"./input.component-yGkqTyd_.js";import"./textarea.component-CTTgf_Bj.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Ci50o2me.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
