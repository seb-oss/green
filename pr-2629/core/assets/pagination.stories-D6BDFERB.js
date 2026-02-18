import{x as a}from"./iframe-VaDQQqNL.js";import"./pagination-BLN1RQWV.js";import"./card-DJgBiCQM.js";import"./text-Dudlpren.js";import"./flex-Cu6M8lwt.js";import"./localized-decorator-BPWxYv1n.js";import"./popover.component-Co9q3Vtw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-JRg-ClxR.js";import"./icon.component-QlhbWuMT.js";import"./context-menu.component-DyLd9IkC.js";import"./unwrap-slots-DFJC9RE5.js";import"./ref-zPG6XXE6.js";import"./dot-grid-one-horizontal-CzQTJRNR.js";import"./menu-heading.component-BNgfOP1r.js";import"./dropdown.component-Dy7tAiWh.js";import"./query-async-DSrSeND-.js";import"./form-control-host.style-un4iAXPR.js";import"./form-control-header.component-4LKupKms.js";import"./badge.component-D9nTnQJU.js";import"./flex.component-D7YmM62P.js";import"./triangle-exclamation.component-lsUpE2Jd.js";import"./card.component-Dm81EWb_.js";import"./checkmark.component-AHYXq-dP.js";import"./rbcb-toggle.template-ItUuwB2E.js";import"./chevron-bottom.component-DDUA5r0Q.js";import"./chevron-right-small.component-DKo9sf9n.js";import"./chevron-right.component-Hm74HS2r.js";import"./input.component-BJZC_iS0.js";import"./textarea.component-CdJlPGiP.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-COrXqByj.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
