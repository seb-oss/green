import{x as a}from"./iframe-DMVDZK-F.js";import"./pagination-DB1JQy8G.js";import"./card-DA-6s8XK.js";import"./text-Cxwrifbo.js";import"./flex-Z67iOcFC.js";import"./localized-decorator-DU-mJU0o.js";import"./popover.component-1obP0BBf.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ccz8mlUw.js";import"./icon.component-Da4pJnMV.js";import"./context-menu.component-Cqf3MpsA.js";import"./unwrap-slots-D5I8iXbt.js";import"./ref-By9UehS8.js";import"./dot-grid-one-horizontal-gLH9HoDA.js";import"./menu-heading.component-DWpffdIo.js";import"./dropdown.component-DavHeW06.js";import"./query-async-DSgUWN1w.js";import"./form-control-host.style-CTSx9vmk.js";import"./form-control-header.component-c1Ykmh4V.js";import"./badge.component-HeRQXwua.js";import"./flex.component-EdCVezaM.js";import"./triangle-exclamation.component-CWH96Ec7.js";import"./card.component-B2BzVFUU.js";import"./checkmark.component-RCtX7Zav.js";import"./rbcb-toggle.template-DmsQiC9g.js";import"./chevron-bottom.component-BTlgSAPw.js";import"./chevron-right-small.component-CuFSovZn.js";import"./chevron-right.component-BhSDgjG1.js";import"./input.component-Q-oeW--3.js";import"./textarea.component-CqEqKNyJ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DHRsuzkw.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
