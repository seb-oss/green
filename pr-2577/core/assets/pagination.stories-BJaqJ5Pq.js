import{x as a}from"./iframe-Dju8L9ft.js";import"./pagination-BLWkhipK.js";import"./card-BMmCeVZE.js";import"./text-B_8so0kG.js";import"./flex-BDtaEnw3.js";import"./localized-decorator-CuXAXstt.js";import"./popover.component-y8_ONLDF.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BN4njoyB.js";import"./icon.component-CEYc1IuV.js";import"./context-menu.component-De35D8JG.js";import"./unwrap-slots-8X-Y51Aw.js";import"./ref-Ck10RQW2.js";import"./dot-grid-one-horizontal-BYa4HzBB.js";import"./menu-heading.component-CRjio7DB.js";import"./dropdown.component-ChFiXCLy.js";import"./query-async-ClIhVm7m.js";import"./form-control-host.style-D0iN_3eZ.js";import"./form-control-header.component-BgzRHBMM.js";import"./badge.component-D7FN6W-K.js";import"./flex.component-Cz6OeJgR.js";import"./triangle-exclamation.component-BforXQul.js";import"./card.component-B4Ap9MbW.js";import"./checkmark.component-Ch49CzP8.js";import"./rbcb-toggle.template-DNCDsEP9.js";import"./chevron-bottom.component-BkJHqS3F.js";import"./chevron-right-small.component-DruWp1eJ.js";import"./chevron-right.component-Dv8qKY2G.js";import"./input.component-Cwd32n9t.js";import"./textarea.component-ChCGLsT3.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CJnZpXBU.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
