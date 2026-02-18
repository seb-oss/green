import{x as a}from"./iframe-CDYwBWwb.js";import"./pagination-Bp5rZoss.js";import"./card-BE6ML2c4.js";import"./text-BCzI95gP.js";import"./flex-B2lKDRk2.js";import"./localized-decorator-CTPpDN0m.js";import"./popover.component-D26aIRBH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DVIXh5fg.js";import"./icon.component-DsQvcCLO.js";import"./context-menu.component-CyaeBKE-.js";import"./unwrap-slots-DsLTz3oa.js";import"./ref-CRNBYR0o.js";import"./dot-grid-one-horizontal-DrxOmEZc.js";import"./menu-heading.component-1ad_jZof.js";import"./dropdown.component-Ggs84LXl.js";import"./query-async-QBT06sAI.js";import"./form-control-host.style-CY1pZw6A.js";import"./form-control-header.component-BVZz5jGv.js";import"./badge.component-DOkIIYzL.js";import"./flex.component-Ci8HJepP.js";import"./triangle-exclamation.component-kru_ealq.js";import"./card.component-CA9Ke_4r.js";import"./checkmark.component-CoSq204c.js";import"./rbcb-toggle.template-CroFatrj.js";import"./chevron-bottom.component-CpTXIEaR.js";import"./chevron-right-small.component-O30anLhI.js";import"./chevron-right.component-CukdDlWK.js";import"./input.component-B0DMaRDc.js";import"./textarea.component-BdR1a2Sm.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-HUtEMzrC.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
