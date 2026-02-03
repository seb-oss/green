import{x as a}from"./iframe-CELF-Vyq.js";import"./pagination-CcZGctso.js";import"./card-CNF4-peq.js";import"./text-BIMLwBqY.js";import"./flex-BkVBScXw.js";import"./localized-decorator-DerGAKJ_.js";import"./popover.component-C2sbpQpD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-zo88JS2_.js";import"./icon.component-B-pG8KGI.js";import"./context-menu.component-BjJwzZg4.js";import"./unwrap-slots-DWk8gh31.js";import"./ref-9wMtPy1x.js";import"./dot-grid-one-horizontal-7381WJfG.js";import"./menu-heading.component-EIgHE8Zh.js";import"./dropdown.component-kuWpKDp6.js";import"./query-async-BrEvNLb8.js";import"./form-control-host.style-Bua_ULSm.js";import"./form-control-header.component-CkF-5udU.js";import"./badge.component-Art25qP1.js";import"./flex.component-0Gth6Pct.js";import"./triangle-exclamation.component-S2K7me8K.js";import"./card.component-Bnzv_dhj.js";import"./checkmark.component-Bxr5fAdr.js";import"./rbcb-toggle.template-D6QeADdE.js";import"./chevron-bottom.component-CNqsT1Bn.js";import"./chevron-right-small.component-Cxvf0mE_.js";import"./chevron-right.component-C2zEG5PF.js";import"./input.component-D_m1UgSh.js";import"./textarea.component-D6s3xKVn.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-vxbcaer-.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
