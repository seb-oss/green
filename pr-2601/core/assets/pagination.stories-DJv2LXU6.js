import{x as a}from"./iframe-C4uuVPzH.js";import"./pagination-zzhmFbJM.js";import"./card-BnbVFn-H.js";import"./text-79o4k6CO.js";import"./flex-CZgZROV0.js";import"./localized-decorator-Bep-fVVs.js";import"./popover.component-CG62K97A.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DaQtDsz0.js";import"./icon.component-BOdqx_Z5.js";import"./context-menu.component-SQ_EDJdz.js";import"./unwrap-slots-DkhAejeW.js";import"./ref-DgrieuU5.js";import"./dot-grid-one-horizontal-Dv2x7q1j.js";import"./menu-heading.component-DGgDaVw9.js";import"./dropdown.component-CYoYOd7G.js";import"./query-async-BQEYl374.js";import"./form-control-host.style-CHCwye6B.js";import"./form-control-header.component-0UHnrO6_.js";import"./badge.component-ov4ZrA5C.js";import"./flex.component-CnOoPqjX.js";import"./triangle-exclamation.component-CKLqpedP.js";import"./card.component-BQsfVdbK.js";import"./checkmark.component-DFDKDFwb.js";import"./rbcb-toggle.template-DCplSnOw.js";import"./chevron-bottom.component-Dc-iXEby.js";import"./chevron-right-small.component-kAVEOyIJ.js";import"./chevron-right.component-BeGySsxM.js";import"./input.component-CfBaiQKt.js";import"./textarea.component-DTAnE3no.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CqErZofN.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
