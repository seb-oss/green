import{x as r}from"./iframe-lP-4zMVt.js";import"./pagination-Dg2F_Ov6.js";import"./card-BhapCHL8.js";import"./text-BFGG3m-9.js";import"./flex-KHOWRo2X.js";import"./localized-decorator-BEn2_4eF.js";import"./popover.component-xJUYYMva.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D3TnpIc1.js";import"./icon.component-kHVMrRuO.js";import"./context-menu.component-CJyjMnL5.js";import"./unwrap-slots-DHqTztSi.js";import"./ref-up6giZMU.js";import"./dot-grid-one-horizontal-MsG59vvS.js";import"./menu-heading.component-DuSKvXTe.js";import"./dropdown.component-ChMn1bbJ.js";import"./query-async-DzoOZbcv.js";import"./form-control-host.style-CDE4Ks3X.js";import"./form-control-header.component-DZFomjLG.js";import"./badge.component-ya6KONEK.js";import"./flex.component-BEL83sYW.js";import"./triangle-exclamation.component-BS1rtuZa.js";import"./card.component-B8x6_bHz.js";import"./checkmark.component-DrA8O3lE.js";import"./rbcb-toggle.template-DY2nLiQh.js";import"./chevron-bottom.component-CGMRURVm.js";import"./chevron-right-small.component-Bam4lnYA.js";import"./chevron-right.component-isznlcpI.js";import"./input.component-_BDBhNR9.js";import"./textarea.component-DICiDFSy.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BX5C-MCm.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
