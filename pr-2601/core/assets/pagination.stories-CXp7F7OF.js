import{x as a}from"./iframe-B_Sc2FD_.js";import"./pagination-C8Oystrt.js";import"./card-Brihcow9.js";import"./text-BmZzRDhG.js";import"./flex-CK-KMwcg.js";import"./localized-decorator-yp3xEb-A.js";import"./popover.component-B98PXTcZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-iid_FxYQ.js";import"./icon.component-CO_afi3Z.js";import"./context-menu.component-4kGmHdYr.js";import"./unwrap-slots-DT7fXUN7.js";import"./ref-DKplbPIQ.js";import"./dot-grid-one-horizontal-D1yj7kxZ.js";import"./menu-heading.component-D24b0oAN.js";import"./dropdown.component-CBx-cUCj.js";import"./query-async-Cljm_av7.js";import"./form-control-host.style-kXceGqis.js";import"./form-control-header.component-CrPY8q0e.js";import"./badge.component-7OrAhW2Y.js";import"./flex.component-7kB9yVhW.js";import"./triangle-exclamation.component-DBoTeYrv.js";import"./card.component-DqqIVQ9y.js";import"./checkmark.component-n22IpYYL.js";import"./rbcb-toggle.template-Diol-Wd2.js";import"./chevron-bottom.component-QNdAGytU.js";import"./chevron-right-small.component-CXxtwsmv.js";import"./chevron-right.component-oayS4KNZ.js";import"./input.component-MiVBCOVj.js";import"./textarea.component-7SukMNVf.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BPayJJs_.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
