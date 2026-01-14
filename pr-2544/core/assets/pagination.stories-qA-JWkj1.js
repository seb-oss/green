import{x as r}from"./iframe-g-Nlnl9W.js";import"./pagination-DpgRUNzp.js";import"./card-DxTg54aF.js";import"./text-gKgu2UdY.js";import"./flex-Bmpbxtvi.js";import"./localized-decorator-grrCtr3j.js";import"./popover.component-CNTAczEM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ce43WbK5.js";import"./icon.component-V2NdZns9.js";import"./context-menu.component-PaVfHv7U.js";import"./unwrap-slots-B74FOXMe.js";import"./ref-BP7P3OLh.js";import"./dot-grid-one-horizontal-DpDnVu9Q.js";import"./menu-heading.component-DcsnIavK.js";import"./dropdown.component-D7P7Ca4I.js";import"./query-async-lEkOz37G.js";import"./form-control-host.style-DWcsGrsm.js";import"./form-control-header.component-Cc1k_lgD.js";import"./badge.component-DlRrMNgY.js";import"./flex.component-D1UxupSd.js";import"./triangle-exclamation.component-BMMoeshQ.js";import"./card.component-o1Zu7NUq.js";import"./checkmark.component-BjiurvDU.js";import"./rbcb-toggle.template-CSFMk9OY.js";import"./chevron-bottom.component-BlYwNIov.js";import"./chevron-right-small.component-Beri5O6s.js";import"./chevron-right.component-mfkZMoWa.js";import"./input.component-OmzHtdLK.js";import"./textarea.component-D5XlrHj2.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BHYtXso3.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
