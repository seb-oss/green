import{x as a}from"./iframe-CA8kBw1Y.js";import"./pagination-CZk97FR9.js";import"./card-A4iLUxfL.js";import"./text-b_XvRBU7.js";import"./flex-D-TsX57F.js";import"./localized-decorator-ByhwzS7Z.js";import"./popover.component-CuRB3-fz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CQOcMzBo.js";import"./icon.component-Cm1_nEuM.js";import"./context-menu.component-DtgC1AOS.js";import"./unwrap-slots-C4HrBVu9.js";import"./ref-DQTYaZkf.js";import"./dot-grid-one-horizontal-DaZJGYQu.js";import"./menu-heading.component-DdntOQss.js";import"./dropdown.component-9ZT-vmhk.js";import"./query-async-BsktVRD7.js";import"./form-control-host.style-BCpTHyDJ.js";import"./form-control-header.component-CtfX6jHX.js";import"./badge.component-2fhVjfq2.js";import"./flex.component-CDbs7xdf.js";import"./triangle-exclamation.component-laVhXIjP.js";import"./card.component-DcGWAmkC.js";import"./checkmark.component-DBhwB9DT.js";import"./rbcb-toggle.template-Cp4uLKA1.js";import"./chevron-bottom.component-Bmiq2pKD.js";import"./chevron-right-small.component-SiHxRFtk.js";import"./chevron-right.component-BUSYW4IF.js";import"./input.component-D0PV0Va2.js";import"./textarea.component-CVz_croa.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-lZydlovT.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
