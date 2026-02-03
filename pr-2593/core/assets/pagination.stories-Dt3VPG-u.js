import{x as a}from"./iframe-LkT8NquK.js";import"./pagination-_Trv97QA.js";import"./card-BWtlthAr.js";import"./text-DQY7-3D7.js";import"./flex-oqJDwYhp.js";import"./localized-decorator-CuqxbbFR.js";import"./popover.component-C8i4UoS0.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BsYxiOB5.js";import"./icon.component-C7eGfAkH.js";import"./context-menu.component-BgIuD75_.js";import"./unwrap-slots-CChMzFWR.js";import"./ref-CUmfEANP.js";import"./dot-grid-one-horizontal-Cm_8kFyb.js";import"./menu-heading.component-clZNzHl-.js";import"./dropdown.component-w5vY3xtw.js";import"./query-async-DQH78lP7.js";import"./form-control-host.style-8pspAym2.js";import"./form-control-header.component-CVFxsMPj.js";import"./badge.component-CsSNhFfY.js";import"./flex.component-D5Os17a3.js";import"./triangle-exclamation.component-C_lz-hAE.js";import"./card.component-DomMnCME.js";import"./checkmark.component-Cfvp4TWv.js";import"./rbcb-toggle.template-CeAJJs49.js";import"./chevron-bottom.component-BYAKq1H1.js";import"./chevron-right-small.component-DS7_pV4P.js";import"./chevron-right.component-CEpec7X2.js";import"./input.component-ChDQLat_.js";import"./textarea.component-DbUHfsew.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Bceb0tr3.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
