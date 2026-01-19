import{x as a}from"./iframe-i-YM5Qxf.js";import"./pagination-CBIBuqi0.js";import"./card-DBaW47M7.js";import"./text-D8ef2lmO.js";import"./flex-DKNhuzsh.js";import"./localized-decorator-CkxI7jm-.js";import"./popover.component-DdjztAeu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CC38gYo1.js";import"./icon.component-C7iCEPBm.js";import"./context-menu.component-BfwP52Je.js";import"./unwrap-slots-zBYlFB86.js";import"./ref-Ckq4e1Um.js";import"./dot-grid-one-horizontal-P7zIh7Ss.js";import"./menu-heading.component-CfxDiun8.js";import"./dropdown.component-BP7Ha3Aa.js";import"./query-async-DTBNIskl.js";import"./form-control-host.style-CWcp7a5Y.js";import"./form-control-header.component-BROlX29F.js";import"./badge.component-JUnsRAnk.js";import"./flex.component-CiVGWwuh.js";import"./triangle-exclamation.component-NnZIPnEc.js";import"./card.component-BdRWpuNF.js";import"./checkmark.component-DEsiMZ_Y.js";import"./rbcb-toggle.template-CND3QVBk.js";import"./chevron-bottom.component-CAYHFbff.js";import"./chevron-right-small.component-jgoknOIQ.js";import"./chevron-right.component-C_UhusWM.js";import"./input.component-BmgqhrRT.js";import"./textarea.component-CGjkFyka.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C_STuje8.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
