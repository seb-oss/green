import{x as a}from"./iframe-BavzDZMV.js";import"./pagination-D5KPwnGe.js";import"./card-B9lFZzJK.js";import"./text-CpmbrUWp.js";import"./flex-Dp2zcodN.js";import"./localized-decorator-B6A2Gnt2.js";import"./popover.component-CPbYpuQr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Df8LNFan.js";import"./icon.component-Cev4K6id.js";import"./context-menu.component-CKq8-dV6.js";import"./unwrap-slots-rIOzlakZ.js";import"./ref-CNgy3l5F.js";import"./dot-grid-one-horizontal-Ct0Y9AGv.js";import"./menu-heading.component-cASZ_cKy.js";import"./dropdown.component-DyuGM1JD.js";import"./query-async-BDuJ0BIf.js";import"./form-control-host.style-BUGw4wjR.js";import"./form-control-header.component-Dla5xxGh.js";import"./badge.component-COiazuH6.js";import"./flex.component-Do3AdSpB.js";import"./triangle-exclamation.component-B_6hKlEp.js";import"./card.component-CUPSPXah.js";import"./checkmark.component-DP95pxpn.js";import"./rbcb-toggle.template-OlqmDZNy.js";import"./chevron-bottom.component-BlkzCzPA.js";import"./chevron-right-small.component-Bf0oBdWD.js";import"./chevron-right.component-LKxZT-Fl.js";import"./input.component-CRSSCEAd.js";import"./textarea.component-DoHekCMX.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CLT6BhIi.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
