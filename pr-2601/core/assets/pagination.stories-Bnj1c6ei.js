import{x as a}from"./iframe-CbQmVrJu.js";import"./pagination-DnTJ646s.js";import"./card-BbXGlqu6.js";import"./text-BkOl0jgx.js";import"./flex-BVHTcgK0.js";import"./localized-decorator-CniegUPT.js";import"./popover.component-N5PG70YB.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DnnVf8QW.js";import"./icon.component-BSD2zYIb.js";import"./context-menu.component-Czki0Q1l.js";import"./unwrap-slots-vRa246vn.js";import"./ref-BjF3w_mn.js";import"./dot-grid-one-horizontal-Crcu1B5C.js";import"./menu-heading.component-DplnGXFJ.js";import"./dropdown.component-A9dwCmy5.js";import"./query-async-Bs9Mp5XM.js";import"./form-control-host.style-CeiwtO7S.js";import"./form-control-header.component-DMQilnTg.js";import"./badge.component-vPseqSLE.js";import"./flex.component-Drc1OxU4.js";import"./triangle-exclamation.component-fKeoq-Nu.js";import"./card.component-CR6-9Dgp.js";import"./checkmark.component-CzULR0Mr.js";import"./rbcb-toggle.template-oAaAVUiO.js";import"./chevron-bottom.component-YV_QU4n1.js";import"./chevron-right-small.component-JC2O7fF1.js";import"./chevron-right.component-Fd4eEUGF.js";import"./input.component-MGvOlvvi.js";import"./textarea.component-BMWAKlv8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BqbogdW3.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
