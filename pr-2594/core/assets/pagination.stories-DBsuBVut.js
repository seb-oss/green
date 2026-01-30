import{x as a}from"./iframe-BZbfo3FS.js";import"./pagination-D3HjyIg3.js";import"./card-BfeDOZxZ.js";import"./text-BKMkw5yD.js";import"./flex-CcZddjDc.js";import"./localized-decorator-C82mW_OS.js";import"./popover.component-CYz6lTfi.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CZH6AROI.js";import"./icon.component-BTs3VFtx.js";import"./context-menu.component-Ck6DjmGk.js";import"./unwrap-slots-CD0nOf78.js";import"./ref-DGJ0j9Z6.js";import"./dot-grid-one-horizontal-C0SMZyCT.js";import"./menu-heading.component-BTv3jUpX.js";import"./dropdown.component-eXLRpAs5.js";import"./query-async-CjVvd2bl.js";import"./form-control-host.style-C1FyV0kE.js";import"./form-control-header.component-D_Fh4RV8.js";import"./badge.component-B4W7YYMw.js";import"./flex.component-BxowivKU.js";import"./triangle-exclamation.component-DBalC--s.js";import"./card.component-B2M5jsjX.js";import"./checkmark.component-DptzwQOG.js";import"./rbcb-toggle.template-DueZAPge.js";import"./chevron-bottom.component-DF8cOIoI.js";import"./chevron-right-small.component-BYM8rULC.js";import"./chevron-right.component-C6Wspp0r.js";import"./input.component-CBDkIOVA.js";import"./textarea.component-CmPsd2Rq.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DldTq0TZ.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
