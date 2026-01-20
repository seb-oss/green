import{x as a}from"./iframe-5mjnOIbQ.js";import"./pagination-DxrO3ufO.js";import"./card-CWZE5PU4.js";import"./text-BmsXqh_G.js";import"./flex-CRTNrUwp.js";import"./localized-decorator-C511PcAv.js";import"./popover.component-DcN0PmOV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CFAaHBB5.js";import"./icon.component-BJMCEAD6.js";import"./context-menu.component-CvLSn0b9.js";import"./unwrap-slots-BdZgmb4B.js";import"./ref-9KcP5jBi.js";import"./dot-grid-one-horizontal-D3baIsGa.js";import"./menu-heading.component-BrjKFhDx.js";import"./dropdown.component-DKwMNBD9.js";import"./query-async-BfY7Ay04.js";import"./form-control-host.style-BeImm1Vz.js";import"./form-control-header.component-DTFcclWf.js";import"./badge.component-DPwikIB9.js";import"./flex.component-B61xVOzx.js";import"./triangle-exclamation.component-BM6cbvX0.js";import"./card.component-Ce8OPzII.js";import"./checkmark.component-N1sSs20a.js";import"./rbcb-toggle.template-hInUw3Kg.js";import"./chevron-bottom.component-BAgzQOxY.js";import"./chevron-right-small.component-r3b9xOD7.js";import"./chevron-right.component-C98vGrBx.js";import"./input.component-Cw8AvEZ1.js";import"./textarea.component-PlhZgt0g.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DTC5Hohg.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
