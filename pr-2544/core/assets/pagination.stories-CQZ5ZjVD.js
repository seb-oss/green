import{x as a}from"./iframe-BKxXo2qK.js";import"./pagination-CB5jt32r.js";import"./card-C0svfWbe.js";import"./text-4o8oj9wp.js";import"./flex-R4MS0fhE.js";import"./localized-decorator-CDZGgK4X.js";import"./popover.component-Bd0vdsas.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-gGlsemlT.js";import"./icon.component-DfPxQLo0.js";import"./context-menu.component-CA56whFS.js";import"./unwrap-slots-CZ0lsjZ-.js";import"./ref-G7KfFjNh.js";import"./dot-grid-one-horizontal-Db6AZEw7.js";import"./menu-heading.component-2hX7c0mx.js";import"./dropdown.component-Bj_oBMMu.js";import"./query-async-4SKqjzJS.js";import"./form-control-host.style-BvDJrwPF.js";import"./form-control-header.component-BPXKGLro.js";import"./badge.component-BsxJm9hE.js";import"./flex.component-BmTGdA7s.js";import"./triangle-exclamation.component-CAI2YyeY.js";import"./card.component-D-D-6BvE.js";import"./checkmark.component-DIiPHbe6.js";import"./rbcb-toggle.template-DpM3uec2.js";import"./chevron-bottom.component-B9V8M40I.js";import"./chevron-right-small.component-DZaIhco9.js";import"./chevron-right.component-B740vksI.js";import"./input.component-DT2y-gJG.js";import"./textarea.component-Vqk0sFV0.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D8FRXQ3x.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
