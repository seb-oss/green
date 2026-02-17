import{x as a}from"./iframe-BNaQQkJH.js";import"./pagination-DbcgLGvF.js";import"./card-DRIYPgCh.js";import"./text-CbYnrQNf.js";import"./flex-B3L9x4Dz.js";import"./localized-decorator-DnTOrFQG.js";import"./popover.component-ltKv_bSX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-jtLIWRAq.js";import"./icon.component-BHq7_Gnp.js";import"./context-menu.component-kzyyAMOL.js";import"./unwrap-slots-CZKkouza.js";import"./ref-DbC8iqFU.js";import"./dot-grid-one-horizontal-BpwKYOxk.js";import"./menu-heading.component-rjfMiSXd.js";import"./dropdown.component-DDtb3w0T.js";import"./query-async-BtNFjBKD.js";import"./form-control-host.style-D1Y8-ydK.js";import"./form-control-header.component-DQbdlz9Z.js";import"./badge.component-CvWke1Ph.js";import"./flex.component-BcOD8jwx.js";import"./triangle-exclamation.component-fTQxGCVG.js";import"./card.component-KzQwFi6G.js";import"./checkmark.component-CclalNAS.js";import"./rbcb-toggle.template-BDsy8iqG.js";import"./chevron-bottom.component-Bq78Axoj.js";import"./chevron-right-small.component-BMDTzW2q.js";import"./chevron-right.component-DBrmicFc.js";import"./input.component-C8e0bDZr.js";import"./textarea.component-Bx_XEHeB.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BCcK9773.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
