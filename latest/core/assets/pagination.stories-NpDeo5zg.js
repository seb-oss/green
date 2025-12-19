import{x as r}from"./iframe-CaSnqVAO.js";import"./pagination-R090HqdX.js";import"./card-DR3vQbbj.js";import"./text-ChPVSlNm.js";import"./flex-Dg1XC8wP.js";import"./localized-decorator-Bh06p6zl.js";import"./popover.component-BWnqnfME.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CfK7DhBz.js";import"./icon.component-BdiabhnO.js";import"./context-menu.component-DydjnwXA.js";import"./unwrap-slots-BLDJFuxH.js";import"./ref-CJdWf_uW.js";import"./dot-grid-one-horizontal-Bzw0zZcl.js";import"./menu-heading.component-BM_nQlmD.js";import"./dropdown.component-Dt1m-Yrl.js";import"./query-async-BkEvcfiS.js";import"./form-control-host.style-CHpZv3gZ.js";import"./form-control-header.component-zFLYIo2l.js";import"./badge.component-DKCNgvUp.js";import"./flex.component-xmOxoKSe.js";import"./triangle-exclamation.component-Cpih2oi2.js";import"./card.component-B05iLK3e.js";import"./checkmark.component-0YH12w0L.js";import"./rbcb-toggle.template-cBdrhMyL.js";import"./chevron-bottom.component-Bi2gF6jd.js";import"./chevron-right-small.component-ChwIYPBS.js";import"./chevron-right.component-B7hjmRAr.js";import"./input.component-DpGK-r0-.js";import"./textarea.component-CSuOmQjN.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-JlCI9qIa.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
