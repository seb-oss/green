import{x as a}from"./iframe-DP9akqBZ.js";import"./pagination-DVcDh-tY.js";import"./card-U95lOQN5.js";import"./text-DpJqZUqo.js";import"./flex-CmghNpu-.js";import"./localized-decorator-DjiVRTA8.js";import"./popover.component-CEdm7zWa.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-j0vAr5j-.js";import"./icon.component-B1kgOlUX.js";import"./context-menu.component-ByJ9X-SN.js";import"./unwrap-slots-D1W3oFRS.js";import"./ref-BG4HeETm.js";import"./dot-grid-one-horizontal-Wp77Zw7v.js";import"./menu-heading.component-1LIXuBco.js";import"./dropdown.component-CqWYnNBD.js";import"./query-async-BtCL5vdu.js";import"./form-control-host.style-kitUImCM.js";import"./form-control-header.component-BzRp-TlG.js";import"./badge.component-BFa9br6-.js";import"./flex.component-BkeSN3lL.js";import"./triangle-exclamation.component-AE0LRPZB.js";import"./card.component-lHB-B_as.js";import"./checkmark.component-CesEMpvI.js";import"./rbcb-toggle.template-BupezNn6.js";import"./chevron-bottom.component-hd9aqcFx.js";import"./chevron-right-small.component-CJTcE-xY.js";import"./chevron-right.component-CwjRKN7M.js";import"./input.component-DJ7yQ5_-.js";import"./textarea.component-zp2YzTGl.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CmgmI0Qq.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
