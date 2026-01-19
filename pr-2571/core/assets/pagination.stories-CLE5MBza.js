import{x as a}from"./iframe-CIyCOr3z.js";import"./pagination-BD9vH0SV.js";import"./card-BoHx761Y.js";import"./text-D7D_rfNO.js";import"./flex-8tL0UkXf.js";import"./localized-decorator-BwT68XI3.js";import"./popover.component-BViakSQ8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B4VqYf58.js";import"./icon.component-BU7mvxId.js";import"./context-menu.component-Doc3t3Va.js";import"./unwrap-slots-B14UI6Jt.js";import"./ref-BnWGan7d.js";import"./dot-grid-one-horizontal-CI5TFG6a.js";import"./menu-heading.component-1fRAN5Ob.js";import"./dropdown.component-BzH2W8ht.js";import"./query-async-Cj_UxUny.js";import"./form-control-host.style-BJKd0eUW.js";import"./form-control-header.component-CvhV034g.js";import"./badge.component-CJE3gy-5.js";import"./flex.component-zzL_HQIe.js";import"./triangle-exclamation.component-VkCnrAZF.js";import"./card.component-DYSrcaMg.js";import"./checkmark.component-CAMKuH_M.js";import"./rbcb-toggle.template-BxaWM1o-.js";import"./chevron-bottom.component-CKEBFlHf.js";import"./chevron-right-small.component-XHUd93OC.js";import"./chevron-right.component-B0zbgily.js";import"./input.component-B59BuHX3.js";import"./textarea.component-DtGNQ5aJ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-6Y6NPAo5.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
