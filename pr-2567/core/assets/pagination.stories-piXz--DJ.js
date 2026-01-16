import{x as r}from"./iframe-DuVF6zVk.js";import"./pagination-BabONjCx.js";import"./card-CGH-LlWp.js";import"./text-BZaLyQX1.js";import"./flex-CBqihlny.js";import"./localized-decorator-DcHh67-O.js";import"./popover.component-vU4rAZWQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ir0LI5dt.js";import"./icon.component-BqgcTKSc.js";import"./context-menu.component-CooRYrB4.js";import"./unwrap-slots-DNuVVIog.js";import"./ref-Di_gRQDn.js";import"./dot-grid-one-horizontal-uqEPumH_.js";import"./menu-heading.component-G_WiFPWw.js";import"./dropdown.component-BJdyGyp0.js";import"./query-async-DN3-YlZy.js";import"./form-control-host.style-DyToj__S.js";import"./form-control-header.component-CEXpxl9g.js";import"./badge.component-BBqyjMB-.js";import"./flex.component-BwNBNAnb.js";import"./triangle-exclamation.component-C65L_cxn.js";import"./card.component-BgsBKdNt.js";import"./checkmark.component-DN4g3C3E.js";import"./rbcb-toggle.template-BqvjwR-3.js";import"./chevron-bottom.component-PJrDHnA0.js";import"./chevron-right-small.component-CfSIrGIN.js";import"./chevron-right.component-w_EtcCln.js";import"./input.component-BhsqH-A5.js";import"./textarea.component-Chlci76o.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DdbJf-w2.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
