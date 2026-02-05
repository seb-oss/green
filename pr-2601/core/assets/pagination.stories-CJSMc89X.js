import{x as a}from"./iframe-DnvYCRWK.js";import"./pagination-DGeKWayX.js";import"./card-cb9qzkLG.js";import"./text-CTq8Cotr.js";import"./flex-t5Geaw_O.js";import"./localized-decorator-CQPXyEqC.js";import"./popover.component-C9lk2xfE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvhWqvuR.js";import"./icon.component-B4Fq6qNB.js";import"./context-menu.component-SkCzf5JV.js";import"./unwrap-slots-B1VvJE-Z.js";import"./ref-CpzdEq9z.js";import"./dot-grid-one-horizontal-qlFbpBUU.js";import"./menu-heading.component-DtgfoVXv.js";import"./dropdown.component-DhLzNlqk.js";import"./query-async-B9V5kK7S.js";import"./form-control-host.style-D7QseB53.js";import"./form-control-header.component-X9gzoRZy.js";import"./badge.component-Bejb8Y0I.js";import"./flex.component-C-jKumqM.js";import"./triangle-exclamation.component-C04OPBoi.js";import"./card.component-EIdXABdd.js";import"./checkmark.component-DBseg7jG.js";import"./rbcb-toggle.template-UiMFOazI.js";import"./chevron-bottom.component-DYEItjSf.js";import"./chevron-right-small.component-Cl4IDZjG.js";import"./chevron-right.component-CM9Z84BS.js";import"./input.component-D6RwwBGV.js";import"./textarea.component-erehxuz5.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-iWo6J2iW.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
