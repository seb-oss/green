import{x as a}from"./iframe-BRHd-8xu.js";import"./pagination-ZH3WH2jy.js";import"./card-Dt2s6eX8.js";import"./text-Gx96_eCS.js";import"./flex-CutkjKW5.js";import"./localized-decorator-D09VkCtY.js";import"./popover.component-B3pnHN9n.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DUbvF7d8.js";import"./icon.component-B25dK3_p.js";import"./context-menu.component-ChH5CfAV.js";import"./unwrap-slots-BzEBGji2.js";import"./ref-CGhkBRTR.js";import"./dot-grid-one-horizontal-WuzWArFw.js";import"./menu-heading.component-9n6LBedJ.js";import"./dropdown.component-C7E6Quzs.js";import"./query-async-BeFCzS9t.js";import"./form-control-host.style-sF2ihB9t.js";import"./form-control-header.component-FRNdSG70.js";import"./badge.component-WREHBvUO.js";import"./flex.component-xbpp9NVQ.js";import"./triangle-exclamation.component-Cszb5iZH.js";import"./card.component-CoBX20lT.js";import"./checkmark.component-BDpREYkb.js";import"./rbcb-toggle.template-CyIvNcrR.js";import"./chevron-bottom.component-DBxBXBij.js";import"./chevron-right-small.component-BFAnPorV.js";import"./chevron-right.component-BIidpRwk.js";import"./input.component-Dk6KEq7K.js";import"./textarea.component-DD_tKwC8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BrULXeAC.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
