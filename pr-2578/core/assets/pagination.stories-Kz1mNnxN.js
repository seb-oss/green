import{x as a}from"./iframe-DNTl48pd.js";import"./pagination-k5Zr4vE8.js";import"./card-DAF9xHlj.js";import"./text-BKxLgXZ5.js";import"./flex-HgAQ4PuB.js";import"./localized-decorator-D5Q6_2Fc.js";import"./popover.component-Borr-Qhb.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CXVeepsU.js";import"./icon.component-BacprXjV.js";import"./context-menu.component-CYkTy3HD.js";import"./unwrap-slots-BLwtCqWm.js";import"./ref-PYkZ42Q_.js";import"./dot-grid-one-horizontal-CTl3Xsh1.js";import"./menu-heading.component-C88-Vx1c.js";import"./dropdown.component-DPk91myw.js";import"./query-async-BIp5_guu.js";import"./form-control-host.style-BieDd1XE.js";import"./form-control-header.component-D1aT3PWP.js";import"./badge.component-4puycZOE.js";import"./flex.component-QkSNFxkm.js";import"./triangle-exclamation.component-Dr04iao3.js";import"./card.component-CWIznfwY.js";import"./checkmark.component-BjiW3ux9.js";import"./rbcb-toggle.template-YXAoOrYR.js";import"./chevron-bottom.component-D8E9rmEH.js";import"./chevron-right-small.component-C8vaJMUl.js";import"./chevron-right.component-CzeyrXHF.js";import"./input.component-u_rmPoHE.js";import"./textarea.component-BOGO_NvU.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B0oS4x_X.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
