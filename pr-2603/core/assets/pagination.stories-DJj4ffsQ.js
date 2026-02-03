import{x as a}from"./iframe-diouKOJK.js";import"./pagination-CSCdljXW.js";import"./card-C0a2nNcX.js";import"./text-CAgIgsZt.js";import"./flex-CpgG1mMu.js";import"./localized-decorator-DYC8F6RS.js";import"./popover.component-BOIvvIKM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CKT4T82S.js";import"./icon.component-BYUZC0kd.js";import"./context-menu.component-CD8ZAgTN.js";import"./unwrap-slots-DbUfkRHa.js";import"./ref-r9KnRyIr.js";import"./dot-grid-one-horizontal-B2FmopKe.js";import"./menu-heading.component-fuc_wA8A.js";import"./dropdown.component-CGGY8PF_.js";import"./query-async-75m01vWb.js";import"./form-control-host.style-Bnxe7_mj.js";import"./form-control-header.component-f2a9gejf.js";import"./badge.component-DFjAPVqU.js";import"./flex.component-B-jap3kC.js";import"./triangle-exclamation.component-DTrnPpcI.js";import"./card.component-rlPQ_nNP.js";import"./checkmark.component-myYUcimK.js";import"./rbcb-toggle.template-DoJJ67pR.js";import"./chevron-bottom.component-Bl1dtlHG.js";import"./chevron-right-small.component-D7_BaKXR.js";import"./chevron-right.component-DqP5H0qY.js";import"./input.component-QYKWoHW9.js";import"./textarea.component-CnVUjOUp.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Bp3p65xs.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
