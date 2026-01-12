import{x as r}from"./iframe-C_i6AL_Q.js";import"./pagination-Uq2Wf4yy.js";import"./card-OYPQtiu0.js";import"./text-BxPDZb43.js";import"./flex-dRs-tAe1.js";import"./localized-decorator-H-7TKaX0.js";import"./popover.component-DtrObb_y.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DxGSSh45.js";import"./icon.component-Cxua7B4s.js";import"./context-menu.component-DR02rTuj.js";import"./unwrap-slots-BW3-39lB.js";import"./ref-Dw-i-UzM.js";import"./dot-grid-one-horizontal-Da63bvHH.js";import"./menu-heading.component-COC956OW.js";import"./dropdown.component-DZIFw3g7.js";import"./query-async-CrfPln-v.js";import"./form-control-host.style-h9bPqo2H.js";import"./form-control-header.component-BUILzmie.js";import"./badge.component-BRfPul_e.js";import"./flex.component-MfkHdtn5.js";import"./triangle-exclamation.component-Bmf25bT_.js";import"./card.component-adkOUnoK.js";import"./checkmark.component-B977KDkv.js";import"./rbcb-toggle.template-DG2MrcEa.js";import"./chevron-bottom.component-DB5JoJv-.js";import"./chevron-right-small.component-CHrQWSAr.js";import"./chevron-right.component-BubL4qH4.js";import"./input.component-8aT6Xipa.js";import"./textarea.component-B3TIkxm-.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BbGfJKw5.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
          @gds-page-change=${e}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
