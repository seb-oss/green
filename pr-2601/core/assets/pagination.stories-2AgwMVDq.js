import{x as a}from"./iframe-CNQuyvRb.js";import"./pagination-GCP4Z10n.js";import"./card-BItlIG1A.js";import"./text-CN8k_8z1.js";import"./flex-Lm2Pcsl6.js";import"./localized-decorator-BXyTGXnb.js";import"./popover.component-DTqnKVdx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BwITJTLF.js";import"./icon.component-DaaHJEBV.js";import"./context-menu.component-ztLndpaa.js";import"./unwrap-slots-DxzOqBXY.js";import"./ref-CkQEL7vj.js";import"./dot-grid-one-horizontal-6D-hHUlZ.js";import"./menu-heading.component-CEl8XzrU.js";import"./dropdown.component-Ca55ujIE.js";import"./query-async-DmbivNiU.js";import"./form-control-host.style-CNRcxNCb.js";import"./form-control-header.component-BmWI0G16.js";import"./badge.component-DwqN34fi.js";import"./flex.component-BRTHS8Pd.js";import"./triangle-exclamation.component-Cf_PDayD.js";import"./card.component-CIUZbWPA.js";import"./checkmark.component-Iz52spwT.js";import"./rbcb-toggle.template-BN4zZirl.js";import"./chevron-bottom.component-BTn-Eelm.js";import"./chevron-right-small.component-C41DFfdk.js";import"./chevron-right.component-DHX6IEKE.js";import"./input.component-DMTWMk_D.js";import"./textarea.component-B0Zqv-WM.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DhRKsXst.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
