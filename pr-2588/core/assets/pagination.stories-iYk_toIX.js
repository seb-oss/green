import{x as a}from"./iframe-CEr8kq7n.js";import"./pagination-wC211B1G.js";import"./card-CGYfqkSj.js";import"./text-MaGBuDwH.js";import"./flex-DffIo4Jg.js";import"./localized-decorator-DBSxKBVf.js";import"./popover.component-BRzpFzV6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-COweo3Gn.js";import"./icon.component-Bz9bZ4M8.js";import"./context-menu.component-Bee0SVvI.js";import"./unwrap-slots-BxUZEgx8.js";import"./ref-Ck05u333.js";import"./dot-grid-one-horizontal-AmomEdSh.js";import"./menu-heading.component-GiXoW28f.js";import"./dropdown.component-CL8FPodo.js";import"./query-async-O84IIooM.js";import"./form-control-host.style-BJB2Vp5t.js";import"./form-control-header.component-DwYCTWfo.js";import"./badge.component-D4t5GMwU.js";import"./flex.component-J8rJot38.js";import"./triangle-exclamation.component-DkRk6WHw.js";import"./card.component-InDchyva.js";import"./checkmark.component-D_t60CCP.js";import"./rbcb-toggle.template-DqVfUwRq.js";import"./chevron-bottom.component-BopZzeeK.js";import"./chevron-right-small.component-By76WL-u.js";import"./chevron-right.component-DlYmRnOQ.js";import"./input.component-B38GwjCF.js";import"./textarea.component-DGYz9BWA.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Cfd7Qixz.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
