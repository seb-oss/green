import{x as a}from"./iframe-Bk-MxZ0z.js";import"./pagination-C2KrFNX6.js";import"./card-A8KzFDUm.js";import"./text-pbmOqtZ5.js";import"./flex-BYqjNQyT.js";import"./localized-decorator-B9bUXMXJ.js";import"./popover.component-D82SLCgx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BMf_QwWg.js";import"./icon.component-Eez9FLLu.js";import"./context-menu.component-DwEOfJNg.js";import"./unwrap-slots-0DZMUSaE.js";import"./ref-CDPOzDcO.js";import"./dot-grid-one-horizontal-DYh5KmJr.js";import"./menu-heading.component-azeQl40w.js";import"./dropdown.component-BotyT4x5.js";import"./query-async-bBN8WLzI.js";import"./form-control-host.style-z8BFTuar.js";import"./form-control-header.component-GyV-dNpi.js";import"./badge.component-7Vl6TzJw.js";import"./flex.component-DgzV2LW_.js";import"./triangle-exclamation.component-CvPDgBhF.js";import"./card.component-CRa9AmYs.js";import"./checkmark.component-CY-Hz2M8.js";import"./rbcb-toggle.template-CDu8vnrL.js";import"./chevron-bottom.component-B3DyHPAK.js";import"./chevron-right-small.component-8FUsSnT5.js";import"./chevron-right.component-Bm1g1-dK.js";import"./input.component-BSnk53qS.js";import"./textarea.component-CvI7PHob.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BmxKMvdP.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
