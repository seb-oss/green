import{x as a}from"./iframe-heokNkxx.js";import"./pagination-Bt38M8Qy.js";import"./card-BqqNJDXw.js";import"./text-B1d0gPyV.js";import"./flex-Dt4RAh_7.js";import"./localized-decorator-DxZVosJk.js";import"./popover.component-DXU3GBtd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CBd3YNHE.js";import"./icon.component-BO162m1G.js";import"./context-menu.component-DQrRctIQ.js";import"./unwrap-slots-K21wTQjA.js";import"./ref-CsTt8db3.js";import"./dot-grid-one-horizontal-lzNrcNxU.js";import"./menu-heading.component-Bmye5EoI.js";import"./dropdown.component-BFO5C_sS.js";import"./query-async-3ePrPke1.js";import"./form-control-host.style-BekZeT-f.js";import"./form-control-header.component-D2x86a1j.js";import"./badge.component-BFyappB2.js";import"./flex.component-Dj4N-Nht.js";import"./triangle-exclamation.component-BEIxBZgU.js";import"./card.component-Bjon-NZW.js";import"./checkmark.component-Bk0SkJYM.js";import"./rbcb-toggle.template-C2JnEAiS.js";import"./chevron-bottom.component-fqgE78x0.js";import"./chevron-right-small.component-DJKwMRIf.js";import"./chevron-right.component-CiCQ4rvr.js";import"./input.component-Bt9F-SyH.js";import"./textarea.component-DUrSuA8s.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BBUAg0tm.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
