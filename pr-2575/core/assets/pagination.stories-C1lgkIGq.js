import{x as a}from"./iframe-CJoIiIdK.js";import"./pagination-BeUoHLhz.js";import"./card-Do3Jtmj8.js";import"./text-Br9EQg5A.js";import"./flex-WZpX7R1u.js";import"./localized-decorator-B52viOIE.js";import"./popover.component-Ce8F59gP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-vI5lEVSG.js";import"./icon.component-4oiZW30k.js";import"./context-menu.component-DE2w8JzE.js";import"./unwrap-slots-DQOTygqO.js";import"./ref-BmIqiLI7.js";import"./dot-grid-one-horizontal-D3WgMh24.js";import"./menu-heading.component-DKG5O6uJ.js";import"./dropdown.component-Dvx48ttb.js";import"./query-async-D89qAnl0.js";import"./form-control-host.style-Dmgf2Lnb.js";import"./form-control-header.component-Cvo4PuFM.js";import"./badge.component-BQhh_rMy.js";import"./flex.component-D_xxqkO6.js";import"./triangle-exclamation.component-D3Kl-hP3.js";import"./card.component-DhSEVE0I.js";import"./checkmark.component-BANOg0Y2.js";import"./rbcb-toggle.template-DyWjXP9d.js";import"./chevron-bottom.component-CFe9inZH.js";import"./chevron-right-small.component-CTSQyjtm.js";import"./chevron-right.component-DOCJ_MBF.js";import"./input.component-373cxrin.js";import"./textarea.component-lwg_WhI1.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D2Jg-mgg.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
