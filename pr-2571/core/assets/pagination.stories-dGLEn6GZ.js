import{x as a}from"./iframe-D7VjMISI.js";import"./pagination-BW9d7Sf9.js";import"./card-BBfPIKLI.js";import"./text-BZBTFKz8.js";import"./flex-Dyho-Ak_.js";import"./localized-decorator-wImsTKZn.js";import"./popover.component-ChrTZmQf.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DvwDXVU3.js";import"./icon.component-B2LUsplm.js";import"./context-menu.component-9N9n3T5l.js";import"./unwrap-slots-BjsgvVOO.js";import"./ref-aHmutbMo.js";import"./dot-grid-one-horizontal-BZt7QMuK.js";import"./menu-heading.component-u_Q9aoep.js";import"./dropdown.component-gKAtnuvM.js";import"./query-async-Dlt4pAEt.js";import"./form-control-host.style-DbIN4kyr.js";import"./form-control-header.component-DrQSb_Bp.js";import"./badge.component-C_com9Ak.js";import"./flex.component-CSXFGaaj.js";import"./triangle-exclamation.component-ClATj6er.js";import"./card.component-CU7yc7CH.js";import"./checkmark.component-BFC20U_M.js";import"./rbcb-toggle.template-CdDul2TE.js";import"./chevron-bottom.component-BLtqviK2.js";import"./chevron-right-small.component-C5nGwGyd.js";import"./chevron-right.component-B3JnL-d1.js";import"./input.component-C31X67nl.js";import"./textarea.component-CJDv_h1a.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Tlo3N3X0.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
