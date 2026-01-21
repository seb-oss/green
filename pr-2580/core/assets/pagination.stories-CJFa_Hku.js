import{x as a}from"./iframe-DCZi1hNl.js";import"./pagination-CEoEM3qf.js";import"./card-oSj1jAQh.js";import"./text-Dwg7KP8l.js";import"./flex-lUBsuVHj.js";import"./localized-decorator-Cy9weBLt.js";import"./popover.component-DkksO6QR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ClJAay1H.js";import"./icon.component-vpRXZ3fA.js";import"./context-menu.component-D1XbuEZU.js";import"./unwrap-slots-VP_skJYy.js";import"./ref-CMAtN5Yn.js";import"./dot-grid-one-horizontal-DzyEflfX.js";import"./menu-heading.component-BJaemShL.js";import"./dropdown.component-BKGrXpq4.js";import"./query-async-CWoIh4YV.js";import"./form-control-host.style-B-XhhaUB.js";import"./form-control-header.component-rDTlUU5Y.js";import"./badge.component-C0wD-M2c.js";import"./flex.component-CB4yYzq3.js";import"./triangle-exclamation.component-B0ZvKM7h.js";import"./card.component-CsDaW6EY.js";import"./checkmark.component-BbpKypbL.js";import"./rbcb-toggle.template-CO7mAmp8.js";import"./chevron-bottom.component-CVSVk4zk.js";import"./chevron-right-small.component-B469BKuK.js";import"./chevron-right.component-DAHcVbeF.js";import"./input.component-Ce6O7zpH.js";import"./textarea.component-qaeSuYNa.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ClwZ4FDN.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
