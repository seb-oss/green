import{x as a}from"./iframe-CxPMWD1t.js";import"./pagination-SBmZedk_.js";import"./card-DvaPx4lE.js";import"./text-ClO9XyQG.js";import"./flex-BiBCMQJy.js";import"./localized-decorator-eN8oFF7e.js";import"./popover.component-YnSOsLck.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C6Ou90KH.js";import"./icon.component-Bb4T45-R.js";import"./context-menu.component-ByixGmWc.js";import"./unwrap-slots-Hm_UWKF3.js";import"./ref-DMF3Hzx-.js";import"./dot-grid-one-horizontal-CbRZ7BGf.js";import"./menu-heading.component-Cjk7DeLv.js";import"./dropdown.component-CYKeS0ze.js";import"./query-async-BWFCH2u8.js";import"./form-control-host.style-C3opQxod.js";import"./form-control-header.component-BffOoUXc.js";import"./badge.component-BtQTJP0x.js";import"./flex.component-DjYesgfy.js";import"./triangle-exclamation.component-Bap_bn68.js";import"./card.component-BPIgfRAY.js";import"./checkmark.component-BlZgJowN.js";import"./rbcb-toggle.template-3himz5jV.js";import"./chevron-bottom.component-C_kNKFjY.js";import"./chevron-right-small.component-D95Zxwd1.js";import"./chevron-right.component-gMQJYEsY.js";import"./input.component-CQf9DDh7.js";import"./textarea.component-BCy1xVLx.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B9BSe6H-.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
