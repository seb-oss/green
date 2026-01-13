import{x as r}from"./iframe-Dhv-OfZF.js";import"./pagination-BzB8McKQ.js";import"./card-BJNQkEzK.js";import"./text-BsnbGYoF.js";import"./flex-D-9bf1Yd.js";import"./localized-decorator-CpXzMxQ1.js";import"./popover.component-RTfAGIUX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D9iXPUQZ.js";import"./icon.component-pSs68CpH.js";import"./context-menu.component-D6KWgZXO.js";import"./unwrap-slots-Dne5jdF6.js";import"./ref-BomApD5b.js";import"./dot-grid-one-horizontal-BpM3py1l.js";import"./menu-heading.component-D0_hn7_g.js";import"./dropdown.component-SiLgTAWn.js";import"./query-async-C4xHTT6q.js";import"./form-control-host.style-zm6rOXFn.js";import"./form-control-header.component-Bkmog4Bw.js";import"./badge.component-CtD6czE-.js";import"./flex.component-DvkXtIAD.js";import"./triangle-exclamation.component-BIondxtt.js";import"./card.component-B-_FoWIO.js";import"./checkmark.component-PK3tFqjS.js";import"./rbcb-toggle.template-DtDdd8PD.js";import"./chevron-bottom.component-x8HYVjXn.js";import"./chevron-right-small.component-C-QIRQJe.js";import"./chevron-right.component-BxguYXGb.js";import"./input.component-IggALGTG.js";import"./textarea.component-BzUPJQdC.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CEYW3sbr.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
