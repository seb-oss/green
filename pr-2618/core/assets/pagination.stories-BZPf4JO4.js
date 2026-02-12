import{x as a}from"./iframe-Dp9IHT7M.js";import"./pagination-CZL9Mfio.js";import"./card-7V_T-afe.js";import"./text-DBbTD983.js";import"./flex-BwWHANmJ.js";import"./localized-decorator-DE1HqyVs.js";import"./popover.component-DtrkYBYr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CVCCZJcL.js";import"./icon.component-BLFwunDp.js";import"./context-menu.component-7VfKyEbS.js";import"./unwrap-slots-udkjBpOx.js";import"./ref-CEhLC3U6.js";import"./dot-grid-one-horizontal-Cl66zWjI.js";import"./menu-heading.component-BCbLIa0s.js";import"./dropdown.component-B4bUmix9.js";import"./query-async-CEcZVkp5.js";import"./form-control-host.style-BvHSQGTy.js";import"./form-control-header.component-BoOmZUfj.js";import"./badge.component-mqcacaXY.js";import"./flex.component-_Iuoz229.js";import"./triangle-exclamation.component-D4pv6Zbk.js";import"./card.component-BwAAcLuz.js";import"./checkmark.component-rBHvtd9D.js";import"./rbcb-toggle.template-Ch9loGqO.js";import"./chevron-bottom.component-Cz95kOpL.js";import"./chevron-right-small.component-OaQGIz1v.js";import"./chevron-right.component-DbF1T6yw.js";import"./input.component-BdDf24zP.js";import"./textarea.component-CfGGTqdF.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C-XkYi72.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
