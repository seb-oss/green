import{x as r}from"./iframe-B2lF6KQV.js";import"./pagination-BEiug7zO.js";import"./card-BL0rftLJ.js";import"./text-CMlMgij5.js";import"./flex-rejaARhW.js";import"./localized-decorator-DmwnpXt5.js";import"./popover.component-CJEMT2tn.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BF21MkLi.js";import"./icon.component-QmmjEKmh.js";import"./context-menu.component-4lfaDN48.js";import"./unwrap-slots-C4fJWq54.js";import"./ref-DicP_OXy.js";import"./dot-grid-one-horizontal-DtDP9qbC.js";import"./menu-heading.component-iLV1PDhk.js";import"./dropdown.component-BAGUezBE.js";import"./query-async-CHlbjN4P.js";import"./form-control-host.style-Bd0BmvSS.js";import"./form-control-header.component-_cJrqFez.js";import"./badge.component-Cd2v4q9G.js";import"./flex.component-D3FiEuxa.js";import"./triangle-exclamation.component-WQ7VdiH3.js";import"./card.component-LS_eywYY.js";import"./checkmark.component-DzYHivbx.js";import"./rbcb-toggle.template-DaQcUlZk.js";import"./chevron-bottom.component-8q4PSK7L.js";import"./chevron-right-small.component-PpdhgApp.js";import"./chevron-right.component-adu4ir3m.js";import"./input.component-zv_HdVRx.js";import"./textarea.component-DI-BoXST.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B9QM9L-E.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
