import{x as r}from"./iframe-BWeeOOFi.js";import"./pagination-BW0nDHlj.js";import"./card-CWQEF0ke.js";import"./text-aYvwp6JV.js";import"./flex-B6C6sf3K.js";import"./localized-decorator-D8vTWa50.js";import"./popover.component-21dmsMlX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CfCmvJZY.js";import"./icon.component-DxBrhgMI.js";import"./context-menu.component-uIJxEihv.js";import"./unwrap-slots-CYX2dKt3.js";import"./ref-BqCbuYd_.js";import"./dot-grid-one-horizontal-Dttk5L7-.js";import"./menu-heading.component-BjtnjGpq.js";import"./dropdown.component-BMUFga4D.js";import"./query-async-BUCsGeNo.js";import"./form-control-host.style-CKev81KQ.js";import"./form-control-header.component-CoeM3sYx.js";import"./badge.component-B8rr833G.js";import"./flex.component-B-Kp0bU1.js";import"./triangle-exclamation.component-C3UwEFMt.js";import"./card.component-CoZNbfiW.js";import"./checkmark.component-BTtEqoEl.js";import"./rbcb-toggle.template-BtA3uzno.js";import"./chevron-bottom.component-DgB4wqQe.js";import"./chevron-right-small.component-Cp8SkP5w.js";import"./chevron-right.component-B_RJqjuP.js";import"./input.component-Dma-T5Ji.js";import"./textarea.component-CVCeabTF.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CDLmz-Jj.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
