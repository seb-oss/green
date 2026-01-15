import{x as r}from"./iframe-Bq9RTfZq.js";import"./pagination-DKGMLwnE.js";import"./card-CUJG4-m1.js";import"./text-DZW7lia4.js";import"./flex-CzK9Xn1s.js";import"./localized-decorator-CkX3xfcj.js";import"./popover.component-D8bHJrvT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BuCWGvDE.js";import"./icon.component-BbZwV3DJ.js";import"./context-menu.component-ShbPzg6x.js";import"./unwrap-slots-ibKpmp-W.js";import"./ref-B8ofMAsS.js";import"./dot-grid-one-horizontal-CEMQkmoX.js";import"./menu-heading.component-Dlh7NJjC.js";import"./dropdown.component-CfXhAiea.js";import"./query-async-DqwBZwDD.js";import"./form-control-host.style-CRAD8mQL.js";import"./form-control-header.component-ByEjJK8V.js";import"./badge.component-DDdQuGEn.js";import"./flex.component-DEey0ruJ.js";import"./triangle-exclamation.component-BZms3oQM.js";import"./card.component-DLocLk9G.js";import"./checkmark.component-DPB6GUNY.js";import"./rbcb-toggle.template-DVX333LH.js";import"./chevron-bottom.component-CStQI4EE.js";import"./chevron-right-small.component-B18lBjpk.js";import"./chevron-right.component-DS7Hc5Qq.js";import"./input.component-BjAdW6p-.js";import"./textarea.component-IFQK6Xc8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D1LRjJau.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
