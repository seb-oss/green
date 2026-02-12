import{x as a}from"./iframe-C8yoY-xQ.js";import"./pagination-CrPRM_FG.js";import"./card-Dpe_0NiL.js";import"./text-CH6ttDw6.js";import"./flex-Du6h-PG3.js";import"./localized-decorator-BtPhTmnz.js";import"./popover.component-DLIwdy8R.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CxdBGnkr.js";import"./icon.component-CGjS-CdK.js";import"./context-menu.component-DbSeKw4w.js";import"./unwrap-slots-BBK8StS3.js";import"./ref-Aco_LIQ6.js";import"./dot-grid-one-horizontal-BGlVa0ea.js";import"./menu-heading.component-B-gWe8tE.js";import"./dropdown.component-B0H5VLtY.js";import"./query-async-Ca80vzfp.js";import"./form-control-host.style-DRqYya-k.js";import"./form-control-header.component-D1bHUryd.js";import"./badge.component-Dz92ObLo.js";import"./flex.component-DbEOKgSd.js";import"./triangle-exclamation.component-RoWpKgqe.js";import"./card.component-CAAlfCMQ.js";import"./checkmark.component-CpR8TuJh.js";import"./rbcb-toggle.template-DPfC6qQp.js";import"./chevron-bottom.component-BoBtLBLv.js";import"./chevron-right-small.component-CrxrkwT6.js";import"./chevron-right.component-NcW_PlP-.js";import"./input.component-BJhNE-aj.js";import"./textarea.component-B-VttR3J.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-1biRtNjh.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
