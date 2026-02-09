import{x as a}from"./iframe-BW-l_IqU.js";import"./pagination-Bdr1Xmmp.js";import"./card-CvaM2tTZ.js";import"./text-yiX1z59m.js";import"./flex-2_Dtey6n.js";import"./localized-decorator-eSEGARO4.js";import"./popover.component-D1LnUqHJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C9qqoQ53.js";import"./icon.component-DgUzqp7i.js";import"./context-menu.component-C3mGtD-F.js";import"./unwrap-slots-D0gUCv-a.js";import"./ref-C-D6knMR.js";import"./dot-grid-one-horizontal-BmVQK5TW.js";import"./menu-heading.component-BhlbEHmk.js";import"./dropdown.component-Cvt-osYX.js";import"./query-async-Dzf06EcU.js";import"./form-control-host.style-DAoILSwF.js";import"./form-control-header.component-B85bF4G9.js";import"./badge.component-CmZok_l8.js";import"./flex.component-Dh0WZ1Jk.js";import"./triangle-exclamation.component-0cPvsNau.js";import"./card.component-CCdCM00n.js";import"./checkmark.component-D64NlXkr.js";import"./rbcb-toggle.template-DGokBaBV.js";import"./chevron-bottom.component-DJJrBYp6.js";import"./chevron-right-small.component-CwMz-kqv.js";import"./chevron-right.component-BfWPqmlN.js";import"./input.component-HV0jNozP.js";import"./textarea.component-CuNmaXLe.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BknD54WI.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
