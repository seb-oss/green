import{x as a}from"./iframe-QVvLFfte.js";import"./pagination-Cy5yX0Vo.js";import"./card-BamLWvut.js";import"./text-MMRPx7Ks.js";import"./flex-Cp4uQWKA.js";import"./localized-decorator-o4Dzz4ZV.js";import"./popover.component-DD1lUmJc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BrSzyNWt.js";import"./icon.component-B2_WfcN3.js";import"./context-menu.component-BHmSaWPF.js";import"./unwrap-slots-C784xl9g.js";import"./ref-hDEIUQ9-.js";import"./dot-grid-one-horizontal-CyH8uvQZ.js";import"./menu-heading.component-C-4YP6N2.js";import"./dropdown.component-BSmd3Mg9.js";import"./query-async-CKROHTJO.js";import"./form-control-host.style-BejgHUVz.js";import"./form-control-header.component-DHEhxjLB.js";import"./badge.component-B6F2FtpB.js";import"./flex.component-C0rle56H.js";import"./triangle-exclamation.component-Cqx7pcO0.js";import"./card.component-_54X5HSj.js";import"./checkmark.component-qHqw5dgx.js";import"./rbcb-toggle.template-9Zoyijnn.js";import"./chevron-bottom.component-Ckxuv7jp.js";import"./chevron-right-small.component-D3wEbVl1.js";import"./chevron-right.component-9R7kG0eE.js";import"./input.component-jLmVnESl.js";import"./textarea.component-CBJzfwyN.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ByyYdioH.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
