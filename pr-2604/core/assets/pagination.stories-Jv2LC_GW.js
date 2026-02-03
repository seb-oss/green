import{x as a}from"./iframe-yBlaU3uw.js";import"./pagination-Bwp-zQUt.js";import"./card-2zxtznxO.js";import"./text-DQ1cqpq4.js";import"./flex-T0voip7L.js";import"./localized-decorator-C8wQAk1q.js";import"./popover.component-L8DRza2A.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BiYiOMlz.js";import"./icon.component-CnM3VYnP.js";import"./context-menu.component-DDwookL3.js";import"./unwrap-slots-c89DHvMj.js";import"./ref-BCq6gcSq.js";import"./dot-grid-one-horizontal-MfA03-QT.js";import"./menu-heading.component-FQdpJKNj.js";import"./dropdown.component-jHQlZZLl.js";import"./query-async-DrgfG7Px.js";import"./form-control-host.style-CZVp7WPO.js";import"./form-control-header.component-xZv8nU8z.js";import"./badge.component-D1X78qIm.js";import"./flex.component-BpiN7Lji.js";import"./triangle-exclamation.component--PQFgrqk.js";import"./card.component-ByEYhV9a.js";import"./checkmark.component-Cz2BPzPH.js";import"./rbcb-toggle.template-CXzC8R-B.js";import"./chevron-bottom.component-Bwfzvz6a.js";import"./chevron-right-small.component-GjloTEHC.js";import"./chevron-right.component-Cd-CUO3R.js";import"./input.component-DZPbhnB5.js";import"./textarea.component-BzTbmsQs.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ugrPTiJV.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
