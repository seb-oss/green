import{x as a}from"./iframe-B_dd3l6Z.js";import"./pagination-_MKMjQN8.js";import"./card-DM2X9igB.js";import"./text-DJg3lkN2.js";import"./flex-B9P-0j-3.js";import"./localized-decorator-C0mZFE-7.js";import"./popover.component-enhYs_AV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BhWv_wuS.js";import"./icon.component-BrjBapjD.js";import"./context-menu.component-B9VjiYoR.js";import"./unwrap-slots-BdEV3Iuk.js";import"./ref-DWHfv77d.js";import"./dot-grid-one-horizontal-C-ZEuM88.js";import"./menu-heading.component-CteDmhxS.js";import"./dropdown.component-BEmz2FK4.js";import"./query-async-BjRZKrE_.js";import"./form-control-host.style-B_N7cNmJ.js";import"./form-control-header.component-BvCSEHcB.js";import"./badge.component-CXfZarqd.js";import"./flex.component-DKud6WrH.js";import"./triangle-exclamation.component-Cq6D91cM.js";import"./card.component-CCrFnE3X.js";import"./checkmark.component-CjmT6smm.js";import"./rbcb-toggle.template-Dq0TGtHf.js";import"./chevron-bottom.component-DTOqX__i.js";import"./chevron-right-small.component-CeWKmGqL.js";import"./chevron-right.component-Bjg_Tmik.js";import"./input.component-DOKDiFCk.js";import"./textarea.component-Us3NV-1G.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CBHVYBFU.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
