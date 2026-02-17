import{x as a}from"./iframe-DvHbIuuO.js";import"./pagination-y_6i4Orx.js";import"./card-BPas4ieR.js";import"./text-C-v1PNuT.js";import"./flex-MKvL57E0.js";import"./localized-decorator-CIupvBuP.js";import"./popover.component-D7DJ32yB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-NQv0HgpX.js";import"./icon.component-sUnlcUx4.js";import"./context-menu.component-NPkGrpXZ.js";import"./unwrap-slots-DELMTorE.js";import"./ref-DZGRXUu_.js";import"./dot-grid-one-horizontal-BwCBbc_h.js";import"./menu-heading.component-Dx4AvyUG.js";import"./dropdown.component-DsY5oxQG.js";import"./query-async-B6SbaM9B.js";import"./form-control-host.style-Bq84WiDH.js";import"./form-control-header.component-D3ah8-Np.js";import"./badge.component-BDGevOkk.js";import"./flex.component-YrCAuDEy.js";import"./triangle-exclamation.component-B6Nab224.js";import"./card.component-CLdwazrG.js";import"./checkmark.component-Pxdqj_-C.js";import"./rbcb-toggle.template-Bh-kkIK2.js";import"./chevron-bottom.component-6MWZbbkh.js";import"./chevron-right-small.component-DtKJlyV0.js";import"./chevron-right.component-BlJ_3FaS.js";import"./input.component-DltzzxyC.js";import"./textarea.component-BI576ARW.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-kPD3Gu62.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
