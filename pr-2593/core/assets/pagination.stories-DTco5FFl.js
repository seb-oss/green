import{x as a}from"./iframe-DafHIkju.js";import"./pagination-BhIg4808.js";import"./card-BFrA_GFa.js";import"./text-C5_Y1IZP.js";import"./flex-g1Uot3jJ.js";import"./localized-decorator-WBJcVGCI.js";import"./popover.component-DtmPL3uU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-TLW-yzG9.js";import"./icon.component-Cp3XGKFu.js";import"./context-menu.component-BUk9Virh.js";import"./unwrap-slots-ComX9w_e.js";import"./ref-CxxBJ9qe.js";import"./dot-grid-one-horizontal-BT1yTIrz.js";import"./menu-heading.component-ivq68yNQ.js";import"./dropdown.component-j98TzN2F.js";import"./query-async-CEfQKywZ.js";import"./form-control-host.style-DS4elOOi.js";import"./form-control-header.component-DgnTObS2.js";import"./badge.component-D0_GqK4T.js";import"./flex.component-CPWa8UO7.js";import"./triangle-exclamation.component-DWkTFBoL.js";import"./card.component-ykH1nxb_.js";import"./checkmark.component-BpPWkKnl.js";import"./rbcb-toggle.template-GGY5A8wx.js";import"./chevron-bottom.component-CffzKhUk.js";import"./chevron-right-small.component-BME7bcNF.js";import"./chevron-right.component-DsvXOJyi.js";import"./input.component-g6bwy180.js";import"./textarea.component-D1iXYJze.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B1sQNMrh.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
