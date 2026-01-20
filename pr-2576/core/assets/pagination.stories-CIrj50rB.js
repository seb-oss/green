import{x as a}from"./iframe-lN6_ugwX.js";import"./pagination-j46KOKP8.js";import"./card-CnRU_dqU.js";import"./text-BnyIwtG1.js";import"./flex-Dk-FlpcE.js";import"./localized-decorator-B52O1_F1.js";import"./popover.component-DM-Fqzl8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BGSqVWkt.js";import"./icon.component-BhPZNMJm.js";import"./context-menu.component-2IofZzqA.js";import"./unwrap-slots-BjzCuF6N.js";import"./ref-Ds3OdWY-.js";import"./dot-grid-one-horizontal-BC3jlQGJ.js";import"./menu-heading.component-DhlvZDm3.js";import"./dropdown.component-B_vPXQi-.js";import"./query-async-BBmbOmCq.js";import"./form-control-host.style-BPQLcSSP.js";import"./form-control-header.component-B-_IF6Au.js";import"./badge.component-BllOL3Hv.js";import"./flex.component-DPfdcRTn.js";import"./triangle-exclamation.component-BiVeg1b7.js";import"./card.component-POqCae3K.js";import"./checkmark.component-BO8BLaVm.js";import"./rbcb-toggle.template-5ZF_6MoX.js";import"./chevron-bottom.component-DfVDD5i-.js";import"./chevron-right-small.component-CzHepyQC.js";import"./chevron-right.component-BbBaVkNB.js";import"./input.component-BA9V68TS.js";import"./textarea.component-Bdn229wf.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BT95qZUT.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
