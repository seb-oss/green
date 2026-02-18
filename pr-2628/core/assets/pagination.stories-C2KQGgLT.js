import{x as a}from"./iframe-CpqjK228.js";import"./pagination-CU1l-Pk_.js";import"./card-BykM8jEO.js";import"./text-DJlZz-OA.js";import"./flex-CQad1IfU.js";import"./localized-decorator-DFl8Kj1T.js";import"./popover.component-BGZBM3hK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B0Y9wkNt.js";import"./icon.component-DXkG6Wjx.js";import"./context-menu.component-BM6L8GnC.js";import"./unwrap-slots-BqDiEUFi.js";import"./ref-CBXrEj4Y.js";import"./dot-grid-one-horizontal-DNmKZOlY.js";import"./menu-heading.component-DrB-oWlu.js";import"./dropdown.component-Co7hfdW8.js";import"./query-async-D-YClkJJ.js";import"./form-control-host.style-bUEMy_zq.js";import"./form-control-header.component-Bdbrqj94.js";import"./badge.component-8pojcllU.js";import"./flex.component-DVPv3sYg.js";import"./triangle-exclamation.component-BPVoDvof.js";import"./card.component-Dy3OvPeW.js";import"./checkmark.component-C7uu3_EY.js";import"./rbcb-toggle.template-CSYk5FmX.js";import"./chevron-bottom.component-V6xPgCbr.js";import"./chevron-right-small.component-CNoML8BM.js";import"./chevron-right.component-B1SB6tB4.js";import"./input.component-OeF35e8S.js";import"./textarea.component-ChqT3_I4.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-tcImCxvC.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
