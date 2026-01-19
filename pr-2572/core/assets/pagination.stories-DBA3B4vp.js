import{x as r}from"./iframe-DrpbGOBy.js";import"./pagination-CjH1Efhs.js";import"./card-C5x0x5LV.js";import"./text-YmIhC6ea.js";import"./flex-CBHUutJ_.js";import"./localized-decorator-CZeAc3pd.js";import"./popover.component-B-Z3uz9-.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CUpQdpA6.js";import"./icon.component-FS7sQWzM.js";import"./context-menu.component-DX3DNJGR.js";import"./unwrap-slots-C4aVHPKM.js";import"./ref-Cui-QnsA.js";import"./dot-grid-one-horizontal-CXW2sOwL.js";import"./menu-heading.component-JRG-j-VQ.js";import"./dropdown.component-BIpE38fa.js";import"./query-async-CoixEhqz.js";import"./form-control-host.style-CECnbJqP.js";import"./form-control-header.component-CjgjTvtd.js";import"./badge.component-qfp1bwAG.js";import"./flex.component-BBy4cixO.js";import"./triangle-exclamation.component--P9fK0-o.js";import"./card.component-TDhnY8Bn.js";import"./checkmark.component-Lph5XHb3.js";import"./rbcb-toggle.template-CFVgjhKu.js";import"./chevron-bottom.component-CRVTE0j2.js";import"./chevron-right-small.component-yrIMtFwu.js";import"./chevron-right.component-BTOBmLvg.js";import"./input.component-CAaC5pcn.js";import"./textarea.component-DlYjT2E8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D6Os5mfZ.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
