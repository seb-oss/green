import{x as r}from"./iframe-CTNWM5mu.js";import"./pagination-BRvOCkEr.js";import"./card-2vIDpOWI.js";import"./text-CJcNaNdI.js";import"./flex-Bw1696ew.js";import"./localized-decorator-BscK7hUg.js";import"./popover.component-B-i7Ggv1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BVqPcggV.js";import"./icon.component-wzSptf-L.js";import"./context-menu.component-DvT2AmQQ.js";import"./unwrap-slots-ClGhbgoQ.js";import"./ref-CtjW3RXb.js";import"./dot-grid-one-horizontal-Dmm7WBkL.js";import"./menu-heading.component-B-CFwaAy.js";import"./dropdown.component-NNjnF53_.js";import"./query-async-4yg1OZVr.js";import"./form-control-host.style-C9zY0GhY.js";import"./form-control-header.component-B5FNlWbJ.js";import"./badge.component-B3nrdbJa.js";import"./flex.component-DohOSJ5U.js";import"./triangle-exclamation.component-BkA4rKhh.js";import"./card.component-DAlTngvE.js";import"./checkmark.component-a6Fn-cML.js";import"./rbcb-toggle.template-CHSo1Gkn.js";import"./chevron-bottom.component-D78BkuX1.js";import"./chevron-right-small.component-du3UwsBg.js";import"./chevron-right.component-tOAXaL4m.js";import"./input.component-CCtVlOr5.js";import"./textarea.component-Bh5p4Fcs.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BOiYVLhx.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
