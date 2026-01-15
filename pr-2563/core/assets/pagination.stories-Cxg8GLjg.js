import{x as r}from"./iframe-DKtVfO4i.js";import"./pagination-CZ2uxZRo.js";import"./card-HYIK81X5.js";import"./text-DJN2fvam.js";import"./flex-8oqxpXMB.js";import"./localized-decorator-ChlCLfkP.js";import"./popover.component-DrisHnCR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DE6lcoJt.js";import"./icon.component-Ckr318eu.js";import"./context-menu.component-BOA8uE0a.js";import"./unwrap-slots-pKiGYXz6.js";import"./ref-C0PmBB1s.js";import"./dot-grid-one-horizontal-DMrQUFdB.js";import"./menu-heading.component-DtKW4VKW.js";import"./dropdown.component-BfR4WwWs.js";import"./query-async-DWMm6qGE.js";import"./form-control-host.style-gRrrSpvM.js";import"./form-control-header.component-CzRH-me5.js";import"./badge.component-D1ciBwfK.js";import"./flex.component-Lw7CX6Ts.js";import"./triangle-exclamation.component-wPsgu4NP.js";import"./card.component-5yyoJszG.js";import"./checkmark.component-CfIYgnhC.js";import"./rbcb-toggle.template-CK990ZzC.js";import"./chevron-bottom.component-uNtfeCe8.js";import"./chevron-right-small.component-BNOUU_3d.js";import"./chevron-right.component-CV5oRiwj.js";import"./input.component-cTMe3jgq.js";import"./textarea.component-rWNgyoPE.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CFA4i-mD.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
