import{x as a}from"./iframe-BA3TVzOL.js";import"./pagination-SHjSS4D2.js";import"./card-Nh8N7JGo.js";import"./text-BSZQlWvp.js";import"./flex-BEV7UTdd.js";import"./localized-decorator-Bfa8DFiV.js";import"./popover.component-CIArKX3m.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bnt0RTcD.js";import"./icon.component-DNkU6CuX.js";import"./context-menu.component-DR7nyrFP.js";import"./unwrap-slots-DT0R9U1D.js";import"./ref-Ccug316D.js";import"./dot-grid-one-horizontal-B74QQZ1Y.js";import"./menu-heading.component-DagJzISa.js";import"./dropdown.component-K2u_oOkg.js";import"./query-async-cUpoGvvP.js";import"./form-control-host.style-C64NJ0op.js";import"./form-control-header.component-C4S9cWkQ.js";import"./badge.component-Cde762Jh.js";import"./flex.component-DaRqz6HB.js";import"./triangle-exclamation.component-CnqH6jM8.js";import"./card.component-kHBbkZHO.js";import"./checkmark.component-DX7ou_g_.js";import"./rbcb-toggle.template-C3edZko0.js";import"./chevron-bottom.component-DWkqMqZp.js";import"./chevron-right-small.component-Y3MK-YYj.js";import"./chevron-right.component-3SdVQLhJ.js";import"./input.component-Br6E40FG.js";import"./textarea.component-CUox_2-r.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D-ZQ6c8M.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
