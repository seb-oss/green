import{x as a}from"./iframe-CmrrH2XL.js";import"./pagination-DevB1VpG.js";import"./card-BdmaW9zL.js";import"./text-CufSApbj.js";import"./flex-BbNcfE9f.js";import"./localized-decorator-TsOf8-hd.js";import"./popover.component-BKAuFpFh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DqKFYKsw.js";import"./icon.component-sO0eXaYd.js";import"./context-menu.component-BK3_E0tp.js";import"./unwrap-slots-bwvwNLI9.js";import"./ref-D8-0i1re.js";import"./dot-grid-one-horizontal-BAJ_DGse.js";import"./menu-heading.component-Dubqhr7G.js";import"./dropdown.component-CSGy11kc.js";import"./query-async-BzhBZjCp.js";import"./form-control-host.style-CTb07bTa.js";import"./form-control-header.component-CyYnA_N3.js";import"./badge.component-5rJ2HRcy.js";import"./flex.component-D7AFLKmM.js";import"./triangle-exclamation.component-BH7ZBI33.js";import"./card.component-skVbPrMS.js";import"./checkmark.component-CX2atU5p.js";import"./rbcb-toggle.template-DeF0FZDI.js";import"./chevron-bottom.component-BqVd0s4E.js";import"./chevron-right-small.component-C7yc3b7A.js";import"./chevron-right.component-2GWzepi2.js";import"./input.component-DLo7rc_C.js";import"./textarea.component-B0rkGad0.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Fl8KvEhp.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
