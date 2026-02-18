import{x as a}from"./iframe-BVoLPnv3.js";import"./pagination-DmShTX9b.js";import"./card-D4qSE8kB.js";import"./text-DFkDUm4n.js";import"./flex-CEVsZ2mS.js";import"./localized-decorator-BLYPI52E.js";import"./popover.component-Byj8vsry.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dgkwmafn.js";import"./icon.component-Bnk9i1lH.js";import"./context-menu.component-BfowQJor.js";import"./unwrap-slots-lItjASD4.js";import"./ref-pmyQR8XX.js";import"./dot-grid-one-horizontal-BftPulZn.js";import"./menu-heading.component-Baw3o82I.js";import"./dropdown.component-BV6zGp5U.js";import"./query-async-Dbyemdbn.js";import"./form-control-host.style-CoH60cxO.js";import"./form-control-header.component-CCW-PKD7.js";import"./badge.component-D2Z9j_hW.js";import"./flex.component-CNqmiosl.js";import"./triangle-exclamation.component-CPVNcR7e.js";import"./card.component-J6cqnWpe.js";import"./checkmark.component-WFxTWqP_.js";import"./rbcb-toggle.template-BoU_3I2M.js";import"./chevron-bottom.component-CmneTVn9.js";import"./chevron-right-small.component-Dl7VPZBW.js";import"./chevron-right.component-C4Luh_uh.js";import"./input.component-Cylx0WV4.js";import"./textarea.component-49A_Jf4x.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D2kjhLCA.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
