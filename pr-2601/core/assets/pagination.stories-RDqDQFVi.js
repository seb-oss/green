import{x as a}from"./iframe-D-XOkR_D.js";import"./pagination-Du-uctj5.js";import"./card-CzuwSFZh.js";import"./text-D0qi6bXO.js";import"./flex-BgV95cYc.js";import"./localized-decorator-BspQpkk2.js";import"./popover.component-DR5YiB9p.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DCkq1wPS.js";import"./icon.component-D8hwbnN6.js";import"./context-menu.component-C-oHDVNb.js";import"./unwrap-slots-8CizkZFm.js";import"./ref-sfGHuKkf.js";import"./dot-grid-one-horizontal-B8VfJdv7.js";import"./menu-heading.component-BEIEes4f.js";import"./dropdown.component-CRVwG6XF.js";import"./query-async-B4xyrX1D.js";import"./form-control-host.style-Bn8CDFCu.js";import"./form-control-header.component-CeZKGIJN.js";import"./badge.component-BLZOM2lQ.js";import"./flex.component-Bww2TeaM.js";import"./triangle-exclamation.component-CA0HhOXO.js";import"./card.component-D0DpATwh.js";import"./checkmark.component-BfTG6JbU.js";import"./rbcb-toggle.template-CMmM2uVp.js";import"./chevron-bottom.component-DtsjMxs5.js";import"./chevron-right-small.component-D2fbVErn.js";import"./chevron-right.component-B5Cwn6uN.js";import"./input.component-BVo-d73T.js";import"./textarea.component-CkhnIu1z.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CS7cXJLL.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
