import{x as a}from"./iframe-VzA9xZxk.js";import"./pagination-Bf3TBDIw.js";import"./card-CaQWnynJ.js";import"./text-RTWexD8r.js";import"./flex-Bx_cgYYr.js";import"./localized-decorator-Bq_NlrVe.js";import"./popover.component-Bg6sQVdr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvVj-bX9.js";import"./icon.component-CXqjLzyD.js";import"./context-menu.component-YFO0OXUP.js";import"./unwrap-slots-1CP3EXP1.js";import"./ref-BkwuNWEz.js";import"./dot-grid-one-horizontal-DUeI4z8U.js";import"./menu-heading.component-DECtQfzQ.js";import"./dropdown.component-BzvgkjPH.js";import"./query-async-DoRZOF0v.js";import"./form-control-host.style-7av_CiQB.js";import"./form-control-header.component-DODRUrI7.js";import"./badge.component-DQdvDzIv.js";import"./flex.component-CtitCc60.js";import"./triangle-exclamation.component-Ddpw_ePI.js";import"./card.component-Dqs7PlX8.js";import"./checkmark.component-_9H2j-q4.js";import"./rbcb-toggle.template-Don4HNpP.js";import"./chevron-bottom.component-w5y5RvcS.js";import"./chevron-right-small.component-DE4utDD2.js";import"./chevron-right.component-DeeXiXIX.js";import"./input.component-D_CQE5pb.js";import"./textarea.component-7NaMQz65.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DvEDDb3-.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
