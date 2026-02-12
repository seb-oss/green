import{x as a}from"./iframe-BeOaLZjf.js";import"./pagination-DgsULxZq.js";import"./card-DPGFaBal.js";import"./text-dTGwlLsW.js";import"./flex-BpkCVlnr.js";import"./localized-decorator-8g8mZYvT.js";import"./popover.component-D-HspmfA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DW8WKBBZ.js";import"./icon.component-D3mUFOjJ.js";import"./context-menu.component-C41HOz8O.js";import"./unwrap-slots--8Zj2VHl.js";import"./ref-MhBei6io.js";import"./dot-grid-one-horizontal-DWo4MD85.js";import"./menu-heading.component-EcsSywx1.js";import"./dropdown.component-UTY1Mkcy.js";import"./query-async-CywWd7aF.js";import"./form-control-host.style-COGVIFqv.js";import"./form-control-header.component-Dh0XGzGI.js";import"./badge.component-BK4bPnmm.js";import"./flex.component-Dzm4lvmQ.js";import"./triangle-exclamation.component-CBt56mvX.js";import"./card.component-BconUH57.js";import"./checkmark.component-BLIBtG0c.js";import"./rbcb-toggle.template-BN-0j27d.js";import"./chevron-bottom.component-xA2g2m3n.js";import"./chevron-right-small.component-k64LMjAS.js";import"./chevron-right.component-xFPaWKUC.js";import"./input.component-B_6fh-TN.js";import"./textarea.component-BR6ErWNV.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Ce1QaAMd.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
