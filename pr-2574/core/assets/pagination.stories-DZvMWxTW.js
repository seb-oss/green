import{x as a}from"./iframe-BkGvYmww.js";import"./pagination-ChqMj2qC.js";import"./card-CAaB9dtx.js";import"./text-C0ri8XKx.js";import"./flex-CddmS-ZU.js";import"./localized-decorator-CtflH7fI.js";import"./popover.component-CNOuX2Xv.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-TJwuRnEb.js";import"./icon.component-Duin8-xy.js";import"./context-menu.component-DfnN-nsM.js";import"./unwrap-slots-CxjRisog.js";import"./ref-BdcT4Ajl.js";import"./dot-grid-one-horizontal-BDRNFow1.js";import"./menu-heading.component-B0mjYvYg.js";import"./dropdown.component-B5DKHaCl.js";import"./query-async-CpfpMiD0.js";import"./form-control-host.style-DtI9I_pH.js";import"./form-control-header.component-vkrs_L10.js";import"./badge.component-B38mBsFA.js";import"./flex.component-CsUSGEaD.js";import"./triangle-exclamation.component-sKxxe7HO.js";import"./card.component-jEkPx2Ld.js";import"./checkmark.component-G90VplZx.js";import"./rbcb-toggle.template-Dx0LDhJP.js";import"./chevron-bottom.component-By6_1Zbi.js";import"./chevron-right-small.component-BSsIN6yS.js";import"./chevron-right.component-DtOul6S_.js";import"./input.component-BS8YdS2P.js";import"./textarea.component-BacQFsNx.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-_GmNU5F6.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
