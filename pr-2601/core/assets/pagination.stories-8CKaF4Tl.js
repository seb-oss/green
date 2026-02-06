import{x as a}from"./iframe-C0ENvUwZ.js";import"./pagination-BS5EDh8s.js";import"./card-NzAVlp-5.js";import"./text-BL9YguCs.js";import"./flex-DPhA-lU_.js";import"./localized-decorator-Bqx6JSBv.js";import"./popover.component-Bo1JWUG7.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BYyCG_qa.js";import"./icon.component-BDA8aQIq.js";import"./context-menu.component-CB8CBtCq.js";import"./unwrap-slots-DP01I9xu.js";import"./ref-DRI7ckJG.js";import"./dot-grid-one-horizontal-Dkayud2C.js";import"./menu-heading.component-DewLSjt-.js";import"./dropdown.component-DoaU-fmK.js";import"./query-async-DVNRTCDv.js";import"./form-control-host.style-DzZvhi8S.js";import"./form-control-header.component-DJ48-0vr.js";import"./badge.component-dCKNho8A.js";import"./flex.component-CrfzWcgs.js";import"./triangle-exclamation.component-CH7MvA4W.js";import"./card.component-BjlzAPJq.js";import"./checkmark.component-B-gBIeCC.js";import"./rbcb-toggle.template-BovhpWea.js";import"./chevron-bottom.component-DMDqqGwx.js";import"./chevron-right-small.component-FMVK1KP3.js";import"./chevron-right.component-lwAi8U48.js";import"./input.component-DEUljhL9.js";import"./textarea.component-CVwbpzWa.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-jMow2bj9.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
