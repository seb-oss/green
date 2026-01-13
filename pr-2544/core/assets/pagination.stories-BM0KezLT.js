import{x as r}from"./iframe-C_OmzNQG.js";import"./pagination-epjMh9-V.js";import"./card-CbTp-iDy.js";import"./text-Dm88LN5D.js";import"./flex-COEZySN9.js";import"./localized-decorator-Bkv57jLL.js";import"./popover.component-BDS7Y3zE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B0KC1LKg.js";import"./icon.component-CTsCIeSH.js";import"./context-menu.component-BY7p9O6B.js";import"./unwrap-slots-CnzIHMbA.js";import"./ref-DZ1PSXx6.js";import"./dot-grid-one-horizontal-BLr9bwbb.js";import"./menu-heading.component-DCVlMgHR.js";import"./dropdown.component-TmDSu0QS.js";import"./query-async-DGFVKprj.js";import"./form-control-host.style-B0sKVzul.js";import"./form-control-header.component-DYKAzFEj.js";import"./badge.component-6Tbj7Rc3.js";import"./flex.component-HUb2oQeG.js";import"./triangle-exclamation.component-DoikL4EL.js";import"./card.component-BLV1vrIS.js";import"./checkmark.component-CMy-22lj.js";import"./rbcb-toggle.template-DiJDkBic.js";import"./chevron-bottom.component-yAAP1zwF.js";import"./chevron-right-small.component-DYi7jGxd.js";import"./chevron-right.component-Bl8pCnAa.js";import"./input.component-D84LBY63.js";import"./textarea.component-BbWonu4i.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BSjiPVPy.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
