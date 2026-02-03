import{x as a}from"./iframe-C1rAZNES.js";import"./pagination-DSCIOlom.js";import"./card-C-woN3Ka.js";import"./text-BBacKgE1.js";import"./flex-CYwYziz2.js";import"./localized-decorator-BVfD1jcZ.js";import"./popover.component-oEMiOJtE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D3q0fDXK.js";import"./icon.component-CK0E683U.js";import"./context-menu.component-W_he9pBx.js";import"./unwrap-slots-CCXIszC4.js";import"./ref-CdPiRzS2.js";import"./dot-grid-one-horizontal-Bgq3FzBQ.js";import"./menu-heading.component-CvHsUcl-.js";import"./dropdown.component-BOGhuodQ.js";import"./query-async-BghkAqFq.js";import"./form-control-host.style-Bewqvn5c.js";import"./form-control-header.component-DVm7RJtM.js";import"./badge.component-C9MFCsK5.js";import"./flex.component-DUe94c28.js";import"./triangle-exclamation.component-DXfASxC-.js";import"./card.component-CAtRNgbP.js";import"./checkmark.component-Cvq98IYU.js";import"./rbcb-toggle.template-CCGYFIE4.js";import"./chevron-bottom.component-AwGobeo9.js";import"./chevron-right-small.component-DrZoKR_I.js";import"./chevron-right.component-BtvLfVqg.js";import"./input.component-CZ3fDGtK.js";import"./textarea.component-BOesA8X1.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DHKqdHM4.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
