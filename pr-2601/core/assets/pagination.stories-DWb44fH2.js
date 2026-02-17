import{x as a}from"./iframe-0DX4ZrJa.js";import"./pagination-CE5W5ldT.js";import"./card-BDGkdEVO.js";import"./text-roSAtP2A.js";import"./flex-969M4YG9.js";import"./localized-decorator-Cc_5jBJl.js";import"./popover.component-BHy-l3YQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DgdH7muA.js";import"./icon.component-B9Uw88l_.js";import"./context-menu.component-tWoBs6j9.js";import"./unwrap-slots-BsmoXbSA.js";import"./ref-CAwm1L55.js";import"./dot-grid-one-horizontal-g3nukgEg.js";import"./menu-heading.component-CtlTl8gK.js";import"./dropdown.component-BNVbQ-_f.js";import"./query-async-C_wopA4e.js";import"./form-control-host.style-C7Albvnn.js";import"./form-control-header.component-CxXYST5-.js";import"./badge.component-DYeI-USw.js";import"./flex.component-CD85IxOy.js";import"./triangle-exclamation.component-turv5OuD.js";import"./card.component-D4cwreCw.js";import"./checkmark.component-B4WxgHyB.js";import"./rbcb-toggle.template-UQ2KkHxQ.js";import"./chevron-bottom.component-DKg66JPe.js";import"./chevron-right-small.component-CxnUUTpM.js";import"./chevron-right.component-B6jCm4Xx.js";import"./input.component-DOJkPnsu.js";import"./textarea.component-BOuNcBpF.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B9NXa1Bb.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
