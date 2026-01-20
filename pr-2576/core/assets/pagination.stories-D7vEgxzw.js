import{x as a}from"./iframe-DgD2fjN1.js";import"./pagination-CUlNSqey.js";import"./card-BmD8jQHF.js";import"./text-BqTZL6xg.js";import"./flex-Bkq2Loe3.js";import"./localized-decorator-WEI3dB5R.js";import"./popover.component-Bj62IjO1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CkkOmtzm.js";import"./icon.component-Hxs4rkhS.js";import"./context-menu.component-B1_aBZ3F.js";import"./unwrap-slots-BSpu2P4I.js";import"./ref-C3kBKanZ.js";import"./dot-grid-one-horizontal-CD-SOeYP.js";import"./menu-heading.component-CDt7bsjW.js";import"./dropdown.component-CRUNiQSu.js";import"./query-async-9jy6IDJB.js";import"./form-control-host.style-Ce-SWZSC.js";import"./form-control-header.component-D2v5yfSV.js";import"./badge.component-DX5FhhWB.js";import"./flex.component-B01_mVld.js";import"./triangle-exclamation.component-BHHjBdyF.js";import"./card.component-ByseI5GP.js";import"./checkmark.component-CEn0zE0p.js";import"./rbcb-toggle.template-BS-dYkpq.js";import"./chevron-bottom.component-DachHljt.js";import"./chevron-right-small.component-9tXK3Cgt.js";import"./chevron-right.component-DvoMJJYm.js";import"./input.component-DM8KH35H.js";import"./textarea.component-CoEcNadz.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-yEtprrs8.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
