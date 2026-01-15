import{x as r}from"./iframe-DB_oVbyA.js";import"./pagination-SsMziPss.js";import"./card-BHdlXxFm.js";import"./text-Ca5QqvNs.js";import"./flex-B1McPFGg.js";import"./localized-decorator-DlNuqE9w.js";import"./popover.component-BUPAN7Fk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CQtxVTMV.js";import"./icon.component-vvk5QY31.js";import"./context-menu.component-CvO_MN_x.js";import"./unwrap-slots-Dtoh0pzo.js";import"./ref-CGZEREFu.js";import"./dot-grid-one-horizontal-BYblDZFj.js";import"./menu-heading.component-DNUWWm7c.js";import"./dropdown.component-DR5Qkzd_.js";import"./query-async-C8OqxdsG.js";import"./form-control-host.style-CBmIABk_.js";import"./form-control-header.component-BkI4QHH4.js";import"./badge.component-m1k_23uO.js";import"./flex.component-BuewdMkP.js";import"./triangle-exclamation.component-CrymZ3b8.js";import"./card.component-Cs6wsFd_.js";import"./checkmark.component-JBh7TGp8.js";import"./rbcb-toggle.template-Zr7BKGCW.js";import"./chevron-bottom.component-DxurLAAp.js";import"./chevron-right-small.component-D51I7HHf.js";import"./chevron-right.component-_0iyOLN4.js";import"./input.component-DHGZMvhr.js";import"./textarea.component-DYiY599N.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CDGosH0E.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
