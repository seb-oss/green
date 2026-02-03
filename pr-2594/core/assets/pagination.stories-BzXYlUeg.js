import{x as a}from"./iframe-DjmpXFqH.js";import"./pagination-k4fjrgTD.js";import"./card-C1NPxfBo.js";import"./text-DGFrR1JP.js";import"./flex-D4gP1dlV.js";import"./localized-decorator-YyVu2sHJ.js";import"./popover.component-D0wlSGbw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DSyj6cJs.js";import"./icon.component-DMllZNXO.js";import"./context-menu.component-BifhEWqt.js";import"./unwrap-slots-BeKsKsWV.js";import"./ref-DW-5bj1T.js";import"./dot-grid-one-horizontal-Bwm-xLFh.js";import"./menu-heading.component-CGyZTh-Y.js";import"./dropdown.component-CKG8c0C5.js";import"./query-async-CS6dSmk0.js";import"./form-control-host.style-D8p1-iob.js";import"./form-control-header.component-DjujBcBa.js";import"./badge.component-BWh4Saol.js";import"./flex.component-CUJrpbdn.js";import"./triangle-exclamation.component-BSZwLSIi.js";import"./card.component-DjDji-0O.js";import"./checkmark.component-kR_ZON5I.js";import"./rbcb-toggle.template-BESM_vhI.js";import"./chevron-bottom.component-1qbnuAD4.js";import"./chevron-right-small.component-DzAdB9vQ.js";import"./chevron-right.component-DRe3OBPH.js";import"./input.component-OgaTs4CD.js";import"./textarea.component-gBBGeptw.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DmjJ62Ei.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
