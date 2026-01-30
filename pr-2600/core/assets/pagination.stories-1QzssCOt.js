import{x as a}from"./iframe-CWB-UUgA.js";import"./pagination-0XzGoTiD.js";import"./card-Cp7mxoqm.js";import"./text-D3gmhwXg.js";import"./flex-BQc3gsH6.js";import"./localized-decorator-DhqxWkEo.js";import"./popover.component-DjL_3Zo4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DURJYNWe.js";import"./icon.component-DzOkRgBV.js";import"./context-menu.component-Oeb12gB4.js";import"./unwrap-slots-DnFggJvU.js";import"./ref-SaePMHeh.js";import"./dot-grid-one-horizontal-BIVGm7if.js";import"./menu-heading.component-CBqQb_nH.js";import"./dropdown.component-COSnlPRG.js";import"./query-async-CcNfS0R5.js";import"./form-control-host.style-C540T_ad.js";import"./form-control-header.component-CSsWa79O.js";import"./badge.component-oFwJ9yNp.js";import"./flex.component-D0qqtZ6S.js";import"./triangle-exclamation.component-BZvq8eTt.js";import"./card.component-BstX9cht.js";import"./checkmark.component-B6lI0i9b.js";import"./rbcb-toggle.template-BwICBkhl.js";import"./chevron-bottom.component-Bo9MWJ2U.js";import"./chevron-right-small.component-Dnbcu09h.js";import"./chevron-right.component-DjZmKfLC.js";import"./input.component-DLS9CMFd.js";import"./textarea.component-CrqWxLO3.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CtSbzbW1.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
