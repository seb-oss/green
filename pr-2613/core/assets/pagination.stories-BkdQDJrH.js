import{x as a}from"./iframe-BIlJ1H3j.js";import"./pagination-v8ZPo_hA.js";import"./card-e-q1u49U.js";import"./text-CkfTOVpQ.js";import"./flex-DLu567hQ.js";import"./localized-decorator-DbeAtEZe.js";import"./popover.component-CKt1Y5VD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BvJ8vi7U.js";import"./icon.component-DRkjPaKl.js";import"./context-menu.component-P9woPguf.js";import"./unwrap-slots-RG_FbBBD.js";import"./ref-BOH-tB4p.js";import"./dot-grid-one-horizontal-BG4Cyiox.js";import"./menu-heading.component-Dz13dbAH.js";import"./dropdown.component-DmzsnA42.js";import"./query-async-C46x9pn_.js";import"./form-control-host.style-BEW7NJVW.js";import"./form-control-header.component-v9r0BP9S.js";import"./badge.component-CNNqCjcr.js";import"./flex.component-Bm698bf9.js";import"./triangle-exclamation.component-B4h7PqWN.js";import"./card.component-Dyvl79JC.js";import"./checkmark.component-CKqM3Xiy.js";import"./rbcb-toggle.template-CD-0Ey8D.js";import"./chevron-bottom.component-BrL48v-g.js";import"./chevron-right-small.component-D3bqq_6e.js";import"./chevron-right.component-Dj2sjWpD.js";import"./input.component-B2KeE4h1.js";import"./textarea.component-CaUu0j8X.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DUj4f0nI.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
