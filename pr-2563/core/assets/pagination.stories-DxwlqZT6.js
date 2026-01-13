import{x as r}from"./iframe-CNFifxUN.js";import"./pagination-BSSyOHax.js";import"./card-Dzvo_EE7.js";import"./text-BzQmIpb5.js";import"./flex-BE0yi5Jb.js";import"./localized-decorator-BTZE8_rm.js";import"./popover.component-BdcIQFHp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-nsCVYnC9.js";import"./icon.component-6pI-3bW1.js";import"./context-menu.component-C7kXuqN-.js";import"./unwrap-slots-C7UIoqXm.js";import"./ref-DyaRmeqr.js";import"./dot-grid-one-horizontal-Dp1FnI8O.js";import"./menu-heading.component-CcwfDLjh.js";import"./dropdown.component-CulF4p4h.js";import"./query-async-ZzK6jajH.js";import"./form-control-host.style-DW2IikIC.js";import"./form-control-header.component-CJCKnW9_.js";import"./badge.component-SI4AbSa3.js";import"./flex.component-CEqnAFZd.js";import"./triangle-exclamation.component-DA-hRdSI.js";import"./card.component-BNTM-i5u.js";import"./checkmark.component-CnpLOGd9.js";import"./rbcb-toggle.template-DoT1fU3f.js";import"./chevron-bottom.component-DM9tr6_C.js";import"./chevron-right-small.component-C8Iukqcd.js";import"./chevron-right.component-ZCEfGNEy.js";import"./input.component-LYST4SR2.js";import"./textarea.component-3WHVRnN6.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CNHdqPyf.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
