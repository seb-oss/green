import{x as r}from"./iframe-DhKqHReP.js";import"./pagination-CaFfIWMG.js";import"./card-Dmnzt1A3.js";import"./text-DQLnxuwM.js";import"./flex-BwgO2pVc.js";import"./localized-decorator-BXyLeG3q.js";import"./popover.component-BtwVa47b.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DTAuV-L6.js";import"./icon.component-CpKlGttF.js";import"./context-menu.component-C8oV8U3q.js";import"./unwrap-slots-0pcPP_aL.js";import"./ref-DCs4urAp.js";import"./dot-grid-one-horizontal-DykEOcif.js";import"./menu-heading.component-B5hIMrk5.js";import"./dropdown.component-BvaAh-8k.js";import"./query-async-CYvYnejF.js";import"./form-control-host.style-CcuhFNiP.js";import"./form-control-header.component-C3MWs04V.js";import"./badge.component-721X2XQk.js";import"./flex.component-Daxs1y1T.js";import"./triangle-exclamation.component-C_s68iv9.js";import"./card.component-DO5dR8KV.js";import"./checkmark.component-BIUt3eeP.js";import"./rbcb-toggle.template-BfmiKqBe.js";import"./chevron-bottom.component-BNjaeYpX.js";import"./chevron-right-small.component-B-9EbCI6.js";import"./chevron-right.component-1LZ4BXp5.js";import"./input.component-BJxwtQ85.js";import"./textarea.component-B2umaUO0.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C-dQB73f.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
