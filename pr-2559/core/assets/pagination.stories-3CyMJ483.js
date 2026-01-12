import{x as r}from"./iframe-DXWmPRHc.js";import"./pagination-DIq3vFxG.js";import"./card-CrNEhggm.js";import"./text-Bl0ogAiA.js";import"./flex-B-_5FH9-.js";import"./localized-decorator-6pJKV14k.js";import"./popover.component-B9CWbhKy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DVQsmPaB.js";import"./icon.component-D4hHTvoO.js";import"./context-menu.component-CiiXq45k.js";import"./unwrap-slots-wgFXBPpD.js";import"./ref-tywtlUhY.js";import"./dot-grid-one-horizontal-CRdl2s-8.js";import"./menu-heading.component-okl83KVb.js";import"./dropdown.component-zABT-x9A.js";import"./query-async-DRCKWH5X.js";import"./form-control-host.style-DSE6oVD8.js";import"./form-control-header.component-c8HW1SFs.js";import"./badge.component-tQFMqmpl.js";import"./flex.component-CA_YrKCB.js";import"./triangle-exclamation.component-CW7q32Uh.js";import"./card.component-CSL_lt_n.js";import"./checkmark.component-D-9lsGwi.js";import"./rbcb-toggle.template-lZXdfVN1.js";import"./chevron-bottom.component-ByVbeTqf.js";import"./chevron-right-small.component-CnZVoEl6.js";import"./chevron-right.component-Cp9nlG16.js";import"./input.component-jzzxJ82O.js";import"./textarea.component-4A5BF-cn.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CgCi3xeb.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
