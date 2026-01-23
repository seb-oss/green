import{x as a}from"./iframe-BEPLVs1y.js";import"./pagination-CgZgmqXB.js";import"./card-CX0mu3ys.js";import"./text-CcYVKuCY.js";import"./flex-D98huMmd.js";import"./localized-decorator-BmLDxFUn.js";import"./popover.component-mQR_8C5Q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dh5cjwaB.js";import"./icon.component-ZivparLU.js";import"./context-menu.component-D1Oj0_3E.js";import"./unwrap-slots-4I7Jj2B0.js";import"./ref-Dw-nne_i.js";import"./dot-grid-one-horizontal-Bl3VVoDg.js";import"./menu-heading.component-tge7WB7Q.js";import"./dropdown.component-CThi8wwS.js";import"./query-async-ByCVGNuu.js";import"./form-control-host.style-e0qtVo7_.js";import"./form-control-header.component-CT2y7nM0.js";import"./badge.component-DP7ZHred.js";import"./flex.component-BiPoVA2f.js";import"./triangle-exclamation.component-7uLY9nIj.js";import"./card.component-COuxVN8N.js";import"./checkmark.component-OX-iRULa.js";import"./rbcb-toggle.template-dvUn0ZBv.js";import"./chevron-bottom.component-BoCR3kZj.js";import"./chevron-right-small.component-9yZBPGhP.js";import"./chevron-right.component-u3Y3VA5h.js";import"./input.component-BqtExE5U.js";import"./textarea.component-CGhOTm98.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D5_mwp4X.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
