import{x as a}from"./iframe-DLqKMtk0.js";import"./pagination-wHy9iMue.js";import"./card-CZeJGyqc.js";import"./text-DR4TzMuQ.js";import"./flex-DOoac8-e.js";import"./localized-decorator-DOVk7XSQ.js";import"./popover.component-D2U_gyG4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bdgc3Vde.js";import"./icon.component-D1vcvTVf.js";import"./context-menu.component-CYeOae7g.js";import"./unwrap-slots-DfQbNeLz.js";import"./ref-BHj6CIZp.js";import"./dot-grid-one-horizontal-MRzNaZPg.js";import"./menu-heading.component-BqEuZMJy.js";import"./dropdown.component-tFc76OAZ.js";import"./query-async-BjGxF6G-.js";import"./form-control-host.style-BmgZTsAy.js";import"./form-control-header.component-DzcDFmXb.js";import"./badge.component-C8f7xlte.js";import"./flex.component-DeoECx29.js";import"./triangle-exclamation.component-clAVJ6gM.js";import"./card.component-HuMgwQrE.js";import"./checkmark.component-B1QN-spq.js";import"./rbcb-toggle.template-B7GIK3WA.js";import"./chevron-bottom.component-DU4Ub9Oq.js";import"./chevron-right-small.component-D_LZEZ0Y.js";import"./chevron-right.component-Dc2SftcD.js";import"./input.component-Bub0FMsu.js";import"./textarea.component-CwVMBoT0.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-NsglG_Ww.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
