import{x as r}from"./iframe-CqKMOIX5.js";import"./pagination-BvkRRq7g.js";import"./card-C7ymr6ot.js";import"./text-Cxg9YR9j.js";import"./flex-DoXXs9cv.js";import"./localized-decorator-CFtgwxVo.js";import"./popover.component-DZibbuew.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-WZkpYNYY.js";import"./icon.component-BhjPPF0u.js";import"./context-menu.component-IKrJXyXc.js";import"./unwrap-slots-BOKoZm0z.js";import"./ref-CDFL4nzn.js";import"./dot-grid-one-horizontal-b0Djl_gL.js";import"./menu-heading.component-DHKvZRZD.js";import"./dropdown.component-DLvHkmIz.js";import"./query-async-Cm40O73v.js";import"./form-control-host.style-WBmlBdLn.js";import"./form-control-header.component-DLienXhn.js";import"./badge.component-CRjLWoYj.js";import"./flex.component-BwnCzdl3.js";import"./triangle-exclamation.component-v9-kS8y7.js";import"./card.component-H7NZpziN.js";import"./checkmark.component-DpFv9e3Z.js";import"./rbcb-toggle.template-BAj6Ggec.js";import"./chevron-bottom.component-BAaYnwKx.js";import"./chevron-right-small.component-BRJnBQdd.js";import"./chevron-right.component-CbTIly0t.js";import"./input.component-BNL7d9AB.js";import"./textarea.component-rWBDbBqx.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-MLMgocxS.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
