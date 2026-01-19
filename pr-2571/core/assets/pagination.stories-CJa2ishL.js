import{x as a}from"./iframe-CGVjz2_e.js";import"./pagination-DInvms2L.js";import"./card-CgbkiNDT.js";import"./text-BVfPfYwA.js";import"./flex-BJVW4MmU.js";import"./localized-decorator-CnSFr7gy.js";import"./popover.component-B3TqAnDJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DRElvAQH.js";import"./icon.component-Dnah42s8.js";import"./context-menu.component-BoIYSNkb.js";import"./unwrap-slots-DA5BOF8R.js";import"./ref-BgqP-0YG.js";import"./dot-grid-one-horizontal-BLLzqiK6.js";import"./menu-heading.component-CK3w9QxU.js";import"./dropdown.component-DnidoXdy.js";import"./query-async-CsxdzFI-.js";import"./form-control-host.style-Vv-3iYKP.js";import"./form-control-header.component-D6F4z3MS.js";import"./badge.component-CpJu-jy8.js";import"./flex.component-tPhgzTIn.js";import"./triangle-exclamation.component-0DCTdmi0.js";import"./card.component-BR-VdkaL.js";import"./checkmark.component-B49MwxRP.js";import"./rbcb-toggle.template-BtKeatJh.js";import"./chevron-bottom.component-Cq7I5Ko3.js";import"./chevron-right-small.component-BgUtClFo.js";import"./chevron-right.component-aVQ3xCId.js";import"./input.component-Dl4wyCph.js";import"./textarea.component-DStP4DAs.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ncjlrQKp.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
