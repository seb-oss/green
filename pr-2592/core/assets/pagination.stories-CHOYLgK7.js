import{x as a}from"./iframe-DY4zMYuy.js";import"./pagination-B8D1rR1X.js";import"./card-Dinyssf6.js";import"./text-DBWKmB1x.js";import"./flex-ofrsO3A5.js";import"./localized-decorator-BXYk1OcL.js";import"./popover.component-BNjy2HzE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D-aIl8Wk.js";import"./icon.component-DYtvIxiB.js";import"./context-menu.component-Cm2afblz.js";import"./unwrap-slots-Ctcj9d_J.js";import"./ref-BRGwLPid.js";import"./dot-grid-one-horizontal-CnvUt8tQ.js";import"./menu-heading.component-r5eUZhMX.js";import"./dropdown.component-BDHWovw3.js";import"./query-async-Decz3F18.js";import"./form-control-host.style-CWqT0Q5B.js";import"./form-control-header.component-lwybuvDq.js";import"./badge.component-DGYeSSjw.js";import"./flex.component-RC8ATDCr.js";import"./triangle-exclamation.component-pBTla8ZC.js";import"./card.component-_Nmo-84j.js";import"./checkmark.component-CpWDrgah.js";import"./rbcb-toggle.template-BQr0UDri.js";import"./chevron-bottom.component-f-q_a-8f.js";import"./chevron-right-small.component-DoAMs7ex.js";import"./chevron-right.component-CHLVxyuO.js";import"./input.component-CZbj6TtN.js";import"./textarea.component-DvcbMd5U.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BWEPvTIt.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
