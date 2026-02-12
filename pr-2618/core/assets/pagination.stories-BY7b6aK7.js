import{x as a}from"./iframe-D1501rwE.js";import"./pagination-CEUXf_F5.js";import"./card-BbLWJjBX.js";import"./text-xztMuV7h.js";import"./flex-BsqJUuWB.js";import"./localized-decorator-DH_n2Fgt.js";import"./popover.component-BUy_jdif.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D_fNzNeT.js";import"./icon.component-CBmASKX5.js";import"./context-menu.component-BJ_DadZe.js";import"./unwrap-slots-CB5lwgqv.js";import"./ref-C4lH9sgr.js";import"./dot-grid-one-horizontal-CnPqM-vx.js";import"./menu-heading.component-DFzC0KVc.js";import"./dropdown.component-C1aHGZGa.js";import"./query-async-C6mh_lGH.js";import"./form-control-host.style-gxUqE7WE.js";import"./form-control-header.component-B-Qasx45.js";import"./badge.component-DMwKNeY3.js";import"./flex.component-CRbuC2X4.js";import"./triangle-exclamation.component-A5kaeOWn.js";import"./card.component-CrOhynkA.js";import"./checkmark.component-DJSdelLo.js";import"./rbcb-toggle.template-CUy631A3.js";import"./chevron-bottom.component-BInhST6G.js";import"./chevron-right-small.component-i3rkZGTt.js";import"./chevron-right.component-YgmAKIYQ.js";import"./input.component-CMtAkCFN.js";import"./textarea.component-CsFtq4RR.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DeoEGzB2.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
