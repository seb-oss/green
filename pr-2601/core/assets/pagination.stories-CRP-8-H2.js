import{x as a}from"./iframe-HiFJV8bk.js";import"./pagination-D4HhdwhC.js";import"./card-DJk5Pxku.js";import"./text-D-o_ZTVi.js";import"./flex-O4TBLgje.js";import"./localized-decorator-Dmej81GR.js";import"./popover.component-Cx-T2aYB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-O5n-8TM7.js";import"./icon.component-BK5A2ge7.js";import"./context-menu.component-Bwe3o9FS.js";import"./unwrap-slots-xzehliXC.js";import"./ref-CVM-VzQN.js";import"./dot-grid-one-horizontal-TMLc8RpR.js";import"./menu-heading.component-DoV6GKVm.js";import"./dropdown.component-DaQzDpx3.js";import"./query-async-BUsdlShf.js";import"./form-control-host.style-D-3KkFzM.js";import"./form-control-header.component-IomV9baN.js";import"./badge.component-Z-rwar02.js";import"./flex.component-BtZj_Xnn.js";import"./triangle-exclamation.component-D9fYSJ-w.js";import"./card.component-BDYeFBPt.js";import"./checkmark.component-U0nIxNw8.js";import"./rbcb-toggle.template-Cp3mZ_ec.js";import"./chevron-bottom.component-ZC1QNV_z.js";import"./chevron-right-small.component-nT_uFd65.js";import"./chevron-right.component-BfHETwNj.js";import"./input.component-BBqJCei2.js";import"./textarea.component-Bl0PgXIB.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-7vsrIjs3.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
