import{x as a}from"./iframe-D3LkGrTu.js";import"./pagination-DDbp2aXo.js";import"./card-DLwRJ7ia.js";import"./text-B-VazQsq.js";import"./flex-BFq8R8XN.js";import"./localized-decorator-B9Zts4yp.js";import"./popover.component-BbycZSjJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bh33xCXa.js";import"./icon.component-BGKmC-sG.js";import"./context-menu.component-Cm4Jyu_7.js";import"./unwrap-slots-D-BS7JUx.js";import"./ref-CXSVQ8-J.js";import"./dot-grid-one-horizontal-DffDIXet.js";import"./menu-heading.component-BlvvPB0a.js";import"./dropdown.component-KH2PCnww.js";import"./query-async-Df9s8pij.js";import"./form-control-host.style-UnwN4dPP.js";import"./form-control-header.component-DaaGaivf.js";import"./badge.component-D3GS4mu2.js";import"./flex.component-BNcfiOGN.js";import"./triangle-exclamation.component-U58N0vV1.js";import"./card.component-68vw3gHC.js";import"./checkmark.component-BsVz1wIr.js";import"./rbcb-toggle.template-DN40HB6B.js";import"./chevron-bottom.component-DALJJjN2.js";import"./chevron-right-small.component-iUZfy9Rf.js";import"./chevron-right.component-CkNcf4xk.js";import"./input.component-DLAG5IRo.js";import"./textarea.component-lj1-VFyS.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-De9gKBxa.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
