import{x as a}from"./iframe-CJE7aiH0.js";import"./pagination-Cef2eTPV.js";import"./card-mAJw_7UD.js";import"./text-BJX68VAe.js";import"./flex-CeA9EXqz.js";import"./localized-decorator-kFqkmb10.js";import"./popover.component-tAjsLLnj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CSC62mww.js";import"./icon.component-CtwQOH-4.js";import"./context-menu.component-BMUtqH_t.js";import"./unwrap-slots-658nlSjQ.js";import"./ref-CBLAw287.js";import"./dot-grid-one-horizontal-BeoZ9ybx.js";import"./menu-heading.component-D7uvSGX2.js";import"./dropdown.component-DXFDFR49.js";import"./query-async-utgmSpeQ.js";import"./form-control-host.style-CmHUQyIY.js";import"./form-control-header.component-BsIbS895.js";import"./badge.component-DfKNvGPa.js";import"./flex.component-JDR8gBKy.js";import"./triangle-exclamation.component-DEoP9nh-.js";import"./card.component-Blz831NO.js";import"./checkmark.component-D2NevCr9.js";import"./rbcb-toggle.template-CVZKt19P.js";import"./chevron-bottom.component-CmW1CzIt.js";import"./chevron-right-small.component-wsmja2lo.js";import"./chevron-right.component-B_AjUqQZ.js";import"./input.component-eLhVWXnw.js";import"./textarea.component-BkMz3flt.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CIawN_vj.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
