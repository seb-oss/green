import{x as r}from"./iframe-UufRagcw.js";import"./pagination-CRbYIqTq.js";import"./card-DZpujI6Y.js";import"./text-DzeM1XLo.js";import"./flex-Bf8Phv6Q.js";import"./localized-decorator-BUoGUc6x.js";import"./popover.component-C-780sMV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BpA25poI.js";import"./icon.component-BoZS1-wn.js";import"./context-menu.component-Uq8NCt60.js";import"./unwrap-slots-eegXQQpu.js";import"./ref-CG0zXh2L.js";import"./dot-grid-one-horizontal-DpAPn45w.js";import"./menu-heading.component-B519XC8T.js";import"./dropdown.component-cDmtQVoL.js";import"./query-async-DOM1uY7s.js";import"./form-control-host.style-CZ6j9KRH.js";import"./form-control-header.component-3Zpsb8_s.js";import"./badge.component-CZ4Z_qYp.js";import"./flex.component-DIL_0UE4.js";import"./triangle-exclamation.component-CCTAGqwk.js";import"./card.component-DIqzDDlH.js";import"./checkmark.component-DTax0b0S.js";import"./rbcb-toggle.template-BY2EyQSV.js";import"./chevron-bottom.component-CxQKvgZ0.js";import"./chevron-right-small.component-DylUMqub.js";import"./chevron-right.component-CUFX68zy.js";import"./input.component-Cxz5tiSt.js";import"./textarea.component-CAQQgvzl.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-3ONHKknA.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
