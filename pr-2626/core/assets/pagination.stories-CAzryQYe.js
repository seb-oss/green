import{x as a}from"./iframe-9Cc4SVh6.js";import"./pagination-CFw-01FV.js";import"./card-BQTddVOa.js";import"./text-DGW4sABd.js";import"./flex-DoveuQPA.js";import"./localized-decorator-DidKBAlI.js";import"./popover.component-CwY69XUx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BEJH3FmH.js";import"./icon.component-CkCDfQFb.js";import"./context-menu.component-Bm9y1D3D.js";import"./unwrap-slots-BbYFF_lw.js";import"./ref-BIuMFRXG.js";import"./dot-grid-one-horizontal-DRa_oDSd.js";import"./menu-heading.component-CUqJjnXN.js";import"./dropdown.component-CGs_Ggab.js";import"./query-async-C2T3P9eI.js";import"./form-control-host.style-DAPDshT7.js";import"./form-control-header.component-D4GRaL3y.js";import"./badge.component-VSXyemAo.js";import"./flex.component-H_OEGOx6.js";import"./triangle-exclamation.component-BosMln9Y.js";import"./card.component-C04W1d44.js";import"./checkmark.component-BSsbfkdK.js";import"./rbcb-toggle.template-C8fD3s08.js";import"./chevron-bottom.component-JUaa88m-.js";import"./chevron-right-small.component-CXVu_Lx9.js";import"./chevron-right.component-BSjVQKAB.js";import"./input.component-zVSjqf_r.js";import"./textarea.component-HAqtfVnT.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Dr9H6OoG.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
