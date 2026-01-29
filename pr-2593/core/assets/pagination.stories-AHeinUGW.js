import{x as a}from"./iframe-BZT1zFLW.js";import"./pagination-BAny2zm8.js";import"./card-B8n1pUrM.js";import"./text-DCAtWyOV.js";import"./flex-DcffHiXI.js";import"./localized-decorator-CcBxja47.js";import"./popover.component-DS5Gi422.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3Y5f_gL.js";import"./icon.component-Bq1dliJE.js";import"./context-menu.component-D0RVrF0K.js";import"./unwrap-slots-rpciDVh1.js";import"./ref-CC9SNLfc.js";import"./dot-grid-one-horizontal-Ck3PGPYB.js";import"./menu-heading.component-CT8ZNkn8.js";import"./dropdown.component-CvZza7G9.js";import"./query-async-BmCIJT4j.js";import"./form-control-host.style-DCqQiQid.js";import"./form-control-header.component-VT5Z5Qf7.js";import"./badge.component-CjvZt4eq.js";import"./flex.component-qMZM1TSb.js";import"./triangle-exclamation.component-B7icht5P.js";import"./card.component-iRV4bi_g.js";import"./checkmark.component-DA5U0FTS.js";import"./rbcb-toggle.template-DL1tlc3q.js";import"./chevron-bottom.component-CBervGGo.js";import"./chevron-right-small.component-p43IJZPJ.js";import"./chevron-right.component-oJYgnXZ_.js";import"./input.component-Jz2dchEL.js";import"./textarea.component-5ErnGHUn.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-fFf3-tfn.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
