import{x as a}from"./iframe-CpY1XI_F.js";import"./pagination-DnE3b8wf.js";import"./card-Dk0EqaEb.js";import"./text-DeqYPGMd.js";import"./flex-BPeximib.js";import"./localized-decorator-OYUXpxX4.js";import"./popover.component-CWey9yAA.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-An5jg8v9.js";import"./icon.component-GpGYD9eN.js";import"./context-menu.component-D2TWOJex.js";import"./unwrap-slots-gIlfNhUu.js";import"./ref-9K8DzPNF.js";import"./dot-grid-one-horizontal-rcBUHBk5.js";import"./menu-heading.component-DBkslsR9.js";import"./dropdown.component-Cmw4X8MN.js";import"./query-async-C3ouLxgw.js";import"./form-control-host.style-DRVS9UTl.js";import"./form-control-header.component-DLPW20gT.js";import"./badge.component-Brg-KJA6.js";import"./flex.component-BmF7ws3m.js";import"./triangle-exclamation.component-B9CYdz3P.js";import"./card.component-Cxuf-lUX.js";import"./checkmark.component-mc92pgy1.js";import"./rbcb-toggle.template-CCLmQpIn.js";import"./chevron-bottom.component-DqwKdhdr.js";import"./chevron-right-small.component-jABhx4oD.js";import"./chevron-right.component-mr7C99tW.js";import"./input.component-CAUbX1KQ.js";import"./textarea.component-CCOcg0x3.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DZ86AK0R.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
