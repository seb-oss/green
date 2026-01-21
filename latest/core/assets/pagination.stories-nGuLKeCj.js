import{x as a}from"./iframe-CASzBLiX.js";import"./pagination-wU_S5gHv.js";import"./card-CJxwlhHO.js";import"./text-Xggf-v9T.js";import"./flex-CXMNz55T.js";import"./localized-decorator-DF6OGrp7.js";import"./popover.component-BWvH1eIw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3uZ6q8R.js";import"./icon.component-BY-elVrn.js";import"./context-menu.component-CvCc5FmQ.js";import"./unwrap-slots-gGUh70_S.js";import"./ref-B1BN-HNl.js";import"./dot-grid-one-horizontal-A6fsYWbA.js";import"./menu-heading.component-D268mlc3.js";import"./dropdown.component-BueQ07Vs.js";import"./query-async-JOtXqRwS.js";import"./form-control-host.style-By49Sw8r.js";import"./form-control-header.component-CtZlpb3T.js";import"./badge.component-CeD1F_hp.js";import"./flex.component-J9b9vMFV.js";import"./triangle-exclamation.component-CemM0Ldo.js";import"./card.component-qdMohuXC.js";import"./checkmark.component-DqJk4RJa.js";import"./rbcb-toggle.template-Z5XHI-SR.js";import"./chevron-bottom.component-DY0VYxqM.js";import"./chevron-right-small.component-BwXA0JJ5.js";import"./chevron-right.component-BVNaxx-x.js";import"./input.component-CTSPVCnq.js";import"./textarea.component-CsBTFt3d.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CaMl48YP.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
