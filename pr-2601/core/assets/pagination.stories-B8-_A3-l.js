import{x as a}from"./iframe-DmRPdh8P.js";import"./pagination-BeQm1JwP.js";import"./card-GRuYr0Nz.js";import"./text-C5PMkCD7.js";import"./flex-DkIrlto8.js";import"./localized-decorator-DybikGIz.js";import"./popover.component-D-e4bzYH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-K6P9nLNa.js";import"./icon.component-CzdM3tTD.js";import"./context-menu.component-BplkuAQz.js";import"./unwrap-slots-Cmv-cOTK.js";import"./ref-OTTzRzs8.js";import"./dot-grid-one-horizontal-BzYBFjtF.js";import"./menu-heading.component-BaxYT2I1.js";import"./dropdown.component-Br_KErWo.js";import"./query-async-DmvKKm-A.js";import"./form-control-host.style-C96zejak.js";import"./form-control-header.component-BPQk-nVO.js";import"./badge.component-06DwF03_.js";import"./flex.component-D5IaVGuz.js";import"./triangle-exclamation.component-Cs1dW1wG.js";import"./card.component-B6gcHpMy.js";import"./checkmark.component-BSQBovlT.js";import"./rbcb-toggle.template-DsB0T4la.js";import"./chevron-bottom.component-yvOnj6q6.js";import"./chevron-right-small.component-DWWhYHhO.js";import"./chevron-right.component-BAH1IDgk.js";import"./input.component-piVXggk9.js";import"./textarea.component-CmNTAawn.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-TS5D8YDJ.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
